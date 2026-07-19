// Civilian traffic (Part 8): ordinary cars driving the village loop at the speed
// limit. Same trick as the cop — each is a CarState driven by a controller that emits
// InputFrames, so they cost the netcode nothing beyond another entry in the players
// map and clients render them through the existing remote-interpolation path.
//
// The whole design goal is that they are NEVER the one who causes a crash: they pace
// whatever is in their lane, stop behind it, and lean on the horn if it's a player.
//
// They do NOT overtake. A civilian that finds something parked in its lane waits behind
// it indefinitely, which matters most when the obstacle is the cop: he stands frozen for
// the length of a traffic stop, and that clock runs to 9 minutes. Going around was built
// and cut — the manoeuvre needs a reverse, a latched commitment, and a body-clearance
// gate, and every version of it that reliably got past also clipped the car it was
// passing, which breaks the one rule these drivers exist to keep. A civilian queued
// behind a police car at a traffic stop reads as correct behaviour rather than a broken
// AI, so waiting is the better failure. If they ever should overtake, that is a
// deliberate feature with its own harness, not a patch on this one.
import { CarState, InputFrame } from './physics'
import { ParsedMap } from './map'
import { TILE } from './constants'
import {
  Waypoint, clamp, wrapAngle, dist, steerToward, speedControl, pointAhead, carAhead, followSpeed,
} from './driving'
import {
  RoadGraph, Route, buildRoadGraph, seatRoute, resetRoute, extendRoute, trimRoute,
  nearestOnGraph, routeSpawn, junctionAhead, junctionYield,
} from './roadgraph'

export interface TrafficBrain {
  id: string
  graph: RoadGraph // shared reference — the network these drivers route over
  route: Route // rolling path; re-chosen at every junction
  cruise: number // m/s free-flow speed for this driver
  tick: number
  blockedT: number // s held up by something in the lane ahead
  offroadT: number // s with all four wheels in the field
  honkCd: number // s until this driver will sound off again
  stuckT: number
  stuckTries: number
  reverseT: number
  wedgeT: number
  jamT: number // s held at a give-way line — breaks a mutual stand-off
  lastX: number
  lastZ: number
}

// Seven was tuned for one 844 m ring. The drivable network is now ~2.4 km once the
// highway and the town grid are in it, and seven cars spread over that met you about
// once a lap — the road read as empty. Fourteen restores roughly the old density per
// metre of road while covering three times as much of it.
//
// There is no oncoming split any more. Direction used to be a property of the driver
// because there was one ring and someone had to drive it backwards; now each picks its
// own way at every junction, so both directions fall out of route choice for free, and
// the lane offset (right of TRAVEL) puts opposing cars on opposite sides automatically.
export const TRAFFIC_COUNT = 14
// Just under the cop's 13 m/s patrol, so he's always the faster car on the road but
// closes at ~1 m/s and only rarely ends up queued behind one. Dropping this to 10 put
// him within 25 m of a civilian for 178 s of a 300 s patrol — technically correct,
// but it turns the village policeman into a man stuck in traffic. Varied per driver so
// they don't lock into a convoy holding a fixed gap forever.
const CRUISE = [12.2, 11.6, 12.6, 11.9]
const HONK_COOLDOWN = 3.5 // s — a warning, not a tantrum
const UNWEDGE_TIME = 10 // s of no displacement before we lift the car back onto the ring
// Digging out of a field. Full lock plus full throttle is what a naive controller asks
// for and it is the one thing that cannot work: the front tyres scrub sideways, the
// rears spin against a 0.45 traction budget, and the car makes 0.09 m/s while sitting
// at 100% throttle. Measured — it never escaped under its own power and only ever got
// home on the unwedge teleport. Less steering and less throttle is genuinely faster.
const OFFROAD_STEER = 0.5
const OFFROAD_THROTTLE = 0.45
const OFFROAD_REORIENT = 0.6 // rad of heading error past which reversing beats steering
const OFFROAD_SPEED = 6 // m/s to aim for while wallowing back to the tarmac
// Give up and lift the car back onto the ring. Longer while someone is close enough to
// watch it happen — a teleport nobody sees is free, one in front of a player is jarring.
const OFFROAD_GIVE_UP_SEEN = 20
const OFFROAD_GIVE_UP_UNSEEN = 8
const UNSEEN_DIST = 70

export function makeTrafficBrains(
  map: ParsedMap,
  count = TRAFFIC_COUNT,
  graph: RoadGraph = buildRoadGraph(map),
): TrafficBrain[] {
  // Spread them over every edge in the network rather than one ring, so the village,
  // the highway and the town all start with cars on them instead of the whole shift
  // filing out of the same corner.
  const edgeIds = [...graph.edges.keys()]
  const out: TrafficBrain[] = []
  for (let i = 0; i < count; i++) {
    out.push({
      id: `npc:car${i}`,
      graph,
      route: seatRoute(graph, i, count, edgeIds, 0x51ed),
      cruise: CRUISE[i % CRUISE.length],
      tick: 0,
      blockedT: 0,
      offroadT: 0,
      honkCd: 0,
      stuckT: 0,
      stuckTries: 0,
      reverseT: 0,
      wedgeT: 0,
      jamT: 0,
      lastX: 0,
      lastZ: 0,
    })
  }
  return out
}

// Lift the car back onto the road, facing along it. Shared by the wedge watchdog and
// the stranded-offroad give-up — both are "this driver is beyond self-help".
//
// It rejoins at the nearest point on the NETWORK, not the nearest point on its own
// route. A car that has been punted across a field may be nowhere near the road it was
// following, and snapping it back to a stale route would drag it across the map; it
// picks up whatever road it actually landed beside and gets a fresh route from there.
function relocate(brain: TrafficBrain, self: CarState): void {
  const near = nearestOnGraph(brain.graph, self.x, self.z)
  resetRoute(brain.route, brain.graph, near.edgeId, near.frac)
  const s = routeSpawn(brain.route)
  self.x = s.x
  self.z = s.z
  self.yaw = s.yaw
  self.vx = 0
  self.vz = 0
  self.yawRate = 0
  brain.lastX = self.x
  brain.lastZ = self.z
  brain.wedgeT = 0
  brain.stuckT = 0
  brain.reverseT = 0
  brain.offroadT = 0
  brain.jamT = 0
}

// On the road, already facing along it — same reason the cop needs this: yaw 0 points
// at whatever the map's +z happens to be, which is usually a hedge.
export function trafficSpawn(brain: TrafficBrain): { x: number; z: number; yaw: number } {
  return routeSpawn(brain.route)
}

export interface TrafficStepResult {
  input: InputFrame
  honk: boolean // fire the horn on the wire this tick
}

// One driver, one step. `others` = every other car on the road (players, the cop, the
// other civilians) keyed by id — ids starting with `npc:` are machines, and machines
// don't get honked at. Mutates brain. Pure of Math.random.
export function stepTrafficBrain(
  brain: TrafficBrain,
  self: CarState,
  others: Map<string, CarState>,
  dt: number,
): TrafficStepResult {
  brain.tick++
  brain.honkCd = Math.max(0, brain.honkCd - dt)
  const route = brain.route

  const input: InputFrame = {
    seq: brain.tick,
    steer: 0,
    throttle: 0,
    brake: 0,
    handbrake: false,
    headlights: true,
  }

  // --- who's in the way ---
  const ob = carAhead(self, others, 26, { path: route.path, from: route.wpIndex })
  const yieldTo = ob ? followSpeed(self, ob) : Infinity
  const blocked = yieldTo < brain.cruise - 0.5
  brain.blockedT = blocked ? brain.blockedT + dt : 0

  // Honk when a PLAYER is the thing we're braking for and it's a real intervention —
  // either we're closing on them fast or they've parked in the lane and we've come to
  // a stop behind them. Following politely at a steady distance is not honk-worthy.
  let honk = false
  if (ob && blocked && brain.honkCd === 0 && !ob.id.startsWith('npc:')) {
    const closing = self.speed - ob.theirSpeed
    if ((ob.gap < 12 && closing > 4) || (brain.blockedT > 1.5 && Math.abs(self.speed) < 2)) {
      honk = true
      brain.honkCd = HONK_COOLDOWN
    }
  }

  // --- stranded in a field ---
  // Knocked off the road by a player is a normal thing to happen to these cars, so
  // getting home under their own power is part of the job, not an error path.
  const wheelsOff = [self.surfFL, self.surfFR, self.surfRL, self.surfRR].filter((s) => s === 'offroad').length
  // Not "all four wheels in the field" — that misses the commonest way one of these ends
  // up stuck, which is straddling the edge with its nose on the tarmac and its back end
  // in the grass. In that pose it isn't stranded by this test, so normal lane-following
  // keeps the wheel at full lock and the throttle pinned, and the car sits there at
  // 0.1 m/s indefinitely. Any wheel off AND barely moving is the honest condition; the
  // speed gate is what stops a wheel clipping the verge mid-corner from counting.
  // `!blocked` matters: a car stopped with a wheel on the verge because it is correctly
  // yielding to someone is not stranded, and treating it as such hands the wheel to a
  // recovery routine that ignores the very car it was stopping for.
  const stranded = wheelsOff === 4 || (wheelsOff > 0 && !blocked && Math.abs(self.speed) < 2)
  brain.offroadT = stranded ? brain.offroadT + dt : 0
  if (stranded) {
    let nearestPlayer = Infinity
    for (const [id, o] of others) {
      if (id.startsWith('npc:') || o === self) continue
      nearestPlayer = Math.min(nearestPlayer, dist(self.x, self.z, o.x, o.z))
    }
    const giveUp = nearestPlayer > UNSEEN_DIST ? OFFROAD_GIVE_UP_UNSEEN : OFFROAD_GIVE_UP_SEEN
    if (brain.offroadT > giveUp) relocate(brain, self)
  }

  // --- wedge watchdog ---
  // Displacement-based, exactly like the cop's: the waypoint index is worthless here
  // because a car spun against a wall still chews through waypoints. Sitting in a queue
  // is not a wedge, so the timer only runs when nothing is blocking us.
  if (blocked) {
    brain.wedgeT = 0
    brain.lastX = self.x
    brain.lastZ = self.z
  } else if (dist(self.x, self.z, brain.lastX, brain.lastZ) > 6) {
    brain.lastX = self.x
    brain.lastZ = self.z
    brain.wedgeT = 0
  } else {
    brain.wedgeT += dt
    if (brain.wedgeT > UNWEDGE_TIME) relocate(brain, self)
  }

  // --- driving back to the road ---
  // Ahead of the generic reverse-recovery on purpose. That recovery arms after 1.6 s
  // under 0.7 m/s and then seizes the wheel for 1.8 s, which is less time than a car in
  // a field needs to kill its backward roll and get going forwards — so it re-reversed
  // the car every time, and the recovery spent twenty seconds fighting itself while
  // never sustaining a single clean run. Off-road traction was never the problem: a
  // straight-line pull at this same 0.45 throttle reaches 11 m/s and covers 34 m in six
  // seconds. Stranded driving owns the car outright, including its own reverse.
  //
  // Aim at the CLOSEST bit of road, not `pointAhead` from the stored index: out in a
  // field that index is stale and points off down the ring, so the car sets off across
  // country instead of rejoining the lane it fell out of. Steering and throttle are both
  // capped — see the constants; asking for everything is what pins it at 0.09 m/s.
  if (stranded) {
    let best = route.wpIndex
    let bestD = Infinity
    for (let k = 0; k < route.path.length; k++) {
      const d = dist(self.x, self.z, route.path[k].x, route.path[k].z)
      if (d < bestD) { bestD = d; best = k }
    }
    route.wpIndex = best
    const w = route.path[best]
    const ang = wrapAngle(Math.atan2(w.x - self.x, w.z - self.z) - self.yaw)
    if (Math.abs(ang) > OFFROAD_REORIENT) {
      // Pointing the wrong way: reverse to swing the nose round rather than trying to
      // drive an arc. Reverse is the only gear that works here. Steering a standing car
      // forwards scrubs the front tyres sideways and forward drive collapses to 0.01 m/s
      // — measured, at a healthy 45% throttle with the brakes off, for twelve solid
      // seconds. The identical throttle in a straight line reaches 11 m/s. Reversing
      // suffers none of it: full lock still pulls 2.1 m/s. So: reverse to aim, then
      // drive. steerToward already flips the geometry once we're rolling backwards.
      // Steer on the error measured from the car's TAIL, not its nose. steerToward is a
      // forward-driving law with a sign flip bolted on, so a target sitting directly
      // behind reads as the maximum possible heading error and it calls for full lock —
      // when the right answer is to back straight up. That one case is a car knocked
      // exactly backwards off the road, which is a completely ordinary way to be hit.
      const errRev = wrapAngle(Math.atan2(w.x - self.x, w.z - self.z) - self.yaw - Math.PI)
      input.brake = 1
      input.steer = clamp(errRev * 2.2, -1, 1)
      return { input, honk }
    }
    // Aimed roughly at the road — now feed the steering back in with speed, for the same
    // reason. A stationary car gets almost none, a rolling one can have the lot.
    const cap = clamp(Math.abs(self.speed) / 3, 0.12, OFFROAD_STEER)
    input.steer = clamp(steerToward(self, w.x, w.z), -cap, cap)
    // Still yield while recovering. Digging yourself out is not a licence to drive
    // through whoever knocked you off in the first place.
    const rec = speedControl(self, Math.min(OFFROAD_SPEED, yieldTo))
    input.throttle = Math.min(rec.throttle, OFFROAD_THROTTLE)
    input.brake = rec.brake
    return { input, honk }
  }

  // --- reverse recovery (beached on a verge / nosed into a wall) ---
  if (brain.reverseT > 0) {
    brain.reverseT -= dt
    input.brake = 1 // full: brake past standstill = reverse in this physics
    const wp0 = route.path[route.wpIndex]
    input.steer = (brain.stuckTries % 2 === 0 ? -1 : 1) * Math.abs(steerToward(self, wp0.x, wp0.z)) || 0.6
    return { input, honk }
  }
  if (!blocked && Math.abs(self.speed) < 0.7) {
    brain.stuckT += dt
    if (brain.stuckT > 1.6) {
      brain.reverseT = 1.8
      brain.stuckTries++
      brain.stuckT = 0
    }
  } else {
    brain.stuckT = 0
  }

  // --- lane following ---
  let wp = route.path[route.wpIndex]
  const reached = (w: Waypoint): boolean => {
    const d = dist(self.x, self.z, w.x, w.z)
    if (d < 2.6) return true
    const behind = (w.x - self.x) * Math.sin(self.yaw) + (w.z - self.z) * Math.cos(self.yaw) < 0
    return behind && d < TILE * 0.5
  }
  for (let guard = 0; guard < 4 && reached(wp) && route.wpIndex < route.path.length - 1; guard++) {
    route.wpIndex++
    wp = route.path[route.wpIndex]
  }
  // keep road ahead of us and drop what's behind — the route is rolling, not a ring
  extendRoute(route, brain.graph)
  trimRoute(route)

  // slow for what's coming, over a speed-scaled window of the path
  const np = route.path.length
  const look = clamp(Math.ceil((Math.abs(self.speed) * 1.8) / 3), 2, 10)
  let curve = 0
  let prevH = Math.atan2(wp.x - self.x, wp.z - self.z)
  for (let k = 1; k <= look; k++) {
    const a = route.path[Math.min(route.wpIndex + k - 1, np - 1)]
    const b = route.path[Math.min(route.wpIndex + k, np - 1)]
    const h = Math.atan2(b.x - a.x, b.z - a.z)
    curve += Math.abs(wrapAngle(h - prevH))
    prevH = h
  }

  // --- give way at the junction ahead ---
  // Only ever bites on the terminating arm of a T or at an all-way in town, and only
  // when something is actually coming — a driver on the through road carries on as
  // before. jamT is the stand-off breaker; see junctionYield.
  const jn = junctionAhead(route, brain.graph, self.x, self.z)
  const junctionCap = jn ? junctionYield(jn, brain.id, self, others, brain.jamT) : Infinity
  if (junctionCap < 0.5 && Math.abs(self.speed) < 1) brain.jamT += dt
  else if (junctionCap === Infinity) brain.jamT = 0

  const target = Math.min(brain.cruise * clamp(1 - curve * 0.3, 0.42, 1), yieldTo, junctionCap)

  const aim = pointAhead(route.path, route.wpIndex, self, clamp(5 + Math.abs(self.speed) * 0.85, 6, 20))
  input.steer = steerToward(self, aim.x, aim.z)
  const sc = speedControl(self, target)
  input.throttle = sc.throttle
  input.brake = sc.brake
  // Shared speedControl asks for err/6 throttle, floored at 0.25 — tuned for the cop,
  // who cruises fast enough that his error alone gets him moving. A civilian coming out
  // of a corner at 5 m/s has a small error, and 25% throttle will not pull it up the
  // village's hills: they averaged 27 km/h against a 38 km/h cruise and crawled some
  // climbs at 9. More authority only while genuinely under target — not more speed.
  if (!blocked && target - self.speed > 0.5) input.throttle = clamp((target - self.speed) / 3, 0.4, 1)
  // Stopped behind something: no throttle at all. speedControl's 0.15 "coast" term is
  // meant to stop a car creeping over its target, but at a target of zero it still
  // dribbles forward at ~0.1 m/s — invisible per frame, and enough to close a two metre
  // gap over forty seconds of waiting. A patient queue that ends in a nudge is still a
  // car that hit you.
  if (target < 0.5) input.throttle = 0
  // Nose-to-nose with something and still rolling: stand on it. speedControl won't brake
  // below 1 m/s (that's reverse in this physics), which is the right call everywhere
  // except the last metre before a bumper.
  //
  // The threshold has to be far below walking pace. The village has real elevation, so a
  // car held at a "stop" still rolls downhill at ~0.05 m/s — a rate that is invisible
  // frame to frame and closes two metres over a forty second wait, which is how a patient
  // queue still ended in a touch. Braking only while it's actually creeping forward means
  // the brake releases before it can drag the car into reverse.
  if (ob && ob.gap < 4 && self.speed > 0.05) {
    input.throttle = 0
    input.brake = self.speed > 0.5 ? 1 : 0.5 // enough to hold a hill, not enough to reverse off it
  }
  // Same hold at a give-way line, and for the same reason: speedControl won't brake
  // below 1 m/s, so a car "stopped" at a junction still rolls into it at walking pace —
  // which is the one place that turns a correct stop into a T-bone.
  if (junctionCap < 0.5 && self.speed > 0.05) {
    input.throttle = 0
    input.brake = self.speed > 0.5 ? 1 : 0.5
  }
  return { input, honk }
}

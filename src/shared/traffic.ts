// Civilian traffic (Part 8): ordinary cars driving the village loop at the speed
// limit. Same trick as the cop — each is a CarState driven by a controller that emits
// InputFrames, so they cost the netcode nothing beyond another entry in the players
// map and clients render them through the existing remote-interpolation path.
//
// The whole design goal is that they are NEVER the one who causes a crash: they pace
// whatever is in their lane, stop behind it, and lean on the horn if it's a player.
import { CarState, InputFrame } from './physics'
import { ParsedMap } from './map'
import { TILE } from './constants'
import {
  Waypoint, clamp, wrapAngle, dist, steerToward, speedControl, pointAhead, carAhead, followSpeed,
} from './driving'
import { buildPatrolPath } from './police'

export interface TrafficBrain {
  id: string
  path: Waypoint[]
  wpIndex: number
  cruise: number // m/s free-flow speed for this driver
  tick: number
  blockedT: number // s held up by something in the lane ahead
  honkCd: number // s until this driver will sound off again
  stuckT: number
  stuckTries: number
  reverseT: number
  wedgeT: number
  lastX: number
  lastZ: number
}

// Two is the sweet spot on a loop this size: enough that you meet oncoming headlights
// on most laps, few enough that they never form a rolling roadblock.
export const TRAFFIC_COUNT = 2
// Just under the cop's 13 m/s patrol, so he's always the faster car on the road but
// closes at ~1 m/s and only rarely ends up queued behind one. Dropping this to 10 put
// him within 25 m of a civilian for 178 s of a 300 s patrol — technically correct,
// but it turns the village policeman into a man stuck in traffic. Varied per driver so
// they don't lock into a convoy holding a fixed gap forever.
const CRUISE = [12.2, 11.6, 12.6, 11.9]
const HONK_COOLDOWN = 3.5 // s — a warning, not a tantrum
const UNWEDGE_TIME = 10 // s of no displacement before we lift the car back onto the ring

export function makeTrafficBrains(map: ParsedMap, count = TRAFFIC_COUNT): TrafficBrain[] {
  const path = buildPatrolPath(map)
  const out: TrafficBrain[] = []
  for (let i = 0; i < count; i++) {
    out.push({
      id: `npc:car${i}`,
      path,
      // spread evenly around the loop so they don't spawn nose-to-tail (or on the cop,
      // who starts at index 0)
      wpIndex: Math.floor((path.length * (i + 0.5)) / count),
      cruise: CRUISE[i % CRUISE.length],
      tick: 0,
      blockedT: 0,
      honkCd: 0,
      stuckT: 0,
      stuckTries: 0,
      reverseT: 0,
      wedgeT: 0,
      lastX: 0,
      lastZ: 0,
    })
  }
  return out
}

// On the ring, already facing along it — same reason the cop needs this: yaw 0 points
// at whatever the map's +z happens to be, which is usually a hedge.
export function trafficSpawn(brain: TrafficBrain): { x: number; z: number; yaw: number } {
  const a = brain.path[brain.wpIndex]
  const b = brain.path[(brain.wpIndex + 1) % brain.path.length]
  return { x: a.x, z: a.z, yaw: Math.atan2(b.x - a.x, b.z - a.z) }
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

  const input: InputFrame = {
    seq: brain.tick,
    steer: 0,
    throttle: 0,
    brake: 0,
    handbrake: false,
    headlights: true,
  }

  // --- who's in the way ---
  const ob = carAhead(self, others)
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
    if (brain.wedgeT > UNWEDGE_TIME) {
      const n0 = brain.path.length
      let best = 0
      let bestD = Infinity
      for (let k = 0; k < n0; k++) {
        const d = dist(self.x, self.z, brain.path[k].x, brain.path[k].z)
        if (d < bestD) { bestD = d; best = k }
      }
      const a = brain.path[best]
      const b = brain.path[(best + 1) % n0]
      self.x = a.x
      self.z = a.z
      self.yaw = Math.atan2(b.x - a.x, b.z - a.z)
      self.vx = 0
      self.vz = 0
      self.yawRate = 0
      brain.wpIndex = (best + 1) % n0
      brain.lastX = self.x
      brain.lastZ = self.z
      brain.wedgeT = 0
      brain.stuckT = 0
      brain.reverseT = 0
    }
  }

  // --- reverse recovery (beached on a verge / nosed into a wall) ---
  if (brain.reverseT > 0) {
    brain.reverseT -= dt
    input.brake = 1 // full: brake past standstill = reverse in this physics
    const wp0 = brain.path[brain.wpIndex]
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
  let wp = brain.path[brain.wpIndex]
  const reached = (w: Waypoint): boolean => {
    const d = dist(self.x, self.z, w.x, w.z)
    if (d < 2.6) return true
    const behind = (w.x - self.x) * Math.sin(self.yaw) + (w.z - self.z) * Math.cos(self.yaw) < 0
    return behind && d < TILE * 0.5
  }
  for (let guard = 0; guard < 4 && reached(wp); guard++) {
    brain.wpIndex = (brain.wpIndex + 1) % brain.path.length
    wp = brain.path[brain.wpIndex]
  }

  // slow for what's coming, over a speed-scaled window of the path
  const np = brain.path.length
  const look = clamp(Math.ceil((Math.abs(self.speed) * 1.8) / 3), 2, 10)
  let curve = 0
  let prevH = Math.atan2(wp.x - self.x, wp.z - self.z)
  for (let k = 1; k <= look; k++) {
    const a = brain.path[(brain.wpIndex + k - 1) % np]
    const b = brain.path[(brain.wpIndex + k) % np]
    const h = Math.atan2(b.x - a.x, b.z - a.z)
    curve += Math.abs(wrapAngle(h - prevH))
    prevH = h
  }
  const target = Math.min(brain.cruise * clamp(1 - curve * 0.3, 0.42, 1), yieldTo)

  const aim = pointAhead(brain.path, brain.wpIndex, self, clamp(5 + Math.abs(self.speed) * 0.85, 6, 20))
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
  // Nose-to-nose with something and still rolling: stand on it. speedControl won't brake
  // below 1 m/s (that's reverse in this physics), which is the right call everywhere
  // except the last metre before a bumper.
  if (ob && ob.gap < 2.5 && self.speed > 0.2) {
    input.throttle = 0
    input.brake = 1
  }
  return { input, honk }
}

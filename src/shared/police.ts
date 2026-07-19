// Police AI (Part 7): the cop is just another CarState driven by a controller
// that emits ordinary InputFrames — same physics, same netcode path as a player.
// Server-only stepping; clients render him as a remote player with extra flags.
import { CarState, InputFrame } from './physics'
import { ParsedMap } from './map'
import { TILE } from './constants'
import {
  Waypoint, clamp, wrapAngle, dist, steerToward, speedControl, pointAhead, carAhead, followSpeed,
} from './driving'
import {
  RoadGraph, Route, buildRoadGraph, seatRoute, resetRoute, extendRoute, trimRoute,
  nearestOnGraph, routeSpawn, junctionAhead, junctionYield, currentZone,
} from './roadgraph'

export type CopMode = 'patrol' | 'pursuit' | 'interrogate' | 'cooldown'

export type { Waypoint }

export interface CopBrain {
  id: string // 'npc:cop0' — matches the PlayerState key the room publishes
  officer: number // index into server/officers.ts OFFICERS — who is behind the wheel
  mode: CopMode
  graph: RoadGraph // shared reference — the network he patrols
  route: Route // rolling patrol route, re-chosen at every junction
  jamT: number // s held at a give-way line — breaks a mutual stand-off
  targetId: string // pursuit / interrogation target
  assistId: string // responding to another unit's call — see joinPursuit
  pinT: number // 0..PIN_TIME accumulated pin seconds
  disengageT: number // s target has been out of range
  cooldownT: number // s remaining before patrol resumes aggro checks
  stuckT: number // s of no progress
  stuckTries: number // reverse attempts — alternates the steer lock
  reverseT: number // s remaining of reverse-recovery
  wedgeT: number // s since he last actually moved — arms the unwedge
  lastX: number // last position that counted as progress
  lastZ: number
  tick: number
  // per-player memory: session offense counts (feeds interrogation facts + opening disposition)
  offenses: Map<string, number>
  immunity: Map<string, number> // player id → seconds of post-arrest immunity remaining
  // pursuit telemetry for the interrogation facts block
  chaseT: number
  targetTopSpeed: number
  hitSpeed: number
  hitWhileParked: boolean
}

export const PIN_TIME = 3 // s pinned before interrogation
export const PIN_DIST = 12.0 // m — he's got you boxed in, not touching bumpers
export const COP_STOP_V = 3 // m/s — allowance ON TOP of the target's speed (see the pin gate)
export const TARGET_STOP_V = 3.5 // 12.6 km/h — a slow roll still counts as pulled over
export const PIN_DECAY = 0.6 // pinT bleed-off per second when the hold breaks (was 2/s,
// which wiped several seconds of progress on any wobble and demanded a dead stop)
export const AGGRO_IMPULSE = 3.5 // m/s impact speed from collideCarPair to trigger pursuit
export const DISENGAGE_DIST = 150
export const DISENGAGE_TIME = 10
export const ARREST_IMMUNITY = 120 // s
export const UNWEDGE_TIME = 12 // s wedged with someone nearby before he's lifted back onto the ring
export const UNWEDGE_UNSEEN = 4 // ...but if nobody's near enough to see it, don't make them wait
export const UNSEEN_DIST = 70 // m — beyond this the teleport is nobody's business
export const WEDGE_PROGRESS = 6 // m of real travel that counts as "he's moving again"

export const COP_COUNT = 3 // three units on the night shift, one officer each
export const ASSIST_RANGE = 130 // m — a responder switches from driving to hunting

const PATROL_SPEED = 15 // m/s ≈ 54 km/h — still above the civilians' ~12
const TOWN_PATROL_SPEED = 9.5 // m/s ≈ 34 km/h — a shade over the civilians' town pace
const RESPOND_SPEED = 27 // m/s ≈ 97 km/h — blues-and-twos along the ring, not yet hunting
const PURSUIT_SPEED = 50 // just under player maxSpeed (52); rubber band does the rest
// The lane geometry that used to live here — sampling dirtCenterlinePoint and pushing
// the result out to the driving lane — now belongs to roadgraph.ts, which does it per
// network edge instead of once round map.loopOrder. The cop follows a route built from
// that graph, so he can leave the village loop the same way anyone else does.

// Where a cop starts his shift — on his route, ALREADY FACING along it. Spawning at
// yaw 0 points him at whatever the map's +z happens to be, which is usually a hedge,
// and he opens the session by reversing out of a garden.
export function copSpawn(brain: CopBrain): { x: number; z: number; yaw: number } {
  return routeSpawn(brain.route)
}

// `seat` of `seats` spreads the units over the network, so the shift starts scattered
// across the village, the highway and the town rather than as a three-car convoy
// leaving the same waypoint.
export function makeCopBrain(
  map: ParsedMap, id: string, officer: number, seat = 0, seats = 1,
  graph: RoadGraph = buildRoadGraph(map),
): CopBrain {
  return {
    id,
    officer,
    mode: 'patrol',
    graph,
    route: seatRoute(graph, seat, seats, [...graph.edges.keys()], 0xc0b1, 1),
    jamT: 0,
    targetId: '',
    assistId: '',
    pinT: 0,
    disengageT: 0,
    cooldownT: 0,
    stuckT: 0,
    stuckTries: 0,
    reverseT: 0,
    wedgeT: 0,
    lastX: 0,
    lastZ: 0,
    tick: 0,
    offenses: new Map(),
    immunity: new Map(),
    chaseT: 0,
    targetTopSpeed: 0,
    hitSpeed: 0,
    hitWhileParked: false,
  }
}

export interface CopStepResult {
  input: InputFrame
  pinnedNow: boolean // pin condition held this step
}

// One brain step. `players` = live sims (id → CarState). `traffic` = NPC civilians, which
// he must not rear-end but never pursues, interrogates or counts as a witness. Mutates
// brain. Pure of Math.random.
export function stepCopBrain(
  brain: CopBrain,
  cop: CarState,
  players: Map<string, CarState>,
  dt: number,
  traffic?: Map<string, CarState>,
): CopStepResult {
  brain.tick++
  const route = brain.route
  for (const [id, t] of brain.immunity) {
    const left = t - dt
    if (left <= 0) brain.immunity.delete(id)
    else brain.immunity.set(id, left)
  }

  const input: InputFrame = {
    seq: brain.tick,
    steer: 0,
    throttle: 0,
    brake: 0,
    handbrake: false,
    headlights: true,
  }
  let pinnedNow = false

  if (brain.mode === 'interrogate') {
    // frozen: the room zeroes velocities; brain just idles
    return { input, pinnedNow: false }
  }

  if (brain.mode === 'cooldown') {
    brain.cooldownT -= dt
    if (brain.cooldownT <= 0) brain.mode = 'patrol'
  }

  // --- what's in his lane ---
  // Computed up here, not down in the patrol block, because being stopped behind a car
  // has to be distinguishable from being STUCK. Without that distinction he pulls up
  // behind a parked driver, the reverse-recovery decides he's wedged, backs him up and
  // drives him forward again — straight into the bumper he'd just correctly stopped for.
  const onPatrol = brain.mode === 'patrol' || brain.mode === 'cooldown'
  const laneAhead = onPatrol
    ? carAhead(cop, traffic?.size ? new Map([...players, ...traffic]) : players, 26, {
        path: route.path,
        from: route.wpIndex,
      })
    : null
  const laneSpeed = laneAhead ? followSpeed(cop, laneAhead) : Infinity
  const yielding = laneSpeed < PATROL_SPEED - 0.5

  // --- give way at the junction ahead ---
  // Up here with the lane check, and for the same reason: a unit stopped at a give-way
  // line has nothing in his lane, so without this the watchdogs below read a correctly
  // waiting car as a wedged one and reverse him into the junction he was waiting at.
  // NOT while responding to a call — blues-and-twos is exactly the exemption it looks
  // like, and a responder that stops dead at every junction never arrives.
  const jn = onPatrol && !brain.assistId ? junctionAhead(route, brain.graph, cop.x, cop.z) : null
  const junctionCap = jn
    ? junctionYield(jn, brain.id, cop, traffic?.size ? new Map([...players, ...traffic]) : players, brain.jamT)
    : Infinity
  const waiting = junctionCap < 0.5
  if (waiting && Math.abs(cop.speed) < 1) brain.jamT += dt
  else if (junctionCap === Infinity) brain.jamT = 0

  // --- wedge watchdog ---
  // Measured on REAL DISPLACEMENT, not the waypoint index. The index is worthless
  // here: `reached()` also accepts a waypoint that's merely *behind* him, so a cop
  // spun around against a wall chews through waypoints without moving an inch and
  // resets the timer forever — which is exactly how he stayed stuck. This block sits
  // ahead of the reverse-recovery return so it keeps ticking during recovery too.
  // Nearest player: gates both the "is anyone watching" teleport and the hold check.
  let nearest = Infinity
  for (const t of players.values()) nearest = Math.min(nearest, dist(cop.x, cop.z, t.x, t.z))
  // Skipped whenever he's SUPPOSED to be stationary — mid-pin, or crawling the last
  // few metres onto a stopped target. Standing still there is the job, not a wedge;
  // without this he teleports away in the middle of pulling you over.
  // Narrow on purpose: only a genuine pin approach counts — close to a target that is
  // ALREADY slow. Keying it off distance alone (PIN_DIST*3 = 27m) would exempt a cop
  // wedged anywhere near a fleeing driver and hand back the stuck-forever bug.
  const tgt = brain.mode === 'pursuit' ? players.get(brain.targetId) : undefined
  // `yielding` counts as holding: waiting behind stopped traffic is the correct thing
  // to be doing, and letting the watchdog run there teleports him out of a queue.
  const holding = yielding || waiting || brain.pinT > 0 || (!!tgt && nearest < PIN_DIST + 4 && Math.abs(tgt.speed) < TARGET_STOP_V)
  if (holding) {
    brain.wedgeT = 0
    brain.lastX = cop.x
    brain.lastZ = cop.z
  } else {
    if (dist(cop.x, cop.z, brain.lastX, brain.lastZ) > WEDGE_PROGRESS) {
      brain.lastX = cop.x
      brain.lastZ = cop.z
      brain.wedgeT = 0
    } else {
      brain.wedgeT += dt
    }
    // a teleport nobody witnesses is free; one in front of a player is jarring, so
    // give the reverse-recovery longer to work it out while someone is watching
    if (brain.wedgeT > (nearest > UNSEEN_DIST ? UNWEDGE_UNSEEN : UNWEDGE_TIME)) {
      // Rejoin the NETWORK at whatever road he's actually beside, on a fresh route —
      // not the nearest point of his own stale one, which after a pursuit can be the
      // far side of the map from where he ended up.
      const near = nearestOnGraph(brain.graph, cop.x, cop.z)
      resetRoute(route, brain.graph, near.edgeId, near.frac)
      const s = routeSpawn(route)
      cop.x = s.x
      cop.z = s.z
      cop.yaw = s.yaw
      cop.vx = 0
      cop.vz = 0
      cop.yawRate = 0
      brain.lastX = cop.x
      brain.lastZ = cop.z
      brain.wedgeT = 0
      brain.stuckT = 0
      brain.reverseT = 0
      brain.jamT = 0
    }
  }

  // --- reverse recovery ---
  if (brain.reverseT > 0) {
    brain.reverseT -= dt
    input.brake = 1 // full: brake past standstill = reverse in this physics
    // alternate the steer each attempt — repeating the same lock just re-wedges him
    const wp0 = route.path[route.wpIndex]
    input.steer = (brain.stuckTries % 2 === 0 ? -1 : 1) * Math.abs(steerToward(cop, wp0.x, wp0.z)) || 0.6
    return { input, pinnedNow: false }
  }
  // `holding` again: creeping onto a stopped target is under 0.7 m/s by design, and
  // without this the recovery reads it as a wedge and reverses him away from the
  // driver he's trying to pull over — he'd stall ~8 m short and never pin.
  const wantsMotion = !holding && (brain.mode === 'pursuit' || brain.mode === 'patrol' || brain.mode === 'cooldown')
  if (wantsMotion && Math.abs(cop.speed) < 0.7) {
    brain.stuckT += dt
    if (brain.stuckT > 1.6) {
      brain.reverseT = 1.8 // longer + full lock: 0.7 brake barely backed him off
      brain.stuckTries++
      brain.stuckT = 0
    }
  } else {
    brain.stuckT = 0
  }

  // --- responding to another unit's call ---
  // A responder does NOT go straight to pursuit. Pursuit steers pure-dead-reckoned at
  // the target, which from the far side of the village aims him through three gardens
  // and a pub; and at 400 m he is past DISENGAGE_DIST, so he would give up before he
  // ever arrived — which is exactly what the shift did in testing. Instead he stays on
  // the patrol ring with the lights on, driving it hard, and only converts to a real
  // pursuit once the target is close enough for pure pursuit to mean anything.
  if (brain.assistId) {
    const t = players.get(brain.assistId)
    if (!t) brain.assistId = ''
    else if (dist(cop.x, cop.z, t.x, t.z) < ASSIST_RANGE) {
      brain.mode = 'pursuit'
      brain.targetId = brain.assistId
      brain.assistId = ''
      brain.disengageT = 0
      brain.pinT = 0
    }
  }

  if (brain.mode === 'pursuit') {
    const target = players.get(brain.targetId)
    if (!target) {
      brain.mode = 'cooldown'
      brain.cooldownT = 3
      return { input, pinnedNow: false }
    }
    brain.chaseT += dt
    brain.targetTopSpeed = Math.max(brain.targetTopSpeed, Math.abs(target.speed))

    const d = dist(cop.x, cop.z, target.x, target.z)

    // disengage
    if (d > DISENGAGE_DIST) {
      brain.disengageT += dt
      if (brain.disengageT > DISENGAGE_TIME) {
        brain.mode = 'cooldown'
        brain.cooldownT = 5
        brain.targetId = ''
        return { input, pinnedNow: false }
      }
    } else brain.disengageT = 0

    // intercept point: lead the target; at close range aim the rear quarter (PIT)
    const lead = d < 10 ? 0.15 : 0.6
    let px = target.x + target.vx * lead
    let pz = target.z + target.vz * lead
    if (d < 10) {
      const tSin = Math.sin(target.yaw), tCos = Math.cos(target.yaw)
      px -= tSin * 1.4 // rear quarter, biased to the cop's side
      pz -= tCos * 1.4
      const side = Math.sign((cop.x - target.x) * tCos - (cop.z - target.z) * tSin) || 1
      px += tCos * 0.7 * side
      pz += -tSin * 0.7 * side
    }
    input.steer = steerToward(cop, px, pz, 2.6)

    // rubber band: hungrier when far, politer when breathing down the neck
    const band = d > 80 ? 1.08 : d < 15 ? 0.95 : 1
    // Closing in, match the target's pace rather than the chase speed — the margin
    // tapers with distance so he settles to a crawl behind a stopped car. Without
    // this he charges a parked target at 160 km/h forever and can never pin.
    let want = PURSUIT_SPEED * band
    if (d < 25) want = Math.min(want, Math.abs(target.speed) + d * 0.35)
    const sc = speedControl(cop, want)
    input.throttle = sc.throttle
    input.brake = sc.brake
    // corner like a cop who's done this before: handbrake when the turn error is big at speed
    if (Math.abs(input.steer) > 0.85 && Math.abs(cop.speed) > 16) input.handbrake = true

    // --- pin condition ---
    // The cop's gate is RELATIVE to the target, not absolute. Pacing a rolling car he
    // drives at target.speed + a closing margin, so an absolute cap meant a driver
    // trundling at 8 km/h put the COP over the limit and the pin never armed — it
    // looked like your speed was the problem when it was his.
    if (d < PIN_DIST && Math.abs(cop.speed) < COP_STOP_V + Math.abs(target.speed) && Math.abs(target.speed) < TARGET_STOP_V) {
      brain.pinT += dt
      pinnedNow = true
      // creep against the target to hold the pin
      input.throttle = 0.12
      input.steer = steerToward(cop, target.x, target.z, 1.5)
    } else {
      brain.pinT = Math.max(0, brain.pinT - PIN_DECAY * dt)
    }
    return { input, pinnedNow }
  }

  // --- patrol / cooldown driving ---
  let wp = route.path[route.wpIndex]
  // Advance when reached, or when it's slipped behind him (overshot on a corner) —
  // the dirt samples sit ~3 m apart, so the radius must stay under that or he skips
  // waypoints and straight-lines off the curve he's meant to be following.
  const reached = (w: Waypoint): boolean => {
    const d = dist(cop.x, cop.z, w.x, w.z)
    if (d < 2.6) return true
    const behind = (w.x - cop.x) * Math.sin(cop.yaw) + (w.z - cop.z) * Math.cos(cop.yaw) < 0
    return behind && d < TILE * 0.5
  }
  for (let guard = 0; guard < 4 && reached(wp) && route.wpIndex < route.path.length - 1; guard++) {
    route.wpIndex++
    wp = route.path[route.wpIndex]
  }
  // keep road ahead of him and drop what's behind — the route is rolling, not a ring,
  // and this is what turns "one more waypoint" into "pick a way at the next junction"
  extendRoute(route, brain.graph)
  trimRoute(route)
  // Curvature over a speed-scaled lookahead window, not just the next waypoint:
  // the samples sit ~3 m apart, so one-ahead is ~0.2 s of warning at patrol speed
  // and he arrives at a 7.8 m corner arc still doing 54 km/h. Roughly 1.8 s of
  // travel gives him room to brake down to a speed the corner's grip allows.
  const np = route.path.length
  const look = clamp(Math.ceil((Math.abs(cop.speed) * 1.8) / 3), 2, 10)
  let curve = 0
  let prevH = Math.atan2(wp.x - cop.x, wp.z - cop.z)
  for (let k = 1; k <= look; k++) {
    const a = route.path[Math.min(route.wpIndex + k - 1, np - 1)]
    const b = route.path[Math.min(route.wpIndex + k, np - 1)]
    const h = Math.atan2(b.x - a.x, b.z - a.z)
    curve += Math.abs(wrapAngle(h - prevH))
    prevH = h
  }
  // Off duty he shares the lane with everyone else, and he patrols faster than the
  // civilians drive — without this he simply drives through the back of the traffic he's
  // supposed to be policing, and rear-ends any player pootling along in front of him.
  // Players count here as well as civilians: running into the back of you at 47 km/h is
  // exactly the kind of contact that then makes it YOUR problem, since a hard enough
  // knock trips onCopHit and he pursues you for a collision he caused. `laneAhead` is
  // null in pursuit — nothing yields mid-chase, least of all to the car he's chasing.
  // Responding to a call he drives the same ring, considerably faster. Still capped by
  // `laneSpeed`: arriving at a shout is no excuse for going through the back of a
  // civilian, and a pile-up in the village is how a responder becomes the incident.
  // Same town limit the civilians keep, for the same reasons — except when he's
  // responding to a shout, which is the one time a police car is entitled to press on.
  const zone = currentZone(route, brain.graph)
  const cruise = brain.assistId ? RESPOND_SPEED
    : zone === 'town' ? Math.min(PATROL_SPEED, TOWN_PATROL_SPEED) : PATROL_SPEED

  const targetSpeed = Math.min(cruise * clamp(1 - curve * 0.3, 0.42, 1), laneSpeed, junctionCap)

  const aim = pointAhead(route.path, route.wpIndex, cop, clamp(5 + Math.abs(cop.speed) * 0.85, 6, 20))
  input.steer = steerToward(cop, aim.x, aim.z)
  const sc = speedControl(cop, targetSpeed)
  input.throttle = sc.throttle
  input.brake = sc.brake
  // Same standstill creep the civilians have: speedControl's 0.15 coast term dribbles him
  // forward at a rate too small to see and large enough to close the gap over a long wait,
  // and the village's slopes roll him on top of that. Hold the car instead.
  if (targetSpeed < 0.5) input.throttle = 0
  if (laneAhead && laneAhead.gap < 4 && cop.speed > 0.05) {
    input.throttle = 0
    input.brake = cop.speed > 0.5 ? 1 : 0.5
  }
  // Hold at a give-way line for the same reason — below 1 m/s speedControl stops
  // braking, and a car that rolls into a junction at walking pace still gets T-boned.
  if (junctionCap < 0.5 && cop.speed > 0.05) {
    input.throttle = 0
    input.brake = cop.speed > 0.5 ? 1 : 0.5
  }
  return { input, pinnedNow: false }
}

// Called by the room when collideCarPair(cop, player) reports an impact.
export function onCopHit(brain: CopBrain, playerId: string, impactSpeed: number, copSpeed: number): boolean {
  if (brain.mode === 'interrogate') return false
  if (brain.immunity.has(playerId)) return false
  if (impactSpeed < AGGRO_IMPULSE) return false
  // Already chasing this driver: every bump of the PIT is not a fresh offence.
  // Without this the cop re-aggros on his own contact several times a chase —
  // re-firing the siren + toast, and inflating `offenses`, which feeds
  // priorOffenses into the stop and drops Bram's opening disposition to the
  // arrest floor before you've said a word.
  if (brain.mode === 'pursuit' && brain.targetId === playerId) return false // traffic nudge: horn, no lights
  brain.offenses.set(playerId, (brain.offenses.get(playerId) ?? 0) + 1)
  brain.hitSpeed = impactSpeed
  brain.hitWhileParked = Math.abs(copSpeed) < 1.5
  brain.targetId = playerId
  brain.mode = 'pursuit'
  brain.pinT = 0
  brain.disengageT = 0
  brain.chaseT = 0
  brain.targetTopSpeed = 0
  return true
}

// One unit calls it in and the whole shift responds. The caller broadcasts this to
// every OTHER brain; it is deliberately not a no-op for a cop already chasing someone
// else — there are only ever a few drivers out here at 2 AM, and a pursuit in progress
// is the most interesting thing on the radio.
//
// The joining unit gets the target but NOT the telemetry: chaseT, hitSpeed and
// hitWhileParked stay with whoever was actually hit, because those are the facts read
// out at the stop. A responder inherits an empty chase clock and, if he is the one who
// ends up pinning, the room copies the originating unit's numbers across.
export function joinPursuit(brain: CopBrain, targetId: string): boolean {
  if (brain.mode === 'interrogate') return false // he has someone at the window already
  if (brain.mode === 'pursuit' && brain.targetId === targetId) return false
  if (brain.immunity.has(targetId)) return false // just booked them — let them go
  brain.assistId = targetId // stepCopBrain promotes this to a real pursuit within ASSIST_RANGE
  brain.mode = 'patrol' // cancels any cooldown so he moves off now, not in five seconds
  brain.chaseT = 0
  brain.targetTopSpeed = 0
  return true
}

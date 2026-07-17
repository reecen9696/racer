// Police AI (Part 7): the cop is just another CarState driven by a controller
// that emits ordinary InputFrames — same physics, same netcode path as a player.
// Server-only stepping; clients render him as a remote player with extra flags.
import { CarState, InputFrame } from './physics'
import { ParsedMap, RoadTile, dirtCenterlinePoint } from './map'
import { TILE } from './constants'

export type CopMode = 'patrol' | 'pursuit' | 'interrogate' | 'cooldown'

export interface Waypoint { x: number; z: number }

export interface CopBrain {
  mode: CopMode
  path: Waypoint[] // lane-offset patrol ring built from map.loopOrder
  wpIndex: number
  targetId: string // pursuit / interrogation target
  pinT: number // 0..PIN_TIME accumulated pin seconds
  disengageT: number // s target has been out of range
  cooldownT: number // s remaining before patrol resumes aggro checks
  stuckT: number // s of no progress
  reverseT: number // s remaining of reverse-recovery
  noProgressT: number // s since the patrol waypoint last advanced — arms the unwedge
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

export const PIN_TIME = 5 // s pinned before interrogation
export const PIN_DIST = 6.0 // m — he's holding you, not touching bumpers
export const COP_STOP_V = 3 // m/s
export const TARGET_STOP_V = 3.5 // ≈12 km/h — a slow roll still counts as pulled over
export const PIN_DECAY = 0.6 // pinT bleed-off per second when the hold breaks (was 2/s,
// which wiped several seconds of progress on any wobble and demanded a dead stop)
export const AGGRO_IMPULSE = 3.5 // m/s impact speed from collideCarPair to trigger pursuit
export const DISENGAGE_DIST = 150
export const DISENGAGE_TIME = 10
export const ARREST_IMMUNITY = 120 // s
export const UNWEDGE_TIME = 14 // s of zero patrol progress before he's lifted back onto the ring

const PATROL_SPEED = 13 // m/s ≈ 47 km/h
const PURSUIT_SPEED = 46 // just under player maxSpeed; rubber band does the rest
const LANE_OFFSET = 2.1 // m right of centerline

const clamp = (v: number, lo: number, hi: number) => (v < lo ? lo : v > hi ? hi : v)
const wrapAngle = (a: number) => {
  while (a > Math.PI) a -= Math.PI * 2
  while (a < -Math.PI) a += Math.PI * 2
  return a
}

const TILE_SAMPLES = 5 // per tile — corners are quarter arcs, so straight-lining cuts them

// Build the patrol ring from the road's real centerline, offset to the driving lane.
// Right-of-travel = (cos h, -sin h) for heading h in our (sin, cos) forward frame.
//
// `dirtCenterlinePoint` is named for the dirt section but is generic tile geometry:
// with S_AMP at 0 it returns a dead-straight line through straights and a quarter
// arc through corners — i.e. the actual road, on every surface. Sampling it beats
// tile-center + midpoint, which cuts every corner diagonally and throws the cop
// into the hedge at patrol speed. T/cross tiles have >2 arms and no single arc, so
// they keep the center+midpoint treatment.
export function buildPatrolPath(map: ParsedMap): Waypoint[] {
  const tiles: RoadTile[] = map.loopOrder
  const out: Waypoint[] = []
  const n = tiles.length
  const offset = (x: number, z: number, h: number): Waypoint => ({
    x: x + Math.cos(h) * LANE_OFFSET,
    z: z - Math.sin(h) * LANE_OFFSET,
  })
  for (let i = 0; i < n; i++) {
    const t = tiles[i]
    const next = tiles[(i + 1) % n]
    const h = Math.atan2(next.x - t.x, next.z - t.z)

    if (t.piece === 'straight' || t.piece === 'corner') {
      // the centerline's own u direction is arbitrary — walk it whichever way
      // actually heads toward the next tile
      const [x0, z0] = dirtCenterlinePoint(t, 0)
      const [x1, z1] = dirtCenterlinePoint(t, 1)
      const forward = dist(x1, z1, next.x, next.z) <= dist(x0, z0, next.x, next.z)
      for (let k = 0; k < TILE_SAMPLES; k++) {
        const s = (k + 0.5) / TILE_SAMPLES
        const u = forward ? s : 1 - s
        const [px, pz] = dirtCenterlinePoint(t, u)
        // local tangent, so the lane offset stays perpendicular through the curve
        const [qx, qz] = dirtCenterlinePoint(t, clamp(forward ? u + 0.06 : u - 0.06, 0, 1))
        const th = Math.atan2(qx - px, qz - pz)
        out.push(offset(px, pz, th))
      }
      continue
    }

    out.push(offset(t.x, t.z, h))
    // midpoint waypoint keeps pure pursuit honest across 15.5 m tiles
    out.push(offset((t.x + next.x) / 2, (t.z + next.z) / 2, h))
  }
  return out
}

// Where the cop starts his shift — on the ring, ALREADY FACING along it. Spawning
// him at yaw 0 points him at whatever the map's +z happens to be, which is usually
// a hedge, and he opens the session by reversing out of a garden.
export function copSpawn(brain: CopBrain): { x: number; z: number; yaw: number } {
  const a = brain.path[0]
  const b = brain.path[1 % brain.path.length]
  return { x: a.x, z: a.z, yaw: Math.atan2(b.x - a.x, b.z - a.z) }
}

export function makeCopBrain(map: ParsedMap): CopBrain {
  return {
    mode: 'patrol',
    path: buildPatrolPath(map),
    wpIndex: 0,
    targetId: '',
    pinT: 0,
    disengageT: 0,
    cooldownT: 0,
    stuckT: 0,
    reverseT: 0,
    noProgressT: 0,
    tick: 0,
    offenses: new Map(),
    immunity: new Map(),
    chaseT: 0,
    targetTopSpeed: 0,
    hitSpeed: 0,
    hitWhileParked: false,
  }
}

// steer toward a world point; returns shaped steer input in -1..1
function steerToward(cop: CarState, px: number, pz: number, gain = 2.2): number {
  const heading = Math.atan2(px - cop.x, pz - cop.z)
  const err = wrapAngle(heading - cop.yaw)
  // reversing flips steering geometry
  const dir = cop.speed < -0.5 ? -1 : 1
  return clamp(err * gain * dir, -1, 1)
}

function dist(ax: number, az: number, bx: number, bz: number): number {
  return Math.hypot(ax - bx, az - bz)
}

// Pure pursuit aims at a point a speed-scaled distance DOWN the path, never at the
// next waypoint: the samples are ~3 m apart, so aiming at the nearest one is a 0.2 s
// lookahead at patrol speed — the cop saws at the wheel and washes wide out of every
// corner. Roughly a second of travel makes him track the ring cleanly at 47 km/h.
function pointAhead(brain: CopBrain, cop: CarState, ahead: number): Waypoint {
  const n = brain.path.length
  let acc = 0
  let px = cop.x, pz = cop.z
  for (let k = 0; k < 30; k++) {
    const w = brain.path[(brain.wpIndex + k) % n]
    acc += dist(px, pz, w.x, w.z)
    if (acc >= ahead) return w
    px = w.x
    pz = w.z
  }
  return brain.path[(brain.wpIndex + 29) % n]
}

// throttle/brake toward a target speed. Braking below walking pace is suppressed:
// brake past standstill means REVERSE in this physics, so a hard stop would otherwise
// trundle him backwards down the lane.
function speedControl(cop: CarState, target: number): { throttle: number; brake: number } {
  const err = target - cop.speed
  if (err > 0.5) return { throttle: clamp(err / 6, 0.25, 1), brake: 0 }
  // /4 not /10: a 2.6 m/s overspeed used to ask for 26% brake, which is a coast —
  // he'd arrive at corners 10 km/h hot and understeer straight into the verge
  if (err < -1 && cop.speed > 1) return { throttle: 0, brake: clamp(-err / 4, 0.3, 1) }
  return { throttle: err > 0 ? 0.15 : 0, brake: 0 } // coast rather than creep over target
}

export interface CopStepResult {
  input: InputFrame
  pinnedNow: boolean // pin condition held this step
}

// One brain step. `players` = live sims (id → CarState). Mutates brain. Pure of Math.random.
export function stepCopBrain(
  brain: CopBrain,
  cop: CarState,
  players: Map<string, CarState>,
  dt: number,
): CopStepResult {
  brain.tick++
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
    brain.noProgressT = 0
    return { input, pinnedNow: false }
  }

  if (brain.mode === 'cooldown') {
    brain.cooldownT -= dt
    if (brain.cooldownT <= 0) brain.mode = 'patrol'
  }

  // --- stuck detection & reverse recovery (both modes) ---
  if (brain.reverseT > 0) {
    brain.reverseT -= dt
    input.brake = 0.7 // brake past standstill = reverse in this physics
    input.steer = -steerToward(cop, brain.path[brain.wpIndex].x, brain.path[brain.wpIndex].z)
    return { input, pinnedNow: false }
  }
  const wantsMotion = brain.mode === 'pursuit' || brain.mode === 'patrol' || brain.mode === 'cooldown'
  if (wantsMotion && Math.abs(cop.speed) < 0.7) {
    brain.stuckT += dt
    if (brain.stuckT > 2.5) {
      brain.reverseT = 1.1
      brain.stuckT = 0
    }
  } else {
    brain.stuckT = 0
  }

  if (brain.mode === 'pursuit') {
    brain.noProgressT = 0 // patrol progress is meaningless while chasing
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
    if (d < PIN_DIST && Math.abs(cop.speed) < COP_STOP_V && Math.abs(target.speed) < TARGET_STOP_V) {
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
  // Hard watchdog: reverse-recovery handles a simple nose-in, but he can still end up
  // genuinely wedged (pinned on a prop, or sawing between two waypoints) and a cop
  // stuck in a hedge for the rest of the session is worse than a teleport. Measured as
  // patrol PROGRESS, not speed, so oscillating-in-place counts as stuck too.
  const wpBefore = brain.wpIndex
  brain.noProgressT += dt
  if (brain.noProgressT > UNWEDGE_TIME) {
    const n0 = brain.path.length
    let best = brain.wpIndex
    let bestD = Infinity
    for (let k = 0; k < n0; k++) {
      const d = dist(cop.x, cop.z, brain.path[k].x, brain.path[k].z)
      if (d < bestD) { bestD = d; best = k }
    }
    const a = brain.path[best]
    const b = brain.path[(best + 1) % n0]
    cop.x = a.x
    cop.z = a.z
    cop.yaw = Math.atan2(b.x - a.x, b.z - a.z)
    cop.vx = 0
    cop.vz = 0
    cop.yawRate = 0
    brain.wpIndex = (best + 1) % n0
    brain.noProgressT = 0
    brain.stuckT = 0
    brain.reverseT = 0
  }

  let wp = brain.path[brain.wpIndex]
  // Advance when reached, or when it's slipped behind him (overshot on a corner) —
  // the dirt samples sit ~3 m apart, so the radius must stay under that or he skips
  // waypoints and straight-lines off the curve he's meant to be following.
  const reached = (w: Waypoint): boolean => {
    const d = dist(cop.x, cop.z, w.x, w.z)
    if (d < 2.6) return true
    const behind = (w.x - cop.x) * Math.sin(cop.yaw) + (w.z - cop.z) * Math.cos(cop.yaw) < 0
    return behind && d < TILE * 0.5
  }
  for (let guard = 0; guard < 4 && reached(wp); guard++) {
    brain.wpIndex = (brain.wpIndex + 1) % brain.path.length
    wp = brain.path[brain.wpIndex]
  }
  if (brain.wpIndex !== wpBefore) brain.noProgressT = 0 // he's moving along the ring
  // Curvature over a speed-scaled lookahead window, not just the next waypoint:
  // the samples sit ~3 m apart, so one-ahead is ~0.2 s of warning at patrol speed
  // and he arrives at a 7.8 m corner arc still doing 54 km/h. Roughly 1.8 s of
  // travel gives him room to brake down to a speed the corner's grip allows.
  const np = brain.path.length
  const look = clamp(Math.ceil((Math.abs(cop.speed) * 1.8) / 3), 2, 10)
  let curve = 0
  let prevH = Math.atan2(wp.x - cop.x, wp.z - cop.z)
  for (let k = 1; k <= look; k++) {
    const a = brain.path[(brain.wpIndex + k - 1) % np]
    const b = brain.path[(brain.wpIndex + k) % np]
    const h = Math.atan2(b.x - a.x, b.z - a.z)
    curve += Math.abs(wrapAngle(h - prevH))
    prevH = h
  }
  const targetSpeed = PATROL_SPEED * clamp(1 - curve * 0.3, 0.42, 1)

  const aim = pointAhead(brain, cop, clamp(5 + Math.abs(cop.speed) * 0.85, 6, 20))
  input.steer = steerToward(cop, aim.x, aim.z)
  const sc = speedControl(cop, targetSpeed)
  input.throttle = sc.throttle
  input.brake = sc.brake
  return { input, pinnedNow: false }
}

// Called by the room when collideCarPair(cop, player) reports an impact.
export function onCopHit(brain: CopBrain, playerId: string, impactSpeed: number, copSpeed: number): boolean {
  if (brain.mode === 'interrogate') return false
  if (brain.immunity.has(playerId)) return false
  if (impactSpeed < AGGRO_IMPULSE) return false // traffic nudge: horn, no lights
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

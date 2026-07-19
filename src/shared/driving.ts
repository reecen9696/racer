// Road-following primitives shared by every AI driver (police, traffic).
// These were the cop's private helpers first — they're lifted here verbatim so
// the traffic brain steers, paces and yields with exactly the cop's behaviour.
import { CarState } from './physics'
import { CAR_LENGTH } from './constants'

export interface Waypoint { x: number; z: number }

export const clamp = (v: number, lo: number, hi: number) => (v < lo ? lo : v > hi ? hi : v)

export const wrapAngle = (a: number) => {
  while (a > Math.PI) a -= Math.PI * 2
  while (a < -Math.PI) a += Math.PI * 2
  return a
}

export function dist(ax: number, az: number, bx: number, bz: number): number {
  return Math.hypot(ax - bx, az - bz)
}

// steer toward a world point; returns shaped steer input in -1..1
export function steerToward(car: CarState, px: number, pz: number, gain = 2.2): number {
  const heading = Math.atan2(px - car.x, pz - car.z)
  const err = wrapAngle(heading - car.yaw)
  // reversing flips steering geometry
  const dir = car.speed < -0.5 ? -1 : 1
  return clamp(err * gain * dir, -1, 1)
}

// throttle/brake toward a target speed. Braking below walking pace is suppressed:
// brake past standstill means REVERSE in this physics, so a hard stop would otherwise
// trundle the car backwards down the lane.
export function speedControl(car: CarState, target: number): { throttle: number; brake: number } {
  const err = target - car.speed
  if (err > 0.5) return { throttle: clamp(err / 6, 0.25, 1), brake: 0 }
  // /4 not /10: a 2.6 m/s overspeed used to ask for 26% brake, which is a coast —
  // he'd arrive at corners 10 km/h hot and understeer straight into the verge
  if (err < -1 && car.speed > 1) return { throttle: 0, brake: clamp(-err / 4, 0.3, 1) }
  return { throttle: err > 0 ? 0.15 : 0, brake: 0 } // coast rather than creep over target
}

// Pure pursuit aims at a point a speed-scaled distance DOWN the path, never at the
// next waypoint: the samples are ~3 m apart, so aiming at the nearest one is a 0.2 s
// lookahead at patrol speed — the driver saws at the wheel and washes wide out of every
// corner. Roughly a second of travel tracks the ring cleanly at 47 km/h.
export function pointAhead(path: Waypoint[], from: number, car: CarState, ahead: number): Waypoint {
  const n = path.length
  let acc = 0
  let px = car.x, pz = car.z
  for (let k = 0; k < 30; k++) {
    const w = path[(from + k) % n]
    acc += dist(px, pz, w.x, w.z)
    if (acc >= ahead) return w
    px = w.x
    pz = w.z
  }
  return path[(from + 29) % n]
}

export interface Obstacle {
  id: string
  gap: number // m of clear road between bumpers (can go slightly negative on contact)
  theirSpeed: number // their velocity projected onto OUR heading — negative = oncoming
}

// Nearest car occupying our lane ahead. The lateral tolerance widens with distance
// because the road curves away from our heading: a fixed-width corridor loses the car
// in front halfway through every corner, which is precisely when rear-ending it costs
// the most. Cars strictly behind us are somebody else's problem.
export function carAhead(
  self: CarState,
  others: Iterable<[string, CarState]>,
  maxDist = 26,
): Obstacle | null {
  const sin = Math.sin(self.yaw), cos = Math.cos(self.yaw)
  let best: Obstacle | null = null
  for (const [id, o] of others) {
    if (o === self) continue
    const dx = o.x - self.x, dz = o.z - self.z
    const fwd = dx * sin + dz * cos
    if (fwd < -1 || fwd > maxDist) continue
    const lat = dx * cos - dz * sin
    if (Math.abs(lat) > 2.2 + Math.max(0, fwd) * 0.22) continue
    const gap = fwd - CAR_LENGTH
    if (best && gap >= best.gap) continue
    best = { id, gap, theirSpeed: o.vx * sin + o.vz * cos }
  }
  return best
}

// Speed we may safely carry behind `ob`, given a desired following distance that
// scales with our own speed. Closing on a stopped car this decays to 0 well before
// contact; on a car doing our speed it settles into a steady pace behind it.
export function followSpeed(self: CarState, ob: Obstacle): number {
  const want = 7 + Math.abs(self.speed) * 0.9
  if (ob.gap >= want) return Infinity
  if (ob.gap < 2.5) return 0
  const t = clamp(ob.gap / want, 0, 1)
  return Math.max(0, ob.theirSpeed) * t + t * t * 2
}

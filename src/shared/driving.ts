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
// Indices CLAMP at the end of the path rather than wrapping. These were ring helpers,
// where `% n` correctly meant "carry on round"; drivers now follow a rolling route, and
// wrapping there would aim at wherever the route happened to start — half the map away
// and usually behind the car. extendRoute keeps more path ahead than this ever reads.
export function pointAhead(path: Waypoint[], from: number, car: CarState, ahead: number): Waypoint {
  const n = path.length
  let acc = 0
  let px = car.x, pz = car.z
  for (let k = 0; k < 30; k++) {
    const w = path[Math.min(from + k, n - 1)]
    acc += dist(px, pz, w.x, w.z)
    if (acc >= ahead) return w
    px = w.x
    pz = w.z
  }
  return path[Math.min(from + 29, n - 1)]
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
// `lane` narrows "in my way" from a cone to the actual road ahead. Pass it whenever the
// driver has a path — it is strictly better, and it is the only thing that works once
// traffic runs in both directions:
//
// The cone's widening term exists to keep sight of the car in front through a curve, but
// at 10 m it opens to 4.4 m, wider than the 4.2 m between the two lanes — so a car coming
// the other way, correctly on its own side, reads as an obstacle and every civilian
// brakes for every car it meets. Tightening the cone for cars that *look* oncoming fails
// too: through a bend two cars on opposite sides sit nearly perpendicular, so a velocity
// or heading test doesn't recognise them, and any threshold tight enough to exclude them
// also stops seeing a spun-out car lying across your own lane — which is the one thing
// this must never miss. Distance-to-my-own-lane has neither problem: the far lane is a
// reliable 4.2 m away in corners and straights alike, and anything sprawled across my
// line is close to it by definition, whichever way it happens to be pointing.
const LANE_WINDOW = 10 // waypoints of road to test against — samples sit ~3 m apart
const LANE_HALF = 2.0 // m from my lane line still counts as my lane

export function carAhead(
  self: CarState,
  others: Iterable<[string, CarState]>,
  maxDist = 26,
  lane?: { path: Waypoint[]; from: number },
): Obstacle | null {
  const sin = Math.sin(self.yaw), cos = Math.cos(self.yaw)
  let best: Obstacle | null = null
  for (const [id, o] of others) {
    if (o === self) continue
    const dx = o.x - self.x, dz = o.z - self.z
    const fwd = dx * sin + dz * cos
    if (fwd < -1 || fwd > maxDist) continue
    if (lane) {
      const n = lane.path.length
      let near2 = Infinity
      for (let k = 0; k < LANE_WINDOW; k++) {
        const w = lane.path[Math.min(lane.from + k, n - 1)]
        const ex = o.x - w.x, ez = o.z - w.z
        const d2 = ex * ex + ez * ez
        if (d2 < near2) near2 = d2
      }
      if (near2 > LANE_HALF * LANE_HALF) continue
    } else {
      const lat = dx * cos - dz * sin
      if (Math.abs(lat) > 2.2 + Math.max(0, fwd) * 0.22) continue
    }
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
  // Stop with 3.5 m of bumper clearance, not 2.5. speedControl deliberately stops
  // braking below 1 m/s (braking past standstill is reverse in this physics), so the
  // last metre of an approach is always a coast — at 2.5 m that coast ended in a 0.1 m/s
  // touch whenever a queue formed at a give-way line. A metre of margin absorbs it.
  if (ob.gap < 3.5) return 0
  const t = clamp(ob.gap / want, 0, 1)
  return Math.max(0, ob.theirSpeed) * t + t * t * 2
}

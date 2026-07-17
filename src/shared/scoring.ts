// Drift scoring: angle × speed × duration, chained, broken by wall contact,
// paused offroad, ended if all four wheels leave the road >1.5 s (Part 4 §1.3).
import { CarState } from './physics'

export interface DriftScore {
  total: number
  chain: number // points accumulating in the current chain (unbanked)
  multiplier: number
  drifting: boolean
  offroadTime: number
  graceTime: number // time since drift conditions lapsed (bank after grace)
  banked: number // amount banked on the most recent 'banked' event
  event: 'none' | 'banked' | 'crashed'
}

export function makeScore(): DriftScore {
  return { total: 0, chain: 0, multiplier: 1, drifting: false, offroadTime: 0, graceTime: 0, banked: 0, event: 'none' }
}

const DRIFT_MIN_ANGLE = 0.22 // rad
const DRIFT_MIN_SPEED = 7 // m/s
const GRACE = 1.2 // s to link corners
const WALL_BREAK = 3.0 // wallHit impulse that kills the chain

export function stepScore(sc: DriftScore, car: CarState, dt: number): void {
  sc.event = 'none'
  const angle = Math.abs(car.slipAngle)
  const speed = Math.abs(car.speed)
  const active = angle > DRIFT_MIN_ANGLE && speed > DRIFT_MIN_SPEED

  const offroadWheels = [car.surfFL, car.surfFR, car.surfRL, car.surfRR].filter((s) => s === 'offroad').length
  const anyOffroad = offroadWheels > 0
  const allOffroad = offroadWheels === 4

  if (allOffroad) sc.offroadTime += dt
  else sc.offroadTime = 0

  // hard wall contact breaks the chain
  if (car.wallHit > WALL_BREAK && sc.chain > 0) {
    sc.chain = 0
    sc.multiplier = 1
    sc.drifting = false
    sc.event = 'crashed'
    return
  }

  if (active) {
    sc.drifting = true
    sc.graceTime = 0
    if (!anyOffroad) {
      // scoring accumulates on asphalt/curb only; grass pauses, doesn't reset
      sc.chain += angle * speed * dt * 14 * sc.multiplier
      sc.multiplier = Math.min(sc.multiplier + dt * 0.12, 4)
    }
    if (sc.offroadTime > 1.5) {
      // wandered fully off: bank what you had at reduced value
      sc.banked = Math.floor(sc.chain * 0.5)
      sc.total += sc.banked
      sc.chain = 0
      sc.multiplier = 1
      sc.drifting = false
      sc.event = 'banked'
    }
  } else if (sc.drifting || sc.chain > 0) {
    sc.graceTime += dt
    if (sc.graceTime > GRACE) {
      if (sc.chain > 1) {
        sc.banked = Math.floor(sc.chain)
        sc.total += sc.banked
        sc.event = 'banked'
      }
      sc.chain = 0
      sc.multiplier = 1
      sc.drifting = false
    }
  }
}

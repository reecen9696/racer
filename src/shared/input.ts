// Input shaping (Part 3 §3.2): rate-limited virtual steering axis + counter-steer assist.
// Runs client-side BEFORE the packet is built; the shaped float is what's transmitted,
// so keyboard/gamepad/assist settings are invisible to the server.
import { Tuning } from './constants'
import { CarState } from './physics'

export type AssistLevel = 'full' | 'reduced' | 'off'

export interface RawInput {
  left: boolean
  right: boolean
  throttle: boolean
  brake: boolean
  handbrake: boolean
}

export class InputShaper {
  steer = 0 // shaped -1..1
  throttle = 0 // shaped 0..1
  assist: AssistLevel = 'full'

  // keyboard throttle ramps instead of snapping to 1 — progressive power delivery
  // means you can feed the rear tires up to (and past) the traction budget.
  shapeThrottle(on: boolean, T: Tuning, dt: number): number {
    const target = on ? 1 : 0
    const rate = (on ? T.throttleAttack : T.throttleRelease) * dt
    this.throttle += Math.sign(target - this.throttle) * Math.min(rate, Math.abs(target - this.throttle))
    return this.throttle
  }

  update(raw: RawInput, car: CarState, T: Tuning, dt: number): number {
    // left = positive steer: +yaw turns the car toward screen-left in our convention,
    // so A/left must produce positive values for the car to turn left on screen.
    const target = (raw.left ? 1 : 0) - (raw.right ? 1 : 0)
    // rate-limited ramp: attack toward target, faster release toward 0
    if (target !== 0) {
      const rate = T.steerAttack * dt
      this.steer += Math.sign(target - this.steer) * Math.min(rate, Math.abs(target - this.steer))
    } else {
      const rate = T.steerRelease * dt
      this.steer += Math.sign(-this.steer) * Math.min(rate, Math.abs(this.steer))
    }

    // expo curve: soft early travel, full authority at the ends — the ramp spends its
    // first moments in small angles so turn-in eases in instead of arriving instantly
    let out = Math.sign(this.steer) * Math.pow(Math.abs(this.steer), T.steerExpo)

    // counter-steer assist: recenter the "zero" around the drift equilibrium so
    // no-key holds the drift, toward-corner adds angle, away straightens.
    if (this.assist !== 'off') {
      const gain = (this.assist === 'full' ? 1 : 0.5) * T.assistGain
      const drifting = Math.abs(car.slipAngle) > 0.12 && Math.abs(car.speed) > 5
      if (drifting) {
        const steerMax = T.steerMaxLow // normalize assist into the -1..1 steer domain
        const counter = -car.slipAngle * gain
        const counterNorm = Math.max(-1, Math.min(1, counter / steerMax))
        out = Math.max(-1, Math.min(1, out + counterNorm))
      }
    }
    return out
  }
}

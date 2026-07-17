// Headless physics harness: steps the shared sim exactly like client/server and
// prints behavior. Ground truth for acceleration/drift tuning, no browser quirks.
import { makeCarState, stepCar, InputFrame, CarState, SurfaceSampler } from '../src/shared/physics'
import { TUNING, PHYS_DT } from '../src/shared/constants'
import { parseMap } from '../src/shared/map'

const map = parseMap()

function makeInput(): InputFrame {
  return { seq: 0, steer: 0, throttle: 0, brake: 0, handbrake: false, headlights: true }
}

function runOn(car: CarState, input: InputFrame, surfaceAt: SurfaceSampler, seconds: number, mod: (t: number) => void, label: string, report = 1): void {
  console.log('--- ' + label)
  let peakSlip = 0
  for (let i = 0; i < seconds * 60; i++) {
    mod(i / 60)
    stepCar(car, input, TUNING, PHYS_DT, surfaceAt, [], undefined)
    peakSlip = Math.max(peakSlip, Math.abs(car.slipAngle))
    if (i % Math.max(1, Math.round(60 * report)) === 0) {
      console.log(
        `t=${(i / 60).toFixed(1)}s v=${(car.speed * 3.6).toFixed(0)}km/h rpm=${car.rpm.toFixed(0)} gear=${car.gear + 1} slip=${((car.slipAngle * 180) / Math.PI).toFixed(1)}° yawRate=${car.yawRate.toFixed(2)} spin=${car.wheelspin.toFixed(2)} surf=${car.surfRL}`,
      )
    }
  }
  console.log(`    peak |slip| = ${((peakSlip * 180) / Math.PI).toFixed(1)}°`)
}

const asphalt: SurfaceSampler = () => 'asphalt'
const dirt: SurfaceSampler = () => 'dirt'
const grass: SurfaceSampler = () => 'offroad'

// ============ 1) baseline performance on asphalt ============
{
  const car = makeCarState(0, 0, 0)
  const input = makeInput()
  runOn(car, input, asphalt, 8, () => { input.throttle = 1 }, 'full throttle from rest (asphalt)')
  runOn(car, input, asphalt, 3, () => { input.throttle = 0; input.brake = 1 }, 'full brake', 0.5)
}

// ============ 2) handbrake drift entry (classic) ============
{
  const car = makeCarState(0, 0, 0)
  const input = makeInput()
  runOn(car, input, asphalt, 5, () => { input.throttle = 1 }, 'accelerate', 2)
  runOn(car, input, asphalt, 3, (t) => {
    input.steer = 0.7
    input.handbrake = t < 0.4
    input.throttle = 0.8
  }, 'handbrake drift entry (steer 0.7)', 0.25)
  runOn(car, input, asphalt, 2, () => { input.steer = 0; input.handbrake = false; input.throttle = 0.7 }, 'release steer mid-drift', 0.25)
}

// ============ 3) power-over: NO handbrake, throttle + steer in 2nd ============
{
  const car = makeCarState(0, 0, 0)
  const input = makeInput()
  runOn(car, input, asphalt, 2.2, () => { input.throttle = 1 }, 'roll to ~60 km/h', 2)
  runOn(car, input, asphalt, 3.5, () => { input.steer = 0.85; input.throttle = 1 }, 'POWER-OVER: full throttle + steer, no handbrake', 0.25)
}

// ============ 4) pendulum flick: swing right, brake tap, snap left ============
{
  const car = makeCarState(0, 0, 0)
  const input = makeInput()
  runOn(car, input, asphalt, 5, () => { input.throttle = 1 }, 'get to speed', 2.5)
  runOn(car, input, asphalt, 3.2, (t) => {
    if (t < 0.5) { input.steer = -0.8; input.throttle = 0.3; input.brake = 0 } // swing away
    else if (t < 0.85) { input.steer = 1; input.throttle = 0; input.brake = 0.7 } // flick + brake tap
    else { input.steer = 0.6; input.throttle = 0.9; input.brake = 0 } // power through
    input.handbrake = false
  }, 'PENDULUM FLICK (no handbrake)', 0.2)
}

// ============ 5) same corner attempt: asphalt vs dirt vs grass ============
for (const [name, surf] of [['asphalt', asphalt], ['dirt', dirt], ['grass', grass]] as const) {
  const car = makeCarState(0, 0, 0)
  const input = makeInput()
  runOn(car, input, surf, 5, () => { input.throttle = 1 }, `[${name}] accelerate 5s`, 2.5)
  runOn(car, input, surf, 2.5, () => { input.steer = 0.7; input.throttle = 0.6 }, `[${name}] steer 0.7 @ speed`, 0.5)
}

// ============ 6) understeer check: overspeed corner entry, front washes out ============
{
  const car = makeCarState(0, 0, 0)
  const input = makeInput()
  runOn(car, input, asphalt, 7, () => { input.throttle = 1 }, 'wind up to high speed', 3)
  runOn(car, input, asphalt, 2, () => { input.steer = 1; input.throttle = 0.2; input.brake = 0 }, 'full lock at high speed (should push, then rotate as speed bleeds)', 0.25)
}

// ============ 7) on the real map (spawn, colliders, elevation) ============
{
  const car = makeCarState(map.spawn.x, map.spawn.z, map.spawn.yaw)
  const input = makeInput()
  console.log('--- real map sanity: 6s straight from spawn')
  for (let i = 0; i < 6 * 60; i++) {
    input.throttle = 1
    stepCar(car, input, TUNING, PHYS_DT, map.surfaceAt, map.colliders, map.heightAt)
    if (i % 120 === 0) console.log(`t=${(i / 60).toFixed(1)}s v=${(car.speed * 3.6).toFixed(0)}km/h surf=${car.surfRL}`)
  }
  console.log('final pos', car.x.toFixed(1), car.z.toFixed(1))
}

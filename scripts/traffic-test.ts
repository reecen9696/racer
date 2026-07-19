// Headless civilian-traffic harness: free flow, yielding to a parked player, pacing a
// slow player, and sharing the ring with the cop. Ground truth for traffic tuning.
// The whole contract is "they never cause the crash", so every case asserts contact = 0.
import { makeCarState, stepCar, collideCarPair, CarState } from '../src/shared/physics'
import { makeTrafficBrains, stepTrafficBrain, trafficSpawn, TrafficBrain } from '../src/shared/traffic'
import { makeCopBrain, stepCopBrain, copSpawn } from '../src/shared/police'
import { TUNING, PHYS_DT, CAR_LENGTH } from '../src/shared/constants'
import { parseMap } from '../src/shared/map'

const map = parseMap()
const step = (c: CarState, i: Parameters<typeof stepCar>[1]) =>
  stepCar(c, i, TUNING, PHYS_DT, map.surfaceAt, map.colliders, map.heightAt)

function spawn(): { brain: TrafficBrain; car: CarState }[] {
  return makeTrafficBrains(map).map((brain) => {
    const w = trafficSpawn(brain)
    return { brain, car: makeCarState(w.x, w.z, w.yaw) }
  })
}
const gapOf = (a: CarState, b: CarState) => Math.hypot(a.x - b.x, a.z - b.z)

let failures = 0
const check = (ok: boolean, label: string) => {
  console.log(`${ok ? '  ok  ' : ' FAIL '} ${label}`)
  if (!ok) failures++
}

// --- 1) free flow: they drive the loop, keep pace, and never touch each other ---
{
  const cars = spawn()
  const road = new Map(cars.map((t) => [t.brain.id, t.car] as const))
  const start = cars.map((t) => ({ x: t.car.x, z: t.car.z }))
  let minS = 99, maxS = 0, contact = 0, minGap = Infinity, reverses = 0
  for (let i = 0; i < 60 * 60; i++) {
    for (const t of cars) {
      const r = stepTrafficBrain(t.brain, t.car, road, PHYS_DT)
      step(t.car, r.input)
      if (t.brain.reverseT > 0) reverses++
    }
    contact = Math.max(contact, collideCarPair(cars[0].car, cars[1].car))
    minGap = Math.min(minGap, gapOf(cars[0].car, cars[1].car))
    if (i > 120) for (const t of cars) { minS = Math.min(minS, t.car.speed); maxS = Math.max(maxS, t.car.speed) }
  }
  const moved = cars.map((t, i) => Math.hypot(t.car.x - start[i].x, t.car.z - start[i].z))
  console.log(`free flow 60s: ${(minS * 3.6).toFixed(0)}..${(maxS * 3.6).toFixed(0)} km/h · displaced ${moved.map((m) => m.toFixed(0)).join('/')}m · closest pair ${minGap.toFixed(1)}m · reverse frames ${reverses}`)
  check(minS > 1, 'nobody stalls in free flow')
  check(maxS * 3.6 < 60, 'nobody speeds')
  check(contact === 0, 'traffic never touches traffic')
  check(cars.every((t) => t.brain.wedgeT < 3), 'nobody is wedged at the end')
}

// --- 2) a player parked in the lane: stop clean, no contact, sound the horn ---
{
  const cars = spawn()
  const t = cars[0]
  // drop a parked player ~30 m down the lane the first driver is about to drive
  const wp = t.brain.path[(t.brain.wpIndex + 10) % t.brain.path.length]
  const parked = makeCarState(wp.x, wp.z, t.car.yaw)
  const road = new Map<string, CarState>([[t.brain.id, t.car], ['p1', parked]])
  let contact = 0, minGap = Infinity, honks = 0, stoppedAt = -1
  for (let i = 0; i < 60 * 20; i++) {
    const r = stepTrafficBrain(t.brain, t.car, road, PHYS_DT)
    if (r.honk) honks++
    step(t.car, r.input)
    contact = Math.max(contact, collideCarPair(t.car, parked))
    parked.vx = 0; parked.vz = 0; parked.yawRate = 0 // handbrake on
    minGap = Math.min(minGap, gapOf(t.car, parked))
    if (stoppedAt < 0 && i > 60 && Math.abs(t.car.speed) < 0.6) stoppedAt = i
  }
  console.log(`parked player: closest ${minGap.toFixed(1)}m (bumpers ${(minGap - CAR_LENGTH).toFixed(1)}m) · contact ${contact.toFixed(2)} · honks ${honks} · stopped at ${(stoppedAt / 60).toFixed(1)}s`)
  check(contact === 0, 'never hits the parked player')
  check(minGap > CAR_LENGTH, 'keeps a bumper of clearance')
  check(honks > 0, 'honks at the player blocking the lane')
  check(honks < 8, 'honking stays a warning, not a tantrum')
}

// --- 3) pacing a slow player: follow, never rear-end ---
{
  const cars = spawn()
  const t = cars[0]
  const wp = t.brain.path[(t.brain.wpIndex + 8) % t.brain.path.length]
  const slow = makeCarState(wp.x, wp.z, t.car.yaw)
  const road = new Map<string, CarState>([[t.brain.id, t.car], ['p1', slow]])
  let contact = 0, minGap = Infinity
  for (let i = 0; i < 60 * 25; i++) {
    // player crawls along the lane at 4 m/s
    const ahead = t.brain.path[(t.brain.wpIndex + 12) % t.brain.path.length]
    const h = Math.atan2(ahead.x - slow.x, ahead.z - slow.z)
    slow.yaw = h
    slow.vx = Math.sin(h) * 4; slow.vz = Math.cos(h) * 4
    slow.x += slow.vx * PHYS_DT; slow.z += slow.vz * PHYS_DT
    slow.speed = 4
    const r = stepTrafficBrain(t.brain, t.car, road, PHYS_DT)
    step(t.car, r.input)
    contact = Math.max(contact, collideCarPair(t.car, slow))
    if (i > 60) minGap = Math.min(minGap, gapOf(t.car, slow))
  }
  console.log(`pacing a 14 km/h player: closest ${minGap.toFixed(1)}m · contact ${contact.toFixed(2)} · traffic speed ${(t.car.speed * 3.6).toFixed(0)} km/h`)
  check(contact === 0, 'never rear-ends the slow player')
  check(t.car.speed < 7, 'settles to the blocked pace instead of charging through')
}

// --- 4) the cop shares the ring: he patrols faster than they drive, so he must pace
// them rather than drive through the back of them. Cruise is tuned so he rarely gets
// stuck behind one in normal play, which means the interesting case never happens on
// its own — so drop him straight in behind a civilian and hold him there. ---
{
  const cars = spawn()
  const brain = makeCopBrain(map)
  const s0 = copSpawn(brain)
  const cop = makeCarState(s0.x, s0.z, s0.yaw)
  // rewind him ~14 m up the lane from the first civilian, already at patrol speed
  const lead = cars[0]
  brain.wpIndex = (lead.brain.wpIndex - 5 + brain.path.length) % brain.path.length
  const w = brain.path[brain.wpIndex]
  cop.x = w.x
  cop.z = w.z
  cop.yaw = lead.car.yaw
  cop.vx = Math.sin(cop.yaw) * 13
  cop.vz = Math.cos(cop.yaw) * 13
  cop.speed = 13
  const trafficCars = new Map(cars.map((t) => [t.brain.id, t.car] as const))
  const road = new Map<string, CarState>(trafficCars)
  road.set('npc:cop', cop)
  let contact = 0, minGap = Infinity
  for (let i = 0; i < 60 * 90; i++) {
    const res = stepCopBrain(brain, cop, new Map(), PHYS_DT, trafficCars)
    step(cop, res.input)
    for (const t of cars) {
      const r = stepTrafficBrain(t.brain, t.car, road, PHYS_DT)
      step(t.car, r.input)
    }
    collideCarPair(cars[0].car, cars[1].car)
    for (const t of cars) {
      contact = Math.max(contact, collideCarPair(cop, t.car))
      minGap = Math.min(minGap, gapOf(cop, t.car))
    }
  }
  console.log(`cop + traffic 90s: closest cop/civilian ${minGap.toFixed(1)}m · contact ${contact.toFixed(2)} · cop mode ${brain.mode}`)
  check(contact === 0, 'the cop does not rear-end the traffic')
  check(brain.mode === 'patrol', 'no phantom pursuit of a civilian')
}

console.log(failures ? `\n${failures} check(s) failed` : '\nall checks passed')
process.exit(failures ? 1 : 0)

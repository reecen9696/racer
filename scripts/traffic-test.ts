// Headless civilian-traffic harness: free flow, yielding to a parked player, pacing a
// slow player, and sharing the ring with the cop. Ground truth for traffic tuning.
// The whole contract is "they never cause the crash", so every case asserts contact = 0.
import { makeCarState, stepCar, collideCarPair, CarState } from '../src/shared/physics'
import { makeTrafficBrains, stepTrafficBrain, trafficSpawn, TrafficBrain } from '../src/shared/traffic'
import { makeCopBrain, stepCopBrain, copSpawn, onCopHit } from '../src/shared/police'
import { carAhead } from '../src/shared/driving'
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
  const travelled = cars.map(() => 0)
  const prev = cars.map((t) => ({ x: t.car.x, z: t.car.z }))
  for (let i = 0; i < 60 * 60; i++) {
    for (const [ci, t] of cars.entries()) {
      const r = stepTrafficBrain(t.brain, t.car, road, PHYS_DT)
      step(t.car, r.input)
      if (t.brain.reverseT > 0) reverses++
      travelled[ci] += Math.hypot(t.car.x - prev[ci].x, t.car.z - prev[ci].z)
      prev[ci] = { x: t.car.x, z: t.car.z }
    }
    for (let a = 0; a < cars.length; a++) {
      for (let b = a + 1; b < cars.length; b++) {
        contact = Math.max(contact, collideCarPair(cars[a].car, cars[b].car))
        if (cars[a].brain.oncoming === cars[b].brain.oncoming) minGap = Math.min(minGap, gapOf(cars[a].car, cars[b].car))
      }
    }
    if (i > 120) for (const t of cars) { minS = Math.min(minS, t.car.speed); maxS = Math.max(maxS, t.car.speed) }
  }
  const moved = cars.map((t, i) => Math.hypot(t.car.x - start[i].x, t.car.z - start[i].z))
  console.log(`free flow 60s: ${(minS * 3.6).toFixed(0)}..${(maxS * 3.6).toFixed(0)} km/h · travelled ${travelled.map((m) => m.toFixed(0)).join('/')}m · displaced ${moved.map((m) => m.toFixed(0)).join('/')}m · closest pair ${minGap.toFixed(1)}m · reverse frames ${reverses}`)
  // Instantaneous minimum speed is the wrong health metric once the loop is busy: cars
  // legitimately stop for each other and legitimately reverse to unstick themselves, so
  // a momentary -1 km/h says nothing. Distance covered is what "traffic flows" means.
  check(travelled.every((m) => m > 300), 'every car keeps circulating, none parks up')
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
  // The player walks the path on its OWN index at a steady 4 m/s. Driving it relative to
  // the traffic car's index instead makes it flee further ahead exactly as the car
  // catches up, so the car is never actually blocked and the case silently stops
  // testing anything — which is how it "passed" while measuring nothing.
  let pIdx = (t.brain.wpIndex + 8) % t.brain.path.length
  for (let i = 0; i < 60 * 25; i++) {
    const ahead = t.brain.path[(pIdx + 2) % t.brain.path.length]
    const h = Math.atan2(ahead.x - slow.x, ahead.z - slow.z)
    slow.yaw = h
    slow.vx = Math.sin(h) * 4; slow.vz = Math.cos(h) * 4
    slow.x += slow.vx * PHYS_DT; slow.z += slow.vz * PHYS_DT
    slow.speed = 4
    if (Math.hypot(slow.x - t.brain.path[pIdx].x, slow.z - t.brain.path[pIdx].z) < 2.5) {
      pIdx = (pIdx + 1) % t.brain.path.length
    }
    const r = stepTrafficBrain(t.brain, t.car, road, PHYS_DT)
    step(t.car, r.input)
    contact = Math.max(contact, collideCarPair(t.car, slow))
    if (i > 60) minGap = Math.min(minGap, gapOf(t.car, slow))
  }
  console.log(`pacing a 14 km/h player: closest ${minGap.toFixed(1)}m · contact ${contact.toFixed(2)} · traffic speed ${(t.car.speed * 3.6).toFixed(0)} km/h`)
  check(contact === 0, 'never rear-ends the slow player')
  check(t.car.speed < 7, 'settles to the blocked pace instead of charging through')
}

// --- 3b) a permanently stopped obstacle: queue behind it and hold, without ever
// touching it. They deliberately do NOT overtake (see the note at the top of
// traffic.ts), so "waits forever" is the specified behaviour, not a failure — but it
// has to wait CLEANLY, and it has to get going again the moment the road clears. ---
{
  for (const label of ['parked player', 'frozen cop'] as const) {
    const cars = spawn()
    const t = cars[0]
    const wp = t.brain.path[(t.brain.wpIndex + 10) % t.brain.path.length]
    const dead = makeCarState(wp.x, wp.z, t.car.yaw)
    // an npc obstacle is never honked at — that's the frozen-cop case
    const id = label === 'frozen cop' ? 'npc:cop' : 'p1'
    const road = new Map<string, CarState>([[t.brain.id, t.car], [id, dead]])
    let contact = 0, minGap = Infinity
    for (let i = 0; i < 60 * 40; i++) {
      const r = stepTrafficBrain(t.brain, t.car, road, PHYS_DT)
      step(t.car, r.input)
      contact = Math.max(contact, collideCarPair(t.car, dead))
      dead.x = wp.x; dead.z = wp.z; dead.vx = 0; dead.vz = 0; dead.yawRate = 0 // immovable
      minGap = Math.min(minGap, gapOf(t.car, dead))
    }
    const heldAt = Math.abs(t.car.speed)
    // now clear the road and check it wakes up rather than sulking there
    road.delete(id)
    for (let i = 0; i < 60 * 10; i++) {
      const r = stepTrafficBrain(t.brain, t.car, road, PHYS_DT)
      step(t.car, r.input)
    }
    console.log(`${label}: 40s queued · contact ${contact.toFixed(2)} · closest ${minGap.toFixed(1)}m · held at ${(heldAt * 3.6).toFixed(0)} km/h · after clearing ${(t.car.speed * 3.6).toFixed(0)} km/h`)
    check(contact === 0, `${label}: waits 40s without ever touching it`)
    check(minGap > CAR_LENGTH, `${label}: keeps a bumper of clearance the whole time`)
    check(heldAt < 1, `${label}: actually comes to a stop rather than grinding into it`)
    check(t.car.speed > 5, `${label}: gets going again once the road clears`)
  }
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

// --- 5) the cop brakes for a PLAYER in his lane too, not just civilians. He patrols at
// 47 km/h; running into the back of a driver pootling along in front of him is contact
// he caused, and a hard enough knock trips onCopHit — so he'd then pursue you for his
// own rear-end shunt. Off duty he yields; mid-pursuit he must not. ---
{
  for (const mode of ['patrolling', 'in pursuit'] as const) {
    const brain = makeCopBrain(map)
    const s0 = copSpawn(brain)
    const cop = makeCarState(s0.x, s0.z, s0.yaw)
    // a player stopped on the ring, ~25 m down the lane from where he starts
    const wp = brain.path[(brain.wpIndex + 9) % brain.path.length]
    const p = makeCarState(wp.x, wp.z, cop.yaw)
    const players = new Map<string, CarState>([['p1', p]])
    if (mode === 'in pursuit') { brain.mode = 'pursuit'; brain.targetId = 'p1' }
    let contact = 0, minGap = Infinity, aggro = false
    for (let i = 0; i < 60 * 25; i++) {
      const res = stepCopBrain(brain, cop, players, PHYS_DT, new Map())
      step(cop, res.input)
      p.x = wp.x; p.z = wp.z; p.vx = 0; p.vz = 0; p.yawRate = 0 // parked, handbrake on
      const hit = collideCarPair(cop, p)
      contact = Math.max(contact, hit)
      if (hit > 0 && onCopHit(brain, 'p1', hit, cop.speed)) aggro = true
      if (i > 30) minGap = Math.min(minGap, gapOf(cop, p))
    }
    console.log(`cop ${mode} behind a parked player: contact ${contact.toFixed(2)} · closest ${minGap.toFixed(1)}m · speed ${(cop.speed * 3.6).toFixed(0)} km/h · mode ${brain.mode}`)
    if (mode === 'patrolling') {
      check(contact === 0, 'cop brakes for a player in his lane instead of rear-ending them')
      check(minGap > CAR_LENGTH, 'cop keeps a bumper of clearance off a stopped player')
      check(!aggro, 'cop does not pursue a driver over a shunt he would have caused')
    } else {
      check(contact > 0, 'mid-pursuit he still closes and makes contact — no yielding in a chase')
    }
  }
}


// --- 6) getting shoved: a hit lands on a civilian exactly as it lands on a player, and
// the car then digs itself out. collideCarPair is symmetric equal-mass, so this is the
// same code path a player-vs-player shunt takes — the case exists to keep it that way. ---
{
  const IDLE = { seq: 0, steer: 0, throttle: 0, brake: 0, handbrake: false, headlights: true }
  const results: Record<string, { impact: number; peak: number }> = {}
  for (const kind of ['ai', 'inert'] as const) {
    const cars = spawn()
    const t = cars[0]
    const road = new Map<string, CarState>([[t.brain.id, t.car]])
    for (let i = 0; i < 120; i++) { const r = stepTrafficBrain(t.brain, t.car, road, PHYS_DT); step(t.car, r.input) }
    const fwd = { x: Math.sin(t.car.yaw), z: Math.cos(t.car.yaw) }
    const p = makeCarState(t.car.x - fwd.x * 9, t.car.z - fwd.z * 9, t.car.yaw)
    p.vx = fwd.x * 25; p.vz = fwd.z * 25; p.speed = 25
    road.set('p1', p)
    let impact = 0, peak = 0
    for (let i = 0; i < 120; i++) {
      if (kind === 'ai') { const r = stepTrafficBrain(t.brain, t.car, road, PHYS_DT); step(t.car, r.input) }
      else step(t.car, IDLE)
      step(p, IDLE)
      impact = Math.max(impact, collideCarPair(p, t.car))
      peak = Math.max(peak, Math.hypot(t.car.vx, t.car.vz))
    }
    results[kind] = { impact, peak }
  }
  const { ai, inert } = results
  console.log(`rammed at 25 m/s: impact ${ai.impact.toFixed(1)} m/s (inert control ${inert.impact.toFixed(1)}) · shoved to ${(ai.peak * 3.6).toFixed(0)} km/h (control ${(inert.peak * 3.6).toFixed(0)})`)
  check(ai.impact > 10, 'a civilian takes a real hit, not a glancing one')
  check(Math.abs(ai.impact - inert.impact) < 2, 'the AI does not brace: same impulse as an inert car')
  check(Math.abs(ai.peak - inert.peak) < 3, 'gets shoved as far as an unmanned car would — no invisible anchor')
}

// --- 7) knocked off the road: drive back under its own power, from a spread of angles
// and depths. Steering a standing car forwards scrubs the fronts and pins it at 0.01 m/s,
// so recovery reverses to reorient first and feeds the steering back in with speed. The
// give-up relocate is the backstop for whatever that still can't solve. ---
{
  let recovered = 0, slowest = 0
  const cases: [number, number][] = []
  for (const d of [8, 12, 25, 45]) for (const turn of [0, 0.9, 1.9, 3.1, -0.8, -2.2]) cases.push([d, turn])
  for (const [d, turn] of cases) {
    // one car, built explicitly: using spawn()[0] made this case silently re-roll every
    // time TRAFFIC_COUNT changed, because the spread puts car 0 somewhere else on the map
    const brain = makeTrafficBrains(map, 1, 0)[0]
    const w0 = trafficSpawn(brain)
    const t = { brain, car: makeCarState(w0.x, w0.z, w0.yaw) }
    const road = new Map<string, CarState>([[t.brain.id, t.car]])
    const right = { x: Math.cos(t.car.yaw), z: -Math.sin(t.car.yaw) }
    t.car.x += right.x * d; t.car.z += right.z * d; t.car.yaw += turn
    let backOn = -1
    for (let i = 0; i < 60 * 30; i++) {
      t.brain.offroadT = 0; t.brain.wedgeT = 0 // suppress the teleport: unaided only
      const r = stepTrafficBrain(t.brain, t.car, road, PHYS_DT)
      step(t.car, r.input)
      if (backOn < 0 && t.car.surfFL !== 'offroad' && t.car.surfRL !== 'offroad') backOn = i
    }
    if (backOn >= 0) { recovered++; slowest = Math.max(slowest, backOn / 60) }
  }
  console.log(`knocked off the road: ${recovered}/${cases.length} drove back unaided · slowest ${slowest.toFixed(1)}s`)
  check(recovered >= 18, 'most orientations recover without the teleport backstop')
  check(slowest < 25, 'a successful recovery does not take all day')
}

// --- 8) the backstop: whatever can't drive out gets lifted back onto the ring, sooner
// when nobody is close enough to watch it happen. ---
{
  for (const [label, watcher] of [['unseen', false], ['player watching', true]] as const) {
    const cars = spawn()
    const t = cars[0]
    const road = new Map<string, CarState>([[t.brain.id, t.car]])
    // the highway extension means "40 m right of the ring" can land on another road —
    // scan around the spawn for a spot that is genuinely offroad before stranding him
    const a0 = Math.atan2(-Math.sin(t.car.yaw), Math.cos(t.car.yaw))
    const sx = t.car.x, sz = t.car.z
    for (const da of [0, 0.5, -0.5, 1.0, -1.0, 1.6, -1.6, Math.PI]) {
      const x = sx + Math.cos(a0 + da) * 40, z = sz + Math.sin(a0 + da) * 40
      if (map.surfaceAt(x, z) === 'offroad' && map.surfaceAt(x + 3, z) === 'offroad' && map.surfaceAt(x, z + 3) === 'offroad') {
        t.car.x = x; t.car.z = z
        break
      }
    }
    t.car.yaw += 3.1
    if (watcher) road.set('p1', makeCarState(t.car.x + 8, t.car.z + 8, 0))
    let home = -1
    for (let i = 0; i < 60 * 40 && home < 0; i++) {
      const r = stepTrafficBrain(t.brain, t.car, road, PHYS_DT)
      step(t.car, r.input)
      if (t.car.surfFL !== 'offroad' && t.car.surfRL !== 'offroad') home = i
    }
    console.log(`stranded 40m out, ${label}: back on the road at ${home < 0 ? 'NEVER' : (home / 60).toFixed(1) + 's'}`)
    check(home > 0, `${label}: never left stranded forever`)
  }
}


// --- 9) two-way traffic: cars running the loop the other way must pass oncoming cars
// cleanly, on the far side, WITHOUT braking for them. The corridor that keeps sight of
// the car in front through a curve opens to 4.4 m at ten metres, which is wider than the
// gap between the lanes — so oncoming cars read as obstacles unless carAhead treats them
// specially, and every civilian brakes for every car it meets. ---
{
  const cars = spawn()
  const road = new Map(cars.map((t) => [t.brain.id, t.car] as const))
  const withLoop = cars.filter((t) => !t.brain.oncoming)
  const against = cars.filter((t) => t.brain.oncoming)
  let contact = 0, minGap = Infinity, passes = 0, yieldedToOncoming = 0
  const travelled = cars.map(() => 0)
  const prevPos = cars.map((t) => ({ x: t.car.x, z: t.car.z }))
  const wasNear = new Set<string>()
  for (let i = 0; i < 60 * 120; i++) {
    for (const [ci, t] of cars.entries()) {
      const r = stepTrafficBrain(t.brain, t.car, road, PHYS_DT)
      step(t.car, r.input)
      travelled[ci] += Math.hypot(t.car.x - prevPos[ci].x, t.car.z - prevPos[ci].z)
      prevPos[ci] = { x: t.car.x, z: t.car.z }
    }
    for (let a = 0; a < cars.length; a++) {
      for (let b = a + 1; b < cars.length; b++) {
        contact = Math.max(contact, collideCarPair(cars[a].car, cars[b].car))
      }
    }
    // count head-on passes and watch the gap/speed only while actually meeting someone
    for (const w of withLoop) {
      for (const o of against) {
        const g = gapOf(w.car, o.car)
        const key = w.brain.id + o.brain.id
        if (g < 14) {
          minGap = Math.min(minGap, g)
          if (!wasNear.has(key)) { wasNear.add(key); passes++ }
        } else wasNear.delete(key)
      }
    }
    // the actual failure mode: picking a car in the FAR LANE as the thing to yield to
    if (i > 180) {
      for (const t of cars) {
        // must mirror exactly what the brain asks for, lane and all — calling the bare
        // cone here measures a code path the AI no longer uses
        const ob = carAhead(t.car, road, 26, { path: t.brain.path, from: t.brain.wpIndex })
        if (!ob) continue
        const other = cars.find((c) => c.brain.id === ob.id)
        if (other && other.brain.oncoming !== t.brain.oncoming) yieldedToOncoming++
      }
    }
  }
  console.log(`two-way 120s: ${withLoop.length} with the loop, ${against.length} against · ${passes} head-on passes · closest ${minGap.toFixed(1)}m · yielded to the far lane ${(yieldedToOncoming / 60).toFixed(1)}s · travelled ${travelled.map((m) => m.toFixed(0)).join('/')}m · contact ${contact.toFixed(2)}`)
  check(against.length > 0, 'some civilians actually drive the other way')
  check(passes > 5, 'the two directions genuinely meet, so this case tests something')
  check(contact === 0, 'oncoming cars pass without touching')
  // Centre distance is the wrong metric for two cars passing side by side — at the
  // moment they're level it is just the lane separation, nothing like a car length.
  // What matters is that they're never in the same lane and never touch.
  check(minGap > 1.9, 'they pass on opposite sides, not down the same line')
  // The outcome is what matters: with two-way traffic on an 844 m loop, everyone should
  // still be covering ground at close to their cruise. Some far-lane yielding is correct
  // — a car that has genuinely drifted onto my line IS my problem, whichever way it
  // points — so the seconds figure is a tripwire for a regression (the old cone scored
  // 25.6 s and had civilians braking for every car they met), not a target of zero.
  check(travelled.every((m) => m > 700), 'two-way traffic still flows — nobody is stuck behind the far lane')
  check(yieldedToOncoming / 60 < 15, 'far-lane yielding stays incidental, not systematic')
}

console.log(failures ? `\n${failures} check(s) failed` : '\nall checks passed')
process.exit(failures ? 1 : 0)

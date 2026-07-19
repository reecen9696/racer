// Headless check of the Tacos town integration: surfaces, entry drive, collision.
import { makeCarState, stepCar, InputFrame } from '../src/shared/physics'
import { TUNING, PHYS_DT, TILE } from '../src/shared/constants'
import { parseMap, TACOS_TOWN } from '../src/shared/map'
import { TACOS_PAVED } from '../src/shared/tacosTown.generated'

const map = parseMap()
let fail = 0
const check = (label: string, ok: boolean, extra = ''): void => {
  console.log(`${ok ? 'PASS' : 'FAIL'}  ${label}${extra ? '  (' + extra + ')' : ''}`)
  if (!ok) fail++
}

// --- surfaces ---
const stubX = 22 * TILE, stubZ = 5 * TILE
check('stub tile is asphalt', map.surfaceAt(stubX, stubZ) === 'asphalt', map.surfaceAt(stubX, stubZ))
check('stub east edge asphalt', map.surfaceAt(22.4 * TILE, stubZ) === 'asphalt', map.surfaceAt(22.4 * TILE, stubZ))
const mainX = TACOS_TOWN.x + 16, mainZ = TACOS_TOWN.z - 8.7
check('town main street asphalt', map.surfaceAt(mainX, mainZ) === 'asphalt', map.surfaceAt(mainX, mainZ))
check('town entry strip asphalt', map.surfaceAt(TACOS_TOWN.x - 86, TACOS_TOWN.z - 8.7) === 'asphalt')
check('town sidewalk is curb', map.surfaceAt(TACOS_TOWN.x + 45, TACOS_TOWN.z - 40) === 'curb', map.surfaceAt(TACOS_TOWN.x + 45, TACOS_TOWN.z - 40))
check('north EW street asphalt', map.surfaceAt(TACOS_TOWN.x + 50, TACOS_TOWN.z + 78) === 'asphalt')
check('east NS street asphalt', map.surfaceAt(TACOS_TOWN.x + 104, TACOS_TOWN.z - 40) === 'asphalt')
check('outside town still offroad', map.surfaceAt(TACOS_TOWN.x - 120, TACOS_TOWN.z + 60) === 'offroad')

// --- town colliders present ---
const townBoxes = map.colliders.filter((c) => c.minX > TACOS_TOWN.x - 95)
check('town colliders registered', townBoxes.length > 100, String(townBoxes.length))

// --- entry drive: from the stub, full throttle east down main street ---
{
  const car = makeCarState(21 * TILE, stubZ, Math.PI / 2) // on the stub, facing east
  const input: InputFrame = { seq: 0, steer: 0, throttle: 1, brake: 0, handbrake: false, headlights: true }
  let minSurf = 'asphalt'
  for (let i = 0; i < 60 * 14; i++) {
    stepCar(car, input, TUNING, PHYS_DT, map.surfaceAt, map.colliders, undefined)
    if (car.surfRL !== 'asphalt') minSurf = car.surfRL
  }
  check('entry drive stays on asphalt', minSurf === 'asphalt', `surf=${minSurf}`)
  check('entry drive reaches town centre', car.x > TACOS_TOWN.x + 10, `x=${car.x.toFixed(1)} z=${car.z.toFixed(1)} v=${(car.speed * 3.6).toFixed(0)}km/h`)
  check('entry drive stays in street', Math.abs(car.z - mainZ) < 11, `z off ${(car.z - mainZ).toFixed(1)}`)
}

// --- collision: drive north from the main intersection into the OXXO block ---
{
  const car = makeCarState(TACOS_TOWN.x - 8, TACOS_TOWN.z - 9, 0) // facing +z (south)... yaw 0 = +z
  const input: InputFrame = { seq: 0, steer: 0, throttle: 1, brake: 0, handbrake: false, headlights: true }
  for (let i = 0; i < 60 * 6; i++) stepCar(car, input, TUNING, PHYS_DT, map.surfaceAt, map.colliders, undefined)
  // OXXO front face: local z -0.5 → world TACOS_TOWN.z - 0.5
  const oxxoFront = TACOS_TOWN.z - 0.5
  check('car stopped by OXXO wall', car.z < oxxoFront + 1.2, `z=${car.z.toFixed(1)} wall=${oxxoFront.toFixed(1)} v=${(car.speed * 3.6).toFixed(0)}km/h`)
}

// --- the OXXO forecourt must be drivable, not a wall ---
// The store and its parking slab are one FBX mesh; a plain AABB collider seals
// the lot. tacos-dump rasterizes the shell so only the walls are solid.
{
  const car = makeCarState(TACOS_TOWN.x + 1, TACOS_TOWN.z - 9, 0) // on the EW street, facing the lot
  const input: InputFrame = { seq: 0, steer: 0, throttle: 1, brake: 0, handbrake: false, headlights: true }
  for (let i = 0; i < 60 * 6; i++) stepCar(car, input, TUNING, PHYS_DT, map.surfaceAt, map.colliders, undefined)
  const lz = car.z - TACOS_TOWN.z
  check('car drives into the OXXO lot', lz > 15, `z-local=${lz.toFixed(1)} (lot spans 0..24)`)
  check('lot still bounded to the north', lz < 26, `z-local=${lz.toFixed(1)}`)
}

// --- nothing natural may grow on the paved forecourt ---
// The scatters plant on any non-road 'curb' ground clear of a collider, so
// opening the lot up made it a prime spot for trees/bushes/rocks. TACOS_PAVED
// marks it asphalt; the lamp planter skips it too (a shell collider is hollow,
// so its interior otherwise reads as clear ground and gets a pole inside).
{
  for (const lot of TACOS_PAVED) {
    for (const margin of [0, 2]) {
      const on = map.props.filter((p) => {
        const lx = p.x - TACOS_TOWN.x, lz = p.z - TACOS_TOWN.z
        return lx > lot.minX - margin && lx < lot.maxX + margin && lz > lot.minZ - margin && lz < lot.maxZ + margin
      })
      check(`paved lot clear of props (+${margin}m)`, on.length === 0, on.map((p) => p.kind).join(',') || 'clear')
    }
    const mid = { x: TACOS_TOWN.x + (lot.minX + lot.maxX) / 2, z: TACOS_TOWN.z + (lot.minZ + lot.maxZ) / 2 }
    check('paved lot is tarmac', map.surfaceAt(mid.x, mid.z) === 'asphalt', map.surfaceAt(mid.x, mid.z))
  }
}

// --- collision: drive west→east into the east-row buildings on main street ---
{
  const car = makeCarState(TACOS_TOWN.x + 60, TACOS_TOWN.z - 9, Math.PI / 2)
  const input: InputFrame = { seq: 0, steer: 0, throttle: 1, brake: 0, handbrake: false, headlights: true }
  for (let i = 0; i < 60 * 8; i++) stepCar(car, input, TUNING, PHYS_DT, map.surfaceAt, map.colliders, undefined)
  // east NS street continues at x local 94..114 — car should cross it and stop at
  // the far building row (local maxX ~114+) or earlier furniture; must not exceed town edge
  check('eastbound car contained by buildings', car.x < TACOS_TOWN.x + 131, `x-local=${(car.x - TACOS_TOWN.x).toFixed(1)}`)
}

console.log(fail ? `\n${fail} FAILURES` : '\nall good')
process.exit(fail ? 1 : 0)

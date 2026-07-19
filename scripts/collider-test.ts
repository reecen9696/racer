// Guards the map's prop colliders against the one failure mode that ruins driving:
// a collider whose reach extends onto drivable surface, i.e. an invisible wall in the
// racing line. The car's collision circle is r=1.0 (see stepCar), so a box pushes the
// car centre out to 1.0 beyond its surface — if drivable ground lies within that, the
// car gets shoved while legitimately on the road.
import { parseMap } from '../src/shared/map'

const CAR_R = 1.0
const map = parseMap()

// nearest drivable (asphalt/curb) surface to a point, fine polar scan
function distToDrivable(x: number, z: number, limit = 4): number {
  let best = Infinity
  for (let a = 0; a < 72; a++) {
    const ca = Math.cos((a / 72) * Math.PI * 2), sa = Math.sin((a / 72) * Math.PI * 2)
    for (let d = 0.05; d <= limit; d += 0.05) {
      const s = map.surfaceAt(x + ca * d, z + sa * d)
      if (s === 'asphalt' || s === 'curb') { if (d < best) best = d; break }
    }
  }
  return best
}

const smalls = map.props.filter((p) => p.kind === 'tree_small')
console.log(`props: ${smalls.length} small trees · colliders now ${map.colliders.length}`)

// every collider that sits on a small tree must clear the road by more than the car radius
let offenders = 0
let tightest = Infinity
let withCollider = 0
for (const p of smalls) {
  const hit = map.colliders.find(
    (c) => p.x > c.minX - 1e-6 && p.x < c.maxX + 1e-6 && p.z > c.minZ - 1e-6 && p.z < c.maxZ + 1e-6 && c.maxX - c.minX < 1.0,
  )
  if (!hit) continue
  withCollider++
  const half = (hit.maxX - hit.minX) / 2
  const clear = distToDrivable(p.x, p.z) - half // box surface → drivable
  tightest = Math.min(tightest, clear)
  if (clear <= CAR_R) {
    offenders++
    if (offenders <= 5) console.log(`  OFFENDER at ${p.x.toFixed(1)},${p.z.toFixed(1)} clears only ${clear.toFixed(2)}m (need > ${CAR_R})`)
  }
}

console.log(`small trees with colliders: ${withCollider}/${smalls.length} (rest sit too near the road, left passable)`)
console.log(`tightest clearance from a trunk box to drivable surface: ${tightest.toFixed(2)}m (need > ${CAR_R})`)

// No collider may be BUILT FOR a bush — they burst and vanish, so a collider would
// outlive the model as an invisible wall. Test the collider's centre against the bush
// position; mere containment would false-positive on a bush that happens to stand
// inside some unrelated box.
const bushes = map.props.filter((p) => p.kind === 'bush')
const bushOwned = bushes.filter((p) =>
  map.colliders.some((c) => Math.abs((c.minX + c.maxX) / 2 - p.x) < 1e-6 && Math.abs((c.minZ + c.maxZ) / 2 - p.z) < 1e-6),
).length
console.log(`colliders built for bushes: ${bushOwned} (want 0, of ${bushes.length} bushes)`)

const ok = offenders === 0 && bushOwned === 0 && withCollider > smalls.length * 0.9
console.log(
  ok
    ? '\nALL OK — small trees collide, no invisible walls on the racing line'
    : `\nFAILED — ${offenders} racing-line offenders, ${bushOwned} bush colliders`,
)
process.exit(ok ? 0 : 1)

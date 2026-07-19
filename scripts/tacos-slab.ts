// Rasterizes a named Tacos mesh's triangles into an XZ occupancy grid at car
// height, so meshes that merge a building with its forecourt (OXXO's AABB
// swallows the whole parking lot) get colliders on the walls only.
import { readFileSync } from 'node:fs'
import * as THREE from 'three'
import { FBXLoader } from 'three/examples/jsm/loaders/FBXLoader.js'

THREE.TextureLoader.prototype.load = function () { return new THREE.Texture() }

const target = process.argv[2] ?? 'OXXO'
const CELL = 0.5   // grid resolution, metres
const Y_LO = 0.6   // car-height slab: below this is kerb/slab, above is roof
const Y_HI = 2.2

const buf = readFileSync('public/newmodels/Tacos/Tacos.fbx')
const group = new FBXLoader().parse(buf.buffer.slice(buf.byteOffset, buf.byteOffset + buf.byteLength), '/')
group.updateMatrixWorld(true)
const S = 0.01

let mesh: THREE.Mesh | null = null
group.traverse((o) => { if ((o as THREE.Mesh).isMesh && o.name === target) mesh = o as THREE.Mesh })
if (!mesh) throw new Error(`mesh ${target} not found`)

const geo = (mesh as THREE.Mesh).geometry
const pos = geo.attributes.position
const idx = geo.index
const triCount = idx ? idx.count / 3 : pos.count / 3
const a = new THREE.Vector3(), b = new THREE.Vector3(), c = new THREE.Vector3()
const box = new THREE.Box3().setFromObject(mesh as THREE.Mesh)
const minX = box.min.x * S, minZ = box.min.z * S
const nx = Math.ceil((box.max.x * S - minX) / CELL)
const nz = Math.ceil((box.max.z * S - minZ) / CELL)
const grid = new Uint8Array(nx * nz)

for (let t = 0; t < triCount; t++) {
  const i0 = idx ? idx.getX(t * 3) : t * 3
  const i1 = idx ? idx.getX(t * 3 + 1) : t * 3 + 1
  const i2 = idx ? idx.getX(t * 3 + 2) : t * 3 + 2
  a.fromBufferAttribute(pos, i0).applyMatrix4((mesh as THREE.Mesh).matrixWorld)
  b.fromBufferAttribute(pos, i1).applyMatrix4((mesh as THREE.Mesh).matrixWorld)
  c.fromBufferAttribute(pos, i2).applyMatrix4((mesh as THREE.Mesh).matrixWorld)
  const yLo = Math.min(a.y, b.y, c.y) * S, yHi = Math.max(a.y, b.y, c.y) * S
  if (yHi < Y_LO || yLo > Y_HI) continue
  // stamp the triangle's XZ footprint — walls are thin, so AABB-per-tri is fine
  const tMinX = Math.min(a.x, b.x, c.x) * S, tMaxX = Math.max(a.x, b.x, c.x) * S
  const tMinZ = Math.min(a.z, b.z, c.z) * S, tMaxZ = Math.max(a.z, b.z, c.z) * S
  for (let gz = Math.floor((tMinZ - minZ) / CELL); gz <= Math.floor((tMaxZ - minZ) / CELL); gz++) {
    for (let gx = Math.floor((tMinX - minX) / CELL); gx <= Math.floor((tMaxX - minX) / CELL); gx++) {
      if (gx >= 0 && gx < nx && gz >= 0 && gz < nz) grid[gz * nx + gx] = 1
    }
  }
}

console.log(`${target}: ${triCount} tris, grid ${nx}x${nz} @${CELL}m, origin (${minX.toFixed(1)}, ${minZ.toFixed(1)})`)
for (let gz = 0; gz < nz; gz++) {
  let row = ''
  for (let gx = 0; gx < nx; gx++) row += grid[gz * nx + gx] ? '#' : '.'
  console.log((minZ + gz * CELL).toFixed(1).padStart(7) + ' ' + row)
}
console.log('   x -> ' + minX.toFixed(1) + ' .. ' + (minX + nx * CELL).toFixed(1))

// greedy rectangle cover of the occupied cells
const boxes: Array<{ minX: number; minZ: number; maxX: number; maxZ: number }> = []
const used = new Uint8Array(grid)
for (let gz = 0; gz < nz; gz++) {
  for (let gx = 0; gx < nx; gx++) {
    if (!used[gz * nx + gx]) continue
    let w = 0
    while (gx + w < nx && used[gz * nx + gx + w]) w++
    let h = 1
    grow: while (gz + h < nz) {
      for (let k = 0; k < w; k++) if (!used[(gz + h) * nx + gx + k]) break grow
      h++
    }
    for (let dz = 0; dz < h; dz++) for (let dx = 0; dx < w; dx++) used[(gz + dz) * nx + gx + dx] = 0
    boxes.push({
      minX: +(minX + gx * CELL).toFixed(2),
      minZ: +(minZ + gz * CELL).toFixed(2),
      maxX: +(minX + (gx + w) * CELL).toFixed(2),
      maxZ: +(minZ + (gz + h) * CELL).toFixed(2),
    })
  }
}
console.log(`\n${boxes.length} boxes:`)
console.log(JSON.stringify(boxes))

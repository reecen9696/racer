// One-shot analysis: parse Tacos.fbx headlessly and dump mesh names + world
// AABBs (in metres, cm×0.01, model centred the way modeltest positions it) so
// we can derive shared colliders / lamp positions for the town set piece.
import { readFileSync, writeFileSync } from 'node:fs'
import * as THREE from 'three'
import { FBXLoader } from 'three/examples/jsm/loaders/FBXLoader.js'

// headless: no Image/DOM — return empty textures instead of loading
THREE.TextureLoader.prototype.load = function () { return new THREE.Texture() }

const buf = readFileSync('public/newmodels/Tacos/Tacos.fbx')
const loader = new FBXLoader()
const group = loader.parse(buf.buffer.slice(buf.byteOffset, buf.byteOffset + buf.byteLength), '/')

group.updateMatrixWorld(true)
const S = 0.01

// Meshes that merge a building with open ground it doesn't occupy — OXXO's
// single mesh carries the store shell AND its forecourt slab, so its AABB
// walls off the parking lot. For these we rasterize the triangles in the
// car-height slab and emit wall boxes instead of the bounding box.
const SHELL_MESHES = ['OXXO']
const CELL = 0.5 // grid resolution, metres
const Y_LO = 0.6 // below: kerbs and slabs, above: roofs and awnings
const Y_HI = 2.2

interface Box { minX: number; minZ: number; maxX: number; maxZ: number }

function wallBoxes(mesh: THREE.Mesh, box: THREE.Box3): Box[] {
  const geo = mesh.geometry
  const pos = geo.attributes.position
  const idx = geo.index
  const triCount = idx ? idx.count / 3 : pos.count / 3
  const a = new THREE.Vector3(), b = new THREE.Vector3(), c = new THREE.Vector3()
  const oX = box.min.x * S, oZ = box.min.z * S
  const nx = Math.max(1, Math.ceil((box.max.x * S - oX) / CELL))
  const nz = Math.max(1, Math.ceil((box.max.z * S - oZ) / CELL))
  const grid = new Uint8Array(nx * nz)

  for (let t = 0; t < triCount; t++) {
    const i0 = idx ? idx.getX(t * 3) : t * 3
    const i1 = idx ? idx.getX(t * 3 + 1) : t * 3 + 1
    const i2 = idx ? idx.getX(t * 3 + 2) : t * 3 + 2
    a.fromBufferAttribute(pos, i0).applyMatrix4(mesh.matrixWorld)
    b.fromBufferAttribute(pos, i1).applyMatrix4(mesh.matrixWorld)
    c.fromBufferAttribute(pos, i2).applyMatrix4(mesh.matrixWorld)
    if (Math.max(a.y, b.y, c.y) * S < Y_LO || Math.min(a.y, b.y, c.y) * S > Y_HI) continue
    // walls are thin, so stamping each triangle's XZ AABB is close enough
    const gx0 = Math.floor((Math.min(a.x, b.x, c.x) * S - oX) / CELL)
    const gx1 = Math.floor((Math.max(a.x, b.x, c.x) * S - oX) / CELL)
    const gz0 = Math.floor((Math.min(a.z, b.z, c.z) * S - oZ) / CELL)
    const gz1 = Math.floor((Math.max(a.z, b.z, c.z) * S - oZ) / CELL)
    for (let gz = Math.max(0, gz0); gz <= Math.min(nz - 1, gz1); gz++)
      for (let gx = Math.max(0, gx0); gx <= Math.min(nx - 1, gx1); gx++) grid[gz * nx + gx] = 1
  }

  // greedy maximal-rectangle cover of the occupied cells
  const boxes: Box[] = []
  for (let gz = 0; gz < nz; gz++) {
    for (let gx = 0; gx < nx; gx++) {
      if (!grid[gz * nx + gx]) continue
      let w = 0
      while (gx + w < nx && grid[gz * nx + gx + w]) w++
      let h = 1
      grow: while (gz + h < nz) {
        for (let k = 0; k < w; k++) if (!grid[(gz + h) * nx + gx + k]) break grow
        h++
      }
      for (let dz = 0; dz < h; dz++) for (let dx = 0; dx < w; dx++) grid[(gz + dz) * nx + gx + dx] = 0
      boxes.push({
        minX: +(oX + gx * CELL).toFixed(2),
        minZ: +(oZ + gz * CELL).toFixed(2),
        maxX: +(oX + (gx + w) * CELL).toFixed(2),
        maxZ: +(oZ + (gz + h) * CELL).toFixed(2),
      })
    }
  }
  return boxes
}

const meshes: Array<{ name: string; mat: string; min: number[]; max: number[]; walls?: Box[] }> = []
const bbox = new THREE.Box3()
group.traverse((o) => {
  const m = o as THREE.Mesh
  if (!m.isMesh) return
  bbox.setFromObject(m)
  const mats = Array.isArray(m.material) ? m.material : [m.material]
  meshes.push({
    name: m.name,
    mat: mats.map((x) => x?.name ?? '?').join('|'),
    min: [bbox.min.x * S, bbox.min.y * S, bbox.min.z * S].map((v) => +v.toFixed(2)),
    max: [bbox.max.x * S, bbox.max.y * S, bbox.max.z * S].map((v) => +v.toFixed(2)),
    ...(SHELL_MESHES.includes(m.name) ? { walls: wallBoxes(m, bbox) } : {}),
  })
})

const total = new THREE.Box3().setFromObject(group)
const out = {
  total: {
    min: [total.min.x * S, total.min.y * S, total.min.z * S].map((v) => +v.toFixed(2)),
    max: [total.max.x * S, total.max.y * S, total.max.z * S].map((v) => +v.toFixed(2)),
  },
  meshes,
}
writeFileSync('scripts/tacos-meshes.json', JSON.stringify(out, null, 1))
console.log('total', out.total, meshes.length, 'meshes')
const byName = new Map<string, number>()
for (const m of meshes) byName.set(m.name.replace(/[_.]?\d+$/, ''), (byName.get(m.name.replace(/[_.]?\d+$/, '')) ?? 0) + 1)
console.log([...byName.entries()].sort((a, b) => b[1] - a[1]).map(([n, c]) => `${n}×${c}`).join(', '))

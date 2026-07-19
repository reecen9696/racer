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
const meshes: Array<{ name: string; mat: string; min: number[]; max: number[] }> = []
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

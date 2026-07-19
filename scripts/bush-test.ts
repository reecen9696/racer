// Headless bush explode/regrow test: fake a 2-part instanced bush, drive through it.
import * as THREE from 'three'
import { BushFx } from '../src/client/fx/bushes'
import { InstancedProp } from '../src/client/world/world'

const geo = new THREE.BoxGeometry(1, 1, 1)
const mat = new THREE.MeshBasicMaterial()
const makePart = (x: number, z: number) => {
  const inst = new THREE.InstancedMesh(geo, mat, 1)
  const orig = new THREE.Matrix4().makeTranslation(x, 0.5, z)
  inst.setMatrixAt(0, orig)
  return { inst, index: 0, orig }
}
const bush: InstancedProp = { x: 5, z: 0, parts: [makePart(5, 0), makePart(5, 0)] }
const fx = new BushFx([bush])
let exploded = 0
fx.onExplode = (x, z, sp) => { exploded++; console.log(`EXPLODE at ${x},${z} speed ${sp.toFixed(1)}`) }

const dt = 1 / 60
const m = new THREE.Matrix4()
const scaleOf = () => { bush.parts[0].inst.getMatrixAt(0, m); return new THREE.Vector3().setFromMatrixScale(m).x }

// creep past slowly — should NOT explode
for (let i = 0; i < 120; i++) fx.update(dt, [{ x: 5, z: -1 + i * 0.01, vx: 0, vz: 0.6 }])
console.log(`slow creep exploded: ${exploded > 0} (want false)`)
// drive through at 50 km/h
let carZ = -10
for (let i = 0; i < 120; i++) { carZ += 14 * dt; fx.update(dt, [{ x: 5, z: carZ, vx: 0, vz: 14 }]) }
console.log(`fast pass exploded: ${exploded === 1} (want true), scale now ${scaleOf().toFixed(4)} (want ~0)`)
// fast-forward past regrow delay
for (let i = 0; i < 62 * 60; i++) fx.update(dt, [])
console.log(`after 62s: scale ${scaleOf().toFixed(3)}`)
for (let i = 0; i < 15 * 60; i++) fx.update(dt, [])
console.log(`after +15s: scale ${scaleOf().toFixed(3)} (want 1.000)`)
// regrown bush is hittable again
for (let i = 0; i < 60; i++) { fx.update(dt, [{ x: 5, z: 0.5, vx: 0, vz: 14 }]) }
console.log(`re-hit works: ${exploded === 2} (want true)`)

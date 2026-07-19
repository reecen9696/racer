// Headless cone knockdown test: a car drives through a cone at 60 km/h.
import * as THREE from 'three'
import { ConePhysics, ConeRef } from '../src/client/fx/cones'

const wrapper = new THREE.Group()
const cone: ConeRef = { wrapper, x: 0, z: 0, rot: 0.3 }
const phys = new ConePhysics([cone], () => 0)
let hits = 0
phys.onHit = (speed) => { hits++; console.log(`HIT at rel speed ${speed.toFixed(1)} m/s`) }

// car approaches along +z at 16.7 m/s (60 km/h), front circle passes through origin
const dt = 1 / 60
let carZ = -12
let maxY = 0, maxDist = 0
for (let i = 0; i < 60 * 6; i++) {
  carZ += 16.7 * dt
  const hitters = [{ x: 0, z: carZ, vx: 0, vz: 16.7 }, { x: 0, z: carZ - 2.2, vx: 0, vz: 16.7 }]
  phys.update(dt, hitters)
  maxY = Math.max(maxY, wrapper.position.y)
  maxDist = Math.max(maxDist, Math.hypot(wrapper.position.x, wrapper.position.z))
}
const p = wrapper.position
const e = new THREE.Euler().setFromQuaternion(wrapper.quaternion)
console.log(`hits=${hits} downed=${phys.downed()}`)
console.log(`final pos=(${p.x.toFixed(1)}, ${p.y.toFixed(2)}, ${p.z.toFixed(1)}) peak height=${maxY.toFixed(2)}m thrown=${maxDist.toFixed(1)}m`)
console.log(`final tilt=${(Math.max(Math.abs(e.x), Math.abs(e.z)) * 180 / Math.PI).toFixed(0)}° (want ~90 = lying down)`)
// slow roll-past: cone should NOT wake below MIN_PUNT
const wrapper2 = new THREE.Group()
const phys2 = new ConePhysics([{ wrapper: wrapper2, x: 0, z: 0, rot: 0 }], () => 0)
let woke = false
phys2.onHit = () => { woke = true }
let cz = -3
for (let i = 0; i < 60 * 6; i++) { cz += 0.8 * dt; phys2.update(dt, [{ x: 0, z: cz, vx: 0, vz: 0.8 }]) }
console.log(`creep-past at 0.8 m/s wakes cone: ${woke} (want false)`)

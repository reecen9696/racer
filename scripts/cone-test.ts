// Headless cone knockdown test. Asserts the ROAD IS SOLID: the deepest point of the
// cone solid must never dip below the ground, at any tilt, on flat or sloped terrain.
import * as THREE from 'three'
import { ConePhysics, ConeRef } from '../src/client/fx/cones'

const H = 0.72 // cone height (m)
const R = 0.2 // base half-width (m)

// deepest point of a cone tilted by `tilt`, relative to its base-centre pivot
function lowestOffset(tilt: number): number {
  return Math.min(H * Math.cos(tilt), -R * Math.abs(Math.sin(tilt)), 0)
}

// recover the tilt angle from the posed wrapper quaternion
function tiltOf(w: THREE.Group): number {
  const up = new THREE.Vector3(0, 1, 0).applyQuaternion(w.quaternion)
  return Math.acos(THREE.MathUtils.clamp(up.y, -1, 1))
}

function run(label: string, heightAt: (x: number, z: number) => number, carSpeed: number): boolean {
  const wrapper = new THREE.Group()
  // world.ts places the wrapper on the ground at build time; mirror that, otherwise an
  // untouched cone reads as sitting at the origin
  wrapper.position.set(0, heightAt(0, 0), 0)
  const cone: ConeRef = { wrapper, x: 0, z: 0, rot: 0.3, h: H, r: R }
  const phys = new ConePhysics([cone], heightAt)
  let hits = 0
  phys.onHit = () => hits++

  const dt = 1 / 60
  let carZ = -12
  let worstSink = 0 // deepest the solid ever went below the surface
  let maxY = 0
  for (let i = 0; i < 60 * 8; i++) {
    carZ += carSpeed * dt
    phys.update(dt, [
      { x: 0, z: carZ, vx: 0, vz: carSpeed },
      { x: 0, z: carZ - 2.2, vx: 0, vz: carSpeed },
    ])
    const p = wrapper.position
    const ground = heightAt(p.x, p.z)
    const deepest = p.y + lowestOffset(tiltOf(wrapper))
    worstSink = Math.min(worstSink, deepest - ground)
    maxY = Math.max(maxY, p.y - ground)
  }
  const p = wrapper.position
  const restTilt = (tiltOf(wrapper) * 180) / Math.PI
  const clean = worstSink > -0.02
  console.log(
    `${label.padEnd(24)} hits=${hits} peak=${maxY.toFixed(2)}m thrown=${Math.hypot(p.x, p.z).toFixed(1)}m ` +
      `rest=${restTilt.toFixed(0)}° sink=${worstSink.toFixed(4)}m ${clean ? 'OK' : '<-- CLIPS THROUGH ROAD'}`,
  )
  return clean
}

const flat = () => 0
const slope = (x: number, z: number) => (x + z) * 0.06 // 6% grade
const bumpy = (x: number, z: number) => Math.sin(x * 0.4) * 0.3 + Math.cos(z * 0.35) * 0.25

let ok = true
ok = run('flat, 60 km/h', flat, 16.7) && ok
ok = run('flat, 120 km/h', flat, 33.3) && ok
ok = run('flat, gentle nudge', flat, 4) && ok
ok = run('6% slope, 60 km/h', slope, 16.7) && ok
ok = run('bumpy ground, 90 km/h', bumpy, 25) && ok

// a creep-past must not wake the cone at all
{
  const wrapper = new THREE.Group()
  const phys = new ConePhysics([{ wrapper, x: 0, z: 0, rot: 0, h: H, r: R }], flat)
  let woke = false
  phys.onHit = () => { woke = true }
  let cz = -3
  for (let i = 0; i < 60 * 6; i++) { cz += 0.8 * (1 / 60); phys.update(1 / 60, [{ x: 0, z: cz, vx: 0, vz: 0.8 }]) }
  console.log(`creep-past at 0.8 m/s wakes cone: ${woke} (want false)`)
  ok = !woke && ok
}

console.log(ok ? '\nALL OK — road is solid' : '\nFAILED')
process.exit(ok ? 0 : 1)

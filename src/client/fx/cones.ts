// Traffic-cone knockdown physics — client-side only. Cones are dressing, so every
// client simulates hits locally (your car AND remotes'): no server round-trip, and a
// few centimetres of divergence between clients is invisible for a cone. Cars pass
// straight through (no collider) — the cone gets punted, tumbles, bounces, and settles
// lying wherever it lands.
import * as THREE from 'three'

export interface ConeRef {
  wrapper: THREE.Group
  x: number
  z: number
  rot: number
  h?: number // model height (m) — measured from the GLB by world.ts
  r?: number // base half-width (m)
}

// a car for hit purposes: one circle centre + its world velocity
export interface ConeHitter {
  x: number
  z: number
  vx: number
  vz: number
}

interface Body {
  ref: ConeRef
  h: number
  r: number
  x: number
  y: number // BASE-CENTRE pivot height; the solid's lowest point is y - liftFor(tumble)
  z: number
  vx: number
  vy: number
  vz: number
  tumbleAxis: THREE.Vector3
  tumble: number // accumulated end-over-end angle
  tumbleTarget: number // lying-down angle eased into on rest
  spin: number // rad/s of tumble
  active: boolean
  resting: boolean
}

// How far the base-centre pivot must sit above the ground so no part of a cone tilted
// by `tilt` pokes through it. Cone = base disc (radius r) at local y=0, apex at y=h;
// tilting about a horizontal axis puts the apex at h·cos(tilt) and the base rim down at
// -r·|sin(tilt)|, so the deepest point is the lower of those two.
// Upright → 0, on its side → r, fully inverted → h. This is what makes the road solid.
function liftFor(tilt: number, h: number, r: number): number {
  return Math.max(-h * Math.cos(tilt), r * Math.abs(Math.sin(tilt)), 0)
}

const R_HIT = 1.35 // car circle centre → cone base distance that counts as contact
const GRAV = -22 // gamey gravity — snappy little arcs, not moon physics
const MIN_PUNT = 1.2 // m/s approach speed below which we don't wake the cone

export class ConePhysics {
  onHit: (speed: number, x: number, z: number) => void = () => {}
  private bodies: Body[] = []
  private q = new THREE.Quaternion()
  private qy = new THREE.Quaternion()
  private up = new THREE.Vector3(0, 1, 0)

  constructor(
    cones: ConeRef[],
    private heightAt: (x: number, z: number) => number,
  ) {
    for (const ref of cones) {
      this.bodies.push({
        ref,
        h: ref.h ?? 0.7,
        r: ref.r ?? 0.18,
        x: ref.x,
        y: this.heightAt(ref.x, ref.z),
        z: ref.z,
        vx: 0, vy: 0, vz: 0,
        tumbleAxis: new THREE.Vector3(1, 0, 0),
        tumble: 0,
        tumbleTarget: 0,
        spin: 0,
        active: false,
        resting: false,
      })
    }
  }

  update(dt: number, cars: ConeHitter[]): void {
    if (dt <= 0) return
    for (const b of this.bodies) {
      // --- contact: live cones wake, moving cones can be re-punted ---
      for (const c of cars) {
        const dx = b.x - c.x
        const dz = b.z - c.z
        const d2 = dx * dx + dz * dz
        if (d2 > R_HIT * R_HIT) continue
        const d = Math.sqrt(Math.max(d2, 1e-4))
        const nx = dx / d
        const nz = dz / d
        const rel = (c.vx - b.vx) * nx + (c.vz - b.vz) * nz // approach speed along the normal
        if (rel < MIN_PUNT) continue
        const carSp = Math.hypot(c.vx, c.vz)
        // carried along + shoved out of the way + popped upward
        b.vx = c.vx * 0.45 + nx * (2.0 + rel * 0.5)
        b.vz = c.vz * 0.45 + nz * (2.0 + rel * 0.5)
        // deflect off the nose: a dead-centre hit also kicks the cone toward whichever
        // side of the car's path it sits on — without this it surfs on the bumper and
        // gets re-punted down the whole straight
        if (carSp > 1) {
          const s = Math.sign(c.vx * dz - c.vz * dx) || (Math.random() < 0.5 ? -1 : 1)
          b.vx += (c.vz / carSp) * s * (1.2 + rel * 0.3)
          b.vz += (-c.vx / carSp) * s * (1.2 + rel * 0.3)
        }
        b.vy = Math.max(b.vy, 2.0 + Math.min(carSp * 0.2, 4.5))
        b.spin = (6 + Math.random() * 9) * (Math.random() < 0.5 ? -1 : 1)
        b.tumbleAxis.set(-b.vz, 0, b.vx).normalize() // ⊥ to travel — end-over-end
        b.active = true
        b.resting = false
        this.onHit(rel, b.x, b.z)
      }
      if (!b.active) continue

      if (b.resting) {
        // ease onto its side, then sleep — y tracks the tilt so it settles ON the
        // surface rather than sinking into it as the angle changes
        const diff = b.tumbleTarget - b.tumble
        if (Math.abs(diff) < 0.02) continue
        b.tumble += diff * Math.min(1, dt * 9)
        b.y = this.heightAt(b.x, b.z) + liftFor(b.tumble, b.h, b.r)
        this.pose(b)
        continue
      }

      // --- integrate flight/tumble ---
      b.vy += GRAV * dt
      b.x += b.vx * dt
      b.y += b.vy * dt
      b.z += b.vz * dt
      b.tumble += b.spin * dt

      // --- the road is solid: no part of the cone may pass below it ---
      const ground = this.heightAt(b.x, b.z)
      const floor = ground + liftFor(b.tumble, b.h, b.r)
      if (b.y <= floor) {
        b.y = floor
        if (b.vy < 0) b.vy = Math.abs(b.vy) > 2.2 ? -b.vy * 0.34 : 0 // bounce, then settle
        const f = Math.max(0, 1 - dt * 3.4) // scrubbing along the ground
        b.vx *= f
        b.vz *= f
        b.spin *= Math.max(0, 1 - dt * 2.6) // tumbling rubs out against the surface
      }

      if (b.y <= floor + 1e-3 && b.vy === 0 && b.vx * b.vx + b.vz * b.vz < 0.04 && Math.abs(b.spin) < 0.6) {
        // came to rest: finish on its side at the nearest lying-down angle
        b.vx = 0
        b.vz = 0
        b.spin = 0
        b.resting = true
        const side = Math.PI / 2
        b.tumbleTarget = Math.round((b.tumble - side) / Math.PI) * Math.PI + side
      }
      this.pose(b)
    }
  }

  // how many cones have been knocked over (debug/HUD)
  downed(): number {
    let n = 0
    for (const b of this.bodies) if (b.active) n++
    return n
  }

  private pose(b: Body): void {
    // b.y already carries the exact clearance for this tilt (see liftFor) — the sim
    // and the visual agree, so nothing ever renders inside the road
    b.ref.wrapper.position.set(b.x, b.y, b.z)
    this.qy.setFromAxisAngle(this.up, b.ref.rot)
    this.q.setFromAxisAngle(b.tumbleAxis, b.tumble)
    b.ref.wrapper.quaternion.multiplyQuaternions(this.q, this.qy)
  }
}

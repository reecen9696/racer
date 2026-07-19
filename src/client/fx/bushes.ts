// Destructible bushes — client-side dressing, like the cones. Drive through one and
// it bursts into leaves and vanishes; a minute-ish later it quietly grows back.
// Every client simulates hits locally (yours and remote cars') — no server state.
import * as THREE from 'three'
import { InstancedProp } from '../world/world'
import { ConeHitter } from './cones'

const R_HIT = 1.5 // car circle centre → bush centre contact distance
const MIN_SPEED = 2.5 // m/s — brushing past at parking speed doesn't detonate shrubbery
const REGROW_S = 70 // seconds gone before regrowth starts
const GROW_S = 1.6 // seconds of scale-up animation

type Phase = 'up' | 'gone' | 'growing'

interface Bush {
  ref: InstancedProp
  phase: Phase
  t: number // phase timer
}

const ZERO = new THREE.Matrix4().makeScale(0.0001, 0.0001, 0.0001)
const scratch = new THREE.Matrix4()
const pivot = new THREE.Matrix4()
const anchor = new THREE.Vector3()

export class BushFx {
  onExplode: (x: number, z: number, speed: number) => void = () => {}
  private bushes: Bush[] = []

  constructor(refs: InstancedProp[]) {
    for (const ref of refs) this.bushes.push({ ref, phase: 'up', t: 0 })
  }

  update(dt: number, cars: ConeHitter[]): void {
    if (dt <= 0) return
    for (const b of this.bushes) {
      if (b.phase === 'up') {
        for (const c of cars) {
          const dx = b.ref.x - c.x
          const dz = b.ref.z - c.z
          if (dx * dx + dz * dz > R_HIT * R_HIT) continue
          const sp = Math.hypot(c.vx, c.vz)
          if (sp < MIN_SPEED) continue
          b.phase = 'gone'
          // regrow staggered a little so a mown row doesn't pop back in unison
          b.t = REGROW_S * (0.85 + ((b.ref.x * 13 + b.ref.z * 7) % 10) / 30)
          this.setScale(b, 0)
          this.onExplode(b.ref.x, b.ref.z, sp)
          break
        }
      } else if (b.phase === 'gone') {
        b.t -= dt
        if (b.t <= 0) {
          b.phase = 'growing'
          b.t = 0
        }
      } else {
        b.t += dt
        const k = Math.min(1, b.t / GROW_S)
        // overshoot ease: pops slightly past full then settles — reads as "sproing"
        const s = k < 1 ? k * k * (3 - 2 * k) * (1 + 0.15 * Math.sin(k * Math.PI)) : 1
        this.setScale(b, s)
        if (k >= 1) b.phase = 'up'
      }
    }
  }

  private setScale(b: Bush, s: number): void {
    for (const part of b.ref.parts) {
      if (s <= 0) {
        part.inst.setMatrixAt(part.index, ZERO)
      } else {
        // scale about the instance's WORLD anchor (its own translation) — scaling in
        // authored-geometry space slides packs whose models sit far from their origin
        anchor.setFromMatrixPosition(part.orig)
        pivot.makeScale(s, s, s)
        scratch.makeTranslation(anchor.x, anchor.y, anchor.z).multiply(pivot)
        pivot.makeTranslation(-anchor.x, -anchor.y, -anchor.z)
        scratch.multiply(pivot).multiply(part.orig)
        part.inst.setMatrixAt(part.index, scratch)
      }
      part.inst.instanceMatrix.needsUpdate = true
    }
  }
}

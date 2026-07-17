// Tire smoke + offroad dust: pooled additive/alpha sprites, tinted by the nearby
// baked light color (orange smoke under sodium lamps — Part 1 §5.6).
import * as THREE from 'three'
import { makeGlowTexture } from './lights'

interface Puff {
  sprite: THREE.Sprite
  vx: number; vy: number; vz: number
  life: number
  maxLife: number
  grow: number
}

export class SmokePool {
  group = new THREE.Group()
  private pool: Puff[] = []
  private next = 0

  constructor(size = 140) {
    const tex = makeGlowTexture()
    for (let i = 0; i < size; i++) {
      const mat = new THREE.SpriteMaterial({
        map: tex,
        transparent: true,
        opacity: 0,
        depthWrite: false,
        fog: true,
      })
      const s = new THREE.Sprite(mat)
      s.visible = false
      this.group.add(s)
      this.pool.push({ sprite: s, vx: 0, vy: 0, vz: 0, life: 0, maxLife: 1, grow: 1 })
    }
  }

  spawn(x: number, y: number, z: number, tint: THREE.Color, dust = false): void {
    const p = this.pool[this.next]
    this.next = (this.next + 1) % this.pool.length
    p.sprite.visible = true
    p.sprite.position.set(x, y, z)
    p.sprite.scale.setScalar(dust ? 0.7 : 0.55)
    const mat = p.sprite.material as THREE.SpriteMaterial
    if (dust) mat.color.setRGB(0.32 * tint.r + 0.12, 0.26 * tint.g + 0.09, 0.2 * tint.b + 0.06)
    else mat.color.copy(tint).multiplyScalar(0.85)
    mat.opacity = dust ? 0.4 : 0.5
    const r = Math.random
    p.vx = (r() - 0.5) * 1.6
    p.vy = 0.8 + r() * 1.2
    p.vz = (r() - 0.5) * 1.6
    p.maxLife = p.life = dust ? 0.7 : 1.1
    p.grow = dust ? 2.4 : 3.2
  }

  update(dt: number): void {
    for (const p of this.pool) {
      if (!p.sprite.visible) continue
      p.life -= dt
      if (p.life <= 0) {
        p.sprite.visible = false
        continue
      }
      p.sprite.position.x += p.vx * dt
      p.sprite.position.y += p.vy * dt
      p.sprite.position.z += p.vz * dt
      const t = p.life / p.maxLife
      p.sprite.scale.addScalar(p.grow * dt)
      ;(p.sprite.material as THREE.SpriteMaterial).opacity = t * 0.5
    }
  }
}

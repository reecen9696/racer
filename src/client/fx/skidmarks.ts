// Ground marks laid along the driving path in a big ring buffer — black rubber on
// asphalt, crushed-grass tracks on the lawns. Persistent evidence of a good run
// (Part 1 §5.6): the buffer holds kilometres of marks before the oldest recycle.
import * as THREE from 'three'

export interface SkidStyle {
  color: [number, number, number]
  width: number // half-width of each tire stripe (m)
  maxQuads: number
  alphaCap: number
  y: number // lift above ground to dodge z-fighting
}

export const RUBBER: SkidStyle = { color: [0.015, 0.015, 0.02], width: 0.14, maxQuads: 12000, alphaCap: 0.55, y: 0.025 }
// crushed grass reads LIGHTER than the lawn around it
export const GRASS: SkidStyle = { color: [0.42, 0.58, 0.33], width: 0.19, maxQuads: 12000, alphaCap: 0.4, y: 0.02 }

export class Skidmarks {
  mesh: THREE.Mesh
  private geo: THREE.BufferGeometry
  private positions: Float32Array
  private alphas: Float32Array
  private head = 0
  private lastL: THREE.Vector3 | null = null
  private lastR: THREE.Vector3 | null = null
  private style: SkidStyle

  constructor(style: SkidStyle = RUBBER) {
    this.style = style
    this.geo = new THREE.BufferGeometry()
    this.positions = new Float32Array(style.maxQuads * 6 * 3)
    this.alphas = new Float32Array(style.maxQuads * 6)
    this.geo.setAttribute('position', new THREE.BufferAttribute(this.positions, 3).setUsage(THREE.DynamicDrawUsage))
    this.geo.setAttribute('aAlpha', new THREE.BufferAttribute(this.alphas, 1).setUsage(THREE.DynamicDrawUsage))
    this.geo.drawRange.count = 0

    const [cr, cg, cb] = style.color
    const mat = new THREE.ShaderMaterial({
      vertexShader: /* glsl */ `
        attribute float aAlpha;
        varying float vA;
        void main() {
          vA = aAlpha;
          gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
        }`,
      fragmentShader: /* glsl */ `
        varying float vA;
        void main() {
          gl_FragColor = vec4(${cr.toFixed(3)}, ${cg.toFixed(3)}, ${cb.toFixed(3)}, vA);
        }`,
      transparent: true,
      depthWrite: false,
    })
    this.mesh = new THREE.Mesh(this.geo, mat)
    this.mesh.frustumCulled = false
    this.mesh.renderOrder = 1
  }

  // called each physics step with rear wheel world positions
  addSegment(rl: THREE.Vector3, rr: THREE.Vector3, strength: number): void {
    if (this.lastL && this.lastR) {
      this.pushQuad(this.lastL, rl, strength)
      this.pushQuad(this.lastR, rr, strength)
    }
    this.lastL = rl.clone()
    this.lastR = rr.clone()
  }

  breakSegment(): void {
    this.lastL = this.lastR = null
  }

  private pushQuad(a: THREE.Vector3, b: THREE.Vector3, strength: number): void {
    const dx = b.x - a.x, dz = b.z - a.z
    const len = Math.hypot(dx, dz)
    if (len < 0.05 || len > 3) return
    const w = this.style.width
    const nx = (-dz / len) * w, nz = (dx / len) * w
    const y = this.style.y
    const i = this.head * 18
    const P = this.positions
    // two triangles
    const verts = [
      a.x - nx, a.y + y, a.z - nz, a.x + nx, a.y + y, a.z + nz, b.x + nx, b.y + y, b.z + nz,
      a.x - nx, a.y + y, a.z - nz, b.x + nx, b.y + y, b.z + nz, b.x - nx, b.y + y, b.z - nz,
    ]
    P.set(verts, i)
    const alpha = Math.min(this.style.alphaCap, strength)
    this.alphas.fill(alpha, this.head * 6, this.head * 6 + 6)
    this.head = (this.head + 1) % this.style.maxQuads
    this.geo.drawRange.count = Math.min(this.geo.drawRange.count + 6, this.style.maxQuads * 6)
    ;(this.geo.attributes.position as THREE.BufferAttribute).needsUpdate = true
    ;(this.geo.attributes.aAlpha as THREE.BufferAttribute).needsUpdate = true
  }
}

// Skidmarks: dark decal quads laid along the drift path in a ring buffer.
// Persistent evidence of a good run (Part 1 §5.6).
import * as THREE from 'three'

const MAX_QUADS = 2400 // per instance (both rear wheels share)

export class Skidmarks {
  mesh: THREE.Mesh
  private geo: THREE.BufferGeometry
  private positions: Float32Array
  private alphas: Float32Array
  private head = 0
  private lastL: THREE.Vector3 | null = null
  private lastR: THREE.Vector3 | null = null

  constructor() {
    this.geo = new THREE.BufferGeometry()
    this.positions = new Float32Array(MAX_QUADS * 6 * 3)
    this.alphas = new Float32Array(MAX_QUADS * 6)
    this.geo.setAttribute('position', new THREE.BufferAttribute(this.positions, 3).setUsage(THREE.DynamicDrawUsage))
    this.geo.setAttribute('aAlpha', new THREE.BufferAttribute(this.alphas, 1).setUsage(THREE.DynamicDrawUsage))
    this.geo.drawRange.count = 0

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
          gl_FragColor = vec4(0.02, 0.02, 0.03, vA);
        }`,
      transparent: true,
      depthWrite: false,
    })
    this.mesh = new THREE.Mesh(this.geo, mat)
    this.mesh.frustumCulled = false
    this.mesh.renderOrder = 1
  }

  // called each physics step while drifting on asphalt with rear wheel world positions
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
    const w = 0.14
    const nx = (-dz / len) * w, nz = (dx / len) * w
    const y = 0.025
    const i = this.head * 18
    const P = this.positions
    // two triangles
    const verts = [
      a.x - nx, y, a.z - nz, a.x + nx, y, a.z + nz, b.x + nx, y, b.z + nz,
      a.x - nx, y, a.z - nz, b.x + nx, y, b.z + nz, b.x - nx, y, b.z - nz,
    ]
    P.set(verts, i)
    const alpha = Math.min(0.55, strength)
    this.alphas.fill(alpha, this.head * 6, this.head * 6 + 6)
    this.head = (this.head + 1) % MAX_QUADS
    this.geo.drawRange.count = Math.min(this.geo.drawRange.count + 6, MAX_QUADS * 6)
    ;(this.geo.attributes.position as THREE.BufferAttribute).needsUpdate = true
    ;(this.geo.attributes.aAlpha as THREE.BufferAttribute).needsUpdate = true
  }
}

// The four PS1 light tricks (Part 1 §5): additive glow sprites, headlight volume
// cones, fake ground-pool projections, emissive heads. No real lights anywhere.
import * as THREE from 'three'
import { Lamp } from '../../shared/map'
import { psxTexture } from '../renderer/patch'

// soft radial blob, hand-dithered, 32x32 (shared by everything glowy)
export function makeGlowTexture(elongate = 1): THREE.Texture {
  const S = 32
  const c = document.createElement('canvas')
  c.width = c.height = S
  const ctx = c.getContext('2d')!
  const img = ctx.createImageData(S, S)
  for (let y = 0; y < S; y++) {
    for (let x = 0; x < S; x++) {
      const dx = (x - S / 2 + 0.5) / (S / 2)
      const dy = ((y - S / 2 + 0.5) / (S / 2)) * elongate
      const d = Math.sqrt(dx * dx + dy * dy)
      let a = Math.max(0, 1 - d)
      a = a * a
      // ordered dither on the alpha so the blob has that chunky edge
      const t = (((x % 4) * 4 + (y % 4)) / 16 - 0.5) / 10
      a = Math.max(0, Math.min(1, a + t))
      const i = (y * S + x) * 4
      img.data[i] = img.data[i + 1] = img.data[i + 2] = 255
      img.data[i + 3] = Math.round(a * 255)
    }
  }
  ctx.putImageData(img, 0, 0)
  return psxTexture(new THREE.CanvasTexture(c))
}

const glowTex = /* lazy */ { value: null as THREE.Texture | null }
function getGlowTex(): THREE.Texture {
  if (!glowTex.value) glowTex.value = makeGlowTexture()
  return glowTex.value
}

export function makeGlowSprite(color: THREE.ColorRepresentation, size: number, opacity = 1): THREE.Sprite {
  const mat = new THREE.SpriteMaterial({
    map: getGlowTex(),
    color,
    blending: THREE.AdditiveBlending,
    depthWrite: false,
    transparent: true,
    opacity,
    fog: false,
  })
  const s = new THREE.Sprite(mat)
  s.scale.setScalar(size)
  return s
}

// flat additive quad hovering just above the road — the fake "light hitting asphalt"
export function makePoolQuad(color: THREE.ColorRepresentation, w: number, d: number, opacity: number): THREE.Mesh {
  const mat = new THREE.MeshBasicMaterial({
    map: getGlowTex(),
    color,
    blending: THREE.AdditiveBlending,
    depthWrite: false,
    transparent: true,
    opacity,
    fog: false,
  })
  const mesh = new THREE.Mesh(new THREE.PlaneGeometry(w, d), mat)
  mesh.rotation.x = -Math.PI / 2
  mesh.position.y = 0.03
  mesh.renderOrder = 2
  return mesh
}

// street lamps: glow sprite at head height + pool on the road
export function buildLampGlows(lamps: Lamp[], mistAt: (x: number, z: number) => number, heightAt: (x: number, z: number) => number = () => 0): THREE.Group {
  const g = new THREE.Group()
  for (const l of lamps) {
    const col = new THREE.Color(l.color[0], l.color[1], l.color[2])
    const mist = mistAt(l.x, l.z)
    const h = heightAt(l.x, l.z)
    const glow = makeGlowSprite(col, 4.4 + mist * 1.8, 0.85)
    glow.position.set(l.x, h + l.height, l.z)
    g.add(glow)
    const pool = makePoolQuad(col, l.radius * 1.3, l.radius * 1.3, 0.55)
    pool.position.set(l.x, h + 0.05, l.z)
    g.add(pool)
  }
  return g
}

// translucent volume cone: additive, alpha fades root→far end via a custom shader.
// Fade uses geometry z (0 at the headlight, uLength at the far end) — NOT uv.y, whose
// orientation on ConeGeometry put full alpha on the far rim (visible end circles).
const CONE_VERT = /* glsl */ `
uniform float uLength;
varying float vT; // 0 at root (headlight), 1 at far end
void main() {
  vT = clamp(position.z / uLength, 0.0, 1.0);
  gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
}`
const CONE_FRAG = /* glsl */ `
uniform vec3 uColor;
uniform float uAlpha;
varying float vT;
void main() {
  float a = (1.0 - vT) * uAlpha;
  a *= a;
  gl_FragColor = vec4(uColor * a, a);
}`

export function makeHeadlightCone(length = 19, radius = 2.8): THREE.Mesh {
  const geo = new THREE.ConeGeometry(radius, length, 8, 4, true)
  // cone points along -Y by default with tip at +Y/2; rotate so it points +Z, root at origin
  geo.rotateX(-Math.PI / 2)
  geo.translate(0, 0, length / 2)
  const mat = new THREE.ShaderMaterial({
    vertexShader: CONE_VERT,
    fragmentShader: CONE_FRAG,
    uniforms: {
      uColor: { value: new THREE.Color(1.0, 0.93, 0.72) },
      uAlpha: { value: 0.62 },
      uLength: { value: length },
    },
    blending: THREE.AdditiveBlending,
    transparent: true,
    depthWrite: false,
    side: THREE.DoubleSide,
  })
  const mesh = new THREE.Mesh(geo, mat)
  mesh.renderOrder = 3
  return mesh
}

// the full per-car light rig: cones + ground pool + glow sprites + tail/brake lights
export class HeadlightRig {
  group = new THREE.Group()
  private cones: THREE.Mesh[] = []
  private pool: THREE.Mesh
  private headGlows: THREE.Sprite[] = []
  private tailGlows: THREE.Sprite[] = []
  private brakeGlows: THREE.Sprite[] = []
  private reverseGlow: THREE.Sprite

  constructor(carWidth = 1.7, carLen = 4.5) {
    const hw = carWidth * 0.36
    const front = carLen * 0.46
    const rear = -carLen * 0.47
    const y = 0.62

    for (const side of [-1, 1]) {
      const cone = makeHeadlightCone()
      cone.position.set(side * hw, y, front)
      cone.rotation.x = 0.045 // angled slightly down
      this.cones.push(cone)
      this.group.add(cone)

      const glow = makeGlowSprite(0xfff2cc, 1.3, 1.0)
      glow.position.set(side * hw, y, front + 0.1)
      this.headGlows.push(glow)
      this.group.add(glow)

      const tail = makeGlowSprite(0xff2211, 0.5, 0.7)
      tail.position.set(side * hw, y, rear)
      this.tailGlows.push(tail)
      this.group.add(tail)

      // second, larger sprite for braking — the red bloom in fog
      const brake = makeGlowSprite(0xff2a18, 1.5, 0.0)
      brake.position.set(side * hw, y, rear - 0.05)
      this.brakeGlows.push(brake)
      this.group.add(brake)
    }

    this.reverseGlow = makeGlowSprite(0xffffff, 0.8, 0.0)
    this.reverseGlow.position.set(0, y, rear)
    this.group.add(this.reverseGlow)

    this.pool = makePoolQuad(0xfff0c2, 10, 20, 0.7)
    this.pool.position.set(0, 0.04, front + 8.5)
    this.group.add(this.pool)
  }

  update(headlights: boolean, braking: boolean, reversing: boolean, mist: number): void {
    for (const c of this.cones) {
      c.visible = headlights
      ;(c.material as THREE.ShaderMaterial).uniforms.uAlpha.value = 0.55 + mist * 0.25
    }
    for (const g of this.headGlows) (g.material as THREE.SpriteMaterial).opacity = headlights ? 1.0 : 0
    this.pool.visible = headlights
    ;(this.pool.material as THREE.MeshBasicMaterial).opacity = 0.62 + mist * 0.15
    // tail lights stay on regardless (lights-off cars must remain visible in MP)
    for (const g of this.tailGlows) (g.material as THREE.SpriteMaterial).opacity = headlights ? 0.7 : 0.35
    for (const g of this.brakeGlows) (g.material as THREE.SpriteMaterial).opacity = braking ? 0.85 : 0
    ;(this.reverseGlow.material as THREE.SpriteMaterial).opacity = reversing ? 0.6 : 0
  }
}

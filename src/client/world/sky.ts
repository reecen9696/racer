// Procedural night sky (Part 1 §5.5): gradient dome baked with dithering at low
// res + sparse stars + a big low moon. Horizon color == fog color so geometry
// dissolves into the sky.
import * as THREE from 'three'
import { psxTexture } from '../renderer/patch'
import { hash2 } from '../../shared/map'

export const FOG_COLOR = new THREE.Color('#20244a')
export const HORIZON_GLOW = new THREE.Color('#4f4a78') // light contamination band at the skyline

export function makeSky(): THREE.Group {
  const W = 1024, H = 512
  const canvas = document.createElement('canvas')
  canvas.width = W
  canvas.height = H
  const ctx = canvas.getContext('2d')!
  const img = ctx.createImageData(W, H)

  const top = new THREE.Color('#1a2044')
  const mid = new THREE.Color('#2c3468')
  const low = new THREE.Color('#434b8a')

  // value-noise for the horizon cloud bank (blocky, PS1-CG flavored)
  const noise = (x: number, y: number, scale: number, salt: number): number => {
    const gx = Math.floor(x / scale), gy = Math.floor(y / scale)
    const fx = (x % scale) / scale, fy = (y % scale) / scale
    const s = (a: number, b: number) => hash2(a, b, salt)
    const sx = fx * fx * (3 - 2 * fx), sy = fy * fy * (3 - 2 * fy)
    return (
      s(gx, gy) * (1 - sx) * (1 - sy) +
      s(gx + 1, gy) * sx * (1 - sy) +
      s(gx, gy + 1) * (1 - sx) * sy +
      s(gx + 1, gy + 1) * sx * sy
    )
  }

  for (let y = 0; y < H; y++) {
    // v: 0 = top of sky, 1 = horizon
    const v = y / (H - 1)
    const c = new THREE.Color()
    if (v < 0.55) c.lerpColors(top, mid, v / 0.55)
    else if (v < 0.82) c.lerpColors(mid, low, (v - 0.55) / 0.27)
    else c.lerpColors(low, HORIZON_GLOW, (v - 0.82) / 0.18)
    for (let x = 0; x < W; x++) {
      const cr = { r: c.r, g: c.g, b: c.b }
      // layered cloud streaks: thin high wisps + a soft bank hugging the horizon
      const wisp = noise(x, y * 3.2, 90, 7) * noise(x + 500, y * 2, 41, 8)
      const bank = noise(x, y, 55, 9)
      const horizonness = Math.max(0, (v - 0.45) / 0.55)
      const cloud = Math.max(0, wisp - 0.32) * 0.8 * horizonness + Math.max(0, bank - 0.55) * 0.5 * horizonness * horizonness
      if (cloud > 0.02) {
        cr.r += cloud * 0.16
        cr.g += cloud * 0.17
        cr.b += cloud * 0.24
      }
      // ordered-dither the gradient into ~5-bit so it bands beautifully
      const t = ((x % 4) * 4 + (y % 4)) / 16 - 0.5
      const i = (y * W + x) * 4
      img.data[i] = Math.max(0, Math.round((cr.r + t / 40) * 31)) * 8
      img.data[i + 1] = Math.max(0, Math.round((cr.g + t / 40) * 31)) * 8
      img.data[i + 2] = Math.max(0, Math.round((cr.b + t / 40) * 31)) * 8
      img.data[i + 3] = 255
    }
  }

  // stars: sparse single-pixel + a few 2x2, upper 60% only
  for (let i = 0; i < 1200; i++) {
    const x = Math.floor(hash2(i, 1) * W)
    const y = Math.floor(hash2(i, 2) * H * 0.6)
    const b = 160 + Math.floor(hash2(i, 3) * 95)
    const idx = (y * W + x) * 4
    img.data[idx] = b
    img.data[idx + 1] = b
    img.data[idx + 2] = Math.min(255, b + 20)
    if (hash2(i, 4) > 0.85 && x < W - 1 && y < H - 1) {
      for (const [dx, dy] of [[1, 0], [0, 1], [1, 1]]) {
        const j = ((y + dy) * W + (x + dx)) * 4
        img.data[j] = b * 0.7
        img.data[j + 1] = b * 0.7
        img.data[j + 2] = b * 0.7
      }
    }
  }

  ctx.putImageData(img, 0, 0)

  // the moon: big low disc with dithered halo (visible down streets)
  const moonX = W * 0.68, moonY = H * 0.52, moonR = 22
  for (let y = -52; y <= 52; y++) {
    for (let x = -52; x <= 52; x++) {
      const d = Math.hypot(x, y)
      const px = Math.round(moonX + x), py = Math.round(moonY + y)
      if (px < 0 || px >= W || py < 0 || py >= H) continue
      if (d <= moonR) {
        // cratered disc
        const crater = hash2(px >> 2, py >> 2, 9) < 0.24 ? 40 : 0
        const shade = 232 - crater - d * 1.2
        ctx.fillStyle = `rgb(${shade | 0},${shade | 0},${Math.min(255, shade + 10) | 0})`
        ctx.fillRect(px, py, 1, 1)
      } else if (d < 52) {
        // dithered halo
        const p = 1 - (d - moonR) / (52 - moonR)
        if (hash2(px, py, 10) < p * p * 0.45) {
          ctx.fillStyle = 'rgba(185,190,220,0.5)'
          ctx.fillRect(px, py, 1, 1)
        }
      }
    }
  }

  const tex = psxTexture(new THREE.CanvasTexture(canvas))
  tex.colorSpace = THREE.SRGBColorSpace

  const geo = new THREE.SphereGeometry(900, 24, 12, 0, Math.PI * 2, 0, Math.PI * 0.55)
  const mat = new THREE.MeshBasicMaterial({ map: tex, side: THREE.BackSide, fog: false, depthWrite: false })
  const dome = new THREE.Mesh(geo, mat)
  dome.renderOrder = -10
  dome.frustumCulled = false
  const sky = new THREE.Group()
  sky.add(dome)

  // real 3D star points on the dome — crisp at any render resolution
  {
    const N = 750
    const pos = new Float32Array(N * 3)
    for (let i = 0; i < N; i++) {
      const az = hash2(i, 21) * Math.PI * 2
      const el = 0.06 + hash2(i, 22) * 1.35 // radians above horizon
      const r = 870
      pos[i * 3] = Math.cos(el) * Math.cos(az) * r
      pos[i * 3 + 1] = Math.sin(el) * r
      pos[i * 3 + 2] = Math.cos(el) * Math.sin(az) * r
    }
    const g = new THREE.BufferGeometry()
    g.setAttribute('position', new THREE.BufferAttribute(pos, 3))
    const m = new THREE.PointsMaterial({
      color: 0xd8ddff,
      size: 2.2,
      sizeAttenuation: false,
      transparent: true,
      opacity: 0.9,
      fog: false,
      depthWrite: false,
    })
    const stars = new THREE.Points(g, m)
    stars.renderOrder = -9
    stars.frustumCulled = false
    sky.add(stars)
    // a brighter handful
    const g2 = g.clone()
    const idx: number[] = []
    for (let i = 0; i < N; i++) if (hash2(i, 23) < 0.12) idx.push(i)
    const pos2 = new Float32Array(idx.length * 3)
    idx.forEach((i, k) => {
      pos2[k * 3] = pos[i * 3] * 0.999
      pos2[k * 3 + 1] = pos[i * 3 + 1] * 0.999
      pos2[k * 3 + 2] = pos[i * 3 + 2] * 0.999
    })
    const gBig = new THREE.BufferGeometry()
    gBig.setAttribute('position', new THREE.BufferAttribute(pos2, 3))
    const big = new THREE.Points(gBig, new THREE.PointsMaterial({ color: 0xffffff, size: 3.5, sizeAttenuation: false, transparent: true, opacity: 0.95, fog: false, depthWrite: false }))
    big.renderOrder = -9
    big.frustumCulled = false
    sky.add(big)
  }

  // sprite moon high over the fields (always in commonly-driven sightlines)
  {
    const mc = document.createElement('canvas')
    mc.width = mc.height = 64
    const mctx = mc.getContext('2d')!
    for (let y = 0; y < 64; y++) {
      for (let x = 0; x < 64; x++) {
        const d = Math.hypot(x - 32, y - 32)
        if (d < 26) {
          const crater = hash2(x >> 2, y >> 2, 31) < 0.22 ? 42 : 0
          const v = 235 - crater - d * 1.1
          mctx.fillStyle = `rgb(${v | 0},${v | 0},${Math.min(255, v + 12) | 0})`
          mctx.fillRect(x, y, 1, 1)
        } else if (d < 32 && hash2(x, y, 32) < (1 - (d - 26) / 6) * 0.5) {
          mctx.fillStyle = 'rgba(200,205,235,0.6)'
          mctx.fillRect(x, y, 1, 1)
        }
      }
    }
    const moonTex = psxTexture(new THREE.CanvasTexture(mc))
    moonTex.colorSpace = THREE.SRGBColorSpace
    const moonMat = new THREE.SpriteMaterial({ map: moonTex, fog: false, depthWrite: false, transparent: true })
    const moon = new THREE.Sprite(moonMat)
    const dir = new THREE.Vector3(0.62, 0.5, 0.55).normalize()
    moon.position.copy(dir.multiplyScalar(840))
    moon.scale.setScalar(85)
    moon.renderOrder = -8
    sky.add(moon)
    const halo = new THREE.Sprite(new THREE.SpriteMaterial({ map: moonTex, fog: false, depthWrite: false, transparent: true, opacity: 0.12, blending: THREE.AdditiveBlending }))
    halo.position.copy(moon.position)
    halo.scale.setScalar(170)
    halo.renderOrder = -9
    sky.add(halo)
  }

  // optional drop-in override: put an equirect night sky at game/public/assets/skybox.png
  fetch('/assets/skybox.png', { method: 'HEAD' })
    .then((res) => {
      // vite's SPA fallback answers 200 with html for missing files — require an image
      if (!res.ok || !res.headers.get('content-type')?.startsWith('image')) return
      new THREE.TextureLoader().load('/assets/skybox.png', (t) => {
        psxTexture(t)
        t.colorSpace = THREE.SRGBColorSpace
        mat.map = t
        mat.needsUpdate = true
        console.log('[sky] using assets/skybox.png override')
      })
    })
    .catch(() => {})
  return sky
}

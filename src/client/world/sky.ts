// Procedural night sky (Part 1 §5.5): gradient dome baked with dithering at low
// res + sparse stars + a big low moon. Horizon color == fog color so geometry
// dissolves into the sky.
import * as THREE from 'three'
import { psxTexture, patchMaterial } from '../renderer/patch'
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

  // NB: the moon used to ALSO be baked into this texture, at a different azimuth from
  // the sprite one below — two moons in the sky whenever both were in frame. The sprite
  // is the one that survives: it stays crisp at any internal resolution, where a baked
  // disc gets chewed up by the dome's UV stretch near the horizon.

  const tex = psxTexture(new THREE.CanvasTexture(canvas))
  tex.colorSpace = THREE.SRGBColorSpace

  // Coarse on purpose: 16x8 segments give the snap below something to bite on. A denser
  // dome has vertices so close together that the grid rounds them all to the same place
  // and the wobble vanishes.
  const geo = new THREE.SphereGeometry(900, 16, 8, 0, Math.PI * 2, 0, Math.PI * 0.55)
  const mat = new THREE.MeshBasicMaterial({ map: tex, side: THREE.BackSide, fog: false, depthWrite: false })
  // The dome was the one material in the game skipping the PSX patch, so the sky sat
  // dead still while the world jittered around it. Snap on, affine off — affine swim
  // across triangles this large would drag the whole horizon around, not shimmer it.
  patchMaterial(mat, { affine: false, snap: true })
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

  // The moon. Sits LOW — about 13 degrees up — because the chase cam looks slightly
  // down at the road, so anything above ~25 deg is out of frame the entire time you're
  // driving. Azimuth matches the directional moonlight in main.ts, so the light in the
  // scene comes from where the moon visibly is instead of from nowhere.
  {
    // Flat white disc, hard pixel edge, nothing else. The cratered-and-haloed version
    // read as mush at this size — detail that small just turns to noise once the sprite
    // is scaled down and the PSX texture filter has had its way with it.
    const SIZE = 48
    const R = 22 // small canvas + NearestFilter = a genuinely stair-stepped edge
    const mc = document.createElement('canvas')
    mc.width = mc.height = SIZE
    const mctx = mc.getContext('2d')!
    for (let y = 0; y < SIZE; y++) {
      for (let x = 0; x < SIZE; x++) {
        // +0.5 samples pixel centres, so the circle is symmetric rather than
        // one column heavier on the top-left
        if (Math.hypot(x - SIZE / 2 + 0.5, y - SIZE / 2 + 0.5) < R) {
          mctx.fillStyle = '#ffffff'
          mctx.fillRect(x, y, 1, 1)
        }
      }
    }
    const moonTex = psxTexture(new THREE.CanvasTexture(mc))
    moonTex.colorSpace = THREE.SRGBColorSpace
    const moonMat = new THREE.SpriteMaterial({ map: moonTex, fog: false, depthWrite: false, transparent: true })
    const moon = new THREE.Sprite(moonMat)
    // xz matches the directional light's (30, _, -40); elevation is the low bit
    const el = 0.23 // radians above the horizon (~13 deg)
    const dir = new THREE.Vector3(0.6 * Math.cos(el), Math.sin(el), -0.8 * Math.cos(el))
    moon.position.copy(dir.multiplyScalar(840))
    moon.scale.setScalar(38)
    moon.renderOrder = -8
    sky.add(moon)
    // No halo sprite — an additive glow around a hard-edged circle just fuzzes the edge
    // that makes it read as pixel art in the first place.
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

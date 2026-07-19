// Tacos town set piece: a full Mexican street-grid FBX parked east of the highway
// stub. The FBX ships with NO texture links (Unity wires them inside its
// .unitypackage), but every material is named after its texture file — so maps
// bind by name via the build-time manifest. *_Emissor textures become emissive
// maps (OXXO windows, lamp heads, traffic lights). Every mesh gets the same
// lamp-tint vertex bake the terrain uses, so the street lamps pool on the town's
// own road mesh exactly like they do on the village asphalt.
import * as THREE from 'three'
import { FBXLoader } from 'three/examples/jsm/loaders/FBXLoader.js'
import { TACOS_TOWN } from '../../shared/map'
import { TACOS_HIDDEN } from '../../shared/tacosTown.generated'
import { patchMaterial, psxTexture } from '../renderer/patch'
import type { World } from './world'

export async function buildTacosTown(world: World): Promise<void> {
  const [manifest, fbx] = await Promise.all([
    fetch('/assets/tacos/manifest.json').then((r) => r.json() as Promise<Record<string, string>>),
    new FBXLoader().loadAsync('/assets/tacos/Tacos.fbx'),
  ])

  const texLoader = new THREE.TextureLoader()
  const loadTex = (path: string): THREE.Texture => {
    const t = texLoader.load(path)
    t.colorSpace = THREE.SRGBColorSpace
    // FBX UVs tile outside [0,1] — default clamp smears edge pixels across walls
    t.wrapS = t.wrapT = THREE.RepeatWrapping
    return psxTexture(t)
  }

  // material name → texture file ("Asphalt.jpg.001" → Textures/Asphalt.jpg)
  const findTex = (matName: string): string | undefined => {
    const raw = matName.toLowerCase().replace(/\.\d+$/, '')
    if (manifest[raw]) return raw
    return ['png', 'jpg', 'jpeg'].map((e) => `${raw}.${e}`).find((k) => manifest[k])
  }

  const cache = new Map<THREE.Material, THREE.Material>()
  const convert = (src: THREE.Material): THREE.Material => {
    const hit = cache.get(src)
    if (hit) return hit
    const raw = (src.name || '').toLowerCase()
    const key = findTex(src.name || '')
    let mat: THREE.Material
    if (key) {
      const map = loadTex(manifest[key])
      const stem = key.replace(/\.(png|jpe?g)$/, '')
      // emissor naming varies: X → X_Emissor.*, and X_01 → X_Emissor_01.*
      const wanted = [stem + '_emissor']
      const numbered = stem.match(/^(.*)_(\d+)$/)
      if (numbered) wanted.push(`${numbered[1]}_emissor_${numbered[2]}`)
      const emKey = Object.keys(manifest).find((k) => wanted.some((w) => k.startsWith(w + '.')))
      if (emKey) {
        // glowing surfaces go Lambert so the emissive term exists; everything else
        // stays unlit like the rest of the world
        const lam = new THREE.MeshLambertMaterial({ map, vertexColors: true })
        lam.emissive.set(0xffffff)
        lam.emissiveMap = loadTex(manifest[emKey])
        mat = lam
      } else {
        mat = new THREE.MeshBasicMaterial({ map, vertexColors: true })
      }
      if (key.endsWith('.png') && /plant|tree|branch|leaf|bush/.test(stem)) {
        ;(mat as THREE.MeshBasicMaterial).alphaTest = 0.5
        mat.side = THREE.DoubleSide
      }
    } else if (/glass|transparent|mirror/.test(raw)) {
      mat = new THREE.MeshBasicMaterial({ color: 0x9fb6c8, transparent: true, opacity: 0.35 })
    } else if (/cable/.test(raw)) {
      mat = new THREE.MeshBasicMaterial({ color: 0x0a0a0c })
    } else {
      // texture-less utility mats (__DEFAULT, Plates…) — dim grey, tinted like all else
      mat = new THREE.MeshBasicMaterial({ color: 0x595959, vertexColors: true })
    }
    patchMaterial(mat)
    cache.set(src, mat)
    return mat
  }

  const meshes: THREE.Mesh[] = []
  fbx.traverse((o) => {
    const m = o as THREE.Mesh
    if (!m.isMesh) return
    if (TACOS_HIDDEN.includes(m.name)) {
      m.visible = false
      return
    }
    m.material = Array.isArray(m.material) ? m.material.map(convert) : convert(m.material)
    meshes.push(m)
  })

  fbx.scale.setScalar(0.01) // authored in cm
  fbx.position.set(TACOS_TOWN.x, TACOS_TOWN.y, TACOS_TOWN.z)
  world.group.add(fbx)
  fbx.updateMatrixWorld(true)

  // vertex bake: sample the shared lamp list at every vertex (same pipeline as the
  // terrain bake) — sodium pools land on the town roads and building fronts
  const v = new THREE.Vector3()
  const tint = new THREE.Color()
  for (const m of meshes) {
    const geo = m.geometry as THREE.BufferGeometry
    const pos = geo.getAttribute('position')
    const colors = new Float32Array(pos.count * 3)
    for (let i = 0; i < pos.count; i++) {
      v.fromBufferAttribute(pos, i)
      m.localToWorld(v)
      world.lampTintAt(v.x, v.z, tint)
      colors[i * 3] = tint.r
      colors[i * 3 + 1] = tint.g
      colors[i * 3 + 2] = tint.b
    }
    geo.setAttribute('color', new THREE.BufferAttribute(colors, 3))
  }
}

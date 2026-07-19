// Asset loading + normalization. Every mesh becomes an unlit (or Gouraud for cars)
// PSX-patched material; every texture goes nearest/no-mips. Cars normalize to 4.5 m.
import * as THREE from 'three'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js'
import { OBJLoader } from 'three/examples/jsm/loaders/OBJLoader.js'
import { FBXLoader } from 'three/examples/jsm/loaders/FBXLoader.js'
import { patchMaterial, psxTexture } from '../renderer/patch'
import { CAR_LENGTH } from '../../shared/constants'
import { carDef } from '../../shared/cars'

const gltfLoader = new GLTFLoader()
const objLoader = new OBJLoader()
const fbxLoader = new FBXLoader()
const texLoader = new THREE.TextureLoader()

export async function loadTexture(url: string): Promise<THREE.Texture> {
  try {
    const tex = await texLoader.loadAsync(url)
    tex.colorSpace = THREE.SRGBColorSpace
    tex.name = url
    return psxTexture(tex)
  } catch (e) {
    throw new Error('texture load failed: ' + url)
  }
}

export interface LoadedModel {
  object: THREE.Group
  meshes: { geometry: THREE.BufferGeometry; material: THREE.Material; matrix: THREE.Matrix4 }[]
}

// Convert whatever materials a file shipped with into unlit MeshBasicMaterial
// (world is baked light — Part 2 §A.2.3), keeping the diffuse map.
function toPSXMaterial(src: THREE.Material, overrideMap?: THREE.Texture, lambert = false, foliage = false): THREE.Material {
  const anySrc = src as THREE.MeshStandardMaterial
  const map = overrideMap ?? anySrc.map ?? null
  if (map) psxTexture(map)
  const mat = lambert
    ? new THREE.MeshLambertMaterial({ map })
    : new THREE.MeshBasicMaterial({ map })
  const alpha = anySrc.transparent || (anySrc.alphaTest ?? 0) > 0
  if (foliage || alpha || (map && /bush|tree|hedge|leaf|foliage|plant/i.test(map.name ?? ''))) {
    // foliage planes: cut alpha, render both faces (single-sided canopy quads read
    // as solid black slabs from behind)
    mat.alphaTest = 0.5
    mat.transparent = false
    mat.side = THREE.DoubleSide
  }
  patchMaterial(mat)
  return mat
}

function collectMeshes(root: THREE.Object3D, overrideMap?: THREE.Texture, lambert = false, foliage = false): LoadedModel {
  root.updateMatrixWorld(true)
  const meshes: LoadedModel['meshes'] = []
  const matCache = new Map<THREE.Material, THREE.Material>()
  root.traverse((o) => {
    const m = o as THREE.Mesh
    if (!m.isMesh) return
    const convert = (mat: THREE.Material) => {
      let out = matCache.get(mat)
      if (!out) {
        out = toPSXMaterial(mat, overrideMap, lambert, foliage)
        matCache.set(mat, out)
      }
      return out
    }
    m.material = Array.isArray(m.material) ? m.material.map(convert) : convert(m.material)
    const mats = Array.isArray(m.material) ? m.material : [m.material]
    meshes.push({ geometry: m.geometry, material: mats[0], matrix: m.matrixWorld.clone() })
  })
  return { object: root as THREE.Group, meshes }
}

export async function loadGLB(url: string, overrideMap?: THREE.Texture, foliage = false): Promise<LoadedModel> {
  try {
    const gltf = await gltfLoader.loadAsync(url)
    return collectMeshes(gltf.scene, overrideMap, false, foliage)
  } catch (e) {
    throw new Error('glb load failed: ' + url + ' — ' + e)
  }
}

export async function loadFBX(url: string, overrideMap?: THREE.Texture, foliage = false): Promise<LoadedModel> {
  try {
    const obj = await fbxLoader.loadAsync(url)
    return collectMeshes(obj, overrideMap, false, foliage)
  } catch (e) {
    throw new Error('fbx load failed: ' + url + ' — ' + e)
  }
}

// --- cars ---
export interface CarModel {
  group: THREE.Group
  tintables: THREE.MeshLambertMaterial[]
  length: number
}

// playable cars live in shared/cars.ts (the server names them for the interrogation)

// Parked-car dressing. Deliberately the liveries the GARAGE doesn't use, so a car at
// the kerb never reads as another player's — the drivable colours stay exclusive to
// drivable cars. Every body in the pack appears, since a street of one silhouette
// repeated is the thing that gives a small asset pack away.
const PARKED_VARIANTS: Array<[string, string]> = [
  ['/assets/cars/car01/Car.obj', '/assets/cars/car01/car_gray.png'],
  ['/assets/cars/car01/Car.obj', '/assets/cars/car01/car_blue.png'],
  ['/assets/cars/car02/Car2.obj', '/assets/cars/car02/car2.png'],
  ['/assets/cars/car02/Car2.obj', '/assets/cars/car02/car2_black.png'],
  ['/assets/cars/car02/Car2.obj', '/assets/cars/car02/car2_red.png'],
  ['/assets/cars/car03/Car3.obj', '/assets/cars/car03/car3_red.png'],
  ['/assets/cars/car04/Car4.obj', '/assets/cars/car04/car4_grey.png'],
  ['/assets/cars/car04/Car4.obj', '/assets/cars/car04/car4_lightgrey.png'],
  ['/assets/cars/car05/Car5.obj', '/assets/cars/car05/car5_grey.png'],
  ['/assets/cars/car05/Car5_Taxi.obj', '/assets/cars/car05/car5_taxi.png'],
  ['/assets/cars/car07/Car7.obj', '/assets/cars/car07/car7_black.png'],
  ['/assets/cars/car07/Car7.obj', '/assets/cars/car07/car7_brown.png'],
  ['/assets/cars/car07/Car7.obj', '/assets/cars/car07/car7_green.png'],
  ['/assets/cars/car08/Car8.obj', '/assets/cars/car08/Car8_grey.png'],
]

export const PARKED_VARIANT_COUNT = PARKED_VARIANTS.length

// the police cruiser ships as its own OBJ + texture in the Car 05 folder
const POLICE_OBJ = '/assets/cars/car05/Car5_Police.obj'
const POLICE_TEX = '/assets/cars/car05/car5_police.png'

export async function loadPoliceCar(): Promise<CarModel> {
  return buildCar(POLICE_OBJ, POLICE_TEX)
}

export async function loadCar(carIdx = 0, parkedVariant = -1): Promise<CarModel> {
  if (parkedVariant >= 0) {
    const [objUrl, texUrl] = PARKED_VARIANTS[parkedVariant % PARKED_VARIANTS.length]
    return buildCar(objUrl, texUrl)
  }
  const def = carDef(carIdx)
  return buildCar(def.obj, def.tex)
}

// The pack's car_shadow textures are fully opaque rounded rects — they read as a
// black box on the tarmac. Build a soft contact shadow instead: dark under the
// body, penumbra fading out past the sills. Shared by every car.
let shadowTexCache: THREE.Texture | null = null
function contactShadowTexture(): THREE.Texture {
  if (shadowTexCache) return shadowTexCache
  const S = 128
  const canvas = document.createElement('canvas')
  canvas.width = canvas.height = S
  const ctx = canvas.getContext('2d')!
  const img = ctx.createImageData(S, S)
  for (let y = 0; y < S; y++) {
    for (let x = 0; x < S; x++) {
      const nx = ((x + 0.5) / S) * 2 - 1 // across the car
      const ny = ((y + 0.5) / S) * 2 - 1 // along the car
      // superellipse: keeps the body's boxy footprint, rounds the corners
      const d = Math.pow(Math.abs(nx), 2.4) + Math.pow(Math.abs(ny), 3.2)
      // solid core out to the sills, then a wide soft penumbra
      const t = Math.min(1, Math.max(0, (d - 0.18) / (1.0 - 0.18)))
      const a = 1 - t * t * (3 - 2 * t)
      const i = (y * S + x) * 4
      img.data[i] = img.data[i + 1] = img.data[i + 2] = 0
      img.data[i + 3] = Math.round(255 * a)
    }
  }
  ctx.putImageData(img, 0, 0)
  const tex = new THREE.CanvasTexture(canvas)
  tex.name = 'contact-shadow'
  // deliberately NOT psxTexture'd — nearest sampling would stairstep the penumbra
  tex.minFilter = tex.magFilter = THREE.LinearFilter
  tex.generateMipmaps = false
  tex.wrapS = tex.wrapT = THREE.ClampToEdgeWrapping
  shadowTexCache = tex
  return tex
}

async function buildCar(objUrl: string, texUrl: string): Promise<CarModel> {
  const [obj, tex] = await Promise.all([
    objLoader.loadAsync(objUrl),
    loadTexture(texUrl),
  ])

  const group = new THREE.Group()
  const tintables: THREE.MeshLambertMaterial[] = []

  // normalize: bounding box → CAR_LENGTH along its longest axis
  const bbox = new THREE.Box3().setFromObject(obj)
  const size = bbox.getSize(new THREE.Vector3())
  const scale = CAR_LENGTH / Math.max(size.x, size.z)

  const unlitTest = typeof location !== 'undefined' && location.search.includes('cartest')
  obj.traverse((o) => {
    const m = o as THREE.Mesh
    if (!m.isMesh) return
    const mat = unlitTest ? (new THREE.MeshBasicMaterial({ map: tex }) as unknown as THREE.MeshLambertMaterial) : new THREE.MeshLambertMaterial({ map: tex })
    patchMaterial(mat)
    m.material = mat
    tintables.push(mat)
  })
  obj.scale.setScalar(scale)
  obj.position.y = -bbox.min.y * scale
  group.add(obj)

  // soft contact shadow — grounds the car without painting a hole in the road.
  // Quad runs wider than the footprint so the penumbra has room to fade; the
  // opaque core inside it still lines up with the body.
  const mid = bbox.getCenter(new THREE.Vector3())
  const shadow = new THREE.Mesh(
    new THREE.PlaneGeometry(size.x * scale * 1.55, size.z * scale * 1.3),
    new THREE.MeshBasicMaterial({
      map: contactShadowTexture(),
      transparent: true,
      opacity: 0.5,
      depthWrite: false,
      // near-black with a touch of the night's blue, so the PSX crush pass
      // doesn't clip it to a flat 0,0,0 silhouette
      color: 0x0a0c14,
    }),
  )
  shadow.rotation.x = -Math.PI / 2
  // the OBJ origin isn't the footprint centre — offset so the blob sits under
  // the car rather than trailing off the back bumper
  shadow.position.set(mid.x * scale, 0.02, mid.z * scale)
  shadow.renderOrder = 1
  group.add(shadow)

  return { group, tintables, length: CAR_LENGTH }
}

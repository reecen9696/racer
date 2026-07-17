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

// parked-car dressing variety: Car 02 coupe with its own texture variants
const PARKED_VARIANTS: Array<[string, string]> = [
  ['/assets/cars/car01/Car.obj', '/assets/cars/car01/car_gray.png'],
  ['/assets/cars/car02/Car2.obj', '/assets/cars/car02/car2.png'],
  ['/assets/cars/car02/Car2.obj', '/assets/cars/car02/car2_black.png'],
  ['/assets/cars/car02/Car2.obj', '/assets/cars/car02/car2_red.png'],
]

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

async function buildCar(objUrl: string, texUrl: string): Promise<CarModel> {
  const [obj, tex, shadowTex] = await Promise.all([
    objLoader.loadAsync(objUrl),
    loadTexture(texUrl),
    loadTexture('/assets/cars/shadow/car_shadow_alpha.png'),
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

  // pack's shadow blob — free grounding
  const shadow = new THREE.Mesh(
    new THREE.PlaneGeometry(size.x * scale * 1.15, size.z * scale * 1.05),
    new THREE.MeshBasicMaterial({ map: shadowTex, transparent: true, opacity: 0.55, depthWrite: false, color: 0x000000 }),
  )
  shadow.rotation.x = -Math.PI / 2
  shadow.position.y = 0.02
  shadow.renderOrder = 1
  group.add(shadow)

  return { group, tintables, length: CAR_LENGTH }
}

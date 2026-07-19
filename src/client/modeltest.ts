// Test bench for the three newmodels packs (6twelve / DINER / Tacos).
// The FBX materials ship with NO texture links (Unity wires them in the
// .unitypackage), but each Blender material is named after its texture file
// ("Asphalt.jpg", "Lights_01.png.001") — so we bind maps by material name via
// manifest.json, and wire *_Emissor textures as emissive maps for the neons.
// A game car (4.5 m) parks in each diorama for scale.
// Keys: L = day/night toggle, 1/2/3 = frame a building, 0 = frame all.
import * as THREE from 'three'
import { FBXLoader } from 'three/examples/jsm/loaders/FBXLoader.js'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js'
import { loadCar } from './world/assets'

const PACKS = ['6twelve', 'DINER', 'Tacos'] as const

interface PackReport {
  pack: string
  meshes: number
  materials: number
  bound: Set<string>
  missing: Set<string>
  emissive: Set<string>
  rawSize: THREE.Vector3
  scale: number
  pos: THREE.Vector3
  size: THREE.Vector3
}

const hud = document.getElementById('hud') as HTMLDivElement
const reports: PackReport[] = []
const texErrors: string[] = []

function renderHud(): void {
  let html = '<b>newmodels test bench</b>  <span class="dim">L=day/night  1/2/3=focus  0=all</span>\n'
  for (const r of reports) {
    const s = r.size
    html += `\n<b>${r.pack}</b>  meshes:${r.meshes} mats:${r.materials}\n`
    html += `  scale ×${r.scale} → ${s.x.toFixed(1)} × ${s.z.toFixed(1)} m footprint, ${s.y.toFixed(1)} m tall\n`
    html += `  textures bound: <span class="ok">${r.bound.size}</span>/${r.materials}  emissive: <span class="${r.emissive.size ? 'ok' : 'bad'}">${r.emissive.size}</span>\n`
    if (r.missing.size) html += `  <span class="bad">unmatched mats: ${[...r.missing].join(', ')}</span>\n`
  }
  if (texErrors.length) html += `\n<span class="bad">errors:\n${texErrors.join('\n')}</span>`
  hud.innerHTML = html
  // summary for automated readers (extension JS runs isolated — DOM is the channel)
  document.body.dataset.dbg = JSON.stringify(
    reports.map((r) => ({
      pack: r.pack, meshes: r.meshes, mats: r.materials, bound: r.bound.size,
      missing: [...r.missing], emissive: r.emissive.size, scale: r.scale,
      size: r.size.toArray().map((v) => +v.toFixed(2)),
    })),
  )
}

async function run(): Promise<void> {
  const manifest: Record<string, Record<string, string>> = await (await fetch('/newmodels/manifest.json')).json()

  const renderer = new THREE.WebGLRenderer({ antialias: false })
  renderer.setSize(window.innerWidth, window.innerHeight)
  document.body.appendChild(renderer.domElement)
  const scene = new THREE.Scene()
  const camera = new THREE.PerspectiveCamera(60, window.innerWidth / window.innerHeight, 0.5, 3000)
  camera.position.set(0, 40, 160)
  const controls = new OrbitControls(camera, renderer.domElement)
  controls.target.set(0, 5, 0)

  const ambient = new THREE.AmbientLight(0xffffff, 1)
  const sun = new THREE.DirectionalLight(0xffffff, 1)
  sun.position.set(30, 60, 20)
  scene.add(ambient, sun)

  let night = sessionStorage.getItem('mt_night') !== '0'
  function applyMode(): void {
    sessionStorage.setItem('mt_night', night ? '1' : '0')
    if (night) {
      scene.background = new THREE.Color('#0a0e1e')
      ambient.intensity = 0.28
      ambient.color.set('#8ea0ff')
      sun.intensity = 0.18
      sun.color.set('#aab4ff')
    } else {
      scene.background = new THREE.Color('#7fa4c8')
      ambient.intensity = 0.8
      ambient.color.set('#ffffff')
      sun.intensity = 0.9
      sun.color.set('#fff3d8')
    }
  }
  applyMode()

  const ground = new THREE.Mesh(
    new THREE.PlaneGeometry(2000, 2000),
    new THREE.MeshLambertMaterial({ color: 0x23252b }),
  )
  ground.rotation.x = -Math.PI / 2
  ground.position.y = -0.05
  scene.add(ground)

  const texLoader = new THREE.TextureLoader()

  async function loadPack(pack: string): Promise<PackReport> {
    const files = manifest[pack]
    const report: PackReport = {
      pack, meshes: 0, materials: 0,
      bound: new Set(), missing: new Set(), emissive: new Set(),
      rawSize: new THREE.Vector3(), scale: 1,
      pos: new THREE.Vector3(), size: new THREE.Vector3(),
    }

    const fbx = await new FBXLoader().loadAsync(`/newmodels/${pack}/${pack}.fbx`)

    const loadTex = (key: string): THREE.Texture => {
      const t = texLoader.load(files[key])
      t.colorSpace = THREE.SRGBColorSpace
      t.name = key
      return t
    }

    // bind textures by material name: "Asphalt.jpg.001" → Textures/Asphalt.jpg
    const cache = new Map<THREE.Material, THREE.Material>()
    const convert = (src: THREE.Material): THREE.Material => {
      const hit = cache.get(src)
      if (hit) return hit
      report.materials++
      const raw = (src.name || '').toLowerCase().replace(/\.\d+$/, '')
      const key = files[raw]
        ? raw
        : ['png', 'jpg', 'jpeg'].map((e) => `${raw}.${e}`).find((k) => files[k])
      let map: THREE.Texture | null = null
      if (key) {
        map = loadTex(key)
        report.bound.add(key)
      }
      const mat = new THREE.MeshLambertMaterial({ map })
      if (!key) {
        // no matching texture — special-case the known unmapped materials
        if (/^emissor/.test(raw)) {
          mat.emissive.set(0xffffff) // bare neon tube geometry
        } else if (/glass|transparent|mirror/.test(raw)) {
          mat.color.set(0x9fb6c8)
          mat.transparent = true
          mat.opacity = 0.35
        } else {
          report.missing.add(src.name || '(unnamed)')
        }
      }
      if (key) {
        const stem = key.replace(/\.(png|jpe?g)$/, '')
        // emissor naming varies: X → X_Emissor.*, and X_01 → X_Emissor_01.*
        const wanted = [stem + '_emissor']
        const numbered = stem.match(/^(.*)_(\d+)$/)
        if (numbered) wanted.push(`${numbered[1]}_emissor_${numbered[2]}`)
        const emKey = Object.keys(files).find((k) => wanted.some((w) => k.startsWith(w + '.')))
        if (emKey) {
          mat.emissive.set(0xffffff)
          mat.emissiveMap = loadTex(emKey)
          report.emissive.add(emKey)
        }
        if (/bush|tree|branch|leaf|foliage|plant|fence|grid|rail|sign|logo|menu/.test(stem) && key.endsWith('.png')) {
          mat.alphaTest = 0.5
          mat.side = THREE.DoubleSide
        }
      }
      cache.set(src, mat)
      return mat
    }
    fbx.traverse((o) => {
      const m = o as THREE.Mesh
      if (!m.isMesh) return
      report.meshes++
      m.material = Array.isArray(m.material) ? m.material.map(convert) : convert(m.material)
    })

    const bbox = new THREE.Box3().setFromObject(fbx)
    bbox.getSize(report.rawSize)
    // Blender/Unity FBX lands in cm — knock down to metres when huge
    report.scale = report.rawSize.y > 60 ? 0.01 : 1
    report.size.copy(report.rawSize).multiplyScalar(report.scale)
    fbx.scale.setScalar(report.scale)
    const center = bbox.getCenter(new THREE.Vector3())
    // caller sets x; centre the diorama on its slot, base on y=0
    fbx.userData.center = center
    fbx.userData.minY = bbox.min.y
    scene.add(fbx)
    report.pos = fbx.position
    fbx.userData.report = report
    ;(report as unknown as { fbx: THREE.Object3D }).fbx = fbx
    return report
  }

  // lay the dioramas out in a row with dynamic spacing (they're 100–250 m wide)
  const GAP = 30
  let cursor = 0
  const slots: number[] = []
  for (const pack of PACKS) {
    try {
      const r = await loadPack(pack)
      const fbx = (r as unknown as { fbx: THREE.Object3D }).fbx
      const slotX = cursor + r.size.x / 2
      fbx.position.set(
        slotX - fbx.userData.center.x * r.scale,
        -fbx.userData.minY * r.scale,
        -fbx.userData.center.z * r.scale,
      )
      slots.push(slotX)
      cursor += r.size.x + GAP
      reports.push(r)
    } catch (e) {
      texErrors.push(`${pack}: ${e}`)
      slots.push(cursor)
      cursor += GAP
    }
    renderHud()
  }
  // recentre the whole row on x=0
  const half = (cursor - GAP) / 2
  for (const r of reports) {
    const fbx = (r as unknown as { fbx: THREE.Object3D }).fbx
    fbx.position.x -= half
  }
  for (let i = 0; i < slots.length; i++) slots[i] -= half

  // one game car per diorama for scale (4.5 m long), dropped near its centre
  const cars: THREE.Group[] = []
  document.body.dataset.cars = '0'
  for (let i = 0; i < slots.length; i++) {
    try {
      const car = await loadCar(i % 3)
      car.group.position.set(slots[i] + 9, 0, 8)
      car.group.rotation.y = Math.PI / 3
      scene.add(car.group)
      cars.push(car.group)
      document.body.dataset.cars = String(cars.length)
    } catch (e) {
      texErrors.push(`car: ${e}`)
    }
  }
  renderHud()

  function frameAll(): void {
    controls.target.set(0, 5, 0)
    camera.position.set(0, 90, cursor * 0.75)
  }
  frameAll()

  window.addEventListener('keydown', (e) => {
    if (e.key === 'l' || e.key === 'L') { night = !night; applyMode() }
    const idx = ['1', '2', '3'].indexOf(e.key)
    if (idx >= 0 && reports[idx]) {
      const r = reports[idx]
      controls.target.set(slots[idx], 4, 0)
      camera.position.set(slots[idx] + 16, 13, 40)
    }
    if (e.key === '0') frameAll()
  })

  window.addEventListener('resize', () => {
    camera.aspect = window.innerWidth / window.innerHeight
    camera.updateProjectionMatrix()
    renderer.setSize(window.innerWidth, window.innerHeight)
  })

  // remote camera hook for automated screenshots: extension JS (isolated world)
  // writes "x,y,z,tx,ty,tz" into body.dataset.mtcam; we consume it here
  let lastCam = ''
  let lastCar = ''
  function frame(): void {
    requestAnimationFrame(frame)
    const want = document.body.dataset.mtcam
    if (want && want !== lastCam) {
      lastCam = want
      const [x, y, z, tx, ty, tz] = want.split(',').map(Number)
      camera.position.set(x, y, z)
      controls.target.set(tx, ty, tz)
    }
    // "i,x,y,z,rot" repositions car i — lets automation park cars per diorama
    const wantCar = document.body.dataset.mtcar
    if (wantCar && wantCar !== lastCar) {
      const [i, x, y, z, rot] = wantCar.split(',').map(Number)
      if (cars[i]) {
        // only mark consumed once applied — cars stream in after the packs
        lastCar = wantCar
        let gy = y
        if (y === -1) {
          // ground-snap: raycast down from above, ignoring the car itself
          cars[i].visible = false
          const ray = new THREE.Raycaster(new THREE.Vector3(x, 80, z), new THREE.Vector3(0, -1, 0))
          const hit = ray.intersectObject(scene, true)[0]
          cars[i].visible = true
          gy = hit ? hit.point.y : 0
        }
        cars[i].position.set(x, gy, z)
        cars[i].rotation.y = rot || 0
      }
    }
    controls.update()
    renderer.render(scene, camera)
  }
  frame()
}
run()

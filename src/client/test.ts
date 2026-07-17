// Isolation test: gas station FBX
import * as THREE from 'three'
import { loadFBX } from './world/assets'

async function run(): Promise<void> {
  const renderer = new THREE.WebGLRenderer({ antialias: false })
  renderer.setSize(window.innerWidth, window.innerHeight)
  document.body.appendChild(renderer.domElement)
  const scene = new THREE.Scene()
  scene.background = new THREE.Color('#334')
  const camera = new THREE.PerspectiveCamera(60, window.innerWidth / window.innerHeight, 0.1, 500)
  camera.position.set(0, 12, 34)
  camera.lookAt(0, 4, 0)
  const ground = new THREE.Mesh(new THREE.PlaneGeometry(200, 200), new THREE.MeshBasicMaterial({ color: 0x224422 }))
  ground.rotation.x = -Math.PI / 2
  scene.add(ground)

  const model = await loadFBX('/assets/gasstation/Gas_station.fbx')
  const bbox = new THREE.Box3().setFromObject(model.object)
  const size = bbox.getSize(new THREE.Vector3())
  const center = bbox.getCenter(new THREE.Vector3())
  console.log('[gastest] size', size.toArray().map((v) => +v.toFixed(2)), 'center', center.toArray().map((v) => +v.toFixed(2)), 'meshes', model.meshes.length)
  const names = new Set<string>()
  model.object.traverse((o) => { if ((o as THREE.Mesh).isMesh) names.add(o.name.replace(/[_0-9]+$/, '')) })
  console.log('[gastest] mesh name roots: ' + [...names].slice(0, 60).join(', '))
  const s = 20 / Math.max(size.x, size.z)
  const clone = model.object.clone()
  clone.scale.setScalar(s)
  clone.position.set(-center.x * s, -bbox.min.y * s, -center.z * s)
  scene.add(clone)

  function frame(): void {
    requestAnimationFrame(frame)
    renderer.render(scene, camera)
  }
  frame()
}
run()

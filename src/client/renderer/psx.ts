// Low-res render target + final blit: nearest upscale, 15-bit quantize, 4x4 Bayer
// dither, vignette + shadow crush (Part 2 §A.2.4/5, Part 4 §2 layer 4).
import * as THREE from 'three'

const BLIT_VERT = /* glsl */ `
varying vec2 vUv;
void main() {
  vUv = uv;
  gl_Position = vec4(position.xy, 0.0, 1.0);
}`

const BLIT_FRAG = /* glsl */ `
uniform sampler2D tScene;
uniform vec2 uResolution;   // render target size
uniform float uDither;      // 0/1 toggle
uniform float uVignette;    // strength
uniform float uCrush;       // shadow crush amount
varying vec2 vUv;

float bayer(vec2 p) {
  const mat4 B = mat4(
     0.0,  8.0,  2.0, 10.0,
    12.0,  4.0, 14.0,  6.0,
     3.0, 11.0,  1.0,  9.0,
    15.0,  7.0, 13.0,  5.0
  );
  ivec2 i = ivec2(mod(p, 4.0));
  return B[i.y][i.x] / 16.0;
}

void main() {
  vec3 c = texture2D(tScene, vUv).rgb;

  // night grading: crush shadows, keep light sources punchy
  vec3 crushed = c * c * (3.0 - 2.0 * c);
  c = mix(c, crushed, uCrush);

  // vignette
  float d = distance(vUv, vec2(0.5));
  c *= 1.0 - uVignette * smoothstep(0.35, 0.75, d);

  // 15-bit quantize with ordered dither (in render-target pixel space, so the
  // dither pattern is chunky after the nearest upscale)
  vec2 px = floor(vUv * uResolution);
  float t = (bayer(px) - 0.5) / 31.0 * uDither;
  c = floor((c + t) * 31.0 + 0.5) / 31.0;

  gl_FragColor = vec4(c, 1.0);
}`

export class PSXPipeline {
  renderer: THREE.WebGLRenderer
  target: THREE.WebGLRenderTarget
  blitScene: THREE.Scene
  blitCam: THREE.OrthographicCamera
  blitMat: THREE.ShaderMaterial
  width: number
  height: number

  constructor(canvas: HTMLCanvasElement, height = 240) {
    this.renderer = new THREE.WebGLRenderer({ canvas, antialias: false, powerPreference: 'high-performance' })
    this.renderer.setPixelRatio(1)
    this.renderer.outputColorSpace = THREE.SRGBColorSpace

    const aspect = window.innerWidth / window.innerHeight
    this.height = height
    this.width = Math.round(height * aspect)

    this.target = new THREE.WebGLRenderTarget(this.width, this.height, {
      magFilter: THREE.NearestFilter,
      minFilter: THREE.NearestFilter,
      depthBuffer: true,
    })

    this.blitScene = new THREE.Scene()
    this.blitCam = new THREE.OrthographicCamera(-1, 1, 1, -1, 0, 1)
    this.blitMat = new THREE.ShaderMaterial({
      vertexShader: BLIT_VERT,
      fragmentShader: BLIT_FRAG,
      uniforms: {
        tScene: { value: this.target.texture },
        uResolution: { value: new THREE.Vector2(this.width, this.height) },
        uDither: { value: 1 },
        uVignette: { value: 0.03 },
        uCrush: { value: 0.12 },
      },
      depthTest: false,
      depthWrite: false,
    })
    this.blitScene.add(new THREE.Mesh(new THREE.PlaneGeometry(2, 2), this.blitMat))

    this.resize()
    window.addEventListener('resize', () => this.resize())
  }

  resize(): void {
    const w = window.innerWidth, h = window.innerHeight
    this.renderer.setSize(w, h)
    const aspect = w / h
    this.width = Math.round(this.height * aspect)
    this.target.setSize(this.width, this.height)
    this.blitMat.uniforms.uResolution.value.set(this.width, this.height)
  }

  render(scene: THREE.Scene, camera: THREE.Camera): void {
    this.renderer.setRenderTarget(this.target)
    this.renderer.render(scene, camera)
    this.renderer.setRenderTarget(null)
    this.renderer.render(this.blitScene, this.blitCam)
  }
}

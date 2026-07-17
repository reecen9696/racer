// PSX material patch (Part 2 §A): vertex snapping + affine texture mapping,
// injected into three.js built-in materials via onBeforeCompile so every
// material in the game gets the treatment automatically.
import * as THREE from 'three'

export const PSX_UNIFORMS = {
  uSnapRes: { value: new THREE.Vector2(1100, 620) }, // virtual snap grid (very subtle jitter)
  uAffine: { value: 0.0 }, // affine swim off — it zigzags lane markings on the stretched road quads // 0 = perspective-correct, 1 = full PS1 swim (anything high bends road markings)
  uMist: { value: 0.95 }, // global ground-mist density
  uMistColor: { value: new THREE.Color('#252b4a') }, // slightly lighter + cooler than the darkness fog
}

export function patchMaterial(mat: THREE.Material, opts: { affine?: boolean; snap?: boolean } = {}): void {
  const { affine = true, snap = true } = opts
  mat.onBeforeCompile = (shader) => {
    shader.uniforms.uSnapRes = PSX_UNIFORMS.uSnapRes
    shader.uniforms.uAffine = PSX_UNIFORMS.uAffine
    shader.uniforms.uMist = PSX_UNIFORMS.uMist
    shader.uniforms.uMistColor = { value: PSX_UNIFORMS.uMistColor.value }

    shader.vertexShader = shader.vertexShader
      .replace(
        '#include <common>',
        `#include <common>
        uniform vec2 uSnapRes;
        uniform float uAffine;
        varying float vAffineW;
        varying float vWorldY;
        varying float vMistDepth;`,
      )
      .replace(
        '#include <project_vertex>',
        `#include <project_vertex>
        ${snap ? `
        // PS1 GTE: no sub-pixel precision — snap to a virtual low-res grid
        gl_Position.xyz /= gl_Position.w;
        gl_Position.xy = floor(gl_Position.xy * uSnapRes + 0.5) / uSnapRes;
        gl_Position.xyz *= gl_Position.w;` : ''}
        vAffineW = mix(1.0, gl_Position.w, uAffine);
        // affine UV trick, part 1: multiply the UV by w here (project_vertex runs
        // AFTER uv_vertex, so vMapUv is already populated and vAffineW is valid —
        // doing this inside uv_vertex read vAffineW before assignment)
        ${affine ? `
        #ifdef USE_MAP
          vMapUv *= vAffineW;
        #endif` : ''}
        {
          #ifdef USE_INSTANCING
            vec4 psxWorld = modelMatrix * instanceMatrix * vec4(transformed, 1.0);
          #else
            vec4 psxWorld = modelMatrix * vec4(transformed, 1.0);
          #endif
          vWorldY = psxWorld.y;
          vMistDepth = -mvPosition.z;
        }
        `,
      )

    // affine UV trick, part 2: divide back in the fragment stage — linear screen-space
    // interpolation reconstructs the wrong (affine) mapping.
    if (affine) {
      shader.fragmentShader = shader.fragmentShader.replace(
        '#include <map_fragment>',
        `#ifdef USE_MAP
          vec4 sampledDiffuseColor = texture2D( map, vMapUv / vAffineW );
          diffuseColor *= sampledDiffuseColor;
        #endif`,
      )
    }
    shader.fragmentShader = shader.fragmentShader
      .replace(
        '#include <common>',
        `#include <common>
        varying float vAffineW;
        varying float vWorldY;
        varying float vMistDepth;
        uniform float uMist;
        uniform vec3 uMistColor;`,
      )
      .replace(
        '#include <fog_fragment>',
        `#include <fog_fragment>
        // ground mist: pools near y=0, fades out by ~2.5 m up, needs some depth to build
        {
          float mistH = smoothstep(2.5, 0.0, vWorldY);
          float mistD = smoothstep(6.0, 55.0, vMistDepth);
          gl_FragColor.rgb = mix(gl_FragColor.rgb, uMistColor, mistH * mistD * uMist * 0.55);
        }`,
      )
  }
  mat.customProgramCacheKey = () => `psx-${affine}-${snap}`
}

// every texture in the game: nearest, no mipmaps
export function psxTexture(tex: THREE.Texture): THREE.Texture {
  tex.magFilter = THREE.NearestFilter // chunky pixels up close
  tex.minFilter = THREE.NearestMipmapLinearFilter // but mipmapped at distance — raw nearest sparkles badly
  tex.generateMipmaps = true
  tex.anisotropy = 8 // stops the glancing-angle smear on the road; period purity loses to readability
  return tex
}

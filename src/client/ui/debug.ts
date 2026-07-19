// Live tuning panel (backtick to toggle). Drift feel is 90% tuning — every
// physics constant is a slider from day 1 (Part 1 §9).
import { TUNING } from '../../shared/constants'
import { PSX_UNIFORMS } from '../renderer/patch'

interface SliderDef {
  key: string
  obj: Record<string, number>
  min: number
  max: number
  step?: number
}

export class DebugPanel {
  private el: HTMLElement
  extras: Record<string, number> = {
    fogNear: 18,
    fogFar: 85,
    vignette: 0.03,
    crush: 0.12,
    dither: 1,
    affine: 0.0,
    mist: 0.95,
    assist: 1, // 0 off, 0.5 reduced, 1 full
  }
  onExtra: (key: string, value: number) => void = () => {}

  constructor() {
    this.el = document.createElement('div')
    this.el.id = 'debug-panel'
    this.el.style.display = 'none'
    document.body.appendChild(this.el)

    const T = TUNING as unknown as Record<string, number>
    const defs: SliderDef[] = [
      { key: 'engineForce', obj: T, min: 2000, max: 16000 },
      { key: 'brakeForce', obj: T, min: 2000, max: 20000 },
      { key: 'maxSpeed', obj: T, min: 20, max: 80 },
      { key: 'gripFront', obj: T, min: 0.4, max: 3, step: 0.05 },
      { key: 'gripRear', obj: T, min: 0.4, max: 3, step: 0.05 },
      { key: 'peakSlipFront', obj: T, min: 0.05, max: 0.4, step: 0.005 },
      { key: 'peakSlipRear', obj: T, min: 0.05, max: 0.4, step: 0.005 },
      { key: 'gripFalloff', obj: T, min: 0, max: 0.8, step: 0.02 },
      { key: 'driveTraction', obj: T, min: 0.5, max: 3, step: 0.05 },
      { key: 'gripAssist', obj: T, min: 0, max: 10, step: 0.1 },
      { key: 'gripAssistFadeSlip', obj: T, min: 0.05, max: 0.8, step: 0.01 },
      { key: 'brakeBias', obj: T, min: 0.3, max: 0.9, step: 0.02 },
      { key: 'yawDamping', obj: T, min: 0, max: 3, step: 0.05 },
      { key: 'handbrakeGrip', obj: T, min: 0.05, max: 0.8, step: 0.01 },
      { key: 'steerMaxLow', obj: T, min: 0.2, max: 1.0, step: 0.01 },
      { key: 'steerMaxHigh', obj: T, min: 0.05, max: 0.5, step: 0.01 },
      { key: 'steerAttack', obj: T, min: 1, max: 12, step: 0.1 },
      { key: 'steerRelease', obj: T, min: 1, max: 15, step: 0.1 },
      { key: 'assistGain', obj: T, min: 0, max: 1.5, step: 0.02 },
      { key: 'cgHeight', obj: T, min: 0, max: 1, step: 0.02 },
      { key: 'dragCoeff', obj: T, min: 0, max: 2, step: 0.02 },
      { key: 'inertia', obj: T, min: 800, max: 4000 },
      { key: 'fogNear', obj: this.extras, min: 5, max: 80 },
      { key: 'fogFar', obj: this.extras, min: 40, max: 300 },
      { key: 'vignette', obj: this.extras, min: 0, max: 0.6, step: 0.02 },
      { key: 'crush', obj: this.extras, min: 0, max: 1, step: 0.02 },
      { key: 'dither', obj: this.extras, min: 0, max: 1, step: 1 },
      { key: 'affine', obj: this.extras, min: 0, max: 1, step: 0.05 },
      { key: 'mist', obj: this.extras, min: 0, max: 1.5, step: 0.05 },
    ]

    const title = document.createElement('div')
    title.className = 'dbg-title'
    title.textContent = 'TUNING (` to close)'
    this.el.appendChild(title)

    for (const d of defs) {
      const row = document.createElement('div')
      row.className = 'dbg-row'
      const label = document.createElement('label')
      label.textContent = d.key
      const input = document.createElement('input')
      input.type = 'range'
      input.min = String(d.min)
      input.max = String(d.max)
      input.step = String(d.step ?? (d.max - d.min) / 200)
      input.value = String(d.obj[d.key])
      const val = document.createElement('span')
      val.textContent = this.fmt(d.obj[d.key])
      input.addEventListener('input', () => {
        const v = parseFloat(input.value)
        d.obj[d.key] = v
        val.textContent = this.fmt(v)
        if (d.obj === this.extras) {
          if (d.key === 'affine') PSX_UNIFORMS.uAffine.value = v
          if (d.key === 'mist') PSX_UNIFORMS.uMist.value = v
          this.onExtra(d.key, v)
        }
      })
      row.append(label, input, val)
      this.el.appendChild(row)
    }

    window.addEventListener('keydown', (e) => {
      if (e.key === '`') this.el.style.display = this.el.style.display === 'none' ? 'block' : 'none'
    })
  }

  private fmt(v: number): string {
    return Math.abs(v) >= 100 ? String(Math.round(v)) : v.toFixed(2)
  }
}

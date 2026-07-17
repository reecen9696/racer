// DOM HUD: speed, gear, drift score/chain, toast events. Styled in index.html.
import { CarState } from '../../shared/physics'
import { DriftScore } from '../../shared/scoring'

export class HUD {
  private speedEl: HTMLElement
  private gearEl: HTMLElement
  private scoreEl: HTMLElement
  private chainEl: HTMLElement
  private multEl: HTMLElement
  private toastEl: HTMLElement
  private toastTimer = 0

  constructor() {
    const root = document.createElement('div')
    root.id = 'hud'
    root.innerHTML = `
      <div id="hud-score">
        <div id="hud-total">0</div>
        <div id="hud-chain-row"><span id="hud-chain"></span><span id="hud-mult"></span></div>
      </div>
      <div id="hud-toast"></div>
      <div id="hud-speed-box">
        <span id="hud-speed">0</span><span class="unit">km/h</span>
        <span id="hud-gear">1</span>
      </div>
      <div id="hud-help">WASD/arrows drive · SPACE handbrake · L lights · C camera · M radio · R reset · H horn · \` tuning</div>
    `
    document.body.appendChild(root)
    this.speedEl = document.getElementById('hud-speed')!
    this.gearEl = document.getElementById('hud-gear')!
    this.scoreEl = document.getElementById('hud-total')!
    this.chainEl = document.getElementById('hud-chain')!
    this.multEl = document.getElementById('hud-mult')!
    this.toastEl = document.getElementById('hud-toast')!
  }

  toast(msg: string, cls = ''): void {
    this.toastEl.textContent = msg
    this.toastEl.className = 'show ' + cls
    this.toastTimer = 1.6
  }

  update(car: CarState, sc: DriftScore, dt: number): void {
    this.speedEl.textContent = String(Math.round(Math.abs(car.speed) * 3.6))
    this.gearEl.textContent = car.speed < -0.5 ? 'R' : String(car.gear + 1)
    this.scoreEl.textContent = String(Math.floor(sc.total))
    if (sc.chain > 1) {
      this.chainEl.textContent = '+' + Math.floor(sc.chain)
      this.multEl.textContent = ' ×' + sc.multiplier.toFixed(1)
      this.chainEl.parentElement!.style.opacity = '1'
    } else {
      this.chainEl.parentElement!.style.opacity = '0'
    }
    if (sc.event === 'banked') this.toast('+' + sc.banked + ' BANKED', 'good')
    if (sc.event === 'crashed') this.toast('CRASH — CHAIN LOST', 'bad')
    if (this.toastTimer > 0) {
      this.toastTimer -= dt
      if (this.toastTimer <= 0) this.toastEl.className = ''
    }
  }
}

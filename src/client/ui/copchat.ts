// The traffic stop overlay: Bram's lines, your reply box, and the clock.
// The disposition number is deliberately never shown — reading him is the game.
import { CopTurnMsg } from '../net/net'

export class CopChat {
  private el: HTMLElement
  private log: HTMLElement
  private input: HTMLTextAreaElement
  private clock: HTMLElement
  private banner: HTMLElement
  private giveIn: HTMLButtonElement
  private who: HTMLElement
  open = false
  private deadline = 0
  private onSend: (text: string) => void = () => {}
  private onGiveIn: () => void = () => {}

  constructor() {
    this.el = document.createElement('div')
    this.el.id = 'cop-chat'
    this.el.style.display = 'none'
    this.el.innerHTML = `
      <div id="cop-frame">
        <div id="cop-head"><span id="cop-who">MILLBROOK POLICE</span><span id="cop-clock">90</span></div>
        <div id="cop-log"></div>
        <textarea id="cop-input" maxlength="200" rows="3" placeholder="say something…" autocomplete="off" spellcheck="false"></textarea>
        <div id="cop-foot"><span id="cop-hint">ENTER TO SPEAK · SHIFT+ENTER FOR A NEW LINE</span><button id="cop-give-in" type="button">GIVE IN</button></div>
      </div>
      <div id="cop-banner"></div>
    `
    document.body.appendChild(this.el)
    this.log = this.el.querySelector('#cop-log')!
    this.input = this.el.querySelector('#cop-input') as HTMLTextAreaElement
    this.clock = this.el.querySelector('#cop-clock')!
    this.banner = this.el.querySelector('#cop-banner')!
    this.giveIn = this.el.querySelector('#cop-give-in') as HTMLButtonElement
    this.who = this.el.querySelector('#cop-who')!

    this.input.addEventListener('keydown', (e) => {
      e.stopPropagation() // never let WASD in the reply box drive the car
      if (e.code !== 'Enter' || e.shiftKey) return
      e.preventDefault() // Enter speaks; it must not leave a newline behind
      const text = this.input.value.trim()
      if (!text) return
      this.push('you', text)
      this.input.value = ''
      this.setBusy(true)
      this.onSend(text)
    })

    // hands up — take the booking rather than keep talking
    this.giveIn.addEventListener('click', () => {
      if (!this.open || this.giveIn.disabled) return
      this.push('you', 'I give in.')
      this.setBusy(true)
      this.onGiveIn()
    })
  }

  isTyping(): boolean {
    return document.activeElement === this.input
  }

  start(turn: CopTurnMsg, onSend: (text: string) => void, onGiveIn: () => void): void {
    this.onSend = onSend
    this.onGiveIn = onGiveIn
    this.open = true
    this.log.innerHTML = ''
    this.banner.className = ''
    this.banner.textContent = ''
    this.el.style.display = 'block'
    // whichever of the three units pinned you is the one at the window
    this.who.textContent = (turn.officer ? turn.officer + ' · ' : '') + 'MILLBROOK POLICE'
    this.deadline = performance.now() / 1000 + (turn.timeLimit ?? 90)
    this.say(turn)
  }

  say(turn: CopTurnMsg): void {
    this.push('bram', turn.reply)
    this.setBusy(false)
    if (this.open) this.input.focus()
  }

  // while Bram is thinking, neither the box nor the button should take input
  private setBusy(busy: boolean): void {
    this.input.disabled = busy
    this.giveIn.disabled = busy
  }

  private push(who: 'bram' | 'you', text: string): void {
    const line = document.createElement('div')
    line.className = 'cop-line ' + who
    line.textContent = text
    this.log.appendChild(line)
    this.log.scrollTop = this.log.scrollHeight
  }

  verdict(v: 'release' | 'arrest', score: number): void {
    this.setBusy(true)
    this.input.blur()
    this.banner.className = 'show ' + v
    this.banner.textContent = v === 'release' ? 'LET OFF WITH A WARNING' : `BOOKED — ${score} POINTS SEIZED`
    setTimeout(() => {
      this.el.style.display = 'none'
      this.banner.className = ''
      this.open = false
    }, 2600)
  }

  // returns seconds left; closes nothing (the server owns the verdict)
  tick(): void {
    if (!this.open) return
    const left = Math.max(0, this.deadline - performance.now() / 1000)
    const secs = Math.ceil(left)
    this.clock.textContent = secs >= 60 ? `${Math.floor(secs / 60)}:${String(secs % 60).padStart(2, '0')}` : String(secs)
    this.clock.style.color = left < 15 ? '#ff7a6b' : '#7c86ad'
  }
}

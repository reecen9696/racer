// Server-authoritative drift room (Part 7): 8 players, 60 Hz shared physics,
// 20 Hz patches. The server never loads a model — the text grid is the world.
import { Room, Client } from '@colyseus/core'
import { Schema, MapSchema, type } from '@colyseus/schema'
import { makeCarState, stepCar, CarState, InputFrame } from '../shared/physics'
import { TUNING, PHYS_DT } from '../shared/constants'
import { parseMap, ParsedMap } from '../shared/map'
import { makeScore, stepScore, DriftScore } from '../shared/scoring'

export class PlayerState extends Schema {
  @type('float32') x = 0
  @type('float32') z = 0
  @type('float32') yaw = 0
  @type('float32') vx = 0
  @type('float32') vz = 0
  @type('float32') yawRate = 0
  @type('float32') speed = 0
  @type('float32') slip = 0
  @type('float32') rpm = 900
  @type('uint8') gear = 0
  @type('boolean') brake = false
  @type('boolean') handbrake = false
  @type('boolean') headlights = true
  @type('boolean') drifting = false
  @type('uint8') color = 0
  @type('uint32') score = 0
  @type('uint32') lastSeq = 0
  @type('string') name = ''
}

export class DriftState extends Schema {
  @type({ map: PlayerState }) players = new MapSchema<PlayerState>()
}

interface Sim {
  car: CarState
  score: DriftScore
  queue: InputFrame[]
  lastInput: InputFrame
}

export class DriftRoom extends Room<DriftState> {
  maxClients = 8
  private sims = new Map<string, Sim>()
  private map!: ParsedMap

  onCreate(): void {
    this.setState(new DriftState())
    this.setPatchRate(50) // 20 Hz
    this.map = parseMap()

    this.onMessage('input', (client, frames: InputFrame[]) => {
      const sim = this.sims.get(client.sessionId)
      if (!sim || !Array.isArray(frames)) return
      for (const f of frames) {
        if (typeof f?.seq !== 'number') continue
        // clamp everything client-supplied
        sim.queue.push({
          seq: f.seq >>> 0,
          steer: Math.max(-1, Math.min(1, +f.steer || 0)),
          throttle: Math.max(0, Math.min(1, +f.throttle || 0)),
          brake: Math.max(0, Math.min(1, +f.brake || 0)),
          handbrake: !!f.handbrake,
          headlights: !!f.headlights,
        })
      }
      if (sim.queue.length > 120) sim.queue.splice(0, sim.queue.length - 120)
    })

    this.onMessage('horn', (client) => {
      this.broadcast('horn', { id: client.sessionId }, { except: client })
    })

    this.setSimulationInterval(() => this.tick(), 1000 / 60)
  }

  onJoin(client: Client, options: { name?: string; color?: number; sx?: number; sz?: number }): void {
    const p = new PlayerState()
    const idx = this.state.players.size
    p.x = typeof options?.sx === 'number' && isFinite(options.sx) ? options.sx : this.map.spawn.x + (idx % 4) * 5 - 7.5
    p.z = typeof options?.sz === 'number' && isFinite(options.sz) ? options.sz : this.map.spawn.z + Math.floor(idx / 4) * 5
    p.yaw = this.map.spawn.yaw
    p.color = Math.max(0, Math.min(3, options?.color ?? 0))
    p.name = String(options?.name ?? 'driver').slice(0, 16)
    this.state.players.set(client.sessionId, p)

    const car = makeCarState(p.x, p.z, p.yaw)
    this.sims.set(client.sessionId, {
      car,
      score: makeScore(),
      queue: [],
      lastInput: { seq: 0, steer: 0, throttle: 0, brake: 0, handbrake: false, headlights: true },
    })
  }

  onLeave(client: Client): void {
    this.state.players.delete(client.sessionId)
    this.sims.delete(client.sessionId)
  }

  private tick(): void {
    for (const [id, sim] of this.sims) {
      const input = sim.queue.length ? sim.queue.shift()! : sim.lastInput
      sim.lastInput = input
      // catch up if the client got ahead (packets are batched)
      let extra = 0
      while (sim.queue.length > 6 && extra < 3) {
        stepCar(sim.car, input, TUNING, PHYS_DT, this.map.surfaceAt, this.map.colliders, this.map.heightAt)
        stepScore(sim.score, sim.car, PHYS_DT)
        sim.lastInput = sim.queue.shift()!
        extra++
      }
      stepCar(sim.car, input, TUNING, PHYS_DT, this.map.surfaceAt, this.map.colliders, this.map.heightAt)
      stepScore(sim.score, sim.car, PHYS_DT)

      const p = this.state.players.get(id)
      if (!p) continue
      p.x = sim.car.x
      p.z = sim.car.z
      p.yaw = sim.car.yaw
      p.vx = sim.car.vx
      p.vz = sim.car.vz
      p.yawRate = sim.car.yawRate
      p.speed = sim.car.speed
      p.slip = sim.car.slipAngle
      p.rpm = sim.car.rpm
      p.gear = sim.car.gear
      p.brake = input.brake > 0
      p.handbrake = input.handbrake
      p.headlights = input.headlights
      p.drifting = sim.score.drifting
      p.score = Math.floor(sim.score.total)
      p.lastSeq = input.seq
    }
  }
}

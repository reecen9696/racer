// The playable garage. Shared because the server needs to describe your car to
// Sgt Hollis ("a yellow hatchback, visibly driven hard") — the client only needs
// the urls, but the label/colour must match what you actually picked.
//
// Each model in cars_PSX ships its own texture variants (Car 07 has six, Car 06 has
// none), so there's no uniform colour axis across the pack — every car just wears the
// livery it came with. Swatches are sampled from the dominant body pixels of each
// texture, not guessed. Bodies picked for night legibility and to keep all eight
// distinguishable from the chase cam.
import { TUNING, Tuning } from './constants'

export interface CarDef {
  label: string // menu label + what Bram calls it
  colour: string // what Bram calls the paint
  obj: string
  tex: string
  swatch: string // menu chip — sampled from the texture's body pixels
  // per-car physics: MULTIPLIERS on the base TUNING values (1.0 = the red estate,
  // which is what every global handling pass is tuned against). Multipliers, not
  // absolutes, so the backtick panel and future re-tunes shift the whole garage.
  phys: Partial<Record<keyof Tuning, number>>
}

export const CARS: CarDef[] = [
  // family wagon — THE baseline, every other car is defined relative to it
  { label: 'ESTATE',   colour: 'red',        obj: '/assets/cars/car01/Car.obj',  tex: '/assets/cars/car01/car_red.png',          swatch: '#8c3418',
    phys: {} },
  // heavy executive sedan: more power than the estate but carries real weight —
  // composed and quick, needs braking distance
  { label: 'SALOON',   colour: 'navy',       obj: '/assets/cars/car02/Car2.obj', tex: '/assets/cars/car02/car2.png',             swatch: '#242454',
    phys: { mass: 1.15, inertia: 1.18, engineForce: 1.22, brakeForce: 1.12, reverseForce: 1.1, maxSpeed: 1.08, gripFront: 1.03, gripRear: 1.03 } },
  // light hot hatch: least mass in the garage — dartiest turn-in and best
  // power-to-weight off the line, runs out of breath up top
  { label: 'HATCHBACK',colour: 'yellow',     obj: '/assets/cars/car03/Car3.obj', tex: '/assets/cars/car03/car3_yellow.png',      swatch: '#b49c24',
    phys: { mass: 0.82, inertia: 0.75, engineForce: 0.9, brakeForce: 0.92, reverseForce: 0.95, maxSpeed: 0.92, steerAttack: 1.2, gripAssist: 1.1 } },
  // panel van: heavy, tall (big weight transfer), weak brakes for its bulk
  { label: 'VAN',      colour: 'orange',     obj: '/assets/cars/car04/Car4.obj', tex: '/assets/cars/car04/car4_lightorange.png', swatch: '#b48454',
    phys: { mass: 1.35, inertia: 1.45, engineForce: 1.02, brakeForce: 0.88, maxSpeed: 0.85, cgHeight: 1.4, gripFront: 0.94, gripRear: 0.96, yawDamping: 1.1 } },
  // big-block cruiser: strongest straight-line pull, barge in the corners, floaty rear
  { label: 'CRUISER',  colour: 'green',      obj: '/assets/cars/car05/Car5.obj', tex: '/assets/cars/car05/car5_green.png',       swatch: '#24543c',
    phys: { mass: 1.28, inertia: 1.35, engineForce: 1.42, brakeForce: 0.95, maxSpeed: 1.05, cgHeight: 1.05, gripFront: 0.97, gripRear: 0.97, yawDamping: 0.9 } },
  // sports coupe: the driver's car — light, low, best brakes and grip, highest top end
  { label: 'COUPE',    colour: 'brown',      obj: '/assets/cars/car06/Car6.obj', tex: '/assets/cars/car06/car6.png',             swatch: '#84543c',
    phys: { mass: 0.95, inertia: 0.88, engineForce: 1.2, brakeForce: 1.18, maxSpeed: 1.12, cgHeight: 0.8, gripFront: 1.07, gripRear: 1.07, steerAttack: 1.1 } },
  // 4x4: tall and heavy on tarmac, but shrugs off dirt/grass drag (rollingResist
  // is what the surface drag multiplier scales) and puts power down anywhere
  { label: '4X4',      colour: 'silver',     obj: '/assets/cars/car07/Car7.obj', tex: '/assets/cars/car07/car7_grey.png',        swatch: '#848484',
    phys: { mass: 1.25, inertia: 1.3, engineForce: 1.08, brakeForce: 0.95, maxSpeed: 0.9, cgHeight: 1.5, gripFront: 0.93, gripRear: 0.95, rollingResist: 0.55, driveTraction: 1.1 } },
  // box van: the joke tank — heaviest, slowest, tallest, worst brakes. Commit to it.
  { label: 'BOX VAN',  colour: 'purple',     obj: '/assets/cars/car08/Car8.obj', tex: '/assets/cars/car08/Car8_purple.png',      swatch: '#54546c',
    phys: { mass: 1.5, inertia: 1.65, engineForce: 0.98, brakeForce: 0.82, reverseForce: 0.9, maxSpeed: 0.78, cgHeight: 1.6, gripFront: 0.9, gripRear: 0.92, yawDamping: 1.15 } },
]

export const DEFAULT_CAR = 0 // the red estate — the car the game shipped with

export function carDef(i: number): CarDef {
  return CARS[i] ?? CARS[DEFAULT_CAR]
}

// Merged tuning for a car: base TUNING × this car's multipliers. Builds a fresh object
// each call so live edits to TUNING (backtick panel) flow through — call per frame on
// the client, once per join on the server (the panel never reaches the server anyway).
export function carTuning(i: number): Tuning {
  const def = carDef(i)
  const t = { ...TUNING }
  for (const k in def.phys) {
    const key = k as keyof Tuning
    const v = TUNING[key]
    if (typeof v === 'number') (t[key] as number) = v * (def.phys[key] as number)
  }
  return t
}

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
  // Retired from the garage: the model reads as a wrecked car, so it dresses the map
  // instead of being driven. Kept in the array (rather than deleted) so every index
  // downstream — saved selections, PlayerState.car, TRAFFIC_CARS — keeps its meaning.
  wreck?: true
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
  // NOT DRIVABLE — the model is a wreck, so it sits in the clearing off the dirt road
  // (see WRECK in map.ts) instead of appearing in the garage or in traffic
  { label: 'COUPE',    colour: 'brown',      obj: '/assets/cars/car06/Car6.obj', tex: '/assets/cars/car06/car6.png',             swatch: '#84543c',
    phys: {}, wreck: true },
  // 4x4: tall and heavy on tarmac, but shrugs off dirt/grass drag (rollingResist
  // is what the surface drag multiplier scales) and puts power down anywhere
  { label: '4X4',      colour: 'silver',     obj: '/assets/cars/car07/Car7.obj', tex: '/assets/cars/car07/car7_grey.png',        swatch: '#848484',
    phys: { mass: 1.25, inertia: 1.3, engineForce: 1.08, brakeForce: 0.95, maxSpeed: 0.9, cgHeight: 1.5, gripFront: 0.93, gripRear: 0.95, rollingResist: 0.55, driveTraction: 1.1 } },
  // box van: the joke tank — heaviest, slowest, tallest, worst brakes. Commit to it.
  { label: 'BOX VAN',  colour: 'purple',     obj: '/assets/cars/car08/Car8.obj', tex: '/assets/cars/car08/Car8_purple.png',      swatch: '#54546c',
    phys: { mass: 1.5, inertia: 1.65, engineForce: 0.98, brakeForce: 0.82, reverseForce: 0.9, maxSpeed: 0.78, cgHeight: 1.6, gripFront: 0.9, gripRear: 0.92, yawDamping: 1.15 } },

  // --- second rank: the pack ships one more BODY (the taxi) and a shelf of unused
  // liveries. These three are the ones with a real identity of their own rather than
  // a recolour of a car already in the list — each drives differently enough to be
  // worth picking. Appended, never inserted: the index IS the wire-format car id.
  //
  // taxi: the cruiser shell with a roof sign — the only unused body in cars_PSX.
  // A high-mileage fleet car: same big engine, tired springs and brakes.
  { label: 'TAXI',     colour: 'yellow',     obj: '/assets/cars/car05/Car5_Taxi.obj', tex: '/assets/cars/car05/car5_taxi.png',  swatch: '#c8a416',
    phys: { mass: 1.3, inertia: 1.38, engineForce: 1.3, brakeForce: 0.82, maxSpeed: 1.0, cgHeight: 1.15, gripFront: 0.9, gripRear: 0.88, yawDamping: 0.85, driftGripLoss: 1.2 } },
  // mail van: the box van's working sibling — loaded tail-heavy, so it pivots on the
  // rear axle far more willingly than the purple one and needs respect on the brakes
  { label: 'MAIL VAN', colour: 'white',      obj: '/assets/cars/car08/Car8.obj', tex: '/assets/cars/car08/Car8_mail.png',        swatch: '#b8b4a8',
    phys: { mass: 1.42, inertia: 1.5, engineForce: 1.06, brakeForce: 0.85, reverseForce: 0.92, maxSpeed: 0.84, cgHeight: 1.5, gripFront: 0.95, gripRear: 0.86, yawDamping: 0.92 } },
  // rally: the 4x4 shell built for the dirt run — shrugs off surface drag like the
  // silver one but geared shorter and sprung to rotate, so it's the loose-surface tool
  { label: 'RALLY',    colour: 'red',        obj: '/assets/cars/car07/Car7.obj', tex: '/assets/cars/car07/car7_red.png',         swatch: '#8c2418',
    phys: { mass: 1.1, inertia: 1.08, engineForce: 1.15, brakeForce: 1.02, maxSpeed: 0.94, cgHeight: 1.2, gripFront: 1.0, gripRear: 0.94, rollingResist: 0.5, driveTraction: 1.15, steerAttack: 1.15, handbrakeKick: 1.25 } },
]

export const DEFAULT_CAR = 0 // the red estate — the car the game shipped with

// the garage: what the menu offers and what a join is allowed to pick
export const PLAYABLE = CARS.map((c, i) => (c.wreck ? -1 : i)).filter((i) => i >= 0)

// the retired model, for the map dressing that uses it (see the 'wreck' prop)
export const WRECK_CAR = CARS.findIndex((c) => c.wreck)

export function isPlayable(i: number): boolean {
  return !!CARS[i] && !CARS[i].wreck
}

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

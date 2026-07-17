// The playable garage. Shared because the server needs to describe your car to
// Sgt Hollis ("a yellow hatchback, visibly driven hard") — the client only needs
// the urls, but the label/colour must match what you actually picked.
//
// Each model in cars_PSX ships its own texture variants (Car 07 has six, Car 06 has
// none), so there's no uniform colour axis across the pack — every car just wears the
// livery it came with. Swatches are sampled from the dominant body pixels of each
// texture, not guessed. Bodies picked for night legibility and to keep all eight
// distinguishable from the chase cam.
export interface CarDef {
  label: string // menu label + what Bram calls it
  colour: string // what Bram calls the paint
  obj: string
  tex: string
  swatch: string // menu chip — sampled from the texture's body pixels
}

export const CARS: CarDef[] = [
  { label: 'ESTATE',   colour: 'red',        obj: '/assets/cars/car01/Car.obj',  tex: '/assets/cars/car01/car_red.png',          swatch: '#8c3418' },
  { label: 'SALOON',   colour: 'navy',       obj: '/assets/cars/car02/Car2.obj', tex: '/assets/cars/car02/car2.png',             swatch: '#242454' },
  { label: 'HATCHBACK',colour: 'yellow',     obj: '/assets/cars/car03/Car3.obj', tex: '/assets/cars/car03/car3_yellow.png',      swatch: '#b49c24' },
  { label: 'VAN',      colour: 'orange',     obj: '/assets/cars/car04/Car4.obj', tex: '/assets/cars/car04/car4_lightorange.png', swatch: '#b48454' },
  { label: 'CRUISER',  colour: 'green',      obj: '/assets/cars/car05/Car5.obj', tex: '/assets/cars/car05/car5_green.png',       swatch: '#24543c' },
  { label: 'COUPE',    colour: 'brown',      obj: '/assets/cars/car06/Car6.obj', tex: '/assets/cars/car06/car6.png',             swatch: '#84543c' },
  { label: '4X4',      colour: 'silver',     obj: '/assets/cars/car07/Car7.obj', tex: '/assets/cars/car07/car7_grey.png',        swatch: '#848484' },
  { label: 'BOX VAN',  colour: 'purple',     obj: '/assets/cars/car08/Car8.obj', tex: '/assets/cars/car08/Car8_purple.png',      swatch: '#54546c' },
]

export const DEFAULT_CAR = 0 // the red estate — the car the game shipped with

export function carDef(i: number): CarDef {
  return CARS[i] ?? CARS[DEFAULT_CAR]
}

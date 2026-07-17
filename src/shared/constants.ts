// World grid pitch, measured from PSX_Roads GLB footprints (Road_Corner is 15.57 square).
export const TILE = 15.5665

export const PHYS_HZ = 60
export const PHYS_DT = 1 / PHYS_HZ

// Car dimensions (normalized: every car model is scaled to this length at load)
export const CAR_LENGTH = 4.5
export const CAR_WIDTH = 1.9

// All drift-feel constants live here so the debug panel can mutate them live.
// Server and client share the object shape; multiplayer rooms use the defaults.
export const TUNING = {
  mass: 1200, // kg
  inertia: 1700, // yaw inertia kg m^2
  cgToFront: 1.12, // m
  cgToRear: 1.38, // m
  cgHeight: 0.58, // m (pseudo weight transfer — high enough that lift/brake genuinely lightens the rear)

  engineForce: 8200, // N at full throttle (pre gear scaling) — deliberately more than the rear tires can put down in low gears
  brakeForce: 8600, // N
  reverseForce: 4200, // N
  maxSpeed: 52, // m/s soft cap (~187 km/h)

  gripFront: 1.3, // peak lateral μ per axle (force = μ × load) — real-tire scale, saturates in fast corners
  gripRear: 1.18,
  peakSlipFront: 0.14, // rad — slip angle at grip peak (front peaks early → push/understeer past it)
  peakSlipRear: 0.17,
  gripFalloff: 0.52, // how much grip is lost far past the peak (0..1) — scaled per surface

  driveTraction: 1.25, // rear longitudinal friction budget (× load × surface) — exceeding it = wheelspin
  brakeBias: 0.65, // front share of brake force (friction circle)

  handbrakeGrip: 0.22, // rear grip multiplier while handbrake held
  handbrakeDriveCut: 1.0, // 1 = fully cuts drive
  handbrakeKick: 2.0, // rad/s² yaw kick toward the steered direction while handbrake held at speed — space = instant drift
  driftRecoverDamping: 2.2, // extra yaw damping while the car is straightening — no pendulum snapback

  dragCoeff: 0.62, // quadratic air drag
  rollingResist: 5.5, // linear — coasting carries momentum like the old games

  // input shaping (client-side, pre-packet)
  steerMaxLow: 0.66, // rad max steer at standstill
  steerMaxHigh: 0.28, // rad max steer at maxSpeed — front can actually reach peak slip at speed
  steerAttack: 4.2, // full-locks per second toward target — quick corrections, still flickable
  steerRelease: 6.0, // return-to-center rate
  assistGain: 0.65, // counter-steer assist strength (0..1); assist recenters steering around drift equilibrium
  assistMax: 0.5, // rad
  throttleAttack: 3.2, // keyboard throttle ramp 0→1 per second
  throttleRelease: 6.0,
  yawDamping: 0.55, // 1/s — enough self-stabilizing that slides decay instead of snapping around

  // low speed handling
  kinematicBlendSpeed: 3.5, // m/s below which we blend to kinematic steering

  // collisions
  restitution: 0.25,
  wallFriction: 0.6,

  // gearbox (drives audio RPM; light effect on force via ratio taper)
  gearRatios: [3.2, 2.1, 1.55, 1.2, 0.98],
  finalDrive: 3.6,
  shiftUpRpm: 6600,
  shiftDownRpm: 3000,
  idleRpm: 900,
  maxRpm: 7200,
  shiftCutTime: 0.15, // s of throttle cut on upshift
}

export type Tuning = typeof TUNING

// Surface parameter blocks (Part 4).
// falloffScale × TUNING.gripFalloff = post-peak grip loss: asphalt snaps loose and
// stays loose; dirt/grass have a broad forgiving peak (lower grip, but it never "lets go").
export const SURFACES = {
  asphalt: { lateral: 1.0, longitudinal: 1.0, drag: 1.0, peakScale: 1.0, falloffScale: 1.0 },
  curb: { lateral: 0.85, longitudinal: 0.9, drag: 1.2, peakScale: 1.1, falloffScale: 0.85 },
  dirt: { lateral: 0.62, longitudinal: 0.68, drag: 2.2, peakScale: 1.5, falloffScale: 0.35 }, // rally: slidey, progressive, hangs the slide
  offroad: { lateral: 0.42, longitudinal: 0.45, drag: 6.0, peakScale: 1.8, falloffScale: 0.25 },
} as const
export type SurfaceName = keyof typeof SURFACES

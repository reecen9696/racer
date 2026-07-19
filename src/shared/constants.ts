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
  inertia: 1450, // yaw inertia kg m^2 — low enough for arcade turn-in snap
  cgToFront: 1.12, // m
  cgToRear: 1.38, // m
  cgHeight: 0.58, // m (pseudo weight transfer — high enough that lift/brake genuinely lightens the rear)

  engineForce: 8200, // N at full throttle (pre gear scaling) — deliberately more than the rear tires can put down in low gears
  brakeForce: 12500, // N (~1.05g) — corners are taken by braking down to ~50, so brakes must be strong
  reverseForce: 7000, // N — brisk reverse, no crawl
  maxSpeed: 52, // m/s soft cap (~187 km/h)

  gripFront: 2.4, // peak lateral μ per axle (force = μ × load) — arcade scale, NOT real tires.
  // Real μ (~1.5) on this kart-scale map (corner radii 8-15 m) caps cornering at ~50 km/h,
  // so normal driving was 100% understeer ("driving a boat"). ~2.5g grip + gripAssist is
  // what lets the car take tile corners at the speeds the map invites.
  gripRear: 2.7,
  peakSlipFront: 0.22, // rad — slip angle at grip peak. Wide peak: full lock at corner speeds
  // lands only slightly past it, so max steer means max grip instead of washing out.
  peakSlipRear: 0.20,
  gripFalloff: 0.18, // how much grip is lost far past the peak (0..1) — scaled per surface.
  // Above ~0.22 the rear never regains enough grip to come back and the car settles into
  // a STABLE drift it holds forever — that's the "handbrake drift won't stop" feel, and
  // no amount of recovery damping escapes it (damping kills the yaw the car needs to
  // rotate straight again). Measured: 0.30 -> never settles, 0.22 -> 1.2s.

  driveTraction: 1.9, // rear longitudinal friction budget (× load × surface) — exceeding it = wheelspin.
  // Sized so only 1st-gear launches spin up; at 1.25 EVERY gear's full throttle saturated the
  // rear and collapsed lateral grip, so throttle+steer always meant snap oversteer.
  brakeBias: 0.65, // front share of brake force (friction circle)

  // grip assist (the arcade "drift factor"): bleeds body lateral velocity so the car goes
  // where the nose points instead of sailing on its old vector — THE boat-feel killer.
  // Slip-gated: full below ~4° body slip, zero past gripAssistFadeSlip, off under handbrake,
  // scaled by surface grip² (dirt/grass keep their slide).
  gripAssist: 4.0, // 1/s lateral-velocity decay at zero slip
  gripAssistFadeSlip: 0.3, // rad of body slip where assist reaches zero — committed slides are untouched

  handbrakeGrip: 0.28, // rear grip multiplier while handbrake held (×gripRear ≈ 0.76 effective μ) —
  // enough slide to drift, enough grip left that it's an arc, not a spin
  handbrakeDriveCut: 1.0, // 1 = fully cuts drive
  handbrakeKick: 1.2, // rad/s² yaw kick toward the steered direction while handbrake held at speed — space = instant drift
  driftRecoverDamping: 4.6, // extra yaw damping while the car is straightening — snaps out of the drift cleanly
  driftScrub: 110, // N·s/m of extra longitudinal drag at full sideways slide — drifting bleeds
  // some speed but carries enough to link corners (170 stalled the car mid-drift)

  dragCoeff: 0.62, // quadratic air drag
  rollingResist: 5.5, // linear — coasting carries momentum like the old games

  // input shaping (client-side, pre-packet)
  steerMaxLow: 0.66, // rad max steer at standstill
  steerMaxHigh: 0.1, // rad max steer at maxSpeed (~5.7 deg) — with arcade grip the front can use it
  steerAttack: 5.0, // full-locks per second toward target — quick corrections, still flickable
  steerRelease: 6.0, // return-to-center rate
  assistGain: 0.65, // counter-steer assist strength (0..1); assist recenters steering around drift equilibrium
  assistMax: 0.5, // rad
  counterSteerBoost: 2.8, // ×lock restored when fully sideways — how hard a slide is to catch
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

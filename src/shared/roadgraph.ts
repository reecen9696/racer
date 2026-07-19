// The drivable network as a graph (Part 9), so AI drivers pick a ROUTE instead of
// circling one fixed ring.
//
// Why this exists: `map.loopOrder` is a single closed cycle that deliberately skips
// zone 'h' — see the walk in parseMap, which filters highway tiles so the elevation
// profile stays one-dimensional. Every AI path was built from that cycle, so the cop
// and all seven civilians drove the same 56 tiles forever and the entire highway plus
// the town were roads nobody ever used.
//
// The map already had the junctions for this. Three T tiles carry an unused arm:
//   (11,3) and (14,6) on the loop, each branching east onto the highway
//   (20,5) on the highway, branching east onto the town spur
// and the highway's two legs rejoin at (20,5) — so it is a second loop, not a spur,
// and there is genuine route choice at all three. Nothing here changes the map; it
// reads the same tiles and adds the connectivity the AI was missing.
//
// Nodes are junction tiles (degree >= 3) plus the town's street-grid intersections.
// Edges are directed: the chain of degree-2 tiles between two nodes, sampled to lane
// waypoints in the direction of travel. Turning across a junction tile is NOT part of
// an edge — it depends on which way you leave, so it's generated per (in, out) pair
// when the route is extended.
import { ParsedMap, RoadTile, Zone, dirtCenterlinePoint, TACOS_TOWN } from './map'
import { TILE } from './constants'
import { Waypoint, clamp, dist } from './driving'
import { TACOS_NS_BANDS, TACOS_EW_BANDS, TACOS_ROAD_X, TACOS_ROAD_Z } from './tacosTown.generated'

export type Dir = 'n' | 'e' | 's' | 'w'
const DIRS: Dir[] = ['n', 'e', 's', 'w']
const DIR_VEC: Record<Dir, [number, number]> = { n: [0, -1], e: [1, 0], s: [0, 1], w: [-1, 0] }
const OPP: Record<Dir, Dir> = { n: 's', s: 'n', e: 'w', w: 'e' }

// Lane offset is per road class: the same 2.1 m that centres a car nicely on a 10 m
// village lane leaves it straddling the middle of a 14 m highway, and hugging the
// centreline of a 20 m town street. Offsetting right of TRAVEL means opposing routes
// land on opposite sides with no separate geometry — the same trick buildPatrolPath
// used for oncoming traffic, now falling out of the route direction itself.
const LANE_OFFSET_ROAD = 2.1
const LANE_OFFSET_HWY = 3.5
const LANE_OFFSET_TOWN = 5.0

const TILE_SAMPLES = 5 // per tile — corners are quarter arcs, straight-lining cuts them
const TOWN_SPACING = 3.2 // m between town waypoints, ~matching the tile sampling density
const CROSS_SAMPLES = 6 // waypoints generated across a junction

export interface RoadNode {
  id: string
  x: number
  z: number
  tile?: RoadTile // absent for town intersections, which aren't on the tile grid
  radius: number // m from centre to where edges start/end — the junction's extent
  arms: Dir[]
  // A T junction has a through axis (the two opposite arms) and one terminating arm.
  // Traffic on the through road has priority; the terminating arm gives way. A 4-way
  // cross has no through axis, so it's an all-way stop instead.
  throughAxis: 'ns' | 'ew' | null
  allWay: boolean
}

export interface RoadEdge {
  id: string
  from: string
  to: string
  exitArm: Dir // arm of `from` we leave through
  entryArm: Dir // arm of `to` we arrive through, pointing out from `to`'s centre
  pts: Waypoint[] // lane waypoints, `from`'s arm edge → `to`'s arm edge
  twinId: string
  len: number
  zone: Zone | 'town'
  // arriving at `to` on a give-way arm (the terminating arm of a T, or any arm of an
  // all-way). Cached here so the yield check is a field read, not a graph walk.
  minorAtTo: boolean
}

export interface RoadGraph {
  nodes: Map<string, RoadNode>
  edges: Map<string, RoadEdge>
  out: Map<string, string[]> // node id → edge ids leaving it
}

const laneOffsetFor = (zone: Zone | 'town'): number =>
  zone === 'town' ? LANE_OFFSET_TOWN : zone === 'h' ? LANE_OFFSET_HWY : LANE_OFFSET_ROAD

// right of travel for heading h in our (sin, cos) forward frame
const offsetPt = (x: number, z: number, h: number, off: number): Waypoint => ({
  x: x + Math.cos(h) * off,
  z: z - Math.sin(h) * off,
})

const degreeOf = (t: RoadTile): number => DIRS.reduce((a, d) => a + (t.dirs[d] ? 1 : 0), 0)

const pathLen = (pts: Waypoint[]): number => {
  let L = 0
  for (let i = 1; i < pts.length; i++) L += dist(pts[i - 1].x, pts[i - 1].z, pts[i].x, pts[i].z)
  return L
}

// --- geometry -------------------------------------------------------------

// Walk one degree-2 tile's centreline from its `inDir` edge to its `outDir` edge,
// emitting lane waypoints. dirtCenterlinePoint owns the real shape (dead-straight
// through straights since S_AMP is 0, a quarter arc through corners); all this does is
// decide which way round to walk u and push the lane offset out perpendicular to the
// local tangent, so the offset survives the curve.
function tilePts(t: RoadTile, inDir: Dir, off: number): Waypoint[] {
  const [ix, iz] = DIR_VEC[inDir]
  const inEdgeX = t.x + ix * (TILE / 2)
  const inEdgeZ = t.z + iz * (TILE / 2)
  const [x0, z0] = dirtCenterlinePoint(t, 0)
  const [x1, z1] = dirtCenterlinePoint(t, 1)
  const forward = dist(x0, z0, inEdgeX, inEdgeZ) <= dist(x1, z1, inEdgeX, inEdgeZ)
  const out: Waypoint[] = []
  for (let k = 0; k < TILE_SAMPLES; k++) {
    const s = (k + 0.5) / TILE_SAMPLES
    const u = forward ? s : 1 - s
    const [px, pz] = dirtCenterlinePoint(t, u)
    const [qx, qz] = dirtCenterlinePoint(t, clamp(forward ? u + 0.06 : u - 0.06, 0, 1))
    out.push(offsetPt(px, pz, Math.atan2(qx - px, qz - pz), off))
  }
  return out
}

// Waypoints across a junction, from the `inArm` edge to the `outArm` edge.
//
// A quadratic Bezier with its control point at the junction centre, rather than the
// quarter-arc used for corner TILES. A junction is paved right across, so the racing
// line through it is the cut corner, not the outside sweep — and the same formula
// covers all three cases (straight through, 90° turn, U-turn at a dead end) without
// special-casing, because with opposite arms the control point is collinear and the
// curve degenerates to the straight line we want.
export function crossingPts(node: RoadNode, inArm: Dir, outArm: Dir, off: number): Waypoint[] {
  const [ax, az] = DIR_VEC[inArm]
  const [bx, bz] = DIR_VEC[outArm]
  const r = node.radius
  const p0x = node.x + ax * r, p0z = node.z + az * r
  const p2x = node.x + bx * r, p2z = node.z + bz * r
  const bez = (u: number): [number, number] => {
    const m = 1 - u
    return [
      m * m * p0x + 2 * m * u * node.x + u * u * p2x,
      m * m * p0z + 2 * m * u * node.z + u * u * p2z,
    ]
  }
  const out: Waypoint[] = []
  for (let k = 1; k <= CROSS_SAMPLES; k++) {
    const u = k / (CROSS_SAMPLES + 1)
    const [px, pz] = bez(u)
    const [qx, qz] = bez(Math.min(1, u + 0.05))
    out.push(offsetPt(px, pz, Math.atan2(qx - px, qz - pz), off))
  }
  return out
}

// --- build ----------------------------------------------------------------

const tileNodeId = (t: RoadTile): string => `t:${t.gx},${t.gz}`
const townNodeId = (i: number, j: number): string => `town:${i},${j}`

function makeTileNode(t: RoadTile): RoadNode {
  const arms = DIRS.filter((d) => t.dirs[d])
  const ns = t.dirs.n && t.dirs.s
  const ew = t.dirs.e && t.dirs.w
  // A cross has both pairs — nobody has priority, so it's an all-way.
  const throughAxis = ns && ew ? null : ns ? 'ns' : ew ? 'ew' : null
  return { id: tileNodeId(t), x: t.x, z: t.z, tile: t, radius: TILE / 2, arms, throughAxis, allWay: throughAxis === null }
}

const onThrough = (node: RoadNode, arm: Dir): boolean =>
  node.throughAxis === 'ns' ? arm === 'n' || arm === 's' : node.throughAxis === 'ew' ? arm === 'e' || arm === 'w' : false

// The town is a 3x3 street grid measured off the FBX, not tiles — TACOS_*_BANDS are the
// asphalt corridors, so each band's centre is a street centreline and every crossing of
// an NS with an EW band is an intersection. Anchored into world space by TACOS_TOWN.
const bandCentres = (bands: Array<[number, number]>): number[] => bands.map(([a, b]) => (a + b) / 2)

function buildTown(graph: RoadGraph): { entryNodeId: string; entryX: number; entryZ: number } | null {
  const nsX = bandCentres(TACOS_NS_BANDS)
  const ewZ = bandCentres(TACOS_EW_BANDS)
  if (!nsX.length || !ewZ.length) return null
  const off = laneOffsetFor('town')

  for (let i = 0; i < nsX.length; i++) {
    for (let j = 0; j < ewZ.length; j++) {
      const x = TACOS_TOWN.x + nsX[i]
      const z = TACOS_TOWN.z + ewZ[j]
      const arms: Dir[] = []
      if (j > 0) arms.push('n')
      if (j < ewZ.length - 1) arms.push('s')
      if (i > 0) arms.push('w')
      if (i < nsX.length - 1) arms.push('e')
      graph.nodes.set(townNodeId(i, j), {
        id: townNodeId(i, j),
        x, z,
        radius: 10,
        arms,
        throughAxis: null,
        allWay: true, // a town grid crossing is an all-way stop, whatever its arm count
      })
    }
  }

  // straight edges between adjacent intersections, both directions
  const link = (ai: number, aj: number, bi: number, bj: number, exitArm: Dir): void => {
    const a = graph.nodes.get(townNodeId(ai, aj))!
    const b = graph.nodes.get(townNodeId(bi, bj))!
    const entryArm = OPP[exitArm]
    const sx = a.x + DIR_VEC[exitArm][0] * a.radius
    const sz = a.z + DIR_VEC[exitArm][1] * a.radius
    const ex = b.x + DIR_VEC[entryArm][0] * b.radius
    const ez = b.z + DIR_VEC[entryArm][1] * b.radius
    const L = dist(sx, sz, ex, ez)
    const n = Math.max(2, Math.round(L / TOWN_SPACING))
    const h = Math.atan2(ex - sx, ez - sz)
    const pts: Waypoint[] = []
    for (let k = 0; k <= n; k++) {
      const u = k / n
      pts.push(offsetPt(sx + (ex - sx) * u, sz + (ez - sz) * u, h, off))
    }
    addEdge(graph, a, b, exitArm, entryArm, pts, 'town')
  }
  for (let i = 0; i < nsX.length; i++) {
    for (let j = 0; j < ewZ.length; j++) {
      if (i < nsX.length - 1) { link(i, j, i + 1, j, 'e'); link(i + 1, j, i, j, 'w') }
      if (j < ewZ.length - 1) { link(i, j, i, j + 1, 's'); link(i, j + 1, i, j, 'n') }
    }
  }

  // The spur enters at the west end of the middle EW street (local x = TACOS_ROAD_X[0]),
  // which is the anchor the town was positioned on — so the entry intersection is the
  // westmost node on whichever EW street the spur's z lands in.
  const entryJ = ewZ.reduce((best, z, j) => (Math.abs(z - 0) < Math.abs(ewZ[best] - 0) ? j : best), 0)
  return {
    entryNodeId: townNodeId(0, entryJ),
    entryX: TACOS_TOWN.x + TACOS_ROAD_X[0],
    entryZ: TACOS_TOWN.z + ewZ[entryJ],
  }
}

function addEdge(
  graph: RoadGraph, from: RoadNode, to: RoadNode,
  exitArm: Dir, entryArm: Dir, pts: Waypoint[], zone: Zone | 'town',
): RoadEdge {
  const id = `${from.id}|${exitArm}`
  const edge: RoadEdge = {
    id,
    from: from.id,
    to: to.id,
    exitArm,
    entryArm,
    pts,
    twinId: `${to.id}|${entryArm}`,
    len: pathLen(pts),
    zone,
    minorAtTo: to.allWay || !onThrough(to, entryArm),
  }
  graph.edges.set(id, edge)
  const list = graph.out.get(from.id)
  if (list) list.push(id)
  else graph.out.set(from.id, [id])
  return edge
}

interface Chain {
  tiles: RoadTile[] // degree-2 tiles between the two junctions, in travel order
  entryArm: Dir // arm of the destination facing back down the chain
  endTile?: RoadTile // destination junction tile, if we reached one
  portalDir?: Dir // set instead when the chain runs off the tile grid (the town spur)
}

// Follow one arm out of a junction until the next junction (or off the grid).
function walkChain(
  start: RoadTile, exitArm: Dir,
  nb: (t: RoadTile, d: Dir) => RoadTile | undefined,
): Chain | null {
  const tiles: RoadTile[] = []
  let cur = nb(start, exitArm)
  let inDir: Dir = OPP[exitArm] // arm of `cur` facing back the way we came
  for (let guard = 0; cur && guard < 200; guard++) {
    if (degreeOf(cur) >= 3) return { tiles, entryArm: inDir, endTile: cur }
    tiles.push(cur)
    const outDir = DIRS.find((d) => cur!.dirs[d] && d !== inDir)
    if (!outDir) return null // dead end
    const next = nb(cur, outDir)
    if (!next) return { tiles, entryArm: inDir, portalDir: outDir }
    inDir = OPP[outDir]
    cur = next
  }
  return null
}

// Lane waypoints along a chain walked in the given order. `firstIn` is the arm of
// tiles[0] facing back toward where we came from. Built per direction rather than by
// reversing the other direction's points: the offset is right of TRAVEL, so a reversed
// route needs the opposite side of the centreline, not the same points backwards.
function chainPts(tiles: RoadTile[], firstIn: Dir): Waypoint[] {
  const pts: Waypoint[] = []
  let inDir = firstIn
  for (let i = 0; i < tiles.length; i++) {
    const t = tiles[i]
    pts.push(...tilePts(t, inDir, laneOffsetFor(t.zone)))
    const outDir = DIRS.find((d) => t.dirs[d] && d !== inDir)
    if (!outDir) break
    inDir = OPP[outDir]
  }
  return pts
}

// Straight run of lane waypoints between two world points.
function straightPts(sx: number, sz: number, ex: number, ez: number, off: number): Waypoint[] {
  const L = dist(sx, sz, ex, ez)
  const n = Math.max(2, Math.round(L / TOWN_SPACING))
  const h = Math.atan2(ex - sx, ez - sz)
  const pts: Waypoint[] = []
  for (let k = 1; k <= n; k++) {
    const u = k / n
    pts.push(offsetPt(sx + (ex - sx) * u, sz + (ez - sz) * u, h, off))
  }
  return pts
}

export function buildRoadGraph(map: ParsedMap): RoadGraph {
  const graph: RoadGraph = { nodes: new Map(), edges: new Map(), out: new Map() }
  const tileMap = new Map<string, RoadTile>()
  for (const t of map.tiles) tileMap.set(`${t.gx},${t.gz}`, t)
  const nb = (t: RoadTile, d: Dir): RoadTile | undefined =>
    tileMap.get(`${t.gx + DIR_VEC[d][0]},${t.gz + DIR_VEC[d][1]}`)

  for (const t of map.tiles) if (degreeOf(t) >= 3) graph.nodes.set(tileNodeId(t), makeTileNode(t))
  const town = buildTown(graph)

  for (const node of [...graph.nodes.values()]) {
    if (!node.tile) continue
    for (const exitArm of node.arms) {
      const chain = walkChain(node.tile, exitArm, nb)
      if (!chain) continue
      const zone: Zone | 'town' = chain.tiles.length ? chain.tiles[chain.tiles.length - 1].zone : node.tile.zone

      if (chain.endTile) {
        const target = graph.nodes.get(tileNodeId(chain.endTile))
        if (target) addEdge(graph, node, target, exitArm, chain.entryArm, chainPts(chain.tiles, OPP[exitArm]), zone)
        continue
      }

      // Ran off the tile grid: the town portal at (22,5), whose east arm parseMap forces
      // on so its asphalt reaches the town's main street. Join the lane to the town's
      // entry intersection, and build the way back out by walking the chain reversed.
      if (!chain.portalDir || !town) continue
      const entry = graph.nodes.get(town.entryNodeId)!
      if (!entry.arms.includes('w')) entry.arms.push('w')
      const last = chain.tiles[chain.tiles.length - 1]
      const px = last.x + DIR_VEC[chain.portalDir][0] * (TILE / 2)
      const pz = last.z + DIR_VEC[chain.portalDir][1] * (TILE / 2)
      const ex = entry.x - entry.radius
      const townOff = laneOffsetFor('town')

      addEdge(graph, node, entry, exitArm, 'w',
        [...chainPts(chain.tiles, OPP[exitArm]), ...straightPts(px, pz, ex, entry.z, townOff)], 'town')

      const backTiles = [...chain.tiles].reverse()
      addEdge(graph, entry, node, 'w', exitArm,
        [...straightPts(ex, entry.z, px, pz, townOff), ...chainPts(backTiles, chain.portalDir)], 'town')
    }
  }

  return graph
}

// --- routes ---------------------------------------------------------------
//
// A driver no longer holds a closed ring. It holds a ROLLING route: a flat waypoint
// list that gets extended with another randomly-chosen edge whenever it runs short
// ahead, and trimmed behind once it grows. Keeping it flat is deliberate — every
// existing helper (pointAhead, carAhead's lane test, the curvature lookahead) takes a
// Waypoint[] plus an index and keeps working untouched.
//
// The one thing that had to change is wrap-around: those helpers used `% path.length`,
// which on a ring meant "carry on round" and on a route would mean "teleport back to
// where you started half a mile away". They clamp now, and extendRoute guarantees
// there is always more path ahead than any of them look.

export interface RouteSeg {
  kind: 'edge' | 'crossing'
  id: string // edge id, or node id for a crossing
  start: number // inclusive index into route.path
  end: number // exclusive
  minor: boolean // crossing only: we arrive on a give-way arm
}

export interface Route {
  path: Waypoint[]
  wpIndex: number
  segs: RouteSeg[]
  lastEdge: string
  rng: number
  townRun: number // consecutive town edges taken — see the dwell rule in pickNext
  townDwell: number // how many this driver fancies before heading back out
}

// Waypoints of path that must always exist ahead of the driver. The deepest reader is
// pointAhead's 30-waypoint scan; a comfortable multiple of that costs nothing.
const MIN_AHEAD = 120
const TRIM_AT = 600 // start dropping consumed path once it gets this long
const KEEP_BEHIND = 40 // ...but keep this much, for the nearest-waypoint scans

// mulberry32. The brains are documented as pure of Math.random and the headless
// harnesses depend on it, so route choice is seeded per driver instead.
export function nextRand(route: Route): number {
  route.rng = (route.rng + 0x6d2b79f5) | 0
  let t = route.rng
  t = Math.imul(t ^ (t >>> 15), t | 1)
  t ^= t + Math.imul(t ^ (t >>> 7), t | 61)
  return ((t ^ (t >>> 14)) >>> 0) / 4294967296
}

const isTown = (id: string): boolean => id.startsWith('town:')

// Which way out of this junction. Never doubles back the way it came unless that is
// genuinely the only option, so a driver keeps flowing through the network.
//
// The town needs a thumb on the scale. It is 24 of the 34 edges with a single way out,
// so a uniform random walk that wanders in essentially never leaves — every car ends up
// milling round the same three blocks while the village empties. Each driver instead
// gets a dwell: a few blocks of town, then it starts preferring whichever edge takes it
// back toward the exit. Reads as "popped into town, then carried on", which is what a
// car on a night drive would actually do.
function pickNext(graph: RoadGraph, route: Route, node: RoadNode, from: RoadEdge): RoadEdge {
  const ids = graph.out.get(node.id) ?? []
  let cands = ids.filter((id) => id !== from.twinId)
  if (!cands.length) cands = ids
  if (cands.length === 1) return graph.edges.get(cands[0])!

  const leaving = isTown(node.id) && route.townRun >= route.townDwell
  let exitX = 0, exitZ = 0
  if (leaving) {
    // the town's only way out is the edge whose destination is a tile node
    for (const e of graph.edges.values()) {
      if (isTown(e.from) && !isTown(e.to)) { exitX = graph.nodes.get(e.from)!.x; exitZ = graph.nodes.get(e.from)!.z; break }
    }
  }
  const weightOf = (e: RoadEdge): number => {
    if (!leaving) return 1
    if (!isTown(e.to)) return 12 // the way out, when we're done here
    const to = graph.nodes.get(e.to)!
    const here = dist(node.x, node.z, exitX, exitZ)
    return dist(to.x, to.z, exitX, exitZ) < here ? 4 : 1
  }
  const weights = cands.map((id) => weightOf(graph.edges.get(id)!))
  const total = weights.reduce((a, b) => a + b, 0)
  let r = nextRand(route) * total
  for (let i = 0; i < cands.length; i++) {
    r -= weights[i]
    if (r <= 0) return graph.edges.get(cands[i])!
  }
  return graph.edges.get(cands[cands.length - 1])!
}

function pushSeg(route: Route, kind: RouteSeg['kind'], id: string, pts: Waypoint[], minor = false): void {
  const start = route.path.length
  route.path.push(...pts)
  route.segs.push({ kind, id, start, end: route.path.length, minor })
}

// Append edges until there is at least `minAhead` waypoints of route in front.
export function extendRoute(route: Route, graph: RoadGraph, minAhead = MIN_AHEAD): void {
  for (let guard = 0; route.path.length - route.wpIndex < minAhead && guard < 64; guard++) {
    const from = graph.edges.get(route.lastEdge)!
    const node = graph.nodes.get(from.to)!
    const next = pickNext(graph, route, node, from)
    pushSeg(route, 'crossing', node.id, crossingPts(node, from.entryArm, next.exitArm, laneOffsetFor(next.zone)), from.minorAtTo)
    pushSeg(route, 'edge', next.id, next.pts)
    route.townRun = isTown(next.to) ? route.townRun + 1 : 0
    route.lastEdge = next.id
  }
}

// Drop consumed path so a long session doesn't grow it without bound. Every index the
// route holds shifts by the same amount, so this stays a single subtraction.
export function trimRoute(route: Route): void {
  if (route.path.length < TRIM_AT || route.wpIndex < KEEP_BEHIND * 2) return
  const cut = route.wpIndex - KEEP_BEHIND
  route.path.splice(0, cut)
  route.wpIndex -= cut
  route.segs = route.segs
    .map((s) => ({ ...s, start: s.start - cut, end: s.end - cut }))
    .filter((s) => s.end > 0)
}

export function makeRoute(graph: RoadGraph, startEdgeId: string, seed: number, startFrac = 0): Route {
  const route: Route = {
    path: [], wpIndex: 0, segs: [], lastEdge: startEdgeId,
    rng: seed | 0, townRun: 0, townDwell: 0,
  }
  resetRoute(route, graph, startEdgeId, startFrac)
  return route
}

// Start again from a given edge, IN PLACE. Callers hold a local reference to the route
// for the rest of their step — swapping in a new object would leave them steering at
// the old one's waypoints for a frame, right after a teleport, which is the worst
// possible moment to be aiming somewhere stale.
export function resetRoute(route: Route, graph: RoadGraph, startEdgeId: string, startFrac = 0): void {
  const edge = graph.edges.get(startEdgeId)
  if (!edge) return
  route.path.length = 0
  route.segs.length = 0
  route.wpIndex = 0
  route.lastEdge = startEdgeId
  route.townRun = 0
  route.townDwell = 3 + Math.floor(nextRand(route) * 5)
  pushSeg(route, 'edge', edge.id, edge.pts)
  route.wpIndex = Math.floor(edge.pts.length * clamp(startFrac, 0, 0.9))
  extendRoute(route, graph)
}

// Spread N drivers over the network: distinct edges where possible, staggered along
// them, each with its own RNG stream. Deterministic — same seat, same start, always.
// `poolOffset` shifts which edges a fleet claims, so the police don't spawn on top of
// the civilians: both stride the same edge list, and without it seat 0 of each is the
// same edge at the same fraction, i.e. two cars in one place on the first frame.
export function seatRoute(
  graph: RoadGraph, seat: number, seats: number, ids: string[], seed = 0, poolOffset = 0,
): Route {
  const pool = ids.length ? ids : [...graph.edges.keys()]
  const stride = Math.max(1, Math.floor(pool.length / Math.max(1, seats)))
  const edgeId = pool[(poolOffset + seat * stride) % pool.length]
  return makeRoute(graph, edgeId, (seat + 1) * 2654435761 + seed, (seat % 3) / 3)
}

// Nearest point on the whole network, as an edge plus how far along it. This is what
// the recovery paths want: a car that has been punted into a field is not necessarily
// anywhere near its own stale route, so "snap to my nearest waypoint" can drag it back
// across the map. Searching the graph puts it back on whatever road it actually landed
// beside, pointing the right way, and it gets a fresh route from there.
export function nearestOnGraph(graph: RoadGraph, x: number, z: number): { edgeId: string; frac: number } {
  let bestId = ''
  let bestFrac = 0
  let bestD = Infinity
  for (const e of graph.edges.values()) {
    for (let i = 0; i < e.pts.length; i++) {
      const d = dist(x, z, e.pts[i].x, e.pts[i].z)
      if (d < bestD) { bestD = d; bestId = e.id; bestFrac = i / Math.max(1, e.pts.length) }
    }
  }
  if (!bestId) bestId = [...graph.edges.keys()][0]
  return { edgeId: bestId, frac: bestFrac }
}

// Where a driver starts: on its route, facing along it.
export function routeSpawn(route: Route): { x: number; z: number; yaw: number } {
  const a = route.path[route.wpIndex]
  const b = route.path[Math.min(route.wpIndex + 1, route.path.length - 1)]
  return { x: a.x, z: a.z, yaw: Math.atan2(b.x - a.x, b.z - a.z) }
}

// --- junctions ------------------------------------------------------------

export interface JunctionAhead {
  node: RoadNode
  dist: number // m of path between the driver and the junction's entry
  minor: boolean // we arrive on a give-way arm and must yield if anything conflicts
}

// The next junction along the route, if it's close enough to matter.
export function junctionAhead(route: Route, graph: RoadGraph, x: number, z: number, maxDist = 30): JunctionAhead | null {
  for (const seg of route.segs) {
    if (seg.kind !== 'crossing' || seg.end <= route.wpIndex) continue
    const node = graph.nodes.get(seg.id)
    if (!node) return null
    // walk the path from the driver to the crossing's first waypoint
    let d = 0
    let px = x, pz = z
    const stop = Math.max(route.wpIndex, seg.start)
    for (let i = route.wpIndex; i < stop; i++) {
      d += dist(px, pz, route.path[i].x, route.path[i].z)
      px = route.path[i].x
      pz = route.path[i].z
      if (d > maxDist) return null
    }
    if (seg.start <= route.wpIndex) d = 0 // already inside it
    return d > maxDist ? null : { node, dist: d, minor: seg.minor }
  }
  return null
}

const CONFLICT_R = 26 // m from the junction centre that counts as "coming to it"
const SAME_ARM_DOT = 0.55 // bearing agreement above which they're on our own approach
const JAM_TIME = 6 // s stopped at a give-way before we take the gap anyway

// Speed cap while approaching a junction we must give way at. Infinity = carry on.
//
// "When needed" is the whole point: a driver on the through road never stops, and a
// driver on the terminating arm only stops if something is actually coming. Priority is
// closest-to-the-junction-goes-first, with a deterministic id tie-break — without one,
// two cars arriving together each see the other as prior and both wait for ever. The
// jam timer is the backstop for anything the tie-break doesn't cover.
export function junctionYield(
  j: JunctionAhead,
  selfId: string,
  self: { x: number; z: number },
  others: Iterable<[string, { x: number; z: number; speed: number }]>,
  jamT: number,
): number {
  if (!j.minor) return Infinity
  if (jamT > JAM_TIME) return Infinity

  const myD = dist(self.x, self.z, j.node.x, j.node.z)
  let ux = self.x - j.node.x, uz = self.z - j.node.z
  const ul = Math.hypot(ux, uz) || 1
  ux /= ul; uz /= ul

  let conflict = false
  for (const [id, o] of others) {
    if (id === selfId) continue
    const od = dist(o.x, o.z, j.node.x, j.node.z)
    if (od > CONFLICT_R) continue
    // Anything already inside the junction box has it, full stop.
    if (od > j.node.radius) {
      // Cars queued on our own approach are carAhead's problem, not a conflict —
      // treating them as one makes two cars in the same lane deadlock each other.
      const dot = (o.x - j.node.x) * ux + (o.z - j.node.z) * uz
      if (dot / (od || 1) > SAME_ARM_DOT) continue
      if (Math.abs(o.speed) < 0.4) continue // parked on another arm blocks nobody
      const prior = od < myD - 1 || (Math.abs(od - myD) <= 1 && id < selfId)
      if (!prior) continue
    }
    conflict = true
    break
  }
  if (!conflict) return Infinity

  // Stop at the line, not in the box. Linear in distance is enough — speedControl
  // turns a falling target into brake pressure.
  const toLine = j.dist - 1.5
  if (toLine < 1.5) return 0
  return clamp(toLine * 0.85, 0, 99)
}


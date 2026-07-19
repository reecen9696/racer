// The map IS a text grid (Part 2 §B.2). One char per TILE. Road piece + rotation are
// inferred from the 4-neighborhood, so the loop can be redrawn freely.
// Chars: '.' grass · road tiles carry their zone: v=village, e=hedge lanes, p=fields,
// w=forest, h=highway (wider Highway_* pieces; branches off the loop, never part of it).
// Everything (visuals, lamps, props, collision, surfaces) derives from this one grid,
// so the server never loads a model.
import { TILE } from './constants'
import { AABB, SurfaceSampler } from './physics'
import {
  TACOS_BOUNDS, TACOS_NS_BANDS, TACOS_EW_BANDS, TACOS_ROAD_X, TACOS_ROAD_Z,
  TACOS_LAMPS, TACOS_COLLIDERS,
} from './tacosTown.generated'

export const MAP_TEXT = `
........................
........................
...vvvvvvvvv............
...v.......vhhhhhh......
...v.......v.....hhhh...
...v.......eeee.....hhh.
...v..........ehhhhhh...
...w..........e.........
...w..........eeeee.....
...w..............e.....
...w..............e.....
...w..............e.....
...ww.............e.....
....w.........ppppe.....
....w.........p.........
....wwwwwwwwwwp.........
........................
`.trim()

export type Zone = 'v' | 'e' | 'p' | 'w' | 'h'
export type Piece = 'straight' | 'corner' | 't' | 'cross' | 'end'

export interface RoadTile {
  gx: number
  gz: number
  x: number // world center
  z: number
  zone: Zone
  piece: Piece
  rot: number // radians, multiples of PI/2
  dirs: { n: boolean; e: boolean; s: boolean; w: boolean }
  // elevation at each connected arm's tile edge + center (filled by the elevation pass)
  elev: { n: number; e: number; s: number; w: number; c: number }
  dirt: boolean // elevated/sloped section renders as a terrain-draped dirt road
}

export interface Lamp {
  x: number; z: number
  color: [number, number, number]
  radius: number
  intensity: number
  height: number
}

export interface Prop {
  kind: 'house' | 'hedge' | 'tree_big' | 'tree_small' | 'bush' | 'fence' | 'cone' | 'sign' | 'parked' | 'tower' | 'gazebo' | 'rock' | 'wreck' | 'lampProp' | 'gas'
  x: number; z: number
  rot: number
  variant: number
}

export interface ParsedMap {
  tiles: RoadTile[]
  lamps: Lamp[]
  props: Prop[]
  colliders: AABB[]
  spawn: { x: number; z: number; yaw: number }
  surfaceAt: SurfaceSampler
  heightAt: (x: number, z: number) => number
  loopOrder: RoadTile[]
  mistAt: (x: number, z: number) => number
  bounds: { minX: number; minZ: number; maxX: number; maxZ: number }
  grid: string[]
}

// deterministic hash → [0,1)
export function hash2(a: number, b: number, salt = 0): number {
  let h = (a * 374761393 + b * 668265263 + salt * 2246822519) | 0
  h = Math.imul(h ^ (h >>> 13), 1274126177)
  h ^= h >>> 16
  return (h >>> 0) / 4294967296
}

const ROAD_HALF = 5.0 // asphalt half-width (measured from Road_Straight GLB)
const HWY_HALF = 7.0 // highway asphalt half-width (Highway_* GLBs scaled to the tile pitch)
const HWY_EDGE = 7.78 // highway shoulder edge — the scaled piece spans the full tile
const S_AMP = 0 // dirt-road S amplitude — user preferred straight segments (corners still arc)

// Centerline of the dirt road through a tile, u in [0,1] from one arm edge to the other.
// Straights wiggle in a gentle S; corners sweep a quarter arc about the tile corner.
export function dirtCenterlinePoint(t: RoadTile, u: number): [number, number] {
  const arms: Array<[number, number]> = []
  if (t.dirs.n) arms.push([0, -1])
  if (t.dirs.w) arms.push([-1, 0])
  if (t.dirs.s) arms.push([0, 1])
  if (t.dirs.e) arms.push([1, 0])
  // T/cross tiles with a pair of opposite arms (highway junctions) route straight
  // through on that axis — the branch is somebody else's tile geometry
  const throughAxis: [number, number] | null =
    t.piece === 'straight' ? arms[0]
    : t.dirs.n && t.dirs.s ? [0, -1]
    : t.dirs.e && t.dirs.w ? [1, 0]
    : null
  if (t.piece === 'straight' || ((t.piece === 't' || t.piece === 'cross') && throughAxis)) {
    const [ax, az] = throughAxis!
    const px = -az, pz = ax
    const along = (u - 0.5) * TILE
    const off = S_AMP * Math.sin(2 * Math.PI * u)
    return [t.x + ax * along + px * off, t.z + az * along + pz * off]
  }
  // corner: arc centered on the shared tile corner between the two arms
  const [aX, aZ] = arms[0]
  const [bX, bZ] = arms[1]
  const cx = t.x + (aX + bX) * (TILE / 2)
  const cz = t.z + (aZ + bZ) * (TILE / 2)
  // start at arm A's edge midpoint, sweep 90° to arm B's edge midpoint
  const sx = t.x + aX * (TILE / 2) - cx
  const sz = t.z + aZ * (TILE / 2) - cz
  const ex = t.x + bX * (TILE / 2) - cx
  const ez = t.z + bZ * (TILE / 2) - cz
  // signed sweep from (sx,sz) to (ex,ez)
  const a0 = Math.atan2(sz, sx)
  const a1 = Math.atan2(ez, ex)
  let da = a1 - a0
  while (da > Math.PI) da -= Math.PI * 2
  while (da < -Math.PI) da += Math.PI * 2
  const ang = a0 + da * u
  const r = TILE / 2
  return [cx + Math.cos(ang) * r, cz + Math.sin(ang) * r]
}
const CURB_HALF = 7.4 // walkway outer edge (GLB walkway spans to 7.79)

// light colors per zone
const SODIUM: [number, number, number] = [1.0, 0.64, 0.28]
const COOLWHITE: [number, number, number] = [0.75, 0.85, 1.0]

// --- Tacos town set piece: a full Mexican street-grid diorama parked east of the
// highway, entered via the 2-tile stub off the circuit at (20,5). The FBX renders
// client-side only; physics (surface + colliders) and lamps come from the
// generated LOCAL-space data translated by this anchor, so the server never
// loads the model. Anchor: stub east edge meets the town's main-street entry
// (local x=-82), stub centreline meets the street's centre (local z=-8.7).
export const TACOS_TOWN = {
  x: 22.5 * TILE + 82.0,
  z: 5 * TILE + 8.7,
  y: 0.06, // sink so the town's road surface (local y≈-0.04) sits just above terrain
}

const inTacosTown = (x: number, z: number, pad = 0): boolean =>
  x >= TACOS_TOWN.x + TACOS_BOUNDS.minX - pad && x <= TACOS_TOWN.x + TACOS_BOUNDS.maxX + pad &&
  z >= TACOS_TOWN.z + TACOS_BOUNDS.minZ - pad && z <= TACOS_TOWN.z + TACOS_BOUNDS.maxZ + pad

// street grid: asphalt inside the measured corridors, concrete elsewhere in town
const tacosSurface = (x: number, z: number): 'asphalt' | 'curb' | null => {
  if (!inTacosTown(x, z)) return null
  const lx = x - TACOS_TOWN.x
  const lz = z - TACOS_TOWN.z
  const ns = TACOS_NS_BANDS.some(([a, b]) => lx >= a && lx <= b) && lz >= TACOS_ROAD_Z[0] && lz <= TACOS_ROAD_Z[1]
  const ew = TACOS_EW_BANDS.some(([a, b]) => lz >= a && lz <= b) && lx >= TACOS_ROAD_X[0] && lx <= TACOS_ROAD_X[1]
  return ns || ew ? 'asphalt' : 'curb'
}

export function parseMap(): ParsedMap {
  const grid = MAP_TEXT.split('\n')
  const H = grid.length
  const W = Math.max(...grid.map((r) => r.length))
  const at = (gx: number, gz: number): string =>
    gz >= 0 && gz < H && gx >= 0 && gx < (grid[gz]?.length ?? 0) ? grid[gz][gx] : '.'
  const isRoad = (c: string) => c === 'v' || c === 'e' || c === 'p' || c === 'w' || c === 'h'

  const tiles: RoadTile[] = []
  const tileMap = new Map<string, RoadTile>()

  for (let gz = 0; gz < H; gz++) {
    for (let gx = 0; gx < W; gx++) {
      const c = at(gx, gz)
      if (!isRoad(c)) continue
      const n = isRoad(at(gx, gz - 1))
      const s = isRoad(at(gx, gz + 1))
      const e = isRoad(at(gx + 1, gz))
      const w = isRoad(at(gx - 1, gz))
      const count = +n + +s + +e + +w
      let piece: Piece
      let rot = 0
      if (count === 4) piece = 'cross'
      else if (count === 3) {
        piece = 't'
        // rot chosen for the missing arm; fixed up in client ROT_FIX after visual check
        if (!n) rot = 0
        else if (!e) rot = Math.PI / 2
        else if (!s) rot = Math.PI
        else rot = -Math.PI / 2
      } else if (count === 2 && ((n && s) || (e && w))) {
        piece = 'straight'
        rot = n && s ? 0 : Math.PI / 2
      } else if (count === 2) {
        piece = 'corner'
        if (n && e) rot = 0
        else if (e && s) rot = -Math.PI / 2
        else if (s && w) rot = Math.PI
        else rot = Math.PI / 2 // w && n
      } else {
        piece = 'end'
        rot = n ? 0 : e ? Math.PI / 2 : s ? Math.PI : -Math.PI / 2
      }
      const tile: RoadTile = {
        gx, gz,
        x: gx * TILE, z: gz * TILE,
        zone: c as Zone,
        piece, rot,
        dirs: { n, e, s, w },
        elev: { n: 0, e: 0, s: 0, w: 0, c: 0 },
        dirt: false,
      }
      tiles.push(tile)
      tileMap.set(gx + ',' + gz, tile)
    }
  }

  // the town stub's last tile continues into the Tacos main street instead of
  // dead-ending: render it as a straight and extend its asphalt to the east edge
  {
    const stubEnd = tileMap.get('22,5')
    if (stubEnd) {
      stubEnd.piece = 'straight'
      stubEnd.rot = Math.PI / 2
      stubEnd.dirs.e = true
    }
  }

  // validate: no dangling ends (a drawn loop should be closed)
  for (const t of tiles) {
    if (t.piece === 'end') console.warn(`map: dangling road at ${t.gx},${t.gz}`)
  }

  // --- surface sampling: distance to the tile's road-arm segments ---
  const surfaceAt: SurfaceSampler = (x, z) => {
    const gx = Math.round(x / TILE)
    const gz = Math.round(z / TILE)
    const tile = tileMap.get(gx + ',' + gz)
    if (!tile) return tacosSurface(x, z) ?? 'offroad'
    // local coords within tile
    const lx = x - tile.x
    const lz = z - tile.z
    // distance to each connected arm's centerline segment (center → edge midpoint)
    let d = Infinity
    const arms: Array<[number, number]> = []
    if (tile.dirs.n) arms.push([0, -1])
    if (tile.dirs.s) arms.push([0, 1])
    if (tile.dirs.e) arms.push([1, 0])
    if (tile.dirs.w) arms.push([-1, 0])
    for (const [ax, az] of arms) {
      // segment from (0,0) to (ax,az)*TILE/2 — distance from point
      const t2 = Math.max(0, Math.min(1, (lx * ax + lz * az) / (TILE / 2)))
      const px = ax * (TILE / 2) * t2
      const pz = az * (TILE / 2) * t2
      d = Math.min(d, Math.hypot(lx - px, lz - pz))
    }
    if (tile.dirt) {
      // curved centerline: distance via analytic forms (straight S / corner arc)
      if (tile.piece === 'straight') {
        const [ax, az] = tile.dirs.n || tile.dirs.s ? [0, 1] : [1, 0]
        const u = Math.max(0, Math.min(1, (ax ? (x - tile.x) : (z - tile.z)) / TILE + 0.5))
        const off = 0
        const lat = ax ? (z - tile.z) : (x - tile.x)
        return Math.abs(lat - off) < ROAD_HALF ? 'dirt' : 'offroad'
      }
      if (tile.piece === 'corner') {
        const dirsArr: Array<[number, number]> = []
        if (tile.dirs.n) dirsArr.push([0, -1])
        if (tile.dirs.w) dirsArr.push([-1, 0])
        if (tile.dirs.s) dirsArr.push([0, 1])
        if (tile.dirs.e) dirsArr.push([1, 0])
        const cx = tile.x + (dirsArr[0][0] + dirsArr[1][0]) * (TILE / 2)
        const cz = tile.z + (dirsArr[0][1] + dirsArr[1][1]) * (TILE / 2)
        const dr = Math.abs(Math.hypot(x - cx, z - cz) - TILE / 2)
        return dr < ROAD_HALF ? 'dirt' : 'offroad'
      }
      return d < ROAD_HALF ? 'dirt' : 'offroad'
    }
    if (tile.zone === 'h') {
      if (d < HWY_HALF) return 'asphalt'
      if (d < HWY_EDGE) return 'curb'
      return 'offroad'
    }
    if (d < ROAD_HALF) return 'asphalt'
    if (d < CURB_HALF) return 'curb'
    return 'offroad'
  }

  // --- elevation: a rise-and-fall profile along the far half of the loop ---
  // Walk the loop (every tile is degree-2), assign heights to the shared tile
  // edges from a raised-cosine profile, then flatten corners so the rigid
  // corner pieces never have to twist. Straights carry all the slope.
  const order: RoadTile[] = []
  {
    const start = tiles.find((t) => t.zone === 'v' && t.piece === 'straight') ?? tiles[0]
    let prev: RoadTile | null = null
    let cur: RoadTile | undefined = start
    for (let i = 0; i < tiles.length + 1 && cur; i++) {
      order.push(cur)
      const nb: RoadTile[] = []
      if (cur.dirs.n) nb.push(tileMap.get(cur.gx + ',' + (cur.gz - 1))!)
      if (cur.dirs.s) nb.push(tileMap.get(cur.gx + ',' + (cur.gz + 1))!)
      if (cur.dirs.e) nb.push(tileMap.get(cur.gx + 1 + ',' + cur.gz)!)
      if (cur.dirs.w) nb.push(tileMap.get(cur.gx - 1 + ',' + cur.gz)!)
      // highway tiles branch off the loop at T junctions — the walk must never
      // wander down the branch or the AI ring and elevation profile both break
      const next = nb.filter(Boolean).find((t) => t !== prev && t.zone !== 'h')
      prev = cur
      cur = next === start ? undefined : next
    }
    const N = order.length
    const HMAX = 5.5
    // edge i sits between order[i] and order[(i+1)%N]
    const edgeH: number[] = []
    for (let i = 0; i < N; i++) {
      const s2 = (i + 0.5) / N
      const t2 = (s2 - 0.35) / 0.5
      edgeH.push(t2 > 0 && t2 < 1 ? HMAX * 0.5 * (1 - Math.cos(2 * Math.PI * t2)) : 0)
    }
    // flatten corner tiles: both of a corner's edges take their average
    for (let pass = 0; pass < 3; pass++) {
      for (let i = 0; i < N; i++) {
        if (order[i].piece === 'straight') continue
        const a = (i - 1 + N) % N
        const avg = (edgeH[a] + edgeH[i]) / 2
        edgeH[a] = avg
        edgeH[i] = avg
      }
    }
    // write per-arm heights into the tiles
    const dirTo = (from: RoadTile, to: RoadTile): 'n' | 'e' | 's' | 'w' =>
      to.gz < from.gz ? 'n' : to.gz > from.gz ? 's' : to.gx > from.gx ? 'e' : 'w'
    for (let i = 0; i < N; i++) {
      const t2 = order[i]
      const nxt = order[(i + 1) % N]
      const prv = order[(i - 1 + N) % N]
      const hIn = edgeH[(i - 1 + N) % N]
      const hOut = edgeH[i]
      t2.elev.c = (hIn + hOut) / 2
      t2.elev.n = t2.elev.e = t2.elev.s = t2.elev.w = t2.elev.c
      t2.elev[dirTo(t2, prv)] = hIn
      t2.elev[dirTo(t2, nxt)] = hOut
    }
    // the whole elevated run becomes a dirt road (rigid road tiles can't drape terrain)
    for (const t2 of order) {
      const arms = [t2.elev.n, t2.elev.e, t2.elev.s, t2.elev.w]
      const spread = Math.max(...arms) - Math.min(...arms)
      t2.dirt = t2.elev.c > 0.25 || spread > 0.05
    }
  }

  const heightAt = (x: number, z: number): number => {
    const gx = Math.round(x / TILE)
    const gz = Math.round(z / TILE)
    const t = tileMap.get(gx + ',' + gz)
    if (t) {
      if (t.piece === 'straight') {
        if (t.dirs.n || t.dirs.s) {
          const u = Math.max(0, Math.min(1, (z - t.z) / TILE + 0.5))
          return t.elev.n + (t.elev.s - t.elev.n) * u
        }
        const u = Math.max(0, Math.min(1, (x - t.x) / TILE + 0.5))
        return t.elev.w + (t.elev.e - t.elev.w) * u
      }
      return t.elev.c
    }
    // offroad: inverse-distance blend toward nearby road tile PLANES (not just their
    // centers) so shoulders continue the road slope and the tiles sit flush
    let num = 0
    let den = 1 / 2400 // base weight pulls toward sea level away from the road
    for (const rt of tiles) {
      const dx = x - rt.x, dz = z - rt.z
      const d2 = dx * dx + dz * dz
      if (d2 > 3600) continue
      let hTile = rt.elev.c
      if (rt.piece === 'straight') {
        if (rt.dirs.n || rt.dirs.s) {
          const u = Math.max(-0.15, Math.min(1.15, (z - rt.z) / TILE + 0.5))
          hTile = rt.elev.n + (rt.elev.s - rt.elev.n) * u
        } else {
          const u = Math.max(-0.15, Math.min(1.15, (x - rt.x) / TILE + 0.5))
          hTile = rt.elev.w + (rt.elev.e - rt.elev.w) * u
        }
      }
      const w2 = 1 / (d2 + 30)
      num += w2 * hTile
      den += w2
    }
    return num / den
  }

  // --- dressing pass: lamps, props, colliders — all deterministic ---
  const lamps: Lamp[] = []
  const props: Prop[] = []
  const colliders: AABB[] = []

  const box = (x: number, z: number, hw: number, hd: number, soft = false): AABB => ({
    minX: x - hw, maxX: x + hw, minZ: z - hd, maxZ: z + hd, soft,
  })

  // 5-point clearance probe: nothing may sit within `m` metres of any road surface.
  // 3 m is the default everywhere; the dirt corridor tightens it so the treeline can
  // actually crowd the track instead of standing a car-width back from it.
  const clearOfRoadBy = (x: number, z: number, m: number): boolean => {
    for (const [ox, oz] of [[0, 0], [m, 0], [-m, 0], [0, m], [0, -m]] as const) {
      if (surfaceAt(x + ox, z + oz) !== 'offroad') return false
    }
    return true
  }
  const clearOfRoad = (x: number, z: number): boolean => clearOfRoadBy(x, z, 3)
  // every lamp faces its arm (local +Z) at the road centerline — consistent and always onto the road
  const lampRotToward = (lx: number, lz: number, tx: number, tz: number): number => Math.atan2(tx - lx, tz - lz)
  // the visual head hangs ~1.15 m out along the arm — the LIGHT lives there, not at the pole tip
  const LAMP_ARM = 1.15
  const lampHead = (lx: number, lz: number, tx: number, tz: number): { hx: number; hz: number; rot: number } => {
    const rot = lampRotToward(lx, lz, tx, tz)
    return { hx: lx + Math.sin(rot) * LAMP_ARM, hz: lz + Math.cos(rot) * LAMP_ARM, rot }
  }

  // sign variants: 0=SL25, 1=SL55, 2=Stop, 3=Crossing (client maps variant → GLB)
  // one cone on the inside curb at a corner's apex — marks the clipping point
  // without ever sitting on the asphalt itself
  // a row of cones (roadworks dressing): n cones from (x0,z0) stepping (dx,dz).
  // One colour per row, tiny per-cone rotation scatter. No colliders — the client
  // knockdown physics (fx/cones.ts) makes them puntable instead of solid.
  const coneRow = (x0: number, z0: number, dx: number, dz: number, n: number, gx: number, gz: number, salt: number): void => {
    for (let i = 0; i < n; i++) {
      props.push({
        kind: 'cone',
        x: x0 + dx * i,
        z: z0 + dz * i,
        rot: hash2(gx, gz, salt + i) * Math.PI,
        variant: Math.floor(hash2(gx, gz, salt) * 2),
      })
    }
  }

  const apexCone = (t: RoadTile, salt: number): void => {
    const arms: Array<[number, number]> = []
    if (t.dirs.n) arms.push([0, -1])
    if (t.dirs.w) arms.push([-1, 0])
    if (t.dirs.s) arms.push([0, 1])
    if (t.dirs.e) arms.push([1, 0])
    const cx = t.x + (arms[0][0] + arms[1][0]) * (TILE / 2)
    const cz = t.z + (arms[0][1] + arms[1][1]) * (TILE / 2)
    const dl = Math.hypot(t.x - cx, t.z - cz) || 1
    const r = TILE / 2 - ROAD_HALF - 0.8 // just inside the inner asphalt edge
    props.push({
      kind: 'cone',
      x: cx + ((t.x - cx) / dl) * r,
      z: cz + ((t.z - cz) / dl) * r,
      rot: hash2(t.gx, t.gz, salt) * Math.PI,
      variant: Math.floor(hash2(t.gx, t.gz, salt + 1) * 2),
    })
  }

  let lampAlt = 0
  for (const t of tiles) {
    const along = t.dirs.n || t.dirs.s ? 'ns' : 'ew' // dominant axis for straights
    const sideOff = CURB_HALF + 0.6

    if (t.zone === 'v') {
      // warm sodium lamp every 2nd tile, alternating sides
      if ((t.gx + t.gz) % 2 === 0) {
        const side = lampAlt++ % 2 === 0 ? 1 : -1
        const lx = along === 'ns' ? t.x + side * (CURB_HALF - 0.8) : t.x
        const lz = along === 'ns' ? t.z : t.z + side * (CURB_HALF - 0.8)
        const head = lampHead(lx, lz, t.x, t.z)
        lamps.push({ x: head.hx, z: head.hz, color: SODIUM, radius: 13, intensity: 1.0, height: 5.2 })
        props.push({ kind: 'lampProp', x: lx, z: lz, rot: head.rot, variant: 0 })
      }
      // roadworks: the odd straight gets a short cone row ON THE PAVEMENT (never the
      // asphalt — cones stay off the road; clipping the kerb is how you meet them)
      if (t.piece === 'straight' && hash2(t.gx, t.gz, 140) < 0.25) {
        const side = hash2(t.gx, t.gz, 141) < 0.5 ? 1 : -1
        const inset = (ROAD_HALF + CURB_HALF) / 2 // middle of the walkway
        if (along === 'ns') coneRow(t.x + side * inset, t.z - 3.9, 0, 2.6, 4, t.gx, t.gz, 142)
        else coneRow(t.x - 3.9, t.z + side * inset, 2.6, 0, 4, t.gx, t.gz, 142)
      }
      // street furniture: sparse 25 limit / pedestrian-crossing signs on the verge
      if (t.piece === 'straight' && hash2(t.gx, t.gz, 70) < 0.3) {
        const side = hash2(t.gx, t.gz, 71) < 0.5 ? 1 : -1
        const sx = along === 'ns' ? t.x + side * (CURB_HALF + 0.5) : t.x + 3.5
        const sz = along === 'ns' ? t.z + 3.5 : t.z + side * (CURB_HALF + 0.5)
        // plate faces down the road so approaching drivers read it
        const rot = (along === 'ns' ? 0 : Math.PI / 2) + (side > 0 ? Math.PI : 0)
        props.push({ kind: 'sign', x: sx, z: sz, rot, variant: hash2(t.gx, t.gz, 73) < 0.6 ? 0 : 3 })
      }
      // houses on open sides of straights
      if (t.piece === 'straight') {
        for (const side of [-1, 1]) {
          if (hash2(t.gx, t.gz, side + 10) > 0.75) continue // some gaps
          const hx = along === 'ns' ? t.x + side * (sideOff + 8.5) : t.x + (hash2(t.gx, t.gz, 3) - 0.5) * 4
          const hz = along === 'ns' ? t.z + (hash2(t.gx, t.gz, 4) - 0.5) * 4 : t.z + side * (sideOff + 8.5)
          const rot = along === 'ns' ? (side > 0 ? -Math.PI / 2 : Math.PI / 2) : side > 0 ? Math.PI : 0
          props.push({ kind: 'house', x: hx, z: hz, rot, variant: Math.floor(hash2(t.gx, t.gz, 5) * 15) })
          colliders.push(box(hx, hz, along === 'ns' ? 5.0 : 4.5, along === 'ns' ? 4.5 : 5.0))
          // garden trees around each house
          for (let gt = 0; gt < 2; gt++) {
            if (hash2(t.gx * 3 + gt, t.gz, side + 60) > 0.8) continue
            const ang = hash2(t.gx + gt, t.gz, side + 61) * Math.PI * 2
            const rad = 7 + hash2(t.gx, t.gz + gt, side + 62) * 5
            const tx2 = hx + Math.cos(ang) * rad
            const tz2 = hz + Math.sin(ang) * rad + (side > 0 ? 4 : -4)
            let clear = true
            for (const [ox, oz] of [[0, 0], [3, 0], [-3, 0], [0, 3], [0, -3]] as const) {
              if (surfaceAt(tx2 + ox, tz2 + oz) !== 'offroad') { clear = false; break }
            }
            if (!clear) continue
            props.push({ kind: hash2(t.gx, t.gz + gt, 63) < 0.6 ? 'tree_small' : 'bush', x: tx2, z: tz2, rot: hash2(t.gx, t.gz, 64 + gt) * Math.PI * 2, variant: Math.floor(hash2(t.gx + gt, t.gz, 65) * 8) })
          }
          // occasional parked car in front
          if (hash2(t.gx, t.gz, side + 20) < 0.3) {
            const px = along === 'ns' ? t.x + side * (CURB_HALF + 1.6) : hx + 3
            const pz = along === 'ns' ? hz + 3 : t.z + side * (CURB_HALF + 1.6)
            props.push({ kind: 'parked', x: px, z: pz, rot: along === 'ns' ? 0 : Math.PI / 2, variant: Math.floor(hash2(t.gx, t.gz, 6) * 4) })
            colliders.push(box(px, pz, along === 'ns' ? 1.0 : 2.3, along === 'ns' ? 2.3 : 1.0))
          }
        }
      }
    }

    if (t.zone === 'e') {
      // open country lanes: sparse trees set well back (visual only)
      for (const side of [-1, 1]) {
        if (hash2(t.gx, t.gz, side + 50) > 0.55) continue
        const dist = CURB_HALF + 4 + hash2(t.gx, t.gz, side + 51) * 7
        const tx = along === 'ns' ? t.x + side * dist : t.x + (hash2(t.gx, t.gz, 52) - 0.5) * TILE * 0.8
        const tz = along === 'ns' ? t.z + (hash2(t.gx, t.gz, 53) - 0.5) * TILE * 0.8 : t.z + side * dist
        if (!clearOfRoad(tx, tz)) continue
        props.push({ kind: 'bush', x: tx, z: tz, rot: hash2(t.gx, t.gz, 55) * Math.PI * 2, variant: Math.floor(hash2(t.gx, t.gz, 56) * 8) })
      }
      // cones marking corner clipping points
      if (t.piece === 'corner') apexCone(t, 7)
      // T junction onto the highway: light the turn-off so it reads at night
      if (t.piece === 't') {
        const lx = t.x + (t.dirs.e && t.dirs.w ? 0 : CURB_HALF - 0.8) * (t.dirs.e ? -1 : 1)
        const lz = t.z + (t.dirs.e && t.dirs.w ? CURB_HALF - 0.8 : 0)
        const head = lampHead(lx, lz, t.x, t.z)
        lamps.push({ x: head.hx, z: head.hz, color: SODIUM, radius: 13, intensity: 1.05, height: 5.2 })
        props.push({ kind: 'lampProp', x: lx, z: lz, rot: head.rot, variant: 0 })
      }
    }

    if (t.zone === 'h') {
      // cool-white highway lighting, one side, every 3rd tile
      if (t.piece === 'straight' && (t.gx + t.gz) % 3 === 0) {
        const lx = along === 'ns' ? t.x + (HWY_EDGE + 1.0) : t.x
        const lz = along === 'ns' ? t.z : t.z + (HWY_EDGE + 1.0)
        const head = lampHead(lx, lz, t.x, t.z)
        lamps.push({ x: head.hx, z: head.hz, color: COOLWHITE, radius: 16, intensity: 0.95, height: 6.0 })
        props.push({ kind: 'lampProp', x: lx, z: lz, rot: head.rot, variant: 1 })
      }
      // every corner gets a lamp on the outside of the turn — the bend has to read
      // from a car arriving at highway speed
      if (t.piece === 'corner') {
        const ix = (t.dirs.e ? 1 : 0) - (t.dirs.w ? 1 : 0)
        const iz = (t.dirs.s ? 1 : 0) - (t.dirs.n ? 1 : 0)
        const lx = t.x - ix * TILE * 0.38
        const lz = t.z - iz * TILE * 0.38
        const head = lampHead(lx, lz, t.x, t.z)
        lamps.push({ x: head.hx, z: head.hz, color: COOLWHITE, radius: 16, intensity: 1.0, height: 6.0 })
        props.push({ kind: 'lampProp', x: lx, z: lz, rot: head.rot, variant: 1 })
      }
      // roadworks staged on the verge: a cone row angling in toward (but never onto)
      // the shoulder — reads as work-ahead at highway speed, sits entirely on grass
      if (t.piece === 'straight' && hash2(t.gx, t.gz, 145) < 0.35) {
        const side = hash2(t.gx, t.gz, 146) < 0.5 ? 1 : -1
        for (let i = 0; i < 5; i++) {
          const lat = side * (HWY_EDGE + 2.6 - i * 0.45) // grass verge, easing toward the edge
          const lon = -6.2 + i * 3.1
          props.push({
            kind: 'cone',
            x: along === 'ns' ? t.x + lat : t.x + lon,
            z: along === 'ns' ? t.z + lon : t.z + lat,
            rot: hash2(t.gx, t.gz, 147 + i) * Math.PI,
            variant: Math.floor(hash2(t.gx, t.gz, 148) * 2),
          })
        }
      }
      // 55 limit signs spaced down the straights
      if (t.piece === 'straight' && hash2(t.gx, t.gz, 74) < 0.3) {
        const side = hash2(t.gx, t.gz, 75) < 0.5 ? 1 : -1
        const sx = along === 'ns' ? t.x + side * (HWY_EDGE + 0.7) : t.x - 3.5
        const sz = along === 'ns' ? t.z - 3.5 : t.z + side * (HWY_EDGE + 0.7)
        const rot = (along === 'ns' ? 0 : Math.PI / 2) + (side > 0 ? Math.PI : 0)
        props.push({ kind: 'sign', x: sx, z: sz, rot, variant: 1 })
      }
      // roadside houses on the outer ring of the circuit (away from the gazebo
      // pocket), set further back than village houses — farmstead spacing
      if (t.piece === 'straight' && hash2(t.gx, t.gz, 80) < 0.6) {
        const side = along === 'ns' ? 1 : t.z < 4.5 * TILE ? -1 : 1
        const dist = HWY_EDGE + 9.5 + hash2(t.gx, t.gz, 81) * 4
        const hx = along === 'ns' ? t.x + side * dist : t.x + (hash2(t.gx, t.gz, 82) - 0.5) * 5
        const hz = along === 'ns' ? t.z + (hash2(t.gx, t.gz, 83) - 0.5) * 5 : t.z + side * dist
        let ok = true
        for (const [ox, oz] of [[0, 0], [5, 0], [-5, 0], [0, 5], [0, -5]] as const) {
          if (surfaceAt(hx + ox, hz + oz) !== 'offroad') { ok = false; break }
        }
        if (ok) {
          const rot = along === 'ns' ? (side > 0 ? -Math.PI / 2 : Math.PI / 2) : side > 0 ? Math.PI : 0
          props.push({ kind: 'house', x: hx, z: hz, rot, variant: Math.floor(hash2(t.gx, t.gz, 84) * 15) })
          colliders.push(box(hx, hz, along === 'ns' ? 5.0 : 4.5, along === 'ns' ? 4.5 : 5.0))
          // yard trees + a bush or two around each farmstead
          for (let gt = 0; gt < 3; gt++) {
            const ang = hash2(t.gx + gt, t.gz, 85) * Math.PI * 2
            const rad = 7.5 + hash2(t.gx, t.gz + gt, 86) * 5
            const tx2 = hx + Math.cos(ang) * rad
            const tz2 = hz + Math.sin(ang) * rad
            if (!clearOfRoad(tx2, tz2)) continue
            const big = hash2(t.gx, t.gz + gt, 87) < 0.35
            props.push({ kind: big ? 'tree_big' : hash2(t.gx + gt, t.gz, 88) < 0.5 ? 'tree_small' : 'bush', x: tx2, z: tz2, rot: hash2(t.gx, t.gz, 89 + gt) * Math.PI * 2, variant: Math.floor(hash2(t.gx + gt, t.gz, 90) * 8) })
            if (big) colliders.push(box(tx2, tz2, 0.7, 0.7))
          }
        }
      }
      // verge bushes close to the shoulder, both sides
      for (const side of [-1, 1]) {
        if (hash2(t.gx, t.gz, side + 100) > 0.55) continue
        const dist = HWY_EDGE + 2.5 + hash2(t.gx, t.gz, side + 101) * 6
        const bx = along === 'ns' ? t.x + side * dist : t.x + (hash2(t.gx, t.gz, side + 102) - 0.5) * TILE * 0.8
        const bz = along === 'ns' ? t.z + (hash2(t.gx, t.gz, side + 103) - 0.5) * TILE * 0.8 : t.z + side * dist
        if (!clearOfRoad(bx, bz)) continue
        props.push({ kind: 'bush', x: bx, z: bz, rot: hash2(t.gx, t.gz, side + 104) * Math.PI * 2, variant: Math.floor(hash2(t.gx, t.gz, side + 105) * 8) })
      }
    }

    if (t.zone === 'p') {
      // cool-white lamps, sparse; straights only — on corners the 'ns' offset lands
      // exactly on the road arc (a pole in the middle of the dirt road)
      if (t.piece === 'straight' && (t.gx + t.gz) % 3 === 0) {
        const lx = t.x + (along === 'ns' ? 8.6 : 0)
        const lz = t.z + (along === 'ns' ? 0 : 8.6)
        const head = lampHead(lx, lz, t.x, t.z)
        lamps.push({ x: head.hx, z: head.hz, color: COOLWHITE, radius: 15, intensity: 0.9, height: 6.0 })
        props.push({ kind: 'lampProp', x: lx, z: lz, rot: head.rot, variant: 1 })
      }
    }

    if (t.zone === 'w') {
      // forest walls: big trees (hard colliders) both sides, small trees/bushes scattered
      for (const side of [-1, 1]) {
        const n = 5
        for (let i = 0; i < n; i++) {
          const u = (i + 0.5) / n - 0.5
          const jitter = (hash2(t.gx * 7 + i, t.gz, side + 30) - 0.5) * 3
          const dist = sideOff + 4.5 + hash2(t.gx + i, t.gz, side + 31) * 9
          const tx = along === 'ns' ? t.x + side * dist : t.x + u * TILE + jitter
          const tz = along === 'ns' ? t.z + u * TILE + jitter : t.z + side * dist
          const big = hash2(t.gx + i * 3, t.gz, side + 32) < 0.6
          let treeClear = true
          for (const [ox, oz] of [[0, 0], [3, 0], [-3, 0], [0, 3], [0, -3]] as const) {
            if (surfaceAt(tx + ox, tz + oz) !== 'offroad') { treeClear = false; break }
          }
          if (!treeClear) continue
          props.push({ kind: big ? 'tree_big' : 'tree_small', x: tx, z: tz, rot: hash2(t.gx, t.gz + i, 33) * Math.PI * 2, variant: Math.floor(hash2(t.gx, t.gz + i, 34) * 8) })
          if (big) colliders.push(box(tx, tz, 0.7, 0.7))
        }
        // bushes closer to the road — dressing only in v1
        if (hash2(t.gx, t.gz, side + 40) < 0.5) {
          const bx = along === 'ns' ? t.x + side * (CURB_HALF + 3.2) : t.x + (hash2(t.gx, t.gz, 41) - 0.5) * TILE * 0.8
          const bz = along === 'ns' ? t.z + (hash2(t.gx, t.gz, 42) - 0.5) * TILE * 0.8 : t.z + side * (CURB_HALF + 3.2)
          // this offset is measured from the TILE centre, but on a dirt tile the ribbon
          // drifts off-centre — without a probe the bush can land on the road itself
          if (!clearOfRoadBy(bx, bz, 1.2)) continue
          props.push({ kind: 'bush', x: bx, z: bz, rot: hash2(t.gx, t.gz, 43) * Math.PI * 2, variant: Math.floor(hash2(t.gx, t.gz, 44) * 5) })
        }
      }
    }
  }

  // one lonely sodium lamp mid-forest (the halfway beacon) — offset PERPENDICULAR
  // to the road axis (a fixed +x offset put the pole on the centerline of the
  // east-west bottom straight), and clear of the dirt ribbon
  const forestTiles = tiles.filter((t) => t.zone === 'w' && t.piece === 'straight')
  if (forestTiles.length) {
    const mid = forestTiles[Math.floor(forestTiles.length / 2)]
    {
      const off = CURB_HALF + 0.5
      const lx = mid.dirs.n || mid.dirs.s ? mid.x + off : mid.x
      const lz = mid.dirs.n || mid.dirs.s ? mid.z : mid.z + off
      const head = lampHead(lx, lz, mid.x, mid.z)
      lamps.push({ x: head.hx, z: head.hz, color: SODIUM, radius: 12, intensity: 1.1, height: 5.2 })
      props.push({ kind: 'lampProp', x: lx, z: lz, rot: head.rot, variant: 0 })
    }
  }

  // landmark: the tower (church/water tower stand-in) just outside the village's NE corner
  const cornerTiles = tiles.filter((t) => t.zone === 'v' && t.piece === 'corner')
  if (cornerTiles.length) {
    const c = cornerTiles[cornerTiles.length - 1]
    props.push({ kind: 'tower', x: c.x + TILE * 0.9, z: c.z - TILE * 0.9, rot: 0, variant: 0 })
    colliders.push(box(c.x + TILE * 0.9, c.z - TILE * 0.9, 2.5, 2.5))
  }

  // stop signs where the highway meets the loop: on the highway tile adjacent to
  // each junction, right-hand side of traffic approaching it, facing that traffic
  for (const t of tiles) {
    if (t.zone !== 'h') continue
    const dirVecs = { n: [0, -1], s: [0, 1], e: [1, 0], w: [-1, 0] } as const
    for (const d of ['n', 's', 'e', 'w'] as const) {
      if (!t.dirs[d]) continue
      const [dx, dz] = dirVecs[d]
      const nbr = tileMap.get(t.gx + dx + ',' + (t.gz + dz))
      if (!nbr || nbr.zone === 'h') continue
      const yaw = Math.atan2(dx, dz) // heading toward the junction
      const rx = Math.cos(yaw), rz = -Math.sin(yaw) // right-of-travel
      props.push({
        kind: 'sign',
        x: t.x + dx * (TILE / 2 - 2.0) + rx * (HWY_EDGE + 0.7),
        z: t.z + dz * (TILE / 2 - 2.0) + rz * (HWY_EDGE + 0.7),
        rot: Math.atan2(-dx, -dz), // plate faces the approaching car
        variant: 2,
      })
    }
  }

  // gazebo landmark in the pocket the highway wraps around — a lit destination
  // visible from three sides of the new circuit
  {
    const gzx = 15.5 * TILE, gzz = 4.5 * TILE
    props.push({ kind: 'gazebo', x: gzx, z: gzz, rot: 0, variant: 0 })
    colliders.push(box(gzx, gzz, 2.4, 2.4))
    const head = lampHead(gzx + 5.5, gzz, gzx, gzz)
    lamps.push({ x: head.hx, z: head.hz, color: SODIUM, radius: 12, intensity: 1.0, height: 5.2 })
    props.push({ kind: 'lampProp', x: gzx + 5.5, z: gzz, rot: head.rot, variant: 0 })
    // a couple of cars pulled off by the gazebo — somebody's already parked up here
    for (const [i, [px, pz, pr]] of ([[gzx + 2.5, gzz + 10.5, Math.PI / 2 + 0.15], [gzx + 8.5, gzz + 9.0, Math.PI / 2 - 0.2]] as const).entries()) {
      props.push({ kind: 'parked', x: px, z: pz, rot: pr, variant: 1 + i })
      colliders.push(box(px, pz, 2.3, 1.0))
    }
  }

  // Tacos town: building/prop colliders + street lamps, translated by the anchor.
  // The lamps feed the same glow-sprite + ground-pool pipeline as the village.
  for (const c of TACOS_COLLIDERS) {
    colliders.push({
      minX: TACOS_TOWN.x + c.minX, maxX: TACOS_TOWN.x + c.maxX,
      minZ: TACOS_TOWN.z + c.minZ, maxZ: TACOS_TOWN.z + c.maxZ,
    })
  }
  for (const l of TACOS_LAMPS) {
    lamps.push({ x: TACOS_TOWN.x + l.x, z: TACOS_TOWN.z + l.z, color: SODIUM, radius: 13, intensity: 1.0, height: l.h })
  }

  // --- vegetation scatter: density-field driven so some areas are thick woods and
  // others open meadow; bushes-only near the dirt road (offroad play space);
  // NOTHING is allowed to overhang the road (5-point clearance around each trunk)

  const dirtTiles = tiles.filter((t) => t.dirt)
  const nearDirt = (x: number, z: number): boolean => {
    for (const t of dirtTiles) {
      if ((x - t.x) ** 2 + (z - t.z) ** 2 < 32 * 32) return true
    }
    return false
  }
  for (let i = 0; i < 7400; i++) {
    const x = hash2(i, 91) * W * TILE
    const z = hash2(i, 92) * H * TILE
    // regional density: 40 m cells, squared for contrast (dense woods vs open meadow)
    const cd = hash2(Math.floor(x / 40), Math.floor(z / 40), 96)
    if (hash2(i, 97) > cd * cd * 1.9) continue
    if (!clearOfRoad(x, z) || inTacosTown(x, z, 8)) continue
    const r = hash2(i, 93)
    // The dirt run used to be bush-only, which left it reading as bare scrubland.
    // It now gets trees too — leaning small (small trees have no collider, so the
    // offroad play space stays forgiving) but with real big-tree trunks mixed in.
    const kind = nearDirt(x, z)
      ? r < 0.12 ? 'tree_big' : r < 0.45 ? 'tree_small' : 'bush'
      : r < 0.2 ? 'tree_big' : r < 0.38 ? 'tree_small' : 'bush'
    props.push({ kind, x, z, rot: hash2(i, 94) * Math.PI * 2, variant: Math.floor(hash2(i, 95) * 12) })
    if (kind === 'tree_big') colliders.push(box(x, z, 0.7, 0.7))
  }

  // Dirt-corridor treeline: the global scatter is uniform-random over the whole map,
  // so it can never guarantee density along one specific run. This walks the dirt
  // centreline itself and plants outward from it, which is what makes the section
  // feel like a track cut through woods rather than a strip across a field.
  //
  // Hard trunks (tree_big) are held back to the outer band and probed with a wider
  // margin than the soft stuff. The dirt run is the offroad play space — the verge
  // you clip while sliding should be small trees and bushes that cost you nothing,
  // with the collidable trunks far enough out that hitting one is a real mistake.
  for (const t of dirtTiles) {
    const STEPS = 16
    for (let s = 0; s < STEPS; s++) {
      const u = (s + 0.5) / STEPS
      const [px, pz] = dirtCenterlinePoint(t, u)
      // tangent by finite difference along the centreline, then the lateral normal
      const [ax, az] = dirtCenterlinePoint(t, Math.min(1, u + 0.02))
      const [bx, bz] = dirtCenterlinePoint(t, Math.max(0, u - 0.02))
      const tlen = Math.hypot(ax - bx, az - bz) || 1
      const nx = -(az - bz) / tlen, nz = (ax - bx) / tlen
      for (const side of [-1, 1]) {
        for (let slot = 0; slot < 4; slot++) {
          const salt = t.gx * 31 + t.gz * 17 + s * 7 + slot * 3 + (side > 0 ? 1000 : 0)
          if (hash2(salt, slot, 401) > 0.72) continue // gaps, so it isn't a hedge wall
          const r = hash2(salt, s, 402)
          const kind = r < 0.18 ? 'tree_big' : r < 0.58 ? 'tree_small' : 'bush'
          // big trunks live in the outer band; soft cover crowds the edge
          const lat = kind === 'tree_big'
            ? 11.5 + hash2(salt, slot, 403) * 9
            : 6.4 + slot * 1.5 + hash2(salt, slot, 404) * 3.5
          const jit = (hash2(salt, slot, 405) - 0.5) * 3.5
          const x = px + nx * side * lat + (ax - bx) / tlen * jit
          const z = pz + nz * side * lat + (az - bz) / tlen * jit
          if (!clearOfRoadBy(x, z, kind === 'tree_big' ? 2.4 : 1.2)) continue
          props.push({ kind, x, z, rot: hash2(salt, slot, 406) * Math.PI * 2, variant: Math.floor(hash2(salt, slot, 407) * 8) })
          if (kind === 'tree_big') colliders.push(box(x, z, 0.7, 0.7))
        }
      }
    }
  }

  // densify the NE quarter around the highway — the global density field can leave
  // the new circuit's surroundings bare; keep the gazebo clearing open and stay off
  // the farmstead yards
  {
    const houses = props.filter((p) => p.kind === 'house')
    const x0 = 10.5 * TILE, x1 = 22.5 * TILE
    const z0 = 0.5 * TILE, z1 = 7.6 * TILE
    for (let i = 0; i < 900; i++) {
      const x = x0 + hash2(i, 301) * (x1 - x0)
      const z = z0 + hash2(i, 302) * (z1 - z0)
      if (hash2(i, 303) > 0.5) continue
      if (!clearOfRoad(x, z) || inTacosTown(x, z, 8)) continue
      if ((x - 15.5 * TILE) ** 2 + (z - 4.5 * TILE) ** 2 < 9 * 9) continue // gazebo clearing
      let nearHouse = false
      for (const h of houses) {
        if ((x - h.x) ** 2 + (z - h.z) ** 2 < 8 * 8) { nearHouse = true; break }
      }
      if (nearHouse) continue
      const r = hash2(i, 304)
      const kind = r < 0.22 ? 'tree_big' : r < 0.45 ? 'tree_small' : 'bush'
      props.push({ kind, x, z, rot: hash2(i, 305) * Math.PI * 2, variant: Math.floor(hash2(i, 306) * 12) })
      if (kind === 'tree_big') colliders.push(box(x, z, 0.7, 0.7))
    }
  }

  // perimeter forest: rings of trees just outside the playable grid — fills the
  // horizon and fences the world (inner ring carries colliders)
  {
    const minX = -TILE, maxX = W * TILE
    const minZ = -TILE, maxZ = H * TILE
    const perim = 2 * (maxX - minX + maxZ - minZ)
    for (let i = 0; i < 1500; i++) {
      const along = hash2(i, 201) * perim
      const out = 3 + hash2(i, 202) * 52 // meters beyond the edge
      let x: number, z: number
      const wSide = maxX - minX
      const hSide = maxZ - minZ
      if (along < wSide) { x = minX + along; z = minZ - out }
      else if (along < wSide + hSide) { x = maxX + out; z = minZ + (along - wSide) }
      else if (along < wSide * 2 + hSide) { x = maxX - (along - wSide - hSide); z = maxZ + out }
      else { x = minX - out; z = maxZ - (along - wSide * 2 - hSide) }
      x += (hash2(i, 203) - 0.5) * 8
      z += (hash2(i, 204) - 0.5) * 8
      if (inTacosTown(x, z, 8)) continue
      const big = hash2(i, 205) < 0.7
      props.push({ kind: big ? 'tree_big' : 'tree_small', x, z, rot: hash2(i, 206) * Math.PI * 2, variant: Math.floor(hash2(i, 207) * 12) })
      if (big && out < 14) colliders.push(box(x, z, 0.8, 0.8))
    }
  }

  // scattered rocks in the fields
  for (let i = 0; i < 160; i++) {
    const x = hash2(i, 77) * W * TILE
    const z = hash2(i, 78) * H * TILE
    if (!clearOfRoad(x, z) || inTacosTown(x, z, 8)) continue
    props.push({ kind: 'rock', x, z, rot: hash2(i, 81) * Math.PI * 2, variant: i % 2 })
  }

  // Street furniture colliders, done in one blanket pass so every lamp/sign site
  // above gets one without eight duplicated pushes. Both are thin: the car circle
  // is r=1.0, so these half-extents only add the post's own girth on top of it.
  // Signs are `soft` — a sheet-metal plate on a thin post gives and scrubs speed
  // rather than stopping you dead like a concrete lamp base does.
  for (const p of props) {
    if (p.kind === 'lampProp') colliders.push(box(p.x, p.z, 0.15, 0.15))
    else if (p.kind === 'sign') colliders.push(box(p.x, p.z, 0.12, 0.12, true))
  }

  // spawn: middle of the village main street (the top EW run), facing east
  const villageStraights = tiles.filter((t) => t.zone === 'v' && t.piece === 'straight' && (t.dirs.e || t.dirs.w))
  const spawnTile = villageStraights[Math.floor(villageStraights.length / 2)] ?? tiles[0]
  const spawn = { x: spawnTile.x, z: spawnTile.z, yaw: Math.PI / 2 } // yaw PI/2 → +X (east)

  // mist density: heavy in fields ('p') and forest ('w'), light in village
  const mistAt = (x: number, z: number): number => {
    const gx = Math.round(x / TILE)
    const gz = Math.round(z / TILE)
    const t = tileMap.get(gx + ',' + gz)
    if (!t) return inTacosTown(x, z, TILE) ? 0.25 : 0.6
    return t.zone === 'p' ? 1.0 : t.zone === 'w' ? 0.8 : t.zone === 'e' ? 0.4 : t.zone === 'h' ? 0.5 : 0.25
  }

  return {
    tiles, lamps, props, colliders, spawn, surfaceAt, heightAt, mistAt, loopOrder: order,
    bounds: {
      minX: -5 * TILE, minZ: -5 * TILE,
      // stretch east so the terrain runs under the Tacos town set piece
      maxX: Math.max((W + 4) * TILE, TACOS_TOWN.x + TACOS_BOUNDS.maxX + 2 * TILE),
      maxZ: (H + 4) * TILE,
    },
    grid,
  }
}

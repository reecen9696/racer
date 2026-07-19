// Headless road-graph harness: the network AI drivers route over. Ground truth for
// connectivity and, above all, CLEARANCE.
//
// The clearance case is the one that matters. The first town build validated waypoints
// against surfaceAt only — every one of them was on asphalt, and the graph looked
// perfect — while 54 of them sat inside building colliders, because the town's asphalt
// bands are wider than the corridor the buildings actually leave. Cars drove into walls,
// wedged, reversed out at 23 km/h and hit whatever was behind them, and every collision
// in the town traced back to it. "On the road surface" is not the same question as
// "a car fits here", and only the second one keeps the AI out of the scenery.
import { parseMap } from '../src/shared/map'
import { buildRoadGraph, crossingPts, junctionAhead, junctionYield, RoadGraph } from '../src/shared/roadgraph'
import { CAR_WIDTH, PHYS_DT, TUNING } from '../src/shared/constants'
import { makeCarState, stepCar, CarState } from '../src/shared/physics'
import { makeTrafficBrains, stepTrafficBrain, trafficSpawn } from '../src/shared/traffic'
import { makeCopBrain, stepCopBrain, copSpawn, COP_COUNT } from '../src/shared/police'

const map = parseMap()
const graph: RoadGraph = buildRoadGraph(map)

let failures = 0
const check = (ok: boolean, label: string) => {
  console.log(`${ok ? '  ok  ' : ' FAIL '} ${label}`)
  if (!ok) failures++
}

// Along a straight the car is aligned with its lane, so its half-WIDTH is what has to
// fit. Through a junction it is turning, so allow for the body swinging out — but not
// the full diagonal, which only applies broadside to the wall.
const HALF_W = CAR_WIDTH / 2
const LANE_CLEAR = HALF_W + 0.6
const TURN_CLEAR = HALF_W + 0.35

const clearance = (x: number, z: number): number => {
  let best = Infinity
  for (const c of map.colliders) {
    const dx = Math.max(c.minX - x, 0, x - c.maxX)
    const dz = Math.max(c.minZ - z, 0, z - c.maxZ)
    const d = Math.hypot(dx, dz)
    if (d < best) best = d
  }
  return best
}

// --- 1) connectivity: a real network, not a ring ---
{
  const nodes = [...graph.nodes.values()]
  const edges = [...graph.edges.values()]
  console.log(`graph: ${nodes.length} nodes · ${edges.length} directed edges`)
  check(nodes.length >= 10, 'the network has junctions to choose at')
  check(edges.every((e) => graph.edges.has(e.twinId)), 'every edge has its opposite twin — nothing is one-way')
  check(edges.every((e) => e.pts.length >= 2), 'every edge carries lane waypoints')
  // the whole point of the change: somewhere to go other than round
  const branching = nodes.filter((n) => (graph.out.get(n.id) ?? []).length >= 3)
  check(branching.length >= 3, 'at least three junctions offer a genuine choice of route')
  // reachability, both directions, from the village
  const start = edges.find((e) => e.zone === 'v' || e.zone === 'e')!
  const seen = new Set<string>()
  const queue = [start.to]
  while (queue.length) {
    const id = queue.shift()!
    if (seen.has(id)) continue
    seen.add(id)
    for (const eid of graph.out.get(id) ?? []) queue.push(graph.edges.get(eid)!.to)
  }
  check(seen.size === nodes.length, `every junction is reachable from the village (${seen.size}/${nodes.length})`)
  check([...seen].some((id) => id.startsWith('town:')), 'the town is reachable by road')
}

// --- 2) continuity: no waypoint jumps a driver can't steer through ---
{
  let maxJump = 0
  let worstEdge = ''
  for (const e of graph.edges.values()) {
    for (let i = 1; i < e.pts.length; i++) {
      const d = Math.hypot(e.pts[i].x - e.pts[i - 1].x, e.pts[i].z - e.pts[i - 1].z)
      if (d > maxJump) { maxJump = d; worstEdge = e.id }
    }
  }
  console.log(`largest gap between consecutive waypoints: ${maxJump.toFixed(1)}m (${worstEdge})`)
  check(maxJump < 8, 'lane waypoints are dense enough to steer along')
}

// --- 3) surface: every lane waypoint is on drivable ground ---
{
  let off = 0
  for (const e of graph.edges.values()) {
    for (const p of e.pts) if (map.surfaceAt(p.x, p.z) === 'offroad') off++
  }
  console.log(`waypoints on offroad surface: ${off}`)
  check(off === 0, 'no lane waypoint routes a driver into a field')
}

// --- 4) clearance: a car actually FITS on every lane and through every turn ---
{
  const bad: string[] = []
  for (const e of graph.edges.values()) {
    let worst = Infinity
    for (const p of e.pts) worst = Math.min(worst, clearance(p.x, p.z))
    if (worst < LANE_CLEAR) bad.push(`${e.id} (${worst.toFixed(2)}m)`)
  }
  console.log(`edges whose lane clips a collider: ${bad.length}${bad.length ? ' — ' + bad.join(', ') : ''}`)
  check(bad.length === 0, `every lane leaves a car ${LANE_CLEAR.toFixed(2)}m of body clearance`)

  // every turn routing can actually generate, not just the ones a given run happened to
  const badTurns: string[] = []
  for (const n of graph.nodes.values()) {
    const off = n.id.startsWith('town:') ? 2.5 : 2.1
    for (const a of n.arms) {
      for (const b of n.arms) {
        if (a === b) continue
        let worst = Infinity
        for (const p of crossingPts(n, a, b, off)) worst = Math.min(worst, clearance(p.x, p.z))
        if (worst < TURN_CLEAR) badTurns.push(`${n.id} ${a}->${b} (${worst.toFixed(2)}m)`)
      }
    }
  }
  console.log(`junction turns that clip a collider: ${badTurns.length}${badTurns.length ? ' — ' + badTurns.join(', ') : ''}`)
  check(badTurns.length === 0, `every junction turn leaves a car ${TURN_CLEAR.toFixed(2)}m of body clearance`)
}

// --- 5) the drivers actually USE the network ---
// The graph being correct proves nothing on its own: the old AI would have been just as
// happy to drive one edge of it forever. This is the case that fails if route choice
// regresses to a fixed loop, if the town becomes unreachable in practice, or if the
// give-way logic stops engaging.
{
  const cars = makeTrafficBrains(map, 14, graph).map((b) => {
    const w = trafficSpawn(b)
    return { b, c: makeCarState(w.x, w.z, w.yaw) }
  })
  const cops = Array.from({ length: COP_COUNT }, (_, i) => {
    const b = makeCopBrain(map, `npc:cop${i}`, i, i, COP_COUNT, graph)
    const w = copSpawn(b)
    return { b, c: makeCarState(w.x, w.z, w.yaw) }
  })
  const road = new Map<string, CarState>()
  for (const t of cars) road.set(t.b.id, t.c)
  for (const u of cops) road.set(u.b.id, u.c)

  const edgesPer = new Map<string, Set<string>>()
  const zonesPer = new Map<string, Set<string>>()
  const gaveWay = new Set<string>()
  // Three minutes, not one. Route variety is a slow signal: at 90 s a driver that
  // happens to start mid-way along the 713 m loop edge has only had time for two of
  // them, and the case fails on the window rather than on the behaviour.
  for (let i = 0; i < 60 * 180; i++) {
    for (const t of cars) {
      const r = stepTrafficBrain(t.b, t.c, road, PHYS_DT)
      stepCar(t.c, r.input, TUNING, PHYS_DT, map.surfaceAt, map.colliders, map.heightAt)
    }
    for (const u of cops) {
      const r = stepCopBrain(u.b, u.c, new Map(), PHYS_DT, road)
      stepCar(u.c, r.input, TUNING, PHYS_DT, map.surfaceAt, map.colliders, map.heightAt)
    }
    for (const d of [...cars, ...cops]) {
      const route = d.b.route
      const seg = route.segs.find((s) => s.kind === 'edge' && s.start <= route.wpIndex && route.wpIndex < s.end)
      if (seg) {
        const e = graph.edges.get(seg.id)!
        if (!edgesPer.has(d.b.id)) { edgesPer.set(d.b.id, new Set()); zonesPer.set(d.b.id, new Set()) }
        edgesPer.get(d.b.id)!.add(seg.id)
        zonesPer.get(d.b.id)!.add(e.zone === 'town' ? 'town' : e.zone === 'h' ? 'highway' : 'village')
      }
      const jn = junctionAhead(route, graph, d.c.x, d.c.z)
      if (jn && junctionYield(jn, d.b.id, d.c, road, d.b.jamT) < 0.5 && Math.abs(d.c.speed) < 1.5) gaveWay.add(d.b.id)
    }
  }
  const all = new Set<string>()
  for (const s of edgesPer.values()) for (const e of s) all.add(e)
  const per = [...edgesPer.values()].map((s) => s.size)
  const townUsers = [...zonesPer.values()].filter((z) => z.has('town')).length
  const drivers = cars.length + cops.length
  console.log(`180s with ${cars.length} civilians + ${cops.length} police: ${all.size}/${graph.edges.size} edges driven · ${Math.min(...per)}-${Math.max(...per)} edges per driver · ${townUsers}/${drivers} reached town · ${gaveWay.size}/${drivers} gave way`)
  check(all.size > graph.edges.size * 0.8, 'the fleet covers most of the network, not one loop')
  check(Math.min(...per) >= 4, 'every driver takes several different roads — nobody is stuck on a circuit')
  check(townUsers > drivers / 2, 'the town is genuinely driven, not just reachable')
  check(cops.every((u) => (zonesPer.get(u.b.id)?.size ?? 0) >= 2), 'police patrol more than one kind of road')
  check(gaveWay.size > 0, 'give-way at junctions actually engages in traffic')
}

console.log(failures ? `\n${failures} check(s) failed` : '\nall checks passed')
process.exit(failures ? 1 : 0)

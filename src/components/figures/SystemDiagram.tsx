/* "A system" — five parts around a center, every neighbor linked, and a
   before/after showing one changed relationship. Inline SVG, palette tokens. */

const NODES = ['People', 'Processes', 'Decisions', 'Technology', 'Information'];
const SANS = 'var(--font-geist-sans), system-ui, sans-serif';
const SERIF = 'var(--font-newsreader), Georgia, serif';

type Pt = { x: number; y: number };
function polar(cx: number, cy: number, r: number, i: number, n: number): Pt {
  const a = -Math.PI / 2 + (i * 2 * Math.PI) / n;
  return { x: cx + r * Math.cos(a), y: cy + r * Math.sin(a) };
}
/* a line between two circles, trimmed to their edges (+ a little air) */
function seg(a: Pt, b: Pt, ra: number, rb: number) {
  const dx = b.x - a.x;
  const dy = b.y - a.y;
  const d = Math.hypot(dx, dy);
  const ux = dx / d;
  const uy = dy / d;
  return { x1: a.x + ux * ra, y1: a.y + uy * ra, x2: b.x - ux * rb, y2: b.y - uy * rb };
}

export function SystemDiagram() {
  const W = 560;
  const cx = W / 2;
  const cy = 232;
  const R = 130;
  const r = 38;
  const rc = 46;
  const pts = NODES.map((_, i) => polar(cx, cy, R, i, NODES.length));

  return (
    <svg viewBox={`0 0 ${W} 660`} className="h-auto w-full" role="img" aria-labelledby="sysdiag-title sysdiag-desc">
      <title id="sysdiag-title">A system</title>
      <desc id="sysdiag-desc">
        Five parts — people, processes, decisions, technology, information — around a center labelled system, each
        linked to its neighbors and to the center. Below, a before-and-after: changing one relationship changes the
        whole.
      </desc>
      <defs>
        <marker id="sd-arr" viewBox="0 0 8 8" refX="7" refY="4" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
          <path d="M0 0.5 L7.5 4 L0 7.5" fill="none" stroke="var(--charcoal)" strokeWidth="1" />
        </marker>
      </defs>

      {/* top: the system */}
      <text x={cx} y={22} textAnchor="middle" fontSize="10" letterSpacing="2.2" fontFamily={SANS} fill="var(--ink)">
        A SYSTEM
      </text>
      <text x={cx} y={40} textAnchor="middle" fontSize="11" fontFamily={SERIF} fontStyle="italic" fill="var(--muted)">
        <tspan x={cx} dy="0">The behavior of a system comes from the relationships</tspan>
        <tspan x={cx} dy="14">between its parts, not from the parts alone.</tspan>
      </text>

      <circle cx={cx} cy={cy} r={R + r + 10} fill="none" stroke="var(--rule)" strokeDasharray="2 4" />

      <g stroke="var(--charcoal)" strokeWidth="0.9" markerStart="url(#sd-arr)" markerEnd="url(#sd-arr)">
        {pts.map((p, i) => (
          <line key={`ring${i}`} {...seg(p, pts[(i + 1) % pts.length], r + 4, r + 4)} />
        ))}
        {pts.map((p, i) => (
          <line key={`spoke${i}`} {...seg(p, { x: cx, y: cy }, r + 4, rc + 4)} />
        ))}
      </g>

      {pts.map((p, i) => (
        <g key={NODES[i]}>
          <circle cx={p.x} cy={p.y} r={r} fill="var(--ivory)" stroke="var(--charcoal)" strokeWidth="0.9" />
          <text x={p.x} y={p.y + 3.5} textAnchor="middle" fontSize="9.5" letterSpacing="1.6" fontFamily={SANS} fill="var(--ink)">
            {NODES[i].toUpperCase()}
          </text>
        </g>
      ))}
      <circle cx={cx} cy={cy} r={rc} fill="var(--ink)" />
      <text x={cx} y={cy + 3.5} textAnchor="middle" fontSize="10" letterSpacing="2" fontFamily={SANS} fill="var(--ivory)">
        SYSTEM
      </text>

      {/* divider */}
      <line x1={40} y1={448} x2={W - 40} y2={448} stroke="var(--rule)" />

      {/* bottom: effect of change */}
      <text x={cx} y={474} textAnchor="middle" fontSize="10" letterSpacing="2.2" fontFamily={SANS} fill="var(--ink)">
        THE EFFECT OF CHANGE
      </text>
      <text x={cx} y={491} textAnchor="middle" fontSize="11" fontFamily={SERIF} fontStyle="italic" fill="var(--muted)">
        Changing a single connection can change the behavior of the entire system.
      </text>

      {[0, 1].map((side) => {
        const ox = side === 0 ? 150 : 410;
        const oy = 556;
        // five parts on a ring + a hub; the hub links to ONE part.
        const ring: Pt[] = [0, 1, 2, 3, 4].map((i) => polar(ox, oy, 46, i, 5));
        const hub: Pt = { x: ox, y: oy };
        const edges: [number, number][] = [[0, 1], [1, 2], [2, 3], [3, 4], [4, 0]];
        const changed = side === 1;
        const from = 0; // hub linked here before
        const to = 2; // ...and here after
        // ripple: distance from the rewired node around the ring
        const dist = (i: number) => Math.min((i - to + 5) % 5, (to - i + 5) % 5);
        const tint = (i: number) => (changed ? [0.55, 0.3, 0.12][dist(i)] ?? 0 : 0);
        return (
          <g key={side}>
            {edges.map(([u, v], i) => (
              <line key={i} x1={ring[u].x} y1={ring[u].y} x2={ring[v].x} y2={ring[v].y} stroke="var(--charcoal)" strokeWidth="0.9" strokeOpacity={changed ? 0.45 : 1} />
            ))}
            {/* hub link: before → solid to `from`; after → ghost of old, solid sage to `to` */}
            {changed ? (
              <>
                <line x1={hub.x} y1={hub.y} x2={ring[from].x} y2={ring[from].y} stroke="var(--charcoal)" strokeWidth="0.9" strokeDasharray="2 3" strokeOpacity={0.4} />
                <line x1={hub.x} y1={hub.y} x2={ring[to].x} y2={ring[to].y} stroke="var(--sage)" strokeWidth="2" />
              </>
            ) : (
              <line x1={hub.x} y1={hub.y} x2={ring[from].x} y2={ring[from].y} stroke="var(--charcoal)" strokeWidth="0.9" />
            )}
            {ring.map((p, i) => (
              <g key={i}>
                <circle cx={p.x} cy={p.y} r={9} fill="var(--ivory)" stroke="var(--charcoal)" strokeWidth="0.9" strokeOpacity={changed && tint(i) === 0 ? 0.45 : 1} />
                {tint(i) > 0 && <circle cx={p.x} cy={p.y} r={9} fill="var(--sage)" fillOpacity={tint(i)} stroke="var(--sage)" strokeWidth={i === to ? 1.6 : 0.9} />}
              </g>
            ))}
            <circle cx={hub.x} cy={hub.y} r={5} fill={changed ? 'var(--sage)' : 'var(--ink)'} />
            <text x={ox} y={oy + 70} textAnchor="middle" fontSize="10" letterSpacing="2" fontFamily={SANS} fill="var(--ink)">
              {side === 0 ? 'BEFORE' : 'AFTER'}
            </text>
            <text x={ox} y={oy + 86} textAnchor="middle" fontSize="10.5" fontFamily={SERIF} fontStyle="italic" fill="var(--muted)">
              {side === 0 ? 'Every part in place; the hub reports to one of them.' : 'Rewire that one link, and the effect spreads outward.'}
            </text>
          </g>
        );
      })}
      <line x1={255} y1={556} x2={305} y2={556} stroke="var(--charcoal)" strokeWidth="0.9" markerEnd="url(#sd-arr)" />
    </svg>
  );
}

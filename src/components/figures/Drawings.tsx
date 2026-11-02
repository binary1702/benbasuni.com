/* Small line drawings for the figures — the illustrated side of the map style.
   Each is drawn around (0, 0) at about 24 units and placed with x / y / s (scale).
   Line art only, in the palette: sage-deep = life / God's gift, rust = loss / sin,
   charcoal = neutral. */

type P = { x: number; y: number; s?: number; c?: string };
const g = (x: number, y: number, s = 1) => `translate(${x} ${y}) scale(${s})`;
const line = (c: string, w = 1.2) => ({ fill: 'none', stroke: c, strokeWidth: w, strokeLinecap: 'round' as const, strokeLinejoin: 'round' as const });

/** A tree: trunk + round canopy. `fruit` adds small rust fruit. */
export function Tree({ x, y, s = 1, c = 'var(--sage-deep)', fruit = false }: P & { fruit?: boolean }) {
  return (
    <g transform={g(x, y, s)}>
      <path d="M0 4 V16 M0 10 L-4 6 M0 12 L4 8" {...line(c, 1.4)} />
      <circle cx={0} cy={-4} r={11} fill={c} />
      {fruit && (
        <>
          <circle cx={-4} cy={-2} r={2} fill="var(--rust)" />
          <circle cx={4} cy={-7} r={2} fill="var(--rust)" />
          <circle cx={3} cy={1} r={2} fill="var(--rust)" />
        </>
      )}
    </g>
  );
}

/** The serpent: an S-curve with a head and a forked tongue. */
export function Serpent({ x, y, s = 1, c = 'var(--rust)' }: P) {
  return (
    <g transform={g(x, y, s)}>
      <path d="M-16 8 C -10 -4, -4 14, 2 4 S 10 -8, 13 -4" {...line(c, 2)} />
      <circle cx={14} cy={-4.5} r={2.6} fill={c} />
      <path d="M16.5 -4.5 L20 -6 M16.5 -4.5 L20 -3" {...line(c, 0.8)} />
    </g>
  );
}

/** A person: head and simple body. */
export function Person({ x, y, s = 1, c = 'var(--ink)' }: P) {
  return (
    <g transform={g(x, y, s)}>
      <circle cx={0} cy={-10} r={4} fill={c} />
      <path d="M0 -5 V5 M-6 -1 L6 -1 M0 5 L-4.5 13 M0 5 L4.5 13" {...line(c, 2)} />
    </g>
  );
}

/** A fig leaf. */
export function Leaf({ x, y, s = 1, c = 'var(--sage-deep)' }: P) {
  return (
    <g transform={g(x, y, s)}>
      <path d="M0 9 C -10 4, -10 -8, 0 -11 C 10 -8, 10 4, 0 9 Z" fill="var(--sage-soft)" stroke={c} strokeWidth={1.1} />
      <path d="M0 9 V-8 M0 -1 L-4 -5 M0 3 L4 -1" {...line(c, 0.8)} />
    </g>
  );
}

/** An open eye. */
export function Eye({ x, y, s = 1, c = 'var(--rust)' }: P) {
  return (
    <g transform={g(x, y, s)}>
      <path d="M-13 0 Q0 -10 13 0 Q0 10 -13 0 Z" {...line(c)} />
      <circle cx={0} cy={0} r={3.6} fill={c} />
    </g>
  );
}

/** Rays around a point (for a hero that gives light / wisdom). */
export function Rays({ x, y, r = 18, c = 'var(--sage-deep)' }: { x: number; y: number; r?: number; c?: string }) {
  const n = 8;
  return (
    <g>
      {Array.from({ length: n }, (_, i) => {
        const a = (i / n) * Math.PI * 2;
        return <line key={i} x1={x + Math.cos(a) * r} y1={y + Math.sin(a) * r} x2={x + Math.cos(a) * (r + 6)} y2={y + Math.sin(a) * (r + 6)} {...line(c, 1)} />;
      })}
    </g>
  );
}

/** Thorns and thistles: a row of spikes. */
export function Thorns({ x, y, s = 1, c = 'var(--rust)' }: P) {
  return (
    <g transform={g(x, y, s)}>
      <path d="M-16 4 L-12 -6 L-8 4 L-4 -8 L0 4 L4 -6 L8 4 L12 -8 L16 4" {...line(c)} />
      <path d="M-18 4 H18" {...line('var(--charcoal)', 0.9)} />
    </g>
  );
}

/** An altar of stones with smoke. `rises` = smoke goes straight up; otherwise it drifts and sinks. */
export function Altar({ x, y, s = 1, rises = true, c = 'var(--charcoal)' }: P & { rises?: boolean }) {
  return (
    <g transform={g(x, y, s)}>
      <rect x={-12} y={2} width={11} height={6} rx={1.5} fill="none" stroke={c} strokeWidth={1} />
      <rect x={1} y={2} width={11} height={6} rx={1.5} fill="none" stroke={c} strokeWidth={1} />
      <rect x={-6} y={-4} width={12} height={6} rx={1.5} fill="none" stroke={c} strokeWidth={1} />
      {rises ? (
        <path d="M0 -6 C -4 -12, 4 -16, 0 -22 C -4 -28, 4 -32, 0 -38" {...line('var(--sage-deep)', 1.2)} />
      ) : (
        <path d="M0 -6 C -4 -12, 6 -14, 10 -10 C 14 -6, 18 -8, 20 -4" {...line('var(--rust)', 1.2)} strokeDasharray="3 2" />
      )}
    </g>
  );
}

/** A sheaf of grain (fruit of the soil). */
export function Sheaf({ x, y, s = 1, c = 'var(--charcoal)' }: P) {
  return (
    <g transform={g(x, y, s)}>
      <path d="M0 10 L0 -8 M0 10 L-6 -6 M0 10 L6 -6 M0 10 L-10 -2 M0 10 L10 -2" {...line(c, 1)} />
      <path d="M-4 4 H4" {...line(c, 1.6)} />
      {[[0, -10], [-6, -8], [6, -8], [-10, -4], [10, -4]].map(([cx, cy]) => (
        <ellipse key={`${cx}${cy}`} cx={cx} cy={cy} rx={1.8} ry={3} fill={c} />
      ))}
    </g>
  );
}

/** A lamb (firstborn of the flock). */
export function Lamb({ x, y, s = 1, c = 'var(--ink)' }: P) {
  return (
    <g transform={g(x, y, s)}>
      <path d="M-10 0 C -12 -6, -4 -9, 0 -6 C 4 -9, 11 -6, 9 0 C 11 5, 2 7, 0 4 C -4 7, -12 5, -10 0 Z" fill="var(--ivory)" stroke={c} strokeWidth={1.1} />
      <ellipse cx={12} cy={-5} rx={3.6} ry={3} fill={c} />
      <path d="M-6 4 V10 M-1 5 V10 M4 5 V10 M7 4 V10" {...line(c, 1.1)} />
    </g>
  );
}

/** A small walled city. */
export function City({ x, y, s = 1, c = 'var(--charcoal)' }: P) {
  return (
    <g transform={g(x, y, s)}>
      <path d="M-22 12 V-2 H-14 V-10 H-6 V-2 H2 V-16 H10 V-2 H16 V-6 H22 V12 Z" fill="var(--ivory)" stroke={c} strokeWidth={1.1} strokeLinejoin="round" />
      <path d="M-2 12 V6 A3 3 0 0 1 4 6 V12" {...line(c, 1)} />
      {[[-10, -5], [6, -11], [6, -5]].map(([wx, wy]) => <rect key={`${wx}${wy}`} x={wx} y={wy} width={2.4} height={3} fill={c} />)}
    </g>
  );
}

/** A tent. */
export function Tent({ x, y, s = 1, c = 'var(--charcoal)' }: P) {
  return (
    <g transform={g(x, y, s)}>
      <path d="M-12 8 L0 -10 L12 8 Z" fill="var(--ivory)" stroke={c} strokeWidth={1.1} strokeLinejoin="round" />
      <path d="M0 -10 V8 M-3 8 L0 1 L3 8" {...line(c, 1)} />
    </g>
  );
}

/** A lyre / harp. */
export function Harp({ x, y, s = 1, c = 'var(--charcoal)' }: P) {
  return (
    <g transform={g(x, y, s)}>
      <path d="M-7 9 C -12 0, -10 -10, -4 -11 M7 9 C 12 0, 10 -10, 4 -11 M-8 9 H8 M-6 -6 H6" {...line(c, 1.2)} />
      <path d="M-3 -6 V9 M0 -6 V9 M3 -6 V9" {...line(c, 0.7)} />
    </g>
  );
}

/** A hammer over an anvil (bronze and iron). */
export function Anvil({ x, y, s = 1, c = 'var(--charcoal)' }: P) {
  return (
    <g transform={g(x, y, s)}>
      <path d="M-11 2 H8 C 8 6, 4 6, 3 6 V10 H-6 V6 C -8 6, -11 5, -11 2 Z" fill="var(--ivory)" stroke={c} strokeWidth={1.1} strokeLinejoin="round" />
      <path d="M-2 -2 L8 -12" {...line(c, 1.4)} />
      <rect x={4} y={-17} width={9} height={5} rx={1} transform="rotate(45 8.5 -14.5)" fill={c} />
    </g>
  );
}

/** A doorway (arched), optionally with something crouching at it. */
export function Door({ x, y, s = 1, c = 'var(--charcoal)', crouch = false }: P & { crouch?: boolean }) {
  return (
    <g transform={g(x, y, s)}>
      <path d="M-10 16 V-6 A10 10 0 0 1 10 -6 V16" fill="var(--ivory)" stroke={c} strokeWidth={1.2} />
      <circle cx={5} cy={4} r={1.3} fill={c} />
      {crouch && <path d="M12 16 C 12 10, 18 8, 22 10 C 25 8, 28 10, 27 13 L 28 16" fill="var(--rust)" stroke="var(--rust)" strokeWidth={1} />}
    </g>
  );
}

/** A garment of skin. */
export function Garment({ x, y, s = 1, c = 'var(--sage-deep)' }: P) {
  return (
    <g transform={g(x, y, s)}>
      <path d="M-5 -10 L-12 -6 L-9 0 L-6 -2 V11 H6 V-2 L9 0 L12 -6 L5 -10 C 3 -7, -3 -7, -5 -10 Z" fill="var(--sage-soft)" stroke={c} strokeWidth={1.1} strokeLinejoin="round" />
    </g>
  );
}

/** The mark of Cain: a protective sign. */
export function Mark({ x, y, s = 1, c = 'var(--sage-deep)' }: P) {
  return (
    <g transform={g(x, y, s)}>
      <circle cx={0} cy={0} r={8} fill="none" stroke={c} strokeWidth={1.1} />
      <path d="M0 -5 V5 M-5 0 H5" {...line(c, 1.4)} />
    </g>
  );
}

/** A drop of blood. */
export function Drop({ x, y, s = 1, c = 'var(--rust)' }: P) {
  return (
    <g transform={g(x, y, s)}>
      <path d="M0 -9 C 4 -3, 7 1, 7 4 A7 7 0 0 1 -7 4 C -7 1, -4 -3, 0 -9 Z" fill={c} />
    </g>
  );
}

/** A sword (the flaming sword / the killer's blade). */
export function Sword({ x, y, s = 1, c = 'var(--rust)', angle = 0 }: P & { angle?: number }) {
  return (
    <g transform={`${g(x, y, s)} rotate(${angle})`}>
      <path d="M0 -14 V6" {...line(c, 2)} />
      <path d="M-5 6 H5 M0 6 V12" {...line(c, 1.4)} />
    </g>
  );
}

/** Water: three wavy lines. */
export function Waves({ x, y, s = 1, c = 'var(--charcoal)', w = 24 }: P & { w?: number }) {
  const one = (dy: number) => {
    let d = `M${-w / 2} ${dy}`;
    for (let i = 0; i < w / 8; i++) d += ' q2 -3 4 0 t4 0';
    return d;
  };
  return (
    <g transform={g(x, y, s)}>
      <path d={one(-5)} {...line(c, 1)} />
      <path d={one(1)} {...line(c, 1)} />
      <path d={one(7)} {...line(c, 1)} />
    </g>
  );
}

/** Noah's ark. */
export function Ark({ x, y, s = 1, c = 'var(--charcoal)' }: P) {
  return (
    <g transform={g(x, y, s)}>
      {/* non-scaling strokes so the ark can be drawn large without heavy outlines */}
      <path d="M-14 0 H14 L10 7 H-10 Z" fill="var(--ivory)" stroke={c} strokeWidth={1.1} strokeLinejoin="round" vectorEffect="non-scaling-stroke" />
      <path d="M-7 0 V-6 H7 V0 M-8 -6 L0 -10 L8 -6" fill="none" stroke={c} strokeWidth={1} strokeLinejoin="round" vectorEffect="non-scaling-stroke" />
    </g>
  );
}

/** A grave mound. */
export function Grave({ x, y, s = 1, c = 'var(--rust)' }: P) {
  return (
    <g transform={g(x, y, s)}>
      <path d="M-10 6 C -8 -2, 8 -2, 10 6 Z" fill="none" stroke={c} strokeWidth={1.1} />
      <path d="M0 -10 V2 M-4 -6 H4" {...line(c, 1.1)} />
    </g>
  );
}

/* ── Genesis 6–11 additions ───────────────────────────────────────────── */

/** A rainbow: three bands; the bow's ends rest on the earth, its curve faces up. */
export function Rainbow({ x, y, s = 1 }: P) {
  return (
    <g transform={g(x, y, s)}>
      <path d="M-30 0 A30 30 0 0 1 30 0" {...line('var(--rust)', 3)} />
      <path d="M-24 0 A24 24 0 0 1 24 0" {...line('var(--ink)', 3)} opacity={0.75} />
      <path d="M-18 0 A18 18 0 0 1 18 0" {...line('var(--sage-deep)', 3)} />
    </g>
  );
}

/** A dove in flight, optionally carrying an olive leaf. */
export function Dove({ x, y, s = 1, c = 'var(--ink)', leaf = false }: P & { leaf?: boolean }) {
  return (
    <g transform={g(x, y, s)}>
      <path d="M-12 2 C -6 -2, 0 -2, 6 0 L12 -2 L9 2 C 4 6, -6 6, -12 2 Z" fill={c} />
      <path d="M-4 0 C -6 -10, 0 -14, 4 -12 C 2 -8, 1 -4, 0 0 Z" fill={c} opacity={0.85} />
      {leaf && <path d="M12 0 C 16 -4, 20 -2, 20 1 C 17 3, 14 3, 12 0 Z" fill="var(--sage-deep)" />}
    </g>
  );
}

/** A raven: dark, angular. */
export function Raven({ x, y, s = 1, c = 'var(--charcoal)' }: P) {
  return (
    <g transform={g(x, y, s)}>
      <path d="M-13 3 L-4 -1 L-8 -11 L1 -3 L7 -3 L13 -6 L10 0 L4 4 Z" fill={c} />
    </g>
  );
}

/** A mountain (Ararat): two peaks. */
export function Mountain({ x, y, s = 1, c = 'var(--charcoal)' }: P) {
  return (
    <g transform={g(x, y, s)}>
      <path d="M-30 14 L-10 -14 L0 -2 L10 -18 L32 14 Z" fill="var(--sage-soft)" stroke={c} strokeWidth={1.1} strokeLinejoin="round" />
    </g>
  );
}

/** A vine with grape clusters. */
export function Vine({ x, y, s = 1, c = 'var(--sage-deep)' }: P) {
  return (
    <g transform={g(x, y, s)}>
      <path d="M0 16 V-4 C 0 -10, 8 -12, 10 -8 M0 -2 C -2 -8, -10 -10, -12 -6" {...line(c, 1.4)} />
      {[[-8, 2], [-11, 6], [-5, 6], [-8, 10], [8, -2], [11, 2], [5, 2], [8, 6]].map(([cx, cy]) => (
        <circle key={`${cx}${cy}`} cx={cx} cy={cy} r={2.4} fill="var(--rust)" />
      ))}
    </g>
  );
}

/** A stepped tower (ziggurat) of brick. */
export function Tower({ x, y, s = 1, c = 'var(--charcoal)' }: P) {
  return (
    <g transform={g(x, y, s)}>
      <path d="M-24 16 H24 V8 H18 V0 H12 V-8 H6 V-16 H-6 V-8 H-12 V0 H-18 V8 H-24 Z" fill="var(--ivory)" stroke={c} strokeWidth={1.1} strokeLinejoin="round" />
      <path d="M-24 12 H24 M-18 4 H18 M-12 -4 H12 M-6 -12 H6 M-10 16 V12 M6 16 V12 M-4 8 V4 M10 8 V4 M2 0 V-4" {...line(c, 0.6)} />
    </g>
  );
}

/** A crown (a king, a kingdom). */
export function Crown({ x, y, s = 1, c = 'var(--rust)' }: P) {
  return (
    <g transform={g(x, y, s)}>
      <path d="M-11 6 L-12 -6 L-5 0 L0 -9 L5 0 L12 -6 L11 6 Z" fill={c} stroke={c} strokeWidth={1} strokeLinejoin="round" />
    </g>
  );
}

/** A hunter's bow with an arrow. */
export function HuntBow({ x, y, s = 1, c = 'var(--charcoal)' }: P) {
  return (
    <g transform={g(x, y, s)}>
      <path d="M-4 -14 C 8 -8, 8 8, -4 14" {...line(c, 1.5)} />
      <path d="M-4 -14 L-4 14" {...line(c, 0.7)} />
      <path d="M-10 0 H14 M10 -3 L14 0 L10 3" {...line(c, 1.1)} />
    </g>
  );
}

/** A cloud. */
export function Cloud({ x, y, s = 1, c = 'var(--charcoal)' }: P) {
  return (
    <g transform={g(x, y, s)}>
      <path d="M-16 6 C -22 6, -22 -4, -14 -4 C -14 -12, -2 -14, 0 -6 C 4 -12, 16 -10, 14 -2 C 22 -2, 22 6, 14 6 Z" fill="var(--ivory)" stroke={c} strokeWidth={1.1} />
    </g>
  );
}

/** A heart (God's heart, man's heart). */
export function Heart({ x, y, s = 1, c = 'var(--rust)', fill = true }: P & { fill?: boolean }) {
  return (
    <g transform={g(x, y, s)}>
      <path d="M0 10 C -14 0, -12 -12, -5 -11 C -2 -11, 0 -8, 0 -6 C 0 -8, 2 -11, 5 -11 C 12 -12, 14 0, 0 10 Z" fill={fill ? c : 'none'} stroke={c} strokeWidth={1.2} strokeLinejoin="round" />
    </g>
  );
}

/** A small stack of bricks. */
export function Bricks({ x, y, s = 1, c = 'var(--charcoal)' }: P) {
  return (
    <g transform={g(x, y, s)}>
      {[[-10, 2], [0, 2], [-5, -4]].map(([bx, by]) => (
        <rect key={`${bx}${by}`} x={bx} y={by} width={10} height={6} fill="var(--ivory)" stroke={c} strokeWidth={1} />
      ))}
    </g>
  );
}

/* ── Creation drawings (The First 7 Days) ─────────────────────────────── */

/** The sun: a disc with eight short rays. */
export function Sun({ x, y, s = 1, c = 'var(--sage-deep)' }: P) {
  return (
    <g transform={g(x, y, s)}>
      <circle cx={0} cy={0} r={5} {...line(c, 1.3)} />
      {Array.from({ length: 8 }, (_, i) => {
        const a = (i / 8) * Math.PI * 2;
        return <line key={i} x1={Math.cos(a) * 8.5} y1={Math.sin(a) * 8.5} x2={Math.cos(a) * 12} y2={Math.sin(a) * 12} {...line(c, 1.2)} />;
      })}
    </g>
  );
}

/** A crescent moon. */
export function Moon({ x, y, s = 1, c = 'var(--sage-deep)' }: P) {
  return (
    <g transform={g(x, y, s)}>
      <path d="M2 -7 A7 7 0 1 0 2 7 A5.2 5.2 0 1 1 2 -7 Z" {...line(c, 1.2)} />
    </g>
  );
}

/** A small cluster of stars. */
export function Stars({ x, y, s = 1, c = 'var(--sage-deep)' }: P) {
  const star = 'M0 -4 L1 -1 L4 0 L1 1 L0 4 L-1 1 L-4 0 L-1 -1 Z';
  return (
    <g transform={g(x, y, s)}>
      {[[-7, -4, 1], [6, -7, 0.8], [3, 6, 1.1]].map(([sx, sy, k]) => (
        <path key={`${sx}${sy}`} d={star} transform={`translate(${sx} ${sy}) scale(${k})`} fill={c} />
      ))}
    </g>
  );
}

/** A bird in flight. */
export function Bird({ x, y, s = 1, c = 'var(--sage-deep)' }: P) {
  return (
    <g transform={g(x, y, s)}>
      <path d="M-9 1 Q-4.5 -6 0 1 Q4.5 -6 9 1" {...line(c, 1.3)} />
    </g>
  );
}

/** A fish. */
export function Fish({ x, y, s = 1, c = 'var(--sage-deep)' }: P) {
  return (
    <g transform={g(x, y, s)}>
      <ellipse cx={-2} cy={0} rx={7.5} ry={3.6} {...line(c, 1.2)} />
      <path d="M5.5 0 L11 -4 V4 Z" {...line(c, 1.2)} />
    </g>
  );
}

/** The vault of the sky over the waters. */
export function Sky({ x, y, s = 1, c = 'var(--sage-deep)' }: P) {
  return (
    <g transform={g(x, y, s)}>
      <path d="M-16 0 Q0 -16 16 0" {...line(c, 1.3)} />
      <path d="M-16 8 q4 -4 8 0 t8 0 t8 0 t8 0" {...line(c, 1.2)} />
    </g>
  );
}

/** Dry land: two hills with a tree. */
export function Land({ x, y, s = 1, c = 'var(--sage-deep)' }: P) {
  return (
    <g transform={g(x, y, s)}>
      <path d="M-18 8 Q-6 -4 6 8 M-2 8 Q8 0 18 8" {...line(c, 1.3)} />
      <path d="M8 3 V-5" {...line(c, 1.2)} />
      <circle cx={8} cy={-9} r={4.5} fill={c} />
    </g>
  );
}

/** A spade (to cultivate the ground). */
export function Spade({ x, y, s = 1, c = 'var(--charcoal)' }: P) {
  return (
    <g transform={g(x, y, s)}>
      <path d="M0 -14 V4 M-3 -14 H3" {...line(c, 1.4)} />
      <path d="M-4.5 4 H4.5 L3.5 11 Q0 14 -3.5 11 Z" fill="var(--ivory)" stroke={c} strokeWidth={1.1} strokeLinejoin="round" />
    </g>
  );
}

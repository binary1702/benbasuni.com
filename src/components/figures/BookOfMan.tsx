import { W, FS, SERIF, Frame, Cap, ARROW, ARROW_RUST, ARROW_SAGE, Region, Hero, Stop, N } from './Genesis';
import { Tree, Serpent, Person, Leaf, Eye, Rays, Thorns, Altar, Sheaf, Lamb, City, Tent, Harp, Anvil, Door, Garment, Mark, Drop, Sword, Waves, Ark, Grave } from './Drawings';

/* Figures for "Adam, Cain, Lamech" (Genesis 3–4) and "The City of Enoch" (Genesis 4–5) — one per chapter.
   Same visual language as Genesis.tsx: sans caps for labels, serif italics for notes,
   sage = what God gives / Genesis 2, rust = what is lost / Genesis 3.
   Map style: one soft region, one hero, line drawings (Drawings.tsx), arrows that tell the story. */

type Anchor = 'start' | 'middle' | 'end';

function T({ x, y, children, anchor = 'middle', size = 11, fill = 'var(--muted)' }: { x: number; y: number; children: string; anchor?: Anchor; size?: number; fill?: string }) {
  return (
    <text x={x} y={y} textAnchor={anchor} fontSize={size * FS} fontFamily={SERIF} fontStyle="italic" fill={fill}>
      {children}
    </text>
  );
}
function Rule({ y }: { y: number }) {
  return <line x1={40} y1={y} x2={W - 40} y2={y} stroke="var(--rule)" />;
}

/* 1 — The First Deception: God's word travels, and bends three times.
   Map: the word starts straight and green inside its own region, then the path
   wavers (question), kinks (distort) and breaks into a zigzag (deny). */
export function AnatomyOfDeception() {
  const y = 112;
  const stops = [
    { x: 262, move: 'question', quote: '“Did God really say…?”', who: 'serpent · 3:1' },
    { x: 372, move: 'distort', quote: '“…or touch it”', who: 'woman · 3:3' },
    { x: 482, move: 'deny', quote: '“You will not surely die”', who: 'serpent · 3:4' },
  ];
  return (
    <Frame h={230} title="The anatomy of deception" desc="God's word starts straight: eat freely, but not from one tree. The serpent questions it, the woman's retelling distorts it, and the serpent denies it outright.">
      <Cap x={W / 2} y={22}>Question · distort · deny</Cap>
      <Region x={40} y={52} w={150} h={120} />
      <Cap x={115} y={76}>God’s word</Cap>
      <Tree x={115} y={y - 2} s={1.5} fruit />
      <N x={115} y={y + 34}>eat freely · but one tree</N>
      <N x={115} y={y + 48} size={9.5}>2:16–17</N>
      {/* the path: straight → wavering → kinked → broken */}
      <line x1={131} y1={y} x2={256} y2={y} stroke="var(--sage-deep)" strokeWidth="1.4" />
      <path d={`M268 ${y} q14 -9 26 0 t26 0 t26 0 t20 0`} fill="none" stroke="var(--rust)" strokeWidth="1.2" />
      <path d={`M378 ${y} l12 -8 l12 14 l12 -18 l12 20 l12 -16 l12 14 l12 -6 l14 0`} fill="none" stroke="var(--rust)" strokeWidth="1.2" />
      {stops.map((s, i) => (
        <g key={s.move}>
          <Stop cx={s.x} cy={y} stroke={i === 0 ? 'var(--sage-deep)' : 'var(--rust)'} />
          <Cap x={s.x} y={y - 18} size={8.5} fill="var(--rust)">{s.move}</Cap>
          <N x={s.x} y={y + 26} size={10.5} fill="var(--ink)">{s.quote}</N>
          <N x={s.x} y={y + 40} size={9.5}>{s.who}</N>
        </g>
      ))}
      <Serpent x={316} y={70} s={1.5} />
      <Rule y={192} />
      <N x={W / 2} y={214}>“a liar and the father of lies” · John 8:44</N>
    </Frame>
  );
}

/* 2 — To Be Like God: one desire, a fork in the road.
   Map: the desire sits in its own region; the upper road (received) arrives at
   wisdom, the lower road (taken) arrives at an empty ring: only "naked". */
export function TwoPathsToWisdom() {
  return (
    <Frame h={278} title="Two paths to wisdom" desc="The desire for wisdom forks: received through the fear of the LORD it arrives at wisdom; taken by disobedience it arrives only at the knowledge of nakedness.">
      <Cap x={W / 2} y={22}>The same desire, two roads</Cap>
      <Region x={40} y={82} w={140} h={100} />
      <Cap x={110} y={106}>Wisdom</Cap>
      <Tree x={110} y={134} s={1.2} fruit />
      <N x={110} y={204}>good to want · Prov 4:7</N>
      {/* received */}
      <path d="M118 126 C 190 70, 300 66, 446 66" {...ARROW_SAGE} />
      <Cap x={290} y={56} size={8} fill="var(--sage-deep)">received</Cap>
      <N x={290} y={92} fill="var(--ink)">fear of the LORD · ask</N>
      <Hero cx={470} cy={66} r={12} />
      <Rays x={470} y={66} r={16} />
      <Cap x={470} y={36}>wisdom given</Cap>
      <N x={470} y={96}>Prov 9:10 · James 1:5</N>
      {/* taken */}
      <path d="M118 138 C 190 196, 300 200, 452 198" {...ARROW_RUST} />
      <Cap x={290} y={180} size={8} fill="var(--rust)">taken</Cap>
      <N x={290} y={216} fill="var(--ink)">saw · took · ate · 3:6</N>
      <Eye x={462} y={198} s={1.4} />
      <Leaf x={504} y={200} s={1.1} />
      <Cap x={470} y={176} fill="var(--rust)">eyes opened</Cap>
      <N x={470} y={226}>only: “naked” · 3:7</N>
      <Rule y={244} />
      <N x={W / 2} y={266}>They were already like God, made in His image · 1:27</N>
    </Frame>
  );
}

/* 3 — The First Shame: same garden, same people, now hiding.
   Map: the garden is the region; the LORD walks in it (hero). On the left the
   pair stands open (2:25); on the right the same pair is tucked among trees (3:8). */
export function BeforeAndAfter() {
  const gy = 150;
  return (
    <Frame h={262} title="Before and after the fall" desc="The same garden and the same people. In Genesis 2:25 they stand naked and unashamed; in Genesis 3:8 they hide among the trees from the presence of the LORD.">
      <Cap x={W / 2} y={22}>Same people · same garden · same bodies</Cap>
      <Region x={40} y={42} w={480} h={164} />
      <Cap x={W / 2} y={66}>The LORD God</Cap>
      <Hero cx={W / 2} cy={92} r={13} />
      <Rays x={W / 2} y={92} r={17} />
      <N x={W / 2} y={124}>walking in the garden · 3:8</N>
      {/* before */}
      <line x1={W / 2 - 16} y1={100} x2={150} y2={gy - 10} {...ARROW_SAGE} />
      <Person x={124} y={gy} s={1.3} c="var(--sage-deep)" />
      <Person x={150} y={gy} s={1.3} c="var(--sage-deep)" />
      <Cap x={137} y={gy + 34} size={8.5} fill="var(--sage-deep)">before</Cap>
      <N x={137} y={gy + 49}>naked · no shame · 2:25</N>
      {/* after */}
      <Tree x={394} y={gy - 4} s={1.25} />
      <Tree x={462} y={gy - 2} s={1.2} />
      <Tree x={428} y={gy - 18} s={1.45} />
      <Person x={420} y={gy + 4} s={1.05} c="var(--rust)" />
      <Person x={438} y={gy + 6} s={1.05} c="var(--rust)" />
      <Leaf x={494} y={gy + 6} s={1} />
      <line x1={W / 2 + 16} y1={100} x2={382} y2={gy - 20} stroke="var(--muted)" strokeWidth="0.9" strokeDasharray="3 3" />
      <Cap x={428} y={gy + 34} size={8.5} fill="var(--rust)">after</Cap>
      <N x={428} y={gy + 49}>hiding among the trees · 3:8</N>
      <Rule y={224} />
      <Cap x={W / 2} y={248}>The body did not change. Being seen did.</Cap>
    </Frame>
  );
}


/* 4 — Where Are You?: God comes asking; blame travels outward and loops back to Him.
   Map: God is the region on the left. Each answer points the next person further
   away (rust arrows), and Adam's "whom You gave me" arcs all the way back to God.
   The serpent, at the far end, is never asked. */
export function ChainOfBlame() {
  const y = 132;
  const people = [
    { x: 262, who: 'Adam', said: '“the woman…”', ate: '“…and I ate”', ref: '3:12' },
    { x: 382, who: 'Eve', said: '“the serpent…”', ate: '“…and I ate”', ref: '3:13' },
    { x: 494, who: 'Serpent', said: 'never asked', ate: 'only sentenced', ref: '3:14' },
  ];
  return (
    <Frame h={250} title="The chain of blame" desc="God asks Adam where he is. Adam blames the woman and God who gave her, and admits last that he ate. Eve blames the serpent and admits last. The serpent is never asked, only sentenced.">
      <Cap x={W / 2} y={22}>God asks · blame moves outward</Cap>
      {/* "whom You gave me": Adam's answer arcs back to God */}
      <path d={`M262 ${y - 26} C 262 50, 150 46, 128 ${y - 60}`} {...ARROW_RUST} strokeDasharray="4 3" />
      <N x={190} y={50} size={10.5} fill="var(--rust)">“…whom You gave me”</N>
      <Region x={40} y={y - 56} w={150} h={112} />
      <Cap x={115} y={y - 28}>God</Cap>
      <Hero cx={115} cy={y} />
      <N x={115} y={y + 34}>“Where are you?”</N>
      <N x={115} y={y + 48} size={9.5}>3:9</N>
      <line x1={131} y1={y} x2={252} y2={y} {...ARROW_SAGE} />
      <line x1={272} y1={y} x2={370} y2={y} {...ARROW_RUST} />
      <line x1={392} y1={y} x2={482} y2={y} {...ARROW_RUST} />
      <Cap x={322} y={y - 8} size={7} fill="var(--rust)">blames</Cap>
      <Cap x={437} y={y - 8} size={7} fill="var(--rust)">blames</Cap>
      {people.map((p, i) => (
        <g key={p.who}>
          {i === 2 ? <Serpent x={p.x} y={y} s={1.1} /> : <Person x={p.x} y={y + 1} s={1} c="var(--ink)" />}
          <Cap x={p.x} y={y - 18} size={8.5}>{p.who}</Cap>
          <N x={p.x} y={y + 26} size={10.5} fill={i === 2 ? 'var(--muted)' : 'var(--ink)'}>{p.said}</N>
          <N x={p.x} y={y + 40} size={10.5} fill={i === 2 ? 'var(--muted)' : 'var(--sage-deep)'}>{p.ate}</N>
          <N x={p.x} y={y + 54} size={9.5}>{p.ref}</N>
        </g>
      ))}
      <Rule y={212} />
      <N x={W / 2} y={234}>Everyone had an explanation. No one began with responsibility.</N>
    </Frame>
  );
}

/* 5 — The Curse and the Promise: four places judged, one promise threaded through.
   Map: serpent, woman, man and ground along one line (filled rust = "cursed",
   hollow = consequence). From the serpent's sentence a green road drops into the
   promise region: the seed who crushes the head. */
export function ConsequencesOfTheFall() {
  const y = 96;
  const stops = [
    { x: 100, who: 'Serpent', note: 'dust · 3:14', cursed: true },
    { x: 220, who: 'Woman', note: 'pain · 3:16', cursed: false },
    { x: 340, who: 'Man', note: 'toil · dust · 3:19', cursed: false },
    { x: 460, who: 'Ground', note: 'thorns · 3:17', cursed: true },
  ];
  return (
    <Frame h={268} title="The consequences of the fall" desc="God pronounces two curses, on the serpent and on the ground. The woman and man receive consequences but are not called cursed. Inside the serpent's sentence is the promise of Genesis 3:15.">
      <Cap x={W / 2} y={22}>Two curses · one promise</Cap>
      {stops.map((s) => (
        <g key={s.who}>
          {s.who === 'Serpent' ? <Serpent x={s.x} y={y} s={1.1} /> : s.who === 'Ground' ? <Thorns x={s.x} y={y} s={1} /> : <Person x={s.x} y={y + 1} s={1} c="var(--ink)" />}
          <Cap x={s.x} y={y - 34} size={7} fill={s.cursed ? 'var(--rust)' : 'var(--muted)'}>{s.cursed ? 'cursed' : 'consequence'}</Cap>
          <Cap x={s.x} y={y - 16} size={8.5}>{s.who}</Cap>
          <N x={s.x} y={y + 26} fill="var(--ink)">{s.note}</N>
        </g>
      ))}
      {/* the promise drops out of the serpent's sentence */}
      <path d={`M100 ${y + 36} C 100 170, 130 186, 168 186`} {...ARROW_SAGE} />
      <Region x={176} y={150} w={300} h={74} />
      {/* the seed above, the serpent beneath its heel */}
      <Hero cx={214} cy={176} r={11} />
      <Rays x={214} y={176} r={14} />
      <Serpent x={214} y={206} s={0.85} />
      <Cap x={344} y={180} fill="var(--sage-deep)">The promise · 3:15</Cap>
      <N x={344} y={200} fill="var(--ink)">“He will crush your head”</N>
      <N x={W / 2} y={252}>Romans 16:20 · Galatians 4:4</N>
    </Frame>
  );
}


/* 6 — East of Eden: THE WAY IS GUARDED, NOT DESTROYED.
   Top: an illustrated scene — the garden with the tree of life and its four rivers (Gen 2:9–10),
   the guarded way at the east gate (cherubim, whirling flaming sword, Gen 3:24), and Adam and Eve
   walking out into a barren land east of Eden (Gen 3:23). Below: four arches tracing the way to the
   tree of life from guarded to open — Eden, the tabernacle veil, the torn curtain, the New Jerusalem.
   Desktop and phone get separate compositions; every id is prefixed per layout because a gradient
   defined inside a display:none <svg> doesn't render for the visible one. */

/** Light that must stay light in both themes (glow, water, the tear, cherub wings). */
const LIGHT = '#f3ead6';

/** Leaf-shaped cherub wing rising from (x, y) toward (tx, ty); dir = 1 bows right, -1 bows left. */
function Wing({ x, y, tx, ty, dir }: { x: number; y: number; tx: number; ty: number; dir: 1 | -1 }) {
  const bow = 16 * dir;
  return (
    <g>
      <path
        d={`M${x} ${y} C${x - bow} ${y - 22} ${tx - bow * 0.9} ${ty + 14} ${tx} ${ty} C${tx - bow * 0.15} ${ty + 18} ${x - bow * 0.2} ${y - 22} ${x + 3 * dir} ${y} Z`}
        fill={LIGHT}
        fillOpacity={0.92}
        stroke="var(--charcoal)"
        strokeWidth="0.8"
      />
      {[0.3, 0.5, 0.7].map((t) => (
        <line
          key={t}
          x1={x + (tx - x) * t - bow * 0.55}
          y1={y + (ty - y) * t}
          x2={x + (tx - x) * t - bow * 0.15}
          y2={y + (ty - y) * t + 5}
          stroke="var(--charcoal)"
          strokeWidth="0.5"
          opacity="0.6"
        />
      ))}
    </g>
  );
}

/** A small walking figure (Adam or Eve), facing east, head slightly bowed. */
function Walker({ x, ground, s = 1 }: { x: number; ground: number; s?: number }) {
  return (
    <g transform={`translate(${x} ${ground}) scale(${s})`}>
      <ellipse cx="0" cy="0.5" rx="5" ry="1.1" fill="var(--charcoal)" opacity="0.18" />
      <circle cx="1.6" cy="-19" r="2.6" fill="var(--charcoal)" />
      <path d="M-1.5 -15.5 Q1 -17 3.4 -15.2 L4.6 -6 L3.6 0 L-3.6 0 L-2.8 -7 Z" fill="var(--charcoal)" />
    </g>
  );
}

function Thistle({ x, y }: { x: number; y: number }) {
  return (
    <g stroke="var(--muted)" strokeWidth="0.8" fill="none" strokeLinecap="round">
      <path d={`M${x} ${y} V${y - 11}`} />
      <path d={`M${x} ${y - 5} l-4 -4 M${x} ${y - 7} l4 -4 M${x} ${y - 3} l4 -2`} />
      <circle cx={x} cy={y - 13} r="2" fill="var(--muted)" fillOpacity="0.35" />
      <path d={`M${x - 2.5} ${y - 15} l-1.5 -2 M${x} ${y - 15.5} v-2.5 M${x + 2.5} ${y - 15} l1.5 -2`} />
    </g>
  );
}

/** The main scene, drawn in the wide frame's coordinates (x 20–540, y ~56–238). */
function EdenScene({ p }: { p: string }) {
  const g = 212; // ground line
  const gate = 312;
  return (
    <g>
      <defs>
        <radialGradient id={`${p}-glow`} cx="0.5" cy="0.5" r="0.5">
          <stop offset="0" stopColor="var(--sage)" stopOpacity="0.45" />
          <stop offset="1" stopColor="var(--sage)" stopOpacity="0" />
        </radialGradient>
        <radialGradient id={`${p}-fire`} cx="0.5" cy="0.5" r="0.5">
          <stop offset="0" stopColor="var(--rust)" stopOpacity="0.35" />
          <stop offset="1" stopColor="var(--rust)" stopOpacity="0" />
        </radialGradient>
        <linearGradient id={`${p}-ground`} x1="20" x2="540" y1="0" y2="0" gradientUnits="userSpaceOnUse">
          <stop offset="0" stopColor="var(--sage)" stopOpacity="0.3" />
          <stop offset="0.5" stopColor="var(--sage)" stopOpacity="0.24" />
          <stop offset="0.6" stopColor="var(--rule)" stopOpacity="0.6" />
          <stop offset="1" stopColor="var(--rule)" stopOpacity="0.25" />
        </linearGradient>
      </defs>
      <style>{`
        .eden-whirl { animation: eden-whirl 7s linear infinite; }
        @keyframes eden-whirl { to { stroke-dashoffset: -60; } }
        @media (prefers-reduced-motion: reduce) { .eden-whirl { animation: none; } }
      `}</style>

      {/* ── East of Eden: barren ground, distant hills, a dead tree, thistles (Gen 3:18) ── */}
      <path d={`M330 ${g - 22} C370 ${g - 34} 400 ${g - 30} 430 ${g - 38} C465 ${g - 46} 500 ${g - 30} 540 ${g - 34}`} fill="none" stroke="var(--muted)" strokeWidth="0.7" opacity="0.4" />
      <rect x={20} y={g} width={520} height={26} fill={`url(#${p}-ground)`} />
      <path d={`M352 ${g + 8} l6 3 l5 -2 l7 4 M420 ${g + 14} l5 -3 l6 3 l4 -2 M480 ${g + 7} l7 4 l5 -3 M505 ${g + 18} l6 -2 l4 3`} fill="none" stroke="var(--muted)" strokeWidth="0.6" opacity="0.6" />
      <g stroke="var(--muted)" strokeWidth="1" fill="none" strokeLinecap="round" opacity="0.85">
        <path d={`M508 ${g} C507 ${g - 14} 509 ${g - 24} 506 ${g - 36}`} />
        <path d={`M507 ${g - 20} l-10 -8 M507 ${g - 27} l9 -9 M506 ${g - 33} l-6 -6 M497 ${g - 28} l-4 1`} />
      </g>
      <Thistle x={404} y={g} />
      <Thistle x={446} y={g + 1} />
      <Thistle x={530} y={g} />
      <ellipse cx="468" cy={g + 3} rx="5" ry="2" fill="var(--muted)" opacity="0.35" />
      <ellipse cx="384" cy={g + 4} rx="3.5" ry="1.5" fill="var(--muted)" opacity="0.35" />

      {/* ── Eden: the garden enclosure with layered growth ── */}
      <path
        d={`M20 ${g} C18 176 26 150 40 132 C44 116 58 104 74 98 C82 84 100 76 118 76 C130 64 152 60 170 66 C188 60 210 66 222 78 C242 80 260 92 268 108 C284 116 296 134 298 152 L300 ${g} Z`}
        fill="var(--sage)"
        fillOpacity="0.17"
        stroke="var(--sage-deep)"
        strokeOpacity="0.4"
        strokeWidth="0.9"
      />
      {/* back row */}
      {/* cypresses */}
      {[
        [48, 168, 7, 26],
        [112, 124, 8, 30],
        [212, 120, 8, 30],
        [282, 168, 6, 24],
      ].map(([cx, cy, rx, ry]) => (
        <g key={`c${cx}`}>
          <line x1={cx} y1={cy + ry - 4} x2={cx} y2={g} stroke="var(--sage-deep)" strokeOpacity="0.35" strokeWidth="1.2" />
          <ellipse cx={cx} cy={cy} rx={rx} ry={ry} fill="var(--sage)" fillOpacity="0.5" />
        </g>
      ))}
      {/* broad trees: clustered crowns */}
      {[
        [78, 150, 15],
        [244, 140, 16],
      ].map(([cx, cy, r]) => (
        <g key={`o${cx}`} fill="var(--sage)" fillOpacity="0.42">
          <line x1={cx} y1={cy + r - 2} x2={cx} y2={g} stroke="var(--sage-deep)" strokeOpacity="0.35" strokeWidth="1.6" />
          <circle cx={cx} cy={cy} r={r} />
          <circle cx={cx - r * 0.7} cy={cy + r * 0.45} r={r * 0.62} />
          <circle cx={cx + r * 0.7} cy={cy + r * 0.45} r={r * 0.62} />
        </g>
      ))}
      {/* tree of life: glow, trunk, layered canopy, fruit */}
      <circle cx="160" cy="124" r="74" fill={`url(#${p}-glow)`} />
      <path d={`M153 ${g} C155 ${g - 22} 156 ${g - 44} 157 ${g - 62} L164 ${g - 62} C165 ${g - 44} 166 ${g - 22} 169 ${g} Z`} fill="var(--sage-deep)" />
      <path d={`M158 ${g - 50} C150 ${g - 58} 142 ${g - 62} 136 ${g - 72} M163 ${g - 54} C172 ${g - 60} 180 ${g - 66} 186 ${g - 76}`} stroke="var(--sage-deep)" strokeWidth="2.2" fill="none" strokeLinecap="round" />
      {[
        [160, 118, 30],
        [134, 132, 20],
        [186, 132, 20],
        [144, 102, 19],
        [177, 102, 19],
        [160, 88, 17],
      ].map(([cx, cy, r]) => (
        <circle key={`t${cx}${cy}`} cx={cx} cy={cy} r={r} fill="var(--sage-deep)" />
      ))}
      {[
        [150, 108, 9],
        [174, 92, 7],
        [138, 128, 6],
        [178, 126, 8],
      ].map(([cx, cy, r]) => (
        <circle key={`h${cx}${cy}`} cx={cx} cy={cy} r={r} fill="var(--sage)" opacity="0.45" />
      ))}
      {[
        [146, 120], [170, 112], [158, 98], [184, 136], [132, 138], [162, 132], [178, 100], [142, 96], [156, 76],
      ].map(([cx, cy]) => (
        <circle key={`f${cx}${cy}`} cx={cx} cy={cy} r="2.3" fill="var(--rust)" />
      ))}
      {/* front growth */}
      {[
        [44, 203, 18, 9],
        [100, 206, 20, 8],
        [214, 206, 22, 8],
        [276, 202, 15, 9],
      ].map(([cx, cy, rx, ry]) => (
        <ellipse key={`s${cx}`} cx={cx} cy={cy} rx={rx} ry={ry} fill="var(--sage)" fillOpacity="0.62" />
      ))}
      <g stroke="var(--sage-deep)" strokeWidth="0.9" fill="none" strokeLinecap="round" opacity="0.75">
        <path d={`M70 ${g} C68 ${g - 10} 62 ${g - 16} 56 ${g - 18} M70 ${g} C72 ${g - 11} 78 ${g - 17} 84 ${g - 18}`} />
        <path d={`M246 ${g} C244 ${g - 9} 238 ${g - 14} 232 ${g - 15} M246 ${g} C248 ${g - 10} 254 ${g - 15} 260 ${g - 16}`} />
      </g>
      <g stroke="var(--sage-deep)" strokeWidth="0.7" fill="none" strokeLinecap="round" opacity="0.55">
        {[34, 128, 196, 228, 290].map((x) => (
          <path key={x} d={`M${x} ${g} l-2 -6 M${x} ${g} l0 -7 M${x} ${g} l2 -6`} />
        ))}
      </g>
      {/* one river, four headwaters (Gen 2:10) */}
      <g fill="none" strokeLinecap="round">
        {[`M161 ${g - 1} C150 ${g + 9} 118 ${g + 15} 84 ${g + 26}`, `M161 ${g - 1} C157 ${g + 11} 140 ${g + 19} 130 ${g + 26}`, `M161 ${g - 1} C165 ${g + 11} 182 ${g + 19} 192 ${g + 26}`, `M161 ${g - 1} C174 ${g + 9} 208 ${g + 15} 242 ${g + 26}`].map((d) => (
          <g key={d}>
            <path d={d} stroke="var(--sage-deep)" strokeOpacity="0.35" strokeWidth="3.6" />
            <path d={d} stroke={LIGHT} strokeWidth="1.6" />
          </g>
        ))}
      </g>

      {/* ── The guarded way: cherubim whose wings meet over the gate, the whirling flaming sword ── */}
      <circle cx={gate} cy={172} r={34} fill={`url(#${p}-fire)`} />
      {/* each cherub: a standing figure whose wings rise and meet over the way */}
      <Wing x={gate - 22} y={g - 18} tx={gate - 1} ty={112} dir={1} />
      <Wing x={gate + 22} y={g - 18} tx={gate + 1} ty={112} dir={-1} />
      <circle cx={gate - 22} cy={g - 30} r="3" fill="var(--charcoal)" />
      <circle cx={gate + 22} cy={g - 30} r="3" fill="var(--charcoal)" />
      <path d={`M${gate - 25} ${g - 26} L${gate - 19} ${g - 26} L${gate - 17} ${g} L${gate - 27} ${g} Z`} fill="var(--charcoal)" />
      <path d={`M${gate + 19} ${g - 26} L${gate + 25} ${g - 26} L${gate + 27} ${g} L${gate + 17} ${g} Z`} fill="var(--charcoal)" />
      <line x1={gate} y1={140} x2={gate} y2={g - 8} stroke="var(--ink)" strokeWidth="1.6" strokeLinecap="round" />
      <line x1={gate - 5} y1={g - 16} x2={gate + 5} y2={g - 16} stroke="var(--ink)" strokeWidth="1.4" strokeLinecap="round" />
      <ellipse className="eden-whirl" cx={gate} cy={170} rx={11} ry={30} fill="none" stroke="var(--rust)" strokeWidth="1.6" strokeDasharray="9 6 3 6" strokeLinecap="round" />
      <ellipse className="eden-whirl" cx={gate} cy={170} rx={6} ry={22} fill="none" stroke="var(--rust)" strokeWidth="1" strokeDasharray="5 7" strokeLinecap="round" opacity="0.7" />

      {/* ── Adam and Eve, walking out ── */}
      <path d={`M${gate + 30} ${g + 4} C${gate + 36} ${g + 6} ${gate + 40} ${g + 4} ${gate + 52} ${g + 5}`} fill="none" stroke="var(--charcoal)" strokeWidth="0.7" strokeDasharray="1 4" strokeLinecap="round" opacity="0.6" />
      <Walker x={gate + 60} ground={g} s={1.15} />
      <Walker x={gate + 74} ground={g} s={1.05} />
    </g>
  );
}

type Stage = { name: string; ref: string; line: string };
const WAY: Stage[] = [
  { name: 'Eden', ref: 'Genesis 3:24', line: 'the way is guarded' },
  { name: 'Tabernacle', ref: 'Exodus 26:31', line: 'cherubim on the veil' },
  { name: 'Christ', ref: 'Matthew 27:51', line: 'the curtain torn in two' },
  { name: 'New Jerusalem', ref: 'Revelation 22:2', line: 'the tree of life again' },
];
const ARCH = 'M4 92 V40 A46 34 0 0 1 96 40 V92 Z';

/** One arch vignette, drawn in a 100 × 92 box. */
function WayArch({ i, p }: { i: number; p: string }) {
  const fills = ['var(--sage)', 'var(--ivory-deep)', 'var(--ivory)', 'var(--sage)'];
  const op = [0.18, 0.9, 0.9, 0.2];
  return (
    <g>
      <path d={ARCH} fill={fills[i]} fillOpacity={op[i]} stroke="var(--charcoal)" strokeWidth="0.9" />
      {i === 0 && (
        <g>
          {/* the tree, guarded */}
          <line x1="64" y1="82" x2="64" y2="56" stroke="var(--sage-deep)" strokeWidth="2.6" />
          <circle cx="64" cy="50" r="14" fill="var(--sage-deep)" />
          <circle cx="54" cy="58" r="8" fill="var(--sage-deep)" />
          <circle cx="74" cy="58" r="8" fill="var(--sage-deep)" />
          <circle cx="60" cy="48" r="2" fill="var(--rust)" />
          <circle cx="70" cy="56" r="2" fill="var(--rust)" />
          <path d="M30 84 C22 70 24 52 36 40 C32 54 32 70 34 84 Z" fill={LIGHT} stroke="var(--charcoal)" strokeWidth="0.7" />
          <line x1="40" y1="44" x2="40" y2="84" stroke="var(--ink)" strokeWidth="1.3" />
          <ellipse cx="40" cy="62" rx="5" ry="16" fill="none" stroke="var(--rust)" strokeWidth="1.1" strokeDasharray="5 4" />
          <line x1="8" y1="84" x2="92" y2="84" stroke="var(--sage-deep)" strokeOpacity="0.4" />
        </g>
      )}
      {i === 1 && (
        <g>
          {/* the veil, with cherubim worked into it */}
          <line x1="14" y1="30" x2="86" y2="30" stroke="var(--charcoal)" strokeWidth="1.4" strokeLinecap="round" />
          <path d="M16 31 H84 V86 H16 Z" fill="var(--ivory)" fillOpacity="0.6" />
          {[26, 38, 50, 62, 74].map((x) => (
            <line key={x} x1={x} y1="32" x2={x} y2="86" stroke="var(--rule)" strokeWidth="0.8" />
          ))}
          <g fill="none" stroke="var(--rust)" strokeWidth="0.9">
            <path d="M50 70 C42 64 38 54 40 44 C44 52 46 60 50 64" />
            <path d="M50 70 C58 64 62 54 60 44 C56 52 54 60 50 64" />
          </g>
          <circle cx="50" cy="72" r="1.6" fill="var(--rust)" />
        </g>
      )}
      {i === 2 && (
        <g>
          {/* the curtain torn top to bottom; light through the tear */}
          <defs>
            <radialGradient id={`${p}-light`} cx="0.5" cy="0.4" r="0.6">
              <stop offset="0" stopColor={LIGHT} stopOpacity="1" />
              <stop offset="1" stopColor={LIGHT} stopOpacity="0" />
            </radialGradient>
          </defs>
          <circle cx="50" cy="56" r="30" fill={`url(#${p}-light)`} />
          <line x1="14" y1="30" x2="86" y2="30" stroke="var(--charcoal)" strokeWidth="1.4" strokeLinecap="round" />
          <path d="M16 31 H47 L44 42 L48 52 L43 63 L47 74 L42 86 H16 Z" fill="var(--ivory-deep)" stroke="var(--charcoal)" strokeWidth="0.6" />
          <path d="M84 31 H54 L57 42 L53 52 L58 63 L54 74 L59 86 H84 Z" fill="var(--ivory-deep)" stroke="var(--charcoal)" strokeWidth="0.6" />
          {[24, 34, 66, 76].map((x) => (
            <line key={x} x1={x} y1="32" x2={x} y2="86" stroke="var(--rule)" strokeWidth="0.8" />
          ))}
        </g>
      )}
      {i === 3 && (
        <g>
          {/* the river of life down the street, the tree on either side (Rev 22:1–2) */}
          <circle cx="50" cy="34" r="12" fill={LIGHT} opacity="0.8" />
          <path d="M47 34 C46 52 42 68 38 92 L62 92 C58 68 54 52 53 34 Z" fill={LIGHT} stroke="var(--sage-deep)" strokeOpacity="0.4" strokeWidth="0.7" />
          <path d="M47 52 q3 -2 6 0 M45 64 q5 -2 10 0 M43 76 q7 -2 14 0" fill="none" stroke="var(--sage-deep)" strokeOpacity="0.45" strokeWidth="0.7" />
          {[24, 76].map((x) => (
            <g key={x}>
              <line x1={x} y1="84" x2={x} y2="62" stroke="var(--sage-deep)" strokeWidth="2.2" />
              <circle cx={x} cy="56" r="12" fill="var(--sage-deep)" />
              <circle cx={x - 4} cy="52" r="1.8" fill="var(--rust)" />
              <circle cx={x + 5} cy="58" r="1.8" fill="var(--rust)" />
              <circle cx={x} cy="62" r="1.8" fill="var(--rust)" />
            </g>
          ))}
        </g>
      )}
    </g>
  );
}

/** Thin connector with a small open chevron at the end; dashed = an interpretive link. */
function Link2({ x1, x2, y, dashed, color }: { x1: number; x2: number; y: number; dashed?: boolean; color: string }) {
  return (
    <g stroke={color} strokeWidth="0.9" fill="none" strokeLinecap="round">
      <line x1={x1} y1={y} x2={x2} y2={y} strokeDasharray={dashed ? '2 3' : undefined} />
      <path d={`M${x2 - 4} ${y - 3} L${x2} ${y} L${x2 - 4} ${y + 3}`} />
    </g>
  );
}

const EDEN_DESC =
  'An illustrated scene: the garden of Eden with the tree of life and its four rivers; at the east gate, cherubim whose wings meet over the way and a whirling flaming sword; Adam and Eve walking out into a barren land east of Eden. Below, four arches trace the way to the tree of life: Eden, guarded (Genesis 3:24); the tabernacle veil with cherubim (Exodus 26:31); the curtain torn in two at Christ’s death (Matthew 27:51); the New Jerusalem, where the tree of life stands again (Revelation 22:2).';

function EdenWide() {
  const xs = [35, 165, 295, 425];
  const ay = 292;
  const labels: [number, string, string][] = [
    [160, 'Eden', 'Genesis 2:8–10'],
    [312, 'The guarded way', 'Genesis 3:24'],
    [452, 'East of Eden', 'Genesis 3:23'],
  ];
  return (
    <Frame h={506} title="The way is guarded, not destroyed" desc={EDEN_DESC}>
      <Cap x={W / 2} y={30} size={10}>The way is guarded, not destroyed</Cap>
      <EdenScene p="ew" />
      {labels.map(([x, n, r]) => (
        <g key={n}>
          <Cap x={x} y={258} size={8.5}>{n}</Cap>
          <T x={x} y={272} size={9.5}>{r}</T>
        </g>
      ))}
      {WAY.map((s, i) => (
        <g key={s.name}>
          <g transform={`translate(${xs[i]} ${ay})`}>
            <WayArch i={i} p={`ew${i}`} />
          </g>
          <Cap x={xs[i] + 50} y={ay + 112} size={8}>{s.name}</Cap>
          <T x={xs[i] + 50} y={ay + 126} size={9.5}>{s.ref}</T>
          <T x={xs[i] + 50} y={ay + 141} size={10} fill="var(--ink)">{s.line}</T>
        </g>
      ))}
      <Link2 x1={xs[0] + 102} x2={xs[1] - 2} y={ay + 62} dashed color="var(--muted)" />
      <Link2 x1={xs[1] + 102} x2={xs[2] - 2} y={ay + 62} color="var(--charcoal)" />
      <Link2 x1={xs[2] + 102} x2={xs[3] - 2} y={ay + 62} color="var(--sage-deep)" />
      <Rule y={452} />
      <Cap x={W / 2} y={474} size={9}>Guarded in Genesis · open in Revelation</Cap>
      <T x={W / 2} y={493} size={10}>Eden’s cherubim and the veil’s are an echo readers have long noticed, not a stated link.</T>
    </Frame>
  );
}

function EdenStacked() {
  const w = 320;
  const xs = [42, 178];
  const rows = [244, 392];
  const sc = 0.59;
  const sx = (x: number) => x * sc - 6;
  return (
    <Frame h={612} w={w} title="The way is guarded, not destroyed" desc={EDEN_DESC}>
      <Cap x={w / 2} y={22} size={8.5}>The way is guarded, not destroyed</Cap>
      <g transform={`translate(-6 4) scale(${sc})`}>
        <EdenScene p="es" />
      </g>
      {(
        [
          [sx(160), 'Eden', 'Gen 2:8–10'],
          [sx(312), 'The guarded way', 'Gen 3:24'],
          [sx(468), 'East of Eden', 'Gen 3:23'],
        ] as [number, string, string][]
      ).map(([x, n, r]) => (
        <g key={n}>
          <Cap x={x} y={168} size={6.5}>{n}</Cap>
          <T x={x} y={181} size={9}>{r}</T>
        </g>
      ))}
      <line x1={24} y1={202} x2={w - 24} y2={202} stroke="var(--rule)" />
      {WAY.map((s, i) => {
        const x = xs[i % 2];
        const y = rows[Math.floor(i / 2)];
        return (
          <g key={s.name}>
            <g transform={`translate(${x} ${y - 22})`}>
              <WayArch i={i} p={`es${i}`} />
            </g>
            <Cap x={x + 50} y={y + 88} size={7}>{s.name}</Cap>
            <T x={x + 50} y={y + 101} size={9}>{s.ref}</T>
            <T x={x + 50} y={y + 115} size={9.5} fill="var(--ink)">{s.line}</T>
          </g>
        );
      })}
      <Link2 x1={xs[0] + 103} x2={xs[1] - 3} y={rows[0] + 40} dashed color="var(--muted)" />
      <Link2 x1={xs[0] + 103} x2={xs[1] - 3} y={rows[1] + 40} color="var(--sage-deep)" />
      <line x1={24} y1={536} x2={w - 24} y2={536} stroke="var(--rule)" />
      <Cap x={w / 2} y={556} size={7.5}>Guarded in Genesis · open in Revelation</Cap>
      <T x={w / 2} y={575} size={9.5}>Eden’s cherubim and the veil’s are an echo</T>
      <T x={w / 2} y={589} size={9.5}>readers have long noticed, not a stated link.</T>
    </Frame>
  );
}

export function EdenToExile() {
  return (
    <>
      <div className="hidden md:block">
        <EdenWide />
      </div>
      <div className="md:hidden">
        <EdenStacked />
      </div>
    </>
  );
}

/* 7 — The Two Brothers: two offerings rise; one is received.
   Map: the LORD is the region above; Abel's offering arrives (green), Cain's
   falls short (rust, broken off). The reason waits for later Scripture. */
export function CainAndAbel() {
  const by = 196;
  return (
    <Frame h={284} title="Cain and Abel" desc="Cain brings fruit of the soil and Abel the firstborn of his flock. God looks with favor on Abel and his offering, and has no regard for Cain and his. Genesis gives no reason; Hebrews 11:4 later says Abel offered by faith.">
      <Cap x={W / 2} y={22}>Two offerings · one received</Cap>
      <Region x={200} y={40} w={160} h={80} />
      <Cap x={W / 2} y={60}>The LORD</Cap>
      <Hero cx={W / 2} cy={90} r={12} />
      <Rays x={W / 2} y={90} r={15} />
      {/* Abel: arrives */}
      <path d={`M420 ${by - 52} C 420 134, 400 116, 350 108`} {...ARROW_SAGE} />
      <N x={432} y={142} anchor="start" fill="var(--sage-deep)">looked with favor</N>
      {/* Cain: falls short */}
      <path d={`M168 ${by - 18} C 176 154, 178 146, 192 140`} {...ARROW_RUST} strokeDasharray="4 3" />
      <N x={128} y={152} anchor="end" fill="var(--rust)">no regard</N>
      <Altar x={140} y={by} s={1.25} rises={false} />
      <Sheaf x={104} y={by - 2} s={1.1} />
      <Cap x={140} y={by + 26}>Cain</Cap>
      <N x={140} y={by + 44}>fruit of the soil · 4:3</N>
      <Altar x={420} y={by} s={1.25} />
      <Lamb x={458} y={by} s={1.1} />
      <Cap x={420} y={by + 26}>Abel</Cap>
      <N x={420} y={by + 44}>firstborn of the flock · 4:4</N>
      <N x={W / 2} y={272}>The reason comes later: “by faith” · Hebrews 11:4</N>
    </Frame>
  );
}

/* 8 — Sin at the Door: inside → outside, twice. The door is the region.
   Genesis 3 walks straight through it. In Genesis 4 God stands at the door
   (hero) and warns before the act; Cain walks past Him. */
export function ProgressionOfSin() {
  const y3 = 104;
  const y4 = 172;
  const row = (y: number, inside: string[], outside: string[], label: string) => (
    <g>
      <Cap x={34} y={y + 3} anchor="start" size={7.5} fill="var(--muted)">{label}</Cap>
      {[...inside.map((t, i) => ({ t, x: 120 + i * 78 })), ...outside.map((t, i) => ({ t, x: 362 + i * 70 }))].map((s, i, all) => {
        const last = i === all.length - 1;
        const out = s.x > 300;
        return (
          <g key={s.t}>
            {last ? (y === y4 ? <Drop x={s.x} y={y} s={1.2} /> : <Tree x={s.x} y={y - 4} s={0.8} c="var(--rust)" />) : <Stop cx={s.x} cy={y} r={5} stroke={out ? 'var(--rust)' : 'var(--charcoal)'} />}
            <N x={s.x} y={y + 22} fill="var(--ink)">{s.t}</N>
          </g>
        );
      })}
    </g>
  );
  return (
    <Frame h={286} title="The progression of sin" desc="Genesis 3: word doubted and seen inside; taken, eaten and hidden outside. Genesis 4: anger and a fallen face inside; God warns at the door; then the field and the killing. Genesis 3:16 and 4:7 share the Hebrew pair for desire and rule.">
      <Cap x={W / 2} y={22}>From inside to outside, twice</Cap>
      <Cap x={159} y={58} size={7.5} fill="var(--muted)">inside</Cap>
      <Cap x={432} y={58} size={7.5} fill="var(--muted)">outside</Cap>
      <Region x={256} y={64} w={72} h={150} />
      <Cap x={292} y={82} size={7.5}>the door</Cap>
      {/* paths */}
      <line x1={125} y1={y3} x2={352} y2={y3} stroke="var(--charcoal)" strokeWidth="0.9" />
      <line x1={367} y1={y3} x2={496} y2={y3} stroke="var(--rust)" strokeWidth="1.1" />
      <line x1={125} y1={y4} x2={280} y2={y4} stroke="var(--charcoal)" strokeWidth="0.9" />
      <line x1={304} y1={y4} x2={426} y2={y4} stroke="var(--rust)" strokeWidth="1.1" />
      {row(y3, ['word doubted', 'saw'], ['took', 'ate', 'hid'], 'Adam & Eve')}
      {row(y4, ['angry', 'face fell'], ['the field', 'killed'], 'Cain')}
      <Door x={290} y={136} s={1} crouch />
      <Hero cx={292} cy={y4} r={11} />
      <N x={292} y={y4 + 30} fill="var(--sage-deep)">warned · 4:7</N>
      <Rule y={232} />
      <N x={W / 2} y={252}>desire (teshuqah) · rule (mashal) · the same pair in 3:16 and 4:7</N>
      <Cap x={W / 2} y={274} size={8.5}>Adam was questioned after. Cain was warned before.</Cap>
    </Frame>
  );
}

/* 9 — Am I My Brother's Keeper?: one God, two questions, two roads east.
   Map: God is the region; the upper road is Adam's, the lower is Cain's.
   Same stations, one step further: the ground is cursed, then Cain himself. */
export function TwoDivineQuestions() {
  const cols = [222, 338, 430, 506];
  const head = ['asked', 'answer', 'cursed', 'mercy'];
  const roads = [
    { y: 108, who: 'Adam', q: '“Where are you?” · 3:9', a: '“I hid” — true', c: 'the ground', m: 'clothed · 3:21', self: false },
    { y: 188, who: 'Cain', q: '“Where is your brother?”', a: '“I don’t know” — a lie', c: 'Cain himself', m: 'marked · 4:15', self: true },
  ];
  return (
    <Frame h={274} title="Two divine questions" desc="God asks Adam where he is and Cain where his brother is. Adam answers truthfully, Cain lies. In Genesis 3 the ground is cursed; in Genesis 4 Cain himself. Each is sent east, and each receives a mercy: garments of skin, a protective mark.">
      <Cap x={W / 2} y={22}>Adam vs Cain’s sin</Cap>
      {head.map((h, i) => <Cap key={h} x={cols[i]} y={62} size={7.5} fill="var(--muted)">{h}</Cap>)}
      <Region x={40} y={86} w={110} h={124} />
      <Cap x={95} y={110}>God</Cap>
      <Hero cx={95} cy={148} r={14} />
      <N x={95} y={190}>comes asking</N>
      {roads.map((r) => (
        <g key={r.who}>
          <line x1={150} y1={r.y} x2={cols[0] - 9} y2={r.y} {...ARROW_SAGE} />
          <line x1={cols[0] + 6} y1={r.y} x2={cols[3] - 6} y2={r.y} stroke="var(--charcoal)" strokeWidth="0.9" />
          <Person x={cols[0]} y={r.y + 1} s={1} c="var(--ink)" />
          <Cap x={cols[0]} y={r.y - 16} size={8.5}>{r.who}</Cap>
          <N x={cols[0]} y={r.y + 28} fill="var(--ink)">{r.q}</N>
          <Stop cx={cols[1]} cy={r.y} r={5} stroke={r.self ? 'var(--rust)' : 'var(--charcoal)'} />
          <N x={cols[1]} y={r.y + 28} fill="var(--ink)">{r.a}</N>
          {r.self ? <Person x={cols[2]} y={r.y + 1} s={1} c="var(--rust)" /> : <Thorns x={cols[2]} y={r.y} s={0.9} />}
          <N x={cols[2]} y={r.y + 28} fill="var(--rust)">{r.c}</N>
          {r.self ? <Mark x={cols[3]} y={r.y} s={1.05} /> : <Garment x={cols[3]} y={r.y} s={1.05} />}
          <N x={cols[3]} y={r.y + 28} fill="var(--sage-deep)">{r.m}</N>
        </g>
      ))}
      <Rule y={234} />
      <Cap x={W / 2} y={258} size={8.5}>Broken toward God → broken toward each other</Cap>
    </Frame>
  );
}

/* 10 — The Rise of Civilization: the line grows more capable and more violent.
   Map: Cain's line runs left → right; the first city hangs off Cain; Lamech's sons
   branch into gifts. Underneath, vengeance grows: a small 7× becomes a big 77×,
   and a dashed road points to forgiveness 77×. */
export function CivilizationAndViolence() {
  const y = 70;
  const names = ['Adam', 'Cain', 'Enoch', 'Irad', 'Mehujael', 'Methusael', 'Lamech'];
  const xs = names.map((_, i) => 60 + i * 72);
  const gifts: [number, string, string][] = [[336, 'Jabal', 'Economy'], [424, 'Jubal', 'Art'], [512, 'Tubal-cain', 'Technology']];
  return (
    <Frame h={300} title="Civilization and violence" desc="Cain's line from Adam to Lamech, seven generations. Cain builds the first city; Lamech's sons found herding, music and metalworking. Lamech's song multiplies Cain's sevenfold vengeance to seventy-sevenfold; Jesus answers with forgiveness seventy-seven times.">
      <Cap x={W / 2} y={22}>More capable · more violent</Cap>
      <line x1={xs[0]} y1={y} x2={xs[6]} y2={y} stroke="var(--charcoal)" strokeWidth="0.9" />
      {names.map((n, i) => (
        <g key={n + i}>
          {i === 0 ? <Hero cx={xs[i]} cy={y} r={6} /> : i === 6 ? <Hero cx={xs[i]} cy={y} r={7} fill="var(--rust)" /> : <Stop cx={xs[i]} cy={y} r={5} />}
          <Cap x={xs[i]} y={i % 2 ? y + 22 : y - 12} size={7.5} fill={i === 6 ? 'var(--rust)' : 'var(--ink)'}>{n}</Cap>
        </g>
      ))}
      {/* the city */}
      <line x1={xs[1]} y1={y + 30} x2={xs[1]} y2={110} stroke="var(--charcoal)" strokeWidth="0.9" />
      <Region x={xs[1] - 76} y={110} w={190} h={62} />
      <City x={xs[1] - 46} y={140} s={1.05} />
      <Cap x={xs[1] + 44} y={136} size={8.5}>first city</Cap>
      <N x={xs[1] + 44} y={154}>named Enoch · 4:17</N>
      {/* the gifts */}
      <line x1={xs[6]} y1={y + 8} x2={xs[6]} y2={108} stroke="var(--charcoal)" strokeWidth="0.9" />
      <line x1={gifts[0][0]} y1={108} x2={gifts[2][0]} y2={108} stroke="var(--charcoal)" strokeWidth="0.9" />
      {gifts.map(([x, name, g]) => (
        <g key={g}>
          <line x1={x} y1={108} x2={x} y2={120} stroke="var(--charcoal)" strokeWidth="0.9" />
          {x === gifts[0][0] ? <Tent x={x} y={126} s={0.95} /> : x === gifts[1][0] ? <Harp x={x} y={126} s={0.95} /> : <Anvil x={x} y={128} s={0.95} />}
          <Cap x={x} y={148} size={7.5}>{name}</Cap>
          <N x={x} y={163} fill="var(--ink)">{g}</N>
        </g>
      ))}
      <N x={424} y={180}>Lamech’s sons · 4:20–22</N>
      {/* vengeance grows */}
      <Rule y={192} />
      <Hero cx={120} cy={234} r={6} fill="var(--rust)" />
      <Cap x={120} y={214} size={8}>Cain</Cap>
      <N x={120} y={260} fill="var(--rust)">avenged 7×</N>
      <line x1={134} y1={234} x2={236} y2={234} {...ARROW_RUST} />
      <Hero cx={270} cy={234} r={20} fill="var(--rust)" />
      <Sword x={270} y={234} s={0.9} c="var(--ivory)" angle={30} />
      <Cap x={270} y={206} size={8}>Lamech</Cap>
      <N x={270} y={270} fill="var(--rust)">avenged 77× · 4:24</N>
      <line x1={296} y1={234} x2={404} y2={234} stroke="var(--sage-deep)" strokeWidth="1.2" strokeDasharray="4 3" markerEnd="url(#gn-arr-sage)" />
      <Hero cx={424} cy={234} r={8} />
      <Rays x={424} y={234} r={11} />
      <Cap x={424} y={214} size={8}>Jesus</Cap>
      <N x={424} y={260} fill="var(--sage-deep)">forgive 77× · Matt 18:22</N>
    </Frame>
  );
}


/* 11 — Another Beginning: two lines run down from Adam, counted to the seventh.
   Map: Adam at the top; Cain's line falls to the left and ends in Lamech (rust,
   the killer's boast). Seth's line falls to the right and ends in Enoch, the hero,
   who does not end: an arrow lifts him out. */
export function TwoLinesOfAdam() {
  const top = { x: W / 2, y: 82 };
  const L = { x: 120, y: 236 };
  const R = { x: 440, y: 236 };
  const cain = ['Cain', 'Enoch', 'Irad', 'Mehujael', 'Methusael', 'Lamech'];
  const seth = ['Seth', 'Enosh', 'Kenan', 'Mahalalel', 'Jared', 'Enoch'];
  const at = (end: { x: number; y: number }, i: number) => ({
    x: top.x + ((end.x - top.x) * (i + 1)) / 6,
    y: top.y + ((end.y - top.y) * (i + 1)) / 6,
  });
  return (
    <Frame h={290} title="The two lines of Adam" desc="Cain's and Seth's lines counted from Adam. The seventh in Cain's line is Lamech, who boasts of killing; the seventh in Seth's is Enoch, who walked with God and was taken. Both lines contain an Enoch and a Lamech.">
      <Cap x={W / 2} y={22}>Seventh from Adam</Cap>
      <Region x={W / 2 - 60} y={36} w={120} h={46} />
      <Person x={W / 2 - 34} y={62} s={0.95} c="var(--ink)" />
      <Cap x={W / 2 + 10} y={63}>Adam</Cap>
      <line x1={top.x - 8} y1={top.y} x2={L.x} y2={L.y} stroke="var(--rust)" strokeWidth="1.1" />
      <line x1={top.x + 8} y1={top.y} x2={R.x} y2={R.y} stroke="var(--sage-deep)" strokeWidth="1.1" />
      {cain.map((n, i) => {
        const p = at(L, i);
        const last = i === 5;
        return (
          <g key={'c' + i}>
            {last ? (
              <>
                <Hero cx={p.x} cy={p.y} r={10} fill="var(--rust)" />
                <Sword x={p.x} y={p.y} s={0.6} c="var(--ivory)" angle={30} />
              </>
            ) : (
              <Stop cx={p.x} cy={p.y} r={4.5} />
            )}
            <Cap x={p.x - 14} y={p.y + 3} anchor="end" size={7.5} fill={last ? 'var(--rust)' : 'var(--ink)'}>{n}</Cap>
          </g>
        );
      })}
      {seth.map((n, i) => {
        const p = at(R, i);
        const last = i === 5;
        return (
          <g key={'s' + i}>
            {last ? (
              <>
                <Hero cx={p.x} cy={p.y} r={12} />
                <Rays x={p.x} y={p.y} r={15} />
              </>
            ) : (
              <Stop cx={p.x} cy={p.y} r={4.5} />
            )}
            {/* Seth's names sit inside the V, so Enoch's arrow and the notes have the outside to themselves */}
            {last ? (
              <Cap x={p.x + 26} y={p.y + 3} anchor="start" size={7.5} fill="var(--sage-deep)">{n}</Cap>
            ) : (
              <Cap x={p.x - 14} y={p.y + 3} anchor="end" size={7.5}>{n}</Cap>
            )}
          </g>
        );
      })}
      <N x={at(R, 0).x + 14} y={at(R, 0).y + 4} anchor="start">“another seed” · 4:25</N>
      {/* Enoch is taken */}
      <line x1={R.x} y1={R.y - 24} x2={R.x} y2={R.y - 50} {...ARROW_SAGE} />
      <N x={R.x} y={R.y + 30} fill="var(--sage-deep)">walked with God · taken · 5:24</N>
      <N x={L.x} y={L.y + 30} fill="var(--rust)">boasts of killing · 4:23</N>
    </Frame>
  );
}

/* 12 — And Then He Died: lifespans on one map of time (Masoretic numbers).
   Each life is a road that ends in a rust dot: "and he died". Enoch's road ends
   in a green hero with an arrow up. The flood is the region at the far right. */
export function GenerationsOfAdam() {
  const x0 = 116;
  const x1 = 470;
  const sx = (yr: number) => x0 + (yr / 1700) * (x1 - x0);
  const people: [string, number, number | null][] = [
    ['Adam', 0, 930],
    ['Seth', 130, 1042],
    ['Enosh', 235, 1140],
    ['Kenan', 325, 1235],
    ['Mahalalel', 395, 1290],
    ['Jared', 460, 1422],
    ['Enoch', 622, 987],
    ['Methuselah', 687, 1656],
    ['Lamech', 874, 1651],
    ['Noah', 1056, null],
  ];
  const y0 = 66;
  const step = 21;
  const bottom = y0 + (people.length - 1) * step;
  const fx = sx(1656);
  return (
    <Frame h={316} title="The generations of Adam" desc="Ten lifespans from Adam to Noah on one timeline of years from creation. Every life ends in death except Enoch's, who was taken. Methuselah dies in the year of the flood, 1656.">
      <Cap x={W / 2} y={22}>Eight times: “and then he died”</Cap>
      <rect x={fx} y={y0 - 20} width={540 - fx} height={bottom - y0 + 40} rx={14} fill="var(--sage-soft)" stroke="var(--charcoal)" strokeWidth="0.9" />
      <Cap x={(fx + 540) / 2} y={y0 - 28} size={7.5}>Flood · 1656</Cap>
      {/* rain over the flood */}
      {Array.from({ length: 18 }, (_, i) => {
        const rx = fx + 12 + (i % 6) * ((540 - fx - 24) / 5);
        const ry = y0 - 6 + Math.floor(i / 6) * 34 + (i % 2) * 12;
        return <line key={i} x1={rx + 3} y1={ry} x2={rx - 1} y2={ry + 9} stroke="var(--sage-deep)" strokeWidth="1" strokeLinecap="round" opacity={0.7} />;
      })}
      <Waves x={(fx + 540) / 2} y={bottom - 34} s={1} w={48} c="var(--sage-deep)" />
      <Waves x={(fx + 540) / 2} y={bottom + 12} s={1} w={48} />
      <Ark x={(fx + 540) / 2 + 6} y={bottom - 3} s={1.15} />
      {[0, 500, 1000, 1500].map((yr) => (
        <g key={yr}>
          <line x1={sx(yr)} y1={y0 - 10} x2={sx(yr)} y2={bottom + 10} stroke="var(--rule)" strokeWidth="0.6" />
          <N x={sx(yr)} y={bottom + 28} size={9.5}>{String(yr)}</N>
        </g>
      ))}
      {people.map(([n, b, d], i) => {
        const y = y0 + i * step;
        const enoch = n === 'Enoch';
        const noah = d === null;
        const end = noah ? 1656 : (d as number);
        return (
          <g key={n}>
            <Cap x={x0 - 12} y={y + 3} anchor="end" size={7.5} fill={enoch ? 'var(--sage-deep)' : 'var(--ink)'}>{n}</Cap>
            <line x1={sx(b)} y1={y} x2={sx(end)} y2={y} stroke={enoch ? 'var(--sage-deep)' : 'var(--charcoal)'} strokeWidth={1.4} />
            {enoch ? (
              <>
                <Hero cx={sx(end)} cy={y} r={7} />
                <line x1={sx(end)} y1={y - 9} x2={sx(end)} y2={y - 18} {...ARROW_SAGE} />
                <N x={sx(end) + 12} y={y + 4} anchor="start" fill="var(--sage-deep)">taken · 5:24</N>
              </>
            ) : noah ? (
              <line x1={sx(b)} y1={y} x2={(fx + 540) / 2 - 12} y2={y} {...ARROW} />
            ) : (
              <circle cx={sx(end)} cy={y} r={3.2} fill="var(--rust)" />
            )}
          </g>
        );
      })}
      <N x={W / 2} y={bottom + 50} fill="var(--ink)">Methuselah dies in 1656, the year the flood comes</N>
    </Frame>
  );
}

/* 13 — The Condition of Man: humanity's road falls; God's road holds.
   Map: the rust road descends from the image of God (hero) to death. Beneath it,
   a long soft region carries God's road, level, never breaking. */
export function FromCreationToCondition() {
  const xs = Array.from({ length: 9 }, (_, i) => 72 + i * 52);
  const human = ['image', 'doubt', 'take', 'hide', 'blame', 'anger', 'murder', 'boast', 'die'];
  const god = ['blesses', 'seeks', 'promises', 'clothes', 'guards', 'warns', 'marks', 'gives seed', 'takes Enoch'];
  const hy = (i: number) => 66 + i * 13;
  const gy = 252;
  return (
    <Frame h={330} title="From creation to the human condition" desc="Across Genesis 1 to 5, humanity's actions descend from image-bearing to doubt, hiding, blame, murder, boasting and death, while God's actions hold steady: blessing, seeking, promising, clothing, guarding, warning, marking, giving another seed, taking Enoch.">
      <Cap x={W / 2} y={22}>The human road falls · God’s road holds</Cap>
      <path d={xs.map((x, i) => `${i ? 'L' : 'M'}${x} ${hy(i)}`).join(' ')} fill="none" stroke="var(--rust)" strokeWidth="1.2" />
      {human.map((w, i) => (
        <g key={w}>
          {i === 0 ? (
            <>
              <Hero cx={xs[i]} cy={hy(i)} r={9} />
              <Rays x={xs[i]} y={hy(i)} r={12} />
            </>
          ) : i === 8 ? (
            <Grave x={xs[i]} y={hy(i) + 2} s={1.1} />
          ) : (
            <circle cx={xs[i]} cy={hy(i)} r={4} fill="var(--rust)" />
          )}
          <Cap x={xs[i]} y={hy(i) - (i === 0 ? 24 : 13)} size={7.5}>{w}</Cap>
        </g>
      ))}
      <Region x={30} y={gy - 44} w={500} h={88} />
      <line x1={xs[0]} y1={gy} x2={xs[8] + 22} y2={gy} {...ARROW_SAGE} />
      {god.map((w, i) => (
        <g key={w}>
          <circle cx={xs[i]} cy={gy} r={4} fill="var(--sage-deep)" />
          <Cap x={xs[i]} y={i % 2 ? gy - 14 : gy + 22} size={7} fill="var(--sage-deep)">{w}</Cap>
        </g>
      ))}
      <Cap x={W / 2} y={gy - 54} size={7} fill="var(--muted)">what God keeps doing</Cap>
      <N x={W / 2} y={318}>Next: “But Noah found favor in the eyes of the LORD” · 6:8</N>
    </Frame>
  );
}

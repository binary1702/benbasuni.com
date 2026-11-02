import { W, FS, SANS, Frame, Cap, ARROW_RUST, ARROW_SAGE, Region, Hero, Stop, N } from './Genesis';
import { Person, Rays, City, Grave, Tower, Bricks, Crown, HuntBow, Tent } from './Drawings';

/* Figures for "The Rise of Nations" (Genesis 10–11), one per chapter, in the illustrated map style
   (see _docs/diagram_prompt.md). The series stops at 11:32; 12:2 appears only as a preview. */

const Rule = ({ y }: { y: number }) => <line x1={40} y1={y} x2={W - 40} y2={y} stroke="var(--rule)" />;

/* 1 — The Table of Nations: one family spreads out like a compass from Noah —
   Japheth north (the coastlands), Ham south (Egypt, Canaan), Shem east (Eber's line). */
export function TableOfNations() {
  /** Exactly n dots in rows of `per`, so the count on the page is the count in the text. */
  const cluster = (cx: number, cy: number, c: string, n: number, per: number, mark?: number) => {
    const rows = Math.ceil(n / per);
    return Array.from({ length: n }, (_, j) => {
      const row = Math.floor(j / per);
      const inRow = row === rows - 1 ? n - row * per : per;
      // `mark`: one dot drawn in rust (Shem's cluster marks the line that leads to Abraham)
      return <circle key={j} cx={cx + ((j % per) - (inRow - 1) / 2) * 9} cy={cy + (row - (rows - 1) / 2) * 11} r={3} fill={j === mark ? 'var(--rust)' : c} />;
    });
  };
  const nx = 220; // Noah's column
  return (
    <Frame h={372} title="The table of nations" desc="From Noah the families spread out: Japheth to the north and the coastlands, Ham to the south toward Egypt and Canaan, and Shem to the east through Eber, seventy nations in all. One of Shem’s dots is marked in red: the line that leads to Abraham.">
      <Cap x={W / 2} y={22}>One family · seventy nations</Cap>
      {/* Noah */}
      <Region x={nx - 70} y={156} w={140} h={60} />
      <Person x={nx - 36} y={186} s={1} c="var(--ink)" />
      <Cap x={nx + 18} y={182}>Noah</Cap>
      <N x={nx + 18} y={200} size={10}>Ararat · 8:4</N>
      {/* north: Japheth */}
      <path d={`M${nx} 154 V 104`} {...ARROW_SAGE} />
      <Cap x={nx - 10} y={134} anchor="end" size={7} fill="var(--sage-deep)">north</Cap>
      {cluster(nx, 76, 'var(--charcoal)', 14, 7)}
      <Cap x={nx + 66} y={66} anchor="start" size={8.5}>Japheth</Cap>
      <N x={nx + 66} y={82} anchor="start" fill="var(--ink)">14 nations</N>
      <N x={nx + 66} y={97} anchor="start">the coastlands · 10:5</N>
      {/* south: Ham */}
      <path d={`M${nx} 218 V 268`} {...ARROW_SAGE} />
      <Cap x={nx - 10} y={248} anchor="end" size={7} fill="var(--sage-deep)">south</Cap>
      {cluster(nx, 296, 'var(--charcoal)', 30, 10)}
      <Cap x={nx + 66} y={286} anchor="start" size={8.5}>Ham</Cap>
      <N x={nx + 66} y={302} anchor="start" fill="var(--ink)">30 nations</N>
      <N x={nx + 66} y={317} anchor="start">Egypt · Canaan · 10:6</N>
      {/* east: Shem */}
      <path d={`M${nx + 72} 186 H 382`} {...ARROW_SAGE} />
      <Cap x={337} y={178} size={7} fill="var(--sage-deep)">east</Cap>
      {cluster(440, 186, 'var(--sage-deep)', 26, 9, 25)}
      {/* the rust dot (last in the cluster, at 471.5, 197) is the line that leads to Abraham */}
      <Cap x={471.5} y={214} size={7} fill="var(--rust)">Abraham</Cap>
      <Cap x={440} y={146} size={8.5} fill="var(--sage-deep)">Shem</Cap>
      <N x={440} y={236} fill="var(--ink)">26 nations</N>
      <N x={440} y={251}>Eber’s line · 10:21</N>
      <Rule y={340} />
      <N x={W / 2} y={360}>“from these the nations spread out over the earth” · 10:32</N>
    </Frame>
  );
}

/* 2 — The First Kingdoms: Nimrod, the first mighty one, builds cities in Shinar and Assyria. */
export function FirstKingdoms() {
  return (
    <Frame h={256} title="The first kingdoms" desc="Nimrod, a mighty hunter, becomes the first mighty one on the earth. His kingdom begins at Babel, Erech, Accad and Calneh in Shinar, and from there he builds Nineveh and Calah in Assyria.">
      <Cap x={W / 2} y={22}>The first mighty one</Cap>
      <Person x={90} y={128} s={1.5} c="var(--rust)" />
      <Crown x={90} y={92} s={1} />
      <HuntBow x={122} y={128} s={1} />
      <Cap x={90} y={168} size={8.5} fill="var(--rust)">Nimrod</Cap>
      <N x={90} y={184}>a mighty hunter · 10:9</N>
      <path d="M140 116 C 170 96, 190 90, 214 90" {...ARROW_RUST} />
      <Region x={220} y={48} w={150} h={110} />
      <Cap x={295} y={68}>Shinar</Cap>
      <City x={262} y={104} s={0.9} />
      <City x={328} y={104} s={0.9} />
      <N x={295} y={142} size={10}>Babel · Erech · Accad · Calneh</N>
      <path d="M370 104 H 404" {...ARROW_RUST} />
      <City x={450} y={104} s={1} />
      <Cap x={450} y={68}>Assyria</Cap>
      <N x={450} y={142} size={10}>Nineveh · Calah</N>
      <Rule y={206} />
      <N x={W / 2} y={228} fill="var(--ink)">“The first centers of his kingdom were Babel…” · 10:10</N>
      <N x={W / 2} y={246}>The name Babel appears before its tower</N>
    </Frame>
  );
}

/* 3 — The Tower of Babel: people travel east, settle, make bricks, build up. */
export function TowerOfBabel() {
  return (
    <Frame h={270} title="The tower of Babel" desc="With one language, people journey east and settle in the plain of Shinar. They make bricks and decide to build a city and a tower reaching to the heavens, to make a name for themselves and not be scattered.">
      <Cap x={W / 2} y={22}>Let us make a name</Cap>
      <Person x={70} y={170} s={1} c="var(--ink)" />
      <Person x={92} y={170} s={1} c="var(--ink)" />
      <Person x={114} y={170} s={1} c="var(--ink)" />
      <N x={92} y={204}>one language · 11:1</N>
      <path d="M136 170 H 214" {...ARROW_RUST} />
      <Cap x={175} y={160} size={7.5} fill="var(--rust)">eastward</Cap>
      <Region x={220} y={56} w={190} h={150} />
      <Cap x={315} y={226} size={8}>the plain of Shinar · 11:2</Cap>
      <Tower x={330} y={150} s={2} />
      <Bricks x={256} y={176} s={1.1} />
      <N x={262} y={200} size={10}>bricks · 11:3</N>
      <path d="M330 112 V 66" {...ARROW_RUST} />
      <N x={322} y={80} anchor="end" fill="var(--rust)">“to the heavens”</N>
      <Hero cx={486} cy={110} r={8} fill="var(--rust)" />
      <Cap x={486} y={92} size={8} fill="var(--rust)">our name</Cap>
      <N x={486} y={136} fill="var(--rust)">“lest we be scattered”</N>
      <N x={486} y={151} size={9.5} fill="var(--rust)">11:4</N>
      <Rule y={238} />
      <N x={W / 2} y={256}>East again, as in 3:24 and 4:16</N>
    </Frame>
  );
}

/* 4 — Let Us Go Down: they built up; the LORD came down; the people were scattered. */
export function LetUsGoDown() {
  const out = [-150, -110, -60, 60, 110, 150];
  return (
    <Frame h={270} title="Let us go down" desc="The LORD came down to see the city and the tower. He confused their language and scattered them over all the earth, and the city was called Babel.">
      <Cap x={W / 2} y={22}>They built up · God came down</Cap>
      <Region x={210} y={36} w={140} h={66} />
      <Hero cx={280} cy={68} r={13} />
      <Rays x={280} y={68} r={16} />
      <path d="M280 104 V 140" {...ARROW_SAGE} />
      <N x={292} y={126} anchor="start" fill="var(--sage-deep)">“came down to see” · 11:5</N>
      <Tower x={280} y={170} s={1.5} />
      <Cap x={280} y={208} size={8}>Babel</Cap>
      <N x={280} y={224} fill="var(--rust)">confused · 11:9</N>
      {out.map((dx) => (
        <g key={dx}>
          <path d={`M${280 + Math.sign(dx) * 40} 180 L${280 + dx} ${dx % 20 === 0 ? 150 : 196}`} {...ARROW_RUST} />
          <Person x={280 + dx + Math.sign(dx) * 18} y={dx % 20 === 0 ? 150 : 196} s={0.8} c="var(--rust)" />
        </g>
      ))}
      <N x={90} y={232} fill="var(--rust)">scattered · 11:8</N>
      <N x={470} y={232} fill="var(--rust)">over all the earth</N>
      <Rule y={242} />
      <N x={W / 2} y={262}>They built to reach heaven; God still had to come down to see it</N>
    </Frame>
  );
}

/* 5 — The Generations of Shem: ten generations, lives growing shorter, ending in Abram. */
export function GenerationsOfShem() {
  const gens: [string, number][] = [
    ['Shem', 600], ['Arphaxad', 438], ['Shelah', 433], ['Eber', 464], ['Peleg', 239],
    ['Reu', 239], ['Serug', 230], ['Nahor', 148], ['Terah', 205],
  ];
  const x0 = 64;
  const step = 50;
  const base = 218;
  const h = (yrs: number) => (yrs / 600) * 140;
  return (
    <Frame h={286} title="The generations of Shem" desc="From Shem to Terah, nine generations whose lifespans fall from 600 years to around 200, ending in Abram, Nahor and Haran.">
      <Cap x={W / 2} y={22}>Ten generations · shorter lives</Cap>
      <line x1={40} y1={base} x2={520} y2={base} stroke="var(--charcoal)" strokeWidth="0.9" />
      <path d={gens.map(([, y], i) => `${i ? 'L' : 'M'}${x0 + i * step} ${base - h(y)}`).join(' ')} fill="none" stroke="var(--rust)" strokeWidth="1.1" strokeDasharray="3 3" />
      {gens.map(([n, y], i) => {
        const x = x0 + i * step;
        return (
          <g key={n}>
            <line x1={x} y1={base} x2={x} y2={base - h(y)} stroke="var(--charcoal)" strokeWidth="1.4" />
            <circle cx={x} cy={base - h(y)} r={3.4} fill="var(--rust)" />
            <N x={x} y={base - h(y) - 8} size={9.5}>{String(y)}</N>
            <Cap x={x} y={base + (i % 2 ? 30 : 16)} size={7}>{n}</Cap>
          </g>
        );
      })}
      <Hero cx={x0 + 9 * step} cy={base - 34} r={11} />
      <Rays x={x0 + 9 * step} y={base - 34} r={14} />
      <Cap x={x0 + 9 * step} y={base + 16} size={7.5} fill="var(--sage-deep)">Abram</Cap>
      <N x={x0 + 9 * step} y={base - 62} fill="var(--sage-deep)">11:26</N>
      <Rule y={258} />
      <N x={W / 2} y={278}>Years lived · 11:10–32</N>
    </Frame>
  );
}

/* 6 — The Family of Abram: from Ur toward Canaan, stopped in Haran. */
export function FamilyOfAbram() {
  return (
    <Frame h={272} title="The family of Abram" desc="Terah takes Abram, Sarai and Lot from Ur of the Chaldeans to go to Canaan, but they settle in Haran, where Terah dies. Haran had already died in Ur, and Sarai was barren.">
      <Cap x={W / 2} y={22}>Set out for Canaan · stopped in Haran</Cap>
      {/* Ur */}
      <City x={420} y={190} s={1.1} />
      <Cap x={420} y={226} size={8}>Ur of the Chaldeans</Cap>
      <Grave x={474} y={196} s={0.8} />
      <N x={474} y={164} size={10}>Haran died · 11:28</N>
      {/* the journey */}
      <path d="M396 176 C 350 128, 310 100, 276 94" {...ARROW_RUST} />
      {/* four travellers: Terah, Abram, Sarai, Lot */}
      <Person x={318} y={92} s={0.9} c="var(--ink)" />
      <Person x={336} y={100} s={0.9} c="var(--ink)" />
      <Person x={354} y={110} s={0.9} c="var(--ink)" />
      <Person x={372} y={122} s={0.9} c="var(--ink)" />
      <N x={386} y={110} anchor="start" size={10}>Terah · Abram · Sarai · Lot</N>
      {/* Haran */}
      <Region x={150} y={52} w={120} h={86} />
      <Tent x={190} y={92} s={1.3} />
      <Grave x={238} y={98} s={0.8} />
      <Cap x={210} y={128} size={8}>Haran</Cap>
      <N x={210} y={154} fill="var(--rust)">Terah died · 205 · 11:32</N>
      {/* Canaan: not reached */}
      <path d="M150 92 H 96" stroke="var(--muted)" strokeWidth="1" strokeDasharray="3 4" />
      <Stop cx={84} cy={92} r={8} stroke="var(--muted)" fill="none" />
      <Cap x={84} y={70} size={8} fill="var(--muted)">Canaan</Cap>
      <N x={84} y={116} size={10}>not yet</N>
      <Stop cx={230} cy={206} r={6} stroke="var(--rust)" fill="none" />
      <N x={230} y={228} size={10}>Sarai was barren · 11:30</N>
      <Rule y={242} />
      <N x={W / 2} y={258}>The study ends here, at 11:32</N>
    </Frame>
  );
}

/* 7 — From Babel to Abraham: our name, reached for · His name, promised. */
export function BabelToAbraham() {
  return (
    <Frame h={270} title="From Babel to Abraham" desc="At Babel humanity says, let us make a name for ourselves, and builds upward; the result is scattering. In Genesis 12:2 God says to Abram, I will make your name great, and the movement is downward, a gift.">
      <Cap x={W / 2} y={22}>Our name · or His promise</Cap>
      {/* Babel */}
      <Tower x={140} y={170} s={1.8} />
      <path d="M140 132 V 64" {...ARROW_RUST} />
      <Cap x={140} y={52} size={8} fill="var(--rust)">reaching up</Cap>
      <N x={140} y={214} fill="var(--ink)">“let us make a name for ourselves”</N>
      <N x={140} y={230}>11:4 · scattered</N>
      <line x1={280} y1={56} x2={280} y2={226} stroke="var(--rule)" />
      {/* the promise */}
      <Region x={350} y={42} w={140} h={66} />
      <Hero cx={420} cy={74} r={13} />
      <Rays x={420} y={74} r={16} />
      <path d="M420 110 V 160" {...ARROW_SAGE} />
      <Cap x={432} y={140} anchor="start" size={8} fill="var(--sage-deep)">given</Cap>
      <Person x={420} y={186} s={1.2} c="var(--sage-deep)" />
      <N x={420} y={214} fill="var(--ink)">“I will make your name great”</N>
      <N x={420} y={230}>12:2 · blessed to bless</N>
      <Rule y={242} />
      <N x={W / 2} y={262}>Genesis 1–11 ends at Babel; Genesis 12 begins with a promise</N>
    </Frame>
  );
}

/* 2b — Nimrod's line: Noah → Ham → Cush → Nimrod. The other branches are drawn faded so the one
   line that leads to the first kingdom stands out. Sons are ordered Shem, Japheth, Ham (birth order). */
export function NimrodLine() {
  const faint = 'var(--rule)';
  const sage = 'var(--sage-deep)';
  const line = (d: string, c: string, w = 1) => <path d={d} stroke={c} strokeWidth={w} fill="none" />;
  return (
    // narrower than the other figures: a small family tree, so it sits centered instead of spanning the panel
    <div className="mx-auto max-w-[22rem] md:max-w-[28rem]">
    <Frame h={258} title="Nimrod’s Ancestry" desc="Noah had three sons: Shem, Japheth, and Ham. Ham’s sons were Cush, Mizraim (Egypt), Put (Libya), and Canaan. Cush was the father of Nimrod, who began to be a mighty one on the earth. Shem’s line, many generations later, leads to Abraham.">
      {/* title centered on the cropped frame (x 80–530) */}
      <Cap x={305} y={22}>Nimrod’s Ancestry</Cap>
      <g>
      {/* Noah → his three sons */}
      <Cap x={230} y={56}>Noah</Cap>
      {line('M230 62 V 76 M120 76 H 360 M120 76 V 92 M220 76 V 92', faint)}
      {line('M230 62 V 76 H 360 V 92', sage, 1.4)}
      <Cap x={120} y={106} size={8.5} fill="var(--muted)">Shem</Cap>
      {/* Shem's line, many generations down, to Abraham (11:10–26) */}
      <path d="M120 114 V 206" stroke="var(--gold)" strokeWidth={1} strokeDasharray="3 4" fill="none" opacity={0.8} />
      <Cap x={120} y={224} size={8.5} fill="var(--gold)">Abraham</Cap>
      <N x={120} y={242} size={9.5}>11:10–26</N>
      <Cap x={220} y={106} size={8.5} fill="var(--muted)">Japheth</Cap>
      <Cap x={360} y={106} size={8.5} fill={sage}>Ham</Cap>
      <N x={360} y={121} size={9.5}>10:6</N>
      {/* Ham → his four sons */}
      {line('M360 126 V 136 M270 136 H 495 M340 136 V 150 M420 136 V 150 M495 136 V 150', faint)}
      {line('M360 126 V 136 H 270 V 150', sage, 1.4)}
      <Cap x={270} y={164} size={8.5} fill={sage}>Cush</Cap>
      <Cap x={340} y={164} size={8.5} fill="var(--muted)">Mizraim</Cap>
      <N x={340} y={179} size={9.5}>Egypt</N>
      <Cap x={420} y={164} size={8.5} fill="var(--muted)">Put</Cap>
      <N x={420} y={179} size={9.5}>Libya</N>
      <Cap x={495} y={164} size={8.5} fill="var(--muted)">Canaan</Cap>
      {/* Cush → Nimrod */}
      <path d="M270 172 V 206" {...ARROW_RUST} />
      <text x={270} y={226} textAnchor="middle" fontSize={13 * FS} fontWeight={700} letterSpacing="1.8" fontFamily={SANS} fill="var(--rust)">
        NIMROD
      </text>
      <N x={270} y={244} fill="var(--ink)">“a mighty one on the earth” · 10:8</N>
      </g>
    </Frame>
    </div>
  );
}

import { W, Frame, Cap, ARROW_RUST, ARROW_SAGE, Region, Hero, Stop, N } from './Genesis';
import { Person, Rays, City, Grave, Tower, Bricks, Crown, HuntBow, Tent } from './Drawings';

/* Figures for "The Rise of Nations" (Genesis 10–11), one per chapter, in the illustrated map style
   (see _docs/diagram_prompt.md). The series stops at 11:32; 12:2 appears only as a preview. */

const Rule = ({ y }: { y: number }) => <line x1={40} y1={y} x2={W - 40} y2={y} stroke="var(--rule)" />;

/* 1 — The Table of Nations: one family branches into seventy nations. */
export function TableOfNations() {
  const branches = [
    { x: 110, name: 'Japheth', n: '14 nations', where: 'north · the coastlands', c: 'var(--ink)' },
    { x: 280, name: 'Ham', n: '30 nations', where: 'south · Egypt · Canaan', c: 'var(--ink)' },
    { x: 450, name: 'Shem', n: '26 nations', where: 'east · Eber’s line', c: 'var(--sage-deep)' },
  ];
  return (
    <Frame h={280} title="The table of nations" desc="The sons of Noah, Japheth, Ham and Shem, branch into seventy nations spread across the earth after the flood.">
      <Cap x={W / 2} y={22}>One family · seventy nations</Cap>
      <Region x={210} y={36} w={140} h={60} />
      <Person x={250} y={68} s={1} c="var(--ink)" />
      <Cap x={300} y={70}>Noah</Cap>
      {branches.map((b, i) => (
        <g key={b.name}>
          <path d={`M280 96 C 280 120, ${b.x} 110, ${b.x} 136`} {...ARROW_SAGE} />
          <Cap x={b.x} y={154} size={8.5} fill={b.c}>{b.name}</Cap>
          {Array.from({ length: 9 }, (_, j) => {
            const a = (j / 9) * Math.PI * 2;
            const r = 18 + (j % 3) * 8;
            return <circle key={j} cx={b.x + Math.cos(a) * r * 1.6} cy={190 + Math.sin(a) * r * 0.55} r={3} fill={i === 2 ? 'var(--sage-deep)' : 'var(--charcoal)'} />;
          })}
          <N x={b.x} y={224} fill="var(--ink)">{b.n}</N>
          <N x={b.x} y={240} size={10}>{b.where}</N>
        </g>
      ))}
      <Rule y={250} />
      <N x={W / 2} y={266}>“from these the nations spread out over the earth” · 10:32</N>
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
      <path d="M330 112 V 46" {...ARROW_RUST} />
      <N x={342} y={56} anchor="start" fill="var(--rust)">“to the heavens”</N>
      <Hero cx={470} cy={110} r={8} fill="var(--rust)" />
      <Cap x={470} y={92} size={8} fill="var(--rust)">our name</Cap>
      <N x={470} y={136} fill="var(--rust)">“lest we be scattered” · 11:4</N>
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
          <Person x={280 + dx + Math.sign(dx) * 14} y={dx % 20 === 0 ? 150 : 196} s={0.8} c="var(--rust)" />
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
    ['Shem', 600], ['Arpachshad', 438], ['Shelah', 433], ['Eber', 464], ['Peleg', 239],
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
      <Hero cx={x0 + 9 * step} cy={base - 26} r={11} />
      <Rays x={x0 + 9 * step} y={base - 26} r={14} />
      <Cap x={x0 + 9 * step} y={base + 16} size={7.5} fill="var(--sage-deep)">Abram</Cap>
      <N x={x0 + 9 * step} y={base - 52} fill="var(--sage-deep)">11:26</N>
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
      <Person x={330} y={116} s={0.9} c="var(--ink)" />
      <Person x={348} y={124} s={0.9} c="var(--ink)" />
      <Person x={366} y={134} s={0.9} c="var(--ink)" />
      <N x={384} y={118} anchor="start" size={10}>Terah · Abram · Sarai · Lot</N>
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

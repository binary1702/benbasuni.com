import { W, Frame, Cap, ARROW, ARROW_RUST, ARROW_SAGE, Hero, Stop, N } from './Genesis';
import { Person, Rays, City, Tent, Mountain, Altar, Lamb, Thorns, Stars } from './Drawings';

/* Figures for "The Mountain of the Lord" (Genesis 22), one per chapter, in the illustrated map style
   (see _docs/diagram_prompt.md). Sage = what God gives / provides, rust = what is asked. */

const Rule = ({ y }: { y: number }) => <line x1={40} y1={y} x2={W - 40} y2={y} stroke="var(--rule)" />;
const DASH_SAGE = { stroke: 'var(--sage-deep)', strokeWidth: 1.2, strokeDasharray: '4 3', markerEnd: 'url(#gn-arr-sage)', fill: 'none' } as const;

/* 1 — God Tested Abraham: the first call and the last. */
export function GodTestedAbraham() {
  const y = 152;
  return (
    <Frame h={254} title="God tested Abraham" desc="The first call in Genesis 12 asked Abraham to leave his father's house for a land God would show him. The last, in Genesis 22, asks him to take his only son Isaac, whom he loves, to a mountain God will show him.">
      <Cap x={W / 2} y={22}>His past · then his future</Cap>
      <Hero cx={280} cy={62} r={10} />
      <Rays x={280} y={62} r={14} />
      <N x={306} y={66} anchor="start" size={10}>God tested Abraham · 22:1</N>
      <line x1={280} y1={84} x2={280} y2={120} {...ARROW_SAGE} />
      <City x={86} y={y - 2} s={0.9} />
      <Cap x={86} y={y - 34} size={8}>Genesis 12</Cap>
      <N x={90} y={y + 32}>leave your father’s house</N>
      <line x1={118} y1={y} x2={236} y2={y} {...ARROW} />
      <N x={178} y={y - 10} size={10}>“go” · 12:1</N>
      <Person x={268} y={y} s={1.3} />
      <Person x={296} y={y + 5} s={0.9} c="var(--sage-deep)" />
      <N x={282} y={y + 38} size={10} fill="var(--ink)">your son · your only son · whom you love</N>
      <line x1={318} y1={y} x2={432} y2={y} {...ARROW_RUST} />
      <N x={374} y={y - 10} size={10}>“go” · 22:2</N>
      <Mountain x={476} y={y - 4} s={1.1} />
      <Cap x={476} y={y - 34} size={8}>Genesis 22</Cap>
      <N x={476} y={y + 32}>offer him there</N>
      <Rule y={212} />
      <N x={W / 2} y={234}>“Through Isaac your offspring will be reckoned” · 21:12</N>
    </Frame>
  );
}

/* 2 — On the Third Day: three days, then the two of them alone. */
export function OnTheThirdDay() {
  return (
    <Frame h={250} title="On the third day" desc="Abraham travels three days from Beersheba to Moriah. He leaves the servants, saying we will return, lays the wood on Isaac, carries the fire and the knife himself, and tells his son that God will provide the lamb.">
      <Cap x={W / 2} y={22}>Three days · two walked on together</Cap>
      <Tent x={62} y={170} s={1.2} />
      <Cap x={66} y={200} size={8}>Beersheba</Cap>
      <line x1={88} y1={170} x2={300} y2={156} stroke="var(--charcoal)" strokeWidth="0.9" />
      {[0, 1, 2].map((i) => (
        <g key={i}>
          <Stop cx={140 + i * 56} cy={166.5 - i * 3.7} r={5} />
          <Cap x={140 + i * 56} y={150 - i * 3.7} size={7.5}>{String(i + 1)}</Cap>
        </g>
      ))}
      <N x={196} y={190} size={10}>three days · 22:4</N>
      <Person x={310} y={156} s={0.7} />
      <Person x={324} y={156} s={0.7} />
      <N x={320} y={190} size={10}>“we will return” · 22:5</N>
      <Mountain x={468} y={132} s={2.3} />
      <line x1={336} y1={152} x2={398} y2={128} {...ARROW_SAGE} />
      <Person x={366} y={126} s={0.9} />
      <Person x={388} y={116} s={0.9} c="var(--sage-deep)" />
      <N x={352} y={84} size={10}>the fire and the knife · the wood · 22:6</N>
      <Cap x={470} y={186} size={8}>Moriah</Cap>
      <Rule y={210} />
      <N x={W / 2} y={232}>“God Himself will provide the lamb” · 22:8</N>
    </Frame>
  );
}

/* 3 — The Altar: the knife stopped. */
export function TheAltar() {
  return (
    <Frame h={262} title="The altar" desc="Abraham builds the altar, binds Isaac and takes the knife. The angel of the LORD calls from heaven, Abraham, Abraham, and forbids him to lay a hand on the boy: now I know that you fear God.">
      <Cap x={W / 2} y={22}>He did not withhold · he was stopped</Cap>
      {/* the altar, with Isaac on the wood */}
      <rect x={252} y={176} width={24} height={12} rx={2} fill="none" stroke="var(--charcoal)" strokeWidth="1" />
      <rect x={280} y={176} width={24} height={12} rx={2} fill="none" stroke="var(--charcoal)" strokeWidth="1" />
      <rect x={266} y={162} width={24} height={12} rx={2} fill="none" stroke="var(--charcoal)" strokeWidth="1" />
      <line x1={258} y1={158} x2={300} y2={158} stroke="var(--charcoal)" strokeWidth="1.4" strokeLinecap="round" />
      <circle cx={262} cy={150} r={4} fill="var(--sage-deep)" />
      <line x1={268} y1={151} x2={298} y2={151} stroke="var(--sage-deep)" strokeWidth="2" strokeLinecap="round" />
      <Cap x={278} y={208} size={8}>Moriah</Cap>
      <Person x={204} y={166} s={1.4} />
      <path d="M222 150 L238 122 M218 144 L228 150" fill="none" stroke="var(--charcoal)" strokeWidth="1.8" strokeLinecap="round" />
      <N x={116} y={170} size={10}>“Here I am”</N>
      <N x={116} y={184} size={9.5}>22:1 · 7 · 11</N>
      <Hero cx={404} cy={70} r={10} />
      <Rays x={404} y={70} r={14} />
      <Cap x={404} y={46} size={8}>The angel of the LORD</Cap>
      <path d="M390 80 C 340 92, 290 104, 246 124" {...ARROW_SAGE} />
      <N x={318} y={88} anchor="end" size={10}>“Abraham, Abraham!” · 22:11</N>
      <N x={424} y={150} fill="var(--ink)">“Do not lay a hand</N>
      <N x={424} y={164} fill="var(--ink)">on the boy” · 22:12</N>
      <Rule y={222} />
      <N x={W / 2} y={244}>“Now I know that you fear God” · 22:12</N>
    </Frame>
  );
}

/* 4 — The LORD Will Provide: a ram in place of the son, and a name that looks ahead. */
export function TheLordWillProvide() {
  const y = 152;
  return (
    <Frame h={260} title="The LORD will provide" desc="Abraham sees a ram caught in a thicket and offers it in place of his son. He names the place The LORD Will Provide. The temple is later built on Mount Moriah, and John calls Jesus the Lamb of God.">
      <Cap x={W / 2} y={22}>In place of his son</Cap>
      <Lamb x={96} y={y - 2} s={1.4} />
      <Thorns x={96} y={y + 18} s={1.1} c="var(--charcoal)" />
      <Cap x={96} y={y + 46} size={8}>A ram</Cap>
      <N x={96} y={y + 60} size={10}>caught in a thicket</N>
      <line x1={128} y1={y} x2={206} y2={y} {...ARROW_SAGE} />
      <N x={140} y={108} size={10} fill="var(--ink)">in place of his son · 22:13</N>
      <Altar x={238} y={y + 6} s={1.6} />
      <Person x={298} y={y} s={1.1} c="var(--sage-deep)" />
      <N x={298} y={y + 46} size={10}>Isaac lives</N>
      <line x1={322} y1={y} x2={378} y2={y} {...DASH_SAGE} />
      <Stop cx={398} cy={y} r={7} stroke="var(--sage-deep)" />
      <Cap x={398} y={y - 20} size={7.5}>The temple</Cap>
      <N x={398} y={y + 26} size={10}>Mount Moriah</N>
      <N x={398} y={y + 40} size={9.5}>2 Chr 3:1</N>
      <line x1={414} y1={y} x2={466} y2={y} {...DASH_SAGE} />
      <Hero cx={490} cy={y} r={9} />
      <Rays x={490} y={y} r={13} />
      <Cap x={490} y={y - 24} size={7.5}>The Lamb</Cap>
      <N x={490} y={y + 30} size={10}>John 1:29</N>
      <Rule y={224} />
      <N x={W / 2} y={244}>“On the mountain of the LORD it will be provided” · 22:14</N>
    </Frame>
  );
}

/* 5 — By Myself I Have Sworn: the promise, now an oath. */
export function ByMyselfIHaveSworn() {
  const cols: [number, string, string][] = [
    [130, 'Descendants', 'stars and sand · 22:17'],
    [280, 'The gates', 'of their enemies · 22:17'],
    [430, 'All nations', 'blessed · 22:18'],
  ];
  return (
    <Frame h={256} title="By Myself I have sworn" desc="After the test, God swears by Himself to bless Abraham: descendants like the stars and the sand, possession of the gates of their enemies, and blessing for all nations through his offspring. Meanwhile Rebekah has been born to Abraham's kin.">
      <Cap x={W / 2} y={22}>The promise · now an oath</Cap>
      <Hero cx={280} cy={64} r={10} />
      <Rays x={280} y={64} r={14} />
      <N x={300} y={60} anchor="start" fill="var(--ink)">“By Myself I have sworn”</N>
      <N x={300} y={74} anchor="start" size={9.5}>22:16</N>
      <path d="M268 78 C 220 96, 170 112, 140 132" {...ARROW_SAGE} />
      <line x1={280} y1={86} x2={280} y2={132} {...ARROW_SAGE} />
      <path d="M292 78 C 340 96, 390 112, 420 132" {...ARROW_SAGE} />
      <Stars x={130} y={156} s={1.5} />
      <City x={280} y={158} s={0.9} />
      {Array.from({ length: 12 }, (_, i) => <circle key={i} cx={406 + (i % 6) * 10} cy={150 + Math.floor(i / 6) * 11} r={3} fill="var(--sage-deep)" />)}
      {cols.map(([x, cap, note]) => (
        <g key={cap}>
          <Cap x={x} y={190} size={8}>{cap}</Cap>
          <N x={x} y={204} size={10}>{note}</N>
        </g>
      ))}
      <Rule y={220} />
      <N x={W / 2} y={240}>Meanwhile, among Abraham’s kin: Rebekah is born · 22:23</N>
    </Frame>
  );
}

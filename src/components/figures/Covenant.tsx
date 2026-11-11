import { W, Frame, Cap, ARROW, ARROW_RUST, ARROW_SAGE, Region, Hero, Stop, N } from './Genesis';
import { Person, Rays, Tent, Stars, Waves, Eye } from './Drawings';

/* Figures for "The Covenant" (Genesis 15–17), one per chapter, in the illustrated map style
   (see _docs/diagram_prompt.md). Sage = what God gives / the promise, rust = human plans and their cost. */

const Rule = ({ y }: { y: number }) => <line x1={40} y1={y} x2={W - 40} y2={y} stroke="var(--rule)" />;

/** A seeded scatter of points (integer LCG), identical on server and client. */
function scatter(n: number, seed: number, x: number, w: number, y: number, h: number) {
  let s = seed;
  const next = () => (s = (Math.imul(s, 1103515245) + 12345) & 0x7fffffff) / 0x7fffffff;
  return Array.from({ length: n }, () => ({ x: Math.round(x + next() * w), y: Math.round(y + next() * h) }));
}
const SKY = scatter(46, 11, 246, 276, 52, 92);

/* 1 — Your Very Great Reward: no child, and a sky to count. */
export function UnderTheStars() {
  return (
    <Frame h={260} title="Under the stars" desc="Abram stands outside his tent, childless, with a servant as his heir. The LORD takes him outside and tells him to count the stars: so shall his offspring be. Abram believes the LORD, and it is credited to him as righteousness.">
      <Cap x={W / 2} y={22}>No child · count the stars</Cap>
      <Tent x={96} y={166} s={1.4} />
      <Person x={158} y={164} s={1.3} c="var(--sage-deep)" />
      <Cap x={126} y={200} size={8}>Abram</Cap>
      <N x={126} y={214}>“I remain childless” · 15:2</N>
      <line x1={174} y1={146} x2={238} y2={112} {...ARROW_SAGE} />
      <Cap x={196} y={116} anchor="end" size={7.5} fill="var(--sage-deep)">look</Cap>
      {SKY.map((d, i) => <circle key={i} cx={d.x} cy={d.y} r={i % 5 === 0 ? 2 : 1.2} fill="var(--sage-deep)" />)}
      <Stars x={300} y={84} s={1.2} />
      <Stars x={452} y={108} s={1.1} />
      <N x={384} y={174} fill="var(--ink)">“So shall your offspring be” · 15:5</N>
      <N x={384} y={190}>one who comes from your own body · 15:4</N>
      <Rule y={226} />
      <N x={W / 2} y={246}>Abram believed the LORD · credited to him as righteousness · 15:6</N>
    </Frame>
  );
}

/* 2 — Between the Pieces: only one party walks the path. */
export function BetweenThePieces() {
  const xs = [236, 316, 396];
  return (
    <Frame h={266} title="Between the pieces" desc="Abram lays out the halves of the animals and falls into a deep sleep. A smoking firepot and a flaming torch pass between the pieces: God alone walks the path of the oath, and gives the land to Abram's descendants.">
      <Cap x={W / 2} y={22}>God alone walked the path</Cap>
      {xs.map((x) => (
        <g key={x}>
          <rect x={x - 26} y={68} width={52} height={22} rx={6} fill="var(--ivory)" stroke="var(--charcoal)" strokeWidth="0.9" />
          <rect x={x - 26} y={170} width={52} height={22} rx={6} fill="var(--ivory)" stroke="var(--charcoal)" strokeWidth="0.9" />
        </g>
      ))}
      <line x1={184} y1={130} x2={446} y2={130} {...ARROW_SAGE} />
      <Hero cx={300} cy={130} r={9} />
      <Rays x={300} y={130} r={13} />
      <Cap x={316} y={112} size={7.5} fill="var(--sage-deep)">firepot and torch · 15:17</Cap>
      <N x={316} y={158}>the path between the halves</N>
      {/* Abram asleep */}
      <circle cx={70} cy={150} r={4} fill="var(--ink)" />
      <line x1={76} y1={151} x2={112} y2={151} stroke="var(--ink)" strokeWidth="2" strokeLinecap="round" />
      <Cap x={92} y={128} size={8}>Abram</Cap>
      <N x={92} y={176}>a deep sleep · 15:12</N>
      <Cap x={496} y={126} size={8}>The land</Cap>
      <N x={496} y={146}>“I have given”</N>
      <N x={496} y={160} size={9.5}>15:18</N>
      <N x={316} y={212}>heifer · goat · ram, cut in two · 15:10</N>
      <Rule y={228} />
      <N x={W / 2} y={250}>Abram took no oath · the covenant stands on God’s</N>
    </Frame>
  );
}

/* 3 — The Plan of Sarai: took, gave, fled. */
export function PlanOfSarai() {
  const y = 122;
  return (
    <Frame h={252} title="The plan of Sarai" desc="After ten years in Canaan, Sarai takes her Egyptian maidservant Hagar and gives her to Abram. Hagar conceives, despises her mistress, is treated harshly and flees into the desert.">
      <Cap x={W / 2} y={22}>Took · gave · fled</Cap>
      <Region x={36} y={56} w={300} h={136} />
      <Cap x={186} y={76} size={8}>Abram’s tent · ten years in Canaan</Cap>
      <Person x={86} y={y} s={1.2} />
      <Cap x={86} y={y + 30} size={7.5}>Sarai</Cap>
      <line x1={104} y1={y} x2={166} y2={y} {...ARROW_RUST} />
      <Cap x={135} y={y - 8} size={7} fill="var(--rust)">took</Cap>
      <Person x={186} y={y} s={1.2} c="var(--rust)" />
      <Cap x={186} y={y + 30} size={7.5}>Hagar</Cap>
      <line x1={204} y1={y} x2={266} y2={y} {...ARROW_RUST} />
      <Cap x={235} y={y - 8} size={7} fill="var(--rust)">gave</Cap>
      <Person x={286} y={y} s={1.2} />
      <Cap x={286} y={y + 30} size={7.5}>Abram</Cap>
      <N x={186} y={180} size={10}>“perhaps I can build a family by her” · 16:2</N>
      <path d={`M340 ${y} C 380 ${y}, 400 ${y}, 440 ${y}`} {...ARROW_RUST} />
      <Stop cx={464} cy={y} r={7} stroke="var(--rust)" fill="none" />
      <Cap x={470} y={y - 26} size={8}>The desert</Cap>
      <N x={470} y={y + 30}>Hagar fled · 16:6</N>
      <Rule y={212} />
      <N x={W / 2} y={234}>They believed the promise · they did not wait for it</N>
    </Frame>
  );
}

/* 4 — The God Who Sees: found at a spring. */
export function GodWhoSees() {
  const y = 142;
  return (
    <Frame h={246} title="The God who sees" desc="Hagar flees toward Shur, on the road to Egypt. The angel of the LORD finds her by a spring, calls her by name, tells her to return, and promises her offspring too numerous to count. She names him the God who sees me.">
      <Cap x={W / 2} y={22}>Found · heard · seen</Cap>
      <Hero cx={280} cy={60} r={10} />
      <Rays x={280} y={60} r={14} />
      <Eye x={238} y={60} s={0.9} c="var(--sage-deep)" />
      <N x={300} y={56} anchor="start" size={10} fill="var(--ink)">the angel of the LORD</N>
      <N x={300} y={70} anchor="start" size={10}>found her · 16:7</N>
      <line x1={280} y1={78} x2={280} y2={90} stroke="var(--sage-deep)" strokeWidth="1.3" />
      <Region x={186} y={92} w={188} h={102} />
      <Cap x={280} y={112} size={8}>The spring</Cap>
      <Waves x={246} y={y + 6} w={28} />
      <Person x={312} y={y} s={1.2} c="var(--rust)" />
      <N x={280} y={184} size={10}>“the God who sees me” · 16:13</N>
      <line x1={182} y1={y} x2={96} y2={y} stroke="var(--muted)" strokeWidth="1" strokeDasharray="3 4" />
      <Cap x={84} y={y - 20} size={8} fill="var(--muted)">Shur · Egypt</Cap>
      <N x={84} y={y + 22}>where she was going</N>
      <line x1={378} y1={y} x2={452} y2={y} {...ARROW_SAGE} />
      <Tent x={486} y={y} s={1.2} />
      <Cap x={484} y={y + 30} size={8}>Abram’s tent</Cap>
      <N x={484} y={y + 44}>“return” · 16:9</N>
      <Rule y={206} />
      <N x={W / 2} y={228}>Ishmael · “God hears” · 16:11</N>
    </Frame>
  );
}

/* 5 — A New Name: thirteen silent years, then a name that is not yet true. */
export function NewName() {
  const rows: [number, string, string, string][] = [
    [164, 'Abram', 'Abraham', 'father of many nations · 17:5'],
    [194, 'Sarai', 'Sarah', 'mother of nations · 17:16'],
  ];
  return (
    <Frame h={282} title="A new name" desc="Thirteen years pass between the birth of Ishmael and the next recorded word from God. At ninety-nine, God Almighty appears, renames Abram as Abraham and Sarai as Sarah, and gives circumcision as the sign of an everlasting covenant.">
      <Cap x={W / 2} y={22}>A name not yet true</Cap>
      <Stop cx={90} cy={92} r={6} />
      <Cap x={90} y={72} size={8}>86</Cap>
      <N x={90} y={116}>Ishmael born · 16:16</N>
      <line x1={100} y1={92} x2={346} y2={92} stroke="var(--muted)" strokeWidth="1" strokeDasharray="3 4" />
      <N x={224} y={84}>thirteen years · no word recorded</N>
      <Hero cx={368} cy={92} r={11} />
      <Rays x={368} y={92} r={15} />
      <Cap x={368} y={66} size={8}>99</Cap>
      <N x={392} y={88} anchor="start" fill="var(--ink)">“I am God Almighty”</N>
      <N x={392} y={102} anchor="start" size={9.5}>17:1</N>
      {rows.map(([y, from, to, note]) => (
        <g key={from}>
          <Cap x={106} y={y} size={8} fill="var(--muted)">{from}</Cap>
          <line x1={144} y1={y - 3} x2={206} y2={y - 3} {...ARROW_SAGE} />
          <Cap x={252} y={y} size={8.5} fill="var(--sage-deep)">{to}</Cap>
          <N x={300} y={y} anchor="start">{note}</N>
        </g>
      ))}
      <Cap x={106} y={224} size={8} fill="var(--muted)">The sign</Cap>
      <line x1={144} y1={221} x2={206} y2={221} {...ARROW} />
      <Cap x={252} y={224} size={8}>A mark</Cap>
      <N x={300} y={224} anchor="start">in the flesh · everlasting · 17:13</N>
      <Rule y={244} />
      <N x={W / 2} y={266}>“To be your God and the God of your descendants” · 17:7</N>
    </Frame>
  );
}

/* 6 — Sarah Will Bear a Son: the son he had, and the son he could not have. */
export function TwoSons() {
  return (
    <Frame h={292} title="Two sons" desc="Abraham, ninety-nine, laughs and asks that Ishmael might live under God's blessing. God answers that Ishmael will be blessed and father twelve rulers, but the covenant will be established with Isaac, whom Sarah will bear the next year.">
      <Cap x={W / 2} y={22}>The son he had · the son promised</Cap>
      <Cap x={280} y={48} size={8}>Abraham · 99</Cap>
      <Person x={280} y={78} s={1.3} />
      <N x={300} y={82} anchor="start" size={10}>laughed · 17:17</N>
      <path d="M268 100 C 230 120, 190 136, 162 158" {...ARROW} fill="none" />
      <path d="M292 100 C 330 120, 370 136, 398 158" {...ARROW_SAGE} />
      <Person x={150} y={184} s={1.1} />
      <Cap x={150} y={214} size={8}>Ishmael</Cap>
      <N x={150} y={228}>“I have heard you” · 17:20</N>
      <N x={150} y={242} size={10}>twelve rulers · a great nation</N>
      <circle cx={410} cy={182} r={16} fill="none" stroke="var(--sage-deep)" strokeWidth="1.2" strokeDasharray="4 3" />
      <Cap x={410} y={214} size={8} fill="var(--sage-deep)">Isaac</Cap>
      <N x={410} y={228}>“My covenant with him” · 17:19</N>
      <N x={410} y={242} size={10}>this time next year · 17:21</N>
      <Rule y={256} />
      <N x={W / 2} y={276}>Circumcised that very day · 17:23</N>
    </Frame>
  );
}

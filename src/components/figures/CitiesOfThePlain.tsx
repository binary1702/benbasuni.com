import { W, Frame, Cap, ARROW_SAGE, Region, Hero, Stop, N } from './Genesis';
import { Person, Rays, City, Tent, Tree, Mountain, Door, Cloud } from './Drawings';

/* Figures for "The Cities of the Plain" (Genesis 18–19), one per chapter, in the illustrated map style
   (see _docs/diagram_prompt.md). Sage = mercy and promise, rust = Sodom and what it costs. */

const Rule = ({ y }: { y: number }) => <line x1={40} y1={y} x2={W - 40} y2={y} stroke="var(--rule)" />;
const DASH_SAGE = { stroke: 'var(--sage-deep)', strokeWidth: 1.2, strokeDasharray: '4 3', markerEnd: 'url(#gn-arr-sage)', fill: 'none' } as const;

/** A seeded scatter of points (integer LCG), identical on server and client. */
function scatter(n: number, seed: number, x: number, w: number, y: number, h: number) {
  let s = seed;
  const next = () => (s = (Math.imul(s, 1103515245) + 12345) & 0x7fffffff) / 0x7fffffff;
  return Array.from({ length: n }, () => ({ x: Math.round(x + next() * w), y: Math.round(y + next() * h) }));
}
const MOB = scatter(60, 5, 70, 226, 92, 78);

/* 1 — The Three Visitors: a meal under the tree, a promise within the year. */
export function ThreeVisitors() {
  const y = 126;
  return (
    <Frame h={226} title="The three visitors" desc="The LORD and two angels come to Abraham's tent at Mamre. Abraham runs to serve them a meal under the tree. Sarah, listening in the tent, laughs when she hears she will have a son within the year.">
      <Cap x={W / 2} y={22}>A meal · a promise · a laugh</Cap>
      <Person x={62} y={y} s={1.1} />
      <Tent x={104} y={y} s={1.5} />
      <N x={80} y={y + 36} size={10}>Sarah laughed · 18:12</N>
      <Person x={168} y={y} s={1.2} c="var(--sage-deep)" />
      <Cap x={168} y={y - 30} size={7}>Abraham</Cap>
      <Tree x={228} y={y - 8} s={1.3} />
      <Person x={288} y={y} s={1.1} />
      <Hero cx={322} cy={y - 4} r={8} />
      <Rays x={322} y={y - 4} r={12} />
      <Person x={356} y={y} s={1.1} />
      <Cap x={334} y={y - 30} size={7}>The LORD · two angels</Cap>
      <N x={300} y={y + 36}>under the tree · 18:8</N>
      <line x1={380} y1={y} x2={440} y2={y} {...ARROW_SAGE} />
      <circle cx={472} cy={y} r={16} fill="none" stroke="var(--sage-deep)" strokeWidth="1.2" strokeDasharray="4 3" />
      <Cap x={472} y={y - 28} size={7.5} fill="var(--sage-deep)">A son</Cap>
      <N x={470} y={y + 36}>this time next year · 18:10</N>
      <Rule y={182} />
      <N x={W / 2} y={204}>“Is anything too difficult for the LORD?” · 18:14</N>
    </Frame>
  );
}

/* 2 — The Judge of All the Earth: six requests, six times yes. */
export function JudgeOfAllTheEarth() {
  const nums = ['50', '45', '40', '30', '20', '10'];
  const at = (i: number) => ({ x: 160 + i * 50, y: 96 + i * 13 });
  return (
    <Frame h={262} title="The Judge of all the earth" desc="Abraham stands before the LORD and asks whether Sodom will be spared for fifty righteous, then forty-five, forty, thirty, twenty and ten. Each time the LORD agrees.">
      <Cap x={W / 2} y={22}>Six times he asked · six times yes</Cap>
      <Person x={84} y={102} s={1.3} c="var(--sage-deep)" />
      <Cap x={84} y={134} size={8}>Abraham</Cap>
      <N x={92} y={150}>“dust and ashes” · 18:27</N>
      <Hero cx={330} cy={58} r={10} />
      <Rays x={330} y={58} r={14} />
      <N x={352} y={54} anchor="start" fill="var(--ink)">the LORD</N>
      <N x={352} y={68} anchor="start" size={10}>“I will not destroy it”</N>
      <line x1={at(0).x} y1={at(0).y} x2={at(5).x} y2={at(5).y} stroke="var(--sage-deep)" strokeWidth="1.2" />
      {nums.map((n, i) => (
        <g key={n}>
          <Stop cx={at(i).x} cy={at(i).y} r={5} stroke="var(--sage-deep)" />
          <Cap x={at(i).x} y={at(i).y + 20} size={8}>{n}</Cap>
        </g>
      ))}
      <line x1={at(5).x + 10} y1={at(5).y + 4} x2={456} y2={178} stroke="var(--rust)" strokeWidth="1.1" strokeDasharray="4 3" />
      <City x={488} y={182} s={1.1} c="var(--rust)" />
      <Cap x={488} y={212} size={8} fill="var(--rust)">Sodom</Cap>
      <N x={230} y={204}>he stopped at ten · 18:32</N>
      <Rule y={226} />
      <N x={W / 2} y={246}>“Will not the Judge of all the earth do what is right?” · 18:25</N>
    </Frame>
  );
}

/* 3 — The Gate of Sodom: a whole city at one door. */
export function GateOfSodom() {
  return (
    <Frame h={250} title="The gate of Sodom" desc="Two angels come to Sodom and Lot takes them into his house. All the men of the city, young and old, surround it. The angels pull Lot inside, shut the door, and strike the men with blindness.">
      <Cap x={W / 2} y={22}>All the city · one door</Cap>
      <Cap x={182} y={76} size={8} fill="var(--rust)">Sodom</Cap>
      {MOB.map((d, i) => <circle key={i} cx={d.x} cy={d.y} r={2.6} fill="var(--rust)" />)}
      <N x={182} y={194} fill="var(--rust)">all the men, young and old · 19:4</N>
      <Region x={332} y={64} w={190} h={132} />
      <Door x={332} y={130} s={1.7} />
      <Cap x={434} y={86} size={8}>Lot’s house</Cap>
      <Hero cx={404} cy={126} r={7} />
      <Rays x={404} y={126} r={10} />
      <Hero cx={438} cy={126} r={7} />
      <Rays x={438} y={126} r={10} />
      <Person x={476} y={128} s={1.1} />
      <N x={434} y={164} size={10}>two angels · Lot · 19:1</N>
      <N x={434} y={180} size={10}>“and shut the door” · 19:10</N>
      <Rule y={210} />
      <N x={W / 2} y={232}>Abraham had hoped for ten · 18:32</N>
    </Frame>
  );
}

/* 4 — Flee for Your Lives: led out by the hand, and still asking for a town. */
export function FleeForYourLives() {
  const y = 132;
  return (
    <Frame h={238} title="Flee for your lives" desc="Lot's sons-in-law think he is joking. At dawn Lot hesitates, and the angels seize his hand and lead him out because of the LORD's compassion. Told to flee to the mountains, he asks instead for the small town of Zoar.">
      <Cap x={W / 2} y={22}>Warned · seized · led out</Cap>
      <City x={78} y={y} s={1.1} c="var(--rust)" />
      <Cap x={78} y={y + 30} size={8} fill="var(--rust)">Sodom</Cap>
      <N x={150} y={82} fill="var(--rust)">sons-in-law thought he was joking · 19:14</N>
      <line x1={108} y1={y} x2={214} y2={y} stroke="var(--charcoal)" strokeWidth="0.9" strokeDasharray="3 4" />
      <N x={162} y={y - 10} size={10}>Lot hesitated</N>
      <Hero cx={236} cy={y} r={8} />
      <Rays x={236} y={y} r={12} />
      <Cap x={236} y={y + 30} size={7.5} fill="var(--sage-deep)">Mercy</Cap>
      <N x={236} y={y + 44} size={10}>seized his hand · 19:16</N>
      <line x1={254} y1={y} x2={338} y2={y} {...ARROW_SAGE} />
      <City x={370} y={y + 2} s={0.7} />
      <Cap x={370} y={y + 30} size={8}>Zoar</Cap>
      <N x={370} y={y + 44} size={10}>“a small place”</N>
      <line x1={394} y1={y} x2={446} y2={y - 8} stroke="var(--muted)" strokeWidth="1" strokeDasharray="3 4" />
      <Mountain x={488} y={y - 6} s={1.1} />
      <Cap x={486} y={y + 30} size={8} fill="var(--muted)">Mountains</Cap>
      <N x={486} y={y + 44} size={10}>told to go · 19:17</N>
      <N x={420} y={82}>“Do not look back”</N>
      <Rule y={196} />
      <N x={W / 2} y={218}>He did not leave Sodom · he was brought out of it</N>
    </Frame>
  );
}

/* 5 — Fire from Heaven: Abraham sees only smoke; Lot is already out. */
export function FireFromHeaven() {
  return (
    <Frame h={264} title="Fire from heaven" desc="Fire falls on Sodom and Gomorrah once Lot has reached Zoar. Lot's wife looks back and becomes a pillar of salt. From the heights Abraham sees smoke rising from the plain. God remembered Abraham and brought Lot out.">
      <Cap x={W / 2} y={22}>God remembered Abraham</Cap>
      <Mountain x={92} y={162} s={1.4} />
      <Person x={58} y={132} s={1} c="var(--sage-deep)" />
      <Cap x={92} y={200} size={8}>Abraham</Cap>
      <N x={92} y={214}>saw the smoke · 19:28</N>
      <Cloud x={280} y={84} s={1.4} />
      {[0, 1, 2, 3, 4, 5].map((i) => <line key={i} x1={240 + i * 16} y1={98} x2={234 + i * 16} y2={128} stroke="var(--rust)" strokeWidth="1.2" strokeDasharray="5 4" />)}
      <City x={280} y={160} s={1.3} c="var(--rust)" />
      <Cap x={280} y={200} size={8} fill="var(--rust)">Sodom · Gomorrah</Cap>
      <N x={280} y={214}>sulfur and fire · 19:24</N>
      <rect x={396} y={140} width={9} height={30} rx={3} fill="none" stroke="var(--rust)" strokeWidth="1.1" />
      <N x={400} y={190} size={10}>looked back</N>
      <N x={400} y={203} size={9.5}>19:26</N>
      <City x={488} y={160} s={0.7} />
      <Person x={456} y={158} s={0.9} c="var(--sage-deep)" />
      <Cap x={482} y={190} size={8}>Zoar</Cap>
      <N x={482} y={204} size={10}>Lot · 19:23</N>
      <path d="M112 118 C 170 20, 420 10, 458 132" {...DASH_SAGE} />
      <Rule y={228} />
      <N x={W / 2} y={248}>He brought Lot out · for Abraham’s sake · 19:29</N>
    </Frame>
  );
}

/* 6 — The Cave: the whole descent of Lot. */
export function TheCave() {
  const steps = ['with Abram · 13:5', 'chose the plain · 13:11', 'tent toward Sodom · 13:12', 'living in Sodom · 14:12', 'at its gate · 19:1', 'Zoar · 19:23', 'a cave · 19:30'];
  const at = (i: number) => ({ x: 58 + i * 34, y: 56 + i * 22 });
  return (
    <Frame h={254} title="The cave" desc="Lot's path from Abram's side to the plain, to Sodom, to its gate, to Zoar, and finally to a cave, where his daughters bear Moab and Ben-ammi. Generations later Ruth the Moabitess becomes an ancestor of David.">
      <Cap x={W / 2} y={22}>From the plain to a cave</Cap>
      <line x1={at(0).x} y1={at(0).y} x2={at(6).x} y2={at(6).y} stroke="var(--rust)" strokeWidth="1" />
      {steps.map((t, i) => (
        <g key={t}>
          {i === 6 ? <Hero cx={at(i).x} cy={at(i).y} r={6} fill="var(--rust)" /> : <Stop cx={at(i).x} cy={at(i).y} r={4.5} stroke="var(--rust)" />}
          <N x={at(i).x + 14} y={at(i).y + 4} anchor="start" size={10} fill={i === 6 ? 'var(--rust)' : 'var(--muted)'}>{t}</N>
        </g>
      ))}
      <Mountain x={440} y={150} s={1.9} />
      <path d="M428 176 a12 14 0 0 1 24 0 Z" fill="var(--charcoal)" />
      <Cap x={440} y={200} size={8}>Moab · Ben-ammi</Cap>
      <N x={440} y={214} size={10}>19:37–38</N>
      <line x1={440} y1={112} x2={440} y2={88} {...DASH_SAGE} />
      <N x={440} y={76} fill="var(--sage-deep)">Ruth of Moab · David · Matt 1:5</N>
      <Rule y={228} />
      <N x={W / 2} y={246}>He gained what he looked at · and lost what he had</N>
    </Frame>
  );
}

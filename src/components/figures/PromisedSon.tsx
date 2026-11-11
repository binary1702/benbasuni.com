import { W, Frame, Cap, ARROW, ARROW_RUST, ARROW_SAGE, Region, Hero, Stop, N } from './Genesis';
import { Person, Rays, City, Tent, Tree, Crown, Waves, HuntBow } from './Drawings';

/* Figures for "The Promised Son" (Genesis 20–21), one per chapter, in the illustrated map style
   (see _docs/diagram_prompt.md). Sage = what God gives / guards, rust = fear and its cost. */

const Rule = ({ y }: { y: number }) => <line x1={40} y1={y} x2={W - 40} y2={y} stroke="var(--rule)" />;
const DASH_SAGE = { stroke: 'var(--sage-deep)', strokeWidth: 1.2, strokeDasharray: '4 3', markerEnd: 'url(#gn-arr-sage)', fill: 'none' } as const;

/* 1 — She Is My Sister: the same lie, twenty-five years apart, and the same protection. */
export function SheIsMySister() {
  const rows: [number, string, string, string][] = [
    [92, 'Egypt', '12:10–20', 'plagues · 12:17'],
    [176, 'Gerar', '20:1–18', 'a dream · 20:3'],
  ];
  return (
    <Frame h={252} title="She is my sister" desc="In Egypt and again in Gerar, twenty-five years apart, Abraham says of Sarah, she is my sister, and she is taken into a king's house. Both times God intervenes: with plagues on Pharaoh, and with a dream to Abimelech.">
      <Cap x={W / 2} y={22}>The same lie · the same protection</Cap>
      {rows.map(([y, place, ref, act]) => (
        <g key={place}>
          <Cap x={72} y={y} size={8}>{place}</Cap>
          <N x={72} y={y + 15} size={9.5}>{ref}</N>
          <N x={186} y={y + 4} fill="var(--rust)">“she is my sister”</N>
          <line x1={246} y1={y} x2={326} y2={y} {...ARROW_RUST} />
          <Crown x={364} y={y - 26} s={0.6} />
          <City x={364} y={y} s={0.9} />
          <Hero cx={476} cy={y} r={8} />
          <Rays x={476} y={y} r={12} />
          <line x1={460} y1={y} x2={394} y2={y} {...ARROW_SAGE} />
          <N x={476} y={y + 28} size={10} fill="var(--sage-deep)">{act}</N>
        </g>
      ))}
      <line x1={72} y1={116} x2={72} y2={154} stroke="var(--muted)" strokeWidth="1" strokeDasharray="3 4" />
      <N x={84} y={139} anchor="start" size={10}>twenty-five years</N>
      <Rule y={216} />
      <N x={W / 2} y={236}>“I did not let you touch her” · 20:6</N>
    </Frame>
  );
}

/* 2 — The Prayer of a Prophet: the man with a barren wife prays for other wombs. */
export function PrayerOfAProphet() {
  return (
    <Frame h={256} title="The prayer of a prophet" desc="Abraham, exposed and rebuked, prays for Abimelech's household, whose wombs the LORD had closed, and they are healed. His own wife has not yet borne a child; the next verse says the LORD attended to Sarah.">
      <Cap x={W / 2} y={22}>He prayed for others · and was heard</Cap>
      <Hero cx={280} cy={62} r={10} />
      <Rays x={280} y={62} r={14} />
      <Person x={280} y={152} s={1.4} c="var(--sage-deep)" />
      <Cap x={280} y={188} size={8}>Abraham</Cap>
      <N x={280} y={202} size={10}>a prophet · 20:7</N>
      <line x1={280} y1={126} x2={280} y2={84} {...ARROW} />
      <N x={292} y={110} anchor="start" size={10}>prayed · 20:17</N>
      <Region x={28} y={100} w={196} h={100} />
      <Cap x={126} y={122} size={7}>Abimelech’s house</Cap>
      <Crown x={126} y={142} s={0.7} c="var(--charcoal)" />
      <N x={126} y={168} size={10} fill="var(--rust)">wombs closed · 20:18</N>
      <N x={126} y={184} size={10} fill="var(--sage-deep)">healed · 20:17</N>
      <path d="M264 68 C 210 70, 170 80, 150 96" {...ARROW_SAGE} />
      <Person x={450} y={146} s={1.2} />
      <Cap x={450} y={180} size={8}>Sarah</Cap>
      <N x={450} y={194} size={10}>no child yet</N>
      <path d="M296 68 C 360 74, 410 92, 438 118" {...DASH_SAGE} />
      <N x={402} y={74} anchor="start" size={10} fill="var(--sage-deep)">next · 21:1</N>
      <Rule y={218} />
      <N x={W / 2} y={240}>The man whose wife had no child prayed for other women to bear</N>
    </Frame>
  );
}

/* 3 — Laughter: twenty-five years, then a name. */
export function Laughter() {
  const y = 112;
  const x = (age: number) => 70 + ((age - 75) / 25) * 400;
  return (
    <Frame h={246} title="Laughter" desc="Twenty-five years after the promise, when Abraham is one hundred, Isaac is born at the very time God had said. The laughter of doubt becomes Sarah's laughter of joy.">
      <Cap x={W / 2} y={22}>As He had said</Cap>
      <N x={W / 2} y={56}>as He had said · what He had promised · at the very time · 21:1–2</N>
      <line x1={x(75)} y1={y} x2={x(100) - 14} y2={y} stroke="var(--charcoal)" strokeWidth="0.9" />
      <Stop cx={x(75)} cy={y} r={5} />
      <Cap x={x(75)} y={y - 14} size={8}>75</Cap>
      <N x={x(75) + 6} y={y + 24} size={10}>the promise · 12:2</N>
      <Stop cx={x(86)} cy={y} r={5} />
      <Cap x={x(86)} y={y - 14} size={8}>86</Cap>
      <N x={x(86)} y={y + 24} size={10}>Ishmael · 16:16</N>
      <Hero cx={x(100)} cy={y} r={11} />
      <Rays x={x(100)} y={y} r={15} />
      <Cap x={x(100)} y={y - 24} size={8} fill="var(--sage-deep)">100</Cap>
      <N x={x(100)} y={y + 34} fill="var(--ink)">Isaac born · 21:5</N>
      <N x={170} y={190} fill="var(--rust)">laughed in doubt · 17:17 · 18:12</N>
      <line x1={270} y1={186} x2={326} y2={186} {...ARROW_SAGE} />
      <N x={432} y={190} fill="var(--sage-deep)">“God has made me laugh” · 21:6</N>
      <Rule y={208} />
      <N x={W / 2} y={230}>Isaac · “he laughs”</N>
    </Frame>
  );
}

/* 4 — The Son of the Slave Woman: one line for the covenant, and God with the other. */
export function SonOfTheSlaveWoman() {
  return (
    <Frame h={274} title="The son of the slave woman" desc="Isaac remains as the heir through whom the offspring will be reckoned. Ishmael is sent away with Hagar into the wilderness; God hears the boy, opens Hagar's eyes to a well, and makes him a great nation.">
      <Cap x={W / 2} y={22}>The covenant through one · God with both</Cap>
      <Tent x={70} y={112} s={1.4} />
      <Cap x={70} y={146} size={8}>Abraham</Cap>
      <line x1={98} y1={102} x2={188} y2={82} {...ARROW_SAGE} />
      <Person x={210} y={80} s={1} c="var(--sage-deep)" />
      <Cap x={232} y={76} anchor="start" size={8} fill="var(--sage-deep)">Isaac</Cap>
      <N x={232} y={92} anchor="start" size={10}>“through Isaac” · 21:12</N>
      <path d="M98 124 C 150 150, 190 170, 234 176" {...ARROW} fill="none" />
      <Person x={256} y={174} s={1} />
      <Cap x={256} y={204} size={8}>Ishmael</Cap>
      <N x={256} y={218} size={10}>sent away · 21:14</N>
      <line x1={276} y1={176} x2={336} y2={176} stroke="var(--charcoal)" strokeWidth="0.9" strokeDasharray="3 4" />
      <Hero cx={362} cy={116} r={8} />
      <Rays x={362} y={116} r={12} />
      <N x={380} y={112} anchor="start" fill="var(--ink)">God heard the boy</N>
      <N x={380} y={126} anchor="start" size={9.5}>21:17</N>
      <line x1={362} y1={132} x2={362} y2={160} {...ARROW_SAGE} />
      <Waves x={362} y={178} w={28} />
      <Cap x={362} y={204} size={8}>A well</Cap>
      <N x={362} y={218} size={10}>21:19</N>
      <line x1={386} y1={176} x2={452} y2={176} {...ARROW_SAGE} />
      <HuntBow x={482} y={174} s={1} />
      <Cap x={482} y={204} size={8}>A nation</Cap>
      <N x={482} y={218} size={10}>an archer · 21:20</N>
      <Rule y={236} />
      <N x={W / 2} y={258}>“I will also make a nation of him, because he is your offspring” · 21:13</N>
    </Frame>
  );
}

/* 5 — The Well of the Oath: heir of the land, owner of a well. */
export function WellOfTheOath() {
  const y = 142;
  return (
    <Frame h={256} title="The well of the oath" desc="Abimelech comes to Abraham, says God is with you, and asks for an oath. Abraham settles a dispute over a well with seven ewe lambs, plants a tamarisk tree at Beersheba, and calls on the LORD, the Eternal God.">
      <Cap x={W / 2} y={22}>A well · a tree · an oath</Cap>
      <Region x={186} y={76} w={188} h={116} />
      <Cap x={280} y={98} size={8}>Beersheba</Cap>
      <ellipse cx={248} cy={y + 6} rx={18} ry={8} fill="var(--ivory)" stroke="var(--charcoal)" strokeWidth="1.1" />
      <ellipse cx={248} cy={y + 6} rx={10} ry={4} fill="var(--charcoal)" />
      <Tree x={326} y={y - 6} s={1.3} />
      <N x={280} y={180} size={10}>well of the oath · 21:31</N>
      <Person x={104} y={y} s={1.3} c="var(--sage-deep)" />
      <Cap x={104} y={y + 34} size={8}>Abraham</Cap>
      {[0, 1, 2, 3, 4, 5, 6].map((i) => <circle key={i} cx={74 + i * 10} cy={y + 46} r={3} fill="var(--sage-deep)" />)}
      <N x={104} y={y + 64} size={10}>seven ewe lambs · 21:30</N>
      <line x1={124} y1={y} x2={180} y2={y} {...ARROW_SAGE} />
      <Crown x={456} y={y - 26} s={0.8} c="var(--charcoal)" />
      <Person x={456} y={y} s={1.3} />
      <Cap x={456} y={y + 34} size={8}>Abimelech</Cap>
      <N x={456} y={y + 50} size={10}>“God is with you” · 21:22</N>
      <line x1={436} y1={y} x2={380} y2={y} {...ARROW} />
      <Rule y={220} />
      <N x={W / 2} y={240}>He called on the LORD, the Eternal God · 21:33</N>
    </Frame>
  );
}

import { W, Frame, Cap, ARROW, ARROW_SAGE, Region, Hero, Stop, N } from './Genesis';
import { Person, Rays, City, Tent, Tree, Grave, Waves } from './Drawings';

/* Figures for "The Generations of Abraham" (Genesis 23–25), one per chapter, in the illustrated map style
   (see _docs/diagram_prompt.md). Sage = the promise carried forward, rust = barrenness and death. */

const Rule = ({ y }: { y: number }) => <line x1={40} y1={y} x2={W - 40} y2={y} stroke="var(--rule)" />;
const DASH_SAGE = { stroke: 'var(--sage-deep)', strokeWidth: 1.2, strokeDasharray: '4 3', markerEnd: 'url(#gn-arr-sage)', fill: 'none' } as const;

/* 1 — A Foreigner and an Outsider: promised a land, owner of a grave. */
export function ForeignerAndOutsider() {
  return (
    <Frame h={248} title="A foreigner and an outsider" desc="After sixty-two years in the land promised to him, Abraham owns none of it. When Sarah dies he buys the field and cave of Machpelah from Ephron the Hittite for four hundred shekels of silver: the only part of the promised land he ever owned.">
      <Cap x={W / 2} y={22}>Promised a land · bought a grave</Cap>
      <rect x={36} y={52} width={304} height={142} rx={28} fill="none" stroke="var(--muted)" strokeWidth="1" strokeDasharray="4 4" />
      <Cap x={188} y={74} size={8} fill="var(--muted)">The land promised</Cap>
      <N x={188} y={90} size={10}>river of Egypt to the Euphrates · 15:18</N>
      <Region x={146} y={104} w={84} h={60} />
      <Grave x={172} y={136} s={1.1} c="var(--charcoal)" />
      <Tree x={206} y={132} s={0.7} />
      <N x={188} y={182} size={10} fill="var(--ink)">the field he owned · 23:17</N>
      <Person x={440} y={110} s={1.3} c="var(--sage-deep)" />
      <Cap x={440} y={144} size={8}>Abraham · 137</Cap>
      <N x={440} y={160} size={10}>“a foreigner and an outsider” · 23:4</N>
      <N x={440} y={176} size={10}>400 shekels · full price · 23:16</N>
      <line x1={420} y1={114} x2={238} y2={132} {...ARROW_SAGE} />
      <Rule y={210} />
      <N x={W / 2} y={232}>Buried there: Sarah, Abraham, Isaac, Rebekah, Leah, Jacob · 49:31</N>
    </Frame>
  );
}

/* 2 — The Servant at the Well: a prayer answered before it was finished. */
export function ServantAtTheWell() {
  const y = 152;
  return (
    <Frame h={256} title="The servant at the well" desc="Abraham's servant travels from Canaan to the city of Nahor, where Isaac must not go. At the well he prays for a girl who will water his camels; before he has finished, Rebekah, of Abraham's own kin, comes out and does so.">
      <Cap x={W / 2} y={22}>Before he had finished praying</Cap>
      <Tent x={70} y={y} s={1.2} />
      <Cap x={70} y={y + 30} size={8}>Canaan</Cap>
      <N x={76} y={y + 44} size={10}>Isaac stays · 24:6</N>
      <line x1={96} y1={y} x2={206} y2={y} {...ARROW} />
      <N x={152} y={y - 10} size={10}>servant · ten camels</N>
      <Region x={212} y={92} w={196} h={108} />
      <Cap x={310} y={112} size={8}>The well</Cap>
      <Person x={250} y={y - 2} s={1.1} />
      <Waves x={300} y={y + 4} w={28} />
      <Person x={352} y={y - 2} s={1.1} c="var(--sage-deep)" />
      <N x={310} y={190} size={10}>water for all his camels · 24:20</N>
      <Hero cx={250} cy={58} r={9} />
      <Rays x={250} y={58} r={13} />
      <line x1={250} y1={74} x2={250} y2={88} stroke="var(--sage-deep)" strokeWidth="1.3" />
      <N x={274} y={62} anchor="start" size={10}>“O LORD, God of my master Abraham” · 24:12</N>
      <Cap x={478} y={130} size={8} fill="var(--sage-deep)">Rebekah</Cap>
      <N x={478} y={146} size={10}>of Abraham’s kin</N>
      <N x={478} y={160} size={9.5}>22:23 · 24:24</N>
      <Rule y={216} />
      <N x={W / 2} y={238}>“The LORD has led me” · 24:27</N>
    </Frame>
  );
}

/* 3 — I Will Go: Abraham's journey, made again. */
export function IWillGo() {
  return (
    <Frame h={254} title="I will go" desc="Abram once left Haran for Canaan at God's word. Sixty-five years later Rebekah leaves the same country for a land and a husband she has not seen, saying, I will go. Isaac brings her into Sarah's tent.">
      <Cap x={W / 2} y={22}>The same journey · made again</Cap>
      <Region x={36} y={74} w={164} h={124} />
      <Cap x={118} y={96} size={8}>Canaan</Cap>
      <Tent x={88} y={142} s={1.3} />
      <Person x={146} y={142} s={1.2} c="var(--sage-deep)" />
      <N x={118} y={184} size={10}>Isaac · Sarah’s tent · 24:67</N>
      <City x={484} y={136} s={1.1} />
      <Cap x={484} y={168} size={8}>Haran</Cap>
      <line x1={448} y1={114} x2={208} y2={114} {...ARROW_SAGE} />
      <N x={328} y={104}>Abram · “go” · 12:1</N>
      <line x1={448} y1={160} x2={208} y2={160} {...ARROW_SAGE} />
      <N x={328} y={150} fill="var(--ink)">Rebekah · “I will go” · 24:58</N>
      <N x={328} y={182} size={10}>sixty-five years apart</N>
      <Rule y={214} />
      <N x={W / 2} y={236}>“May your offspring possess the gates of their enemies” · 24:60 · 22:17</N>
    </Frame>
  );
}

/* 4 — Gathered to His People: a hundred years in the land, and what he held at the end. */
export function GatheredToHisPeople() {
  const y = 112;
  const x = (age: number) => 60 + ((age - 75) / 100) * 440;
  const marks: [number, string, boolean][] = [
    [75, 'leaves Haran', true],
    [86, 'Ishmael', false],
    [100, 'Isaac', true],
    [137, 'Sarah dies', false],
    [140, 'Isaac marries', true],
    [160, 'Jacob · Esau', false],
  ];
  return (
    <Frame h={292} title="Gathered to his people" desc="Abraham's life by his age: he leaves Haran at 75, Ishmael is born at 86, Isaac at 100, Sarah dies at 137, Isaac marries at 140, the twins are born at 160, and he dies at 175 after a hundred years in the land, holding one field, one heir of the promise and two grandsons.">
      <Cap x={W / 2} y={22}>A hundred years in the land</Cap>
      <line x1={x(75)} y1={y} x2={x(175)} y2={y} stroke="var(--charcoal)" strokeWidth="0.9" />
      {marks.map(([age, label, up]) => (
        <g key={age}>
          <Stop cx={x(age)} cy={y} r={4.5} />
          <Cap x={x(age)} y={up ? y - 12 : y + 22} size={7.5}>{String(age)}</Cap>
          <N x={x(age)} y={up ? y - 26 : y + 36} size={10}>{label}</N>
        </g>
      ))}
      <Hero cx={x(175)} cy={y} r={7} fill="var(--rust)" />
      <Cap x={x(175)} y={y - 14} size={7.5} fill="var(--rust)">175</Cap>
      <N x={x(175)} y={y - 28} size={10}>dies · 25:8</N>
      <N x={W / 2} y={174}>what he held at the end</N>
      <Grave x={140} y={204} s={1.1} c="var(--charcoal)" />
      <Cap x={140} y={232} size={8}>One field</Cap>
      <Person x={280} y={202} s={0.95} c="var(--sage-deep)" />
      <Cap x={280} y={232} size={8}>One heir</Cap>
      <Person x={410} y={202} s={0.8} />
      <Person x={430} y={202} s={0.8} />
      <Cap x={420} y={232} size={8}>Two grandsons</Cap>
      <Rule y={250} />
      <N x={W / 2} y={272}>“Old and contented” · his sons Isaac and Ishmael buried him · 25:8–9</N>
    </Frame>
  );
}

/* 5 — The Promise Continues: every generation begins at a closed womb. */
export function PromiseContinues() {
  const cols: [number, string, string, string, string][] = [
    [120, 'Sarah', 'barren · 11:30', 'Isaac', 'after twenty-five years'],
    [280, 'Rebekah', 'barren · 25:21', 'Esau · Jacob', 'Isaac prayed · twenty years'],
    [440, 'Rachel', 'barren · 29:31', 'Joseph', 'the next generation'],
  ];
  return (
    <Frame h={278} title="The promise continues" desc="In each generation of the patriarchs the mother is barren: Sarah, then Rebekah, then Rachel. Each time the child is given by God: Isaac after twenty-five years, Esau and Jacob after twenty, and later Joseph.">
      <Cap x={W / 2} y={22}>Each generation · a gift</Cap>
      {cols.map(([cx, mother, barren, child, note], i) => (
        <g key={mother} opacity={i === 2 ? 0.6 : 1}>
          <Cap x={cx} y={62} size={8}>{mother}</Cap>
          <Stop cx={cx} cy={86} r={8} stroke="var(--rust)" fill="none" />
          <N x={cx} y={114} size={10} fill="var(--rust)">{barren}</N>
          <line x1={cx} y1={122} x2={cx} y2={152} {...ARROW_SAGE} />
          {i === 1 ? (
            <>
              <Person x={cx - 10} y={176} s={0.9} />
              <Person x={cx + 10} y={176} s={0.9} c="var(--sage-deep)" />
            </>
          ) : (
            <Person x={cx} y={176} s={0.9} c="var(--sage-deep)" />
          )}
          <Cap x={cx} y={206} size={8} fill="var(--sage-deep)">{child}</Cap>
          <N x={cx} y={220} size={10}>{note}</N>
        </g>
      ))}
      <line x1={140} y1={176} x2={252} y2={176} {...ARROW} />
      <line x1={302} y1={176} x2={418} y2={176} {...DASH_SAGE} />
      <Rule y={238} />
      <N x={W / 2} y={260}>“The older will serve the younger” · 25:23</N>
    </Frame>
  );
}

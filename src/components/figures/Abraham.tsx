import { W, Frame, Cap, ARROW, ARROW_RUST, ARROW_SAGE, Region, Hero, Stop, N } from './Genesis';
import { Person, Rays, City, Tent, Altar, Crown, Sheaf, Waves, Tree, Mountain, Eye } from './Drawings';

/* Figures for "The Calling of Abram" (Genesis 12–14), one per chapter, in the illustrated map style
   (see _docs/diagram_prompt.md). Sage = what God gives / the promise, rust = loss, fear, the plain of Sodom. */

const Rule = ({ y }: { y: number }) => <line x1={40} y1={y} x2={W - 40} y2={y} stroke="var(--rule)" />;
const stroke = (c: string, w = 1.1) => ({ fill: 'none', stroke: c, strokeWidth: w, strokeLinecap: 'round' as const, strokeLinejoin: 'round' as const });

/** A round loaf of bread (local to this book: Melchizedek's bread and wine). */
function Loaf({ x, y, c = 'var(--sage-deep)' }: { x: number; y: number; c?: string }) {
  return (
    <g transform={`translate(${x} ${y})`}>
      <path d="M-11 5 C -12 -5, -5 -8, 0 -8 C 5 -8, 12 -5, 11 5 Z" {...stroke(c)} />
      <path d="M-4 -5 L-2 0 M1 -6 L3 -1 M6 -4 L7 0" {...stroke(c, 0.9)} />
    </g>
  );
}
/** A cup of wine. */
function Cup({ x, y, c = 'var(--sage-deep)' }: { x: number; y: number; c?: string }) {
  return (
    <g transform={`translate(${x} ${y})`}>
      <path d="M-7 -8 H7 C 7 0, 3 3, 0 3 C -3 3, -7 0, -7 -8 Z" {...stroke(c)} />
      <path d="M0 3 V8 M-5 8 H5" {...stroke(c)} />
    </g>
  );
}

/* 1 — The Call: three circles to leave, one unnamed place to go, seven promises.
   Map: Abram stands inside three nested regions (country ⊃ kindred ⊃ father's household).
   The LORD speaks; a green arrow leads out to a dashed ring: the land not yet shown. */
export function TheCall() {
  const y = 150;
  return (
    <Frame h={284} title="The call" desc="Abram stands inside three circles he is told to leave: his country, his kindred and his father's household. The LORD speaks, and a path leads out to a land that is not yet named. Seven promises follow, each one God's own 'I will'.">
      <Cap x={W / 2} y={22}>Leave · go · I will</Cap>
      <Region x={36} y={54} w={232} h={170} />
      <Cap x={152} y={74} size={8}>Country</Cap>
      <rect x={54} y={84} width={196} height={128} rx={24} fill="var(--ivory)" stroke="var(--charcoal)" strokeWidth="0.9" />
      <Cap x={152} y={102} size={8}>Kindred</Cap>
      <rect x={70} y={112} width={164} height={88} rx={20} fill="var(--sage-soft)" stroke="var(--charcoal)" strokeWidth="0.9" />
      <Cap x={152} y={130} size={7.5}>Father’s household</Cap>
      <Person x={152} y={164} s={1.3} c="var(--sage-deep)" />
      {/* the LORD speaks */}
      <Hero cx={336} cy={76} r={11} />
      <Rays x={336} y={76} r={15} />
      <Cap x={336} y={50} size={8}>The LORD said</Cap>
      <line x1={336} y1={98} x2={336} y2={y - 10} {...ARROW_SAGE} />
      {/* the way out */}
      <line x1={274} y1={y} x2={414} y2={y} {...ARROW_SAGE} />
      <Cap x={336} y={y + 18} size={7.5} fill="var(--sage-deep)">go</Cap>
      <circle cx={452} cy={y} r={26} fill="none" stroke="var(--muted)" strokeWidth="1.1" strokeDasharray="4 4" />
      <N x={452} y={y + 5} size={15}>?</N>
      <Cap x={452} y={y - 38} size={8}>The land</Cap>
      <N x={452} y={y + 46}>“I will show you” · 12:1</N>
      {/* seven promises */}
      {Array.from({ length: 7 }, (_, i) => <circle key={i} cx={300 + i * 12} cy={214} r={3} fill="var(--sage-deep)" />)}
      <N x={388} y={218} anchor="start">seven promises · 12:2–3</N>
      <Rule y={240} />
      <N x={W / 2} y={262}>He was told what to leave, and not where he was going · Heb 11:8</N>
    </Frame>
  );
}

/* 2 — So Abram Departed: from Haran into a land that is already someone's.
   Map: Haran on the right; the green road enters Canaan (the region). Three stops
   run south: Shechem (altar), Bethel · Ai (tent and altar), the Negev. */
export function SoAbramDeparted() {
  const y = 124;
  return (
    <Frame h={272} title="So Abram departed" desc="Abram, Sarai and Lot leave Haran and enter Canaan. At Shechem the LORD appears and promises this land; Abram builds an altar. Between Bethel and Ai he pitches his tent and builds a second altar, then journeys on toward the Negev. The Canaanites were in the land.">
      <Cap x={W / 2} y={22}>A tent · an altar · no land</Cap>
      <Region x={30} y={44} w={344} h={172} />
      <Cap x={202} y={64} size={8}>Canaan</Cap>
      {/* Haran */}
      <Tent x={492} y={y} s={1.2} />
      <Cap x={492} y={y + 30} size={8}>Haran</Cap>
      <N x={492} y={y + 44}>aged 75 · 12:4</N>
      <line x1={468} y1={y} x2={382} y2={y} {...ARROW_SAGE} />
      <N x={424} y={y - 10} size={9.5}>Abram · Sarai · Lot</N>
      {/* Shechem */}
      <Altar x={318} y={y} s={0.9} />
      <Cap x={318} y={y + 30} size={8}>Shechem</Cap>
      <N x={318} y={y + 44} size={10}>“this land” · 12:7</N>
      <line x1={298} y1={y + 4} x2={246} y2={y + 4} {...ARROW} />
      {/* Bethel · Ai */}
      <Altar x={194} y={y} s={0.9} />
      <Tent x={224} y={y} s={0.9} />
      <Cap x={206} y={y + 30} size={8}>Bethel · Ai</Cap>
      <N x={206} y={y + 44} size={10}>tent and altar · 12:8</N>
      <line x1={174} y1={y + 4} x2={112} y2={y + 4} {...ARROW} />
      {/* the Negev */}
      <Stop cx={98} cy={y + 4} r={6} />
      <Cap x={90} y={y + 30} size={8}>Negev</Cap>
      <N x={90} y={y + 44} size={10}>journeyed on · 12:9</N>
      <N x={202} y={200} fill="var(--rust)">“the Canaanites were in the land” · 12:6</N>
      <Rule y={230} />
      <N x={W / 2} y={252}>Promised to his offspring · he had no child, and not a foot of ground · Acts 7:5</N>
    </Frame>
  );
}

/* 3 — Famine in the Land: down to Egypt and out again.
   Map: famine in Canaan (top right); the rust road goes down to Egypt (the region), where Sarai
   is taken into Pharaoh's house. The LORD strikes; the road leads back up. */
export function FamineInTheLand() {
  return (
    <Frame h={316} title="Famine in the land" desc="A famine in Canaan sends Abram down to Egypt. Afraid for his life, he calls Sarai his sister and she is taken into Pharaoh's house. The LORD afflicts Pharaoh with plagues, and Pharaoh sends Abram away with his wife and all he has.">
      <Cap x={W / 2} y={22}>Down to Egypt · sent away</Cap>
      {/* Canaan, in famine */}
      <Cap x={458} y={50} size={8}>Canaan</Cap>
      <N x={458} y={65} fill="var(--rust)">severe famine · 12:10</N>
      <Sheaf x={458} y={92} s={1.2} c="var(--rust)" />
      {/* down */}
      <path d="M434 102 C 396 122, 362 160, 314 180" {...ARROW_RUST} />
      <Cap x={366} y={112} anchor="end" size={7.5} fill="var(--rust)">went down</Cap>
      <N x={366} y={126} anchor="end" size={9.5}>“say you are my sister”</N>
      {/* Egypt */}
      <Region x={46} y={138} w={262} h={104} />
      <Cap x={90} y={160} anchor="start" size={8}>Egypt</Cap>
      <City x={112} y={198} s={1.1} />
      <Crown x={112} y={172} s={0.8} />
      <N x={112} y={228} size={10}>Pharaoh’s house</N>
      <line x1={232} y1={198} x2={150} y2={198} {...ARROW_RUST} />
      <Person x={250} y={196} s={1.1} c="var(--sage-deep)" />
      <N x={236} y={228} size={10}>Sarai taken · 12:15</N>
      {/* the LORD strikes */}
      <Hero cx={120} cy={74} r={11} />
      <Rays x={120} y={74} r={15} />
      <Cap x={120} y={48} size={8}>The LORD</Cap>
      <line x1={120} y1={96} x2={120} y2={132} {...ARROW_SAGE} />
      <N x={132} y={118} anchor="start" fill="var(--sage-deep)">plagues · 12:17</N>
      {/* out again */}
      <path d="M312 222 C 400 260, 496 240, 474 116" {...ARROW} fill="none" />
      <N x={420} y={266}>“Take her and go!” · 12:19</N>
      <Rule y={282} />
      <N x={W / 2} y={302}>God guarded the promise that Abram put at risk</N>
    </Frame>
  );
}

/* 4 — The Choice of Lot: one fork, two measures.
   Map: between Bethel and Ai the road forks. West, the hill country of Canaan: Abram's tent.
   East, the well-watered plain (the region), with Sodom in it. */
export function ChoiceOfLot() {
  return (
    <Frame h={300} title="The choice of Lot" desc="Between Bethel and Ai the land cannot support both households. Abram offers Lot the choice. Lot lifts his eyes, sees the well-watered plain of the Jordan, chooses it for himself and goes east toward Sodom. Abram remains in Canaan.">
      <Cap x={W / 2} y={22}>What he saw · what was promised</Cap>
      <Cap x={280} y={48} size={8}>Between Bethel and Ai</Cap>
      <N x={280} y={62} size={10}>too many possessions · 13:6</N>
      <Stop cx={280} cy={82} r={6} />
      {/* west: Abram */}
      <path d="M268 88 C 226 104, 196 126, 178 156" {...ARROW_SAGE} />
      <Mountain x={112} y={182} s={1} />
      <Tent x={170} y={186} s={1.1} c="var(--sage-deep)" />
      <Cap x={136} y={218} size={8}>Canaan</Cap>
      <N x={136} y={232}>Abram stayed · 13:12</N>
      {/* east: Lot */}
      <path d="M292 88 C 334 100, 366 112, 392 132" {...ARROW_RUST} />
      <Eye x={330} y={84} s={0.9} />
      <N x={346} y={80} anchor="start" size={10}>Lot lifted up his eyes · 13:10</N>
      <Cap x={352} y={122} anchor="end" size={7.5} fill="var(--rust)">east</Cap>
      <Region x={352} y={138} w={178} h={74} />
      <Waves x={388} y={174} w={30} />
      <Tree x={432} y={170} s={0.8} />
      <City x={488} y={174} s={0.85} c="var(--rust)" />
      <Cap x={488} y={202} size={7.5} fill="var(--rust)">Sodom</Cap>
      <Cap x={441} y={228} size={8}>Plain of the Jordan</Cap>
      <N x={441} y={242}>“like the garden of the LORD”</N>
      <Rule y={258} />
      <N x={W / 2} y={280}>Tent toward Sodom 13:12 · living in Sodom 14:12 · at its gate 19:1</N>
    </Frame>
  );
}

/** Dust for figure 5: a seeded scatter computed once, so the drawing is identical on every render. */
const DUST = (() => {
  let seed = 7;
  const next = () => (seed = (Math.imul(seed, 1103515245) + 12345) & 0x7fffffff) / 0x7fffffff;
  return Array.from({ length: 90 }, () => ({ x: Math.round(52 + next() * 150), y: Math.round(190 + next() * 44) }));
})();

/* 5 — Lift Up Your Eyes: after Lot leaves, every direction is given.
   Map: Abram at the center, four green arrows to the compass points; the dust around his
   feet is the measure of his offspring; at Hebron, the third altar. */
export function LiftUpYourEyes() {
  const cx = 286;
  const cy = 142;
  return (
    <Frame h={304} title="Lift up your eyes" desc="After Lot has departed, the LORD tells Abram to look north, south, east and west: all the land he sees is given to him and his offspring forever, and his offspring will be like the dust of the earth. Abram moves his tent to Hebron and builds a third altar.">
      <Cap x={W / 2} y={22}>All that you see · to you · forever</Cap>
      <Hero cx={92} cy={84} r={11} />
      <Rays x={92} y={84} r={15} />
      <Cap x={92} y={58} size={8}>The LORD</Cap>
      <N x={92} y={118} size={10}>after Lot had departed</N>
      <N x={92} y={131} size={9.5}>13:14</N>
      <Person x={cx} y={cy} s={1.4} c="var(--sage-deep)" />
      <line x1={cx} y1={cy - 26} x2={cx} y2={62} {...ARROW_SAGE} />
      <line x1={cx} y1={cy + 26} x2={cx} y2={214} {...ARROW_SAGE} />
      <line x1={cx - 18} y1={cy} x2={cx - 104} y2={cy} {...ARROW_SAGE} />
      <line x1={cx + 18} y1={cy} x2={cx + 104} y2={cy} {...ARROW_SAGE} />
      <Cap x={cx} y={52} size={7.5} fill="var(--sage-deep)">north</Cap>
      <Cap x={cx} y={230} size={7.5} fill="var(--sage-deep)">south</Cap>
      <Cap x={cx - 112} y={cy + 3} anchor="end" size={7.5} fill="var(--sage-deep)">west</Cap>
      <Cap x={cx + 112} y={cy + 3} anchor="start" size={7.5} fill="var(--sage-deep)">east</Cap>
      <N x={cx + 112} y={cy + 18} anchor="start" size={10}>even the plain Lot chose</N>
      {/* the dust */}
      {DUST.map((d, i) => <circle key={i} cx={d.x} cy={d.y} r={1.1} fill="var(--charcoal)" />)}
      <N x={127} y={250} size={10}>offspring like the dust · 13:16</N>
      {/* Hebron */}
      <Altar x={444} y={214} s={0.9} />
      <Tent x={476} y={214} s={0.9} />
      <Cap x={458} y={238} size={8}>Hebron</Cap>
      <N x={458} y={252} size={10}>the third altar · 13:18</N>
      <Rule y={266} />
      <N x={W / 2} y={286}>Promised all of it · owned none of it</N>
    </Frame>
  );
}

/* 6 — The War of the Kings: an empire's war, told because of one captive.
   Map: four kings come from the east and break the five in the Valley of Siddim (the region);
   Lot is carried north. From Hebron, Abram's green road runs after him and brings all back. */
export function WarOfTheKings() {
  return (
    <Frame h={318} title="The war of the kings" desc="Four eastern kings defeat the five kings of the plain in the Valley of Siddim and carry off Lot, who was living in Sodom. Abram the Hebrew sets out from Hebron with 318 men, pursues them north to Dan and Hobah, attacks by night and brings back Lot and all the people and goods.">
      <Cap x={W / 2} y={22}>Four kings · five kings · one captive</Cap>
      {/* the four kings */}
      {[0, 1, 2, 3].map((i) => <Crown key={i} x={64 + i * 22} y={76} s={0.7} />)}
      <Cap x={97} y={54} size={8}>Four kings</Cap>
      <N x={97} y={100} size={10}>Shinar · Elam · 14:1</N>
      <path d="M146 86 C 186 98, 214 120, 236 146" {...ARROW_RUST} />
      {/* the Valley of Siddim */}
      <Region x={202} y={152} w={180} h={78} />
      <Cap x={292} y={172} size={8}>Valley of Siddim</Cap>
      {[0, 1, 2, 3, 4].map((i) => <Crown key={i} x={252 + i * 20} y={192} s={0.55} c="var(--charcoal)" />)}
      <N x={292} y={218} size={10}>five kings fled · 14:10</N>
      {/* Lot carried off */}
      <path d="M370 154 C 404 134, 432 116, 458 100" {...ARROW_RUST} />
      <Person x={482} y={92} s={0.95} c="var(--rust)" />
      <Cap x={482} y={52} size={8}>Dan · Hobah</Cap>
      <N x={482} y={66} size={10}>Lot carried off · 14:12</N>
      {/* Abram */}
      <Tent x={112} y={228} s={1.2} c="var(--sage-deep)" />
      <Cap x={112} y={258} size={8}>Hebron</Cap>
      <N x={112} y={272} size={10}>Abram the Hebrew · 318 men</N>
      <path d="M140 236 C 240 272, 440 270, 488 116" {...ARROW_SAGE} />
      <Cap x={404} y={242} anchor="start" size={7.5} fill="var(--sage-deep)">pursued by night</Cap>
      <N x={404} y={256} anchor="start" size={10}>brought back all · 14:16</N>
      <Rule y={284} />
      <N x={W / 2} y={304}>“Am I my brother’s keeper?” 4:9 · Abram went after his</N>
    </Frame>
  );
}

/* 7 — The King of Salem: two kings, two offers.
   Map: Abram in the middle. From Salem (the region): bread, wine and blessing, and a tenth
   goes back. From Sodom: the goods, refused. Above: the One who said "I will bless you". */
export function KingOfSalem() {
  const y = 158;
  return (
    <Frame h={278} title="The king of Salem" desc="Two kings meet Abram after the battle. Melchizedek, king of Salem and priest of God Most High, brings bread and wine and blesses him, and Abram gives him a tenth. The king of Sodom offers him the goods, and Abram refuses even a thread, so that no one but God can say he made Abram rich.">
      <Cap x={W / 2} y={22}>Two kings · two offers</Cap>
      {/* God Most High */}
      <Hero cx={280} cy={70} r={11} />
      <Rays x={280} y={70} r={15} />
      <Cap x={280} y={44} size={8}>God Most High</Cap>
      <line x1={280} y1={92} x2={280} y2={y - 30} {...ARROW_SAGE} />
      <N x={292} y={112} anchor="start" size={10}>“I will bless you” · 12:2</N>
      <Person x={280} y={y} s={1.5} c="var(--sage-deep)" />
      <Cap x={280} y={y + 38} size={8}>Abram</Cap>
      {/* Salem */}
      <Region x={28} y={98} w={148} h={112} />
      <Cap x={102} y={118} size={8}>Salem</Cap>
      <Crown x={102} y={140} s={0.9} c="var(--sage-deep)" />
      <Loaf x={84} y={170} />
      <Cup x={122} y={168} />
      <N x={102} y={198} size={9.5}>priest of God Most High</N>
      <line x1={184} y1={y - 12} x2={256} y2={y - 12} {...ARROW_SAGE} />
      <Cap x={220} y={y - 20} size={7} fill="var(--sage-deep)">blessing</Cap>
      <line x1={256} y1={y + 10} x2={184} y2={y + 10} {...ARROW} />
      <N x={220} y={y + 25} size={9.5}>a tenth · 14:20</N>
      {/* Sodom */}
      <Crown x={478} y={128} s={0.9} />
      <City x={478} y={162} s={1.1} c="var(--rust)" />
      <Cap x={478} y={196} size={8} fill="var(--rust)">King of Sodom</Cap>
      <line x1={444} y1={y} x2={322} y2={y} stroke="var(--rust)" strokeWidth="1.1" strokeDasharray="4 3" />
      <path d={`M310 ${y - 5} l10 10 M320 ${y - 5} l-10 10`} {...stroke('var(--rust)', 1.4)} />
      <N x={380} y={y - 10} size={10}>“take the goods” · 14:21</N>
      <N x={380} y={y + 18} size={10} fill="var(--rust)">not even a thread · 14:23</N>
      <Rule y={234} />
      <N x={W / 2} y={256}>“…lest you should say, ‘I have made Abram rich’”</N>
    </Frame>
  );
}

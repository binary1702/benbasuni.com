import { W, Frame, Cap, ARROW, ARROW_RUST, ARROW_SAGE, Region, Hero, N } from './Genesis';
import { Person, Rays, Altar, Lamb, Waves, Ark, Grave, Drop, Dove, Raven, Mountain, Cloud, Heart } from './Drawings';

/* Figures for "Noah’s Ark" (Genesis 6–8), one per chapter, in the illustrated map style
   (see _docs/diagram_prompt.md): one soft region, one hero, line drawings, arrows that tell the story. */

const Rule = ({ y }: { y: number }) => <line x1={40} y1={y} x2={W - 40} y2={y} stroke="var(--rule)" />;
const rain = (x0: number, x1: number, y0: number, rows: number, cols: number, c = 'var(--charcoal)') =>
  Array.from({ length: rows * cols }, (_, i) => {
    const x = x0 + (i % cols) * ((x1 - x0) / Math.max(cols - 1, 1));
    const y = y0 + Math.floor(i / cols) * 16 + (i % 2) * 7;
    return <line key={i} x1={x + 3} y1={y} x2={x - 1} y2={y + 8} stroke={c} strokeWidth="1" strokeLinecap="round" opacity={0.75} />;
  });

/* 1 — The Sons of God: the verbs of 3:6 again — saw, took — and God sets a limit. */
export function SonsOfGod() {
  return (
    <Frame h={262} title="The sons of God" desc="The sons of God saw that the daughters of men were beautiful and took them as wives. The Nephilim were on the earth. God limits man's days to 120 years. Saw and took echo Eve in Genesis 3:6.">
      <Cap x={W / 2} y={22}>Saw · took · again</Cap>
      <Person x={100} y={86} s={1.2} c="var(--ink)" />
      <Cap x={100} y={124} size={8}>sons of God</Cap>
      <path d="M120 98 C 160 104, 200 124, 228 136" {...ARROW_RUST} />
      <Cap x={176} y={70} size={7.5} fill="var(--rust)">saw · took</Cap>
      <N x={176} y={86} size={10}>6:2 · as in 3:6</N>
      <Person x={246} y={150} s={1.1} c="var(--ink)" />
      <Person x={268} y={150} s={1.1} c="var(--ink)" />
      <Cap x={257} y={186} size={8}>daughters of men</Cap>
      <path d="M286 150 H 346" {...ARROW_RUST} />
      <Person x={378} y={146} s={1.8} c="var(--rust)" />
      <Cap x={378} y={186} size={8} fill="var(--rust)">Nephilim</Cap>
      <N x={378} y={202}>mighty men of old · 6:4</N>
      {/* God's limit */}
      <Region x={420} y={46} w={110} h={86} />
      <Hero cx={475} cy={78} r={12} />
      <Rays x={475} y={78} r={15} />
      <N x={475} y={118} fill="var(--sage-deep)">120 years · 6:3</N>
      <path d="M420 104 C 404 112, 396 118, 390 124" {...ARROW_SAGE} strokeDasharray="4 3" />
      <Rule y={222} />
      <N x={W / 2} y={244}>“My Spirit will not contend with man forever”</N>
    </Frame>
  );
}

/* 2 — The Grief of God: the whole earth evil; God grieves; one man finds favor. */
export function GriefOfGod() {
  const crowd = [86, 112, 138, 164, 190, 216, 242, 268, 294];
  return (
    <Frame h={268} title="The grief of God" desc="The LORD saw that every inclination of the human heart was only evil all the time, and He was grieved in His heart. But Noah found favor in the eyes of the LORD.">
      <Cap x={W / 2} y={22}>Evil all the time · but Noah</Cap>
      <Region x={210} y={40} w={140} h={86} />
      <Cap x={280} y={60}>The LORD</Cap>
      <Heart x={280} y={88} s={1.3} c="var(--sage-deep)" />
      <Drop x={306} y={98} s={0.6} c="var(--sage-deep)" />
      <N x={280} y={118} size={10}>grieved · 6:6</N>
      {/* the earth */}
      <line x1={60} y1={196} x2={500} y2={196} stroke="var(--charcoal)" strokeWidth="0.9" />
      {crowd.map((x) => <Person key={x} x={x} y={180} s={0.85} c="var(--rust)" />)}
      <Heart x={190} y={150} s={0.9} />
      <N x={190} y={216} fill="var(--rust)">“only evil all the time” · 6:5</N>
      <path d="M200 140 C 206 136, 212 133, 220 131" {...ARROW_RUST} strokeDasharray="3 3" />
      {/* Noah */}
      <Person x={440} y={180} s={1.2} c="var(--sage-deep)" />
      <path d="M352 100 C 400 106, 428 132, 438 158" {...ARROW_SAGE} />
      <Cap x={440} y={214} size={8} fill="var(--sage-deep)">Noah</Cap>
      <N x={440} y={230} fill="var(--sage-deep)">found favor · 6:8</N>
      <Rule y={240} />
      <N x={W / 2} y={260}>The first “but” of grace in the flood story</N>
    </Frame>
  );
}

/* 3 — The Righteous Man: one man walks with God through a violent earth. */
export function RighteousMan() {
  return (
    <Frame h={250} title="The righteous man" desc="Noah was righteous, blameless in his generation, and walked with God, while the earth was corrupt and filled with violence.">
      <Cap x={W / 2} y={22}>One man walks with God</Cap>
      <Region x={40} y={44} w={480} h={140} fill="var(--sage-soft)" />
      <Cap x={64} y={66} anchor="start" size={7.5} fill="var(--rust)">the earth · corrupt · violent · 6:11</Cap>
      {[[80, 160], [140, 150], [360, 166], [400, 168], [470, 150], [500, 172], [110, 92], [470, 96], [196, 86]].map(([x, y]) => (
        <Drop key={`${x}${y}`} x={x} y={y} s={0.7} />
      ))}
      {/* the walk */}
      <line x1={120} y1={126} x2={440} y2={126} {...ARROW_SAGE} />
      <Person x={250} y={109} s={1.3} c="var(--ink)" />
      <Hero cx={300} cy={100} r={11} />
      <Rays x={300} y={100} r={14} />
      <Cap x={250} y={154} size={8}>Noah</Cap>
      <N x={250} y={170} fill="var(--sage-deep)">walked with God · 6:9</N>
      <Rule y={204} />
      <N x={W / 2} y={226}>Enoch walked with God (5:24) · Noah walked with God (6:9)</N>
    </Frame>
  );
}

/* 4 — The Ark: God gives the design; Noah does everything. */
export function TheArk() {
  return (
    <Frame h={246} title="The ark" desc="God gives Noah the ark's design: 300 cubits long, 50 wide, 30 high, three decks, a door in its side, a window above. Two of every living thing come to keep alive. Noah did everything just as God commanded.">
      <Cap x={W / 2} y={22}>God designs · Noah builds</Cap>
      {/* God's word */}
      <Region x={40} y={46} w={120} h={100} />
      <Cap x={100} y={68}>God</Cap>
      <Hero cx={100} cy={100} r={12} />
      <Rays x={100} y={100} r={15} />
      <N x={100} y={136} size={10} fill="var(--sage-deep)">covenant · 6:18</N>
      <path d="M160 99 H 190" {...ARROW_SAGE} />
      {/* the ark to scale: 1 unit = 1 cubit · 300 long × 30 high, three decks of 10 */}
      <rect x={200} y={84} width={300} height={30} rx={2} fill="var(--ivory)" stroke="var(--charcoal)" strokeWidth="1.1" />
      <line x1={200} y1={94} x2={500} y2={94} stroke="var(--charcoal)" strokeWidth="0.6" />
      <line x1={200} y1={104} x2={500} y2={104} stroke="var(--charcoal)" strokeWidth="0.6" />
      <rect x={236} y={105.5} width={8} height={8} rx={1} fill="var(--sage-soft)" stroke="var(--charcoal)" strokeWidth="0.9" />
      <N x={240} y={76} size={9.5}>door · 6:16</N>
      <path d="M200 128 H 500" stroke="var(--muted)" strokeWidth="0.8" markerEnd="url(#gn-arr)" markerStart="url(#gn-arr)" />
      <N x={350} y={144}>300 cubits long · 50 wide</N>
      <path d="M512 84 V 114" stroke="var(--muted)" strokeWidth="0.8" markerEnd="url(#gn-arr)" markerStart="url(#gn-arr)" />
      <N x={520} y={103} anchor="start" size={9.5}>30</N>
      <N x={350} y={160} size={9.5}>drawn to scale · three decks · 6:15–16</N>
      <Lamb x={230} y={186} s={0.9} />
      <Lamb x={256} y={186} s={0.9} />
      <Dove x={300} y={184} s={0.8} />
      <Dove x={324} y={186} s={0.8} />
      <N x={420} y={190}>two of every kind · 6:19</N>
      <Rule y={208} />
      <N x={W / 2} y={230} fill="var(--ink)">“Noah did everything just as God had commanded him” · 6:22</N>
    </Frame>
  );
}

/* 5 — The Door Was Shut: the living go in; the LORD Himself shuts the door; the rain begins. */
export function DoorWasShut() {
  return (
    <Frame h={262} title="The door was shut" desc="Noah, his family and the animals enter the ark in pairs. Then the LORD shut him in, and the rain began.">
      <Cap x={W / 2} y={22}>They went in · the LORD shut the door</Cap>
      {/* the procession */}
      {[0, 1, 2, 3, 4, 5, 6, 7].map((i) => (
        <Person key={i} x={52 + (i % 4) * 16} y={i < 4 ? 132 : 162} s={0.7} c="var(--ink)" />
      ))}
      <Lamb x={124} y={156} s={0.9} />
      <Lamb x={150} y={156} s={0.9} />
      <Dove x={130} y={124} s={0.8} />
      <Dove x={156} y={126} s={0.8} />
      <Cap x={112} y={190} size={8}>eight people · two by two</Cap>
      <N x={112} y={206}>7:7–9</N>
      <path d="M176 150 H 236" {...ARROW_SAGE} />
      {/* the ark and its door */}
      <Region x={240} y={70} w={170} h={120} />
      <Ark x={325} y={140} s={3.2} />
      {/* the door, in the hull's side */}
      <rect x={348} y={143} width={8} height={12} rx={1} fill="var(--sage-soft)" stroke="var(--charcoal)" strokeWidth="0.9" />
      <Hero cx={384} cy={96} r={10} />
      <Rays x={384} y={96} r={13} />
      <path d="M374 111 L 359 132" {...ARROW_SAGE} />
      <N x={325} y={206} fill="var(--sage-deep)">“the LORD shut him in” · 7:16</N>
      {/* outside: the rain */}
      <Cloud x={470} y={74} s={1.2} />
      {rain(446, 500, 92, 4, 4)}
      <Cap x={474} y={176} size={8} fill="var(--rust)">outside</Cap>
      <N x={474} y={192}>forty days · 7:12</N>
      <Rule y={222} />
      <N x={W / 2} y={244}>The same door that kept them in kept the waters out</N>
    </Frame>
  );
}

/* 6 — The Undoing of Creation: the waters of 1:2 return; only the ark rides above. */
export function UndoingOfCreation() {
  return (
    <Frame h={268} title="The undoing of creation" desc="The waters rose and covered the highest mountains by fifteen cubits. Every living thing on the land perished; only Noah and those with him in the ark were left. The waters prevailed 150 days.">
      <Cap x={W / 2} y={22}>Creation reversed</Cap>
      <Mountain x={150} y={184} s={1.8} />
      <Mountain x={370} y={188} s={1.5} />
      {/* rising water */}
      <rect x={40} y={128} width={480} height={84} rx={14} fill="var(--sage-soft)" stroke="var(--charcoal)" strokeWidth="0.9" />
      <Waves x={265} y={156} s={1.1} w={40} />
      <Waves x={472} y={156} s={1.1} w={40} />
      <path d="M168 149 V 131" stroke="var(--rust)" strokeWidth="1" markerEnd="url(#gn-arr-rust)" markerStart="url(#gn-arr-rust)" />
      <N x={160} y={118} anchor="end" fill="var(--rust)">15 cubits above · 7:20</N>
      {/* the ark rides on top */}
      <Ark x={270} y={116} s={1.8} />
      <Hero cx={270} cy={84} r={9} />
      <Rays x={270} y={84} r={12} />
      <N x={270} y={62} fill="var(--sage-deep)">only Noah was left · 7:23</N>
      <Grave x={62} y={196} s={0.9} />
      <N x={100} y={228} fill="var(--rust)">everything died · 7:22</N>
      <N x={420} y={228}>prevailed 150 days · 7:24</N>
      <Rule y={238} />
      <N x={W / 2} y={258}>The waters of 1:2 cover the earth again</N>
    </Frame>
  );
}

/* 7 — But God Remembered Noah: wind, receding waters, Ararat, the raven and the dove. */
export function GodRemembered() {
  return (
    <Frame h={292} title="But God remembered Noah" desc="God remembered Noah and sent a wind; the waters receded and the ark rested on the mountains of Ararat. Noah sent out a raven, then a dove three times: it returned, returned with an olive leaf, and did not return.">
      <Cap x={W / 2} y={22}>God remembers · the waters go down</Cap>
      <Region x={40} y={40} w={120} h={84} />
      <Hero cx={100} cy={72} r={12} />
      <Rays x={100} y={72} r={15} />
      <N x={100} y={112} fill="var(--sage-deep)">remembered · 8:1</N>
      {/* the wind */}
      <path d="M160 70 C 200 60, 220 84, 260 72" {...ARROW_SAGE} />
      <path d="M160 92 C 196 84, 214 104, 250 94" {...ARROW_SAGE} />
      <N x={210} y={118} size={10}>a wind</N>
      {/* Ararat and the ark */}
      <Mountain x={150} y={204} s={2.2} />
      <Ark x={172} y={154.5} s={1.4} />
      <Cap x={150} y={256} size={8}>Ararat · 8:4</Cap>
      {/* receding water, in steps */}
      <Waves x={300} y={176} s={1} w={48} />
      <Waves x={300} y={200} s={1} w={48} c="var(--muted)" />
      <path d="M334 166 V 212" {...ARROW} />
      {/* the birds */}
      <Raven x={380} y={92} s={1.1} />
      <N x={380} y={114} size={10}>raven · to and fro</N>
      <Dove x={420} y={156} s={1} c="var(--muted)" />
      <N x={420} y={176} size={10}>returned</N>
      <Dove x={470} y={130} s={1.1} leaf />
      <N x={470} y={150} size={10} fill="var(--sage-deep)">olive leaf</N>
      <Dove x={494} y={74} s={1} />
      <N x={490} y={96} size={10}>did not return</N>
      <path d="M192 146 C 250 110, 340 120, 402 154" {...ARROW} fill="none" strokeDasharray="3 3" />
      <Rule y={266} />
      <N x={W / 2} y={284}>A raven, then a dove three times · 8:6–12</N>
    </Frame>
  );
}

/* 8 — A New Beginning: out of the ark, straight to the altar; God promises the seasons. */
export function NewBeginning() {
  const seasons = ['seedtime', 'harvest', 'cold', 'heat', 'summer', 'winter', 'day', 'night'];
  return (
    <Frame h={286} title="A new beginning" desc="Noah leaves the ark and builds an altar. The LORD smells the pleasing aroma and promises never again to curse the ground, and that seedtime and harvest, cold and heat, summer and winter, day and night will not cease.">
      <Cap x={W / 2} y={22}>Out of the ark · to the altar</Cap>
      <Ark x={84} y={170} s={1.8} />
      <Cap x={84} y={200} size={8}>the ark</Cap>
      <path d="M118 166 H 166" {...ARROW_SAGE} />
      <Person x={186} y={160} s={1.2} c="var(--ink)" />
      <Altar x={232} y={168} s={1.5} />
      <Cap x={212} y={200} size={8}>Noah’s altar</Cap>
      <N x={212} y={216}>8:20</N>
      <path d="M232 104 C 236 86, 262 70, 300 66" {...ARROW_SAGE} />
      <N x={290} y={58} anchor="end" size={10} fill="var(--sage-deep)">a pleasing aroma · 8:21</N>
      <Region x={300} y={40} w={220} h={160} />
      <Hero cx={410} cy={120} r={12} />
      <Rays x={410} y={120} r={15} />
      {seasons.map((w, i) => {
        const a = (i / seasons.length) * Math.PI * 2 - Math.PI / 2;
        return <Cap key={w} x={410 + Math.cos(a) * 82} y={120 + Math.sin(a) * 52 + 3} size={7}>{w}</Cap>;
      })}
      <N x={410} y={218} fill="var(--sage-deep)">“will never cease” · 8:22</N>
      <Rule y={238} />
      <N x={W / 2} y={260}>The first act in the new world is worship</N>
    </Frame>
  );
}

/* 9 — The Meaning of the Flood: judgment and a way through it. */
export function MeaningOfFlood() {
  return (
    <Frame h={262} title="The meaning of the flood" desc="The flood is judgment on a corrupt world and, at the same time, the preservation of life through the ark God provided. Jesus and Peter both point back to it.">
      <Cap x={W / 2} y={22}>Judgment · and a way through it</Cap>
      {/* judgment from above */}
      <Cloud x={130} y={64} s={1.4} />
      {rain(104, 160, 82, 3, 4, 'var(--rust)')}
      <Cap x={130} y={42} size={8} fill="var(--rust)">judgment</Cap>
      {/* the waters */}
      <rect x={40} y={134} width={480} height={66} rx={14} fill="var(--sage-soft)" stroke="var(--charcoal)" strokeWidth="0.9" />
      <Waves x={130} y={166} s={1.1} w={80} />
      <Waves x={430} y={166} s={1.1} w={80} />
      {/* the ark carries life through */}
      <Ark x={280} y={126} s={2.2} />
      <path d="M210 110 C 250 88, 320 88, 360 110" {...ARROW_SAGE} />
      <Hero cx={280} cy={66} r={11} />
      <Rays x={280} y={66} r={14} />
      <Cap x={280} y={40} size={8} fill="var(--sage-deep)">preservation</Cap>
      <Person x={420} y={110} s={1} c="var(--sage-deep)" />
      <Person x={440} y={110} s={1} c="var(--sage-deep)" />
      <N x={430} y={92} fill="var(--sage-deep)">life carried through</N>
      <N x={W / 2} y={218}>“as in the days of Noah” · Matt 24:37 · 1 Peter 3:20</N>
      <Rule y={230} />
      <N x={W / 2} y={252} fill="var(--ink)">The same water that judged the world carried the ark</N>
    </Frame>
  );
}


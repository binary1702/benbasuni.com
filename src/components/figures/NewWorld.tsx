import { W, Frame, Cap, ARROW, ARROW_RUST, ARROW_SAGE, Region, Hero, Stop, N } from './Genesis';
import { Tree, Person, Rays, Lamb, Dove, Waves, Ark, Grave, Drop, Garment, Tent, Vine, Eye, Cloud, Rainbow, Heart, Sheaf } from './Drawings';

/* Figures for "The New World" (Genesis 9), one per chapter, in the illustrated map style
   (see _docs/diagram_prompt.md). */

const Rule = ({ y }: { y: number }) => <line x1={40} y1={y} x2={W - 40} y2={y} stroke="var(--rule)" />;

/* 1 — Be Fruitful and Multiply: the blessing of 1:28 given again, with three changes. */
export function FruitfulAgain() {
  return (
    <Frame h={270} title="Be fruitful and multiply" desc="God blesses Noah and his sons with the words of Genesis 1:28. Three things are new: the animals now fear humanity, animals are given for food but not with their blood, and human life is protected because humanity is made in God's image.">
      <Cap x={W / 2} y={22}>The blessing, given again</Cap>
      <Region x={40} y={46} w={130} h={100} />
      <Cap x={105} y={68}>Eden</Cap>
      <Tree x={105} y={100} s={1.3} />
      <N x={105} y={136} size={10}>“be fruitful” · 1:28</N>
      <path d="M172 96 H 380" {...ARROW_SAGE} />
      <Cap x={276} y={86} size={7.5} fill="var(--sage-deep)">the same blessing</Cap>
      <Region x={388} y={46} w={132} h={100} />
      <Cap x={454} y={68}>After the flood</Cap>
      <Person x={438} y={104} s={1.1} c="var(--sage-deep)" />
      <Person x={470} y={104} s={1.1} c="var(--sage-deep)" />
      <N x={454} y={136} size={10}>“be fruitful” · 9:1</N>
      {/* what is new */}
      <Cap x={W / 2} y={170} size={7.5} fill="var(--muted)">what is new</Cap>
      <Lamb x={130} y={198} s={1.1} />
      <N x={130} y={228}>fear of you · 9:2</N>
      <Sheaf x={270} y={194} s={1} />
      <Drop x={294} y={198} s={0.9} />
      <N x={280} y={228}>food · not the blood · 9:3–4</N>
      <Person x={430} y={198} s={1.1} c="var(--ink)" />
      <Hero cx={452} cy={186} r={6} />
      <N x={440} y={228} fill="var(--sage-deep)">God’s image guarded · 9:6</N>
      <Rule y={240} />
      <N x={W / 2} y={260}>Life is blessed again, and now it is guarded</N>
    </Frame>
  );
}

/* 2 — The Covenant: God binds Himself, to every living thing, never to flood the earth again. */
export function TheCovenant() {
  return (
    <Frame h={262} title="The covenant" desc="God establishes His covenant with Noah, his descendants, and every living creature: never again will all life be cut off by a flood. God alone makes the promise; nothing is required in return.">
      <Cap x={W / 2} y={22}>God binds Himself</Cap>
      <Region x={210} y={40} w={140} h={78} />
      <Hero cx={280} cy={80} r={14} />
      <Rays x={280} y={80} r={17} />
      <N x={280} y={110} fill="var(--sage-deep)">“I establish” · 9:9</N>
      <path d="M240 118 C 200 140, 150 150, 120 168" {...ARROW_SAGE} />
      <path d="M280 120 V 166" {...ARROW_SAGE} />
      <path d="M320 118 C 360 140, 410 150, 440 168" {...ARROW_SAGE} />
      <Person x={104} y={190} s={1} c="var(--ink)" />
      <Person x={124} y={190} s={1} c="var(--ink)" />
      <Cap x={114} y={222} size={8}>Noah · his seed</Cap>
      <Lamb x={268} y={194} s={1} />
      <Dove x={296} y={184} s={0.9} />
      <Cap x={280} y={222} size={8}>every creature</Cap>
      <Waves x={440} y={192} s={1} w={36} />
      <line x1={420} y1={178} x2={462} y2={206} stroke="var(--rust)" strokeWidth="1.6" />
      <Cap x={440} y={222} size={8}>never again · 9:11</Cap>
      <Rule y={234} />
      <N x={W / 2} y={254}>Nothing is asked of Noah in return</N>
    </Frame>
  );
}

/* 3 — The Bow in the Clouds: a war bow hung in the sky, pointed away from the earth; God remembers. */
export function BowInTheClouds() {
  return (
    <Frame h={262} title="The bow in the clouds" desc="God sets His bow in the clouds as the sign of the covenant. When the bow appears, God will see it and remember. The word for rainbow is the word for a war bow, hung in the sky and pointed away from the earth.">
      <Cap x={W / 2} y={22}>A bow hung up in the sky</Cap>
      <Cloud x={160} y={104} s={1.3} />
      <Cloud x={400} y={104} s={1.3} />
      <Rainbow x={280} y={160} s={3.4} />
      <path d="M280 52 V 30" {...ARROW_RUST} />
      <N x={292} y={44} anchor="start" size={10} fill="var(--rust)">aimed away from the earth</N>
      <line x1={80} y1={160} x2={480} y2={160} stroke="var(--charcoal)" strokeWidth="0.9" />
      <Person x={250} y={146} s={0.9} c="var(--ink)" />
      <Lamb x={312} y={150} s={0.8} />
      <Eye x={120} y={190} s={1.1} c="var(--sage-deep)" />
      <N x={120} y={214} fill="var(--sage-deep)">“I will see it and remember” · 9:16</N>
      <Hero cx={440} cy={190} r={9} />
      <N x={440} y={214}>sign of the covenant · 9:13</N>
      <Rule y={230} />
      <N x={W / 2} y={252}>The bow is set down; its arrow points at heaven, not at us</N>
    </Frame>
  );
}

/* 4 — The Nakedness of Noah: one son looks and tells; two walk backward and cover. */
export function NakednessOfNoah() {
  return (
    <Frame h={270} title="The nakedness of Noah" desc="Noah plants a vineyard, becomes drunk and lies uncovered in his tent. Ham sees and tells his brothers. Shem and Japheth walk in backward with a garment on their shoulders and cover their father without looking.">
      <Cap x={W / 2} y={22}>See and tell · or cover</Cap>
      <Vine x={70} y={110} s={1.4} />
      <N x={70} y={150}>a vineyard · 9:20</N>
      <path d="M96 110 H 196" {...ARROW} />
      <Region x={204} y={56} w={152} h={112} />
      <Tent x={280} y={102} s={2.4} />
      <Cap x={280} y={156} size={8}>Noah · uncovered</Cap>
      {/* Ham */}
      <Person x={150} y={196} s={1.1} c="var(--rust)" />
      <Eye x={186} y={184} s={0.8} />
      <path d="M176 204 C 280 222, 380 214, 420 182" {...ARROW_RUST} />
      <Cap x={150} y={226} size={8} fill="var(--rust)">Ham</Cap>
      <N x={300} y={232} fill="var(--rust)">saw · told his brothers · 9:22</N>
      {/* Shem and Japheth */}
      <Person x={420} y={130} s={1.1} c="var(--sage-deep)" />
      <Person x={448} y={130} s={1.1} c="var(--sage-deep)" />
      <Garment x={434} y={104} s={1.1} />
      <path d="M404 140 H 364" {...ARROW_SAGE} />
      <Cap x={434} y={164} size={8} fill="var(--sage-deep)">Shem · Japheth</Cap>
      <N x={434} y={180} fill="var(--sage-deep)">backward · covered · 9:23</N>
      <Rule y={242} />
      <N x={W / 2} y={262}>Shame exposed, or shame covered, as God covered it in 3:21</N>
    </Frame>
  );
}

/* 5 — The Curse of Canaan: Noah's words fork three ways; then, "and he died." */
export function CurseOfCanaan() {
  return (
    <Frame h={268} title="The curse of Canaan" desc="Noah curses Canaan, Ham's son, and blesses the LORD, the God of Shem, and asks that God enlarge Japheth. Noah lives 950 years and then dies.">
      <Cap x={W / 2} y={22}>One cursed · two blessed</Cap>
      <Person x={84} y={132} s={1.3} c="var(--ink)" />
      <Cap x={84} y={168} size={8}>Noah speaks</Cap>
      <N x={84} y={184}>9:25–27</N>
      <path d="M108 120 C 180 72, 240 66, 330 66" {...ARROW_SAGE} />
      <path d="M108 132 H 330" {...ARROW_SAGE} />
      <path d="M108 144 C 180 196, 240 204, 330 204" {...ARROW_RUST} />
      <Hero cx={350} cy={66} r={11} />
      <Rays x={350} y={66} r={14} />
      <Cap x={372} y={62} anchor="start" size={8} fill="var(--sage-deep)">Shem</Cap>
      <N x={372} y={78} anchor="start" fill="var(--sage-deep)">“blessed be the LORD, God of Shem”</N>
      <Stop cx={350} cy={132} r={7} stroke="var(--sage-deep)" />
      <Cap x={372} y={128} anchor="start" size={8} fill="var(--sage-deep)">Japheth</Cap>
      <N x={372} y={144} anchor="start">“may God enlarge Japheth”</N>
      <Hero cx={350} cy={204} r={7} fill="var(--rust)" />
      <Cap x={372} y={200} anchor="start" size={8} fill="var(--rust)">Canaan</Cap>
      <N x={372} y={216} anchor="start" fill="var(--rust)">“cursed be Canaan”</N>
      <Rule y={232} />
      <Grave x={W / 2 - 104} y={250} s={0.8} />
      <N x={W / 2 + 10} y={256}>Noah lived 950 years, and then he died · 9:29</N>
    </Frame>
  );
}

/* 6 — A World Preserved, Not Redeemed: the earth was washed; the heart was not. */
export function PreservedNotRedeemed() {
  return (
    <Frame h={268} title="A world preserved, not redeemed" desc="Before the flood, every inclination of the human heart was evil (6:5). After it, God says the same of the human heart (8:21), and Noah himself falls. The flood preserved the world but did not change the heart; God's promise holds anyway.">
      <Cap x={W / 2} y={22}>The earth washed · the heart unchanged</Cap>
      <Heart x={90} y={98} s={1.6} />
      <Cap x={90} y={136} size={8}>before</Cap>
      <N x={90} y={152} fill="var(--rust)">“only evil” · 6:5</N>
      <path d="M124 98 H 208" {...ARROW} />
      <Region x={214} y={56} w={132} h={92} />
      <Ark x={280} y={92} s={1.6} />
      <Waves x={280} y={120} s={1} w={60} />
      <Cap x={280} y={140} size={7.5}>the flood</Cap>
      <path d="M352 98 H 436" {...ARROW} />
      <Heart x={470} y={98} s={1.6} />
      <Cap x={470} y={136} size={8}>after</Cap>
      <N x={470} y={152} fill="var(--rust)">“evil from youth” · 8:21</N>
      <Rainbow x={280} y={222} s={1.4} />
      <Hero cx={280} cy={206} r={6} />
      <N x={280} y={242} fill="var(--sage-deep)">the promise holds anyway · 8:22</N>
      <Grave x={470} y={210} s={0.8} />
      <Vine x={90} y={206} s={0.9} />
      <N x={90} y={242} size={10}>Noah falls · 9:21</N>
      <N x={470} y={242} size={10}>and he died · 9:29</N>
      <Rule y={254} />
    </Frame>
  );
}


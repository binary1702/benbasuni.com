import type { ReactNode } from 'react';
import { CROPS } from './crops';
import { Tree, Person, Rays, Lamb, Thorns, Drop, Sun, Moon, Stars, Bird, Fish, Sky, Land, Spade, Waves } from './Drawings';

/* Figures for "The First 7 Days" (Genesis 1–2) — one per chapter, in the
   illustrated-map style: one soft region, one hero, line drawings (Drawings.tsx),
   arrows that tell the story. Sage = life / what God gives, rust = loss.
   The shared map vocabulary below is also used by BookOfMan.tsx. */

export const SANS = 'var(--font-geist-sans), system-ui, sans-serif';
export const SERIF = 'var(--font-newsreader), Georgia, serif';
export const W = 560;
/** Text scale for every figure label and note. */
export const FS = 1;

export function Frame({ h, w = W, title, desc, children }: { h: number; w?: number; title: string; desc: string; children: ReactNode }) {
  const id = title.toLowerCase().replace(/[^a-z0-9]+/g, '-');
  return (
    <svg viewBox={CROPS[title] ?? `0 0 ${w} ${h}`} className="h-auto w-full" role="img" aria-label={`${title}: ${desc}`}>
      <defs>
        <marker id="gn-arr" viewBox="0 0 8 8" refX="7" refY="4" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
          <path d="M0 0.5 L7.5 4 L0 7.5" fill="none" stroke="var(--charcoal)" strokeWidth="1" />
        </marker>
        <marker id="gn-arr-rust" viewBox="0 0 8 8" refX="7" refY="4" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
          <path d="M0 0.5 L7.5 4 L0 7.5" fill="none" stroke="var(--rust)" strokeWidth="1" />
        </marker>
        <marker id="gn-arr-sage" viewBox="0 0 8 8" refX="7" refY="4" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
          <path d="M0 0.5 L7.5 4 L0 7.5" fill="none" stroke="var(--sage-deep)" strokeWidth="1" />
        </marker>
      </defs>
      {children}
    </svg>
  );
}
export function Cap({ x, y, children, fill = 'var(--ink)', anchor = 'middle' as const, size = 9.5 }: { x: number; y: number; children: string; fill?: string; anchor?: 'start' | 'middle' | 'end'; size?: number }) {
  return (
    <text x={x} y={y} textAnchor={anchor} fontSize={size * FS} letterSpacing="1.8" fontFamily={SANS} fill={fill}>
      {children.toUpperCase()}
    </text>
  );
}
export function Note({ x, y, children, anchor = 'middle' as const }: { x: number; y: number; children: string; anchor?: 'start' | 'middle' | 'end' }) {
  return (
    <text x={x} y={y} textAnchor={anchor} fontSize={11 * FS} fontFamily={SERIF} fontStyle="italic" fill="var(--muted)">
      {children}
    </text>
  );
}
export function Box({ x, y, w, h, label, dark = false, fontSize = 9.5 }: { x: number; y: number; w: number; h: number; label: string; dark?: boolean; fontSize?: number }) {
  return (
    <g>
      <rect x={x} y={y} width={w} height={h} rx={3} fill={dark ? 'var(--ink)' : 'var(--ivory)'} stroke="var(--charcoal)" strokeWidth="0.9" />
      <Cap x={x + w / 2} y={y + h / 2 + 3.5} fill={dark ? 'var(--ivory)' : 'var(--ink)'} size={fontSize}>{label}</Cap>
    </g>
  );
}
export const ARROW = { stroke: 'var(--charcoal)', strokeWidth: 0.9, markerEnd: 'url(#gn-arr)' } as const;
export const ARROW_RUST = { stroke: 'var(--rust)', strokeWidth: 1.1, markerEnd: 'url(#gn-arr-rust)', fill: 'none' } as const;
export const ARROW_SAGE = { stroke: 'var(--sage-deep)', strokeWidth: 1.3, markerEnd: 'url(#gn-arr-sage)', fill: 'none' } as const;

/* ── Map vocabulary (the "Eden to exile" style) ──────────────────────────────
   A diagram reads like a map: one big soft region, one hero mark inside it,
   places along a path, and arrows that carry the story. Few words: caps for
   place names, a short italic note under each. */
/** Big soft rounded region: a place (Eden, God's word, a household). */
export function Region({ x, y, w, h, fill = 'var(--sage-soft)' }: { x: number; y: number; w: number; h: number; fill?: string }) {
  return <rect x={x} y={y} width={w} height={h} rx={28} fill={fill} stroke="var(--charcoal)" strokeWidth="0.9" />;
}
/** The one bold focal mark in a diagram. */
export function Hero({ cx, cy, r = 16, fill = 'var(--sage-deep)' }: { cx: number; cy: number; r?: number; fill?: string }) {
  return <circle cx={cx} cy={cy} r={r} fill={fill} />;
}
/** A stop along the path: small ring. */
export function Stop({ cx, cy, r = 5, stroke = 'var(--charcoal)', fill = 'var(--ivory)' }: { cx: number; cy: number; r?: number; stroke?: string; fill?: string }) {
  return <circle cx={cx} cy={cy} r={r} fill={fill} stroke={stroke} strokeWidth="1.1" />;
}
/** Serif italic note (size/fill adjustable). */
export function N({ x, y, children, anchor = 'middle', size = 10.5, fill = 'var(--muted)' }: { x: number; y: number; children: string; anchor?: 'start' | 'middle' | 'end'; size?: number; fill?: string }) {
  return (
    <text x={x} y={y} textAnchor={anchor} fontSize={size * FS} fontFamily={SERIF} fontStyle="italic" fill={fill}>
      {children}
    </text>
  );
}

function Rule({ y }: { y: number }) {
  return <line x1={40} y1={y} x2={W - 40} y2={y} stroke="var(--rule)" />;
}

/* 1 — Before the Beginning: God outside the created order.
   Map: God's will is the region; God is the hero at its left. He speaks, and the
   created order (an inner box with a beginning) appears inside it. */
export function BeforeTheBeginning() {
  const y = 122;
  return (
    <Frame h={252} title="Before the beginning" desc="God, from everlasting to everlasting, stands outside the created order. He speaks, and everything else begins: stars, earth, seas, life, humanity. All of it exists inside His will.">
      <Cap x={W / 2} y={22}>God · then everything else</Cap>
      <Region x={30} y={42} w={500} h={160} />
      <Cap x={100} y={76} size={8.5}>God</Cap>
      <Hero cx={100} cy={y} r={16} />
      <Rays x={100} y={y} r={21} />
      <N x={100} y={170}>from everlasting</N>
      <N x={100} y={185} size={9.5}>Ps 90:2</N>
      <line x1={134} y1={y} x2={198} y2={y} {...ARROW_SAGE} />
      <Cap x={166} y={y - 10} size={7.5} fill="var(--sage-deep)">spoke</Cap>
      <rect x={204} y={62} width={308} height={120} rx={14} fill="var(--ivory)" stroke="var(--charcoal)" strokeWidth="0.9" />
      <Cap x={358} y={84} size={8}>The created order</Cap>
      <Stars x={240} y={y} s={1.2} />
      <Land x={292} y={y} s={1.1} />
      <Waves x={346} y={y} w={32} />
      <Fish x={396} y={y + 2} s={1.1} />
      <Bird x={398} y={y - 14} s={0.9} />
      <Person x={448} y={y} s={1.2} />
      <Person x={472} y={y} s={1.2} />
      <N x={358} y={166}>everything with a beginning · 1:1</N>
      <Rule y={216} />
      <N x={W / 2} y={238}>All things were made through the Word · John 1:3</N>
    </Frame>
  );
}

/* 2 — And God Said: out of the deep, two parallel roads.
   Days 1–3 form the realms, days 4–6 fill them, each filling day facing its
   forming day. Both roads converge on the seventh day and the garden. */
export function AndGodSaid() {
  const top = 105;
  const bot = 215;
  const xs = [155, 235, 315];
  return (
    <Frame h={330} title="And God said" desc="Out of the formless deep, two parallel roads: days one to three form the realms (light, sky and sea, land); days four to six fill them (lights, fish and birds, beasts and man). Both converge on the seventh day, God's rest, and Eden, where man stands beside the tree of life.">
      <Cap x={280} y={22}>Form · fill · rest</Cap>
      {/* the deep */}
      <Waves x={57} y={158} w={56} />
      <Cap x={57} y={190} size={8}>The deep</Cap>
      <N x={57} y={205}>void · 1:2</N>
      {/* the two roads */}
      <path d={`M94 152 C116 140 120 ${top} 148 ${top}`} {...ARROW_SAGE} />
      <path d={`M94 164 C116 176 120 ${bot} 148 ${bot}`} {...ARROW_SAGE} />
      {[top, bot].map((y) => (
        <g key={y}>
          <line x1={161} y1={y} x2={229} y2={y} stroke="var(--sage-deep)" strokeWidth="1.3" />
          <line x1={241} y1={y} x2={309} y2={y} stroke="var(--sage-deep)" strokeWidth="1.3" />
        </g>
      ))}
      <path d={`M321 ${top} C340 ${top} 338 140 352 148`} {...ARROW_SAGE} />
      <path d={`M321 ${bot} C340 ${bot} 338 182 352 174`} {...ARROW_SAGE} />
      {/* each forming day faces its filling day */}
      {xs.map((x) => (
        <line key={x} x1={x} y1={132} x2={x} y2={190} stroke="var(--charcoal)" strokeWidth="0.8" strokeDasharray="1.5 3" opacity={0.6} />
      ))}
      {xs.map((x) => (
        <g key={`s${x}`}>
          <Stop cx={x} cy={top} />
          <Stop cx={x} cy={bot} />
        </g>
      ))}
      {/* forming: light · sky & sea · land */}
      <Sun x={155} y={74} />
      <Sky x={235} y={74} />
      <Land x={315} y={80} />
      <Cap x={155} y={124} size={7.5}>Light</Cap>
      <Cap x={235} y={124} size={7.5}>Sky · sea</Cap>
      <Cap x={315} y={124} size={7.5}>Land</Cap>
      {/* filling: lights · fish & fowl · beasts & man */}
      <Cap x={155} y={203} size={7.5}>Lights</Cap>
      <Cap x={229} y={203} size={7.5}>Fish · fowl</Cap>
      <Cap x={322} y={203} size={7.5}>Beasts · man</Cap>
      <Sun x={146} y={243} s={0.55} />
      <Moon x={166} y={243} />
      <Bird x={236} y={236} s={0.8} />
      <Fish x={236} y={252} />
      <Person x={304} y={246} s={0.85} c="var(--sage-deep)" />
      <Lamb x={330} y={248} s={0.75} c="var(--sage-deep)" />
      <Cap x={195} y={155} size={7.5}>↑ form</Cap>
      <Cap x={195} y={175} size={7.5}>↓ fill</Cap>
      <N x={275} y={155}>1:3–13</N>
      <N x={275} y={175}>1:14–31</N>
      {/* the seventh day */}
      <Region x={356} y={50} w={180} h={232} />
      <Cap x={446} y={72} size={8}>The seventh day</Cap>
      <Hero cx={446} cy={118} r={15} />
      <Rays x={446} y={118} r={21} />
      <N x={446} y={165}>rest · 2:2</N>
      <path d="M474 126 Q514 150 494 194" {...ARROW_SAGE} />
      <Cap x={446} y={186} size={8}>Eden</Cap>
      <Tree x={405} y={226} s={1.3} fruit />
      <Person x={490} y={226} s={1.4} />
      <N x={405} y={266}>tree of life</N>
      <N x={490} y={266}>man · 2:7</N>
      <Rule y={298} />
      <N x={280} y={318}>Out of the deep, a world formed, filled, and given rest.</N>
    </Frame>
  );
}

/* 3 — And It Was Good: six goods gather into one "very good"; then the arc.
   Map: the road of days ends in the region of "very good". Below, the same
   creation dips into futility (rust) and rises again, made new (sage). */
export function AndItWasGood() {
  const y = 96;
  const lo = 228;
  return (
    <Frame h={330} title="And it was good" desc="God calls each day's work good, and the whole very good. Sin later subjects a good creation to futility; Scripture promises it will be set free and made new.">
      <Cap x={W / 2} y={22}>Good · good · good · very good</Cap>
      {[0, 1, 2, 3, 4, 5].map((i) => {
        const x = 56 + i * 52;
        return (
          <g key={i}>
            {i < 5 && <line x1={x + 5} y1={y} x2={x + 47} y2={y} stroke="var(--sage-deep)" strokeWidth="1.3" />}
            <Stop cx={x} cy={y} stroke="var(--sage-deep)" />
            <Cap x={x} y={y - 16} size={7.5} fill="var(--muted)">{`day ${i + 1}`}</Cap>
            <N x={x} y={y + 22}>good</N>
          </g>
        );
      })}
      <line x1={321} y1={y} x2={360} y2={y} {...ARROW_SAGE} />
      <Region x={364} y={46} w={166} h={128} />
      <Cap x={447} y={68} size={8}>Very good</Cap>
      <Hero cx={447} cy={108} r={14} />
      <Rays x={447} y={108} r={19} />
      <N x={447} y={156}>the whole · 1:31</N>
      {/* the arc: good → futility → made new */}
      <Stop cx={170} cy={lo} stroke="var(--sage-deep)" />
      <Cap x={170} y={lo - 18} size={7.5}>Creation</Cap>
      <N x={170} y={lo + 22}>Gen 1–2</N>
      <path d={`M176 ${lo} l16 9 l16 -5 l16 9 l16 -5 l16 9`} fill="none" stroke="var(--rust)" strokeWidth="1.2" />
      <circle cx={266} cy={lo + 17} r={3.6} fill="var(--rust)" />
      <Cap x={266} y={lo + 38} size={7.5} fill="var(--rust)">Futility</Cap>
      <N x={266} y={lo + 53}>Rom 8:20</N>
      <path d={`M274 ${lo + 14} C 316 ${lo + 12}, 346 ${lo}, 388 ${lo - 2}`} {...ARROW_SAGE} />
      <Hero cx={404} cy={lo - 4} r={8} />
      <Cap x={404} y={lo - 22} size={7.5} fill="var(--sage-deep)">Made new</Cap>
      <N x={404} y={lo + 20}>Rom 8:21</N>
      <Rule y={298} />
      <N x={W / 2} y={318}>Sin breaks a good world. It never makes it less His.</N>
    </Frame>
  );
}

/* 4 — In His Image: authority flows God → humanity → creatures.
   Map: God is the region and hero; the image passes (sage) to the pair, and
   rule passes on to the creatures. */
export function InHisImage() {
  const y = 116;
  return (
    <Frame h={252} title="In His image" desc="God makes humanity, male and female, in His image, and gives them rule over the fish, birds and animals. Authority flows down from God; human dignity comes from the image.">
      <Cap x={W / 2} y={22}>Image · then rule</Cap>
      <Region x={30} y={44} w={150} h={152} />
      <Cap x={105} y={70} size={8.5}>God</Cap>
      <Hero cx={105} cy={y} r={16} />
      <Rays x={105} y={y} r={21} />
      <N x={105} y={172}>the Creator</N>
      <line x1={140} y1={y} x2={234} y2={y} {...ARROW_SAGE} />
      <Cap x={194} y={y - 10} size={7.5} fill="var(--sage-deep)">image</Cap>
      <Person x={258} y={y} s={1.4} />
      <Person x={286} y={y} s={1.4} />
      <Cap x={272} y={78} size={8}>Humanity</Cap>
      <N x={272} y={158}>male and female · 1:27</N>
      <line x1={310} y1={y} x2={376} y2={y} {...ARROW_SAGE} />
      <Cap x={343} y={y - 10} size={7.5} fill="var(--sage-deep)">rule</Cap>
      <Bird x={432} y={y - 18} />
      <Fish x={404} y={y + 8} s={1.1} />
      <Lamb x={466} y={y + 6} s={1.2} c="var(--charcoal)" />
      <Cap x={436} y={78} size={8}>Creatures</Cap>
      <N x={436} y={158}>sea · sky · land · 1:28</N>
      <Rule y={212} />
      <N x={W / 2} y={234}>The image is where dignity comes from · Gen 9:6 · James 3:9</N>
    </Frame>
  );
}

/* 5 — The Purpose of Man: work is given inside the garden, before the fall.
   Map: Eden is the region; the LORD entrusts it to the man (sage). Outside,
   past a dashed rust line, the same work meets thorns: toil is what sin adds. */
export function ThePurposeOfMan() {
  const y = 114;
  return (
    <Frame h={258} title="The purpose of man" desc="Inside Eden the LORD entrusts the garden to the man to cultivate and keep it: work is good and given before sin. After the fall, painful toil and thorns are added to work, not work itself.">
      <Cap x={W / 2} y={22}>Work came before the fall</Cap>
      <Region x={30} y={44} w={304} h={160} />
      <Cap x={182} y={66} size={8}>Eden</Cap>
      <Hero cx={84} cy={y} r={14} />
      <Rays x={84} y={y} r={19} />
      <N x={84} y={156}>the LORD’s earth</N>
      <N x={84} y={171} size={9.5}>Ps 24:1</N>
      <line x1={110} y1={y} x2={172} y2={y} {...ARROW_SAGE} />
      <Cap x={141} y={y - 10} size={7.5} fill="var(--sage-deep)">entrusts</Cap>
      <Person x={194} y={y} s={1.4} />
      <Spade x={216} y={y + 2} />
      <Tree x={262} y={y - 6} s={1.3} />
      <Tree x={298} y={y} s={1} />
      <Cap x={246} y={156} size={7.5} fill="var(--sage-deep)">Cultivate · keep</Cap>
      <N x={246} y={171}>work is good · 2:15</N>
      <line x1={318} y1={y + 6} x2={404} y2={y + 6} stroke="var(--rust)" strokeWidth="1.1" strokeDasharray="4 3" markerEnd="url(#gn-arr-rust)" />
      <Thorns x={448} y={y + 2} s={1.4} />
      <Drop x={480} y={y - 22} s={0.7} />
      <Cap x={452} y={78} size={8} fill="var(--rust)">Toil</Cap>
      <N x={452} y={148}>thorns added · 3:17–19</N>
      <N x={452} y={163}>not work itself</N>
      <Rule y={220} />
      <N x={W / 2} y={242}>Sin added toil. It did not invent work.</N>
    </Frame>
  );
}

/* 6 — The Seventh Day: six days of work arrive at a blessed day.
   Map: a road of six stops; the seventh is a region, the hero at rest. */
export function TheSeventhDay() {
  const y = 118;
  return (
    <Frame h={252} title="The seventh day" desc="Six days of work arrive at a seventh that God blesses and makes holy. He rests not from weariness but because the work is complete. That rest becomes Israel's Sabbath and, in Hebrews, a rest that remains.">
      <Cap x={W / 2} y={22}>Not recovery · completion</Cap>
      {[0, 1, 2, 3, 4, 5].map((i) => {
        const x = 52 + i * 44;
        return (
          <g key={i}>
            {i < 5 && <line x1={x + 5} y1={y} x2={x + 39} y2={y} stroke="var(--charcoal)" strokeWidth="1.1" />}
            <Stop cx={x} cy={y} />
            <Cap x={x} y={y - 16} size={7.5} fill="var(--muted)">{String(i + 1)}</Cap>
          </g>
        );
      })}
      <N x={162} y={y + 26}>six days · He works</N>
      <N x={162} y={y + 41} size={9.5}>never weary · Isa 40:28</N>
      <line x1={277} y1={y} x2={318} y2={y} {...ARROW_SAGE} />
      <Region x={322} y={44} w={208} h={150} />
      <Cap x={426} y={68} size={8}>The seventh day</Cap>
      <Hero cx={426} cy={y} r={16} />
      <Rays x={426} y={y} r={21} />
      <N x={426} y={166}>blessed · holy · 2:3</N>
      <Rule y={212} />
      <N x={W / 2} y={234}>God rests · Israel rests · a rest remains · Heb 4:9</N>
    </Frame>
  );
}

/* 7 — The Garden of Eden: every tree given, one withheld.
   Map: the garden is the region, full of trees; the tree of life is the hero.
   One tree stands inside a dashed rust ring. A river flows out and parts in four. */
export function TheGardenOfEden() {
  const small: [number, number][] = [[78, 104], [124, 128], [76, 156], [166, 100], [172, 154], [404, 102], [452, 126], [494, 98], [486, 158], [418, 156]];
  return (
    <Frame h={306} title="The garden of Eden" desc="A garden full of trees, every one given to eat freely, with the tree of life in the middle. One tree, the knowledge of good and evil, is withheld. A river flows out of Eden and parts into four.">
      <Cap x={W / 2} y={22}>Permission first · then one boundary</Cap>
      <Region x={40} y={40} w={480} h={172} />
      <Cap x={280} y={62} size={8}>Eden</Cap>
      {small.map(([x, y]) => (
        <Tree key={`${x}${y}`} x={x} y={y} s={0.8} />
      ))}
      <line x1={244} y1={136} x2={244} y2={152} stroke="var(--sage-deep)" strokeWidth="2" strokeLinecap="round" />
      <Hero cx={244} cy={118} r={15} />
      <Rays x={244} y={118} r={20} />
      <N x={244} y={172}>tree of life · 2:9</N>
      <circle cx={326} cy={128} r={25} fill="none" stroke="var(--rust)" strokeWidth="1" strokeDasharray="3 3" />
      <Tree x={326} y={126} s={1.15} fruit />
      <N x={150} y={196} fill="var(--sage-deep)">every tree · eat freely · 2:16</N>
      <N x={400} y={196} fill="var(--rust)">one tree · you must not · 2:17</N>
      {/* the river out of Eden */}
      <path d="M280 212 V232" fill="none" stroke="var(--sage-deep)" strokeWidth="1.3" />
      {[-60, -20, 20, 60].map((dx) => (
        <path key={dx} d={`M280 232 C ${280 + dx * 0.3} 240, ${280 + dx * 0.8} 246, ${280 + dx} 258`} fill="none" stroke="var(--sage-deep)" strokeWidth="1.2" strokeLinecap="round" />
      ))}
      <N x={430} y={250}>a river parts in four · 2:10</N>
      <Rule y={272} />
      <N x={W / 2} y={294}>Every tree but one.</N>
    </Frame>
  );
}

/* 8 — It Is Not Good to Be Alone: the search falls short; the gift arrives.
   Map: the man alone; a dashed rust road to the animals (none fits); a sage
   road arcs over them to the region where two stand as one flesh. */
export function NotGoodToBeAlone() {
  const y = 124;
  return (
    <Frame h={264} title="It is not good to be alone" desc="The man alone is the first thing God calls not good. Among the animals no fitting helper is found. God makes a corresponding partner, and the two become one flesh.">
      <Cap x={W / 2} y={22}>Not good · then one flesh</Cap>
      <circle cx={70} cy={y} r={28} fill="none" stroke="var(--charcoal)" strokeWidth="0.9" strokeDasharray="3 3" />
      <Person x={70} y={y + 2} s={1.4} />
      <Cap x={70} y={82} size={8}>Alone</Cap>
      <N x={70} y={172}>not good · 2:18</N>
      <line x1={104} y1={y} x2={172} y2={y} stroke="var(--rust)" strokeWidth="1.1" strokeDasharray="4 3" markerEnd="url(#gn-arr-rust)" />
      <Lamb x={198} y={y + 4} s={1.1} c="var(--charcoal)" />
      <Bird x={236} y={y - 16} c="var(--charcoal)" />
      <Fish x={252} y={y + 8} c="var(--charcoal)" />
      <Cap x={226} y={92} size={8}>The animals</Cap>
      <N x={226} y={172}>none suitable · 2:20</N>
      <path d={`M94 106 C 160 34, 260 34, 318 78`} {...ARROW_SAGE} />
      <Cap x={206} y={38} size={7.5} fill="var(--sage-deep)">a helper · corresponding</Cap>
      <Region x={322} y={46} w={208} h={164} />
      <Cap x={426} y={68} size={8}>One flesh</Cap>
      <Hero cx={426} cy={96} r={10} />
      <Rays x={426} y={96} r={14} />
      <line x1={416} y1={112} x2={404} y2={126} {...ARROW_SAGE} />
      <line x1={436} y1={112} x2={448} y2={126} {...ARROW_SAGE} />
      <Person x={400} y={154} s={1.4} c="var(--sage-deep)" />
      <Person x={452} y={154} s={1.4} c="var(--sage-deep)" />
      <N x={426} y={194}>bone of my bones · 2:23–24</N>
      <Rule y={226} />
      <N x={W / 2} y={248}>Jesus roots marriage here · Matthew 19:4–6</N>
    </Frame>
  );
}

/* 9 — The Beginning of Our Story: Eden to the new creation.
   Map: the road leaves Eden straight, breaks at the fall (rust), carries a
   promise through the prophets, and arrives at a new creation with the tree of
   life at its heart. The story ends where it began, made new. */
export function BeginningOfOurStory() {
  const y = 118;
  return (
    <Frame h={252} title="The beginning of our story" desc="The Bible opens in Eden with the tree of life, breaks at the fall, carries a promise of restoration through the prophets, and closes in a new creation where the tree of life returns and God dwells with His people.">
      <Cap x={W / 2} y={22}>The story ends where it began · made new</Cap>
      <Tree x={64} y={y} s={1.4} />
      <Cap x={64} y={82} size={8}>Eden</Cap>
      <N x={64} y={160}>Gen 1–2</N>
      <line x1={84} y1={y} x2={162} y2={y} stroke="var(--sage-deep)" strokeWidth="1.3" />
      <circle cx={170} cy={y} r={4} fill="var(--rust)" />
      <Cap x={170} y={y - 16} size={7.5} fill="var(--rust)">The fall</Cap>
      <N x={170} y={y + 26}>Gen 3</N>
      <path d={`M176 ${y} l12 10 l12 -6 l12 10 l12 -6 l12 10 l12 -18`} fill="none" stroke="var(--rust)" strokeWidth="1.2" />
      <Stop cx={258} cy={y} stroke="var(--sage-deep)" />
      <Cap x={258} y={y - 16} size={7.5}>Promise</Cap>
      <N x={258} y={y + 26}>the prophets</N>
      <line x1={264} y1={y} x2={344} y2={y} {...ARROW_SAGE} />
      <Region x={350} y={44} w={180} h={150} />
      <Cap x={440} y={66} size={8}>New creation</Cap>
      <line x1={440} y1={y + 16} x2={440} y2={y + 30} stroke="var(--sage-deep)" strokeWidth="2" strokeLinecap="round" />
      <Hero cx={440} cy={y - 4} r={15} />
      <Rays x={440} y={y - 4} r={20} />
      <N x={440} y={166}>tree of life · Rev 22:2</N>
      <N x={440} y={181} size={9.5}>God with His people · 21:3</N>
      <Rule y={212} />
      <N x={W / 2} y={234}>Before humanity could ask why it existed, God had already given it life.</N>
    </Frame>
  );
}

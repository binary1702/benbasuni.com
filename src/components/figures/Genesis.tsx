import type { ReactNode } from 'react';

/* Figures for "The First 7 Days" — one per chapter. Inline SVG, palette tokens,
   same voice as SystemDiagram: sans caps for labels, serif italics for notes. */

const SANS = 'var(--font-geist-sans), system-ui, sans-serif';
const SERIF = 'var(--font-newsreader), Georgia, serif';
const W = 560;

function Frame({ h, title, desc, children }: { h: number; title: string; desc: string; children: ReactNode }) {
  const id = title.toLowerCase().replace(/[^a-z0-9]+/g, '-');
  return (
    <svg viewBox={`0 0 ${W} ${h}`} className="h-auto w-full" role="img" aria-label={`${title}: ${desc}`}>
      <defs>
        <marker id="gn-arr" viewBox="0 0 8 8" refX="7" refY="4" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
          <path d="M0 0.5 L7.5 4 L0 7.5" fill="none" stroke="var(--charcoal)" strokeWidth="1" />
        </marker>
      </defs>
      {children}
    </svg>
  );
}
function Cap({ x, y, children, fill = 'var(--ink)', anchor = 'middle' as const, size = 9.5 }: { x: number; y: number; children: string; fill?: string; anchor?: 'start' | 'middle' | 'end'; size?: number }) {
  return (
    <text x={x} y={y} textAnchor={anchor} fontSize={size} letterSpacing="1.8" fontFamily={SANS} fill={fill}>
      {children.toUpperCase()}
    </text>
  );
}
function Note({ x, y, children, anchor = 'middle' as const }: { x: number; y: number; children: string; anchor?: 'start' | 'middle' | 'end' }) {
  return (
    <text x={x} y={y} textAnchor={anchor} fontSize="11" fontFamily={SERIF} fontStyle="italic" fill="var(--muted)">
      {children}
    </text>
  );
}
function Box({ x, y, w, h, label, dark = false, fontSize = 9.5 }: { x: number; y: number; w: number; h: number; label: string; dark?: boolean; fontSize?: number }) {
  return (
    <g>
      <rect x={x} y={y} width={w} height={h} rx={3} fill={dark ? 'var(--ink)' : 'var(--ivory)'} stroke="var(--charcoal)" strokeWidth="0.9" />
      <Cap x={x + w / 2} y={y + h / 2 + 3.5} fill={dark ? 'var(--ivory)' : 'var(--ink)'} size={fontSize}>{label}</Cap>
    </g>
  );
}
const ARROW = { stroke: 'var(--charcoal)', strokeWidth: 0.9, markerEnd: 'url(#gn-arr)' } as const;

/* 1 — Before the Beginning: God outside the created order */
export function BeforeTheBeginning() {
  const y = 120;
  return (
    <Frame h={250} title="Before the beginning" desc="God, from everlasting to everlasting, outside the created order. Everything else has a beginning inside it.">
      <Cap x={W / 2} y={22}>God is not inside creation. Creation is inside His will.</Cap>
      <line x1={30} y1={y} x2={W - 30} y2={y} stroke="var(--charcoal)" strokeWidth="0.9" strokeDasharray="1 5" />
      <Note x={30} y={y - 10} anchor="start">from everlasting</Note>
      <Note x={W - 30} y={y - 10} anchor="end">to everlasting</Note>
      <Cap x={W / 2} y={y - 34} size={11}>God</Cap>
      <Note x={W / 2} y={y - 18}>Psalm 90:2</Note>
      <line x1={200} y1={y - 6} x2={200} y2={y + 70} stroke="var(--sage-deep)" strokeWidth="1.2" />
      <Cap x={200} y={y + 86} fill="var(--sage-deep)">"In the beginning" · Gen 1:1</Cap>
      <rect x={200} y={y + 14} width={330} height={44} rx={3} fill="var(--ivory)" stroke="var(--charcoal)" strokeWidth="0.9" />
      <Cap x={365} y={y + 32}>the created order</Cap>
      <Note x={365} y={y + 48}>heavens · earth · stars · oceans · humanity — all with a beginning</Note>
      <Note x={W / 2} y={232}>Made through the Word, the Son — John 1:3, Hebrews 1:2</Note>
    </Frame>
  );
}

/* 2 — And God Said: forming days answered by filling days */
export function AndGodSaid() {
  const rows: [string, string, string][] = [
    ['Day 1', 'light & darkness', 'Day 4'],
    ['Day 2', 'sky & seas', 'Day 5'],
    ['Day 3', 'land & vegetation', 'Day 6'],
  ];
  const fills = ['sun, moon, stars', 'birds & fish', 'animals & man'];
  const top = 70;
  const rh = 46;
  return (
    <Frame h={330} title="And God said" desc="Days one to three form environments; days four to six fill them. Formless and void becomes ordered and inhabited.">
      <Cap x={W / 2} y={22}>Formless and void → ordered and inhabited</Cap>
      <Note x={W / 2} y={40}>Genesis 1:2 → Genesis 1:31</Note>
      <Cap x={150} y={top - 10} fill="var(--muted)">forming</Cap>
      <Cap x={410} y={top - 10} fill="var(--muted)">filling</Cap>
      {rows.map(([d, env, d2], i) => {
        const y = top + i * rh;
        return (
          <g key={d}>
            <Box x={40} y={y} w={60} h={30} label={d} dark />
            <Note x={150} y={y + 19}>{env}</Note>
            <line x1={240} y1={y + 15} x2={300} y2={y + 15} {...ARROW} />
            <Box x={310} y={y} w={60} h={30} label={d2} dark />
            <Note x={450} y={y + 19}>{fills[i]}</Note>
          </g>
        );
      })}
      <line x1={40} y1={top + 3 * rh + 4} x2={W - 40} y2={top + 3 * rh + 4} stroke="var(--rule)" />
      <Box x={200} y={top + 3 * rh + 22} w={160} h={30} label="Day 7 · rest" />
      <Cap x={W / 2} y={292}>"And God said" — the word is sufficient</Cap>
      <Note x={W / 2} y={310}>He spoke, and it came to be. Psalm 33:6, 9</Note>
    </Frame>
  );
}

/* 3 — And It Was Good: six goods, one very good, then the arc */
export function AndItWasGood() {
  const y = 86;
  return (
    <Frame h={250} title="And it was good" desc="God calls each stage good, then the whole very good. Later sin disrupts a good creation; Scripture promises its renewal.">
      <Cap x={W / 2} y={22}>Each part good · the whole very good</Cap>
      {[1, 2, 3, 4, 5, 6].map((d, i) => {
        const x = 70 + i * 84;
        return (
          <g key={d}>
            <circle cx={x} cy={y} r={20} fill="var(--ivory)" stroke="var(--charcoal)" strokeWidth="0.9" />
            <Cap x={x} y={y + 3.5}>{`day ${d}`}</Cap>
            <Note x={x} y={y + 38}>good</Note>
          </g>
        );
      })}
      <path d={`M48 ${y + 50} v8 H${W - 48} v-8`} fill="none" stroke="var(--sage-deep)" strokeWidth="1.2" />
      <Cap x={W / 2} y={y + 76} fill="var(--sage-deep)">very good · Genesis 1:31</Cap>
      <line x1={40} y1={188} x2={W - 40} y2={188} stroke="var(--rule)" />
      <Note x={100} y={222}>good creation</Note>
      <line x1={160} y1={218} x2={212} y2={218} {...ARROW} />
      <Note x={280} y={222}>subjected to futility · Rom 8:20</Note>
      <line x1={372} y1={218} x2={424} y2={218} {...ARROW} />
      <Note x={480} y={222}>awaits liberation</Note>
    </Frame>
  );
}

/* 4 — In His Image: a chain of delegated authority */
export function InHisImage() {
  const y = 96;
  return (
    <Frame h={230} title="In His image" desc="God makes humanity in His image and delegates rule over creatures. Authority flows down from God; dignity follows from the image.">
      <Cap x={W / 2} y={22}>Authority is delegated, not independent</Cap>
      <Box x={40} y={y - 16} w={110} h={32} label="God" dark />
      <line x1={150} y1={y} x2={214} y2={y} {...ARROW} />
      <Cap x={182} y={y - 10} fill="var(--sage-deep)">image</Cap>
      <Box x={216} y={y - 16} w={128} h={32} label="humanity" />
      <line x1={344} y1={y} x2={408} y2={y} {...ARROW} />
      <Cap x={376} y={y - 10} fill="var(--sage-deep)">rule</Cap>
      <Box x={410} y={y - 16} w={110} h={32} label="creatures" />
      <Note x={W / 2} y={y + 40}>Genesis 1:26–27 · Psalm 8</Note>
      <line x1={40} y1={158} x2={W - 40} y2={158} stroke="var(--rule)" />
      <Cap x={W / 2} y={186}>image → dignity</Cap>
      <Note x={W / 2} y={206}>Not earned by wealth, strength, or achievement. Genesis 9:6 · James 3:9</Note>
    </Frame>
  );
}

/* 5 — The Purpose of Man: work before the Fall */
export function ThePurposeOfMan() {
  const y = 96;
  return (
    <Frame h={240} title="The purpose of man" desc="Work is given in Genesis 2, before sin. Genesis 3 adds toil to it. Humanity holds delegated responsibility over what belongs to God.">
      <Cap x={W / 2} y={22}>Work came before the Fall</Cap>
      <line x1={40} y1={y} x2={W - 40} y2={y} stroke="var(--charcoal)" strokeWidth="0.9" />
      <circle cx={150} cy={y} r={5} fill="var(--sage-deep)" />
      <Cap x={150} y={y - 16} fill="var(--sage-deep)">Genesis 2:15</Cap>
      <Note x={150} y={y + 24}>cultivate and keep — work is good</Note>
      <circle cx={400} cy={y} r={5} fill="var(--rust)" />
      <Cap x={400} y={y - 16} fill="var(--rust)">Genesis 3</Cap>
      <Note x={400} y={y + 24}>painful toil is added — not work itself</Note>
      <line x1={40} y1={150} x2={W - 40} y2={150} stroke="var(--rule)" />
      <Box x={60} y={172} w={150} h={30} label="the earth is the Lord's" dark fontSize={7.5} />
      <line x1={210} y1={187} x2={290} y2={187} {...ARROW} />
      <Box x={292} y={172} w={210} h={30} label="delegated responsibility" />
      <Note x={W / 2} y={226}>Psalm 24:1 · Genesis 1:28 · Colossians 3:23</Note>
    </Frame>
  );
}

/* 6 — The Seventh Day: six bars of work, one blessed day, and the thread of rest */
export function TheSeventhDay() {
  const base = 120;
  return (
    <Frame h={250} title="The seventh day" desc="Six days of work, then a seventh that is blessed and made holy. That rest becomes the Sabbath and, in Hebrews, a rest that remains.">
      <Cap x={W / 2} y={22}>Not recovery. Completion.</Cap>
      <Note x={W / 2} y={40}>He will not grow tired or weary. Isaiah 40:28</Note>
      {[1, 2, 3, 4, 5, 6].map((d, i) => {
        const x = 60 + i * 56;
        return (
          <g key={d}>
            <rect x={x} y={base - 50} width={32} height={50} fill="var(--charcoal)" />
            <Cap x={x + 16} y={base + 16} fill="var(--muted)">{String(d)}</Cap>
          </g>
        );
      })}
      <rect x={60 + 6 * 56} y={base - 50} width={32} height={50} fill="none" stroke="var(--sage-deep)" strokeWidth="1.2" strokeDasharray="2 3" />
      <Cap x={60 + 6 * 56 + 16} y={base + 16} fill="var(--sage-deep)">7</Cap>
      <Note x={60 + 6 * 56 + 16} y={base - 58}>blessed · holy</Note>
      <line x1={40} y1={160} x2={W - 40} y2={160} stroke="var(--rule)" />
      <Note x={100} y={196}>God rests · Gen 2:2</Note>
      <line x1={166} y1={192} x2={208} y2={192} {...ARROW} />
      <Note x={280} y={196}>Israel rests · Exodus 20:11</Note>
      <line x1={366} y1={192} x2={408} y2={192} {...ARROW} />
      <Note x={476} y={196}>a rest remains · Heb 4:9</Note>
      <Cap x={W / 2} y={232}>God creates · completes · rests</Cap>
    </Frame>
  );
}

/* 7 — The Garden of Eden: every tree, one boundary */
export function TheGardenOfEden() {
  const cols = 8;
  const rows = 3;
  const x0 = 96;
  const y0 = 70;
  const gap = 52;
  const forbidden = 13; // row 1, col 5
  return (
    <Frame h={230} title="The garden of Eden" desc="A grid of trees, all permitted but one. Permission is given first; the one boundary comes after.">
      <Cap x={W / 2} y={22}>Permission first. Then one boundary.</Cap>
      <Note x={W / 2} y={40}>Genesis 2:16–17</Note>
      {Array.from({ length: cols * rows }, (_, i) => {
        const x = x0 + (i % cols) * gap;
        const y = y0 + Math.floor(i / cols) * 40;
        const no = i === forbidden;
        return (
          <g key={i}>
            <line x1={x} y1={y + 8} x2={x} y2={y + 18} stroke={no ? 'var(--rust)' : 'var(--charcoal)'} strokeWidth="1" />
            <circle cx={x} cy={y} r={9} fill={no ? 'var(--rust)' : 'var(--ivory)'} stroke={no ? 'var(--rust)' : 'var(--charcoal)'} strokeWidth="0.9" />
          </g>
        );
      })}
      <Note x={140} y={212} anchor="start">every tree — "you may eat freely"</Note>
      <circle cx={126} cy={208} r={5} fill="var(--ivory)" stroke="var(--charcoal)" strokeWidth="0.9" />
      <Note x={360} y={212} anchor="start">the one — "you must not"</Note>
      <circle cx={346} cy={208} r={5} fill="var(--rust)" />
    </Frame>
  );
}

/* 8 — It Is Not Good to Be Alone: two corresponding, one flesh */
export function NotGoodToBeAlone() {
  const y = 118;
  return (
    <Frame h={240} title="It is not good to be alone" desc="One figure alone is called not good. A corresponding partner is made, and the two become one flesh.">
      <Cap x={W / 2} y={22}>Good · good · good — then "not good"</Cap>
      <Note x={W / 2} y={40}>Not sin. Aloneness. Genesis 2:18</Note>
      <circle cx={170} cy={y} r={30} fill="var(--ivory)" stroke="var(--rust)" strokeWidth="1.1" />
      <Cap x={170} y={y + 3.5}>alone</Cap>
      <Note x={170} y={y + 50}>not good</Note>
      <line x1={215} y1={y} x2={295} y2={y} {...ARROW} />
      <Cap x={255} y={y - 10} fill="var(--sage-deep)">helper</Cap>
      <Note x={255} y={y + 18}>corresponding</Note>
      <circle cx={345} cy={y} r={30} fill="var(--ivory)" stroke="var(--charcoal)" strokeWidth="0.9" />
      <circle cx={385} cy={y} r={30} fill="var(--ivory)" stroke="var(--charcoal)" strokeWidth="0.9" fillOpacity={0} />
      <Cap x={365} y={y + 3.5}>one flesh</Cap>
      <Note x={365} y={y + 50}>bone of my bones · Genesis 2:23–24</Note>
      <line x1={40} y1={190} x2={W - 40} y2={190} stroke="var(--rule)" />
      <Note x={W / 2} y={218}>Quoted by Jesus in Matthew 19:4–6 — marriage is rooted in creation.</Note>
    </Frame>
  );
}

/* 9 — The Beginning of Our Story: Genesis to Revelation */
export function BeginningOfOurStory() {
  const y = 110;
  const pts: [number, string, string, string][] = [
    [80, 'Genesis 1–2', 'creation', 'very good'],
    [213, 'Genesis 3', 'disruption', 'something good is broken'],
    [346, 'the prophets', 'restoration', 'renewal promised'],
    [480, 'Revelation 21–22', 'new creation', 'God dwells with His people'],
  ];
  return (
    <Frame h={230} title="The beginning of our story" desc="The Bible opens with creation, passes through disruption and promised restoration, and closes with a renewed creation.">
      <Cap x={W / 2} y={22}>The story ends where it began — made new</Cap>
      <path d={`M80 ${y} C 160 ${y - 40}, 400 ${y + 40}, 480 ${y}`} fill="none" stroke="var(--rule)" strokeWidth="1" />
      <line x1={80} y1={y} x2={480} y2={y} stroke="var(--charcoal)" strokeWidth="0.9" {...ARROW} />
      {pts.map(([x, ref, label, note], i) => (
        <g key={ref}>
          <circle cx={x} cy={y} r={6} fill={i === 1 ? 'var(--rust)' : i === 0 || i === 3 ? 'var(--sage-deep)' : 'var(--charcoal)'} />
          <Cap x={x} y={y - 22}>{label}</Cap>
          <Note x={x} y={y + 26}>{ref}</Note>
          <Note x={x} y={y + 42}>{note}</Note>
        </g>
      ))}
      <line x1={40} y1={176} x2={W - 40} y2={176} stroke="var(--rule)" />
      <Note x={W / 2} y={206}>Before humanity could ask why it existed, God had already given it life.</Note>
    </Frame>
  );
}

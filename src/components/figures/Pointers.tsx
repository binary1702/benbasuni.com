import { Frame, Cap, Note, ARROW, ARROW_RUST, ARROW_SAGE, W, FS, SANS, SERIF } from './Genesis';

/* Figures for "Pointers" (/swe/pointers) — one per part. Memory is drawn the
   same way everywhere: a row of cells, the address in mono underneath, the
   value inside. Sage arrow = "points to" (valid). Rust = invalid / dangling.
   Same frame, caps and notes as the other figures so the books read as a set. */

const MONO = 'var(--font-geist-mono), ui-monospace, Menlo, monospace';

function Code({ x, y, children, size = 11, fill = 'var(--ink)', anchor = 'middle' as const }: { x: number; y: number; children: string; size?: number; fill?: string; anchor?: 'start' | 'middle' | 'end' }) {
  return (
    <text x={x} y={y} textAnchor={anchor} fontSize={size * FS} fontFamily={MONO} fill={fill}>
      {children}
    </text>
  );
}

/** A row of memory cells. Each cell: value inside, address below. */
function Cells({ x, y, cells, w = 44, h = 30 }: { x: number; y: number; w?: number; h?: number; cells: { addr?: string; value?: string; name?: string; tone?: 'ink' | 'sage' | 'rust' | 'dim' }[] }) {
  return (
    <g>
      {cells.map((c, i) => {
        const cx = x + i * w;
        const tone = c.tone ?? 'ink';
        const stroke = tone === 'sage' ? 'var(--sage-deep)' : tone === 'rust' ? 'var(--rust)' : 'var(--charcoal)';
        const fill = tone === 'sage' ? 'var(--sage-soft)' : 'var(--ivory)';
        return (
          <g key={i}>
            <rect x={cx} y={y} width={w} height={h} fill={fill} stroke={stroke} strokeWidth={tone === 'dim' ? 0.6 : 0.9} opacity={tone === 'dim' ? 0.55 : 1} />
            {c.value && <Code x={cx + w / 2} y={y + h / 2 + 4} size={11} fill={tone === 'rust' ? 'var(--rust)' : 'var(--ink)'}>{c.value}</Code>}
            {c.addr && <Code x={cx + w / 2} y={y + h + 13} size={7.5} fill="var(--muted)">{c.addr}</Code>}
            {c.name && <Cap x={cx + w / 2} y={y - 8} size={8}>{c.name}</Cap>}
          </g>
        );
      })}
    </g>
  );
}

function Rule({ y }: { y: number }) {
  return <line x1={40} y1={y} x2={W - 40} y2={y} stroke="var(--rule)" />;
}

/* 1 — The two symbols. The line of code that lost him, with the two marks
   that will each get exactly one meaning. */
export function TheTwoSymbols() {
  return (
    <Frame h={236} title="The two symbols" desc="One line of C: int *p = &x. The asterisk and the ampersand are the whole difficulty. Each has one meaning, and this series gives them one each.">
      <Cap x={W / 2} y={22}>the line that lost me</Cap>
      <rect x={120} y={52} width={320} height={64} rx={8} fill="var(--ivory)" stroke="var(--charcoal)" strokeWidth="0.9" />
      <Code x={W / 2} y={94} size={26}>int *p = &x;</Code>
      {/* asterisk at ~x 237, ampersand at ~x 364 (measured against the 26px mono string) */}
      <path d="M236 116 C236 140 200 142 200 160" {...ARROW_RUST} />
      <path d="M364 116 C364 140 400 142 400 160" {...ARROW_RUST} />
      <Cap x={200} y={178} size={8} fill="var(--rust)">asterisk</Cap>
      <Note x={200} y={193}>what is at this address?</Note>
      <Cap x={400} y={178} size={8} fill="var(--rust)">ampersand</Cap>
      <Note x={400} y={193}>where does this live?</Note>
      <Rule y={210} />
      <Note x={W / 2} y={228}>Two questions. That is all a pointer is.</Note>
    </Frame>
  );
}

/* 2 — Every variable lives somewhere. Memory as numbered cells; x takes four
   of them; &x is the number on the first. */
export function WhereVariablesLive() {
  const y = 86;
  return (
    <Frame h={250} title="Where variables live" desc="Memory is one long row of numbered bytes. int x = 42 claims four of them. The name x is for you; the address is for the machine, and &x reads it.">
      <Cap x={W / 2} y={22}>memory · one long row of numbered bytes</Cap>
      <Cells
        x={48}
        y={y}
        w={42}
        cells={[
          { addr: '…0ff8', tone: 'dim' },
          { addr: '…0ffc', tone: 'dim' },
          { addr: '…1000', value: '42', name: 'x', tone: 'sage' },
          { addr: '…1004', tone: 'sage' },
          { addr: '…1008', tone: 'sage' },
          { addr: '…100c', tone: 'sage' },
          { addr: '…1010', tone: 'dim' },
          { addr: '…1014', tone: 'dim' },
          { addr: '…1018', tone: 'dim' },
          { addr: '…101c', tone: 'dim' },
          { addr: '…1020', tone: 'dim' },
        ]}
      />
      {/* brace under x's four bytes */}
      <path d="M132 142 v6 h168 v-6" fill="none" stroke="var(--sage-deep)" strokeWidth="0.9" />
      <Note x={216} y={164}>sizeof(int) · four bytes, one value</Note>
      <path d="M216 176 C216 196 150 196 150 212" {...ARROW_SAGE} />
      <Code x={120} y={218} size={11} anchor="start">&x  →  0x…1000</Code>
      <Note x={400} y={218}>the name is yours · the number is the machine’s</Note>
      <Rule y={232} />
    </Frame>
  );
}

/* 3 — A pointer is an address written down. p is a cell too; its value is
   x's address; * follows the arrow, & draws it. */
export function AnAddressWrittenDown() {
  const y = 92;
  return (
    <Frame h={262} title="An address written down" desc="int *p = &x. p is an ordinary variable with its own address; the value stored in it is the address of x. The ampersand draws the arrow, the asterisk follows it.">
      <Cap x={W / 2} y={22}>int *p = &x;</Cap>
      {/* p */}
      <Cells x={70} y={y} w={120} h={36} cells={[{ addr: '0x…2000', value: '0x…1000', name: 'p', tone: 'sage' }]} />
      {/* x */}
      <Cells x={380} y={y} w={110} h={36} cells={[{ addr: '0x…1000', value: '42', name: 'x' }]} />
      {/* the arrow: p's value is x's address */}
      <path d={`M190 ${y + 18} C 260 ${y + 18} 300 ${y + 18} 380 ${y + 18}`} {...ARROW_SAGE} />
      <Cap x={285} y={y + 10} size={8} fill="var(--sage-deep)">points to</Cap>
      {/* & : from x back to p */}
      <path d={`M380 ${y + 48} C 320 ${y + 78} 250 ${y + 78} 190 ${y + 48}`} {...ARROW} fill="none" />
      <Code x={285} y={y + 86} size={11}>p = &x</Code>
      <Note x={285} y={y + 100}>“write down where x lives”</Note>
      {/* * : from p forward to x's value */}
      <Code x={285} y={y - 30} size={11}>*p</Code>
      <Note x={285} y={y - 16}>“the int at that address” · 42</Note>
      <Rule y={222} />
      <Note x={W / 2} y={242}>p holds a number. The number is a place. The place holds 42.</Note>
    </Frame>
  );
}

/* 4 — Why swap didn't work. Left: by value, the function gets copies and
   swaps the copies. Right: by pointer, the function reaches the originals. */
export function WhySwapFailed() {
  const top = 70;
  const L = 44;
  const R = 310;
  return (
    <Frame h={286} title="Why swap failed" desc="Passing by value hands the function copies, so swapping inside it swaps the copies and leaves the caller untouched. Passing addresses lets the function reach the caller's own variables.">
      <Cap x={L + 100} y={22}>swap(a, b) · by value</Cap>
      <Cap x={R + 100} y={22}>swap(&a, &b) · by address</Cap>
      {/* left: caller */}
      <Cap x={L} y={top - 10} size={7.5} fill="var(--muted)" anchor="start">main</Cap>
      <Cells x={L} y={top} w={48} cells={[{ value: '1', name: 'a' }, { value: '2', name: 'b' }]} />
      {/* left: callee copies */}
      <Cap x={L} y={top + 94} size={7.5} fill="var(--muted)" anchor="start">swap</Cap>
      <Cells x={L} y={top + 104} w={48} cells={[{ value: '2', name: 'x', tone: 'rust' }, { value: '1', name: 'y', tone: 'rust' }]} />
      <path d={`M${L + 24} ${top + 30} L${L + 24} ${top + 96}`} stroke="var(--charcoal)" strokeWidth="0.8" strokeDasharray="2 3" />
      <path d={`M${L + 72} ${top + 30} L${L + 72} ${top + 96}`} stroke="var(--charcoal)" strokeWidth="0.8" strokeDasharray="2 3" />
      <Note x={L + 48} y={top + 70}>copies</Note>
      <Note x={L + 100} y={top + 170}>swapped here · main never notices</Note>
      {/* right: caller */}
      <Cap x={R} y={top - 10} size={7.5} fill="var(--muted)" anchor="start">main</Cap>
      <Cells x={R} y={top} w={48} cells={[{ value: '2', name: 'a', tone: 'sage' }, { value: '1', name: 'b', tone: 'sage' }]} />
      {/* right: callee pointers */}
      <Cap x={R} y={top + 94} size={7.5} fill="var(--muted)" anchor="start">swap</Cap>
      <Cells x={R} y={top + 104} w={48} cells={[{ value: '&a', name: 'x' }, { value: '&b', name: 'y' }]} />
      <path d={`M${R + 24} ${top + 104} C${R + 24} ${top + 70} ${R + 24} ${top + 60} ${R + 24} ${top + 32}`} {...ARROW_SAGE} />
      <path d={`M${R + 72} ${top + 104} C${R + 72} ${top + 70} ${R + 72} ${top + 60} ${R + 72} ${top + 32}`} {...ARROW_SAGE} />
      <Note x={R + 100} y={top + 170}>*x and *y are a and b themselves</Note>
      {/* divider */}
      <line x1={W / 2} y1={40} x2={W / 2} y2={250} stroke="var(--rule)" />
      <Rule y={258} />
      <Note x={W / 2} y={276}>C copies what you hand it. Hand it an address and the copy still points home.</Note>
    </Frame>
  );
}

/* 5 — Arrays are addresses in disguise. Five ints in a row; arr is the first
   address; arr + 2 jumps two ints, not two bytes; arr[2] is *(arr + 2). */
export function ArraysInDisguise() {
  const y = 84;
  const x0 = 90;
  const w = 76;
  return (
    <Frame h={262} title="Arrays in disguise" desc="int arr[5] lays five ints side by side. The name arr is the address of the first. Adding 2 moves two ints (eight bytes), and arr[2] is only a shorter way to write *(arr + 2).">
      <Cap x={W / 2} y={22}>{'int arr[5] = {10, 20, 30, 40, 50};'}</Cap>
      <Cells
        x={x0}
        y={y}
        w={w}
        h={34}
        cells={[
          { addr: '0x…1000', value: '10' },
          { addr: '0x…1004', value: '20' },
          { addr: '0x…1008', value: '30', tone: 'sage' },
          { addr: '0x…100c', value: '40' },
          { addr: '0x…1010', value: '50' },
        ]}
      />
      {/* arr → first cell */}
      <Code x={x0 + w / 2} y={y - 30} size={11}>arr</Code>
      <path d={`M${x0 + w / 2} ${y - 22} L${x0 + w / 2} ${y - 2}`} {...ARROW} fill="none" />
      {/* arr + 2 jump */}
      <path d={`M${x0 + w / 2 + 14} ${y - 10} C ${x0 + w} ${y - 48} ${x0 + 2 * w} ${y - 48} ${x0 + 2.5 * w - 10} ${y - 4}`} {...ARROW_SAGE} />
      <Cap x={x0 + 1.5 * w + 8} y={y - 40} size={7.5} fill="var(--sage-deep)">+ 2 · eight bytes, not two</Cap>
      {/* equivalence */}
      <Code x={x0 + 2.5 * w} y={y + 76} size={11}>arr[2]  ==  *(arr + 2)  ==  30</Code>
      <Note x={x0 + 2.5 * w} y={y + 94}>the bracket is arithmetic followed by an asterisk</Note>
      <Rule y={208} />
      <Code x={W / 2} y={232} size={10} fill="var(--muted)">{'"hi"  →  [ h ][ i ][ \\0 ]  ·  a char array that knows where it ends'}</Code>
    </Frame>
  );
}

/* 6 — Memory you ask for. Stack on the left (dies with the function), heap on
   the right (lives until free). p lives on the stack and points into the heap;
   after free the arrow is rust and dashed. */
export function MemoryYouAskFor() {
  const top = 56;
  return (
    <Frame h={282} title="Memory you ask for" desc="Stack variables vanish when their function returns. malloc hands back heap memory that stays until you free it, and the pointer is your only handle on it. After free, the pointer still holds the old number, but there is nothing there.">
      <Cap x={150} y={22}>stack · dies with the function</Cap>
      <Cap x={420} y={22}>heap · lives until free</Cap>
      <rect x={40} y={top - 16} width={220} height={176} rx={14} fill="var(--ivory)" stroke="var(--charcoal)" strokeWidth="0.9" />
      <rect x={310} y={top - 16} width={210} height={176} rx={14} fill="var(--sage-soft)" stroke="var(--charcoal)" strokeWidth="0.9" />
      {/* stack frames */}
      <Cap x={56} y={top + 6} size={7.5} fill="var(--muted)" anchor="start">main</Cap>
      <Cells x={56} y={top + 14} w={120} h={32} cells={[{ addr: 'on the stack', value: '0x…8000', name: 'p', tone: 'sage' }]} />
      <Cap x={56} y={top + 90} size={7.5} fill="var(--muted)" anchor="start">a function that returned</Cap>
      <Cells x={56} y={top + 98} w={60} h={30} cells={[{ value: '?', name: 'n', tone: 'dim' }]} />
      <Note x={190} y={top + 118} anchor="middle">gone · don’t return &n</Note>
      {/* heap block */}
      <Cells x={330} y={top + 14} w={42} h={32} cells={[{ addr: '0x…8000', value: '' }, { value: '' }, { value: '' }, { value: '' }]} />
      <Note x={414} y={top + 68}>malloc(4 * sizeof(int))</Note>
      {/* live arrow */}
      <path d={`M176 ${top + 30} C 240 ${top + 30} 270 ${top + 30} 330 ${top + 30}`} {...ARROW_SAGE} />
      {/* after free: dashed rust from p to an empty spot */}
      <path d={`M176 ${top + 38} C 250 ${top + 60} 280 ${top + 110} 330 ${top + 120}`} {...ARROW_RUST} strokeDasharray="3 3" />
      <rect x={330} y={top + 104} width={168} height={32} rx={3} fill="none" stroke="var(--rust)" strokeWidth="0.9" strokeDasharray="3 3" />
      <Code x={414} y={top + 124} size={10} fill="var(--rust)">after free(p) · nothing here</Code>
      <Note x={414} y={top + 152}>p still says 0x…8000 · set it to NULL</Note>
      <Rule y={236} />
      <Note x={W / 2} y={256}>Who owns it, and when does it end. Every pointer bug is one of those two questions.</Note>
    </Frame>
  );
}

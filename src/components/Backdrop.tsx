'use client';

import { useEffect, useRef, useState } from 'react';

/* Graph-paper backdrop with π ticking along the top and bottom edges and
   φ (the golden ratio) down the left and right.
   Interactive: a soft spotlight follows the cursor and brightens the grid
   lines beneath it (desktop pointers only). The pointer position is written
   straight to CSS variables, so no React re-render per mouse move.
   Grid spacing/opacity live in .backdrop-grid / .backdrop-grid-hot; π styling in .backdrop-pi. */

// First 1111 digits of π and φ (computed, verified). Each is cut into cells
// of ten digits, five cells to a block; a cell is addressed block.cell.
const PI_DIGITS =
  '3141592653589793238462643383279502884197169399375105820974944592307816406286208998628034825342117067982148086513282306647093844609550582231725359408128481117450284102701938521105559644622948954930381964428810975665933446128475648233786783165271201909145648566923460348610454326648213393607260249141273724587006606315588174881520920962829254091715364367892590360011330530548820466521384146951941511609433057270365759591953092186117381932611793105118548074462379962749567351885752724891227938183011949129833673362440656643086021394946395224737190702179860943702770539217176293176752384674818467669405132000568127145263560827785771342757789609173637178721468440901224953430146549585371050792279689258923542019956112129021960864034418159813629774771309960518707211349999998372978049951059731732816096318595024459455346908302642522308253344685035261931188171010003137838752886587533208381420617177669147303598253490428755468731159562863882353787593751957781857780532171226806613001927876611195909216420198938095257201065485863278865936153381827968230301952035301852968995773622599413891249721775283479131515574857242';
const PHI_DIGITS =
  '1618033988749894848204586834365638117720309179805762862135448622705260462818902449707207204189391137484754088075386891752126633862223536931793180060766726354433389086595939582905638322661319928290267880675208766892501711696207032221043216269548626296313614438149758701220340805887954454749246185695364864449241044320771344947049565846788509874339442212544877066478091588460749988712400765217057517978834166256249407589069704000281210427621771117778053153171410117046665991466979873176135600670874807101317952368942752194843530567830022878569978297783478458782289110976250030269615617002504643382437764861028383126833037242926752631165339247316711121158818638513316203840052221657912866752946549068113171599343235973494985090409476213222981017261070596116456299098162905552085247903524060201727997471753427775927786256194320827505131218156285512224809394712341451702237358057727861600868838295230459264787801788992199027077690389532196819861514378031499741106926088674296226757560523172777520353613936210767389376455606060592165894667595519004005559089502295309423124823552122124154440064703405657347976639723949';

function toBlocks(digits: string): string[][] {
  const cells = digits.slice(1).match(/\d{1,10}/g) ?? [];
  const blocks: string[][] = [];
  for (let i = 0; i < cells.length; i += 5) blocks.push(cells.slice(i, i + 5));
  return blocks;
}
const PI_BLOCKS = toBlocks(PI_DIGITS);
const PHI_BLOCKS = toBlocks(PHI_DIGITS);

type Edge = 'top' | 'bottom' | 'left' | 'right';

/* One scrolling strip of digits along an edge. `start` rotates the block
   order so a strip can begin at block N; numbering stays truthful. */
function NumStrip({ edge, blocks, lead, start = 1 }: { edge: Edge; blocks: string[][]; lead: string; start?: number }) {
  const offset = start - 1;
  const rotated = [...blocks.slice(offset), ...blocks.slice(0, offset)];
  return (
    <div className={`backdrop-pi backdrop-pi--${edge}`} aria-hidden="true">
      <div className="backdrop-pi-track">
        {[0, 1].map((copy) => (
          <span key={copy} className="backdrop-pi-copy">
            {offset === 0 && <span className="pi-group pi-lead">{lead}</span>}
            {rotated.map((block, bi) => {
              const b = ((bi + offset) % blocks.length) + 1;
              return (
                <span key={b} className="pi-block">
                  {b === 1 && offset !== 0 && <span className="pi-group pi-lead">{lead}</span>}
                  {block.map((cell, c) => (
                    <span key={c} className="pi-group">
                      <span className="pi-addr">
                        {b}.{c + 1}
                      </span>
                      {cell}
                    </span>
                  ))}
                </span>
              );
            })}
          </span>
        ))}
      </div>
    </div>
  );
}

export function Backdrop() {
  const ref = useRef<HTMLDivElement>(null);
  // The number strips are purely decorative and amount to ~9,000 text nodes.
  // They mount after hydration so they never appear in the server HTML that
  // crawlers and text extractors read; the grid and wash still render on the server.
  const [strips, setStrips] = useState(false);
  useEffect(() => {
    const id = requestAnimationFrame(() => setStrips(true));
    return () => cancelAnimationFrame(id);
  }, []);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (!window.matchMedia('(pointer: fine)').matches) return;

    // Write the cursor position to the spotlight disc only, so just one
    // element's style is recomputed per frame (not the whole backdrop tree).
    const hot = el.querySelector<HTMLElement>('.backdrop-grid-hot') ?? el;
    let raf = 0;
    let x = -9999;
    let y = -9999;
    const paint = () => {
      raf = 0;
      hot.style.setProperty('--mx', `${x}px`);
      hot.style.setProperty('--my', `${y}px`);
    };
    const onMove = (e: PointerEvent) => {
      x = e.clientX;
      y = e.clientY;
      if (!raf) raf = requestAnimationFrame(paint);
    };
    const onLeave = () => {
      x = -9999;
      y = -9999;
      if (!raf) raf = requestAnimationFrame(paint);
    };
    window.addEventListener('pointermove', onMove, { passive: true });
    document.documentElement.addEventListener('pointerleave', onLeave);
    return () => {
      window.removeEventListener('pointermove', onMove);
      document.documentElement.removeEventListener('pointerleave', onLeave);
      if (raf) cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <>
      <div ref={ref} className="backdrop" aria-hidden="true">
        <div className="backdrop-grid" />
        <div className="backdrop-grid-hot" />
      </div>
      {/* π sits ABOVE the page (own fixed layer) so it can receive hover;
          the strips live in the top/bottom padding where nothing else does.
          π along top/bottom, φ (golden ratio) down the sides. Each pair is
          mirrored and offset so no two strips show the same digits at once. */}
      {strips && (
        <div data-nosnippet>
          <NumStrip edge="bottom" blocks={PI_BLOCKS} lead="3." />
          <NumStrip edge="top" blocks={PI_BLOCKS} lead="3." start={2} />
          {/* φ down the sides: left reads top-to-bottom, right is mirrored and starts at 2.1. */}
          <NumStrip edge="left" blocks={PHI_BLOCKS} lead="1." />
          <NumStrip edge="right" blocks={PHI_BLOCKS} lead="1." start={2} />
        </div>
      )}
    </>
  );
}

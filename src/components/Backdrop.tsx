'use client';

import { useEffect, useRef } from 'react';

/* Graph-paper backdrop with a column of π down the right margin.
   Interactive: a soft spotlight follows the cursor and brightens the grid
   lines beneath it (desktop pointers only). The pointer position is written
   straight to CSS variables, so no React re-render per mouse move.
   Grid spacing/opacity live in .backdrop-grid / .backdrop-grid-hot; π styling in .backdrop-pi. */

// First 1111 digits of π (Machin's formula, computed and verified), grouped
// in tens for readability. Rendered twice so the scroll loops seamlessly.
const PI_DIGITS =
  '3141592653589793238462643383279502884197169399375105820974944592307816406286208998628034825342117067982148086513282306647093844609550582231725359408128481117450284102701938521105559644622948954930381964428810975665933446128475648233786783165271201909145648566923460348610454326648213393607260249141273724587006606315588174881520920962829254091715364367892590360011330530548820466521384146951941511609433057270365759591953092186117381932611793105118548074462379962749567351885752724891227938183011949129833673362440656643086021394946395224737190702179860943702770539217176293176752384674818467669405132000568127145263560827785771342757789609173637178721468440901224953430146549585371050792279689258923542019956112129021960864034418159813629774771309960518707211349999998372978049951059731732816096318595024459455346908302642522308253344685035261931188171010003137838752886587533208381420617177669147303598253490428755468731159562863882353787593751957781857780532171226806613001927876611195909216420198938095257201065485863278865936153381827968230301952035301852968995773622599413891249721775283479131515574857242';
// Cells of ten digits, five cells to a block. Each cell is addressed block.cell
// (1.1 … 1.5, 2.1 … ). The leading '3.' stands alone, outside the blocks.
const CELLS = PI_DIGITS.slice(1).match(/\d{1,10}/g) ?? [];
const BLOCKS: string[][] = [];
for (let i = 0; i < CELLS.length; i += 5) BLOCKS.push(CELLS.slice(i, i + 5));

export function Backdrop() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (!window.matchMedia('(pointer: fine)').matches) return;

    let raf = 0;
    let x = -9999;
    let y = -9999;
    const paint = () => {
      raf = 0;
      el.style.setProperty('--mx', `${x}px`);
      el.style.setProperty('--my', `${y}px`);
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
        {/* Ambient wash: a heavily blurred frame from the keynote, so the
            page shares the video's light and greens. Sits under the grid. */}
        <div className="backdrop-photo" />
        <div className="backdrop-grid" />
        <div className="backdrop-grid-hot" />
      </div>
      {/* π sits ABOVE the page (own fixed layer) so it can receive hover;
          the strip is in the bottom padding where nothing else lives. */}
      <div className="backdrop-pi" aria-hidden="true">
        <div className="backdrop-pi-track">
          {[0, 1].map((copy) => (
            <span key={copy} className="backdrop-pi-copy">
              <span className="pi-group pi-lead">3.</span>
              {BLOCKS.map((block, b) => (
                <span key={b} className="pi-block">
                  {block.map((cell, c) => (
                    <span key={c} className="pi-group">
                      <span className="pi-addr">
                        {b + 1}.{c + 1}
                      </span>
                      {cell}
                    </span>
                  ))}
                </span>
              ))}
            </span>
          ))}
        </div>
      </div>
    </>
  );
}

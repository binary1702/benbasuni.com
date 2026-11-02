'use client';

import { useEffect, useState, type ReactNode } from 'react';
import { FigureModal } from './FigureModal';

type Props = {
  children: ReactNode;
  caption?: string;
  /** Where the figure lives, e.g. "Adam, Cain, Lamech · The First Deception" — shown in the modal. */
  context?: string;
  /** Figure key (e.g. "gen-good"). A link with ?figure=<name> opens this figure's modal on arrival. */
  name?: string;
};

/** Small figures whose panel is narrowed and centered instead of spanning the column. */
const COMPACT = new Set(['nations-nimrod-line']);

export function ClickableFigure({ children, caption, context, name }: Props) {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!name || new URLSearchParams(window.location.search).get('figure') !== name) return;
    const id = requestAnimationFrame(() => setOpen(true));
    return () => cancelAnimationFrame(id);
  }, [name]);

  return (
    <>
      <figure className={`my-6 rounded-lg border border-[var(--figure-edge)] bg-[var(--figure-bg)] px-4 py-5 md:px-6 md:py-6 ${name && COMPACT.has(name) ? 'mx-auto max-w-[26rem] md:max-w-[32rem]' : ''}`}>
        <button
          type="button"
          onClick={() => setOpen(true)}
          className="mx-auto block w-full max-w-[34rem] md:max-w-[44rem] md:[&_svg]:max-h-[calc(100svh-22rem)] cursor-pointer rounded transition-opacity duration-300 hover:opacity-80 focus:outline-none"
          aria-label="Click to enlarge diagram"
        >
          {children}
        </button>
        {caption && (
          <figcaption className="mt-3 text-center font-sans text-[10px] uppercase tracking-[0.18em] text-muted">
            {caption}
          </figcaption>
        )}
      </figure>
      <FigureModal open={open} onClose={() => setOpen(false)} context={context}>
        {children}
      </FigureModal>
    </>
  );
}

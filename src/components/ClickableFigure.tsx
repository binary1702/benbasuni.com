'use client';

import { useState, type ReactNode } from 'react';
import { FigureModal } from './FigureModal';

type Props = {
  children: ReactNode;
  caption?: string;
};

export function ClickableFigure({ children, caption }: Props) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <figure className="my-8">
        <button
          type="button"
          onClick={() => setOpen(true)}
          className="mx-auto block w-full max-w-[34rem] cursor-pointer rounded transition-opacity duration-300 hover:opacity-80 focus:outline-none"
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
      <FigureModal open={open} onClose={() => setOpen(false)}>
        {children}
      </FigureModal>
    </>
  );
}

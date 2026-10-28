'use client';

import Link from 'next/link';
import { Suspense, useEffect, useState, type ReactNode } from 'react';
import { ThoughtsNav } from './ThoughtsNav';

type Item = { href: string; title: string; date: string; chapters: string[] };
type Section = { label: string; href: string; items: Item[] };

/* Sidebar panel icon (two panes, left pane filled when open). */
function PanelIcon({ open }: { open: boolean }) {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
      <rect x="1.5" y="2.5" width="13" height="11" rx="2" stroke="currentColor" />
      <line x1="6" y1="2.5" x2="6" y2="13.5" stroke="currentColor" />
      {open && <rect x="2" y="3" width="3.5" height="10" fill="currentColor" opacity="0.35" />}
    </svg>
  );
}

/* Two-column shell for /s/* and /w/* pages. The sidebar collapses to a thin rail
   holding only the panel toggle; the choice is remembered per browser. */
export function ThoughtsShell({ sections, children }: { sections: Section[]; children: ReactNode }) {
  const [open, setOpen] = useState(true);

  useEffect(() => {
    // Phones start collapsed (the nav would otherwise fill the first screen);
    // desktop remembers the reader's choice. Applied on the next frame so the
    // first paint matches the server HTML.
    const id = requestAnimationFrame(() => {
      const phone = window.matchMedia('(max-width: 767px)').matches;
      let saved: string | null = null;
      try {
        saved = localStorage.getItem('thoughts-nav');
      } catch {}
      if (saved === 'closed' || (phone && saved !== 'open')) setOpen(false);
    });
    return () => cancelAnimationFrame(id);
  }, []);

  // On phones, close the nav after a tap so the reader lands on the text.
  const onNavigate = () => {
    if (window.matchMedia('(max-width: 767px)').matches) setOpen(false);
  };

  const toggle = () => {
    setOpen((o) => {
      try {
        localStorage.setItem('thoughts-nav', o ? 'closed' : 'open');
      } catch {}
      return !o;
    });
  };

  return (
    <div
      className={`mx-auto max-w-[1180px] px-5 py-8 transition-[grid-template-columns] duration-500 ease-[cubic-bezier(0.2,0.6,0.2,1)] sm:px-8 md:grid md:h-svh md:justify-center md:gap-x-12 md:overflow-hidden md:px-12 md:py-16 lg:gap-x-20 ${
        open
          ? 'md:grid-cols-[14rem_minmax(0,42rem)] lg:grid-cols-[16rem_minmax(0,42rem)]'
          : 'md:grid-cols-[2rem_minmax(0,42rem)]'
      }`}
    >
      <aside className="relative z-20 md:sticky md:top-16 md:self-start">
        {/* Header row: panel toggle first, then the wordmark home link.
            The toggle never moves, so collapsing only removes what's to its right. */}
        <div className="flex items-center gap-3">
          <button
            type="button"
            onClick={toggle}
            aria-expanded={open}
            aria-controls="thoughts-nav"
            title={open ? 'Hide sidebar' : 'Show sidebar'}
            className="-ml-1.5 flex h-7 w-7 shrink-0 cursor-pointer items-center justify-center rounded-sm text-muted transition-colors duration-500 hover:bg-sage-soft hover:text-ink"
          >
            <PanelIcon open={open} />
            <span className="sr-only">{open ? 'Hide sidebar' : 'Show sidebar'}</span>
          </button>
          {open && (
            <Link
              href="/"
              className="font-serif text-[1.05rem] font-light tracking-[0.02em] text-ink transition-colors duration-500 hover:text-sage"
            >
              Ben Basuni
            </Link>
          )}
        </div>

        <div
          id="thoughts-nav"
          className={`mt-8 transition-opacity duration-300 ${open ? 'opacity-100' : 'pointer-events-none hidden opacity-0'}`}
        >
          <Suspense>
            <ThoughtsNav sections={sections} onNavigate={onNavigate} />
          </Suspense>
        </div>
      </aside>
      <div className="mt-8 md:mt-0 md:flex md:min-h-0 md:flex-col">{children}</div>
    </div>
  );
}

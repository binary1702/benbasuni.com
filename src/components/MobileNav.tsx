'use client';

import Link from 'next/link';
import { Suspense, useState } from 'react';
import { ThoughtsNav } from './ThoughtsNav';

type Item = { href: string; title: string; date: string; chapters: string[] };
type Section = { label: string; href: string; items: Item[] };

function HamburgerIcon({ open }: { open: boolean }) {
  return (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true">
      <path
        d={open ? 'M4 4l10 10M14 4L4 14' : 'M2 5h14M2 9h14M2 13h14'}
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  );
}

export function MobileNav({ sections }: { sections: Section[] }) {
  const [open, setOpen] = useState(false);

  const onNavigate = () => setOpen(false);

  return (
    <>
      {/* Hamburger button - only visible on mobile, positioned left of theme toggle */}
      <button
        type="button"
        onClick={() => setOpen((o) => !o)}
        aria-expanded={open}
        aria-label={open ? 'Close menu' : 'Open menu'}
        className="flex h-9 w-9 cursor-pointer items-center justify-center rounded-md border border-rule text-muted transition-colors duration-300 hover:border-ink hover:text-ink md:hidden"
      >
        <HamburgerIcon open={open} />
      </button>

      {/* Overlay */}
      {open && (
        <div
          className="fixed inset-0 z-[60] bg-ink/40 backdrop-blur-sm md:hidden"
          onClick={() => setOpen(false)}
          aria-hidden="true"
        />
      )}

      {/* Slide-in panel */}
      <div
        className={`fixed left-0 top-0 z-[70] h-full w-[280px] transform bg-ivory px-6 py-8 shadow-xl transition-transform duration-300 ease-out md:hidden ${
          open ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <Link
          href="/"
          onClick={onNavigate}
          className="font-serif text-[1.05rem] font-light tracking-[0.02em] text-ink transition-colors duration-500 hover:text-sage"
        >
          Ben Basuni
        </Link>

        <div className="mt-8">
          <Suspense>
            <ThoughtsNav sections={sections} onNavigate={onNavigate} />
          </Suspense>
        </div>
      </div>
    </>
  );
}

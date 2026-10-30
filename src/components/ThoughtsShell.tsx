'use client';

import Link from 'next/link';
import { Suspense, type ReactNode } from 'react';
import { ThoughtsNav } from './ThoughtsNav';
import { MobileNav } from './MobileNav';
import { ThemeToggle } from './ThemeToggle';
import { ExpandProvider, useExpand } from './ExpandContext';

type Item = { href: string; title: string; date: string; chapters: string[] };
type Section = { label: string; href: string; items: Item[] };

/* Inner shell that consumes the expand context */
function ShellInner({ sections, children }: { sections: Section[]; children: ReactNode }) {
  const { expanded } = useExpand();

  const onNavigate = () => {};

  return (
    <div data-thoughts-shell className="contents">
      {/* Dim overlay when expanded */}
      {expanded && (
        <div
          className="fixed inset-0 z-40 bg-ink/40 backdrop-blur-sm transition-opacity duration-500"
          onClick={() => {}}
          aria-hidden="true"
        />
      )}
      <div
        className={`relative z-30 mx-auto px-5 py-8 transition-all duration-500 ease-[cubic-bezier(0.2,0.6,0.2,1)] sm:px-8 md:grid md:h-svh md:justify-center md:gap-x-12 md:overflow-hidden md:px-12 md:py-16 lg:gap-x-20 ${
          expanded
            ? 'max-w-[64rem] md:grid-cols-[minmax(0,64rem)]'
            : 'max-w-[1180px] md:grid-cols-[14rem_minmax(0,42rem)] lg:grid-cols-[16rem_minmax(0,42rem)]'
        }`}
      >
      {/* Desktop sidebar - hidden on mobile */}
      <aside className={`relative z-20 hidden md:block md:sticky md:top-16 md:self-start transition-opacity duration-300 ${expanded ? 'md:hidden' : ''}`}>
        <Link
          href="/"
          className="font-serif text-[1.05rem] font-light tracking-[0.02em] text-ink transition-colors duration-500 hover:text-sage"
        >
          Ben Basuni
        </Link>

        <div id="thoughts-nav" className="mt-8">
          <Suspense>
            <ThoughtsNav sections={sections} onNavigate={onNavigate} />
          </Suspense>
        </div>
      </aside>
      {/* Mobile header with hamburger + theme toggle */}
      <div className="flex items-center justify-end gap-3 md:hidden">
        <MobileNav sections={sections} />
        <ThemeToggle />
      </div>
      <div className="mt-6 md:mt-0 md:flex md:min-h-0 md:flex-col">{children}</div>
      </div>
    </div>
  );
}

/* Two-column shell for /s/* and /w/* pages. */
export function ThoughtsShell({ sections, children }: { sections: Section[]; children: ReactNode }) {
  return (
    <ExpandProvider>
      <ShellInner sections={sections}>{children}</ShellInner>
    </ExpandProvider>
  );
}

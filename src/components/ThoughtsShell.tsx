'use client';

import Link from 'next/link';
import { Suspense, type ReactNode } from 'react';
import { ThoughtsNav } from './ThoughtsNav';
import { MobileNav } from './MobileNav';
import { ExpandProvider, useExpand } from './ExpandContext';

type Item = { href: string; title: string; date: string; chapters: string[]; match?: string };
type Section = { label: string; href: string; items: Item[]; match?: string };

/* Inner shell that consumes the expand context */
function ShellInner({ sections, children }: { sections: Section[]; children: ReactNode }) {
  const { sidebarOpen: showSidebar, fontScale } = useExpand();

  const onNavigate = () => {};

  return (
    <div data-thoughts-shell className="contents" style={{ '--reader-scale': fontScale } as React.CSSProperties}>
      <div
        className={`relative z-50 mx-auto px-5 py-8 transition-all duration-500 ease-[cubic-bezier(0.2,0.6,0.2,1)] sm:px-8 md:grid md:h-svh md:justify-center md:overflow-hidden md:px-12 md:py-16 ${
          // Sidebar open/closed keeps two tracks so grid-template-columns animates (the sidebar track eases to 0)
          showSidebar
            ? 'max-w-[1180px] md:max-w-none md:pl-24 md:pr-24 md:gap-x-12 lg:gap-x-20 md:grid-cols-[14rem_minmax(0,1fr)] lg:grid-cols-[16rem_minmax(0,1fr)]'
            : 'max-w-[1180px] md:max-w-none md:pl-24 md:pr-24 md:gap-x-0 md:grid-cols-[0rem_minmax(0,1fr)]'
        }`}
      >
      {/* Desktop sidebar - hidden on mobile */}
      <aside
        aria-hidden={!showSidebar}
        className={`relative z-20 hidden pt-6 md:block md:sticky md:top-0 md:self-start transition-[opacity,transform] duration-500 ease-[cubic-bezier(0.2,0.6,0.2,1)] ${
          showSidebar ? 'opacity-100 translate-x-0 delay-150' : 'pointer-events-none -translate-x-6 overflow-hidden opacity-0'
        }`}
      >
        {/* fixed width so the nav doesn't reflow while its track animates */}
        <div className="md:w-[14rem] lg:w-[16rem]">
        {/* line box mirrors the sheet's h1 (same clamp × 1.05 leading) so "Ben Basuni" sits level with the title */}
        <Link
          href="/"
          className="block font-serif text-[1.05rem] font-light tracking-[0.02em] text-ink transition-colors duration-500 hover:text-sage"
          style={{ lineHeight: 'calc(clamp(1.5rem, 2.2vw, 1.75rem) * 1.05)' }}
        >
          Ben Basuni
        </Link>

        <div id="thoughts-nav" className="mt-8">
          <Suspense>
            <ThoughtsNav sections={sections} onNavigate={onNavigate} />
          </Suspense>
        </div>
        </div>
      </aside>
      {/* Mobile header with hamburger + theme toggle */}
      <div className="flex items-center justify-end gap-3 md:hidden">
        <MobileNav sections={sections} />
      </div>
      <div className="mt-6 md:mt-0 md:flex md:min-h-0 md:flex-col">
        {children}
      </div>
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

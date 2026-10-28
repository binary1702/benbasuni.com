'use client';

import Link from 'next/link';
import { usePathname, useSearchParams } from 'next/navigation';
import { useEffect, useState } from 'react';

type Item = { href: string; title: string; date: string; chapters: string[] };
type Section = { label: string; href: string; items: Item[] };

/* Left sidebar on /s/* and /w/* pages. Each section (Speeches, Writings) is
   a foldable group; the current piece is marked and its chapters listed. The
   groups start folded; the one holding the current page is always open.
   Folds the reader opens are remembered per browser. */
export function ThoughtsNav({ sections, onNavigate }: { sections: Section[]; onNavigate?: () => void }) {
  const pathname = usePathname();
  const sp = useSearchParams();
  const page = Math.max(Number(sp.get('p')) || 1, 1);

  const [opened, setOpened] = useState<Record<string, boolean>>({});
  useEffect(() => {
    const id = requestAnimationFrame(() => {
      try {
        const saved = JSON.parse(localStorage.getItem('nav-open') ?? '{}');
        if (saved && typeof saved === 'object') setOpened(saved);
      } catch {}
    });
    return () => cancelAnimationFrame(id);
  }, []);
  const toggle = (label: string) =>
    setOpened((c) => {
      const next = { ...c, [label]: !c[label] };
      try {
        localStorage.setItem('nav-open', JSON.stringify(next));
      } catch {}
      return next;
    });

  return (
    <nav aria-label="Speeches and writings" className="space-y-5 font-serif">
      {sections.map((section) => {
        const holdsCurrent = section.items.some((i) => i.href === pathname) || pathname === section.href;
        const open = holdsCurrent || Boolean(opened[section.label]);
        const id = `nav-${section.label.toLowerCase()}`;
        return (
          <div key={section.label}>
            <button
              type="button"
              onClick={() => toggle(section.label)}
              aria-expanded={open}
              aria-controls={id}
              className="-ml-3 flex w-[calc(100%+0.75rem)] cursor-pointer items-center justify-between rounded-md px-3 py-1.5 text-left transition-colors duration-300 hover:bg-ink/[0.04]"
            >
              <span className="font-sans text-[12px] font-medium uppercase tracking-[0.22em] text-ink">
                {section.label}
              </span>
              <span
                aria-hidden="true"
                className={`font-sans text-[11px] text-muted transition-transform duration-300 ${open ? 'rotate-90' : ''}`}
              >
                ›
              </span>
            </button>

            <ul id={id} className={`mt-1 space-y-1 ${open ? '' : 'hidden'}`}>
              <li>
                <Link
                  href={section.href}
                  onClick={onNavigate}
                  aria-current={pathname === section.href ? 'page' : undefined}
                  className={`-ml-3 block rounded-md px-3 py-1.5 font-sans text-[10px] uppercase tracking-[0.18em] transition-colors duration-300 ${
                    pathname === section.href ? 'bg-sage-soft text-ink' : 'text-muted hover:bg-ink/[0.04] hover:text-ink'
                  }`}
                >
                  All {section.label.toLowerCase()}
                </Link>
              </li>
              {section.items.map((item) => {
                const href = item.href;
                const active = pathname === href;
                return (
                  <li key={item.href}>
                    <Link
                      href={href}
                      onClick={onNavigate}
                      aria-current={active ? 'page' : undefined}
                      className={`-ml-3 block rounded-md px-3 py-2 text-[1.05rem] font-light leading-snug transition-colors duration-300 ${
                        active ? 'bg-sage-soft text-ink' : 'text-muted hover:bg-ink/[0.04] hover:text-ink'
                      }`}
                    >
                      {item.title}
                      <span className="mt-0.5 block font-sans text-[10px] uppercase tracking-[0.16em] text-muted">
                        {new Date(`${item.date}T00:00:00`).toLocaleDateString('en-US', { year: 'numeric', month: 'short' })}
                      </span>
                    </Link>

                    {active && item.chapters.length > 1 && (
                      <ol className="mb-2 mt-1 space-y-0.5 border-l border-rule pl-3">
                        {item.chapters.map((title, i) => {
                          const n = i + 1;
                          const current = n === page;
                          return (
                            <li key={n}>
                              <Link
                                href={`${href}?p=${n}#reading`}
                                onClick={onNavigate}
                                aria-current={current ? 'step' : undefined}
                                className={`flex items-baseline gap-2 py-1 text-[0.95rem] font-light transition-colors duration-300 ${
                                  current ? 'text-ink' : 'text-muted hover:text-ink'
                                }`}
                              >
                                <span className="font-sans text-[10px] tabular-nums tracking-[0.1em] text-sage">
                                  {String(n).padStart(2, '0')}
                                </span>
                                {title}
                              </Link>
                            </li>
                          );
                        })}
                      </ol>
                    )}
                  </li>
                );
              })}
            </ul>
          </div>
        );
      })}
    </nav>
  );
}

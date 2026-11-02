import Link from 'next/link';
import { Reveal } from '@/components';
import { chapterPath, seriesPath, type CatalogBook, type CatalogSeries } from '@/content/books';

const ROMAN = ['I', 'II', 'III', 'IV', 'V', 'VI', 'VII', 'VIII', 'IX', 'X', 'XI', 'XII'];

function BookCard({ s, b, i }: { s: CatalogSeries; b: CatalogBook; i: number }) {
  const body = (
    <>
      <div className="flex items-baseline justify-between gap-3">
        <span className="font-sans text-[10px] uppercase tracking-[0.22em] text-sage">Book {ROMAN[i] ?? i + 1}</span>
        {b.ref && <span className="font-sans text-[10px] uppercase tracking-[0.18em] text-muted">{b.ref}</span>}
      </div>
      <h3 className="mt-4 font-serif text-[1.45rem] font-light leading-[1.15] tracking-[-0.01em] text-ink transition-colors duration-300 group-hover:text-sage md:text-[1.6rem]">
        {b.title}
      </h3>
      {b.dek && <p className="mt-2 font-serif text-[0.98rem] font-light italic leading-[1.45] text-muted">{b.dek.replace(/\n/g, ' ')}</p>}
      <p className="mt-auto pt-6 font-sans text-[10px] uppercase tracking-[0.18em] text-muted">
        {b.published ? (
          <>
            {b.chapters.length} chapters <span className="ml-1 inline-block transition-transform duration-300 group-hover:translate-x-1">→</span>
          </>
        ) : (
          'Coming soon'
        )}
      </p>
    </>
  );
  const card = 'flex h-full flex-col sm:min-h-[200px] rounded-lg border border-rule p-5 md:p-6';
  return b.published ? (
    <Link
      href={chapterPath(s, b, b.chapters[0])}
      className={`group ${card} transition-colors duration-300 hover:border-sage/50 hover:bg-ink/[0.03] focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-sage`}
    >
      {body}
    </Link>
  ) : (
    <div className={`${card} border-dashed opacity-55`} aria-disabled="true">
      {body}
    </div>
  );
}

/* Books as cards, grouped by series, in the same sheet as the reader (used by /books and /books/<series>). */
export function BooksIndex({ eyebrow, title, description, list, linkSeries = false }: {
  eyebrow: string;
  title: string;
  description: string;
  list: CatalogSeries[];
  /** on /books, the series heading links to the series page */
  linkSeries?: boolean;
}) {
  return (
    <main className="contents">
      <section className="sheet md:flex md:min-h-0 md:flex-1 md:flex-col">
        <Reveal as="header">
          <p className="font-sans text-[10px] uppercase tracking-[0.18em] text-sage">{eyebrow}</p>
          <h1 className="mt-2 font-serif font-light leading-[1.05] tracking-[-0.02em] text-ink" style={{ fontSize: 'clamp(1.75rem, 2.6vw, 2.25rem)' }}>
            {title}
          </h1>
          <p className="mt-2 font-serif text-[0.95rem] font-light italic leading-[1.45] text-muted md:text-[1rem]">{description}</p>
        </Reveal>
        <Reveal as="div" delay={100} className="scroll-pane mt-4 border-t border-rule pt-5 md:min-h-0 md:flex-1 md:overflow-y-auto md:pr-4">
          {list.map((s) => (
            <section key={s.slug} className="mb-10 last:mb-0">
              {linkSeries && (
                <header className="mb-4">
                  <h2 className="font-serif text-[1.25rem] font-light text-ink">
                    <Link href={seriesPath(s)} className="transition-colors duration-300 hover:text-sage">{s.title}</Link>
                  </h2>
                  <p className="mt-0.5 font-serif text-[0.95rem] font-light italic text-muted">{s.dek}</p>
                </header>
              )}
              <ol className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-3">
                {s.books.map((b, i) => (
                  <li key={b.slug}>
                    <BookCard s={s} b={b} i={i} />
                  </li>
                ))}
              </ol>
            </section>
          ))}
        </Reveal>
      </section>
    </main>
  );
}

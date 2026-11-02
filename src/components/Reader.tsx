import Link from 'next/link';
import { CopyButton, ShareButton, Reveal, ExpandButton, FontSizeButtons, ClickableFigure, CopyableTitle, ThemeToggle } from '@/components';
import { FIGURES, type FigureName } from '@/components/figures';
import type { Block } from '@/content/thoughts';
import { bibleVerseUrl } from '@/lib/bible-books';

/* The reading view shared by one-page essays (/s, /phil, /swe) and book chapters (/books/…):
   header (title, chapter · passage, date, controls), the chapter's blocks, and the pager.
   Pages decide where things live (chapterHref, prev/next outside the piece); this only renders. */

export type ReaderChapter = { title: string | null; ref?: string; draft?: boolean; blocks: Block[] };
export type ReaderLink = { href: string; title: string } | null;

/* **double** → bold; *single* → italics; [text](url) → link; "\n" → line break; Bible verses → links */
/* Hebrew words: wherever one appears in *italics* it is coloured orange (var(--keyword)).
   Add new transliterations here, lowercase. Akkadian (Bab-ili, Etemenanki) is left out on purpose. */
const KEY_WORDS = new Set([
  'adam',
  'adamah',
  'arum',
  'arummim',
  'atsav',
  'balal',
  'berit',
  'chamas',
  'chavvah',
  'chemar',
  'chen',
  'chomer',
  'enosh',
  'gabar',
  'gibbor',
  'havah',
  'hevel',
  '’ivri',
  'kaphar',
  'kopher',
  'marad',
  'mashal',
  'nilbenah levenim',
  'noach',
  'peleg',
  'qeshet',
  're’ach nichoach',
  'ruach',
  'sha’ar',
  'shachat',
  'shat',
  'shomer',
  'teshuqah',
  'tevah',
  'tov',
  'yapht',
  'yatsar',
  'yepheth',
  'yetzer',
  'zera',
]);

function Inline({ text }: { text: string }) {
  // Split by **bold**, *italics*, [links](url), and newlines
  const parts = text.split(/(\*\*[^*]+\*\*|\*[^*]+\*|\[[^\]]+\]\([^)]+\)|\n)/g);

  return (
    <>
      {parts.map((part, i) => {
        if (part === '\n') return <br key={i} />;
        if (part.startsWith('**') && part.endsWith('**')) {
          return <strong key={i}>{part.slice(2, -2)}</strong>;
        }
        if (part.startsWith('*') && part.endsWith('*')) {
          const word = part.slice(1, -1);
          return KEY_WORDS.has(word.toLowerCase()) ? (
            <em key={i} className="text-[var(--keyword)]">{word}</em>
          ) : (
            <em key={i}>{word}</em>
          );
        }
        const link = part.match(/^\[([^\]]+)\]\(([^)]+)\)$/);
        if (link) {
          const [, raw, href] = link;
          // Link labels may carry their own **bold** / *italic* words, e.g. [declares that it is *good*](…)
          const label = raw.split(/(\*\*[^*]+\*\*|\*[^*]+\*)/g).map((seg, j) =>
            seg.startsWith('**') && seg.endsWith('**') ? <strong key={j}>{seg.slice(2, -2)}</strong>
              : seg.startsWith('*') && seg.endsWith('*') ? <em key={j}>{seg.slice(1, -1)}</em>
              : seg
          );
          // Scripture (Shavat) links stay sage like the auto-linked verses; cross-references to other chapters/pages are blue.
          const cls = href.includes('shavat.app')
            ? 'text-sage-deep underline decoration-sage-deep/30 underline-offset-2 transition-colors hover:decoration-sage-deep'
            : 'text-[var(--xref)] underline decoration-[var(--xref)]/30 underline-offset-2 transition-colors hover:decoration-[var(--xref)]';
          return href.startsWith('/') ? (
            <Link key={i} href={href} className={cls}>{label}</Link>
          ) : (
            <a key={i} href={href} target="_blank" rel="noopener noreferrer" className={cls}>{label}</a>
          );
        }

        // Check for Bible verses in this part
        const segments: React.ReactNode[] = [];
        let lastIndex = 0;
        let match;

        // Book (optionally numbered, e.g. "1 John"), chapter:verse, optional range with - or –
        const regex = /\b((?:[123]\s)?[A-Za-z]+)\s+(\d+):(\d+(?:[-–]\d+)?)/g;
        while ((match = regex.exec(part)) !== null) {
          const [fullMatch, book, chapter, verse] = match;
          const url = bibleVerseUrl(book.trim(), chapter, verse);

          if (url) {
            if (match.index > lastIndex) {
              segments.push(part.slice(lastIndex, match.index));
            }
            segments.push(
              <a
                key={`${i}-${match.index}`}
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sage-deep underline decoration-sage-deep/30 underline-offset-2 transition-colors hover:decoration-sage-deep"
              >
                {fullMatch}
              </a>
            );
            lastIndex = match.index + fullMatch.length;
          }
        }

        if (lastIndex < part.length) {
          segments.push(part.slice(lastIndex));
        }

        return segments.length > 0 ? <span key={i}>{segments}</span> : part;
      })}
    </>
  );
}

function BlockView({ block, context }: { block: Block; context?: string }) {
  switch (block.type) {
    case 'h':
      return (
        <h2 className="mt-12 font-serif text-[1.5rem] font-light tracking-[-0.01em] text-ink md:text-[1.75rem]">
          {block.text}
        </h2>
      );
    case 'sub':
      // Subheading within a chapter; em-sized so it follows the reader's − / + text size
      return <h3 className="mt-10 font-serif text-[1.15em] font-normal tracking-[-0.005em] text-ink">{block.text}</h3>;
    case 'quote': {
      // Short quotes (one line's worth) are kept on a single row on desktop
      // by sizing them to the column; longer ones wrap normally.
      const oneLine = block.text.length <= 76;
      return (
        <blockquote className="my-7 border-l border-sage/50 pl-5">
          <p
            className={`font-serif font-light ${block.italic === false ? '' : 'italic'} leading-[1.5] text-ink ${
              oneLine
                ? 'text-[calc(1.05rem*var(--reader-scale,1))] md:whitespace-nowrap md:text-[calc(1.3125rem*var(--reader-scale,1))]'
                : 'text-[calc(1.15rem*var(--reader-scale,1))] md:text-[calc(1.625rem*var(--reader-scale,1))]'
            }`}
          >
            <Inline text={block.text} />
          </p>
          {block.by && (
            <footer className="mt-3 font-sans text-[11px] uppercase tracking-[0.18em] text-sage">
              {(() => {
                // Use manual link if provided, otherwise try to auto-detect Bible verse
                const link = block.link || (() => {
                  const match = block.by.match(/^(\d?\s?[A-Za-z]+)\s+(\d+):(\d+(?:-\d+)?)$/);
                  if (match) {
                    const [, book, chapter, verse] = match;
                    return bibleVerseUrl(book.trim(), chapter, verse);
                  }
                  return null;
                })();
                return link ? (
                  <a
                    href={link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="underline decoration-sage/40 underline-offset-2 transition-colors hover:decoration-sage"
                  >
                    {block.by}
                  </a>
                ) : (
                  block.by
                );
              })()}
            </footer>
          )}
        </blockquote>
      );
    }
    case 'figure': {
      const Fig = FIGURES[block.name as FigureName];
      if (!Fig) return null;
      return (
        <ClickableFigure caption={block.caption} context={context} name={block.name}>
          <Fig />
        </ClickableFigure>
      );
    }
    case 'table':
      // Small fact table: caps header, serif rows, hairline rules. Scrolls sideways on narrow phones
      // instead of squeezing; the first column reads as the row's name.
      return (
        <div className="my-7 overflow-x-auto">
          <table className="w-full border-collapse text-left text-[0.92em] leading-[1.45]">
            <thead>
              <tr className="border-b border-sage/50">
                {block.head.map((h) => (
                  <th key={h} className="whitespace-nowrap pb-2 pr-5 align-bottom font-sans text-[10px] font-normal uppercase tracking-[0.2em] text-sage last:pr-0">
                    {h}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {block.rows.map((r, i) => (
                <tr key={i} className="border-b border-rule">
                  {r.map((c, j) => (
                    <td key={j} className={`py-2.5 pr-5 align-top last:pr-0 ${j < 2 ? 'whitespace-nowrap' : ''} ${j === 0 ? 'text-ink' : ''}`}>
                      <Inline text={c} />
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      );
    case 'list': {
      const List = block.ordered ? 'ol' : 'ul';
      return (
        <List className="mt-4 space-y-2 pl-5">
          {block.items.map((item, i) => (
            <li key={i} className={`${block.ordered ? 'list-decimal' : 'list-disc'} marker:text-sage`}>
              <Inline text={item} />
            </li>
          ))}
        </List>
      );
    }
    default:
      return (
        <p className="mt-4 text-justify hyphens-auto" lang="en">
          <Inline text={block.text} />
        </p>
      );
  }
}

function formatDate(iso: string) {
  return new Date(`${iso}T00:00:00`).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
}

export function Reader({
  title,
  date,
  chapters,
  page,
  chapterHref,
  prevOut,
  nextOut,
  url,
  bookText,
  pageText,
  jsonLd,
}: {
  title: string;
  date: string;
  chapters: ReaderChapter[];
  /** 1-based index of the chapter being shown */
  page: number;
  /** URL of chapter n (1-based) within this piece */
  chapterHref: (n: number) => string;
  /** where the pager goes past the first / last chapter (the previous / next piece) */
  prevOut: ReaderLink;
  nextOut: ReaderLink;
  url: string;
  bookText: string;
  pageText: string;
  jsonLd: object;
}) {
  const chapter = chapters[page - 1];
  const prevChapter = page > 1 ? page - 1 : null;
  const nextChapter = page < chapters.length ? page + 1 : null;
  return (
    <main className="contents">
      {/* display:contents keeps the sheet's flex sizing; the landmark is for assistive tech and crawlers */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
    <article id="reading" className="sheet scroll-mt-4 md:flex md:min-h-0 md:flex-1 md:flex-col">
      {/* Header: title left, date + copy + expand right, horizontally aligned */}
      <Reveal as="header" className="flex shrink-0 items-start justify-between gap-4 border-b border-rule pb-4">
        <div>
          <CopyableTitle text={bookText} label="Copy entire book">
            <h1
              className="font-serif font-light leading-[1.05] tracking-[-0.02em] text-ink"
              style={{ fontSize: 'clamp(1.5rem, 2.2vw, 1.75rem)' }}
            >
              {title}
            </h1>
          </CopyableTitle>
          {/* Chapter title · Scripture passage. Outside the copy button so the passage can be a link.
              Keyed by page so the passage fades in on every chapter change. */}
          {chapter.title && chapters.length > 1 && (
            <p className="mt-0.5 flex flex-wrap items-baseline gap-x-2 font-serif font-light text-muted" style={{ fontSize: 'clamp(0.9rem, 1.5vw, 1rem)' }}>
              <span>{chapter.title}</span>
              {chapter.ref && (() => {
                const m = chapter.ref.match(/^((?:[123]\s)?[A-Za-z]+)\s+(\d+)(?::(\d+))?/);
                const href = m ? bibleVerseUrl(m[1], m[2], m[3]) : null;
                const cls = 'ref-fade whitespace-nowrap font-sans text-[11px] uppercase tracking-[0.3em] text-sage';
                return (
                  <span key={page} className={cls}>
                    <span aria-hidden="true" className="mr-2 text-muted">·</span>
                    {href ? (
                      <a href={href} target="_blank" rel="noopener noreferrer" title={`Read ${chapter.ref} on Shavat`} className="transition-colors duration-500 hover:text-sage-deep">
                        {chapter.ref}
                      </a>
                    ) : (
                      chapter.ref
                    )}
                  </span>
                );
              })()}
            </p>
          )}
          <time dateTime={date} className="mt-1 block font-sans text-[10px] uppercase tracking-[0.18em] text-muted">
            {formatDate(date)}
          </time>
        </div>
        {/* Two rows of controls, right-aligned: share / copy / theme / expand, then text size */}
        <div className="flex flex-col items-end gap-1">
          <div className="flex items-center gap-2">
            <ShareButton url={url} title={title} />
            <CopyButton text={pageText} label="Copy this page" />
            {/* desktop only: phones use the site-wide corner toggle */}
            <span className="hidden md:flex">
              <ThemeToggle />
            </span>
            <ExpandButton />
          </div>
          <div className="flex items-center gap-2">
            <FontSizeButtons />
          </div>
        </div>
      </Reveal>

      {/* One chapter per page */}
      <Reveal
        key={page}
        as="section"
        delay={100}
        className="scroll-pane pt-4 font-serif text-[calc(1.125rem*var(--reader-scale,1))] font-light leading-[1.6] text-charcoal md:min-h-0 md:flex-1 md:overflow-y-auto md:-mr-4 md:pr-4 md:text-[calc(1.65rem*var(--reader-scale,1))] [&>*:first-child]:mt-0"
      >
        {/* Draft chapters only render in dev (they are filtered out of production builds); no on-page label. */}
        {chapter.draft && chapter.blocks.length === 0 && <p className="italic text-muted">Not yet written.</p>}
        {chapter.blocks.map((block, i) => (
          <BlockView key={i} block={block} context={chapter.title ? `${title} · ${chapter.title}` : title} />
        ))}
      </Reveal>

      {/* Chapter pagination */}
      <Reveal as="footer" delay={150} className="mt-5 shrink-0 border-t border-rule pt-4 font-serif text-[1rem] font-light">
        {/* Grid, not flex: the two outer columns are equal (1fr) so the passage is always dead center,
            whatever the lengths of the previous/next titles. */}
        <div className="grid grid-cols-2 items-baseline gap-x-6 md:grid-cols-[1fr_auto_1fr]">
          {prevChapter ? (
            <Link href={chapterHref(prevChapter)} className="min-w-0 justify-self-start text-ink transition-colors duration-500 hover:text-sage">
              ← {prevChapter}. {chapters[prevChapter - 1].title ?? 'Opening'}
            </Link>
          ) : prevOut ? (
            <Link href={prevOut.href} className="min-w-0 justify-self-start text-muted transition-colors duration-500 hover:text-sage">
              ← {prevOut.title}
            </Link>
          ) : (
            <span />
          )}
          {/* Centre: page count (on phones it sits on its own row above) */}
          <span className="col-span-2 order-first mb-2 text-center font-sans text-[11px] uppercase tracking-[0.22em] text-sage md:order-none md:col-span-1 md:mb-0">
            {page} / {chapters.length}
          </span>
          {nextChapter ? (
            <Link href={chapterHref(nextChapter)} className="min-w-0 justify-self-end text-right text-ink transition-colors duration-500 hover:text-sage">
              {nextChapter}. {chapters[nextChapter - 1].title ?? 'Opening'} →
            </Link>
          ) : nextOut ? (
            <Link href={nextOut.href} className="min-w-0 justify-self-end text-right text-muted transition-colors duration-500 hover:text-sage">
              {nextOut.title} →
            </Link>
          ) : (
            <span />
          )}
        </div>
      </Reveal>
    </article>
    </main>
  );
}

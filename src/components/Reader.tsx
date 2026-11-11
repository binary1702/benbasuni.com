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
  'bene ha-adam',
  'berit',
  'chamas',
  'chavvah',
  'chemar',
  'chen',
  'chomer',
  'elohim',
  'enosh',
  'gabar',
  'gibbor',
  'gibborim',
  'havah',
  'hevel',
  '’ivri',
  'ivri',
  'kaphar',
  'le-yepheth',
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
  'shem',
  'shofekh dam ha-adam, ba-adam damo yishafekh',
  'shomer',
  'teshuqah',
  'tevah',
  'tov',
  'yapht',
  'yapht elohim le-yepheth',
  'yatsar',
  'yepheth',
  'yetzer',
  'zera',
]);


/* Minimal C highlighter for code blocks: comments, strings/chars, keywords, numbers, the two pointer
   operators. Palette: keywords sage, strings rust, comments muted, & and * in the keyword accent so
   the symbols the book is about stand out on the page. Everything else stays ink. */
const C_KEYWORDS = new Set(['int', 'char', 'void', 'const', 'return', 'if', 'else', 'while', 'for', 'sizeof', 'double', 'float', 'long', 'unsigned', 'struct', 'static', 'NULL']);
const C_TOKEN = /(\/\/[^\n]*|\/\*[\s\S]*?\*\/|"(?:\\.|[^"\\])*"|'(?:\\.|[^'\\])*'|\b[A-Za-z_]\w*\b|\b0x[0-9a-fA-F]+\b|\b\d+\b|[&*])/g;
function highlightC(src: string) {
  const parts = src.split(C_TOKEN);
  return parts.map((t, i) => {
    if (!t) return null;
    if (t.startsWith('//') || t.startsWith('/*')) return <span key={i} className="italic text-muted">{t}</span>;
    if (t.startsWith('"') || t.startsWith("'")) return <span key={i} className="text-rust">{t}</span>;
    if (C_KEYWORDS.has(t)) return <span key={i} className="text-sage-deep">{t}</span>;
    if (t === '&' || t === '*') return <span key={i} className="font-semibold text-[var(--keyword)]">{t}</span>;
    if (/^(0x[0-9a-fA-F]+|\d+)$/.test(t)) return <span key={i} className="text-sage-deep/80">{t}</span>;
    return <span key={i}>{t}</span>;
  });
}

function Inline({ text }: { text: string }) {
  // Split by **bold**, *italics*, [links](url), and newlines
  const parts = text.split(/(`[^`]+`|\*\*[^*]+\*\*|\*[^*]+\*|\[[^\]]+\]\([^)]+\)|\n)/g);

  return (
    <>
      {parts.map((part, i) => {
        if (part === '\n') return <br key={i} />;
        if (part.length > 2 && part.startsWith('`') && part.endsWith('`')) {
          return (
            <code key={i} className="rounded bg-ink/[0.06] px-1 py-px font-mono text-[0.86em] text-ink">
              {part.slice(1, -1)}
            </code>
          );
        }
        if (part.startsWith('**') && part.endsWith('**')) {
          // Bold may carry `code` inside it, e.g. **`x` is the name we use**
          return <strong key={i}><Inline text={part.slice(2, -2)} /></strong>;
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
      // Every quote uses one size, whatever its length, so quotes read as a set.
      return (
        <blockquote className="my-7 border-l border-sage/50 pl-5">
          <p
            className={`font-serif font-light ${block.italic === false ? '' : 'italic'} leading-[1.5] text-ink text-[calc(1.15rem*var(--reader-scale,1))] md:text-[calc(1.625rem*var(--reader-scale,1))]`}
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
    case 'code':
      // Verbatim code; sized off the reader scale like the prose so − / + still apply.
      return (
        <pre className="my-6 overflow-x-auto rounded-md border border-rule bg-ink/[0.04] px-4 py-3 font-mono text-[0.8em] leading-[1.6] text-ink">
          <code>{highlightC(block.text)}</code>
        </pre>
      );
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
      // Small fact table: caps header, serif rows, hairline rules. Built to fit the reading column with no
      // sideways scrolling: cells wrap, and only short cells (numbers, names, "0 – 930") stay on one line.
      // Tighter type and padding on phones so four columns still fit.
      // Phones: a 4+ column table can't fit, so each row becomes a small stacked entry
      // (first cell as its title, the rest as label · value lines). Desktop keeps the table.
      const stack = block.head.length >= 4;
      return (
        <div className="my-7">
          {stack && (
            <div className="divide-y divide-rule border-y border-rule text-[0.84em] leading-[1.35] md:hidden">
              {block.rows.map((r, i) => {
                // A column whose cells are all short (e.g. a sign, a number) rides on the title line as a badge,
                // the same column in every row; everything else stacks below with its label.
                const badge = block.head.findIndex((_, j) => j > 0 && block.rows.every((row) => row[j].split('*').join('').length <= 20));
                return (
                  <div key={i} className="py-2">
                    <p className="flex items-baseline justify-between gap-3 text-ink">
                      <span>
                        <Inline text={r[0]} />
                      </span>
                      {badge > 0 && (
                        <span className="shrink-0 font-sans text-[9px] uppercase tracking-[0.16em] text-sage">
                          <Inline text={r[badge]} />
                        </span>
                      )}
                    </p>
                    {r.map((c, j) =>
                      j === 0 || j === badge ? null : (
                        <p key={j} className="mt-0.5">
                          <span className="mr-1.5 font-sans text-[8.5px] uppercase tracking-[0.14em] text-muted">{block.head[j]}</span>
                          <Inline text={c} />
                        </p>
                      ),
                    )}
                  </div>
                );
              })}
            </div>
          )}
          <table className={`${stack ? 'hidden md:table' : ''} w-auto max-w-full border-collapse text-left text-[0.82em] leading-[1.4] md:text-[0.64em] md:leading-[1.45]`}>
            <thead>
              <tr className="border-b border-sage/50">
                {block.head.map((h, i) => (
                  <th key={i} className="pb-2 pr-3 align-bottom font-sans text-[9px] font-normal uppercase tracking-[0.16em] text-sage last:pr-0 md:pr-5 md:text-[10px] md:tracking-[0.2em]">
                    {h}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {block.rows.map((r, i) => (
                <tr key={i} className="border-b border-rule">
                  {r.map((c, j) => (
                    <td
                      key={j}
                      className={`py-2 pr-3 align-top last:pr-0 md:py-2.5 md:pr-5 ${j === 0 || c.split('*').join('').length <= 14 ? 'whitespace-nowrap' : ''} ${j === 0 ? 'text-ink' : ''}`}
                    >
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
  kicker,
  numbered = false,
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
  /** small label before the title, e.g. "Book V", so a reader knows where this piece sits in its series */
  kicker?: string;
  /** show the chapter number before the chapter title ("4 | The Nakedness of Noah") */
  numbered?: boolean;
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
              {kicker && (
                <span className="mb-1.5 block font-sans text-[10px] uppercase tracking-[0.3em] text-sage">{kicker}</span>
              )}
              {title}
            </h1>
          </CopyableTitle>
          {/* Chapter title · Scripture passage. Outside the copy button so the passage can be a link.
              Keyed by page so the passage fades in on every chapter change. */}
          {chapter.title && chapters.length > 1 && (
            <p className="mt-0.5 flex flex-wrap items-baseline gap-x-2 font-serif font-light text-muted" style={{ fontSize: 'clamp(0.9rem, 1.5vw, 1rem)' }}>
              <span>
                {numbered && (
                  <>
                    <span className="font-sans text-[0.8em] tabular-nums text-muted">{page}</span>
                    <span aria-hidden="true" className="mx-2 text-rule">|</span>
                  </>
                )}
                {chapter.title}
              </span>
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

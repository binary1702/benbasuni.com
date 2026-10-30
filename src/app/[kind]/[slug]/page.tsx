import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { CopyButton, ShareButton, Reveal, ExpandButton, ClickableFigure } from '@/components';
import { FIGURES, type FigureName } from '@/components/figures';
import { thoughts, getThought, getChapters, chapterText, fullText, thoughtPath, KIND_PREFIX, PREFIX_KIND, KIND_LABEL, KIND_SCHEMA, type Block } from '@/content/thoughts';
import { SITE_URL, SITE_NAME, AUTHOR } from '@/lib/site';
import { bibleVerseUrl } from '@/lib/bible-books';

export function generateStaticParams() {
  return thoughts.map((t) => ({ kind: KIND_PREFIX[t.kind], slug: t.slug }));
}

export async function generateMetadata({ params }: PageProps<'/[kind]/[slug]'>): Promise<Metadata> {
  const { kind, slug } = await params;
  const t = getThought(slug);
  if (!t || PREFIX_KIND[kind] !== t.kind) return {};
  const path = thoughtPath(t);
  const description = t.dek.replace(/\n/g, ' ');
  return {
    title: { absolute: path },
    description,
    // Chapters live at ?p=N; the piece's canonical is its base URL.
    alternates: { canonical: path },
    openGraph: {
      type: 'article',
      title: t.title,
      description,
      url: path,
      siteName: SITE_NAME,
      publishedTime: t.date,
      authors: [AUTHOR.url],
      section: KIND_LABEL[t.kind],
    },
    twitter: { card: 'summary_large_image', title: t.title, description },
  };
}

/* **double** → bold; *single* → italics; "\n" → line break; Bible verses → links */
function Inline({ text }: { text: string }) {
  // Split by **bold**, *italics*, and newlines
  const parts = text.split(/(\*\*[^*]+\*\*|\*[^*]+\*|\n)/g);

  return (
    <>
      {parts.map((part, i) => {
        if (part === '\n') return <br key={i} />;
        if (part.startsWith('**') && part.endsWith('**')) {
          return <strong key={i}>{part.slice(2, -2)}</strong>;
        }
        if (part.startsWith('*') && part.endsWith('*')) {
          return <em key={i}>{part.slice(1, -1)}</em>;
        }

        // Check for Bible verses in this part
        const segments: React.ReactNode[] = [];
        let lastIndex = 0;
        let match;

        const regex = /(\d?\s?[A-Za-z]+)\s+(\d+):(\d+(?:-\d+)?)/g;
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

function BlockView({ block }: { block: Block }) {
  switch (block.type) {
    case 'h':
      return (
        <h2 className="mt-12 font-serif text-[1.5rem] font-light tracking-[-0.01em] text-ink md:text-[1.75rem]">
          {block.text}
        </h2>
      );
    case 'quote': {
      // Short quotes (one line's worth) are kept on a single row on desktop
      // by sizing them to the column; longer ones wrap normally.
      const oneLine = block.text.length <= 76;
      return (
        <blockquote className="my-7 border-l border-sage/50 pl-5">
          <p
            className={`font-serif font-light italic leading-[1.5] text-ink ${
              oneLine ? 'text-[1.05rem] md:whitespace-nowrap md:text-[1.05rem]' : 'text-[1.15rem] md:text-[1.3rem]'
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
        <ClickableFigure caption={block.caption}>
          <Fig />
        </ClickableFigure>
      );
    }
    case 'list':
      return (
        <ul className="mt-4 space-y-2 pl-5">
          {block.items.map((item, i) => (
            <li key={i} className="list-disc marker:text-sage">
              <Inline text={item} />
            </li>
          ))}
        </ul>
      );
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

export default async function ThoughtPage({ params, searchParams }: PageProps<'/[kind]/[slug]'>) {
  const { kind, slug } = await params;
  const t = getThought(slug);
  if (!t || PREFIX_KIND[kind] !== t.kind) notFound();

  const chapters = getChapters(t);
  const sp = await searchParams;
  const raw = Array.isArray(sp.p) ? sp.p[0] : sp.p;
  const page = Math.min(Math.max(Number(raw) || 1, 1), chapters.length);
  const chapter = chapters[page - 1];
  const prevChapter = page > 1 ? page - 1 : null;
  const nextChapter = page < chapters.length ? page + 1 : null;

  const siblings = thoughts.filter((x) => x.kind === t.kind);
  const index = siblings.findIndex((x) => x.slug === t.slug);
  const prev = siblings[index - 1] ?? null;
  const next = siblings[index + 1] ?? null;
  const here = thoughtPath(t);

  const url = `${SITE_URL}${here}`;
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': KIND_SCHEMA[t.kind],
    headline: t.title,
    description: t.dek.replace(/\n/g, ' '),
    datePublished: t.date,
    dateModified: t.date,
    author: { '@type': 'Person', name: AUTHOR.name, url: AUTHOR.url },
    publisher: { '@type': 'Person', name: AUTHOR.name, url: AUTHOR.url },
    mainEntityOfPage: url,
    url,
    inLanguage: 'en',
    isPartOf: { '@type': 'WebSite', name: SITE_NAME, url: SITE_URL },
    ...(t.kind === 'speech' ? { genre: 'Speech' } : {}),
    articleSection: KIND_LABEL[t.kind],
    articleBody: fullText(t),
  };

  return (
    <main className="contents">
      {/* display:contents keeps the sheet's flex sizing; the landmark is for assistive tech and crawlers */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
    <article id="reading" className="sheet scroll-mt-4 md:flex md:min-h-0 md:flex-1 md:flex-col">
      {/* Header: title left, date + copy + expand right, horizontally aligned */}
      <Reveal as="header" className="flex shrink-0 items-start justify-between gap-4">
        <div>
          <h1
            className="font-serif font-light leading-[1.05] tracking-[-0.02em] text-ink"
            style={{ fontSize: 'clamp(1.5rem, 2.2vw, 1.75rem)' }}
          >
            {t.title}{chapter.title && chapters.length > 1 && (
              <span className="text-muted"> : {chapter.title}</span>
            )}
          </h1>
          <time dateTime={t.date} className="mt-1 block font-sans text-[10px] uppercase tracking-[0.18em] text-muted">
            {formatDate(t.date)}
          </time>
        </div>
        <div className="flex items-center gap-2">
          <CopyButton text={chapterText(t, chapter)} label="Copy this page" />
          <ShareButton url={url} title={t.title} />
          <ExpandButton />
        </div>
      </Reveal>

      {/* One chapter per page */}
      <Reveal
        key={page}
        as="section"
        delay={100}
        className="scroll-pane mt-4 border-t border-rule pt-4 font-serif text-[1rem] font-light leading-[1.6] text-charcoal md:min-h-0 md:flex-1 md:overflow-y-auto md:pr-4 md:text-[1.05rem] [&>*:first-child]:mt-0"
      >
        {chapter.blocks.map((block, i) => (
          <BlockView key={i} block={block} />
        ))}
      </Reveal>

      {/* Chapter pagination */}
      <Reveal as="footer" delay={150} className="mt-5 shrink-0 border-t border-rule pt-4 font-serif text-[1rem] font-light">
        <div className="flex items-baseline justify-between gap-6">
          {prevChapter ? (
            <Link href={`${here}?p=${prevChapter}#reading`} className="text-ink transition-colors duration-500 hover:text-sage">
              ← {chapters[prevChapter - 1].title ?? 'Opening'}
            </Link>
          ) : prev ? (
            <Link href={thoughtPath(prev)} className="text-muted transition-colors duration-500 hover:text-sage">
              ← {prev.title}
            </Link>
          ) : (
            <span />
          )}
          <span className="font-sans text-[11px] uppercase tracking-[0.22em] text-sage">
            {page} / {chapters.length}
          </span>
          {nextChapter ? (
            <Link href={`${here}?p=${nextChapter}#reading`} className="text-ink transition-colors duration-500 hover:text-sage">
              {chapters[nextChapter - 1].title ?? 'Opening'} →
            </Link>
          ) : next ? (
            <Link href={thoughtPath(next)} className="text-muted transition-colors duration-500 hover:text-sage">
              {next.title} →
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

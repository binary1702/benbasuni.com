import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { CopyButton, Reveal } from '@/components';
import { FIGURES, type FigureName } from '@/components/figures';
import { thoughts, getThought, getChapters, chapterText, fullText, thoughtPath, KIND_PREFIX, PREFIX_KIND, KIND_LABEL, KIND_SCHEMA, type Block } from '@/content/thoughts';
import { SITE_URL, SITE_NAME, AUTHOR } from '@/lib/site';

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
    title: t.title,
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

/* *asterisks* → italics; "\n" → single line break */
function Inline({ text }: { text: string }) {
  const parts = text.split(/(\*[^*]+\*|\n)/g);
  return (
    <>
      {parts.map((part, i) =>
        part === '\n' ? (
          <br key={i} />
        ) : part.startsWith('*') && part.endsWith('*') ? (
          <em key={i}>{part.slice(1, -1)}</em>
        ) : (
          part
        ),
      )}
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
            <footer className="mt-3 font-sans text-[11px] uppercase tracking-[0.18em] text-sage">{block.by}</footer>
          )}
        </blockquote>
      );
    }
    case 'figure': {
      const Fig = FIGURES[block.name as FigureName];
      if (!Fig) return null;
      return (
        <figure className="my-8">
          <div className="mx-auto max-w-[34rem]">
            <Fig />
          </div>
          {block.caption && (
            <figcaption className="mt-3 text-center font-sans text-[10px] uppercase tracking-[0.18em] text-muted">
              {block.caption}
            </figcaption>
          )}
        </figure>
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
      {/* Header as one row: title left, dek + date right. */}
      <Reveal as="header" className="md:flex md:shrink-0 md:items-end md:justify-between md:gap-8">
        <h1
          className="font-serif font-light leading-[1.05] tracking-[-0.02em] text-ink md:shrink-0 md:whitespace-nowrap"
          style={{ fontSize: 'clamp(1.75rem, 2.6vw, 2.25rem)' }}
        >
          {t.title}
        </h1>
        <div className="mt-2 md:mt-0 md:min-w-0 md:text-right">
          <p className="font-serif text-[0.95rem] font-light italic leading-[1.45] text-muted md:text-[1rem]">
            {/* "\n" in a dek becomes a line break */}
            {t.dek.split('\n').map((line, i, arr) => (
              <span key={i} className="block">
                {line}
                {i === arr.length - 1 && t.dekLink && (
                  <span className="block">
                    <span className="mr-2 text-sage" aria-hidden="true">
                      →
                    </span>
                    <a
                      href={t.dekLink.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="not-italic text-ink underline decoration-ink/30 underline-offset-4 transition-colors duration-500 hover:decoration-sage"
                    >
                      {t.dekLink.display}
                    </a>
                  </span>
                )}
              </span>
            ))}
          </p>
          <p className="mt-1.5 flex items-center gap-3 font-sans text-[10px] uppercase tracking-[0.18em] text-muted md:justify-end">
            <time dateTime={t.date}>{formatDate(t.date)}</time>
            <CopyButton text={chapterText(t, chapter)} label="Copy this page" />
          </p>
        </div>
      </Reveal>

      {/* One chapter per page */}
      <Reveal
        key={page}
        as="section"
        delay={100}
        className="scroll-pane mt-4 border-t border-rule pt-4 font-serif text-[1rem] font-light leading-[1.6] text-charcoal md:min-h-0 md:flex-1 md:overflow-y-auto md:pr-4 md:text-[1.05rem] [&>*:first-child]:mt-0"
      >
        {chapter.title && (
          <p className="font-sans text-[11px] uppercase tracking-[0.22em] text-sage">
            {page} / {chapters.length}
          </p>
        )}
        {chapter.title && (
          <h2 className="mt-1.5 font-serif text-[1.3rem] font-light tracking-[-0.01em] text-ink md:text-[1.45rem]">
            {chapter.title}
          </h2>
        )}
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

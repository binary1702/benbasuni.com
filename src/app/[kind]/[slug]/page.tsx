import type { Metadata } from 'next';
import { notFound, permanentRedirect } from 'next/navigation';
import { Reader } from '@/components/Reader';
import { thoughts, getThought, getChapters, chapterText, fullText, thoughtPath, KIND_PREFIX, PREFIX_KIND, KIND_LABEL, KIND_SCHEMA } from '@/content/thoughts';
import { findBook, chapterPath } from '@/content/books';
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

export default async function ThoughtPage({ params, searchParams }: PageProps<'/[kind]/[slug]'>) {
  const { kind, slug } = await params;
  const sp = await searchParams;
  const raw = Array.isArray(sp.p) ? sp.p[0] : sp.p;

  // Books moved from /christ/<book>?p=N to /books/<series>/<book>/<chapter>; send old links to the same chapter.
  if (PREFIX_KIND[kind] === 'christianity') {
    const found = findBook(slug);
    if (!found) notFound();
    const { series, book } = found;
    const n = Math.min(Math.max(Number(raw) || 1, 1), book.chapters.length);
    permanentRedirect(chapterPath(series, book, book.chapters[n - 1]));
  }

  const t = getThought(slug);
  if (!t || PREFIX_KIND[kind] !== t.kind) notFound();

  const chapters = getChapters(t);
  const page = Math.min(Math.max(Number(raw) || 1, 1), chapters.length);

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
    <Reader
      title={t.title}
      date={t.date}
      chapters={chapters}
      page={page}
      chapterHref={(n) => `${here}?p=${n}#reading`}
      prevOut={prev && { href: thoughtPath(prev), title: prev.title }}
      nextOut={next && { href: thoughtPath(next), title: next.title }}
      url={url}
      bookText={fullText(t)}
      pageText={chapterText(t, chapters[page - 1])}
      jsonLd={jsonLd}
    />
  );
}

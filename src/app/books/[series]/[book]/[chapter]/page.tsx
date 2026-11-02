import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { Reader } from '@/components/Reader';
import { allChapters, getBook, chapterPath, bookPath, bookFullText, bookChapterText, BOOKS_LABEL } from '@/content/books';
import { SITE_URL, SITE_NAME, AUTHOR } from '@/lib/site';

type Params = { series: string; book: string; chapter: string };

export function generateStaticParams(): Params[] {
  return allChapters().map(({ series, book, chapter }) => ({ series: series.slug, book: book.slug, chapter: chapter.slug }));
}

function resolve({ series: s, book: b, chapter: c }: Params) {
  const found = getBook(s, b);
  if (!found) return null;
  const index = found.book.chapters.findIndex((x) => x.slug === c);
  return index >= 0 ? { ...found, chapter: found.book.chapters[index], n: index + 1 } : null;
}

export async function generateMetadata({ params }: { params: Promise<Params> }): Promise<Metadata> {
  const r = resolve(await params);
  if (!r) return {};
  const path = chapterPath(r.series, r.book, r.chapter);
  const title = `${r.chapter.title} — ${r.book.title}`;
  const description = r.book.dek.replace(/\n/g, ' ');
  return {
    title: { absolute: path },
    description,
    alternates: { canonical: path },
    openGraph: {
      type: 'article',
      title,
      description,
      url: path,
      siteName: SITE_NAME,
      publishedTime: r.book.date,
      authors: [AUTHOR.url],
      section: BOOKS_LABEL,
    },
    twitter: { card: 'summary_large_image', title, description },
  };
}

export default async function ChapterPage({ params }: { params: Promise<Params> }) {
  const r = resolve(await params);
  if (!r) notFound();
  const { series, book, chapter, n, index } = r;

  // Past the first / last chapter, the pager steps to the neighbouring book in the series.
  const prevBook = series.books[index - 1] ?? null;
  const nextBook = series.books[index + 1] ?? null;
  const url = `${SITE_URL}${chapterPath(series, book, chapter)}`;
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: `${chapter.title} — ${book.title}`,
    description: book.dek.replace(/\n/g, ' '),
    datePublished: book.date,
    dateModified: book.date,
    author: { '@type': 'Person', name: AUTHOR.name, url: AUTHOR.url },
    publisher: { '@type': 'Person', name: AUTHOR.name, url: AUTHOR.url },
    mainEntityOfPage: url,
    url,
    inLanguage: 'en',
    isPartOf: { '@type': 'Book', name: book.title, url: `${SITE_URL}${bookPath(series, book)}`, author: { '@type': 'Person', name: AUTHOR.name } },
    articleSection: BOOKS_LABEL,
    articleBody: bookChapterText(book, chapter),
  };

  return (
    <Reader
      title={book.title}
      date={book.date}
      chapters={book.chapters}
      page={n}
      chapterHref={(i) => `${chapterPath(series, book, book.chapters[i - 1])}#reading`}
      prevOut={prevBook && { href: chapterPath(series, prevBook, prevBook.chapters[0]), title: prevBook.title }}
      nextOut={nextBook && { href: chapterPath(series, nextBook, nextBook.chapters[0]), title: nextBook.title }}
      url={url}
      bookText={bookFullText(book)}
      pageText={bookChapterText(book, chapter)}
      jsonLd={jsonLd}
    />
  );
}

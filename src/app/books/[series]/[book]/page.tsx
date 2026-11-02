import { notFound, redirect } from 'next/navigation';
import { allChapters, getBook, chapterPath } from '@/content/books';

/* /books/<series>/<book> has no page of its own: it opens the first chapter. */
export function generateStaticParams() {
  const seen = new Set<string>();
  return allChapters()
    .filter(({ series, book }) => !seen.has(`${series.slug}/${book.slug}`) && seen.add(`${series.slug}/${book.slug}`))
    .map(({ series, book }) => ({ series: series.slug, book: book.slug }));
}

export default async function BookPage({ params }: { params: Promise<{ series: string; book: string }> }) {
  const { series, book } = await params;
  const found = getBook(series, book);
  if (!found) notFound();
  redirect(chapterPath(found.series, found.book, found.book.chapters[0]));
}

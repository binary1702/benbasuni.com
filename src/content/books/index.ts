import type { Book, BookChapter } from './types';
import { chapterText, SHOW_DRAFTS } from '@/content/thoughts';
import { bookOfCreation } from './genesis/the-book-of-creation';
import { bookOfMan } from './genesis/the-book-of-man';
import { firstCivilization } from './genesis/the-first-civilization';
import { greatFlood } from './genesis/the-great-flood';
import { newWorld } from './genesis/the-new-world';
import { riseOfNations } from './genesis/the-rise-of-nations';
import { callingOfAbram } from './genesis/the-calling-of-abram';
import { covenant } from './genesis/the-covenant';
import { citiesOfThePlain } from './genesis/the-cities-of-the-plain';
import { promisedSon } from './genesis/the-promised-son';
import { mountainOfTheLord } from './genesis/the-mountain-of-the-lord';
import { generationsOfAbraham } from './genesis/the-generations-of-abraham';

export type { Book, BookChapter } from './types';

/* Books: multi-chapter works, organised Series → Book → Chapter, each chapter its own page at
   /books/<series>/<book>/<chapter>. (One-page essays stay in content/thoughts.)
   To add a book: create content/books/<series>/<book>/ with one file per chapter and an index.ts,
   then list it in its series below. */

export type Series = { slug: string; title: string; dek: string; books: Book[] };

const allSeries: Series[] = [
  {
    slug: 'the-first-world',
    title: 'The First World',
    dek: 'Genesis 1–11, in six books.',
    books: [bookOfCreation, bookOfMan, firstCivilization, greatFlood, newWorld, riseOfNations],
  },
  {
    slug: 'abraham-our-father',
    title: 'Abraham, Our Father',
    dek: 'Genesis 12–25, in six books.',
    books: [callingOfAbram, covenant, citiesOfThePlain, promisedSon, mountainOfTheLord, generationsOfAbraham],
  },
];

/** Chapters a reader can see: none while the book is `comingSoon`; otherwise drafts only in dev. */
const visibleChapters = (b: Book) => (b.comingSoon ? [] : b.chapters.filter((c) => SHOW_DRAFTS || !c.draft));

/** Published view: draft chapters drop out of production builds, and a book with no published
 *  chapter is left out entirely (no page, no sidebar entry, no sitemap entry) until its first one ships. */
export const series: Series[] = allSeries.map((s) => ({
  ...s,
  books: s.books
    .map((b) => ({ ...b, chapters: visibleChapters(b) }))
    .filter((b) => b.chapters.length > 0),
}));

/** Full view for the book cards: every book in each series, with unpublished ones kept as
 *  "Forthcoming" (not linked) so the whole series is visible before every book ships. */
export type CatalogBook = Book & { published: boolean };
export type CatalogSeries = Omit<Series, 'books'> & { books: CatalogBook[] };
export const catalog: CatalogSeries[] = allSeries.map((s) => ({
  ...s,
  books: s.books.map((b) => {
    const chapters = visibleChapters(b);
    return { ...b, chapters, published: chapters.length > 0 };
  }),
}));

export function getCatalogSeries(slug: string) {
  return catalog.find((s) => s.slug === slug) ?? null;
}

/** Sidebar label for the books section (it sits beside the essay sections). */
export const BOOKS_LABEL = 'Books';
export const BOOKS_PATH = '/books';

export const seriesPath = (s: Pick<Series, 'slug'>) => `${BOOKS_PATH}/${s.slug}`;
export const bookPath = (s: Pick<Series, 'slug'>, b: Pick<Book, 'slug'>) => `${seriesPath(s)}/${b.slug}`;
export const chapterPath = (s: Pick<Series, 'slug'>, b: Pick<Book, 'slug'>, c: Pick<BookChapter, 'slug'>) =>
  `${bookPath(s, b)}/${c.slug}`;

export function getSeries(slug: string) {
  return series.find((s) => s.slug === slug) ?? null;
}

/** A book with its series and its position in the series. */
export function getBook(seriesSlug: string, bookSlug: string) {
  const s = getSeries(seriesSlug);
  const index = s ? s.books.findIndex((b) => b.slug === bookSlug) : -1;
  return s && index >= 0 ? { series: s, book: s.books[index], index } : null;
}

/** Find a book by slug alone (for redirecting old /christ/<slug> URLs). */
export function findBook(bookSlug: string) {
  for (const s of series) {
    const index = s.books.findIndex((b) => b.slug === bookSlug);
    if (index >= 0) return { series: s, book: s.books[index], index };
  }
  return null;
}

/** Every chapter page, for static generation and the sitemap. */
export function allChapters() {
  return series.flatMap((s) => s.books.flatMap((b) => b.chapters.map((c, i) => ({ series: s, book: b, chapter: c, n: i + 1 }))));
}

/** Plain-text renderings, for copying and structured data. */
export const bookChapterText = (b: Book, c: BookChapter) => chapterText(b, c);
export const bookFullText = (b: Book) => b.chapters.map((c) => chapterText(b, c)).join('\n\n');

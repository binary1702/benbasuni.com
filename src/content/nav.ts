import { thoughts, getChapters, thoughtPath, KINDS, KIND_LABEL, KIND_PREFIX } from '@/content/thoughts';
import { series, BOOKS_LABEL, BOOKS_PATH, seriesPath } from '@/content/books';

/** `match`: a path prefix that also counts as "here" (a series is active on any of its book or chapter pages). */
export type NavItem = { href: string; title: string; date: string; chapters: string[]; match?: string };
export type NavSection = { label: string; href: string; items: NavItem[]; match?: string };

/* Sidebar sections shared by the essay and book layouts: the books first, then the essay kinds. */
export function navSections(): NavSection[] {
  const essays: NavSection[] = KINDS.map((kind) => ({
    label: KIND_LABEL[kind],
    href: `/${KIND_PREFIX[kind]}`,
    items: thoughts
      .filter((t) => t.kind === kind)
      .map((t) => ({
        href: thoughtPath(t),
        title: t.title,
        date: t.date,
        chapters: getChapters(t).map((c) => (c.title ?? 'Opening') + (c.draft ? ' · draft' : '')),
      })),
  }));
  const books: NavSection = {
    label: BOOKS_LABEL,
    href: BOOKS_PATH,
    match: BOOKS_PATH,
    // one entry per series; its page shows the books as cards
    items: series.map((s) => ({
      href: seriesPath(s),
      match: seriesPath(s),
      title: s.title,
      date: s.books[0]?.date ?? '',
      chapters: s.books.map((b) => b.title),
    })),
  };
  return [books, ...essays];
}

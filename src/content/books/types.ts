import type { Block } from '@/content/thoughts';

/** One chapter of a book: its own page at /books/<series>/<book>/<chapter>. */
export type BookChapter = {
  slug: string;
  title: string;
  /** the chapter's Scripture passage, shown beside the title */
  ref?: string;
  /** true → hidden on the live site, shown with a "Draft" marker in dev; delete to publish */
  draft?: boolean;
  blocks: Block[];
};

export type Book = {
  slug: string;
  title: string;
  /** the Scripture span the whole book covers, shown on its card */
  ref?: string;
  dek: string;
  date: string; // ISO, e.g. 2026-11-02
  /** true → the book shows as "Coming soon" (card not linked, chapters hidden) in dev and production alike */
  comingSoon?: boolean;
  chapters: BookChapter[];
};

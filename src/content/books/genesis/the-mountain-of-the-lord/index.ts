import type { Book } from '../../types';

// Chapters in reading order, one file each. A chapter with `draft: true` is hidden on the live site and
// marked "Draft" in dev; delete the flag to publish it. A book appears once one chapter is published.
import c1 from './01-god-tested-abraham';
import c2 from './02-on-the-third-day';
import c3 from './03-the-altar';
import c4 from './04-the-lord-will-provide';
import c5 from './05-by-myself-i-have-sworn';

export const mountainOfTheLord: Book = {
  slug: 'the-mountain-of-the-lord',
  title: 'The Mountain of the Lord',
  ref: 'Genesis 22',
  dek: 'The testing of Abraham and the provision of God',
  date: '2026-11-02',
  chapters: [c1, c2, c3, c4, c5],
};

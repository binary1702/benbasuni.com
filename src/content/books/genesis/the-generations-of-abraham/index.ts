import type { Book } from '../../types';

// Chapters in reading order, one file each. A chapter with `draft: true` is hidden on the live site and
// marked "Draft" in dev; delete the flag to publish it. A book appears once one chapter is published.
import c1 from './01-a-foreigner-and-an-outsider';
import c2 from './02-the-servant-at-the-well';
import c3 from './03-i-will-go';
import c4 from './04-gathered-to-his-people';
import c5 from './05-the-promise-continues';

export const generationsOfAbraham: Book = {
  slug: 'the-generations-of-abraham',
  title: 'The Generations of Abraham',
  ref: 'Genesis 23–25',
  dek: 'The death of Sarah, the marriage of Isaac, and the legacy of faith',
  date: '2026-11-02',
  chapters: [c1, c2, c3, c4, c5],
};

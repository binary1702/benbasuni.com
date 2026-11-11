import type { Book } from '../../types';

// Chapters in reading order, one file each. A chapter with `draft: true` is hidden on the live site and
// marked "Draft" in dev; delete the flag to publish it. A book appears once one chapter is published.
import c1 from './01-the-three-visitors';
import c2 from './02-the-judge-of-all-the-earth';
import c3 from './03-the-gate-of-sodom';
import c4 from './04-flee-for-your-lives';
import c5 from './05-fire-from-heaven';
import c6 from './06-the-cave';

export const citiesOfThePlain: Book = {
  slug: 'the-cities-of-the-plain',
  title: 'The Cities of the Plain',
  ref: 'Genesis 18–19',
  dek: 'Judgment, mercy, and the fate of Sodom',
  date: '2026-11-02',
  chapters: [c1, c2, c3, c4, c5, c6],
};

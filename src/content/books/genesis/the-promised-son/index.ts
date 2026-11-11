import type { Book } from '../../types';

// Chapters in reading order, one file each. A chapter with `draft: true` is hidden on the live site and
// marked "Draft" in dev; delete the flag to publish it. A book appears once one chapter is published.
import c1 from './01-she-is-my-sister';
import c2 from './02-the-prayer-of-a-prophet';
import c3 from './03-laughter';
import c4 from './04-the-son-of-the-slave-woman';
import c5 from './05-the-well-of-the-oath';

export const promisedSon: Book = {
  slug: 'the-promised-son',
  title: 'The Promised Son',
  ref: 'Genesis 20–21',
  dek: 'The birth of Isaac and the fulfillment of promise',
  date: '2026-11-02',
  chapters: [c1, c2, c3, c4, c5],
};

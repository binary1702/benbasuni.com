import type { Book } from '../../types';

// Chapters in reading order, one file each. A chapter with `draft: true` is hidden on the live site and
// marked "Draft" in dev; delete the flag to publish it. A book appears once one chapter is published.
import c1 from './01-your-very-great-reward';
import c2 from './02-between-the-pieces';
import c3 from './03-the-plan-of-sarai';
import c4 from './04-the-god-who-sees';
import c5 from './05-a-new-name';
import c6 from './06-sarah-will-bear-a-son';

export const covenant: Book = {
  slug: 'the-covenant',
  title: 'The Covenant',
  ref: 'Genesis 15–17',
  dek: 'The promise of God and the sign of faith',
  date: '2026-11-02',
  chapters: [c1, c2, c3, c4, c5, c6],
};

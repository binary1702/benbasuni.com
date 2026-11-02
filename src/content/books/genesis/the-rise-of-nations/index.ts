import type { Book } from '../../types';

// Chapters in reading order, one file each. A chapter with `draft: true` is hidden on the live site and
// marked "Draft" in dev; delete the flag to publish it. A book appears once one chapter is published.
import cTheTableOfNations from './01-the-table-of-nations';
import cTheFirstKingdoms from './02-the-first-kingdoms';
import cTheTowerOfBabel from './03-the-tower-of-babel';
import cLetUsGoDown from './04-let-us-go-down';
import cTheGenerationsOfShem from './05-the-generations-of-shem';
import cTheFamilyOfAbram from './06-the-family-of-abram';
import cFromBabelToAbraham from './07-from-babel-to-abraham';

export const riseOfNations: Book = {
  slug: 'the-rise-of-nations',
  title: 'The Rise of Nations',
  ref: 'Genesis 10–11',
  dek: 'From Babel to the Family of Abram',
  date: '2026-11-02',
  chapters: [cTheTableOfNations, cTheFirstKingdoms, cTheTowerOfBabel, cLetUsGoDown, cTheGenerationsOfShem, cTheFamilyOfAbram, cFromBabelToAbraham],
};

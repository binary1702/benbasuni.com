import type { Book } from '../../types';

// Chapters in reading order, one file each. A chapter with `draft: true` is hidden on the live site and
// marked "Draft" in dev; delete the flag to publish it. A book appears once one chapter is published.
import cBeFruitfulAndMultiply from './01-be-fruitful-and-multiply';
import cTheCovenant from './02-the-covenant';
import cTheBowInTheClouds from './03-the-bow-in-the-clouds';
import cTheNakednessOfNoah from './04-the-nakedness-of-noah';
import cTheCurseOfCanaan from './05-the-curse-of-canaan';
import cAWorldPreservedNotRedeemed from './06-a-world-preserved-not-redeemed';

export const newWorld: Book = {
  slug: 'the-new-world',
  title: 'The New World',
  ref: 'Genesis 9',
  dek: 'Covenant After the Flood',
  date: '2026-11-02',
  chapters: [cBeFruitfulAndMultiply, cTheCovenant, cTheBowInTheClouds, cTheNakednessOfNoah, cTheCurseOfCanaan, cAWorldPreservedNotRedeemed],
};

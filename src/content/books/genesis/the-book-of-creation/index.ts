import type { Book } from '../../types';

// Chapters in reading order, one file each. A chapter with `draft: true` is hidden on the live site and
// marked "Draft" in dev; delete the flag to publish it. A book appears once one chapter is published.
import cBeforeTheBeginning from './01-before-the-beginning';
import cAndGodSaid from './02-and-god-said';
import cAndItWasGood from './03-and-it-was-good';
import cInHisImage from './04-in-his-image';
import cThePurposeOfMan from './05-the-purpose-of-man';
import cTheSeventhDay from './06-the-seventh-day';
import cTheGardenOfEden from './07-the-garden-of-eden';
import cItIsNotGoodToBeAlone from './08-it-is-not-good-to-be-alone';
import cTheBeginningOfOurStory from './09-the-beginning-of-our-story';

export const bookOfCreation: Book = {
  slug: 'the-first-7-days',
  title: 'The First 7 Days',
  ref: 'Genesis 1–2',
  dek: 'God, Creation, and the Making of Man',
  date: '2026-10-30',
  chapters: [cBeforeTheBeginning, cAndGodSaid, cAndItWasGood, cInHisImage, cThePurposeOfMan, cTheSeventhDay, cTheGardenOfEden, cItIsNotGoodToBeAlone, cTheBeginningOfOurStory],
};

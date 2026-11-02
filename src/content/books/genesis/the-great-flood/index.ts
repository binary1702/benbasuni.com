import type { Book } from '../../types';

// Chapters in reading order, one file each. A chapter with `draft: true` is hidden on the live site and
// marked "Draft" in dev; delete the flag to publish it. A book appears once one chapter is published.
import cTheSonsOfGod from './01-the-sons-of-god';
import cTheGriefOfGod from './02-the-grief-of-god';
import cTheRighteousMan from './03-the-righteous-man';
import cTheArk from './04-the-ark';
import cTheDoorWasShut from './05-the-door-was-shut';
import cTheUndoingOfCreation from './06-the-undoing-of-creation';
import cButGodRememberedNoah from './07-but-god-remembered-noah';
import cANewBeginning from './08-a-new-beginning';
import cTheMeaningOfTheFlood from './09-the-meaning-of-the-flood';

export const greatFlood: Book = {
  slug: 'noahs-ark',
  title: 'Noah’s Ark',
  ref: 'Genesis 6–8',
  dek: 'Judgment and the Preservation of Life',
  date: '2026-11-02',
  chapters: [cTheSonsOfGod, cTheGriefOfGod, cTheRighteousMan, cTheArk, cTheDoorWasShut, cTheUndoingOfCreation, cButGodRememberedNoah, cANewBeginning, cTheMeaningOfTheFlood],
};

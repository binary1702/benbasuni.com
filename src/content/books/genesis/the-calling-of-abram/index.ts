import type { Book } from '../../types';

// Chapters in reading order, one file each. A chapter with `draft: true` is hidden on the live site and
// marked "Draft" in dev; delete the flag to publish it. A book appears once one chapter is published.
import cTheCall from './01-the-call';
import cSoAbramDeparted from './02-so-abram-departed';
import cFamineInTheLand from './03-famine-in-the-land';
import cTheChoiceOfLot from './04-the-choice-of-lot';
import cLiftUpYourEyes from './05-lift-up-your-eyes';
import cTheWarOfTheKings from './06-the-war-of-the-kings';
import cTheKingOfSalem from './07-the-king-of-salem';

export const callingOfAbram: Book = {
  slug: 'the-calling-of-abram',
  title: 'The Calling of Abram',
  ref: 'Genesis 12–14',
  dek: 'The call of God and the journey of faith',
  date: '2026-11-02',
  chapters: [cTheCall, cSoAbramDeparted, cFamineInTheLand, cTheChoiceOfLot, cLiftUpYourEyes, cTheWarOfTheKings, cTheKingOfSalem],
};

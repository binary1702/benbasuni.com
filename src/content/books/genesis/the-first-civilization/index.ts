import type { Book } from '../../types';

// Chapters in reading order, one file each. A chapter with `draft: true` is hidden on the live site and
// marked "Draft" in dev; delete the flag to publish it. A book appears once one chapter is published.
import cCityOfEnoch from './01-city-of-enoch';
import cAnotherBeginning from './02-another-beginning';
import cAdamsDeath from './03-adams-death';
import cTheConditionOfMan from './04-the-condition-of-man';

export const firstCivilization: Book = {
  slug: 'the-city-of-enoch',
  title: 'The City of Enoch',
  ref: 'Genesis 4–5',
  dek: 'From Cain’s City to the Days of Noah',
  date: '2026-11-02',
  chapters: [cCityOfEnoch, cAnotherBeginning, cAdamsDeath, cTheConditionOfMan],
};

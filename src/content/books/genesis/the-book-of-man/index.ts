import type { Book } from '../../types';

// Chapters in reading order, one file each. A chapter with `draft: true` is hidden on the live site and
// marked "Draft" in dev; delete the flag to publish it. A book appears once one chapter is published.
import cTheFirstDeception from './01-the-first-deception';
import cToBeLikeGod from './02-to-be-like-god';
import cTheFirstShame from './03-the-first-shame';
import cWhereAreYou from './04-where-are-you';
import cTheCurseAndThePromise from './05-the-curse-and-the-promise';
import cEastOfEden from './06-east-of-eden';
import cTheTwoBrothers from './07-the-two-brothers';
import cSinAtTheDoor from './08-sin-at-the-door';
import cAmIMyBrothersKeeper from './09-am-i-my-brothers-keeper';

export const bookOfMan: Book = {
  slug: 'adam-cain-lamech',
  title: 'Adam, Cain, Lamech',
  ref: 'Genesis 3–4',
  dek: 'The Fall of Adam and the Rise of Cain',
  date: '2026-11-02',
  chapters: [cTheFirstDeception, cToBeLikeGod, cTheFirstShame, cWhereAreYou, cTheCurseAndThePromise, cEastOfEden, cTheTwoBrothers, cSinAtTheDoor, cAmIMyBrothersKeeper],
};

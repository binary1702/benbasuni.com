import type { BookChapter } from '../../types';

const chapter: BookChapter = {
  slug: 'the-table-of-nations',
  title: 'The Table of Nations',
  ref: 'Genesis 10:1–32',
  draft: true,
  blocks: [
    { type: 'figure', name: 'nations-table' },
    {
      type: 'quote',
      text: 'All these are the clans of Noah’s sons, according to their generations and nations. From these the nations of the earth spread out after the flood.',
      by: 'Genesis 10:32',
    },
    {
      type: 'p',
      text: 'Genesis 10 is a map written as a family tree. Most readers skim it. It is worth slowing down, because it is one of the most remarkable chapters in the ancient world.',
    },
    {
      type: 'p',
      text: 'God told Noah’s family to *fill the earth* (9:1). Genesis 10 shows it happening. Each of the three sons becomes the head of a cluster of peoples, and each cluster moves in a different direction.',
    },
    {
      type: 'table',
      head: ['Son', 'Some descendants', 'Roughly where', 'Names'],
      rows: [
        [
          'Japheth',
          'Javan (the Ionian Greeks), Madai (the Medes), Gomer, Tarshish',
          'North and west: Anatolia, the Aegean, the *maritime peoples* (10:5)',
          '14',
        ],
        [
          'Ham',
          'Cush, Mizraim (Egypt), Put, Canaan; Nimrod; the Philistines',
          'South and southwest: Africa, Arabia, Canaan, and Mesopotamia’s first cities',
          '30',
        ],
        [
          'Shem',
          'Elam, Asshur (Assyria), Aram, Eber, Joktan',
          'The middle and east: Mesopotamia, Syria, Arabia',
          '26',
        ],
      ],
    },
    {
      type: 'p',
      text: 'Count the names and they come to seventy. The number is probably not an accident. When Jacob’s family went down to Egypt, *the members of Jacob’s family who went to Egypt were seventy in all* (46:27). Seventy nations of the world, and seventy souls of Israel. Long before Israel exists, Genesis has already set it alongside every other people on earth.',
    },
    {
      type: 'p',
      text: 'Notice the order. Japheth first, then Ham, then Shem, though Shem is the older brother (10:21). Genesis does this throughout: it deals with the side lines first and then turns to the line the story will follow. Cain before Seth. Ishmael before Isaac. Esau before Jacob. Shem is listed last because Shem is where the story is going.',
    },
    {
      type: 'p',
      text: 'And notice the tone. Egypt, Assyria, Babylon, and the Philistines will all be Israel’s enemies. Here they are simply relatives. No nation is described with contempt. No people is left off the map. **Before the Bible tells the story of one chosen family, it insists that every family on earth comes from the same three brothers, and that God knows all their names.**',
    },
    {
      type: 'quote',
      text: 'From one man He made every nation of men, that they should inhabit the whole earth; and He determined their appointed times and the boundaries of their lands.',
      by: 'Acts 17:26',
    },
    {
      type: 'p',
      text: 'One more detail. Three times the chapter says the nations spread out *according to their languages* (10:5, 20, 31). Many languages already. Yet the next chapter opens with *the whole world had one language*. Genesis 10 and 11 are not in strict time order. Chapter 10 shows the result: the nations spread across the earth. Chapter 11 goes back and shows how it happened.',
    },
  ],
};

export default chapter;

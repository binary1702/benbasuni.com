import type { BookChapter } from '../../types';

const chapter: BookChapter = {
  slug: 'the-family-of-abram',
  title: 'The Family of Abram',
  ref: 'Genesis 11:27–32',
  draft: true,
  blocks: [
    { type: 'figure', name: 'nations-abram' },
    { type: 'quote', text: 'But Sarai was barren; she had no children.', by: 'Genesis 11:30' },
    {
      type: 'p',
      text: 'The last section of Genesis 1–11 is a portrait of one family. And nearly everything in it is a dead end.',
    },
    {
      type: 'list',
      items: [
        'A son dies young. *Haran died in his native land, in Ur of the Chaldeans*, before his father (11:28).',
        'A wife cannot have children. *Sarai was barren; she had no children* (11:30). The verse says it twice.',
        'A journey stops halfway. They *set out from Ur... for the land of Canaan. But when they arrived in Haran, they settled there* (11:31).',
        'A father dies. *Terah lived 205 years, and he died in Haran* (11:32).',
      ],
    },
    {
      type: 'p',
      text: 'Ur of the Chaldeans was one of the great cities of southern Mesopotamia, a center of moon worship. And Joshua, centuries later, will remind Israel exactly where this family came from: *Long ago your fathers, including Terah the father of Abraham and Nahor, lived beyond the Euphrates and worshiped other gods* (Joshua 24:2). Abram’s family was not a remnant of the faithful. It was an ordinary family of idol worshipers from the land of Babel.',
    },
    {
      type: 'p',
      text: 'Terah sets out for Canaan. Genesis does not say why. But he does not arrive. He *settled* in Haran, the same verb used of the builders of Babel, who *settled* on the plain of Shinar (11:2). The journey stalls. (The city Haran and Abram’s brother Haran are spelled differently in Hebrew; the echo is in English only.)',
    },
    {
      type: 'p',
      text: 'Now put the two scenes of Genesis 11 side by side. At Babel: a whole united humanity, one language, a city, a tower, a plan to make a name. In Haran: one small family, one dead son, a barren wife, a stalled journey, and a father’s grave.',
    },
    {
      type: 'p',
      text: '**By every human measure, the future belongs to Babel.** Babel has numbers, technology, ambition, and a name. Terah’s family has nothing that could carry a future. Its line is about to end with a woman who cannot have a child.',
    },
    {
      type: 'p',
      text: 'And that is exactly the line God chooses. Paul describes Abraham’s faith as facing *the lifelessness of Sarah’s womb* and trusting *the God who gives life to the dead and calls into being what does not yet exist* (Romans 4:17, 19). Genesis 11:30 is not an incidental detail. It is the condition the next chapter is about to answer. The promise of a great nation is going to be made to a man whose wife has no children.',
    },
  ],
};

export default chapter;

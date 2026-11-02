import type { BookChapter } from '../../types';

const chapter: BookChapter = {
  slug: 'the-nakedness-of-noah',
  title: 'The Nakedness of Noah',
  ref: 'Genesis 9:18–23',
  draft: true,
  blocks: [
    { type: 'figure', name: 'world-nakedness' },
    {
      type: 'quote',
      text: 'Now Noah, a man of the soil, proceeded to plant a vineyard. But when he drank some of its wine, he became drunk and uncovered himself inside his tent.',
      by: 'Genesis 9:20–21',
    },
    {
      type: 'p',
      text: 'The covenant has just been spoken. The rainbow is in the sky. And the next scene is Noah, drunk and naked in his tent.',
    },
    {
      type: 'p',
      text: 'Listen to what the story is made of. A man of the ground. A planting. Fruit. Nakedness. Seeing. Covering. A curse. **These are the materials of Eden.** The new world repeats the old one, almost scene for scene.',
    },
    {
      type: 'table',
      head: ['Eden (Genesis 2–3)', 'After the flood (Genesis 9)'],
      rows: [
        [
          '*The LORD God planted a garden* (2:8)',
          'Noah *planted a vineyard* (9:20)',
        ],
        ['Adam ate the fruit', 'Noah drank of the fruit'],
        [
          '*They knew that they were naked* (3:7)',
          'He *uncovered himself* (9:21)',
        ],
        [
          '*The LORD God made garments... and He clothed them* (3:21)',
          'Shem and Japheth *took a garment... and covered* him (9:23)',
        ],
        [
          'A curse on the serpent and the ground (3:14–17)',
          'A curse on Canaan (9:25)',
        ],
      ],
    },
    {
      type: 'p',
      text: 'Noah was the hope of 5:29: *May this one comfort us in the labor and toil of our hands caused by the ground.* In a sense he finds the comfort. He becomes the first vinedresser, and wine is a gift; Psalm 104:15 calls it *wine that gladdens the heart of man*. But the comfort becomes excess. The righteous man who walked with God through the flood cannot walk steadily in his own tent.',
    },
    {
      type: 'quote',
      text: 'And Ham, the father of Canaan, saw his father’s nakedness and told his two brothers outside.',
      by: 'Genesis 9:22',
    },
    {
      type: 'p',
      text: 'What exactly Ham did has been debated, and some see more in the phrase than looking. But the text itself sets up a contrast of two responses, and it describes both with care. Ham *saw* and *told*. He exposed his father twice: once with his eyes, once with his mouth. Shem and Japheth *took a garment*, laid it on their shoulders, *walked backward*, kept *their faces turned away*, and *covered* him. Every detail of their action is the opposite of Ham’s.',
    },
    {
      type: 'p',
      text: 'One brother uncovers shame. The others cover it, the way God covered Adam and Eve. Peter will write that *love covers over a multitude of sins* (1 Peter 4:8). The covering here does not deny what Noah did. It refuses to make a spectacle of it.',
    },
    {
      type: 'p',
      text: '**The flood cleaned the world. It did not clean Noah. The first story of the new world is a righteous man’s fall, and a son who makes it worse.**',
    },
  ],
};

export default chapter;

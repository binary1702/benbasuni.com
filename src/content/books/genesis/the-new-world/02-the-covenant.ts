import type { BookChapter } from '../../types';

const chapter: BookChapter = {
  slug: 'the-covenant',
  title: 'The Covenant',
  ref: 'Genesis 9:8–11',
  draft: true,
  blocks: [
    { type: 'figure', name: 'world-covenant' },
    {
      type: 'quote',
      text: 'Behold, I now establish My covenant with you and your descendants after you, and with every living creature that was with you.',
      by: 'Genesis 9:9–10',
    },
    {
      type: 'p',
      text: 'Before the rain fell, God told Noah, *I will establish My covenant with you* (6:18). Now, on dry ground, He does it. The promise made in the old world is kept in the new one.',
    },
    {
      type: 'p',
      text: 'A covenant is more than a promise. It is a binding relationship, a commitment that defines how two parties will stand toward each other. What makes this one unusual is how much is missing from it.',
    },
    {
      type: 'list',
      items: [
        'No conditions. Noah is not asked to do anything to keep it.',
        'No penalty clause. Nothing is said about what happens if humanity fails.',
        'No limit of membership. It includes *every living creature*: birds, livestock, beasts.',
        'No end date. It is *for all generations to come* (9:12), an *everlasting covenant* (9:16).',
      ],
    },
    {
      type: 'p',
      text: 'God binds Himself, and only Himself. This matters because we already know what humanity is like. 8:21 said the human heart is *evil from his youth*. If the covenant depended on human faithfulness, it would not last a generation. It does not. **It rests entirely on God.**',
    },
    {
      type: 'quote',
      text: 'Never again will all life be cut off by the waters of a flood; never again will there be a flood to destroy the earth.',
      by: 'Genesis 9:11',
    },
    {
      type: 'p',
      text: 'The Noahic covenant is the first in a series. Each later covenant narrows its scope and deepens its promise.',
    },
    {
      type: 'table',
      head: ['Covenant', 'With whom', 'Sign', 'Promise'],
      rows: [
        [
          'Noah (Genesis 9)',
          'Every living creature',
          'The rainbow',
          'The world will be preserved',
        ],
        [
          'Abraham (Genesis 15, 17)',
          'Abraham and his seed',
          'Circumcision',
          'A land, a people, and blessing to all nations',
        ],
        [
          'Sinai (Exodus 19–24)',
          'Israel',
          'The Sabbath',
          'God will dwell among His people',
        ],
        [
          'David (2 Samuel 7)',
          'David’s house',
          '(none named)',
          'A king from his line forever',
        ],
        [
          'New (Jeremiah 31; Luke 22)',
          'All who are in Christ',
          'The cup',
          'A new heart; sins forgiven',
        ],
      ],
    },
    {
      type: 'p',
      text: 'Noah’s covenant is the floor beneath all the others. Before God can make a people, there has to be a world for them to live in. Isaiah reaches back to it when he wants to show how firm God’s love is: *For to Me this is like the days of Noah, when I swore that the waters of Noah would never again cover the earth. So I have sworn that I will not be angry with you* (Isaiah 54:9).',
    },
  ],
};

export default chapter;

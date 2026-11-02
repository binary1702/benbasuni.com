import type { BookChapter } from '../../types';

const chapter: BookChapter = {
  slug: 'the-righteous-man',
  title: 'The Righteous Man',
  ref: 'Genesis 6:9–13',
  draft: true,
  blocks: [
    { type: 'figure', name: 'flood-righteous' },
    {
      type: 'quote',
      text: 'This is the account of Noah. Noah was a righteous man, blameless in his generation; Noah walked with God.',
      by: 'Genesis 6:9',
    },
    { type: 'p', text: 'Three descriptions of Noah, each a step deeper.' },
    {
      type: 'list',
      items: [
        '*Righteous*: he did what was right.',
        '*Blameless in his generation*: among people who were not, he was whole.',
        '*Noah walked with God*: the phrase Genesis used twice of Enoch (5:22, 24).',
      ],
    },
    {
      type: 'p',
      text: 'Only these two men in the first eleven chapters are said to walk with God. One was taken before the judgment. The other will be carried through it.',
    },
    { type: 'p', text: 'Then the camera pulls back to the world.' },
    {
      type: 'quote',
      text: 'Now the earth was corrupt in the sight of God, and full of violence.\nAnd God looked upon the earth and saw that it was corrupt; for all living creatures on the earth had corrupted their ways.',
      by: 'Genesis 6:11–12',
    },
    {
      type: 'p',
      text: 'The word *corrupt* (*shachat*) appears three times in two verses. It means ruined, spoiled. Then in verse 13 God says *I will destroy* both them and the earth, and the verb is the same word: *shachat*. A literal rendering would be: *the earth was ruined... so I will ruin it*.',
    },
    {
      type: 'p',
      text: 'That is the logic of the flood. **God does not bring a foreign punishment onto a healthy world. He finishes what humanity has already started.** The world has been destroying itself. Judgment hands it over to the ruin it chose.',
    },
    {
      type: 'p',
      text: 'And the ruin has a name: *violence* (*chamas*). Not idolatry first, not ritual failure, but people doing harm to people. The line runs straight back through Lamech’s song to Abel’s blood. What began as one murder in a field has filled the earth.',
    },
    {
      type: 'p',
      text: 'Noah’s righteousness is not presented as the reason he escapes. It is the contrast that makes the darkness visible. Hebrews says it this way: *By faith Noah... built an ark to save his family. By faith he condemned the world and became heir of the righteousness that comes by faith* (Hebrews 11:7). His life was a verdict on his generation before the waters were.',
    },
    {
      type: 'p',
      text: '**One man walking with God is enough to show what everyone else had walked away from.**',
    },
  ],
};

export default chapter;

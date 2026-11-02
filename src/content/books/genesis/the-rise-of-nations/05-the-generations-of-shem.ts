import type { BookChapter } from '../../types';

const chapter: BookChapter = {
  slug: 'the-generations-of-shem',
  title: 'The Generations of Shem',
  ref: 'Genesis 11:10–26',
  draft: true,
  blocks: [
    { type: 'figure', name: 'nations-shem' },
    {
      type: 'quote',
      text: 'This is the account of Shem. Two years after the flood, when Shem was 100 years old, he became the father of Arphaxad.',
      by: 'Genesis 11:10',
    },
    {
      type: 'p',
      text: 'After Babel, Genesis narrows. The whole world has been scattered across chapter 10. Now the story picks up a single line, the line of Shem, and follows it name by name.',
    },
    {
      type: 'p',
      text: 'The shape is familiar. Genesis 5 traced ten generations from Adam to Noah. Genesis 11 traces ten generations from Shem to Abram. Each list ends with a man who has three sons, and each of those men is a turning point: Noah through the flood, Abram into the promise.',
    },
    {
      type: 'p',
      text: 'But something is missing. Genesis 5 closed every life with *and then he died*. Genesis 11 never says it. Each entry simply ends: *and had other sons and daughters*. Death is still real; these men all die. But the refrain is gone. The emphasis has shifted from the grave to the line. The question is no longer *will they die?* but *where is this going?*',
    },
    { type: 'p', text: 'The other thing that changes is the numbers.' },
    {
      type: 'table',
      head: ['Name', 'Age at son’s birth', 'Total years'],
      rows: [
        ['Shem', '100', '600'],
        ['Arphaxad', '35', '438'],
        ['Shelah', '30', '433'],
        ['Eber', '34', '464'],
        ['Peleg', '30', '**239**'],
        ['Reu', '32', '239'],
        ['Serug', '30', '230'],
        ['Nahor', '29', '**148**'],
        ['Terah', '70', '205'],
      ],
    },
    {
      type: 'p',
      text: 'Lifespans before the flood ran to nine hundred years. After it, they fall: six hundred, then four hundred, then, sharply, two hundred. The drop comes at Peleg, *because in his days the earth was divided* (10:25). The word *peleg* means *division*. Many readers connect his name to the scattering at Babel. The world splits, and human life shortens. By Nahor, a man lives less than a hundred and fifty years. The long age of the first world is over.',
    },
    {
      type: 'p',
      text: 'Two names stand out. Eber, whose name lies behind the word *Hebrew* (*’ivri*), so that Genesis had already flagged Shem as *the forefather of all the sons of Eber* (10:21). And Peleg, whose line the chapter follows, rather than his brother Joktan’s, whose thirteen sons were listed and left behind in chapter 10.',
    },
    {
      type: 'p',
      text: 'Add up the years, on the plainest reading of the numbers, and the generations overlap remarkably. Noah lived 350 years after the flood (9:28), long enough to see the birth of Abram. Shem, who walked off the ark, would still have been alive through most of Abram’s life. (Some genealogies in Scripture skip generations, and Luke 3:36 includes a Cainan not named here, so these sums are a reading, not a certainty.) Either way, the line is close and unbroken. **Between the flood and Abram stands not a vast darkness, but a family that remembered.**',
    },
    {
      type: 'quote',
      text: 'When Terah was 70 years old, he became the father of Abram, Nahor, and Haran.',
      by: 'Genesis 11:26',
    },
  ],
};

export default chapter;

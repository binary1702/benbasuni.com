import type { BookChapter } from '../../types';

const chapter: BookChapter = {
  slug: 'a-world-preserved-not-redeemed',
  title: 'A World Preserved, Not Redeemed',
  ref: 'Genesis 9',
  
  blocks: [
    { type: 'figure', name: 'world-preserved' },
    {
      type: 'p',
      text: 'This book began with a question: what changed after the flood, and what remained the same? Genesis 9 gives a clear answer on both sides.',
    },
    {
      type: 'table',
      head: ['What changed', 'What remained'],
      rows: [
        [
          'Animals now fear humanity (9:2)',
          'The blessing to be fruitful and multiply (9:1)',
        ],
        [
          'Meat is permitted, without the blood (9:3–4)',
          'Humanity bears the image of God (9:6)',
        ],
        [
          'Murder is answered by human justice (9:5–6)',
          'The human heart is *evil from his youth* (8:21)',
        ],
        [
          'God binds Himself never to flood the earth again (9:11)',
          'Sin, even in the most righteous man (9:21)',
        ],
        [
          'The seasons are guaranteed (8:22)',
          'Shame, exposure, and curse (9:22–25)',
        ],
        ['A sign hangs in the sky (9:13)', '*And then he died* (9:29)'],
      ],
    },
    {
      type: 'p',
      text: 'Look at the left column. Everything that changed concerns the *conditions* of life: food, safety, justice, the stability of the earth. Look at the right. Everything that stayed the same concerns *humanity itself*. The flood reset the world. It did not reset us.',
    },
    {
      type: 'p',
      text: 'That is the meaning of the title. **The world after the flood is preserved, not redeemed.** God has promised to keep it. He has not yet made it new. The covenant with Noah is a commitment to hold the world steady, with its seasons, its justice, and its rain, so that something else can happen inside it.',
    },
    {
      type: 'p',
      text: 'Paul describes creation in this condition: *subjected to futility... in hope that the creation itself will be set free from its bondage to decay* (Romans 8:20–21). The Noahic covenant is the *in hope*. It buys time. It keeps the stage standing while the rest of the story is played out.',
    },
    {
      type: 'p',
      text: 'What happens on that stage begins in the next chapter. Noah’s sons will fill the earth, as they were told. They will also gather on a plain and refuse to be scattered. The same people who were preserved by God will try to build their way to Him.',
    },
    {
      type: 'p',
      text: '**God promised never again to destroy the world with water. He never promised that the world would stop needing to be saved.**',
    },
  ],
};

export default chapter;

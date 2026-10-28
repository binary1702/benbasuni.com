import type { Thought } from './index';

// DRAFT — outline only. Facts are from the LeTip talk; fill in the rest.
export const myHistory: Thought = {
  slug: 'my-history',
  title: 'My History',
  dek: 'Three countries, one formation.',
  date: '2026-10-28',
  body: [
    { type: 'h', text: 'Indonesia, 1991' },
    { type: 'p', text: 'I was born in Indonesia in 1991. *[placeholder: family, early years]*' },
    { type: 'h', text: 'Taiwan' },
    { type: 'p', text: '*[placeholder: the move to Taiwan, what it was like, what it taught]*' },
    { type: 'h', text: 'Gold River' },
    {
      type: 'p',
      text: 'By twelve I had lived in three countries, but Gold River was home. Gold River Discovery Center, then Mira Loma, then Bella Vista, just down Madison Avenue. *[placeholder: growing up here]*',
    },
    { type: 'h', text: 'Santa Barbara' },
    {
      type: 'p',
      text: 'Philosophy at UC Santa Barbara. It did not teach me what to think. It taught me how. *[placeholder: why philosophy, what stuck]*',
    },
    { type: 'h', text: 'Software' },
    {
      type: 'p',
      text: 'Ten years building across startups, healthcare, banking, AI, and enterprise systems. *[placeholder: the arc, the turning points]*',
    },
    { type: 'h', text: 'Binary 1702' },
    { type: 'p', text: '*[placeholder: why I started it, and what it is for]*' },
  ],
};

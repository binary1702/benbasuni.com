import type { Thought } from './index';

// DRAFT — opens with the work, idea second, name last. Direct, first person,
// lesson stated plainly. Client details are generic on purpose.
export const meta: Thought = {
  slug: 'meta',
  kind: 'philosophy',
  title: 'Meta',
  dek: '',
  date: '2026-08-30',
  body: [
    { type: 'h', text: 'The Call' },
    { type: 'p', text: 'The owner of a construction company called me about building a website. We talked about what he wanted, how he envisioned it looking, and what he hoped it would accomplish.' },
    { type: 'p', text: 'I asked him why.' },
    { type: 'p', text: 'It’s a question I find myself asking frequently. Not because I’m opposed to building things, but because I want to understand what we’re trying to accomplish before deciding how to accomplish it.' },
    { type: 'p', text: 'A website is a solution. So is an application, a new system, or an automated workflow. But a solution only makes sense in relation to the problem it’s supposed to solve. And sometimes, the problem isn’t immediately obvious, even to the person experiencing it.' },
    { type: 'p', text: 'I’ve spent much of my career working with technology, and I’ve become increasingly interested in the questions that come before it. What is actually happening? Why does it happen that way? What are we assuming? And what would change if we approached it differently?' },
    { type: 'p', text: 'I don’t know that every problem has a simple answer. Most interesting problems don’t. But I’ve learned that the quality of the solution depends heavily on how well we understand the question.' },
    { type: 'p', text: 'That’s why I asked him why.' },
    { type: 'h', text: 'The First Mistake I Made' },
    { type: 'p', text: 'When I started my company, I thought my value was speed. I charged by the hour. I jumped straight into building, and I was good at it. I was doing more work, more efficiently, than I ever had. And my clients were getting more and more confused.' },
    { type: 'p', text: 'Something was off. The projects that made the most money and did the most good were never the ones where I wrote the most code. They were the ones where I slowed down and spent the most time asking questions. Understanding the business. Understanding the owner. Understanding what we were actually trying to change.' },
    { type: 'quote', text: 'I had been charging people for my hands when what they needed was my judgment.' },
    { type: 'p', text: 'Once I understood that, I changed how I work. Less building, more listening. More diagnosis before design. The business grew, and so did the results for the people who hired me. Speed was never the product. Understanding was.' },
    { type: 'h', text: 'The Word' },
    {
      type: 'p',
      text: 'There is a name for the move I made on that call. Stepping out of the request to look at the shape of it. Asking the question about the question. The Greeks called it *meta*: beyond, or after. Thinking about thinking.',
    },
    {
      type: 'p',
      text: 'I studied philosophy before I ever wrote software. People ask what you do with that. The answer is everything, and I am living proof. Philosophy did not teach me what to think. It taught me how, and the first thing it taught me was to notice the frame before arguing inside it. That one skill has been worth more to my clients than any line of code I have ever written.',
    },
    {
      type: 'p',
      text: 'Most disagreements are not about the answer. They are about the question. Two smart people can argue for an hour and never realize they are solving different problems. The meta move is simple: stop, say the problem out loud, and see if everyone nods. If they do not, you have found the real work.',
    },
    {
      type: 'list',
      items: [
        'Before you answer, ask what the question is for.',
        'Before you fix a part, ask what it is a part of.',
        'When people disagree, check whether they are solving the same problem.',
      ],
    },
    { type: 'p', text: 'Do that, and most of the time the technology becomes obvious. Skip it, and no technology will save you.' },
  ],
};

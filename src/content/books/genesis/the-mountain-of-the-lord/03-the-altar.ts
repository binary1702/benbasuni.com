import type { BookChapter } from '../../types';

const g = (c: number, v: number, label = `${c}:${v}`) => `[${label}](https://www.shavat.app/ot/genesis/creation/${c}#v${v})`;

const chapter: BookChapter = {
  slug: 'the-altar',
  title: 'The Altar',
  ref: 'Genesis 22:9–12',
  blocks: [
    { type: 'figure', name: 'mount-altar' },
    { type: 'quote', text: '“Do not lay a hand on the boy or do anything to him,” said the angel, “for now I know that you fear God, since you have not withheld your only son from me.”', by: 'Genesis 22:12' },
    { type: 'p', text: 'Abraham has built altars before. At Shechem, when the land was first promised. Between Bethel and Ai, where he called on the name of the LORD. At Hebron, after Lot had gone. Each of them marked a place where he had received something from God.' },
    { type: 'p', text: 'This is the fourth altar and the last. It is the only one on which he is asked to place what he has received. The question of this passage is what God was looking for on that mountain, and what He found.' },

    { type: 'sub', text: 'He Bound His Son' },
    { type: 'quote', text: 'When they arrived at the place God had designated, Abraham built the altar there and arranged the wood. He bound his son Isaac and placed him on the altar, atop the wood. Then Abraham reached out his hand and took the knife to slaughter his son.', by: 'Genesis 22:9–10' },
    { type: 'p', text: 'The narrator slows almost to a stop. Three days of travel were told in one verse. Now each movement is given its own verb: he *built*, he *arranged*, he *bound*, he *placed*, he *reached out*, he *took*. We are made to watch every step.' },
    { type: 'p', text: 'Jewish tradition names this whole chapter from one of those verbs. It is called the *Akedah*, the Binding.' },
    { type: 'p', text: 'Nothing is said about Isaac. Genesis does not report that he struggled, or spoke, or wept. But consider the scene. Abraham is well over a hundred years old. Isaac is a youth strong enough to have carried the wood up the mountain. An old man could not have bound such a son against his will. That is an inference, and the text does not state it. But it is hard to read the verse without concluding that Isaac allowed himself to be bound. If so, there are two acts of trust on the mountain: the father’s in God, and the son’s in his father.' },
    { type: 'p', text: 'Twice more the narrator says *his son*. He bound *his son Isaac*. He took the knife to slaughter *his son*. The word has now been used again and again since the chapter began. We are never permitted to think of this as an abstract act of obedience. It is a father and his child.' },

    { type: 'sub', text: 'Abraham, Abraham' },
    { type: 'quote', text: 'Just then the angel of the LORD called out to him from heaven, “Abraham, Abraham!” “Here I am,” he replied.', by: 'Genesis 22:11' },
    { type: 'p', text: 'At the beginning of the chapter God called his name once. Now it is called twice, urgently. The knife is already in his hand. And for the third time Abraham says, *Here I am*.' },
    { type: 'p', text: `The voice comes *from heaven*, and it belongs to *the angel of the LORD*. This is the figure who found Hagar in the desert, and who called to her from heaven when Ishmael lay dying (${g(21, 17)}). As in those scenes, He speaks as God Himself: *you have not withheld your only son from Me*.` },
    { type: 'p', text: 'The command is immediate and complete. *Do not lay a hand on the boy or do anything to him.* Not a wound. Not a mark. The God who asked for Isaac will not permit him to be touched.' },
    { type: 'p', text: 'This is the point at which the God of Abraham is finally distinguished from the gods of the nations. They demanded the death of children, and received it. The LORD brought a man to the very point of offering his son, and then forbade it. **God asked for Isaac in order to show that He did not want Isaac’s death. He wanted Abraham’s heart.** After this day, no descendant of Abraham could believe that the LORD was pleased by the sacrifice of a child. The prophet Micah would later ask, *Shall I present my firstborn for my transgression, the fruit of my body for the sin of my soul?* (Micah 6:7), and answer that what the LORD requires is justice, mercy, and a humble walk with God.' },

    { type: 'sub', text: 'Now I Know' },
    { type: 'p', text: '*For now I know that you fear God.* The words raise an obvious question. Did God not know before?' },
    { type: 'p', text: 'Scripture does not suggest that God was ignorant of Abraham’s heart. The language is the language of a test. A test does not give the examiner new information so much as bring the truth into the open, where it can be seen and acted upon. Before Moriah, Abraham’s fear of God was real, but it had not been proved at this depth. After Moriah it was a fact of history. It had been done.' },
    { type: 'p', text: 'James has this scene in view when he writes about faith and works.' },
    { type: 'quote', text: 'Was not our father Abraham justified by what he did when he offered his son Isaac on the altar? You see that his faith was working with his actions, and his faith was perfected by what he did.', by: 'James 2:21–22' },
    { type: 'p', text: `James then quotes ${g(15, 6)}: *Abraham believed God, and it was credited to him as righteousness*. He is not setting Genesis 22 against Genesis 15. Abraham was counted righteous under the stars, decades before, when he had done nothing but believe. On Moriah that same faith was *perfected*, brought to completion, shown to be what it was. Paul points to the night when the faith was credited. James points to the day when it was demonstrated. It is one faith.` },
    { type: 'p', text: 'What is *the fear of God*? In this passage it is not terror. A terrified man would have fled, or bargained. It is the settled conviction that God is God: that He is to be trusted and obeyed even when His ways cannot be understood. Abraham has shown that there is nothing he will keep back, not even the son in whom every promise is bound up.' },

    { type: 'sub', text: 'You Have Not Withheld' },
    { type: 'p', text: 'The final phrase names what the test established. *You have not withheld your only son from Me.*' },
    { type: 'p', text: 'Think back over what Abraham has been asked to give up, and when.' },
    {
      type: 'table',
      head: ['What he surrendered', 'Where'],
      rows: [
        ['His country, his kindred, and his father’s household', `Haran (${g(12, 1)})`],
        ['The best of the land, to Lot', `Between Bethel and Ai (${g(13, 9)})`],
        ['The wealth of Sodom', `The King’s Valley (${g(14, 23)})`],
        ['His plan that Ishmael should be the heir', `Before God Almighty (${g(17, 18, '17:18–19')})`],
        ['Ishmael himself', `The wilderness of Beersheba (${g(21, 14)})`],
        ['Isaac', `Moriah (${g(22, 10)})`],
      ],
    },
    { type: 'p', text: 'Each surrender has been greater than the one before. Each time he let go of something, he was left with the promise. On Moriah he opens his hand on the promise itself, and finds that he is left with God.' },
    { type: 'p', text: 'This is what the test proved. Abraham did not serve God for the sake of what God had given him. When the gift and the Giver seemed to part ways, he followed the Giver. And because he would not hold on to Isaac, Isaac was given back to him.' },
    { type: 'p', text: 'There is a phrase here that the New Testament will not forget. *You have not withheld your only son.* Paul uses nearly the same words about God: *He who did not spare His own Son but gave Him up for us all* (Romans 8:32). On Moriah a father was ready to give his son, and was stopped. The apostle speaks of a Father who was not stopped. Genesis does not say this. But the language of the one passage has shaped the language of the other.' },
    { type: 'p', text: 'For the moment, a knife is lowered. A boy is alive on an altar. An old man hears his name called twice from heaven and answers, as he has answered all along, *Here I am*.' },
    { type: 'p', text: '**Abraham opened his hand, and God gave back what was in it.**' },
  ],
};

export default chapter;

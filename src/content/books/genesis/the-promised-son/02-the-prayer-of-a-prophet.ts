import type { BookChapter } from '../../types';

const g = (c: number, v: number, label = `${c}:${v}`) => `[${label}](https://www.shavat.app/ot/genesis/creation/${c}#v${v})`;

const chapter: BookChapter = {
  slug: 'the-prayer-of-a-prophet',
  title: 'The Prayer of a Prophet',
  ref: 'Genesis 20:8–18',
  blocks: [
    { type: 'figure', name: 'son-prayer' },
    { type: 'quote', text: 'Then Abraham prayed to God, and God healed Abimelech and his wife and his maidservants, so that they could again bear children—for on account of Abraham’s wife Sarah, the LORD had completely closed all the wombs in Abimelech’s household.', by: 'Genesis 20:17–18' },
    { type: 'p', text: '*Early the next morning Abimelech got up.* The king does not delay. He gathers his servants and tells them everything, and *the men were terrified*. Then he sends for Abraham.' },
    { type: 'p', text: 'What follows is a confrontation in which the pagan asks the questions and the prophet has to answer. The question of this passage is what God does with a servant who has been caught, and whether such a man can still be of any use to others.' },

    { type: 'sub', text: 'What Have You Done to Us?' },
    { type: 'quote', text: 'What have you done to us? How have I sinned against you, that you have brought such tremendous guilt upon me and my kingdom? You have done things to me that should not be done.', by: 'Genesis 20:9' },
    { type: 'p', text: `Pharaoh asked the same question: *What have you done to me?* (${g(12, 18)}). In Egypt, Abram said nothing and was escorted to the border. Abimelech wants an answer. He asks a second time: *What prompted you to do such a thing?*` },
    { type: 'p', text: 'Notice the moral seriousness of the man. He speaks of *guilt* and of things that *should not be done*. He is concerned for his kingdom. He has a clear sense of right and wrong, and he is applying it to Abraham. It is an uncomfortable thing for the chosen man to be taught ethics by an outsider. It will not be the last time in Scripture that the people of God are put to shame by the conduct of those outside.' },

    { type: 'sub', text: 'Three Excuses' },
    { type: 'p', text: 'This time Abraham answers, and his answer has three parts.' },
    {
      type: 'list',
      items: [
        '**He assumed the worst.** *I thought to myself, ‘Surely there is no fear of God in this place. They will kill me on account of my wife.’*',
        '**It was technically true.** *Besides, she really is my sister, the daughter of my father—though not the daughter of my mother.*',
        '**It was his standing practice.** *When God had me journey from my father’s house, I said to Sarah … ‘Wherever we go, say of me, “He is my brother.”’*',
      ],
    },
    { type: 'p', text: 'The first excuse has just been disproved. There was fear of God in Gerar. The king heard one warning in a dream and acted on it before breakfast. Abraham had judged the place without knowing it. He had lately seen Sodom, and he seems to have concluded that every city was Sodom.' },
    { type: 'p', text: 'The second excuse is true as far as it goes. Sarah was his half-sister. But the purpose of saying so was to hide the fact that she was his wife, and a true statement used to create a false belief is a lie.' },
    { type: 'p', text: 'The third is the most revealing. This was not a lapse under sudden pressure. It was a policy, agreed between them when they first left Haran. *Wherever we go.* Egypt and Gerar are the two occasions Genesis records. The arrangement itself had stood for twenty-five years. Abraham had carried a strategy of fear alongside his faith for the whole of his life with God.' },
    { type: 'p', text: 'There is even a faint shifting of responsibility in the way he puts it: *when God had me journey*. It was, after all, God who sent him wandering among strangers. **Abraham explains himself. He does not, in the text, confess.** Genesis records no admission that he was wrong.' },

    { type: 'sub', text: 'My Land Is Before You' },
    { type: 'p', text: 'Abimelech’s response is generous beyond anything the situation required. He gives Abraham sheep, cattle, and servants. He restores Sarah. Then he says, *Look, my land is before you. Settle wherever you please.*' },
    { type: 'p', text: `Pharaoh had said, *Take her and go!* and had him escorted out (${g(12, 19, '12:19–20')}). Abimelech invites him to stay. Abraham had feared that these people would kill him. Their king offers him the freedom of the country.` },
    { type: 'p', text: 'To Sarah he gives a thousand pieces of silver, a very large sum, and he explains its purpose: *It is your vindication before all who are with you; you are completely cleared.* There is a touch of irony in his wording. *I am giving your brother a thousand pieces of silver.* He uses the word Abraham chose. But the intention is honorable. He wants it publicly established that Sarah’s honor is intact. The child she is about to conceive must be beyond question.' },
    {
      type: 'table',
      head: ['Egypt (Genesis 12)', 'Gerar (Genesis 20)'],
      rows: [
        ['Sarai is taken into Pharaoh’s house', 'Sarah is brought to Abimelech'],
        ['God sends plagues', 'God speaks in a dream'],
        ['Pharaoh rebukes; Abram is silent', 'Abimelech rebukes; Abraham makes excuses'],
        ['Gifts are given before the truth comes out', 'Gifts are given after the truth comes out'],
        ['*“Take her and go!”*', '*“Settle wherever you please”*'],
        ['No prayer is recorded', 'Abraham prays, and the household is healed'],
      ],
    },

    { type: 'sub', text: 'Abraham Prayed' },
    { type: 'p', text: 'Only now do we learn what had been happening in Abimelech’s house. *On account of Abraham’s wife Sarah, the LORD had completely closed all the wombs in Abimelech’s household.* No child could be conceived there while Sarah was within its walls.' },
    { type: 'p', text: 'So Abraham prays, as God said he would, and God heals them. Consider who is praying, and for what. Abraham has been married to a barren woman for decades. He has waited twenty-five years for a child. He has never, in the text of Genesis, been recorded as praying for Sarah’s womb to be opened. Now he prays for the wombs of a foreign king’s household, closed because of his own lie, and they are opened at once.' },
    { type: 'p', text: '**The man whose own wife had never borne a child prayed for other women to bear, and was heard.**' },
    { type: 'p', text: 'It is a strange and moving scene. Abraham comes to this prayer with no moral standing at all. He has just been exposed and rebuked. He has offered excuses. And God uses him anyway. The prayer is effective, not because of the man who prays, but because God has appointed him to pray. The nations are to be blessed through Abraham. Here a nation is blessed through him at the very moment he least deserves to be the instrument.' },
    { type: 'p', text: 'This should not be read as indifference to what Abraham did. The chapter has shown the lie for what it was, and it has let a foreigner say so. But it also shows that the usefulness of God’s servants does not depend on their being without fault. If it did, there would be no story of Abraham to tell.' },
    { type: 'p', text: 'The last verse of the chapter speaks of closed wombs opened by the LORD. The first verse of the next chapter will speak of one more.' },
    { type: 'p', text: '**Abraham prayed for the house of Abimelech, and their wombs were opened. Then the LORD attended to Sarah.**' },
  ],
};

export default chapter;

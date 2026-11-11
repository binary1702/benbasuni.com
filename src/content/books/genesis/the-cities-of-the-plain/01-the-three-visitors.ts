import type { BookChapter } from '../../types';

const g = (c: number, v: number, label = `${c}:${v}`) => `[${label}](https://www.shavat.app/ot/genesis/creation/${c}#v${v})`;

const chapter: BookChapter = {
  slug: 'the-three-visitors',
  title: 'The Three Visitors',
  ref: 'Genesis 18:1–15',
  blocks: [
    { type: 'figure', name: 'plain-visitors' },
    { type: 'quote', text: 'Then the LORD appeared to Abraham by the Oaks of Mamre in the heat of the day, while he was sitting at the entrance of his tent.', by: 'Genesis 18:1' },
    { type: 'p', text: 'The narrator tells us at once who has come. *The LORD appeared to Abraham.* Abraham is not told. He looks up and sees *three men standing nearby*. The reader knows more than the host, and the whole scene is told across that gap.' },
    { type: 'p', text: `Not long before, God had said that [Sarah would bear a son within the year](/books/abraham-our-father/the-covenant/sarah-will-bear-a-son). Abraham had laughed, obeyed, and been circumcised. Now it is the hottest part of the day, the hour when nothing moves, and an old man is sitting in the shade of his tent door. The question of this passage is one that God Himself will ask before it is over: is anything too difficult for the LORD?` },

    { type: 'sub', text: 'He Ran to Meet Them' },
    { type: 'p', text: 'Abraham is ninety-nine years old and newly circumcised. When he sees the three men, *he ran*. The verbs of the next few verses hardly stop for breath. He *ran* to meet them and bowed to the ground. He *hurried* into the tent to Sarah. *Quick!* he says. He *ran* to the herd. The servant *hurried* to prepare the calf.' },
    { type: 'p', text: 'His words are modest. *Let a little water be brought … I will bring a bit of bread.* What he provides is something else. Three seahs of fine flour is a very large amount, far more than three men could eat. He selects a calf, tender and choice, and adds curds and milk. He promises a morsel and serves a feast. Then, having set it before them, *he stood by them under the tree as they ate*. The master of a great household waits on his guests like a servant.' },
    { type: 'p', text: 'Hospitality to travelers was a sacred duty in Abraham’s world, where a stranger refused shelter might not survive. But Genesis shows Abraham going well beyond duty. The New Testament remembers the scene:' },
    { type: 'quote', text: 'Do not neglect to show hospitality to strangers, for by so doing some people have entertained angels without knowing it.', by: 'Hebrews 13:2' },
    { type: 'p', text: 'Who are the three? The chapter names one of them as the LORD (18:1, 13). The other two go on to Sodom and are called angels (19:1). Some Christian readers have seen in the three a hint of the Trinity. The text itself distinguishes the LORD from the two who accompany Him, and that is as far as Genesis goes. What it shows without ambiguity is this: **God comes to Abraham’s tent as a guest, sits under his tree, and eats his food.** In the last book, Abram stood before God in terror and darkness. Here God accepts a meal.' },

    { type: 'sub', text: 'Where Is Your Wife Sarah?' },
    { type: 'p', text: 'When the meal is over, the visitors ask a question that strangers should not have been able to ask. *Where is your wife Sarah?* They know her name. They know her new name, given only in the previous chapter. Abraham answers, *There, in the tent.*' },
    { type: 'quote', text: 'Then the LORD said, “I will surely return to you at this time next year, and your wife Sarah will have a son!” Now Sarah was behind him, listening at the entrance to the tent.', by: 'Genesis 18:10' },
    { type: 'p', text: 'Abraham has heard this before. Sarah, as far as Genesis tells us, has not. The promise in Genesis 17 was spoken to Abraham alone, and the text does not say whether he told her. Now the promise is repeated within her hearing. It seems that the visit is for her sake. The question about her whereabouts makes sure she is listening.' },
    { type: 'p', text: 'The narrator then states the difficulty as flatly as he can: *Abraham and Sarah were already old and well along in years; Sarah had passed the age of childbearing* (18:11). This is no longer a matter of a couple who have had trouble conceiving. It is a biological impossibility.' },

    { type: 'sub', text: 'Sarah Laughed' },
    { type: 'quote', text: 'So she laughed to herself, saying, “After I am worn out and my master is old, will I now have this pleasure?”', by: 'Genesis 18:12' },
    { type: 'p', text: 'She laughs *to herself*. No sound is made. She is behind the speaker, inside a tent. And her thought is not unreasonable. She is eighty-nine. She has been disappointed for the whole of her adult life. Twenty-four years ago she left her home on the strength of a promise that has never included her by name. She tried to bring it about through Hagar, and that ended in bitterness. She is past hoping.' },
    { type: 'p', text: `Abraham laughed too, in the previous chapter, and asked almost the same question (${g(17, 17)}). The husband laughed on his face before God. The wife laughs behind a tent flap. The child’s name, *Isaac*, *he laughs*, has now been earned by both parents.` },
    { type: 'p', text: 'Then the guest speaks again, and this time the narrator calls Him by name.' },
    { type: 'quote', text: 'And the LORD asked Abraham, “Why did Sarah laugh and say, ‘Can I really bear a child when I am old?’ Is anything too difficult for the LORD?”', by: 'Genesis 18:13–14' },
    { type: 'p', text: 'He has heard a laugh that made no sound and read a thought that was never spoken. That alone tells Sarah who is sitting under the tree. And notice how He reports her words. She had said, *I am worn out and my master is old*. He repeats only what she said about herself. It is a small courtesy.' },

    { type: 'sub', text: 'Is Anything Too Difficult for the LORD?' },
    { type: 'p', text: 'This is the question on which the whole story of Abraham rests. The Hebrew word translated *too difficult* can also be rendered *too wonderful*: is anything too extraordinary for the LORD? God does not answer it. He leaves it standing and simply repeats the promise: *At the appointed time I will return to you—in about a year—and Sarah will have a son.*' },
    { type: 'p', text: 'The question is asked again in Scripture. Jeremiah, told to buy a field in a city about to fall, prays, *Nothing is too difficult for You!* and God replies, *Is anything too difficult for Me?* (Jeremiah 32:17, 27). And when another woman is told that she will bear a child she cannot naturally bear, the angel says to her, *For no word from God will ever fail* (Luke 1:37). Gabriel’s words to Mary are an echo of the words spoken outside Sarah’s tent.' },
    {
      type: 'table',
      head: ['The circumstance', 'The promise'],
      rows: [
        ['Abraham is ninety-nine', '*“At this time next year”*'],
        ['Sarah is eighty-nine and past the age of childbearing', '*“Your wife Sarah will have a son”*'],
        ['Sarah laughs to herself', '*“Is anything too difficult for the LORD?”*'],
      ],
    },
    { type: 'p', text: 'The scene ends with a brief exchange. *But Sarah was afraid, so she denied it and said, “I did not laugh.” “No,” replied the LORD, “but you did laugh.”* It is a gentle correction. He does not withdraw the promise because she laughed, and He does not withdraw it because she lied about laughing. He will not let the denial stand, and He says nothing more.' },
    { type: 'p', text: 'It is worth noticing what did not disqualify her. Sarah did not believe the promise when she heard it. Hebrews will later say that *by faith Sarah … was enabled to conceive a child, because she considered Him faithful who had promised* (Hebrews 11:11). Her faith, like her husband’s, came by way of laughter and doubt. The promise was not waiting for her to become a person who never doubted. It was waiting for the appointed time.' },
    { type: 'p', text: '**Sarah laughed because she knew what was possible. God asked her whether she knew who was speaking.**' },
  ],
};

export default chapter;

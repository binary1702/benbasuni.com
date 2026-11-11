import type { BookChapter } from '../../types';

const g = (c: number, v: number, label = `${c}:${v}`) => `[${label}](https://www.shavat.app/ot/genesis/creation/${c}#v${v})`;

const chapter: BookChapter = {
  slug: 'god-tested-abraham',
  title: 'God Tested Abraham',
  ref: 'Genesis 22:1–2',
  blocks: [
    { type: 'figure', name: 'mount-test' },
    { type: 'quote', text: '“Take your son,” God said, “your only son Isaac, whom you love, and go to the land of Moriah. Offer him there as a burnt offering on one of the mountains, which I will show you.”', by: 'Genesis 22:2' },
    { type: 'p', text: 'Everything in the story of Abraham has been leading to a son. For twenty-five years the promise waited for Isaac. He has been born. He has been named, circumcised, weaned, and established as the heir. Ishmael has been sent away. [Abraham has planted a tree at Beersheba](/books/abraham-our-father/the-promised-son/the-well-of-the-oath) and lived for a long time in peace.' },
    { type: 'p', text: 'And then God speaks again. This book is given to a single chapter of Genesis, because no other chapter in Abraham’s life asks so much of him or of the reader. The question it raises is the hardest in the whole story. What does a man do when the command of God appears to destroy the promise of God?' },

    { type: 'sub', text: 'A Test' },
    { type: 'quote', text: 'Some time later God tested Abraham and said to him, “Abraham!” “Here I am,” he answered.', by: 'Genesis 22:1' },
    { type: 'p', text: 'The first thing the narrator tells us is what kind of event this is. *God tested Abraham.* The reader is told. Abraham is not. He will hear only the command. We are given, in advance, the one piece of information that he lacks: this is a test.' },
    { type: 'p', text: 'That sentence governs how the whole chapter must be read. It tells us that God did not intend the death of Isaac. From the first verse, the reader knows that what is being sought is something in Abraham, not the blood of his son. Without that sentence the story would be unbearable. With it, the story is still terrible, but it is not a story about a God who desires the death of a child.' },
    { type: 'p', text: 'Scripture distinguishes carefully between testing and tempting. James writes that *God cannot be tempted by evil, nor does He tempt anyone* (James 1:13). To tempt is to entice toward sin, hoping for a fall. To test is to prove what is there. Moses tells Israel that God led them through the wilderness *to know what was in your heart* (Deuteronomy 8:2). A test brings into the open what would otherwise remain hidden, even from the one being tested.' },
    { type: 'p', text: 'Abraham’s reply is a single word in Hebrew: *hinneni*, *Here I am*. He will say it three times in this chapter, to God, to his son, and to the angel. It is the answer of a man who is present and available before he knows what will be asked.' },

    { type: 'sub', text: 'Your Son, Your Only Son, Whom You Love' },
    { type: 'p', text: 'The command is given slowly. God does not say, *Take Isaac*. He identifies the boy by stages, and each phrase presses harder than the one before.' },
    {
      type: 'list',
      items: [
        '*Your son.*',
        '*Your only son.*',
        '*Isaac.*',
        '*Whom you love.*',
      ],
    },
    { type: 'p', text: 'Abraham has had two sons. One has already been sent away, at God’s direction. Isaac is the only one left to him, and the only son of the promise. The command leaves no room to mistake who is meant, and no room to pretend that God does not know what He is asking.' },
    { type: 'p', text: 'This is the first time the word *love* appears in the Bible. It is not used of a husband and wife, or of God and man. Its first use is for the love of a father for his son, and it is spoken by God at the moment He asks for that son.' },
    { type: 'p', text: `Then: *go*. The Hebrew is *lek-leka*, the phrase with which the whole story began. *Go from your country … to the land I will show you* (${g(12, 1)}). Now: *go to the land of Moriah … on one of the mountains, which I will show you*. The two commands frame Abraham’s life.` },
    {
      type: 'table',
      head: ['The first call (Genesis 12)', 'The last call (Genesis 22)'],
      rows: [
        ['*Lek-leka*: go', '*Lek-leka*: go'],
        ['Leave your country, your kindred, your father’s household', 'Take your son, your only son, whom you love'],
        ['To a land *I will show you*', 'To a mountain *which I will show you*'],
        ['He gives up his past', 'He is asked to give up his future'],
      ],
    },
    { type: 'p', text: 'In Haran, Abraham was asked to surrender everything behind him. He did, and God gave him a promise in its place. On the way to Moriah, he is asked to surrender the promise itself.' },

    { type: 'sub', text: 'A Burnt Offering' },
    { type: 'p', text: 'The word is exact. A burnt offering was the sacrifice that was wholly consumed on the altar. Nothing was kept back by the worshiper. It was the offering of complete surrender. That is what God names.' },
    { type: 'p', text: 'We should not soften how this would have sounded. The sacrifice of children was known among the peoples of Canaan, and the law will later forbid it in the strongest terms. *You must not give any of your children to be sacrificed to Molech* (Leviticus 18:21). Of the nations Israel displaced, Moses says, *They even burn their sons and daughters in the fire as sacrifices to their gods*, and calls it an abomination the LORD hates (Deuteronomy 12:31). Through Jeremiah, God says that such a thing was *something I never commanded, nor did it even enter My mind* (Jeremiah 7:31).' },
    { type: 'p', text: 'Those texts belong to the rest of Scripture, and they make it certain that Genesis 22 is not an endorsement of child sacrifice. The chapter will end with God forbidding the act. But Abraham did not have Leviticus. He had a command from the God he had followed for decades, and the command was to do what the gods of his neighbors required.' },

    { type: 'sub', text: 'The Command Against the Promise' },
    { type: 'p', text: 'The cruelty of the command is plain. The deeper difficulty is its logic. Not long before, God had said to Abraham, in so many words:' },
    { type: 'quote', text: 'Through Isaac your offspring will be reckoned.', by: 'Genesis 21:12' },
    { type: 'p', text: 'Everything rests on this boy. The nation, the land, the blessing of all the families of the earth: all of it must come through Isaac. Ishmael has been excluded by name. There is no other son. If Isaac dies childless, the promise dies with him.' },
    { type: 'p', text: 'Throughout this story we have watched the promise stand against circumstances. Sarah was barren. The land was occupied. There was famine, and war, and old age. In each case the obstacle came from the world, and faith meant believing God in spite of what could be seen.' },
    { type: 'p', text: 'This is different. The obstacle now comes from God. The same voice that said *through Isaac* says *offer him*. **For the first time, it is not circumstance that contradicts the promise. It is the word of God that contradicts the word of God.**' },
    { type: 'p', text: 'The letter to the Hebrews states the problem precisely: *He who had received the promises was ready to offer his one and only son, even though God had said to him, “Through Isaac your offspring will be reckoned”* (Hebrews 11:17–18). Abraham cannot obey the command without, as far as he can see, destroying the promise. And he cannot protect the promise without disobeying the One who made it.' },
    { type: 'p', text: 'What, then, is being tested? Genesis will answer at the end: whether Abraham *fears God*. We might put it this way. Isaac is the gift. Over the years the gift has become the visible form of everything God has promised. The test asks whether Abraham’s trust is in the gift or in the Giver. Does he believe God because he has Isaac? Or would he believe God without him?' },
    { type: 'p', text: 'Genesis records no reply from Abraham to the command. The man who argued for Sodom through six rounds says nothing for his own son. The next verse begins, *So Abraham got up early the next morning*.' },
    { type: 'p', text: '**God had asked Abraham to trust Him for a son. Now He asked whether Abraham could trust Him with one.**' },
  ],
};

export default chapter;

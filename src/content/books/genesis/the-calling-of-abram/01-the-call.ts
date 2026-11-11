import type { BookChapter } from '../../types';

const g = (c: number, v: number, label = `${c}:${v}`) => `[${label}](https://www.shavat.app/ot/genesis/creation/${c}#v${v})`;

const chapter: BookChapter = {
  slug: 'the-call',
  title: 'The Call',
  ref: 'Genesis 12:1–3',
  draft: true,
  blocks: [
    { type: 'figure', name: 'abram-call' },
    { type: 'quote', text: 'Then the LORD said to Abram, “Leave your country, your kindred, and your father’s household, and go to the land I will show you.”', by: 'Genesis 12:1' },
    { type: 'p', text: 'The story of Abraham begins with a voice. Genesis 11 ended in Haran with [a father buried, a journey stopped, and a wife who could not conceive](/books/the-first-world/the-rise-of-nations/the-family-of-abram). Nothing in that household suggested a future. Then the LORD spoke.' },
    { type: 'p', text: 'Genesis does not tell us what Abram was doing when the word came. It does not describe his character, his prayers, or any search for God. It gives no reason why this man was chosen rather than another. Centuries later Moses would tell Israel that the LORD had not chosen them because they were numerous, *for you were the fewest of all peoples* (Deuteronomy 7:7), and the same is true at the beginning. The chapter does not open with Abram seeking God. **It opens with God speaking to Abram.**' },
    { type: 'p', text: 'The question in front of us is simple to state and difficult to answer. What does it mean for a man to stake his whole life on a word?' },

    { type: 'sub', text: 'Leave' },
    { type: 'p', text: `The first word is a command. In Hebrew the phrase is *lek-leka*, an emphatic form that can be rendered *go forth* or *go, for yourself*. It will be spoken to Abraham once more, in Genesis ${g(22, 2)}, when he is told to go to the land of Moriah and offer his son. The first time, he is asked to give up his past. The second time, he will be asked to give up his future.` },
    { type: 'p', text: 'Notice what he is told to leave.' },
    {
      type: 'list',
      items: [
        '**His country.** The land he knows, with its cities, its roads, and its language.',
        '**His kindred.** The wider clan to which he belongs.',
        '**His father’s household.** The family itself, and everything a son expected to receive from it.',
      ],
    },
    { type: 'p', text: 'Each circle is smaller than the one before it, and each costs more. A man can leave his country and still have his people. He can leave his people and still have his father’s house. God names all three.' },
    { type: 'p', text: 'In the ancient Near East a father’s household was far more than a home. It was a man’s inheritance, his protection, his livelihood, and the place where the gods of the family were honored. Joshua tells us what those gods were in this case: Terah and his family *lived beyond the Euphrates and worshiped other gods* (Joshua 24:2). To leave the father’s household was to walk away from everything that told a man who he was and kept him safe.' },
    { type: 'p', text: 'And where is he to go? *To the land I will show you.* The land is not named. Abram is told exactly what he must leave, and he is not told where he is going. The letter to the Hebrews draws attention to precisely this:' },
    { type: 'quote', text: 'By faith Abraham, when called to go to a place he would later receive as his inheritance, obeyed and went, without knowing where he was going.', by: 'Hebrews 11:8' },
    { type: 'p', text: '**The command is specific about the cost and silent about the destination.**' },

    { type: 'sub', text: 'When Did God Speak?' },
    { type: 'p', text: `A careful reader will notice a question of timing. Genesis ${g(11, 31)} says that Terah set out from Ur for Canaan and settled in Haran. Genesis ${g(12, 1)} then reports the word of the LORD to Abram, and ${g(12, 4)} tells us he departed from Haran. Read by itself, Genesis could suggest that the call came in Haran. Stephen, the first Christian martyr, retold the history of Israel before the council that would condemn him, and he places it earlier:` },
    { type: 'quote', text: 'The God of glory appeared to our father Abraham while he was still in Mesopotamia, before he lived in Haran, and told him, ‘Leave your country and your kindred and go to the land I will show you.’', by: 'Acts 7:2–3' },
    { type: 'p', text: `The two accounts fit together without strain. Hebrew narrative does not always report events in strict sequence, and several English translations render ${g(12, 1)} as *the LORD had said*. On Stephen’s reading, the call first came in Ur, the family traveled as far as Haran, and Abram completed the journey after his father’s death (Acts 7:4). Genesis itself points the same way when God later says, *I am the LORD, who brought you out of Ur of the Chaldeans* (${g(15, 7)}).` },
    { type: 'p', text: 'What Genesis does not tell us is why the family stopped in Haran, or how long Abram remained there. It would be easy to fill that silence with a story about delay or reluctance. The text gives us none. It tells us only that a word was spoken, and that Abram went.' },

    { type: 'sub', text: 'I Will' },
    { type: 'p', text: 'The command takes one sentence. The promise takes two verses.' },
    { type: 'quote', text: 'I will make you into a great nation, and I will bless you; I will make your name great, so that you will be a blessing. I will bless those who bless you and curse those who curse you; and all the families of the earth will be blessed through you.', by: 'Genesis 12:2–3' },
    { type: 'p', text: 'Count what God promises.' },
    {
      type: 'list',
      ordered: true,
      items: [
        'I will make you into a great nation.',
        'I will bless you.',
        'I will make your name great.',
        'You will be a blessing.',
        'I will bless those who bless you.',
        'I will curse those who curse you.',
        'All the families of the earth will be blessed through you.',
      ],
    },
    { type: 'p', text: 'One command, and seven promises. Look also at who is acting. Abram is asked to do one thing, which is to go. Everything else is introduced by the words *I will*. The nation, the name, the blessing, the protection: none of it is given to Abram as a task to accomplish. **Abram is told what to leave. God says what He will do.**' },
    { type: 'p', text: `There is a further detail. The word *bless*, in its various forms, appears five times in these two verses. Readers have long observed that the word *cursed* is pronounced five times in Genesis 1–11: over the serpent (${g(3, 14)}), over the ground (${g(3, 17)}), over Cain (${g(4, 11)}), over the ground again in Lamech’s lament (${g(5, 29)}), and over Canaan (${g(9, 25)}). Whether or not the count is deliberate, the direction is unmistakable. Eleven chapters record the spread of the curse. Now God speaks blessing over one man, and through him over the world.` },

    { type: 'sub', text: 'The Promise and the Circumstance' },
    { type: 'p', text: 'Now set the promise beside the man who received it.' },
    {
      type: 'table',
      head: ['The promise', 'The circumstance'],
      rows: [
        [`A great nation (${g(12, 2)})`, `His wife is barren; she has no children (${g(11, 30)})`],
        [`A great name (${g(12, 2)})`, 'He has built no city, founded no kingdom, and achieved nothing Genesis thinks worth recording'],
        [`A land God will show him (${g(12, 1)})`, 'He does not know where it is (Hebrews 11:8)'],
        [`Blessing for all the families of the earth (${g(12, 3)})`, `He is one man, seventy-five years old (${g(12, 4)})`],
      ],
    },
    { type: 'p', text: 'Every line of the promise is answered by a fact that stands against it. This is not an accident of the storytelling. Genesis told us that Sarai was barren before it told us of the promise, so that we would feel the two collide. The promise does not describe Abram’s situation. It contradicts it.' },
    { type: 'p', text: 'The prophet Isaiah would later ask Israel to remember exactly how small the beginning was:' },
    { type: 'quote', text: 'Look to Abraham your father, and to Sarah who gave you birth. When I called him, he was but one; then I blessed him and multiplied him.', by: 'Isaiah 51:2' },
    { type: 'p', text: 'This tension will run through everything that follows. Abram will be promised a land, and the Canaanites will be living in it. He will be promised blessing, and there will be a famine. He will be promised a son, and the years will pass. **His life will be lived in the space between what God has said and what Abram can see.** Paul describes the God whom Abraham believed as the One *who gives life to the dead and calls into being what does not yet exist* (Romans 4:17). That is the kind of God this promise requires.' },

    { type: 'sub', text: 'Blessed to Be a Blessing' },
    { type: 'p', text: `It would be a mistake to read the call of Abram as God abandoning the nations in favor of one family. The final clause forbids it: *all the families of the earth will be blessed through you*. The Hebrew word for *families* is the word used for the clans of Noah’s sons in the Table of Nations (${g(10, 32)}). The peoples scattered from Babel are the families in view. God chooses one household for the sake of every household. We have already seen how [the promise answers Babel](/books/the-first-world/the-rise-of-nations/from-babel-to-abraham): the builders wanted to make a name for themselves, and God tells Abram that He will make his name great.` },
    { type: 'p', text: 'The phrase *so that you will be a blessing* is, in Hebrew, a command: *be a blessing*. Abram is not the end of the blessing. He is the road it travels on.' },
    { type: 'p', text: 'The New Testament reads this sentence as the first announcement of something much larger. Paul writes:' },
    { type: 'quote', text: 'The Scripture foresaw that God would justify the Gentiles by faith, and foretold the gospel to Abraham: “All nations will be blessed through you.”', by: 'Galatians 3:8' },
    { type: 'p', text: 'Matthew opens his Gospel by calling Jesus *the son of David, the son of Abraham* (Matthew 1:1). Peter tells the crowd in Jerusalem that they are heirs of the covenant in which God said to Abraham, *Through your offspring all the families of the earth will be blessed* (Acts 3:25). And John sees *a multitude too large to count, from every nation and tribe and people and tongue* (Revelation 7:9). Genesis 12 does not name Christ, and we should not pretend that it does. But the apostles are consistent about where this promise was going.' },
    { type: 'p', text: 'For now there is only a man in Haran. He is seventy-five years old. He has no child, no land, and no map. He has been told that the future of every family on earth runs through his own, and he has no way to verify it. He has a word.' },
    { type: 'p', text: '**God did not show Abram the land and then ask him to leave. He asked him to leave, and promised to show him the land.**' },
  ],
};

export default chapter;

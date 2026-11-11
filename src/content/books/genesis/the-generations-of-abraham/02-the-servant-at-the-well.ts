import type { BookChapter } from '../../types';

const g = (c: number, v: number, label = `${c}:${v}`) => `[${label}](https://www.shavat.app/ot/genesis/creation/${c}#v${v})`;

const chapter: BookChapter = {
  slug: 'the-servant-at-the-well',
  title: 'The Servant at the Well',
  ref: 'Genesis 24:1–27',
  blocks: [
    { type: 'figure', name: 'legacy-well' },
    { type: 'quote', text: 'O LORD, God of my master Abraham, please grant me success today, and show kindness to my master Abraham.', by: 'Genesis 24:12' },
    { type: 'p', text: '*By now Abraham was old and well along in years, and the LORD had blessed him in every way.* He has wealth, peace, a son, and a field. One thing is lacking. Isaac is approaching forty and has no wife. A promise of descendants like the stars is still resting on one unmarried man.' },
    { type: 'p', text: 'Genesis 24 is the longest chapter in the book, and nothing supernatural happens in it. God does not speak. No angel is seen. The story is carried by an oath, a journey, a prayer, and a girl with a water jar. The question of this passage is how God keeps His promise when He is silent.' },

    { type: 'sub', text: 'Two Things He Must Not Do' },
    { type: 'p', text: `Abraham sends for the chief servant of his household, the man who manages everything he owns. Genesis does not name him. He may be the Eliezer of Damascus who once stood to inherit the estate (${g(15, 2)}), but the text does not say so. Abraham has him place his hand under his thigh, a solemn form of oath, and swear by *the LORD, the God of heaven and the God of earth*.` },
    { type: 'p', text: 'The oath has two prohibitions.' },
    {
      type: 'list',
      items: [
        '**Not a wife from the Canaanites.** *You will not take a wife for my son from the daughters of the Canaanites among whom I am dwelling.*',
        '**Not a return to Mesopotamia.** *Make sure that you do not take my son back there.* He says this twice.',
      ],
    },
    { type: 'p', text: 'The first is not a matter of race. Abraham’s own relatives in the north worshiped other gods (Joshua 24:2). The concern is that the family of the promise should not be absorbed into the peoples of the land before the promise is fulfilled. The law will later give the same instruction to Israel, with the reason stated: such marriages would turn their children away from the LORD (Deuteronomy 7:3–4).' },
    { type: 'p', text: 'The second is the more striking. The servant asks a practical question: what if the woman will not come? Should he take Isaac to her? Abraham’s answer is emphatic. Isaac must not leave the land. Abraham left Mesopotamia at God’s command sixty-five years ago. His son is not to undo that journey.' },
    { type: 'p', text: '**The wife must come from outside Canaan, and the son must stay inside it.** Both conditions guard the same thing: a distinct family, in the promised land, waiting for God.' },

    { type: 'sub', text: 'He Will Send His Angel' },
    { type: 'quote', text: 'The LORD, the God of heaven, who brought me from my father’s house and my native land, who spoke to me and promised me on oath, saying, ‘To your offspring I will give this land’—He will send His angel before you so that you can take a wife for my son from there.', by: 'Genesis 24:7' },
    { type: 'p', text: 'These are the last words of Abraham recorded in Scripture, and they are a summary of his life. *He brought me. He spoke to me. He promised me on oath.* From those three facts Abraham draws a conclusion about the future: *He will send His angel before you*.' },
    { type: 'p', text: 'God has given him no word about this journey. He reasons from what God has already said. If the land is promised to his offspring, then his son must have offspring, and so he must have a wife. The God who swore the first will see to the second. This is what faith looks like in a man who has walked with God for a lifetime. He no longer needs a fresh vision. He knows who God is, and he acts on it.' },
    { type: 'p', text: 'He also leaves room for the woman’s freedom. *If the woman is unwilling to follow you, then you are released from this oath.* She is not to be compelled.' },

    { type: 'sub', text: 'The Prayer at the Well' },
    { type: 'p', text: 'The servant loads ten camels with gifts and travels to the city of Nahor in Aram-naharaim, some five hundred miles to the north. He arrives at evening, *at the time when the women went out to draw water*, and makes the camels kneel by the well outside the town.' },
    { type: 'p', text: 'Then he prays. It is the first prayer for specific guidance recorded in the Bible. He addresses *the LORD, God of my master Abraham*. He does not yet call the LORD his own God in so many words. He prays on the strength of another man’s relationship. And he asks for *kindness*: the Hebrew word is *chesed*, covenant loyalty, the faithful love that keeps its promises.' },
    { type: 'quote', text: 'Now may it happen that the girl to whom I say, ‘Please let down your jar that I may drink,’ and who responds, ‘Drink, and I will water your camels as well’—let her be the one You have appointed for Your servant Isaac.', by: 'Genesis 24:14' },
    { type: 'p', text: 'This is sometimes read as asking for an arbitrary sign. It is not. The test is a test of character. To give a stranger a drink is ordinary courtesy. To offer, unasked, to water ten camels is another matter. A thirsty camel can drink a great many gallons, and the water had to be drawn by hand and carried in a jar. The woman who volunteers for that is generous, strong, and willing to go far beyond what is required. The servant is asking God to show him a woman with the hospitality of Abraham himself, who promised his visitors a morsel and gave them a feast.' },

    { type: 'sub', text: 'Before He Had Finished' },
    { type: 'quote', text: 'Before the servant had finished praying, Rebekah came out with her jar on her shoulder. She was the daughter of Bethuel son of Milcah, the wife of Abraham’s brother Nahor.', by: 'Genesis 24:15' },
    { type: 'p', text: `The narrator tells us who she is before the servant knows. We have heard her name once already, in the list of Nahor’s family that closed the chapter of Moriah (${g(22, 23)}). She was provided for before anyone thought to look.` },
    { type: 'p', text: 'She does exactly what he prayed for, and Genesis tells it in verbs of haste. She *quickly lowered* her jar. She *quickly emptied* it into the trough. She *ran back* to the well. She drew *for all his camels*. The reader has seen this kind of running before, at the door of a tent in the heat of the day.' },
    { type: 'p', text: '*Meanwhile, the man watched her silently to see whether or not the LORD had made his journey a success.* He does not rush. He has prayed, and the answer appears to be standing in front of him, and he waits to see it through. Only when the last camel has finished does he bring out the gold and ask whose daughter she is.' },
    { type: 'p', text: 'Her answer settles it. She is the granddaughter of Nahor, Abraham’s brother. Out of all the women of the city, the first one he spoke to belongs to the very family he was sent to find.' },
    { type: 'quote', text: 'Then the man bowed down and worshiped the LORD, saying, “Blessed be the LORD, the God of my master Abraham, who has not withheld His kindness and faithfulness from my master. As for me, the LORD has led me on the journey to the house of my master’s relatives.”', by: 'Genesis 24:26–27' },
    { type: 'p', text: 'His first response is worship. He does not congratulate himself on the plan. *The LORD has led me.*' },
    { type: 'p', text: 'Notice what kind of guidance this was. There was no voice and no dream. A man made a wise plan, committed it to God in prayer, kept his eyes open, and found that the ordinary events of an evening at a well had been arranged in advance. Proverbs describes the same thing: *in all your ways acknowledge Him, and He will make your paths straight* (Proverbs 3:6).' },
    {
      type: 'table',
      head: ['What was needed', 'How it was provided'],
      rows: [
        ['A wife for Isaac, not from Canaan', `Rebekah, already born to Abraham’s kin (${g(22, 23)})`],
        ['A way to recognize her', 'A prayer, answered before it was finished'],
        ['Proof of her character', 'Water drawn for ten camels'],
        ['Certainty about her family', '*“I am the daughter of Bethuel”*'],
      ],
    },
    { type: 'p', text: 'In earlier years the promise was kept by fire between the pieces and a voice from heaven. Here it is kept by a servant’s loyalty, a sensible test, and a girl’s kindness to a stranger’s animals. It is the same God. Abraham had said that He would send His angel ahead. No angel is seen. The servant simply finds, when he arrives, that someone has been there before him.' },
    { type: 'p', text: '**God said nothing in this chapter. He had already arranged everything in it.**' },
  ],
};

export default chapter;

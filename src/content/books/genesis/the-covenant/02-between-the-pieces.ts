import type { BookChapter } from '../../types';

const g = (c: number, v: number, label = `${c}:${v}`) => `[${label}](https://www.shavat.app/ot/genesis/creation/${c}#v${v})`;

const chapter: BookChapter = {
  slug: 'between-the-pieces',
  title: 'Between the Pieces',
  ref: 'Genesis 15:7–21',
  blocks: [
    { type: 'figure', name: 'cov-pieces' },
    { type: 'quote', text: 'When the sun had set and darkness had fallen, behold, a smoking firepot and a flaming torch appeared and passed between the halves of the carcasses.', by: 'Genesis 15:17' },
    { type: 'p', text: 'Abram has believed the promise of a son. God now turns to the other half of the promise: *I am the LORD, who brought you out of Ur of the Chaldeans to give you this land to possess* (15:7). And Abram, who has just been counted righteous for his faith, asks a question.' },
    { type: 'quote', text: 'Lord GOD, how can I know that I will possess it?', by: 'Genesis 15:8' },
    { type: 'p', text: 'It may seem strange that the man who believed in verse 6 asks for assurance in verse 8. But faith and the desire for assurance are not opposites. Abram does not ask *whether* God will do it. He asks how he may *know*. And God does not reproach him. He answers with the most solemn act available in Abram’s world. He makes a covenant.' },

    { type: 'sub', text: 'Cutting a Covenant' },
    { type: 'p', text: 'God tells Abram to bring a heifer, a goat, and a ram, each three years old, with a turtledove and a young pigeon. Abram needs no further instruction. He cuts the larger animals in two and lays the halves opposite each other, leaving a path between them.' },
    { type: 'p', text: 'He knew what this was. In Hebrew, the ordinary expression for making a covenant is to *cut* a covenant, and this is why. The parties to a solemn agreement would walk between the pieces of slaughtered animals. The meaning of the act is explained by the prophet Jeremiah, in a passage where God condemns men who had made such an oath and broken it:' },
    { type: 'quote', text: 'And those who have transgressed My covenant and have not fulfilled the terms of the covenant they made before Me, I will treat like the calf they cut in two in order to pass between its pieces.', by: 'Jeremiah 34:18' },
    { type: 'p', text: 'To walk between the pieces was to say: *may this be done to me if I do not keep my word*. Treaty texts from elsewhere in the ancient Near East contain similar self-curses. It was an oath acted out in blood.' },
    { type: 'p', text: 'So Abram prepares the ceremony and waits. Nothing happens. The day wears on. *The birds of prey descended on the carcasses, but Abram drove them away* (15:11). Genesis does not interpret the birds, and we should be cautious about doing so. What the verse shows is a man keeping watch over an unfinished covenant through a long afternoon, guarding what he has laid out until God should come.' },

    { type: 'sub', text: 'Terror and Darkness' },
    { type: 'p', text: `*As the sun was setting, Abram fell into a deep sleep, and suddenly great terror and darkness overwhelmed him* (15:12). The word for *deep sleep* is the word used when God put Adam to sleep before making the woman (${g(2, 21)}). It describes a sleep that God sends, in which God does something the sleeper cannot do for himself.` },
    { type: 'p', text: 'Out of that darkness God speaks, and what He says is not what Abram asked to hear.' },
    { type: 'quote', text: 'Know for certain that your descendants will be strangers in a land that is not their own, and they will be enslaved and mistreated four hundred years. But I will judge the nation they serve as slaves, and afterward they will depart with many possessions.', by: 'Genesis 15:13–14' },
    { type: 'p', text: 'Abram had asked, *How can I know?* God answers, *Know for certain*. But the certainty includes four centuries of slavery. The promise of the land is real, and it will not be kept in Abram’s lifetime, nor in his son’s, nor his grandson’s. Between the promise and the possession lies Egypt. Abram had already walked [a small version of that road](/books/abraham-our-father/the-calling-of-abram/famine-in-the-land) himself.' },
    { type: 'p', text: 'God tells him three further things.' },
    {
      type: 'list',
      items: [
        '**Abram will die in peace.** *You, however, will go to your fathers in peace and be buried at a ripe old age* (15:15). He will not see the slavery, and he will not see the possession.',
        '**His descendants will come back.** *In the fourth generation your descendants will return here* (15:16).',
        '**There is a reason for the delay.** *For the iniquity of the Amorites is not yet complete* (15:16).',
      ],
    },
    { type: 'p', text: 'That last sentence deserves to be read slowly. The land is occupied, and God will not simply remove its inhabitants to make room for Abram. Their sin has not yet reached the point at which judgment is due. So Abram’s family will wait, and suffer, while God extends patience to the Amorites. **The same God who promises the land to Abram refuses to be unjust to the people who live in it.** When Israel finally enters Canaan, it will be told that the conquest is a judgment on the nations and not a reward for its own righteousness (Deuteronomy 9:4–5).' },

    { type: 'sub', text: 'The Firepot and the Torch' },
    { type: 'p', text: 'Then comes the moment the whole chapter has been waiting for. The sun has set. The pieces lie on the ground. Abram is in his deep sleep. And *a smoking firepot and a flaming torch appeared and passed between the halves*.' },
    { type: 'p', text: `Smoke and fire are the signs of God’s presence throughout the Old Testament. He will go before Israel in a pillar of cloud and a pillar of fire (Exodus 13:21). He will descend on Sinai in fire, and *the smoke rose like the smoke of a furnace* (Exodus 19:18). Here the fire moves along the path between the pieces. God Himself walks the way of the oath.` },
    { type: 'p', text: 'And Abram does not. This is the detail on which everything turns. In a covenant between two parties, both walk. Here only one does. Abram is asleep on the ground. He takes no oath, makes no promise, and accepts no penalty.' },
    {
      type: 'table',
      head: ['An ordinary covenant', 'The covenant with Abram'],
      rows: [
        ['Both parties pass between the pieces', 'Only God passes between the pieces'],
        ['Each takes the curse upon himself', 'God alone takes the oath'],
        ['It stands if both keep their word', 'It stands because God keeps His'],
      ],
    },
    { type: 'p', text: '**God bound Himself, and left Abram asleep.** The promise of the land does not rest on Abram’s performance. It rests on God’s own life. This is why the famine, the lie in Egypt, and every failure still to come cannot undo it. As Paul would write in another connection, *if we are faithless, He remains faithful, for He cannot deny Himself* (2 Timothy 2:13).' },
    { type: 'p', text: 'Christians have often seen something more here. If God alone takes upon Himself the penalty of a broken covenant, and if the human party does in fact prove faithless, then the logic of the ceremony points toward a day when God bears the curse Himself. That is a theological reflection which Genesis does not make. But it is the direction in which Paul’s language moves when he says that Christ became a curse for us so that the blessing of Abraham might come to the nations (Galatians 3:13–14).' },

    { type: 'sub', text: 'On That Day' },
    { type: 'quote', text: 'On that day the LORD made a covenant with Abram, saying, “To your descendants I have given this land—from the river of Egypt to the great River Euphrates—”', by: 'Genesis 15:18' },
    { type: 'p', text: `This is the first time the word *covenant* is used of God’s dealings with Abram. The promise has now become a sworn obligation. Notice the tense. At Shechem God said, *I will give this land* (${g(12, 7)}). Here He says, *I have given*. From God’s side the matter is finished.` },
    { type: 'p', text: 'The land is described by its borders and by the ten peoples who live in it: Kenites, Kenizzites, Kadmonites, Hittites, Perizzites, Rephaites, Amorites, Canaanites, Girgashites, and Jebusites. The list is a reminder of how far the promise is from the facts. Abram owns no part of this territory. He has no son to inherit it. He has just been told that his descendants will be slaves for four hundred years before they see it.' },
    { type: 'p', text: 'What he has is an oath. God has passed between the pieces. Abram asked how he could know, and he was not given an explanation or a timetable he would live to see fulfilled. He was given God’s own word, sworn in the only way a man of his time would have recognized as final.' },
    { type: 'p', text: '**Abram asked how he could be sure. God answered by staking Himself.**' },
  ],
};

export default chapter;

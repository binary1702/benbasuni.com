import type { BookChapter } from '../../types';

const g = (c: number, v: number, label = `${c}:${v}`) => `[${label}](https://www.shavat.app/ot/genesis/creation/${c}#v${v})`;

const chapter: BookChapter = {
  slug: 'the-choice-of-lot',
  title: 'The Choice of Lot',
  ref: 'Genesis 13:1–13',
  draft: true,
  blocks: [
    { type: 'figure', name: 'abram-lot' },
    { type: 'quote', text: 'Is not the whole land before you? Now separate yourself from me. If you go to the left, I will go to the right; if you go to the right, I will go to the left.', by: 'Genesis 13:9' },
    { type: 'p', text: `Abram comes up out of Egypt with his wife, his possessions, and his nephew. He retraces his own steps: through the Negev, north into the hill country, *to the place between Bethel and Ai where his tent had formerly been pitched, to the site where he had built the altar. And there Abram called on the name of the LORD* (${g(13, 3, '13:3–4')}).` },
    { type: 'p', text: 'In Egypt there was no altar. Now he returns to the last place where he had worshiped. Genesis does not call this repentance, and it does not tell us what Abram prayed. But the geography says something. After Egypt, he goes back to where he had been before he was afraid.' },
    { type: 'p', text: 'The crisis of this chapter is the opposite of the last one. Then there was too little. Now there is too much. The question is what governs a man’s choices when the promise and prosperity point in different directions.' },

    { type: 'sub', text: 'Too Much to Stay Together' },
    { type: 'p', text: `*Abram had become extremely wealthy in livestock and silver and gold* (${g(13, 2)}). The Hebrew word behind *wealthy* means *heavy*. It is the word used a few verses earlier for the famine, which was *severe*, literally *heavy*, in the land (${g(12, 10)}). Abram went down to Egypt because the famine was heavy. He has come back heavy himself.` },
    { type: 'p', text: `Lot has prospered too. He has *flocks and herds and tents* (${g(13, 5)}). And then Genesis states the problem:` },
    { type: 'quote', text: 'But the land was unable to support both of them while they stayed together, for they had so many possessions that they were unable to coexist.', by: 'Genesis 13:6' },
    { type: 'p', text: `The trouble is not poverty. It is abundance. The famine did not separate Abram and Lot. Wealth did. Some of that wealth, as we saw, was acquired in Egypt on Sarai’s account (${g(12, 16)}). Genesis does not moralize about this. It lets the consequences follow.` },
    { type: 'p', text: `The herdsmen begin to quarrel, and the narrator adds a reminder: *At that time the Canaanites and the Perizzites were also living in the land* (${g(13, 7)}). This is the second time we have been told that the land is occupied. Pasture and water were limited because others were already using them. And the family to whom the land was promised is quarreling over it in front of the people who actually hold it.` },

    { type: 'sub', text: 'Let There Be No Contention' },
    { type: 'p', text: 'Abram speaks first.' },
    { type: 'quote', text: 'Please let there be no contention between you and me, or between your herdsmen and my herdsmen. After all, we are kinsmen.', by: 'Genesis 13:8' },
    { type: 'p', text: 'The word translated *kinsmen* is the Hebrew word for *brothers*. Abram is the elder. He is the uncle, the head of the household, and the one to whom God spoke. By every custom of his world, the choice of land belonged to him. He gives it away. *Is not the whole land before you?* Whichever way Lot goes, Abram will take what is left.' },
    { type: 'p', text: 'Compare this with the Abram of the previous chapter. In Egypt he schemed to protect himself, and Sarai bore the cost. Here he gives up his advantage to keep the peace. Genesis does not explain the change. It reads, however, like the act of a man who has begun to believe that the land is not his to secure. If God has promised it, Abram does not need to win it from his nephew.' },
    { type: 'p', text: 'The offer is not without risk. Abram places the whole land before Lot. He is prepared to let the younger man choose any part of it.' },

    { type: 'sub', text: 'Lot Looked' },
    { type: 'quote', text: 'And Lot looked out and saw that the whole plain of the Jordan, all the way to Zoar, was well watered like the garden of the LORD, like the land of Egypt. (This was before the LORD destroyed Sodom and Gomorrah.) So Lot chose the whole plain of the Jordan for himself and set out toward the east.', by: 'Genesis 13:10–11' },
    { type: 'p', text: 'In Hebrew, Lot *lifted up his eyes and saw*. He decides by what he can see, and what he sees is good. In a country that has just come through a famine, water is everything. The hill country waits on the rain. The Jordan valley is fed by a river. As economics, Lot’s reasoning cannot be faulted.' },
    { type: 'p', text: `Genesis gives two comparisons, and both are loaded. The plain is *like the garden of the LORD*, the garden that a river watered (${g(2, 10)}). And it is *like the land of Egypt*, the place from which the family has just returned with its wealth and its shame. Lot sees a second Eden and a second Egypt in a single view.` },
    { type: 'p', text: `The sequence of verbs is familiar. The woman *saw that the tree was good for food and pleasing to the eyes*, and she took (${g(3, 6)}). Lot saw that the plain was well watered, and he *chose … for himself*. Then he *set out toward the east*. East is the direction in which Adam and Eve were driven (${g(3, 24)}), in which Cain went out from the presence of the LORD (${g(4, 16)}), and in which humanity journeyed on the way to Babel (${g(11, 2)}). Genesis does not announce these echoes. It simply uses the same words.` },
    { type: 'p', text: 'Then there is the parenthesis. *This was before the LORD destroyed Sodom and Gomorrah.* The narrator tells the reader what Lot cannot know. The plain looked like the garden of the LORD. It was going to burn.' },
    { type: 'p', text: '**Lot saw everything about the plain except its future.**' },

    { type: 'sub', text: 'Toward Sodom' },
    { type: 'quote', text: 'Abram lived in the land of Canaan, but Lot settled in the cities of the plain and pitched his tent toward Sodom. But the men of Sodom were wicked, sinning greatly against the LORD.', by: 'Genesis 13:12–13' },
    { type: 'p', text: 'The sentence sets the two men in two different places: Abram in the land of Canaan, Lot in the cities of the plain. And it tells us about the neighbors Lot has chosen. He looked at the water. Genesis looks at the people.' },
    { type: 'p', text: 'Follow Lot’s position through the chapters ahead.' },
    {
      type: 'list',
      items: [
        `He pitches his tent toward Sodom (${g(13, 12)}).`,
        `He is living in Sodom (${g(14, 12)}).`,
        `He is sitting in the gateway of Sodom, where the affairs of a city were conducted (${g(19, 1)}).`,
      ],
    },
    { type: 'p', text: 'No single step is dramatic. Genesis never says that Lot approved of what he found there, and Peter calls him *a righteous man distressed by the depraved conduct of the lawless* (2 Peter 2:7). Lot was not a wicked man. He was a man who chose where to live by the quality of its pasture.' },
    { type: 'p', text: 'What was wrong with Sodom? Genesis 19 will show us, and the prophet Ezekiel adds a diagnosis that fits this chapter closely:' },
    { type: 'quote', text: 'Now this was the iniquity of your sister Sodom: She and her daughters were arrogant, overfed, and complacent; they did not help the poor and needy.', by: 'Ezekiel 16:49' },
    { type: 'p', text: 'The well-watered plain had produced a people who were full and at ease. The very abundance that drew Lot was part of what had ruined the city.' },
    { type: 'p', text: 'Here, then, are two ways of pursuing a good life.' },
    {
      type: 'table',
      head: ['Lot', 'Abram'],
      rows: [
        [`Lifts up his own eyes (${g(13, 10)})`, `Will be told by God to lift up his eyes (${g(13, 14)})`],
        ['Chooses by what the land offers now', 'Waits for what God has promised'],
        ['Takes the well-watered plain', 'Is left with the hill country'],
        ['Moves toward the city', 'Remains in his tent'],
        ['Gains the better land', 'Keeps the promise'],
      ],
    },
    { type: 'p', text: `By every visible measure, Lot has won. He has the water, the pasture, and the cities. But Jesus asks, *What will it profit a man if he gains the whole world, yet forfeits his soul?* (Matthew 16:26). The last time Genesis shows us Lot, he is living in a cave in the mountains, having lost his home, his wealth, and his wife (${g(19, 30)}).` },
    { type: 'p', text: 'Something else leaves with Lot. Until now he has been the only younger male relative in the household of a childless man. If Abram ever supposed that the promise of offspring might be fulfilled through his nephew, and Genesis does not say that he did, that possibility has just walked away toward the east. Abram stands in the hill country with a barren wife and no heir at all.' },
    { type: 'p', text: '**Lot chose what he could see. Abram was left with what he had been promised.**' },
  ],
};

export default chapter;

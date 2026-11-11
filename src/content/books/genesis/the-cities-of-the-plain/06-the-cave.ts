import type { BookChapter } from '../../types';

const g = (c: number, v: number, label = `${c}:${v}`) => `[${label}](https://www.shavat.app/ot/genesis/creation/${c}#v${v})`;

const chapter: BookChapter = {
  slug: 'the-cave',
  title: 'The Cave',
  ref: 'Genesis 19:30–38',
  blocks: [
    { type: 'figure', name: 'plain-cave' },
    { type: 'quote', text: 'Lot and his two daughters left Zoar and settled in the mountains—for he was afraid to stay in Zoar—where they lived in a cave.', by: 'Genesis 19:30' },
    { type: 'p', text: 'Genesis could have ended Lot’s story with his rescue. It does not. It follows him one stage further, to a place and an event that no one would have invented for the nephew of Abraham.' },
    { type: 'p', text: 'It is an uncomfortable passage, and it is told with restraint. The narrator reports what happened and draws no moral. The question it leaves us with is what, in the end, Lot’s choice produced.' },

    { type: 'sub', text: 'From the Plain to a Cave' },
    { type: 'p', text: 'Lot had begged to be allowed to go to Zoar instead of the mountains. *I cannot run to the mountains; the disaster will overtake me, and I will die.* The request was granted. Now he leaves Zoar of his own accord, because *he was afraid to stay* there, and goes to the mountains after all. He arrives where he was told to go, by way of fear instead of obedience.' },
    { type: 'p', text: 'Trace the whole descent.' },
    {
      type: 'list',
      items: [
        `He travels with Abram, with flocks and herds and tents (${g(13, 5)}).`,
        `He chooses the whole plain of the Jordan for himself (${g(13, 11)}).`,
        `He pitches his tent toward Sodom (${g(13, 12)}).`,
        `He lives in Sodom (${g(14, 12)}).`,
        `He sits in the gateway of Sodom (${g(19, 1)}).`,
        `He flees to Zoar with his daughters (${g(19, 23)}).`,
        `He lives in a cave (${g(19, 30)}).`,
      ],
    },
    { type: 'p', text: 'He left Abram because the two of them had too many possessions to live together. He ends with none. He chose the plain because it was like the garden of the LORD. He ends in a hole in the rock above its ruins. **Lot gained everything he looked at and lost everything he had.**' },
    { type: 'p', text: 'There is one more thing he might have done, and Genesis is silent about it. Abraham was living in the hill country not far away. Lot does not go to him. Whether from shame, or pride, or simple exhaustion, the text does not say. The two men never meet again in the narrative.' },

    { type: 'sub', text: 'There Is No Man in the Land' },
    { type: 'quote', text: 'One day the older daughter said to the younger, “Our father is old, and there is no man in the land to sleep with us, as is the custom over all the earth. Come, let us get our father drunk with wine so we can sleep with him and preserve his line.”', by: 'Genesis 19:31–32' },
    { type: 'p', text: 'The daughters have lost their mother, their home, and the men they were to marry. From the cave they can see nothing but devastation. The elder concludes that there is no one left. Whether she believed the whole world had perished or only that no man would now marry the survivors of Sodom, Genesis does not tell us. Her stated aim is to *preserve our father’s line*. In her world, to die without descendants was to be erased.' },
    { type: 'p', text: 'The aim is one that Genesis takes seriously. It is the very thing Abraham and Sarah have longed for through this whole story. The means is incest, obtained by making their father drunk. It is done on two successive nights, and both times the narrator notes that Lot *was not aware when she lay down or when she got up*.' },
    { type: 'p', text: 'Genesis offers no explicit judgment. But the story carries its own. A few chapters earlier, Lot offered these daughters to the men of Sodom to *do to them as you please*. Now the daughters do as they please with him. He once proposed to use them to solve his problem. They use him to solve theirs. The family was brought out of Sodom. What they learned there came out with them.' },
    { type: 'p', text: `There is also an echo of an older story. After the flood, Noah planted a vineyard, became drunk, and lay uncovered in his tent, and something shameful followed that involved his own child (${g(9, 21)}). [We saw then](/books/the-first-world/the-new-world/the-nakedness-of-noah) that judgment had cleansed the world without changing the human heart. The same is true here. Fire has removed Sodom. It has not removed sin from the survivors. In both stories a man is delivered from a great judgment, and the very next scene finds him drunk and disgraced.` },

    { type: 'sub', text: 'Moab and Ammon' },
    { type: 'p', text: 'Each daughter bears a son. The elder names hers *Moab*, which sounds like *from father*. The younger names hers *Ben-ammi*, *son of my kin*. The names do not conceal anything. *He is the father of the Moabites of today … He is the father of the Ammonites of today.*' },
    { type: 'p', text: 'For the first readers of Genesis, these were not obscure names. Moab and Ammon were Israel’s neighbors across the Jordan, sometimes enemies and always relatives. Genesis tells Israel where they came from, and it does so without contempt. When Israel later approaches their borders, God forbids an attack on either nation: *I have given it to the descendants of Lot as their possession* (Deuteronomy 2:9, 19). The children of the cave are given a land of their own, for Lot’s sake, and behind Lot, for Abraham’s.' },
    { type: 'p', text: 'Then the story takes a turn that no one in the cave could have foreseen.' },
    {
      type: 'table',
      head: ['From the cave', 'Generations later'],
      rows: [
        ['Moab, born of Lot’s elder daughter', 'Ruth the Moabitess marries Boaz and becomes the great-grandmother of David (Ruth 4:13–17)'],
        ['Ben-ammi, father of the Ammonites', 'Naamah the Ammonite is the mother of Rehoboam, son of Solomon (1 Kings 14:21)'],
      ],
    },
    { type: 'p', text: 'Matthew names Ruth in the genealogy of Jesus (Matthew 1:5). The line that leads to the Messiah passes through a woman of Moab, and so through this cave. Genesis does not know this yet. It simply records two births. But the rest of Scripture shows that God was not finished with Lot’s family where Lot’s story ends. **The most shameful scene in the life of Abraham’s nephew becomes a thread in the ancestry of Abraham’s greatest Son.**' },

    { type: 'sub', text: 'Two Men Who Lifted Up Their Eyes' },
    { type: 'p', text: 'This is the last we see of Lot. It is worth setting him beside his uncle one final time, because Genesis has told their stories as a pair ever since they stood together between Bethel and Ai.' },
    {
      type: 'table',
      head: ['Lot', 'Abraham'],
      rows: [
        ['Chose by what he saw', 'Waited for what he was promised'],
        ['Moved toward the city', 'Lived in a tent'],
        ['Was rescued twice by another’s intervention', 'Went to war, and prayed, for someone else'],
        ['Could not persuade his own sons-in-law', 'Was told the purposes of God'],
        ['Ends in a cave with two sons born of disgrace', 'Is about to receive a son born of promise'],
      ],
    },
    { type: 'p', text: 'Lot was a righteous man. Scripture says so, and the story bears it out: he sheltered strangers at risk to himself, and he was grieved by what he saw around him. He was also rescued. But he was rescued, as Paul says in another context, *as if through the flames* (1 Corinthians 3:15), with his life and nothing else.' },
    { type: 'p', text: 'His story stands as the counterpart to Abraham’s. Both men were heirs of the same household. Both were wealthy. Both lifted up their eyes over the same country. One of them walked by what he could see, and it led by small steps to the gate of Sodom and then to a cave. The other was left with a promise he could not see, and in the very next chapters it will be kept.' },
    { type: 'p', text: '**Lot was saved from Sodom. The story of the cave shows how much of Sodom was saved with him.**' },
  ],
};

export default chapter;

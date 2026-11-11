import type { BookChapter } from '../../types';

const g = (c: number, v: number, label = `${c}:${v}`) => `[${label}](https://www.shavat.app/ot/genesis/creation/${c}#v${v})`;

const chapter: BookChapter = {
  slug: 'a-foreigner-and-an-outsider',
  title: 'A Foreigner and an Outsider',
  ref: 'Genesis 23:1–20',
  blocks: [
    { type: 'figure', name: 'legacy-cave' },
    { type: 'quote', text: 'I am a foreigner and an outsider among you. Give me a burial site among you so that I can bury my dead.', by: 'Genesis 23:4' },
    { type: 'p', text: '*Now Sarah lived to be 127 years old.* She is the only woman in Scripture whose age at death is recorded. She was sixty-five when she left Haran and ninety when Isaac was born. Her son is now thirty-seven. She dies at Hebron, *in the land of Canaan*, and *Abraham went out to mourn and to weep for her*.' },
    { type: 'p', text: '[After Moriah](/books/abraham-our-father/the-mountain-of-the-lord/by-myself-i-have-sworn), God does not speak to Abraham again in Genesis. What remains of his life is told in three scenes: a burial, a marriage, and a death. None of them contains a vision or a miracle. They show an old man putting his house in order. The question of this first scene is what a man who has been promised a whole country does when he needs six feet of it.' },

    { type: 'sub', text: 'Sixty-Two Years' },
    { type: 'p', text: 'Abraham rises from beside his dead and goes to the men of the place. His first words to them are a description of himself: *I am a foreigner and an outsider among you*.' },
    { type: 'p', text: `He was seventy-five when he entered Canaan. He is now a hundred and thirty-seven. For sixty-two years he has lived in a land of which God said, *all the land that you see, I will give to you and your offspring forever* (${g(13, 15)}). And when his wife dies, he does not own enough of it to bury her in.` },
    { type: 'p', text: 'This is the plainest statement of the distance between the promise and the circumstance in the whole story. He has no legal standing. He is a resident alien, living among the Hittites by their tolerance. To bury Sarah he must ask.' },
    { type: 'p', text: 'The Hittites answer him with great courtesy. *You are God’s chosen one among us. Bury your dead in the finest of our tombs.* The phrase can also be rendered *a mighty prince*. They honor him. God had promised to make his name great, and among his neighbors it is great. But notice what they offer: the use of one of *their* tombs. They will lend him a grave. That is not what Abraham wants.' },

    { type: 'sub', text: 'For Full Price' },
    { type: 'p', text: 'What follows is a negotiation, conducted in public with elaborate politeness. Abraham bows. He asks the assembly to speak to Ephron son of Zohar on his behalf, for the cave of Machpelah at the end of Ephron’s field. And he states his terms at once: *Let him sell it to me in your presence for full price*.' },
    { type: 'p', text: 'Ephron replies in front of everyone: *No, my lord. I give you the field, and I give you the cave that is in it.* It sounds generous. It is the customary opening of a bargain, and perhaps something more. Abraham asked for the cave. Ephron offers the cave and the field together.' },
    { type: 'p', text: 'Abraham bows again and insists on paying. Ephron names his figure as though it were nothing: *The land is worth four hundred shekels of silver, but what is that between you and me?* Compared with other prices mentioned in Scripture, it appears to be a very large sum. Jeremiah would later buy a field for seventeen shekels (Jeremiah 32:9). Abraham does not haggle. He weighs out the silver in the hearing of the witnesses, *according to the standard of the merchants*.' },
    { type: 'p', text: 'Why does he refuse the gift? Genesis does not say, but the pattern is familiar. Years before, he would not take *even a thread* from the king of Sodom, *lest you should say, ‘I have made Abram rich’*. A grave received as a favor could be reclaimed by the giver’s heirs. A grave lent by the Hittites would make Sarah a guest in death as she had been in life. **Abraham did not want a place among their tombs. He wanted ground that was his.**' },

    { type: 'sub', text: 'Deeded Over' },
    { type: 'quote', text: 'So Ephron’s field at Machpelah near Mamre, the cave that was in it, and all the trees within the boundaries of the field were deeded over to Abraham’s possession in the presence of all the Hittites who had come to the gate of his city.', by: 'Genesis 23:17–18' },
    { type: 'p', text: 'The language changes here. It becomes the language of a contract: the field, its location, the cave, the trees, the boundaries, the witnesses, the place of the transaction. The narrator records it twice. Genesis spends a whole chapter, twenty verses, on a property transfer. It has given less space to the birth of Isaac.' },
    { type: 'p', text: 'The reason is what this field is. It is the first piece of the promised land that Abraham’s family actually owns. Not conquered, not granted by a king, but bought, witnessed, and recorded beyond dispute. And it is a grave.' },
    {
      type: 'table',
      head: ['What God promised', 'What Abraham possessed at Sarah’s death'],
      rows: [
        [`*“From the river of Egypt to the great River Euphrates”* (${g(15, 18)})`, 'One field at Machpelah'],
        [`*“All the land of Canaan, as an eternal possession”* (${g(17, 8)})`, 'A cave, and the trees around it'],
        ['A gift from God', 'Paid for with four hundred shekels of silver'],
      ],
    },
    { type: 'p', text: '**The only part of the promised land that Abraham ever owned was a place to bury his dead.**' },

    { type: 'sub', text: 'In the Land of Canaan' },
    { type: 'p', text: 'Twice the chapter says that Hebron is *in the land of Canaan*. The narrator wants us to notice where Sarah is buried. Abraham had other options. His family had property and standing in Haran. He might have carried her back to the country they came from, as many would have. He buries her in the land God promised.' },
    { type: 'p', text: 'A burial place is a statement about where a family belongs. By laying Sarah in Canaan, Abraham declares that this is their home, though they do not possess it. He stakes the future of his family on a country where he is still a foreigner. It is an act of faith as real as any altar he built, and it is carried out with silver, witnesses, and a deed.' },
    { type: 'p', text: 'The cave will be used again. Abraham himself will be laid there, and after him Isaac and Rebekah, and Leah. Jacob, dying in Egypt, will make his sons swear to carry him back to it:' },
    { type: 'quote', text: 'There Abraham and his wife Sarah are buried, there Isaac and his wife Rebekah are buried, and there I buried Leah.', by: 'Genesis 49:31' },
    { type: 'p', text: 'For the four hundred years that Israel spends in Egypt, this field is their one holding in Canaan: a grave with their ancestors in it, waiting for them to come back. The prophet Jeremiah would later do something similar. With Jerusalem under siege and about to fall, he bought a field, as a sign that *houses, fields, and vineyards will again be bought in this land* (Jeremiah 32:15). To buy land in a country you are about to lose, or do not yet possess, is to say that you believe God about its future.' },
    { type: 'p', text: 'The letter to the Hebrews sums up the patriarchs in a sentence that could stand over the cave of Machpelah:' },
    { type: 'quote', text: 'All these people died in faith, without having received the things they were promised. However, they saw them and welcomed them from afar. And they acknowledged that they were strangers and exiles on the earth.', by: 'Hebrews 11:13' },
    { type: 'p', text: '*A foreigner and an outsider*, Abraham had called himself. Hebrews takes the phrase and finds in it a confession of faith. Those who speak this way *are seeking a country of their own* (Hebrews 11:14).' },
    { type: 'p', text: 'Sarah had followed her husband out of Ur and out of Haran. She had been passed off as his sister twice. She had waited twenty-five years for a child and laughed when she was told he would come. She had borne Isaac at ninety. She did not live to see a grandchild or an acre of the land. She was buried in a field her husband bought, in the country God had promised, by a man who still believed the promise.' },
    { type: 'p', text: '**Abraham was promised a land and bought a grave. He buried his wife in it as a man who expected the rest.**' },
  ],
};

export default chapter;

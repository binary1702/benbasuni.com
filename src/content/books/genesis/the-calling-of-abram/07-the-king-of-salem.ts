import type { BookChapter } from '../../types';

const g = (c: number, v: number, label = `${c}:${v}`) => `[${label}](https://www.shavat.app/ot/genesis/creation/${c}#v${v})`;

const chapter: BookChapter = {
  slug: 'the-king-of-salem',
  title: 'The King of Salem',
  ref: 'Genesis 14:17–24',
  draft: true,
  blocks: [
    { type: 'figure', name: 'abram-salem' },
    { type: 'quote', text: 'Then Melchizedek king of Salem brought out bread and wine—since he was priest of God Most High—and he blessed Abram and said: “Blessed be Abram by God Most High, Creator of heaven and earth, and blessed be God Most High, who has delivered your enemies into your hand.”', by: 'Genesis 14:18–20' },
    { type: 'p', text: 'Abram returns from the north as a victor. He has defeated four kings and recovered the wealth of five cities. For the first time since he entered Canaan, he holds real power in the land. The most dangerous moment of the campaign may not have been the night attack. It may be this one.' },
    { type: 'p', text: `Two kings come out to meet him in the Valley of Shaveh, the King’s Valley. Each brings something. God had said, *I will bless you; I will make your name great* (${g(12, 2)}). The question of this passage is who will be allowed to make Abram great.` },
    { type: 'p', text: `Notice how Genesis arranges the scene. The king of Sodom goes out to meet Abram in ${g(14, 17)}. He does not speak until ${g(14, 21)}. Between his arrival and his offer, the narrator places Melchizedek. Abram hears the blessing before he hears the bargain.` },

    { type: 'sub', text: 'Priest of God Most High' },
    { type: 'p', text: 'Melchizedek appears without introduction. Genesis is a book of genealogies, and it gives him none. We are not told who his father was, what people he belonged to, when he was born, or when he died. He occupies three verses and is gone.' },
    { type: 'p', text: 'What we are given is a name, a city, and an office. His name means *king of righteousness*. His city is Salem, which means *peace* (Hebrews 7:2), and which the Psalms identify with Zion: *His tent is in Salem, His dwelling place in Zion* (Psalm 76:2). That is Jerusalem. And he is *priest of God Most High*. This is the first time the word *priest* occurs in the Bible.' },
    { type: 'p', text: 'He does not belong to Abram’s family. He is the king of a city in Canaan, and he serves *El Elyon*, God Most High, the Creator of heaven and earth. Genesis does not explain how he came to know this God. It simply shows us that the knowledge of the true God was not confined to the household of Abram. The man who was called out of a family that worshiped other gods meets, in the land of the Canaanites, a priest who already worships the Creator.' },
    { type: 'p', text: 'Melchizedek brings bread and wine to men returning from battle, and he speaks two blessings. He blesses Abram by God Most High. And he blesses God Most High, *who has delivered your enemies into your hand*. With that sentence he interprets the victory. It was not the 318 men. It was not the night attack. God delivered. The promise *I will bless you* is now spoken aloud by a human voice, and it is the voice of a priest from outside the family.' },
    { type: 'p', text: `*Then Abram gave Melchizedek a tenth of everything.* This is the first tithe in Scripture, given long before any law required one; Jacob will later vow the same at Bethel (${g(28, 22)}). The conqueror of four kings acknowledges someone greater than himself. The letter to the Hebrews draws the inference: *indisputably, the lesser is blessed by the greater* (Hebrews 7:7).` },

    { type: 'sub', text: 'Lest You Should Say' },
    { type: 'p', text: `Now the king of Sodom speaks. *Give me the people, but take the goods for yourself* (${g(14, 21)}). It is a reasonable offer, even a generous one. Abram won the goods in battle, and no one would have disputed his right to them. The king is offering him the wealth of Sodom.` },
    { type: 'quote', text: 'I have raised my hand to the LORD God Most High, Creator of heaven and earth, that I will not accept even a thread, or a strap of a sandal, or anything that belongs to you, lest you should say, ‘I have made Abram rich.’', by: 'Genesis 14:22–23' },
    { type: 'p', text: 'Three things stand out in this answer.' },
    {
      type: 'list',
      items: [
        '**He names his God.** Abram takes the title Melchizedek used, *God Most High, Creator of heaven and earth*, and joins it to the name *the LORD*. The God the priest of Salem serves is the God who called Abram out of Haran.',
        '**He had already sworn.** *I have raised my hand.* The decision was made before the offer came.',
        '**He gives his reason.** *Lest you should say, ‘I have made Abram rich.’*',
      ],
    },
    { type: 'p', text: 'Abram is guarding the authorship of his own story. God had said, *I will bless you*. If the king of Sodom enriches him, there will be another claimant. Abram will not allow it to be said that his greatness came from that hand.' },
    { type: 'p', text: 'Set this beside what happened in Egypt.' },
    {
      type: 'table',
      head: ['In Egypt (Genesis 12)', 'In the King’s Valley (Genesis 14)'],
      rows: [
        ['He acts out of fear for his life', 'He has just risked his life'],
        [`He accepts the gifts of Pharaoh (${g(12, 16)})`, `He refuses the goods of the king of Sodom (${g(14, 23)})`],
        ['His wealth comes through a deception', 'He declines wealth because of an oath'],
        ['He is rebuked by a king', 'He is blessed by a king'],
        ['He has nothing to say', 'He speaks the name of the LORD'],
      ],
    },
    { type: 'p', text: 'It is the same man. Genesis does not comment on the difference, but the distance he has traveled is visible. He gives a tenth to the priest of God and takes nothing from the king of Sodom.' },
    { type: 'p', text: `Nor is this a show of severity. Abram accounts for what his young men have eaten, and he insists that his allies Aner, Eshcol, and Mamre receive their share (${g(14, 24)}). He does not impose his oath on others. The refusal concerns only his own dependence. And we have already been told what kind of city this king rules: *the men of Sodom were wicked, sinning greatly against the LORD* (${g(13, 13)}).` },
    { type: 'p', text: '**Abram would take a blessing from the king of Salem. He would not take a thread from the king of Sodom.**' },

    { type: 'sub', text: 'A Priest Forever' },
    { type: 'p', text: 'Melchizedek does not appear again in Genesis. He is mentioned in only two other places in Scripture. The first is a psalm of David:' },
    { type: 'quote', text: 'The LORD has sworn and will not change His mind: “You are a priest forever in the order of Melchizedek.”', by: 'Psalm 110:4' },
    { type: 'p', text: 'David speaks of a ruler who is also a priest, and whose priesthood does not come from Aaron. The second place is the letter to the Hebrews, which applies the psalm to Jesus (Hebrews 5:6; 6:20) and builds an argument on Genesis 14. Jesus descended from Judah, not from the priestly tribe of Levi (Hebrews 7:14). But there is a priesthood older than Levi’s, and Abraham, the ancestor of Levi, paid a tenth to it and was blessed by it.' },
    { type: 'quote', text: 'Without father or mother or genealogy, without beginning of days or end of life, like the Son of God, he remains a priest for all time.', by: 'Hebrews 7:3' },
    { type: 'p', text: 'We should be careful about what is being claimed. Hebrews reasons from what Genesis leaves unsaid. Because Genesis records neither the birth nor the death of Melchizedek, he stands in the text as a picture of a priest whose office has no end. Some Christian interpreters have gone further and taken him to be an appearance of Christ Himself. Hebrews says that he is *like* the Son of God, which most readers understand as resemblance and not identity. Genesis says neither.' },
    { type: 'p', text: 'Many Christians have also seen in the bread and wine an anticipation of the Lord’s Supper (Luke 22:19–20). Neither Genesis nor Hebrews draws that connection, and it belongs to reflection more than to interpretation.' },
    { type: 'p', text: 'What Genesis does establish is this. Before there is a covenant ceremony, before circumcision, and long before the law, Abram stands before the priest-king of the city that will become Jerusalem. He receives bread, wine, and a blessing, and he gives a tenth.' },

    { type: 'sub', text: 'After These Events' },
    { type: 'p', text: 'This book has followed Abram from Haran to the King’s Valley. Look back over the road.' },
    {
      type: 'table',
      head: ['The promise', 'The circumstance', 'What happened'],
      rows: [
        [`A land (${g(12, 1)}, ${g(12, 7, '7')})`, `The Canaanites were in the land (${g(12, 6)})`, 'He built an altar'],
        [`Blessing (${g(12, 2)})`, `A severe famine (${g(12, 10)})`, 'He went down to Egypt afraid, and God guarded Sarai'],
        [`All the land he could see (${g(13, 15)})`, `Lot took the best of it (${g(13, 11)})`, 'The promise was enlarged'],
        [`A blessing to the families of the earth (${g(12, 3)})`, `War among the kings (${g(14, 1, '14:1–12')})`, 'He rescued Lot and the people of Sodom'],
        [`A great name (${g(12, 2)})`, `The wealth of Sodom, offered freely (${g(14, 21)})`, 'He refused it'],
      ],
    },
    { type: 'p', text: 'At every turn a circumstance stood against the promise, and at every turn the promise remained standing. Sometimes Abram believed it, and sometimes he did not. It did not depend on him.' },
    { type: 'p', text: 'One line of the promise, however, has not moved at all. *I will make you into a great nation.* Abram has allies, three hundred trained men, a victory, and the blessing of a priest. He does not have a son.' },
    { type: 'p', text: 'He has just refused the reward of a king. The next chapter begins with these words:' },
    { type: 'quote', text: 'After these events, the word of the LORD came to Abram in a vision: “Do not be afraid, Abram. I am your shield, your very great reward.”', by: 'Genesis 15:1' },
    { type: 'p', text: `And for the first time in Scripture, Abram will answer God. He will speak about the one thing that is still missing (${g(15, 2)}).` },
    { type: 'p', text: '**Abram turned down the wealth of Sodom with nothing in his hands but a promise. The next word he heard was that God Himself was his reward.**' },
  ],
};

export default chapter;

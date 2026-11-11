import type { BookChapter } from '../../types';

const g = (c: number, v: number, label = `${c}:${v}`) => `[${label}](https://www.shavat.app/ot/genesis/creation/${c}#v${v})`;

const chapter: BookChapter = {
  slug: 'so-abram-departed',
  title: 'So Abram Departed',
  ref: 'Genesis 12:4–9',
  draft: true,
  blocks: [
    { type: 'figure', name: 'abram-departed' },
    { type: 'quote', text: 'So Abram departed, as the LORD had directed him, and Lot went with him. Abram was seventy-five years old when he left Haran.', by: 'Genesis 12:4' },
    { type: 'p', text: 'Genesis records no reply from Abram. There is no question, no objection, and no negotiation. Moses will argue with God at the burning bush. Gideon will ask for a sign, and then for another. Jeremiah will protest that he is too young. If Abram said anything, Scripture has not kept it. It has kept only what he did. *So Abram departed.*' },
    { type: 'p', text: 'The promise has been spoken. Nothing else has changed. Sarai is still barren, the land is still unnamed, and Abram is still one man. The question of this passage is what obedience looks like when the promise has been given and the circumstances remain exactly as they were.' },

    { type: 'sub', text: 'Seventy-Five Years Old' },
    { type: 'p', text: `Genesis is careful to give his age. At seventy-five, Abram is not a young man setting out to make his fortune. He is leaving at the point in life when most men have finished moving. Genesis will later tell us that he lived 175 years (${g(25, 7)}), which means that a full century of his life will be spent in a land that belongs to other people. He does not know that yet.` },
    { type: 'p', text: `Nor does he travel alone. He takes *his wife Sarai, his nephew Lot, and all the possessions and people they had acquired in Haran* (${g(12, 5)}). This is a large household on the move, with flocks and servants, traveling at the pace of its slowest animals. From Haran to the hill country of Canaan is a journey of roughly four hundred miles. Genesis gives us neither the route nor the time it took. It gives us the departure and the arrival.` },
    { type: 'p', text: `Then there is Lot. Abram was told to leave his kindred and his father’s household, and his nephew comes with him. Genesis does not criticize Abram for this, and we should not claim more than the text does. Lot was the son of Abram’s dead brother (${g(11, 27, '11:27–28')}), and in a household without a child he may have been the nearest thing Abram had to an heir. That is an inference. What Genesis does is keep mentioning him: *Lot went with him* (${g(12, 4)}), *his nephew Lot* (${g(12, 5)}), *Lot was with him* (${g(13, 1)}). The narrator is preparing us. The nephew who travels with Abram will soon stand at the center of the story.` },
    { type: 'p', text: `There is also a question about Abram’s father. If Abram was born when Terah was seventy (${g(11, 26)}), then Terah was 145 when his son left Haran and lived there another sixty years (${g(11, 32)}). Yet Stephen says Abram left *after his father died* (Acts 7:4). Interpreters have proposed that Abram was not Terah’s firstborn but is named first because of his importance, in which case he was born when Terah was 130. Others point out that the Samaritan Pentateuch gives Terah’s lifespan as 145 years. Genesis does not resolve the matter, and [the numbers of this genealogy](/books/the-first-world/the-rise-of-nations/the-generations-of-shem) should be handled with care.` },

    { type: 'sub', text: 'The Canaanites Were in the Land' },
    { type: 'p', text: `*When they came to the land of Canaan.* With those words the journey Terah began is finished. Terah had set out for Canaan and settled in Haran (${g(11, 31)}). His son arrives.` },
    { type: 'p', text: 'Abram travels through the land as far as Shechem, to the Oak of Moreh. Shechem lies in the central hill country, in the pass between Mount Ebal and Mount Gerizim (Deuteronomy 11:29–30). The name *Moreh* is related to the Hebrew word for *teacher*, and some have suggested that the tree was already a place where people came to seek instruction from their gods. That is a possibility, not something Genesis states.' },
    { type: 'p', text: 'Then comes a single sentence, placed where we cannot miss it.' },
    { type: 'quote', text: 'And at that time the Canaanites were in the land.', by: 'Genesis 12:6' },
    { type: 'p', text: `The land is not empty. It has owners, cities, and gods. The name itself carries a history for the reader of Genesis. Canaan is the grandson of Noah [over whom the curse was spoken](/books/the-first-world/the-new-world/the-curse-of-canaan) (${g(9, 25)}), and the Table of Nations has already drawn the borders of his territory (${g(10, 19)}). Abram is walking with his flocks through another people’s country.` },
    { type: 'p', text: '**The land God promised was already occupied.** This is the first collision between promise and circumstance after Abram arrives, and Genesis states it in one sentence and moves on.' },

    { type: 'sub', text: 'The LORD Appeared' },
    { type: 'quote', text: 'Then the LORD appeared to Abram and said, “I will give this land to your offspring.” So Abram built an altar there to the LORD, who had appeared to him.', by: 'Genesis 12:7' },
    { type: 'p', text: 'Three things are new in this verse.' },
    {
      type: 'list',
      items: [
        '**The LORD appeared.** Until now God has spoken. This is the first time Genesis says that the LORD *appeared* to anyone. The text does not describe what Abram saw.',
        '**This land.** The call had spoken of *the land I will show you*. Now it is shown. Abram learned his destination only by arriving at it.',
        '**To your offspring.** The land is not given to Abram. It is given to the descendants of a man who has no child.',
      ],
    },
    { type: 'p', text: 'The promise has become more specific and more impossible at the same moment. A childless man is told that his children will own a country that presently belongs to someone else. Stephen summarizes the situation without softening it:' },
    { type: 'quote', text: 'He gave him no inheritance here, not even a foot of ground. But God promised to give possession of the land to Abraham and his descendants, even though he did not yet have a child.', by: 'Acts 7:5' },
    { type: 'p', text: 'The word *offspring* is literally *seed*, a singular noun that normally refers to descendants as a group. Paul will later press the singular and argue that the promise finds its fulfillment in one descendant, *who is Christ* (Galatians 3:16). That is Paul’s reading of where the promise leads. In Genesis 12 the plain meaning is simpler and, for Abram, hard enough: he will have descendants, and this land will be theirs.' },

    { type: 'sub', text: 'The Altar and the Tent' },
    { type: 'p', text: `Abram’s answer is again an action. He builds an altar. Then he moves to the hill country east of Bethel, pitches his tent with Bethel to the west and Ai to the east, builds a second altar, and *called on the name of the LORD* (${g(12, 8)}). The phrase reaches back to the days of Seth, when *men began to call upon the name of the LORD* (${g(4, 26)}). Bethel itself is named here by the name Jacob will give it two generations later (${g(28, 19)}).` },
    { type: 'p', text: 'Two verbs describe his life in the land. He *pitched* a tent, and he *built* an altar. The tent was for himself. The altar was for the LORD. In all the years Abram spends in Canaan, Genesis never says that he built a house or a city. It says that he built altars. Set this beside the builders of Babel.' },
    {
      type: 'table',
      head: ['Babel', 'Abram'],
      rows: [
        [`*“Let us build for ourselves a city”* (${g(11, 4)})`, `He pitched his tent (${g(12, 8)})`],
        ['A tower, to make a name for themselves', 'An altar, to call on the name of the LORD'],
        [`They settled, so as not to be scattered (${g(11, 2)})`, `He journeyed on (${g(12, 9)})`],
      ],
    },
    { type: 'p', text: 'These altars stand in a land where other gods are worshiped. Abram cannot own the ground, but he can worship on it, and he does so in the open. Each altar marks a place where the promise was heard and believed.' },
    { type: 'p', text: 'The letter to the Hebrews explains what the tent meant:' },
    { type: 'quote', text: 'By faith he dwelt in the promised land as a stranger in a foreign country. He lived in tents, as did Isaac and Jacob, who were heirs with him of the same promise. For he was looking forward to the city with foundations, whose architect and builder is God.', by: 'Hebrews 11:9–10' },
    { type: 'p', text: 'The tent was not a sign of poverty. Abram was a wealthy man. On the reading of Hebrews, it was a confession: he was a stranger here, and he was waiting for something he could not build himself.' },
    { type: 'p', text: `Shechem will not be forgotten. Jacob will return to it and set up an altar of his own (${g(33, 18, '33:18–20')}). Joshua will gather the tribes there after the conquest, begin his speech with Abraham being taken *from beyond the Euphrates*, and renew the covenant (Joshua 24:1–3). The bones of Joseph will be buried there (Joshua 24:32). The place where the promise of the land was first spoken becomes the place where Israel acknowledges that the promise has been kept. Between the two lie centuries.` },
    { type: 'p', text: `*And Abram journeyed on toward the Negev* (${g(12, 9)}). He walks the land from north to south and settles nowhere. The Negev is the dry country at the southern edge of Canaan. The next verse will tell us what he found there.` },
    { type: 'p', text: '**Abram arrived in the promised land and received no part of it. He built an altar anyway.**' },
  ],
};

export default chapter;

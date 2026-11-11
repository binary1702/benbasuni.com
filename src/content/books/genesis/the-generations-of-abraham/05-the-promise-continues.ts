import type { BookChapter } from '../../types';

const g = (c: number, v: number, label = `${c}:${v}`) => `[${label}](https://www.shavat.app/ot/genesis/creation/${c}#v${v})`;

const chapter: BookChapter = {
  slug: 'the-promise-continues',
  title: 'The Promise Continues',
  ref: 'Genesis 25:19–34',
  blocks: [
    { type: 'figure', name: 'legacy-twins' },
    { type: 'quote', text: 'Later, Isaac prayed to the LORD on behalf of his wife, because she was barren. And the LORD heard his prayer, and his wife Rebekah conceived.', by: 'Genesis 25:21' },
    { type: 'p', text: '*This is the account of Abraham’s son Isaac.* With those words Genesis opens a new section. The father is buried. The story now belongs to the son, and the first thing we are told about his household is something we have heard before.' },
    { type: 'p', text: '*She was barren.*' },
    { type: 'p', text: 'The question of this last chapter is what happens to the promise when the man who received it is gone. Does it rest on Abraham’s faith, so that it weakens when he dies? Or does it rest on something else?' },

    { type: 'sub', text: 'Barren Again' },
    { type: 'p', text: `Rebekah was found by prayer, proved at a well, and brought five hundred miles to be the mother of the promised line. Her family blessed her to become *the mother of thousands upon thousands* (${g(24, 60)}). And she cannot conceive.` },
    { type: 'p', text: `Isaac was forty when he married her and sixty when the twins were born (${g(25, 20)}, ${g(25, 26, '26')}). For twenty years the heir of the promise has no heir. It is his parents’ story over again, almost to the number: Abraham and Sarah waited twenty-five.` },
    { type: 'p', text: 'This cannot be an accident. Sarah was barren. Rebekah is barren. Rachel, in the next generation, will be barren as well. In every generation of the patriarchs the promised line arrives at a closed womb. **God seems determined that this family should never be able to say that it produced its own future.** Each generation must receive it as a gift.' },
    { type: 'p', text: 'Notice what Isaac does. *Isaac prayed to the LORD on behalf of his wife.* His father and mother, faced with the same trial, turned to Hagar. Isaac turns to God. Genesis records no scheme, no substitute, and no second wife. Whatever Isaac may have lacked in boldness, he had learned this from the household he grew up in. He had himself been the answer to an impossible promise, and he asks the same God for the same thing.' },
    { type: 'p', text: '*And the LORD heard his prayer.*' },

    { type: 'sub', text: 'Two Nations' },
    { type: 'p', text: 'The pregnancy is difficult. The children struggle within her, and Rebekah asks, *Why is this happening to me?* She goes to inquire of the LORD, and she is given an answer that will govern the rest of Genesis.' },
    { type: 'quote', text: 'Two nations are in your womb, and two peoples from within you will be separated; one people will be stronger than the other, and the older will serve the younger.', by: 'Genesis 25:23' },
    { type: 'p', text: 'God had told Abraham that he would be the father of nations. Here two of them are announced before they are born. And they are ranked, against all custom. In that world the firstborn inherited the larger share and the leadership of the family. God says that it will be otherwise.' },
    { type: 'p', text: 'We have seen this before as well. Ishmael was the elder, and the covenant went to Isaac. Now Esau will be the elder, and the promise will go to Jacob. Throughout Genesis God passes over the natural heir: Abel’s offering is accepted and Cain’s is not, Isaac is chosen and not Ishmael, Jacob and not Esau, and later Joseph and Judah and not Reuben. The line of promise never runs simply by birth order.' },
    { type: 'p', text: 'Paul draws out the meaning. The choice was announced *before the twins were born or had done anything good or bad*, so that God’s purpose might stand *not by works but by Him who calls* (Romans 9:11–12). It is the principle of Abraham’s own call. He was not chosen because of what he was. Neither is Jacob, as his story will make very plain.' },

    { type: 'sub', text: 'A Birthright for a Meal' },
    { type: 'p', text: 'The twins are born. The first is red and hairy, and they call him Esau. The second comes out grasping his brother’s heel, and he is named Jacob, a name that sounds like the word for *heel*. They grow up to be opposites: Esau a skillful hunter, a man of the open country, and Jacob a quiet man who stays among the tents. And the parents divide. *Isaac … loved Esau; but Rebekah loved Jacob.*' },
    { type: 'p', text: 'Then comes a small domestic scene. Esau returns from the field famished. Jacob is cooking lentil stew. Esau asks for some. Jacob names his price: *First sell me your birthright*.' },
    { type: 'p', text: 'Neither brother comes out of it well. Jacob exploits his brother’s hunger. But the narrator’s verdict falls on Esau. *I am about to die, so what good is a birthright to me?* He swears it away, eats, drinks, gets up, and leaves. Five quick verbs, and no sign that he gave it another thought. *Thus Esau despised his birthright.*' },
    { type: 'p', text: 'What was the birthright in this family? It was more than a double share of flocks. It was the place in the line through which God had promised a land, a nation, and blessing for the world. And none of that could be seen. The land belonged to the Canaanites. The nation was two brothers in a tent. The stew was hot and in front of him.' },
    { type: 'p', text: '**Esau traded what God had promised for what he could eat.** The letter to the Hebrews holds him up as a warning: *godless like Esau, who for a single meal sold his birthright* (Hebrews 12:16).' },
    { type: 'p', text: 'We have met this choice before. Lot lifted up his eyes, saw the well-watered plain, and took it. Esau looks at a pot of stew and takes it. Both men prefer the visible good to the promised one. It is the opposite of what Abraham did for a hundred years.' },

    { type: 'sub', text: 'Abraham, Our Father' },
    { type: 'p', text: 'Here the story of Abraham ends and the story of Jacob begins. It is worth looking back over the whole road, from the voice in Haran to the cave at Machpelah.' },
    {
      type: 'table',
      head: ['Book', 'The promise', 'The circumstance'],
      rows: [
        ['[The Calling of Abram](/books/abraham-our-father/the-calling-of-abram)', 'A land, a nation, a blessing', 'A barren wife, an occupied land, a famine, a war'],
        ['[The Covenant](/books/abraham-our-father/the-covenant)', 'A son from his own body; a covenant sworn by God', 'Ten years of waiting, then thirteen of silence'],
        ['[The Cities of the Plain](/books/abraham-our-father/the-cities-of-the-plain)', 'A son within the year; the nations blessed through him', 'A wife past childbearing; a city beyond saving'],
        ['[The Promised Son](/books/abraham-our-father/the-promised-son)', 'Isaac', 'Abraham’s own fear'],
        ['[The Mountain of the Lord](/books/abraham-our-father/the-mountain-of-the-lord)', '*“Through Isaac your offspring will be reckoned”*', '*“Offer him there as a burnt offering”*'],
        ['The Generations of Abraham', 'The land, forever', 'A grave, bought for silver'],
      ],
    },
    { type: 'p', text: 'At every stage something stood against what God had said. Sometimes it was the world, sometimes time, sometimes Abraham’s own failure, and once it was the command of God Himself. And at every stage the promise stood. It did not stand because Abraham’s faith was always strong. He lied twice about his wife. He took Hagar. He laughed. It stood because the One who made it had bound Himself to keep it.' },
    { type: 'p', text: 'What made Abraham the father of the faithful was not that he never wavered. It was that, through all of it, he kept turning back to the God who had spoken. He left when he was told to go. He believed under the stars. He interceded for a city. He gave up Ishmael, and then Isaac. He bought a grave in a land he did not own. *He did not waver through disbelief in the promise of God*, Paul says, looking at the whole, *but was strengthened in his faith and gave glory to God, being fully persuaded that God was able to do what He had promised* (Romans 4:20–21).' },
    { type: 'p', text: 'The New Testament calls him *the father of us all* (Romans 4:16), and it says who his children are: *if you belong to Christ, then you are Abraham’s seed and heirs according to the promise* (Galatians 3:29). To be a child of Abraham, on this account, is not a matter of descent. It is to live as he lived, between a word from God and a world that does not yet match it.' },
    { type: 'p', text: 'Genesis leaves us with the promise in the hands of a new generation. A barren woman has borne twins. The elder has despised his birthright. The younger has grasped at it. Neither of them looks like the hope of the world. The story has begun again, as it began with a childless old man in Haran, with nothing to recommend it but the word of God.' },
    { type: 'p', text: '**Abraham died, and the promise did not. It had never depended on him.**' },
  ],
};

export default chapter;

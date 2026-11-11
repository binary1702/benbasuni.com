import type { BookChapter } from '../../types';

const g = (c: number, v: number, label = `${c}:${v}`) => `[${label}](https://www.shavat.app/ot/genesis/creation/${c}#v${v})`;

const chapter: BookChapter = {
  slug: 'the-well-of-the-oath',
  title: 'The Well of the Oath',
  ref: 'Genesis 21:22–34',
  blocks: [
    { type: 'figure', name: 'son-well' },
    { type: 'quote', text: 'And Abraham planted a tamarisk tree in Beersheba, and there he called upon the name of the LORD, the Eternal God.', by: 'Genesis 21:33' },
    { type: 'p', text: 'After the birth of Isaac and the departure of Ishmael, Genesis records a quiet episode about a treaty and a well. It is easy to pass over. There is no vision in it, no angel, and no word from God. But it shows us what the life of Abraham looks like in the years when the promise has begun to be kept, and it is the last thing we are told before the greatest test of his life.' },
    { type: 'p', text: 'The question of this passage is how a man lives in a land that has been promised to him and does not yet belong to him.' },

    { type: 'sub', text: 'God Is with You' },
    { type: 'quote', text: 'At that time Abimelech and Phicol the commander of his army said to Abraham, “God is with you in all that you do.”', by: 'Genesis 21:22' },
    { type: 'p', text: 'The king of Gerar comes to Abraham, and he brings his general. It is a state visit. And the first thing he says is a confession: *God is with you in all that you do*.' },
    { type: 'p', text: `This is the man Abraham deceived. He has every reason to think poorly of him. But he has also watched. He was warned in a dream on Abraham’s account. His household was healed when Abraham prayed. He has seen a son born to a man of a hundred and a woman of ninety. Whatever he thinks of Abraham’s honesty, he cannot deny what he has seen. God had promised, *I will make your name great* (${g(12, 2)}). Here a foreign king travels to a herdsman’s camp to seek his goodwill.` },
    { type: 'p', text: 'What he asks for is pointed. *Swear to me here before God that you will not deal falsely with me or my children or descendants.* He wants an oath that Abraham will not deceive him again. He appeals to his own record: *the same kindness that I have shown to you*. The outsider is asking the prophet for a promise of honesty.' },
    { type: 'p', text: 'Abraham’s answer is two words in Hebrew. *I swear it.* He offers no excuses this time.' },

    { type: 'sub', text: 'Seven Ewe Lambs' },
    { type: 'p', text: 'Then Abraham raises a complaint of his own. Abimelech’s servants have seized a well that Abraham dug. In that country a well is the difference between life and death for a flock. Abimelech replies that he knew nothing about it.' },
    { type: 'p', text: 'Notice how Abraham handles the matter. He does not fight for the well, though he once led three hundred men against four kings. He does not go behind the king’s back. He states the grievance openly and settles it by agreement. He gives Abimelech sheep and cattle, and the two men make a covenant. Then he sets apart seven ewe lambs and asks the king to accept them *as my witness that I dug this well*.' },
    { type: 'p', text: 'The place is named for the event. *Beersheba* can mean *well of the oath* or *well of seven*; the Hebrew words for *seven* and for *swearing an oath* share a root, and the name holds both.' },
    { type: 'p', text: 'Consider what Abraham has gained. Not a kingdom. Not a city. A well, and a recognized right to it. God has promised him all the land from the river of Egypt to the Euphrates. At the age of a hundred and something, what he can actually call his own in that land is a hole in the ground with water in it, and he had to pay seven lambs to have the claim acknowledged.' },
    {
      type: 'table',
      head: ['What God promised', 'What Abraham holds'],
      rows: [
        [`*“All the land that you see”* (${g(13, 15)})`, 'One well, by treaty'],
        [`*“To your descendants I have given this land”* (${g(15, 18)})`, 'A covenant with the king who rules it'],
        [`*“An eternal possession”* (${g(17, 8)})`, 'A tree he has planted'],
      ],
    },
    { type: 'p', text: '**He was the heir of the whole land, and he negotiated honestly for a single well.** He does not seize what has been promised. He lives as a neighbor among the people who presently hold it, and waits for God to give it in His own time.' },

    { type: 'sub', text: 'A Tamarisk Tree' },
    { type: 'p', text: 'When the king has gone, Abraham does two things. He plants a tree, and he calls on the name of the LORD.' },
    { type: 'p', text: 'Until now Abraham has built altars and pitched tents. An altar marks a moment. A tent can be taken down in an hour. A tree is a different kind of act. The tamarisk is a hardy, slow-growing tree of dry country, valued for its shade. A man of Abraham’s age who plants one does not expect to sit under it for long. He is planting for those who come after him.' },
    { type: 'p', text: 'It is a small gesture of permanence from a man who has lived his whole life in the land as a stranger. He has a son now. He has a well. He puts something in the ground that will outlast him.' },
    { type: 'p', text: 'And there he calls on the LORD by a new name: *El Olam*, the Eternal God, the Everlasting God. It is fitting. He has just made a covenant with a king whose kingdom will pass away. He has planted a tree that will outlive him. He himself is over a hundred. And he worships the God who does not pass away. Isaiah will later use the same title to comfort a weary people: *The LORD is the everlasting God, the Creator of the ends of the earth. He will not grow tired or weary* (Isaiah 40:28).' },
    { type: 'p', text: 'Abraham has learned the names of God one at a time, each from an experience.' },
    {
      type: 'table',
      head: ['Name', 'Where it was learned'],
      rows: [
        [`God Most High (${g(14, 22)})`, 'After the battle, when he refused the wealth of Sodom'],
        [`The God who sees (${g(16, 13)})`, 'From Hagar, who met Him in the desert'],
        [`God Almighty (${g(17, 1)})`, 'When he was ninety-nine and Sarah was still barren'],
        [`The Eternal God (${g(21, 33)})`, 'At Beersheba, beside a well and a young tree'],
      ],
    },
    { type: 'p', text: 'Each name answers a circumstance. The Most High is above the kings. The One who sees found the slave whom no one saw. The Almighty gave a child to the barren. The Eternal remains when the man who waits for the promise is gone.' },

    { type: 'sub', text: 'A Long Time' },
    { type: 'p', text: '*And Abraham resided in the land of the Philistines for a long time.* The name *Philistines* is one that Genesis’s readers knew well. Most historians date the main Philistine settlement on the coast to a period after Abraham, and Genesis may be using the later name for the region, as it does with Dan and Bethel, or referring to earlier settlers there. Either way, the sentence describes a long stretch of ordinary years.' },
    { type: 'p', text: 'They are, as far as we can tell, the best years of Abraham’s life. He has peace with his neighbors. He has water. He has a son, and the son is growing. The boy who was weaned at the feast becomes a child, and then a youth strong enough to carry a load of wood up a mountain. For the first time since he left Haran, Abraham has something that looks like a settled life.' },
    { type: 'p', text: 'This book began in Gerar with a lie and a promise in danger. It ends at Beersheba with an oath kept, a tree in the ground, and the promise asleep in Abraham’s tent. Every circumstance that stood against the word of God has been answered. The barren woman has borne a son. The rival heir has been provided for. The neighbors are at peace.' },
    { type: 'p', text: 'And then the next chapter begins: *Some time later God tested Abraham*.' },
    { type: 'p', text: '**Abraham planted a tree he would not see full grown, and called on the God who would.**' },
  ],
};

export default chapter;

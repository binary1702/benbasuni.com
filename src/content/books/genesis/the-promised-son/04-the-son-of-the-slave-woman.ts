import type { BookChapter } from '../../types';

const g = (c: number, v: number, label = `${c}:${v}`) => `[${label}](https://www.shavat.app/ot/genesis/creation/${c}#v${v})`;

const chapter: BookChapter = {
  slug: 'the-son-of-the-slave-woman',
  title: 'The Son of the Slave Woman',
  ref: 'Genesis 21:8–21',
  blocks: [
    { type: 'figure', name: 'son-hagar' },
    { type: 'quote', text: 'Then God heard the voice of the boy, and the angel of God called to Hagar from heaven, “What is wrong, Hagar? Do not be afraid, for God has heard the voice of the boy where he lies.”', by: 'Genesis 21:17' },
    { type: 'p', text: 'The laughter of Sarah lasts for one paragraph. The next begins with a feast and ends with a mother and her son dying of thirst in the desert.' },
    { type: 'p', text: 'Isaac has been weaned, which in that world would have been at two or three years of age. Abraham holds a great feast. Ishmael is now sixteen or seventeen. For most of his life he has been his father’s only son. The question of this passage is what becomes of the son who was born by human arrangement, now that the son of promise has come.' },

    { type: 'sub', text: 'Expel the Slave Woman' },
    { type: 'p', text: 'At the feast Sarah sees Ishmael *mocking*. The Hebrew word is from the root for laughter, the same root as Isaac’s name. It can mean playing, laughing, or jesting, and Genesis does not specify what Ishmael was doing. Paul understood it as hostility: *the son born by the flesh persecuted the son born by the Spirit* (Galatians 4:29). Whatever it was, Sarah sees in it a threat.' },
    { type: 'quote', text: 'Expel the slave woman and her son, for the slave woman’s son will never share in the inheritance with my son Isaac!', by: 'Genesis 21:10' },
    { type: 'p', text: 'She does not use their names. *The slave woman. Her son.* Sixteen years earlier it was Sarai who had proposed that Hagar bear a child for her, and Sarai who was to *build a family* through her. Now the boy is only *the slave woman’s son*. The arrangement that was her idea has become intolerable to her.' },
    { type: 'p', text: '*Now this matter distressed Abraham greatly because it concerned his son Ishmael.* This is one of the few places where Genesis tells us what Abraham felt. He loves the boy. He had once prayed, *O that Ishmael might live under Your blessing!* He has raised him for sixteen years. Sarah calls him the slave woman’s son. The narrator calls him *his son*.' },

    { type: 'sub', text: 'Listen to Sarah' },
    { type: 'quote', text: 'But God said to Abraham, “Do not be distressed about the boy and your maidservant. Listen to everything that Sarah tells you, for through Isaac your offspring will be reckoned. But I will also make a nation of the slave woman’s son, because he is your offspring.”', by: 'Genesis 21:12–13' },
    { type: 'p', text: `This is a difficult word. God tells Abraham to do what Sarah demands. Once before, Abram *listened to the voice of Sarai* (${g(16, 2)}), and Ishmael was the result. Now he is told to listen to her voice again, and Ishmael must go.` },
    { type: 'p', text: 'God does not endorse Sarah’s motives. He gives His own reasons, and they are different from hers. She is thinking of the inheritance. He is speaking of the covenant line: *through Isaac your offspring will be reckoned*. And He adds a promise she never made: Ishmael too will become a nation, *because he is your offspring*.' },
    { type: 'p', text: 'Two things are held together here, and Genesis does not relax either of them. The covenant will run through Isaac and through him alone. And God will not abandon the son who is being sent away. **The line of promise is narrow. The care of God is not.**' },
    { type: 'p', text: 'Abraham must now give up a son. He is told that it is God’s will, and he is given a promise about the boy’s future. He is not spared the loss.' },

    { type: 'sub', text: 'Early in the Morning' },
    { type: 'p', text: '*Early in the morning, Abraham got up, took bread and a skin of water, put them on Hagar’s shoulders, and sent her away with the boy.* The provision is meager. A wealthy man sends away his son and the boy’s mother with what one woman can carry. Genesis does not explain why he gave no more. Perhaps he trusted the promise he had just been given. The text only shows him rising early and doing what he was told.' },
    { type: 'p', text: 'Hagar wanders in the wilderness of Beersheba. The water runs out. She puts the boy under a bush and sits down a bowshot away. *I cannot bear to watch the boy die!* And she weeps.' },
    { type: 'p', text: 'She has been in the desert before. Then she was pregnant and had run away. The angel of the LORD found her by a spring, and she named Him [the God who sees](/books/abraham-our-father/the-covenant/the-god-who-sees). This time she did not run. She was sent. And there is no spring.' },
    { type: 'p', text: 'Then comes the verse with which this chapter opened. *God heard the voice of the boy.* The boy’s name is Ishmael, *God hears*. Genesis has not told us that he cried out. It tells us that God heard him. The name his mother was given in the first desert is kept in the second.' },
    { type: 'quote', text: 'Then God opened her eyes, and she saw a well of water. So she went and filled the skin with water and gave the boy a drink.', by: 'Genesis 21:19' },
    { type: 'p', text: 'The well was there. She had not seen it. The woman who once said, *I have seen the One who sees me*, now has her own eyes opened. God does not create water in the desert. He shows her what He had already provided.' },
    { type: 'p', text: '*And God was with the boy.* He grows up in the wilderness, becomes an archer, and marries a woman from Egypt, his mother’s country. The promise made about him before he was born has begun to come true: a free man in open country, the beginning of a nation.' },

    { type: 'sub', text: 'Two Sons' },
    { type: 'p', text: 'Paul treats this episode as a picture of two covenants and two ways of belonging to God, one of slavery and one of freedom, and quotes Sarah’s words as Scripture (Galatians 4:30). His point is that the inheritance comes by promise and cannot be shared with a principle of human achievement. It is an argument about the gospel, and he says explicitly that he is speaking figuratively (Galatians 4:24). It should not be read as a verdict on Hagar or Ishmael as persons. Genesis itself is careful to show God’s kindness to both.' },
    { type: 'p', text: 'There is something else in this chapter that only becomes visible in the light of the next one. Set them side by side.' },
    {
      type: 'table',
      head: ['Ishmael (Genesis 21)', 'Isaac (Genesis 22)'],
      rows: [
        ['God tells Abraham to send his son away', 'God tells Abraham to offer his son'],
        [`*“Early in the morning, Abraham got up”* (${g(21, 14)})`, `*“Abraham got up early the next morning”* (${g(22, 3)})`],
        ['The boy is at the point of death in the wilderness', 'The boy is at the point of death on the altar'],
        [`The angel of God calls from heaven (${g(21, 17)})`, `The angel of the LORD calls from heaven (${g(22, 11)})`],
        [`Hagar’s eyes are opened and she sees a well (${g(21, 19)})`, `Abraham looks up and sees a ram (${g(22, 13)})`],
        ['A promise of a great nation', 'A promise of descendants like the stars'],
      ],
    },
    { type: 'p', text: 'Abraham gives up both of his sons, one after the other. In each case he rises early. In each case the child comes to the edge of death. In each case a voice calls from heaven and something is seen that was already there. The sending away of Ishmael is a rehearsal for Moriah, and Abraham does not know it.' },
    { type: 'p', text: 'For now, the household is smaller. Abraham has done what God told him, at great cost to himself. He has one son left. And everything God has promised rests on that one boy.' },
    { type: 'p', text: '**God told Abraham which son would carry the promise. He did not forget the other.**' },
  ],
};

export default chapter;

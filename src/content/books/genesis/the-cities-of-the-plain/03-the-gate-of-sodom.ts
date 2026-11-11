import type { BookChapter } from '../../types';

const g = (c: number, v: number, label = `${c}:${v}`) => `[${label}](https://www.shavat.app/ot/genesis/creation/${c}#v${v})`;

const chapter: BookChapter = {
  slug: 'the-gate-of-sodom',
  title: 'The Gate of Sodom',
  ref: 'Genesis 19:1–11',
  blocks: [
    { type: 'figure', name: 'plain-gate' },
    { type: 'quote', text: 'Now the two angels arrived at Sodom in the evening, and Lot was sitting in the gateway of the city.', by: 'Genesis 19:1' },
    { type: 'p', text: `The LORD had said, *I will go down to see* (${g(18, 21)}). The investigation now takes place. Two of the three visitors arrive at Sodom at evening, and the first person they meet is Abraham’s nephew.` },
    { type: 'p', text: `Lot is *sitting in the gateway*. The gate of an ancient city was where its elders sat, where disputes were heard and business was transacted. [We have watched him get here by stages](/books/abraham-our-father/the-calling-of-abram/the-choice-of-lot): his tent pitched toward Sodom, then a house within it, and now a seat at its gate. He has become a man of standing in the city. The question of this passage is what that has done to him, and what the city really is.` },

    { type: 'sub', text: 'Two Hosts' },
    { type: 'p', text: 'Genesis invites us to compare this scene with the one at Abraham’s tent. The same visitors arrive. Each host sees them, rises, bows, and offers water for their feet and a meal.' },
    {
      type: 'table',
      head: ['Abraham (Genesis 18)', 'Lot (Genesis 19)'],
      rows: [
        ['At the door of his tent, in the heat of the day', 'In the gateway of the city, in the evening'],
        ['Runs to meet them and bows', 'Rises to meet them and bows'],
        ['A feast: bread, a calf, curds, and milk', 'A feast, and unleavened bread'],
        ['They accept at once', 'They decline, and he must insist'],
        ['The meal ends with a promise of life', 'The meal is interrupted by a mob'],
      ],
    },
    { type: 'p', text: 'Lot’s hospitality is real. He has not forgotten what he learned in his uncle’s household. But notice the urgency. The angels say they will spend the night in the square, and Lot *insisted so strongly* that they came in. He knows what happens in the square at night. His insistence tells us what kind of city he lives in before the city shows us itself.' },
    { type: 'p', text: 'Peter says that Lot was *a righteous man distressed by the depraved conduct of the lawless* (2 Peter 2:7). This scene supports that judgment. Lot does the right thing by the strangers, at risk to himself. But he has chosen to make his home, raise his daughters, and arrange their marriages in a place whose streets he would not let a guest sleep in.' },

    { type: 'sub', text: 'All the Men of the City' },
    { type: 'quote', text: 'Before they had gone to bed, all the men of the city of Sodom, both young and old, surrounded the house.', by: 'Genesis 19:4' },
    { type: 'p', text: 'The narrator is emphatic. *All the men. Both young and old.* Abraham had asked whether there might be ten righteous in the city. This verse is the answer. The investigation God promised is being conducted, and the entire male population has turned out to supply the evidence.' },
    { type: 'p', text: 'They demand that Lot hand over his guests *so we can have relations with them*. What is intended is gang rape. It is sexual violence, directed against strangers who had come under the protection of a household, and it is the settled custom of a whole city. The *outcry* that had reached God was the cry of people this had been done to.' },
    { type: 'p', text: 'Scripture describes the sin of Sodom in more than one way, and the descriptions belong together. Ezekiel speaks of arrogance, excess, and neglect of the poor, and adds that *they were haughty and committed abominations before Me* (Ezekiel 16:49–50). Jude speaks of sexual immorality and the pursuit of *strange flesh* (Jude 7). Genesis shows the scene itself: a prosperous city in which the strong take what they want from the vulnerable, and no one objects. Pride, plenty, cruelty, and lust are not rival explanations. They are one condition.' },

    { type: 'sub', text: 'I Have Two Daughters' },
    { type: 'p', text: 'Lot goes out and shuts the door behind him. That takes courage. He stands alone between the mob and his guests, and he calls the men *my brothers*. Then he says something that should stop every reader.' },
    { type: 'quote', text: 'Look, I have two daughters who have never slept with a man. Let me bring them to you, and you can do to them as you please. But do not do anything to these men, for they have come under the protection of my roof.', by: 'Genesis 19:8' },
    { type: 'p', text: 'Genesis records the offer without comment. It does not need one. The duty of a host to protect his guests was regarded as nearly absolute in the ancient world, and Lot is trying to honor it. But he proposes to honor it by handing his own daughters to a mob. No code of hospitality can make that right, and the narrator does not suggest that it does.' },
    { type: 'p', text: '**Lot was distressed by Sodom. He had also been shaped by it.** A man cannot live for years among people who treat others as things to be used and remain untouched. When the crisis comes, the righteous man of Sodom reaches for a solution that only Sodom could have taught him.' },
    { type: 'p', text: 'The offer accomplishes nothing. The men turn on him: *This one came here as a foreigner, and he is already acting like a judge!* That sentence tells us how much Lot’s seat at the gate was worth. For all his years there, he is still an outsider. The city he chose never accepted him. They press against him and move to break down the door.' },

    { type: 'sub', text: 'The Door' },
    { type: 'quote', text: 'But the men inside reached out, pulled Lot into the house with them, and shut the door. And they struck the men at the entrance, young and old, with blindness, so that they wearied themselves trying to find the door.', by: 'Genesis 19:10–11' },
    { type: 'p', text: 'Lot went out to protect his guests. In the end his guests protect him. The man who thought he was sheltering two travelers is pulled to safety by them.' },
    { type: 'p', text: `A door has shut like this once before. When Noah and his family had entered the ark, *the LORD shut him in* (${g(7, 16)}). In both stories a small household is enclosed while judgment gathers outside, and in both the door is closed by a hand that is not the householder’s.` },
    { type: 'p', text: 'The last detail is the most chilling. The men are struck blind, and they do not go home. *They wearied themselves trying to find the door.* Blindness does not end their desire. They grope for the entrance until they are exhausted. It is a picture of a will so fixed on its object that not even a miracle of judgment can turn it.' },
    { type: 'p', text: 'The investigation is complete. God had said He would see whether the city’s deeds matched the outcry against it. The two witnesses have been in Sodom for a single evening. They have found one household willing to shelter a stranger, and a city, young and old, willing to destroy him.' },
    { type: 'p', text: `Jesus would later use Sodom as a measure, and not in the way we might expect. Of the towns that had seen His miracles and refused Him, He said, *it will be more bearable for Sodom on the day of judgment than for you* (Matthew 11:24). Sodom is not the worst thing a people can be. To see more light and reject it is worse.` },
    { type: 'p', text: '**Abraham had hoped for ten righteous. The angels found one man, and even he had to be pulled inside.**' },
  ],
};

export default chapter;

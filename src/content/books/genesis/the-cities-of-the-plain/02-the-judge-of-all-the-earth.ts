import type { BookChapter } from '../../types';

const g = (c: number, v: number, label = `${c}:${v}`) => `[${label}](https://www.shavat.app/ot/genesis/creation/${c}#v${v})`;

const chapter: BookChapter = {
  slug: 'the-judge-of-all-the-earth',
  title: 'The Judge of All the Earth',
  ref: 'Genesis 18:16–33',
  blocks: [
    { type: 'figure', name: 'plain-judge' },
    { type: 'quote', text: 'Far be it from You to do such a thing—to kill the righteous with the wicked, so that the righteous and the wicked are treated alike. Far be it from You! Will not the Judge of all the earth do what is right?', by: 'Genesis 18:25' },
    { type: 'p', text: 'The meal is finished. The three men rise, and *they looked out over Sodom*. Abraham walks with them to see them on their way, as a good host should. From the heights near Hebron the land falls away eastward toward the plain that Lot chose.' },
    { type: 'p', text: 'What follows is one of the most remarkable conversations in Scripture. A man stands before God and questions His justice, and God lets him. The question of this passage is Abraham’s own: will the Judge of all the earth do what is right?' },

    { type: 'sub', text: 'Shall I Hide from Abraham?' },
    { type: 'p', text: 'It begins with God thinking aloud.' },
    { type: 'quote', text: 'Shall I hide from Abraham what I am about to do? Abraham will surely become a great and powerful nation, and through him all the nations of the earth will be blessed.', by: 'Genesis 18:17–18' },
    { type: 'p', text: 'God gives two reasons for telling Abraham. The first is the promise: the nations of the earth are to be blessed through this man, and the fate of a city of the nations is therefore his concern. The second is his calling: *I have chosen him, so that he will command his children and his household after him to keep the way of the LORD by doing what is right and just* (18:19). Abraham is to teach justice to his descendants. He must first see how God does justice.' },
    { type: 'p', text: 'There is a relationship implied here. One does not disclose one’s plans to a servant. The prophet Isaiah will call Abraham God’s *friend* (Isaiah 41:8), and Jesus will define the word in the same way: *a servant does not understand what his master is doing. But I have called you friends* (John 15:15).' },
    { type: 'p', text: `Then God states the case. *The outcry against Sodom and Gomorrah is great.* The word *outcry* is the word for the cry of the oppressed, the cry of those to whom violence has been done. It is the word used when the blood of Abel cried out from the ground (${g(4, 10)}). Someone in Sodom has been crying out, and the cry has reached God.` },
    { type: 'p', text: `*I will go down to see if their actions fully justify the outcry.* God does not need to travel to learn the facts. He came down to see the tower of Babel in the same way (${g(11, 5)}). The language shows us something about His justice. **He does not judge on a report. He investigates before He acts.**` },

    { type: 'sub', text: 'Abraham Stepped Forward' },
    { type: 'p', text: 'The two men go on toward Sodom. *But Abraham remained standing before the LORD.* Then he steps forward. Nothing has been said about destroying the city. Abraham has understood what the investigation will find, and he knows who lives there.' },
    { type: 'p', text: 'He does not mention Lot. He might have asked for his nephew’s family to be brought out. Instead he argues on a principle. *Will You really sweep away the righteous with the wicked?* If there are fifty righteous people in the city, will God destroy the place and not spare it for their sake?' },
    { type: 'p', text: 'Notice what he is asking. He is not asking that the fifty be evacuated and the rest destroyed. He is asking that the whole city, wicked as it is, be spared because of the righteous within it. He wants the presence of a few to count for the many.' },
    { type: 'p', text: 'And notice the ground of his appeal. He does not appeal to his own standing or to the merits of Sodom. He appeals to God’s character. *Far be it from You!* A judge who treated the righteous and the wicked alike would not be just, and the Judge of all the earth must be just. Abraham holds God to what God is.' },
    { type: 'p', text: 'This is the man who said nothing when Sarai proposed Hagar and nothing when Pharaoh rebuked him. Here, on behalf of a city that is not his own, he finds his voice.' },

    { type: 'sub', text: 'From Fifty to Ten' },
    { type: 'p', text: 'God agrees. *If I find fifty righteous ones within the city of Sodom, on their account I will spare the whole place.* Abraham presses further, and the exchange proceeds by steps.' },
    {
      type: 'table',
      head: ['Abraham asks', 'The LORD answers'],
      rows: [
        ['Fifty?', '*“On their account I will spare the whole place”* (18:26)'],
        ['Forty-five?', '*“I will not destroy it”* (18:28)'],
        ['Forty?', '*“I will not do it”* (18:29)'],
        ['Thirty?', '*“I will not do it”* (18:30)'],
        ['Twenty?', '*“I will not destroy it”* (18:31)'],
        ['Ten?', '*“On account of the ten, I will not destroy it”* (18:32)'],
      ],
    },
    { type: 'p', text: 'Six times Abraham asks. Six times God says yes. At no point does God grow impatient, and at no point does He refuse. Each concession is granted as soon as it is requested.' },
    { type: 'p', text: 'Abraham’s manner changes as he goes. He begins boldly. Then he remembers who he is speaking to: *I have ventured to speak to the Lord—though I am but dust and ashes.* Twice he says, *May the Lord not be angry*. His boldness and his humility grow together. He knows he is dust. He goes on asking.' },
    { type: 'p', text: 'It would be a mistake to read this as Abraham bargaining God down, as though Abraham were the merciful party and God the reluctant one. God began the conversation. He told Abraham His intention precisely so that Abraham would respond. **Abraham did not talk God into mercy. He discovered how far God’s mercy already reached.** Scripture says elsewhere that God takes no pleasure in the death of the wicked (Ezekiel 18:23).' },

    { type: 'sub', text: 'Why He Stopped at Ten' },
    { type: 'p', text: 'Abraham stops at ten. Genesis does not say why. Perhaps he counted Lot’s household, with its daughters and sons-in-law, and thought that ten was safe. Perhaps he felt he had gone as far as he dared. *When the LORD had finished speaking with Abraham, He departed, and Abraham returned home.*' },
    { type: 'p', text: 'The next chapter will show that there were not ten. And yet God does more than Abraham asked. He had asked that the city be spared for the sake of the righteous. There were too few. So God brings the righteous out before judgment falls, and Genesis says explicitly that He did it because *He remembered Abraham* (19:29).' },
    { type: 'p', text: 'The principle Abraham established is taken up by the prophets and pressed to its limit. Through Jeremiah, God says of Jerusalem: *If you can find a single person, anyone who acts justly, anyone who seeks the truth, then I will forgive the city* (Jeremiah 5:1). From fifty to ten to one. Through Ezekiel He says, *I searched for a man among them to … stand in the gap before Me on behalf of the land, so that I should not destroy it. But I found no one* (Ezekiel 22:30).' },
    { type: 'p', text: 'The New Testament says that the search ended. Paul writes that *there is one mediator between God and men, the man Christ Jesus* (1 Timothy 2:5), and Hebrews says of Him that *He always lives to intercede* (Hebrews 7:25). Abraham asked whether the many could be spared for the sake of a righteous few. The gospel answers that the many are spared for the sake of One. That is a Christian reading of where this conversation leads, and Genesis does not state it. But the question was first raised on a hillside above Sodom, by a man who called himself dust and ashes.' },
    { type: 'p', text: 'Abraham has been told that the nations will be blessed through him. Here, for the first time, he acts like it. He stands between God and a wicked city and asks for its life.' },
    { type: 'p', text: '**Abraham asked whether the Judge of all the earth would do right. He found that the Judge was more willing to spare than he was to ask.**' },
  ],
};

export default chapter;

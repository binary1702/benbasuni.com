import type { BookChapter } from '../../types';

const g = (c: number, v: number, label = `${c}:${v}`) => `[${label}](https://www.shavat.app/ot/genesis/creation/${c}#v${v})`;

const chapter: BookChapter = {
  slug: 'on-the-third-day',
  title: 'On the Third Day',
  ref: 'Genesis 22:3–8',
  blocks: [
    { type: 'figure', name: 'mount-journey' },
    { type: 'quote', text: 'Abraham answered, “God Himself will provide the lamb for the burnt offering, my son.” And the two walked on together.', by: 'Genesis 22:8' },
    { type: 'p', text: 'The command was given at night, or so the next verse suggests. *So Abraham got up early the next morning.* Genesis does not tell us how he spent the hours in between.' },
    { type: 'p', text: 'It does not tell us much of anything about what Abraham felt. This is one of the most restrained narratives in all literature. The text gives actions, a few lines of speech, and long silences. The question of this passage is what was in the mind of the man who made that journey, and Genesis lets us find it only in what he does and in two things that he says.' },

    { type: 'sub', text: 'He Got Up Early' },
    { type: 'quote', text: 'So Abraham got up early the next morning, saddled his donkey, and took along two of his servants and his son Isaac. He split the wood for a burnt offering and set out for the place God had designated.', by: 'Genesis 22:3' },
    { type: 'p', text: `He rises early, as he did on the morning he sent Ishmael away (${g(21, 14)}). There is no delay and no recorded protest. Look at the verbs: he *got up*, *saddled*, *took*, *split*, *set out*. He is a wealthy man with many servants, and he saddles the donkey himself. He splits the wood himself. Each task is one more thing done by his own hands toward an end he cannot bear to think about.` },
    { type: 'p', text: 'Genesis does not say whether he told Sarah. It does not say what he told Isaac or the servants. The silence has invited a great deal of speculation, and none of it has any basis in the text. All we are given is a man carrying out a command in the order of its practical steps.' },

    { type: 'sub', text: 'Three Days' },
    { type: 'p', text: '*On the third day Abraham looked up and saw the place in the distance.* From Beersheba to the region of Moriah is some fifty miles, a journey of about three days on foot.' },
    { type: 'p', text: 'Consider what three days means. A man might do a terrible thing in a moment of religious frenzy. Abraham is not given a moment. He is given three days of walking beside his son, three nights of making camp, three mornings of rising and going on. At any point he could have turned back. **This was not obedience in a rush of feeling. It was obedience at walking pace, with time to think.**' },
    { type: 'p', text: 'The journey ends when he *looked up and saw*. It is the phrase Genesis uses at the turning points of his life. He was told to lift up his eyes and see the land. He looked up and saw three men at his tent. Now he looks up and sees a mountain.' },

    { type: 'sub', text: 'We Will Return' },
    { type: 'quote', text: '“Stay here with the donkey,” Abraham told his servants. “The boy and I will go over there to worship, and then we will return to you.”', by: 'Genesis 22:5' },
    { type: 'p', text: 'This is the first thing Abraham says on the journey, and every word of it matters. He calls what he is about to do *worship*. And he says *we will return*. In Hebrew the verbs are plural: *we will go, we will worship, we will return*.' },
    { type: 'p', text: 'Was he deceiving the servants? Was he speaking in hope, without knowing what he meant? Genesis does not explain. The letter to the Hebrews does.' },
    { type: 'quote', text: 'Abraham reasoned that God could raise the dead, and in a sense, he did receive Isaac back from death.', by: 'Hebrews 11:19' },
    { type: 'p', text: 'According to Hebrews, Abraham thought it through. God had said that the promise would be fulfilled through Isaac. God had now commanded that Isaac be offered. Both words came from God, and God does not lie. Therefore both must be true. And the only way both could be true was if God gave Isaac back from the dead.' },
    { type: 'p', text: 'No one in Scripture had ever been raised from the dead. Abraham had no precedent. What he had was experience of a particular kind. He had seen life come from his own body when it was *as good as dead*, and from *the lifelessness of Sarah’s womb* (Romans 4:19). Isaac’s birth had already been a kind of resurrection. Paul says that Abraham believed in *the God who gives life to the dead* (Romans 4:17). On the road to Moriah that belief was asked to bear its full weight.' },
    { type: 'p', text: 'So he did not resolve the contradiction by choosing between the command and the promise. He held both, and trusted God to reconcile them on the far side of the altar. He did not know how. He said, *we will return*.' },

    { type: 'sub', text: 'The Two of Them Walked On Together' },
    { type: 'quote', text: 'Abraham took the wood for the burnt offering and placed it on his son Isaac. He himself carried the fire and the sacrificial knife, and the two of them walked on together.', by: 'Genesis 22:6' },
    { type: 'p', text: 'The servants are left behind. From here there are only two. The son carries the wood on which he is to be laid. The father carries the two things that could hurt the boy, the fire and the knife. *And the two of them walked on together.*' },
    { type: 'p', text: 'We are not told how old Isaac is. The word translated *boy* is used in Hebrew for anyone from an infant to a young man. He is old enough and strong enough to carry a load of wood sufficient for a burnt offering up a mountain. He is not a small child.' },
    { type: 'p', text: 'Then Isaac speaks. It is the only conversation between father and son that Genesis records.' },
    { type: 'quote', text: 'Then Isaac said to his father Abraham, “My father!” “Here I am, my son,” he replied. “The fire and the wood are here,” said Isaac, “but where is the lamb for the burnt offering?”', by: 'Genesis 22:7' },
    { type: 'p', text: '*My father. My son.* The narrator has been repeating these words through the whole passage: *his son Isaac*, *his father Abraham*. He will not let us forget what these two are to each other. And Abraham answers his son with the word he gave to God: *Here I am*. He is as present to the boy as he was to the command.' },
    { type: 'p', text: 'Isaac has noticed what is missing. He has seen sacrifices before. There is fire, there is wood, there is a knife. There is no animal. It is a reasonable question, and there is no easy way to answer it.' },
    { type: 'p', text: 'Abraham’s reply is the center of the chapter. *God Himself will provide the lamb.* Literally, *God will see to it*. The verb is the ordinary Hebrew word for *seeing*, and it will return at the end of the story as the name of the place.' },
    { type: 'p', text: 'What did he mean? It can be read as an evasion, a way of not telling the boy. It can be read as a terrible irony: the lamb God has provided is Isaac himself. It can be read as faith: somehow, God will supply what is needed. Perhaps Abraham himself could not have said which. What is certain is that the sentence was truer than he knew. He spoke of a lamb that God would provide, and before the day ended, God had provided.' },
    { type: 'p', text: 'The narrator then repeats himself. *And the two walked on together.* The same words stood before the question. They stand again after the answer. Whatever Isaac understood from his father’s reply, he kept walking beside him.' },
    {
      type: 'table',
      head: ['What Abraham knew', 'What Abraham said'],
      rows: [
        ['God had promised: *through Isaac*', '*“We will return to you”*'],
        ['God had commanded: *offer him*', '*“The boy and I will go over there to worship”*'],
        ['There was no lamb', '*“God Himself will provide the lamb”*'],
      ],
    },
    { type: 'p', text: 'Christian readers have always found it difficult to hear of a beloved son carrying the wood of his own sacrifice up a hill without thinking of another. John writes of Jesus that, *carrying His own cross, He went out to The Place of the Skull* (John 19:17). Genesis does not point forward in so many words. The correspondence is one the reader discovers, and we will return to it. For now it is enough to see the two figures on the slope, the old man with the fire and the young man with the wood, and no lamb.' },
    { type: 'p', text: '**Abraham did not know how God would keep His word. He told his servants that both of them would come back, and he told his son that God would provide.**' },
  ],
};

export default chapter;

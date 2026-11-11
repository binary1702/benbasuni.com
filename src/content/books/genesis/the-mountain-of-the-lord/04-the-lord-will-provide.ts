import type { BookChapter } from '../../types';

const g = (c: number, v: number, label = `${c}:${v}`) => `[${label}](https://www.shavat.app/ot/genesis/creation/${c}#v${v})`;

const chapter: BookChapter = {
  slug: 'the-lord-will-provide',
  title: 'The LORD Will Provide',
  ref: 'Genesis 22:13–14',
  blocks: [
    { type: 'figure', name: 'mount-ram' },
    { type: 'quote', text: 'Then Abraham looked up and saw behind him a ram in a thicket, caught by its horns. So he went and took the ram and offered it as a burnt offering in place of his son.', by: 'Genesis 22:13' },
    { type: 'p', text: 'The voice from heaven has stopped the knife. Isaac is alive. But the story is not finished, because the sacrifice has not been made. Abraham came to the mountain to worship, and the altar is still standing with the wood arranged on it.' },
    { type: 'p', text: 'On the way up, Isaac had asked a question: *Where is the lamb for the burnt offering?* His father had answered, *God Himself will provide*. The question of this passage is how that answer was kept, and how far it reaches.' },

    { type: 'sub', text: 'He Looked Up and Saw' },
    { type: 'p', text: '*Abraham looked up and saw.* It is the phrase that has marked every turn of this journey. On the third day he looked up and saw the place. Now he looks up and sees a ram.' },
    { type: 'p', text: `The ram was *behind him*, *caught by its horns* in a thicket. It did not wander into view at that moment. It was already there, held fast, while Abraham built the altar and bound his son. He did not see it until he was told to stop. We have met this pattern before. When Hagar sat weeping in the wilderness, *God opened her eyes, and she saw a well of water* (${g(21, 19)}). The well was already there. In both stories the provision is in place before the person in need can see it.` },
    { type: 'p', text: '**The ram was on the mountain before Abraham was. God had provided before Abraham arrived.**' },
    { type: 'p', text: 'Abraham does not need to be told what to do. He takes the ram and offers it as a burnt offering. The worship he had spoken of to his servants takes place after all.' },

    { type: 'sub', text: 'In Place of His Son' },
    { type: 'p', text: 'Four words in the English carry the weight of the verse. The ram is offered *in place of his son*.' },
    { type: 'p', text: 'This is the first explicit statement of substitution in Scripture. Animals have been sacrificed before. Abel brought the firstborn of his flock. Noah offered burnt offerings after the flood. But here, for the first time, the text says that one life is given *instead of* another. Isaac was on the altar. Isaac comes down, and the ram goes up. The son lives because something else dies in his place.' },
    { type: 'p', text: 'Every later sacrifice in Israel will be understood in this light. When an Israelite laid his hand on the head of an animal and it was offered for him, the logic was the logic of Moriah. The principle that would govern the worship of the tabernacle and the temple was first acted out on this mountain, with the father of the nation and his only son.' },
    { type: 'p', text: 'Notice also who supplied the offering. Abraham did not bring the ram. He had no animal with him; that was the point of Isaac’s question. God required a sacrifice, and God provided the sacrifice He required.' },

    { type: 'sub', text: 'On the Mountain of the LORD' },
    { type: 'quote', text: 'And Abraham called that place The LORD Will Provide. So to this day it is said, “On the mountain of the LORD it will be provided.”', by: 'Genesis 22:14' },
    { type: 'p', text: 'In Hebrew the name is *YHWH Yireh*. The verb is *to see*. It is the word Abraham used on the way up: *God will see to the lamb*. The name can be translated *The LORD will see* or *The LORD will see to it*, and so *The LORD will provide*. Abraham names the mountain with his own answer to Isaac.' },
    { type: 'p', text: 'Notice the tense. He does not call the place *The LORD has provided*. He calls it *The LORD will provide*. And the narrator adds a saying that was current in his own day, long after Abraham: *On the mountain of the LORD it will be provided*. The name looks forward. It treats what happened to Abraham as a pledge of something still to come on that mountain.' },
    { type: 'p', text: 'Where was the mountain? Genesis says it was in *the land of Moriah*. The name appears in only one other place in the Bible.' },
    { type: 'quote', text: 'Then Solomon began to build the house of the LORD in Jerusalem on Mount Moriah, where the LORD had appeared to his father David.', by: '2 Chronicles 3:1' },
    { type: 'p', text: 'According to the Chronicler, the temple was built on Moriah. If the two names refer to the same place, as Jewish and Christian tradition have held, then the hill where Abraham offered the ram became the hill where Israel offered its sacrifices for a thousand years. Day after day, animals died there in the place of worshipers. *On the mountain of the LORD it will be provided.*' },

    { type: 'sub', text: 'Where Is the Lamb?' },
    { type: 'p', text: 'There is a small detail that is easy to miss. Isaac asked about a *lamb*. Abraham said that God would provide a *lamb*. What God provided that day was a *ram*.' },
    { type: 'p', text: 'It would be unwise to build too much on a single word. But the New Testament writers read this chapter as a promise that was only partly fulfilled on the day it was made. Many centuries later, by the Jordan, John the Baptist saw Jesus coming toward him and said:' },
    { type: 'quote', text: 'Look, the Lamb of God, who takes away the sin of the world!', by: 'John 1:29' },
    { type: 'p', text: 'Isaac’s question, *Where is the lamb?*, hangs over the whole Old Testament. On the Christian reading, it is answered there.' },
    { type: 'p', text: 'What follows is that reading. Genesis does not state these things, and they should not be presented as if it did. But the correspondences between Moriah and the cross are too many, and too exact, for the church ever to have ignored them.' },
    {
      type: 'table',
      head: ['Isaac', 'Jesus'],
      rows: [
        [`*“Your son, your only son, whom you love”* (${g(22, 2)})`, '*“This is My beloved Son”* (Matthew 3:17)'],
        [`The wood is laid on the son (${g(22, 6)})`, 'He goes out carrying His own cross (John 19:17)'],
        ['He is offered in the land of Moriah', 'He is crucified at Jerusalem'],
        [`The father does not withhold his son (${g(22, 12)})`, 'God *did not spare His own Son* (Romans 8:32)'],
        [`On the third day, the son is received back (${g(22, 4)}; Hebrews 11:19)`, 'On the third day, the Son is raised'],
        [`A substitute dies *in place of* the son (${g(22, 13)})`, 'The Son dies in place of others'],
      ],
    },
    { type: 'p', text: 'The last line is where the two stories part, and the difference is the heart of the matter. On Moriah a voice from heaven stopped the father’s hand, and a ram was found. At the cross there was no voice and no ram. **Abraham’s son was spared because a substitute was provided. God’s Son was not spared, because He was the substitute.**' },
    { type: 'p', text: 'Paul draws the conclusion: *He who did not spare His own Son but gave Him up for us all, how will He not also, along with Him, freely give us all things?* (Romans 8:32). And John, in the best-known sentence of the New Testament, uses the language of an only son given: *For God so loved the world that He gave His one and only Son* (John 3:16).' },
    { type: 'p', text: 'Jesus Himself once said, *Your father Abraham rejoiced that he would see My day. He saw it and was glad* (John 8:56). He does not say when Abraham saw it. Many have thought of this mountain, where Abraham named the place *The LORD will see*, and where he received his son back alive.' },
    { type: 'p', text: 'Whatever Abraham understood, he had learned something on Moriah that he could not have learned anywhere else. He had always known God as the One who gives: a land, a name, a son. Here he learned that God gives what He Himself demands. The sacrifice that God required, God supplied.' },
    { type: 'p', text: '**Isaac asked where the lamb was. Abraham said that God would provide. He named the mountain for an answer that was larger than the ram.**' },
  ],
};

export default chapter;

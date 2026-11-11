import type { BookChapter } from '../../types';

const g = (c: number, v: number, label = `${c}:${v}`) => `[${label}](https://www.shavat.app/ot/genesis/creation/${c}#v${v})`;

const chapter: BookChapter = {
  slug: 'by-myself-i-have-sworn',
  title: 'By Myself I Have Sworn',
  ref: 'Genesis 22:15–24',
  blocks: [
    { type: 'figure', name: 'mount-oath' },
    { type: 'quote', text: 'By Myself I have sworn, declares the LORD, that because you have done this and have not withheld your only son, I will surely bless you, and I will multiply your descendants like the stars in the sky and the sand on the seashore.', by: 'Genesis 22:16–17' },
    { type: 'p', text: 'The ram has been offered. The mountain has been named. Then *the angel of the LORD called to Abraham from heaven a second time*. The first call stopped the knife. The second gives the promise back.' },
    { type: 'p', text: 'These are the last words God speaks to Abraham in Genesis. Abraham will live many more years. He will bury his wife, find a bride for his son, and die in a good old age. But after this mountain, the text records no further word from heaven to him. The question of this passage is what God says to a man when the testing is over.' },

    { type: 'sub', text: 'By Myself' },
    { type: 'p', text: 'God has made promises to Abraham many times. He has made a covenant and walked between the pieces. He has never before used these words: *By Myself I have sworn*.' },
    { type: 'p', text: 'An oath is sworn by something greater than oneself. A man swears by God, and so places himself under a higher authority that will hold him to his word. The letter to the Hebrews reflects on what it means for God to take an oath.' },
    { type: 'quote', text: 'When God made His promise to Abraham, since He had no one greater to swear by, He swore by Himself.', by: 'Hebrews 6:13' },
    { type: 'p', text: 'There is nothing above God by which He could swear. So He stakes His own being. Hebrews explains why He did it: He *wanted to make the unchanging nature of His purpose very clear to the heirs of the promise*, so that *by two unchangeable things in which it is impossible for God to lie*, His word and His oath, those who trust Him *may be strongly encouraged* (Hebrews 6:17–18).' },
    { type: 'p', text: 'The oath adds nothing to the reliability of God. His bare word was already certain. The oath is given for Abraham’s sake, and for the sake of everyone who would later rest on the same promise. **God did not need to swear. He swore so that those who heard Him could be sure.**' },

    { type: 'sub', text: 'Because You Have Done This' },
    { type: 'p', text: '*Because you have done this and have not withheld your only son.* This is new, and it needs to be read with care. Until now the promises have been given freely. In Genesis 12 Abraham had done nothing. In Genesis 15 he was asleep while God bound Himself. Now God says *because*.' },
    { type: 'p', text: 'It would be a misreading to conclude that Abraham has at last earned the promise. Every item in this oath has already been promised, some of them decades earlier, without condition. Nothing is being granted here that had not been granted before.' },
    {
      type: 'table',
      head: ['Promised before', 'Sworn on Moriah'],
      rows: [
        [`*“I will bless you”* (${g(12, 2)})`, `*“I will surely bless you”* (${g(22, 17)})`],
        [`Offspring like the dust and the stars (${g(13, 16)}; ${g(15, 5)})`, `*“Like the stars in the sky and the sand on the seashore”* (${g(22, 17)})`],
        [`The land of ten peoples (${g(15, 18, '15:18–21')})`, `*“Your descendants will possess the gates of their enemies”* (${g(22, 17)})`],
        [`*“All the families of the earth will be blessed through you”* (${g(12, 3)})`, `*“Through your offspring all nations of the earth will be blessed”* (${g(22, 18)})`],
      ],
    },
    { type: 'p', text: 'What has changed is not the promise but Abraham’s relation to it. The grace that chose him in Haran has done its work in him. He has become, through long years and many failures, a man who obeys God at the greatest possible cost. And God honors that obedience by tying the promise to it. *Because you have obeyed My voice.* God will later say the same to Isaac: the blessing will come *because Abraham listened to My voice* (26:5).' },
    { type: 'p', text: 'Faith came first, and was counted as righteousness. Obedience followed, and was the form that faith took when it was tested. The promise was a gift from the beginning. On Moriah it becomes also an answer.' },

    { type: 'sub', text: 'Through Your Offspring' },
    { type: 'p', text: 'The oath ends where the first promise ended, with the nations.' },
    { type: 'quote', text: 'And through your offspring all nations of the earth will be blessed, because you have obeyed My voice.', by: 'Genesis 22:18' },
    { type: 'p', text: `In Haran God had said that all the families of the earth would be blessed *through you* (${g(12, 3)}). Here it is *through your offspring*. The blessing of the world is now attached to Abraham’s seed, and it is said immediately after that seed has been laid on an altar and given back.` },
    { type: 'p', text: 'Peter quotes this verse in Jerusalem and applies it to Jesus (Acts 3:25–26). Paul observes that the word *offspring* is singular and sees in it a reference to Christ (Galatians 3:16). These are apostolic readings of the text. In Genesis the plain sense is that Abraham’s descendants will be the channel of blessing to every nation. The New Testament claims that this happened through one descendant in particular.' },
    { type: 'p', text: 'So the first word of God to Abraham and the last word of God to Abraham say the same thing. Between them lie several decades and everything this collection has described. He was called so that the nations might be blessed. He is dismissed from the mountain with the same purpose, now sworn.' },

    { type: 'sub', text: 'Milcah Has Also Borne Sons' },
    { type: 'p', text: '*Abraham went back to his servants, and they got up and set out together for Beersheba.* He had told them, *we will return to you*. Genesis mentions only Abraham in this verse, and readers have wondered about it. The text does not explain, and there is no reason to doubt that Isaac came down with him. He appears alive and well in the chapters that follow.' },
    { type: 'p', text: 'Then the chapter ends in a way that seems, at first, to have nothing to do with what came before. News arrives from the family Abraham left behind decades ago. His brother Nahor has had children: eight sons by his wife Milcah, and four by a concubine. A list of names follows.' },
    { type: 'p', text: 'It reads like an anticlimax. It is nothing of the kind. In the middle of the list is one sentence that is not about a son.' },
    { type: 'quote', text: 'And Bethuel became the father of Rebekah.', by: 'Genesis 22:23' },
    { type: 'p', text: 'Isaac has just been spared. But a promise of descendants like the stars requires more than a living son. It requires that the son have a wife, and children of his own. Abraham has refused from the start to mingle his household with the people of Canaan. Where is a wife for Isaac to come from?' },
    { type: 'p', text: 'The narrator answers before the question is asked. Far away in the north, in the family that stayed behind in Mesopotamia, a girl has been born. Abraham has only just come down from the mountain, and already the next step is in place. It is the same lesson as the ram in the thicket. **The provision was there before the need was felt.**' },
    { type: 'p', text: 'This book has covered a single chapter of Genesis, and it has been the summit of Abraham’s life in more than one sense. Consider where he stood before it and where he stands after.' },
    {
      type: 'table',
      head: ['Before Moriah', 'After Moriah'],
      rows: [
        ['The promise had been spoken', 'The promise has been sworn by God’s own life'],
        ['Abraham had received Isaac as a gift', 'He has given Isaac up and received him back'],
        ['He knew God as the One who gives', 'He knows God as the One who provides what He requires'],
        ['The line of promise rested on one unmarried son', 'Rebekah has been born'],
      ],
    },
    { type: 'p', text: 'Abraham goes home to Beersheba, to the well and the tamarisk tree. He has nothing more than he had when he left. He has the same son. And yet everything is different, because he now holds that son as one who has already let him go.' },
    { type: 'p', text: '**The first thing God ever said to Abraham was a promise to bless the nations. The last thing He said was an oath to do it.**' },
  ],
};

export default chapter;

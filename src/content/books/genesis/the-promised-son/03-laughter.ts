import type { BookChapter } from '../../types';

const g = (c: number, v: number, label = `${c}:${v}`) => `[${label}](https://www.shavat.app/ot/genesis/creation/${c}#v${v})`;

const chapter: BookChapter = {
  slug: 'laughter',
  title: 'Laughter',
  ref: 'Genesis 21:1–7',
  blocks: [
    { type: 'figure', name: 'son-laughter' },
    { type: 'quote', text: 'Now the LORD attended to Sarah as He had said, and the LORD did for Sarah what He had promised. So Sarah conceived and bore a son to Abraham in his old age, at the very time God had promised.', by: 'Genesis 21:1–2' },
    { type: 'p', text: `This is the moment the whole story has been moving toward. Genesis first told us that Sarai was barren in ${g(11, 30)}. The promise of a great nation was given in ${g(12, 2)}. Since then there have been ten chapters and twenty-five years. There has been a famine, a war, a covenant, a slave girl, thirteen years of silence, two new names, three visitors, a burning plain, and two lies about a sister.` },
    { type: 'p', text: 'And when the child finally comes, Genesis tells it in two verses. There is no description of the pregnancy, no account of the birth. The narrator is not interested in how it felt. He is interested in one thing, and he says it three times.' },

    { type: 'sub', text: 'As He Had Said' },
    {
      type: 'list',
      items: [
        'The LORD attended to Sarah *as He had said*.',
        'The LORD did for Sarah *what He had promised*.',
        'She bore a son *at the very time God had promised*.',
      ],
    },
    { type: 'p', text: 'Three times in two verses. The event is described entirely in terms of the word that preceded it. The birth of Isaac is not presented as a happy surprise. It is presented as a promise kept. **What God said, He did, and He did it when He said He would.**' },
    { type: 'p', text: `Notice also the subject of the sentences. *The LORD attended. The LORD did.* Sarah conceived, but only after the LORD acted. The name of God is repeated in a way that leaves no room for another explanation. It is the same emphasis we heard over Sodom, where the LORD rained fire *from the LORD* (${g(19, 24)}). The God who judged the plain is the God who opened the womb.` },
    { type: 'p', text: 'The word translated *attended* is often rendered *visited*. It is the word that will be used when God comes to the aid of Israel in Egypt. It describes God turning His attention to someone in order to act for them. He had said He would return, and He did.' },

    { type: 'sub', text: 'Abraham Was a Hundred Years Old' },
    { type: 'p', text: 'Abraham does three things, and each is an act of obedience to something specific that God had said.' },
    {
      type: 'table',
      head: ['What God had said', 'What Abraham did'],
      rows: [
        [`*“You are to name him Isaac”* (${g(17, 19)})`, `He gave the name Isaac to the son Sarah bore him (${g(21, 3)})`],
        [`Every male must be circumcised at eight days old (${g(17, 12)})`, `He circumcised Isaac when he was eight days old (${g(21, 4)})`],
        [`*“At this time next year”* (${g(17, 21)})`, `He was a hundred years old when Isaac was born (${g(21, 5)})`],
      ],
    },
    { type: 'p', text: 'Isaac is the first person in Scripture to be circumcised on the eighth day, as the covenant required. Abraham received the sign at ninety-nine and Ishmael at thirteen. Isaac receives it before he can know anything about it. He is born into a covenant that was established before he existed.' },
    { type: 'p', text: 'Then the narrator gives the number. *Abraham was a hundred years old.* He was seventy-five when he left Haran. He has waited a quarter of a century. Sarah is ninety. Paul says that Abraham’s body was *as good as dead* and speaks of *the lifelessness of Sarah’s womb* (Romans 4:19). Hebrews says that *from one man, and he as good as dead, came descendants as numerous as the stars* (Hebrews 11:12). The New Testament does not treat the birth of Isaac as merely unlikely. It treats it as life out of death.' },

    { type: 'sub', text: 'God Has Made Me Laugh' },
    { type: 'quote', text: 'Then Sarah said, “God has made me laugh, and everyone who hears of this will laugh with me.”', by: 'Genesis 21:6' },
    { type: 'p', text: 'The child’s name means *he laughs*, and the story of his coming has been full of laughter of a certain kind.' },
    {
      type: 'list',
      items: [
        `Abraham fell on his face and laughed: *Can a child be born to a man who is a hundred years old?* (${g(17, 17)})`,
        `Sarah laughed to herself behind the tent door: *After I am worn out … will I now have this pleasure?* (${g(18, 12)})`,
        `She denied it. *“I did not laugh.” “No, but you did laugh”* (${g(18, 15)}).`,
      ],
    },
    { type: 'p', text: 'That was the laughter of people who knew what was possible and what was not. Now Sarah laughs again, and it is a different sound. *God has made me laugh.* The laughter of disbelief has been turned into the laughter of joy, and she is not ashamed of it. A year ago she denied that she had laughed. Now she expects everyone who hears the story to laugh with her.' },
    { type: 'p', text: '**God took the laugh of doubt and gave it back as the laugh of a mother.** Every time she called her son, she would say the word.' },
    { type: 'p', text: 'Her second sentence has the rhythm of a song.' },
    { type: 'quote', text: 'Who would have told Abraham that Sarah would nurse children? Yet I have borne him a son in his old age.', by: 'Genesis 21:7' },
    { type: 'p', text: '*Who would have told Abraham?* No one would have. No sensible person would have predicted it. That is her point. This did not come from the realm of things that can be foreseen. The psalmist would later describe the return of exiles in the same way: *Then our mouths were filled with laughter, our tongues with shouts of joy* (Psalm 126:2). It is the laughter of people to whom something has happened that they had stopped expecting.' },

    { type: 'sub', text: 'Children of Promise' },
    { type: 'p', text: 'It is worth pausing over what kind of event this is. For twenty-five years the promise and the circumstances have stood against each other. Every chapter has widened the distance. Now, for the first time, they meet.' },
    {
      type: 'table',
      head: ['The circumstance', 'What God did'],
      rows: [
        [`*“Sarai was barren; she had no children”* (${g(11, 30)})`, `*“Sarah conceived and bore a son”* (${g(21, 2)})`],
        [`*“Sarah had passed the age of childbearing”* (${g(18, 11)})`, `*“The LORD did for Sarah what He had promised”* (${g(21, 1)})`],
        [`*“Is anything too difficult for the LORD?”* (${g(18, 14)})`, `*“At the very time God had promised”* (${g(21, 2)})`],
      ],
    },
    { type: 'p', text: 'Nothing about the circumstances improved before the promise was kept. Sarah did not become younger. The promise was fulfilled when the circumstances were at their worst. And nothing Abraham and Sarah did brought it about. The attempt with Hagar produced a son, but not this one. The last thing Abraham did before Isaac was conceived was lie about his wife in Gerar. Isaac is not a reward for faithfulness. He is a gift.' },
    { type: 'p', text: 'Paul sees in Isaac the pattern of everyone who belongs to God. *Now you, brothers, like Isaac, are children of promise* (Galatians 4:28). A child of promise is one who exists because God said so and did what He said, and for no other reason. Hebrews adds that Sarah herself shared in it by faith: she *considered Him faithful who had promised* (Hebrews 11:11).' },
    { type: 'p', text: 'So the tent at last holds what it was promised. An old man has named his son. An old woman is nursing a child and laughing. The first line of the great promise has been kept: there is an heir. One son is a long way from the stars of heaven. But he is there.' },
    { type: 'p', text: '**For twenty-five years the promise had only been a word. Now it had a name, and the name was Laughter.**' },
  ],
};

export default chapter;

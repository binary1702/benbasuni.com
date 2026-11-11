import type { BookChapter } from '../../types';

const g = (c: number, v: number, label = `${c}:${v}`) => `[${label}](https://www.shavat.app/ot/genesis/creation/${c}#v${v})`;

const chapter: BookChapter = {
  slug: 'famine-in-the-land',
  title: 'Famine in the Land',
  ref: 'Genesis 12:10–20',
  draft: true,
  blocks: [
    { type: 'figure', name: 'abram-famine' },
    { type: 'quote', text: 'Now there was a famine in the land. So Abram went down to Egypt to live there for a while because the famine was severe.', by: 'Genesis 12:10' },
    { type: 'p', text: 'The sentence arrives without warning. Abram has obeyed. He has left Haran, entered Canaan, heard the promise, and built two altars. And the land he has been promised cannot feed him. This is the first famine recorded in Scripture, and it falls on the promised land immediately after the man of promise arrives in it.' },
    { type: 'p', text: 'Genesis does not explain the famine. It is not called a judgment, and it is not called a test. The text says only that it was severe. The question it raises is one every reader eventually faces. What does a man do when obedience leads him into hunger?' },

    { type: 'sub', text: 'Down to Egypt' },
    { type: 'p', text: 'Egypt was the sensible answer. Canaan depends on rain, and when the rain fails, the land fails. Egypt depends on the Nile. Egyptian records and paintings show that herdsmen from the lands to the east came into the Nile delta in search of pasture. A tomb painting at Beni Hasan, from about the nineteenth century before Christ, depicts a party of Semitic travelers arriving in Egypt with their families and animals. Abram did what many in his position did.' },
    { type: 'p', text: 'The wording is modest. He went *to live there for a while*. The Hebrew verb describes the stay of a foreigner, not a change of home. Abram has not abandoned the land. He intends to return.' },
    { type: 'p', text: `Was it wrong to go? Genesis does not say so, and no rebuke is recorded. Egypt itself is neither forbidden nor approved in Scripture as a general matter. When a later famine comes, the LORD tells Isaac, *Do not go down to Egypt* (${g(26, 2)}). A generation after that, He tells Jacob, *Do not be afraid to go down to Egypt* (${g(46, 3)}). In Abram’s case there is neither word. What we can observe is the silence. At Shechem the LORD appeared. At Bethel Abram called on His name. In this passage Abram builds no altar, and God gives no instruction. We should leave the matter where Genesis leaves it.` },

    { type: 'sub', text: 'Say You Are My Sister' },
    { type: 'p', text: 'At the border of Egypt, Abram speaks. These are his first recorded words in Scripture.' },
    { type: 'quote', text: 'Look, I know that you are a beautiful woman, and when the Egyptians see you, they will say, ‘This is his wife.’ Then they will kill me but will let you live. Please say you are my sister, so that I will be treated well for your sake, and on account of you my life will be spared.', by: 'Genesis 12:11–13' },
    { type: 'p', text: 'The man who left Haran without a recorded word now speaks at length, and what he says is a plan built on fear.' },
    { type: 'p', text: `The statement was not entirely false. Abraham will later explain that Sarah was his half-sister, *the daughter of my father—though not the daughter of my mother* (${g(20, 12)}). But a half-truth told in order to deceive is still a deception, and the purpose here is plain. A husband stands in the way of another man. A brother does not. Sarai, by the arithmetic of ${g(17, 17)}, is about sixty-five. Genesis does not explain her beauty at that age. It simply reports it, and the Egyptians confirm it.` },
    { type: 'p', text: 'Consider what Abram’s reasoning leaves out. God had said, *I will make you into a great nation*. A dead man fathers no nation. If the promise was true, Abram would not die in Egypt. Yet he calculates as though his survival depended entirely on his own cleverness, and he secures it at his wife’s expense. *So that I will be treated well for your sake.* Genesis records no reply from Sarai.' },
    { type: 'p', text: '**The man who trusted God with his future did not trust Him with his life.**' },
    { type: 'p', text: 'Scripture makes no attempt to hide this. The first story told about Abram after he reaches the promised land is the story of a failure of nerve. Genesis is not presenting a hero whose faith never wavers. It is presenting a man, and a promise that will have to carry him.' },

    { type: 'sub', text: 'The Promise at Risk' },
    { type: 'p', text: `The plan works, and then it works too well. The Egyptians see that Sarai is very beautiful. Pharaoh’s officials praise her to their master. *And she was taken into the palace of Pharaoh* (${g(12, 15)}). Abram had feared the men of Egypt. He had not reckoned with its king. A brother may put off an ordinary suitor. He cannot refuse Pharaoh.` },
    { type: 'p', text: `Meanwhile Abram prospers. Pharaoh treats him well on Sarai’s account, and he acquires *sheep and cattle, male and female donkeys, menservants and maidservants, and camels* (${g(12, 16)}). He receives exactly what he asked for. He is alive, he is treated well, and he is growing rich. And his wife is in another man’s house.` },
    { type: 'p', text: `One item in that list deserves a note. Among the gifts are maidservants, and four chapters later we will meet Sarai’s *Egyptian maidservant named Hagar* (${g(16, 1)}). Genesis never says where Hagar came from. Many readers have supposed that she entered the household here. If so, the consequences of this journey will travel a long way. But it remains a supposition.` },
    { type: 'p', text: `Now feel the weight of the situation. God has promised to make Abram a great nation. Abram has not yet been told that the promised child will come through Sarai in particular; that will not be said until ${g(17, 16)}. But the reader can see the danger. The wife of the man of promise has been taken as the wife of the king of Egypt, and Abram can do nothing about it. He has no army, no standing, and no claim he can make without confessing the lie. **The promise has been put in danger by the very man who received it.**` },

    { type: 'sub', text: 'But the LORD' },
    { type: 'quote', text: 'The LORD, however, afflicted Pharaoh and his household with severe plagues because of Abram’s wife Sarai.', by: 'Genesis 12:17' },
    { type: 'p', text: 'No prayer is recorded. No repentance is recorded. Abram does nothing, and God acts. Notice how the narrator names her: *Abram’s wife Sarai*. Genesis says plainly what Abram would not.' },
    { type: 'p', text: `Pharaoh understands what has happened and summons Abram. *What have you done to me? Why didn’t you tell me she was your wife?* The question echoes the one God asked in the garden: *What is this you have done?* (${g(3, 13)}). Here it is asked by a pagan king, and it is the chosen man who has no answer. Genesis records none. Pharaoh returns Sarai, gives his orders, and has Abram escorted out of the country with everything he owns.` },
    { type: 'p', text: 'There is an irony that should not be missed. Abram was told that he would be a blessing and that all the families of the earth would be blessed through him. The first foreign household he touches receives plagues. Pharaoh had acted in ignorance. Abram had not.' },
    { type: 'p', text: 'And yet the promise held. God had said, *I will bless those who bless you and curse those who curse you*, and He guarded Abram and Sarai even when the danger was of Abram’s own making. The psalmist remembers these years in just this way:' },
    { type: 'quote', text: 'He let no man oppress them; He rebuked kings on their behalf: “Do not touch My anointed ones! Do no harm to My prophets!”', by: 'Psalm 105:14–15' },
    { type: 'p', text: 'This is not approval of the deception. The wealth Abram carries out of Egypt will be the cause of the next crisis, and the lie will be told again. But the promise did not rest on Abram’s performance. **The promise survived Egypt because God guarded it, not because Abram did.**' },

    { type: 'sub', text: 'A Pattern for the Future' },
    { type: 'p', text: 'Anyone who knows the rest of the Pentateuch will recognize this story. It will happen again, on a larger scale.' },
    {
      type: 'table',
      head: ['Abram (Genesis 12)', 'Israel (Genesis 46–Exodus 12)'],
      rows: [
        [`A famine sends him down to Egypt (${g(12, 10)})`, `A famine brings Jacob’s family down to Egypt (${g(47, 4)})`],
        [`He fears the man will be killed and the woman allowed to live (${g(12, 12)})`, 'Pharaoh orders the sons killed and the daughters allowed to live (Exodus 1:16, 22)'],
        [`The LORD strikes Pharaoh and his household with plagues (${g(12, 17)})`, 'The LORD strikes Pharaoh and Egypt with plagues (Exodus 7–12)'],
        [`Pharaoh says, *“Take her and go!”* (${g(12, 19)})`, 'Pharaoh says, *“Take your flocks and herds … and depart!”* (Exodus 12:32)'],
        [`He leaves with great possessions (${g(12, 20)}; ${g(13, 2)})`, 'They leave with silver, gold, and great droves of livestock (Exodus 12:35–38)'],
      ],
    },
    { type: 'p', text: `What happens to Abram will happen to his descendants. God Himself will tell him so: *your descendants will be strangers in a land that is not their own … and afterward they will depart with many possessions* (${g(15, 13, '15:13–14')}). For an Israelite who had come out of Egypt, this chapter was not only the history of an ancestor. It was a small picture of the nation’s own story, drawn centuries in advance.` },
    { type: 'p', text: `The failure will be repeated as well. Abraham will say the same thing about Sarah to Abimelech king of Gerar (${g(20, 2)}), and his son Isaac will say it about Rebekah, for the same reason and almost in the same words (${g(26, 7)}). Fear is handed down along with the promise.` },
    { type: 'p', text: 'Abram went down to Egypt afraid for his life. He came out alive, wealthy, rebuked, and silent. He had been given a promise that the nations would be blessed through him, and he had brought trouble on the first nation he entered. Nothing in his conduct had earned the outcome.' },
    { type: 'p', text: '**The famine did not undo the promise. Neither did Abram.**' },
  ],
};

export default chapter;

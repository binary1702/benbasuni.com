import type { BookChapter } from '../../types';

const g = (c: number, v: number, label = `${c}:${v}`) => `[${label}](https://www.shavat.app/ot/genesis/creation/${c}#v${v})`;

const chapter: BookChapter = {
  slug: 'the-plan-of-sarai',
  title: 'The Plan of Sarai',
  ref: 'Genesis 16:1–6',
  blocks: [
    { type: 'figure', name: 'cov-hagar' },
    { type: 'quote', text: 'Now Abram’s wife Sarai had borne him no children, but she had an Egyptian maidservant named Hagar.', by: 'Genesis 16:1' },
    { type: 'p', text: 'The covenant has been sworn. The stars have been counted. And the next sentence in Genesis brings us back to the fact that has stood against the promise from the beginning: *Sarai had borne him no children*.' },
    { type: 'p', text: `Ten years have passed since Abram entered Canaan (${g(16, 3)}). He is eighty-five. Sarai is seventy-five. A decade of waiting has produced nothing. The question of this passage is what a believing household does when God has promised and God has not acted.` },

    { type: 'sub', text: 'Perhaps I Can Build a Family' },
    { type: 'quote', text: 'So Sarai said to Abram, “Look now, the LORD has prevented me from bearing children. Please go to my maidservant; perhaps I can build a family by her.” And Abram listened to the voice of Sarai.', by: 'Genesis 16:2' },
    { type: 'p', text: 'These are the first words of Sarai recorded in Scripture. She has been carried from Ur to Haran to Canaan to Egypt and back. She has been passed off as a sister and taken into a king’s house. Until now she has not spoken. When she does, her first words are about the LORD and her own emptiness.' },
    { type: 'p', text: 'Her theology is correct. *The LORD has prevented me.* She does not blame chance or her own body. She knows who opens and closes the womb. What she proposes is to work around Him.' },
    { type: 'p', text: `The proposal was neither scandalous nor unusual in her world. Legal texts from ancient Mesopotamia provide for exactly this arrangement: a wife who could not bear children might give her maidservant to her husband, and the child would be reckoned as the wife’s. Rachel will do the same with Bilhah, using almost the same words: *that through her I too can build a family* (${g(30, 3)}). By the standards of the time, Sarai was acting responsibly.` },
    { type: 'p', text: `And consider how the promise stood. God had said that the heir would come from Abram’s own body (${g(15, 4)}). He had not said that the mother would be Sarai. That will not be stated until ${g(17, 16)}. It was entirely possible to read the promise in a way that made room for Hagar. Sarai is not rejecting the promise. She is trying to help it.` },
    { type: 'p', text: '**This was not unbelief in what God had said. It was impatience with how long He was taking.**' },

    { type: 'sub', text: 'He Listened to the Voice of His Wife' },
    { type: 'p', text: 'Genesis tells the story in words that an attentive reader has heard before.' },
    {
      type: 'table',
      head: ['The garden (Genesis 3)', 'The tent (Genesis 16)'],
      rows: [
        [`The woman *took* the fruit and *gave* some to her husband (${g(3, 6)})`, `Sarai *took* Hagar and *gave* her to her husband (${g(16, 3)})`],
        [`*“Because you have listened to the voice of your wife”* (${g(3, 17)})`, `*“And Abram listened to the voice of Sarai”* (${g(16, 2)})`],
        ['The man eats without a recorded word', 'Abram agrees without a recorded word'],
      ],
    },
    { type: 'p', text: 'The narrator does not say that this is a second fall. He simply tells it with the same verbs. In both scenes a good thing is desired, a means is found that God has not given, the wife takes the initiative, and the husband goes along in silence.' },
    { type: 'p', text: 'Abram’s silence is worth a moment. He is the one to whom God spoke. He stood under the stars. He saw the fire pass between the pieces. Genesis does not record that he prayed about Sarai’s proposal or asked the LORD whether this was what He had meant. He listened, and he did as she said.' },
    { type: 'p', text: `Then there is Hagar herself. She is *Egyptian*; the narrator says so twice. Genesis never tells us how she came into the household, but the reader remembers that Abram left Egypt with maidservants given to him on Sarai’s account (${g(12, 16)}). If Hagar was among them, then the lie told at the border of Egypt is still bearing fruit ten years later. That connection is an inference. What is certain is that no one in the story asks Hagar anything. She is taken and given.` },

    { type: 'sub', text: 'It Worked' },
    { type: 'p', text: '*And he slept with Hagar, and she conceived* (16:4). The plan succeeds at once. After ten years of waiting on God, a single human decision produces a pregnancy. That is part of what makes such decisions attractive. They work.' },
    { type: 'p', text: 'And then everything else goes wrong.' },
    {
      type: 'list',
      items: [
        '**Hagar despises Sarai.** *When Hagar realized that she was pregnant, she began to despise her mistress.* The servant now has what the mistress lacks.',
        '**Sarai blames Abram.** *May the wrong done to me be upon you!* The plan was hers. The fault, she says, is his. *May the LORD judge between you and me.*',
        '**Abram withdraws.** *Your servant is in your hands. Do whatever you want with her.* He will not protect the woman who is carrying his child.',
        '**Sarai afflicts Hagar.** *Sarai treated Hagar so harshly that she fled from her.*',
      ],
    },
    { type: 'p', text: 'No one comes out of this well. Hagar is contemptuous, Sarai is bitter and then cruel, and Abram is passive. Genesis does not excuse any of them, and it does not single out any of them as the villain. It shows what happens to a household when it tries to produce by its own arrangement what God has promised to give.' },
    { type: 'p', text: `One word in the last line carries a great deal. The verb for Sarai’s harsh treatment of Hagar is the verb God had just used of what Egypt would do to Abram’s descendants: they will be *mistreated* four hundred years (${g(15, 13)}). Here, a Hebrew mistress afflicts an Egyptian slave. One day Egyptian masters will afflict Hebrew slaves. And in both cases the oppressed will flee into the wilderness, and God will meet them there.` },

    { type: 'sub', text: 'According to the Flesh' },
    { type: 'p', text: 'Paul reads this chapter as a picture of two ways of relating to God.' },
    { type: 'quote', text: 'For it is written that Abraham had two sons, one by the slave woman and the other by the free woman. His son by the slave woman was born according to the flesh, but his son by the free woman was born through the promise.', by: 'Galatians 4:22–23' },
    { type: 'p', text: '*According to the flesh* does not mean that Ishmael’s birth was sinful in itself. It means that it was the result of ordinary human ability. Abram could father a child by Hagar. No miracle was needed. *Through the promise* means a birth that could only happen if God did it. Paul’s point is that the people of God are created by promise and not by human effort, and he finds the two principles side by side in Abraham’s tent.' },
    { type: 'p', text: 'It is important to be fair to Sarai and Abram. They were not trying to defy God. They were trying to obtain what He had said He wanted for them. The promise was true. The goal was right. The error lay in supposing that because God had delayed, the means had been left to them.' },
    { type: 'p', text: 'Ten years is a long time to wait. Genesis does not pretend otherwise. But the result of taking the matter in hand is a pregnant slave fleeing toward the desert, a wife who feels wronged, and a husband who has said, *Do whatever you want*. The child who is coming will be loved by his father. He will not be the child of the promise. And the family will live with the consequences for the rest of the book.' },
    { type: 'p', text: '**Sarai and Abram believed the promise. They did not believe they could afford to wait for it.**' },
  ],
};

export default chapter;

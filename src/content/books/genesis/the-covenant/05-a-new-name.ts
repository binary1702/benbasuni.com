import type { BookChapter } from '../../types';

const g = (c: number, v: number, label = `${c}:${v}`) => `[${label}](https://www.shavat.app/ot/genesis/creation/${c}#v${v})`;

const chapter: BookChapter = {
  slug: 'a-new-name',
  title: 'A New Name',
  ref: 'Genesis 17:1–14',
  blocks: [
    { type: 'figure', name: 'cov-name' },
    { type: 'quote', text: 'When Abram was ninety-nine years old, the LORD appeared to him and said, “I am God Almighty. Walk before Me and be blameless.”', by: 'Genesis 17:1' },
    { type: 'p', text: `Thirteen years have passed in the space between two verses. Abram was eighty-six when Ishmael was born (${g(16, 16)}). He is ninety-nine now. Genesis records nothing from the years in between: no word from God, no altar, no event. Ishmael has grown from an infant into a boy on the edge of manhood. Abram has had thirteen years to believe that the promise has been kept.` },
    { type: 'p', text: 'Then the LORD appears, and it becomes clear that it has not. The question of this chapter is what God does with a man who has settled for less than what was promised.' },

    { type: 'sub', text: 'God Almighty' },
    { type: 'p', text: `God introduces Himself by a name not used before in Scripture: *El Shaddai*, God Almighty. It is the name by which the patriarchs will know Him. He will later tell Moses, *I appeared to Abraham, to Isaac, and to Jacob as God Almighty* (Exodus 6:3). The precise origin of *Shaddai* is uncertain. Its use is not. In Genesis the name appears where God promises fruitfulness to people who cannot produce it (${g(28, 3)}; ${g(35, 11)}). It is the name of the God who has power to do what He says.` },
    { type: 'p', text: `The command follows: *Walk before Me and be blameless.* Enoch and Noah *walked with God* (${g(5, 24)}; ${g(6, 9)}). Abram is told to walk *before* Him, to live his whole life in God’s sight. *Blameless* does not mean sinless; Genesis has been too honest about Abram for that. It means whole, undivided.` },
    { type: 'p', text: 'Abram’s response is to fall facedown. He says nothing. For the next several verses, God does all the talking.' },

    { type: 'sub', text: 'Father of Many Nations' },
    { type: 'quote', text: 'No longer will you be called Abram, but your name will be Abraham, for I have made you a father of many nations.', by: 'Genesis 17:5' },
    { type: 'p', text: '*Abram* means *exalted father*. *Abraham* sounds like *father of a multitude*. For ninety-nine years he has carried a name that mocked him: a man called *father* who for most of his life had no child. Now God lengthens the name and enlarges the claim.' },
    { type: 'p', text: 'Consider what it meant to use it. Abraham has one son, by a slave. He has a wife of eighty-nine who has never conceived. From this day forward, every time he introduces himself, every time a servant addresses him, he will be called the father of a multitude. **God gave him a name that would not be true for years, and required him to answer to it.**' },
    { type: 'p', text: 'Notice the tense again. *I have made you a father of many nations.* Not *I will make*. Paul fastens on this: Abraham believed in the God who *calls into being what does not yet exist* (Romans 4:17). God speaks of the thing as done, and renames the man accordingly.' },
    { type: 'p', text: 'The promise now reaches its fullest statement so far.' },
    {
      type: 'table',
      head: ['Genesis 12–15', 'Genesis 17'],
      rows: [
        [`A great nation (${g(12, 2)})`, `Many nations, and kings (${g(17, 6)})`],
        [`The land, to your offspring (${g(12, 7)})`, `All the land of Canaan, as an eternal possession (${g(17, 8)})`],
        [`A covenant concerning the land (${g(15, 18)})`, `An everlasting covenant with your descendants after you (${g(17, 7)})`],
        ['Blessing', `*“To be your God and the God of your descendants after you”* (${g(17, 7)})`],
      ],
    },
    { type: 'p', text: 'The last line is the center of it. Land, nations, and kings are all gifts. *To be your God* is the Giver Himself. This phrase will become the refrain of the whole Bible, repeated at Sinai, by the prophets, and at the very end: *They will be His people, and God Himself will be with them as their God* (Revelation 21:3).' },

    { type: 'sub', text: 'As for You' },
    { type: 'p', text: `Until now the covenant has asked nothing of Abraham. In Genesis 15 he was asleep while God walked between the pieces. Now the speech turns. *As for Me*, God had said in ${g(17, 4)}. In verse 9 the corresponding words arrive: *You must keep My covenant—you and your descendants in the generations after you.*` },
    { type: 'quote', text: 'This is My covenant with you and your descendants after you, which you are to keep: Every male among you must be circumcised. You are to circumcise the flesh of your foreskin, and this will be a sign of the covenant between Me and you.', by: 'Genesis 17:10–11' },
    { type: 'p', text: 'Circumcision was not invented here. Other peoples of the ancient world practiced it, the Egyptians among them (Jeremiah 9:25–26), often as a rite of passage at puberty or before marriage. What is new is the meaning and the timing. In Abraham’s family it is to be done on the eighth day, long before a child can choose anything, and it is *a sign of the covenant*.' },
    { type: 'p', text: 'Three features of the sign are worth noticing.' },
    {
      type: 'list',
      items: [
        '**It is permanent.** *My covenant in your flesh will be an everlasting covenant.* An altar can be left behind. This cannot.',
        '**It includes the outsider.** It applies to *those born in your household and those purchased from a foreigner—even those who are not your offspring*. From the first day, the covenant community is wider than Abraham’s bloodline.',
        '**It marks the place of generation.** The promise concerns offspring. The sign is set on the very part of the body by which a man fathers children.',
      ],
    },
    { type: 'p', text: 'That last point is an interpretation, but it fits the story closely. Abraham had tried to obtain the promised offspring by his own natural power, and he had succeeded in fathering Ishmael. Now a mark is cut into that power. The descendants God promises will come through Abraham’s body, and they will not be the achievement of Abraham’s body.' },
    { type: 'p', text: 'The warning is severe. An uncircumcised male *will be cut off from his people; he has broken My covenant*. The sign does not create the covenant. God did that. But to refuse the sign is to refuse the covenant.' },

    { type: 'sub', text: 'A Sign and a Seal' },
    { type: 'p', text: 'The Old Testament itself knows that the outward mark can exist without the reality. Moses tells Israel, *Circumcise your hearts, therefore, and stiffen your necks no more* (Deuteronomy 10:16), and promises that one day *the LORD your God will circumcise your hearts* (Deuteronomy 30:6). The sign in the flesh was always meant to point to something God does within.' },
    { type: 'p', text: 'Paul draws out the order of events once more:' },
    { type: 'quote', text: 'And he received the sign of circumcision as a seal of the righteousness that he had by faith while he was still uncircumcised. So then, he is the father of all who believe but are not circumcised, in order that righteousness might be credited to them.', by: 'Romans 4:11' },
    { type: 'p', text: 'Abraham was counted righteous in Genesis 15. He is circumcised in Genesis 17. The sign did not make him righteous. It sealed a righteousness he already had by faith. For Paul this is why uncircumcised Gentiles who believe are truly Abraham’s children, and why he can write that *in Christ Jesus neither circumcision nor uncircumcision has any value. What matters is faith expressing itself through love* (Galatians 5:6).' },
    { type: 'p', text: 'That is the New Testament’s conclusion. In Genesis 17 we are at the beginning. A man of ninety-nine lies on his face before God Almighty. He has been given a new name that contradicts his circumstances, a promise larger than any he has heard before, and a sign that will cost him blood. And God has not finished speaking. The most startling part of the message is still to come, and it concerns his wife.' },
    { type: 'p', text: '**For thirteen years Abram had a son and thought the promise was settled. God gave him a new name to tell him that it had hardly begun.**' },
  ],
};

export default chapter;

import type { BookChapter } from '../../types';

const g = (c: number, v: number, label = `${c}:${v}`) => `[${label}](https://www.shavat.app/ot/genesis/creation/${c}#v${v})`;

const chapter: BookChapter = {
  slug: 'the-god-who-sees',
  title: 'The God Who Sees',
  ref: 'Genesis 16:7–16',
  blocks: [
    { type: 'figure', name: 'cov-sees' },
    { type: 'quote', text: 'Now the angel of the LORD found Hagar by a spring of water in the desert—the spring along the road to Shur.', by: 'Genesis 16:7' },
    { type: 'p', text: 'The story could have stayed in the tent. Abram and Sarai are the people of the promise, and Genesis is their story. Instead the narrator leaves them and follows a runaway slave into the desert.' },
    { type: 'p', text: 'Hagar is on the road to Shur, the road that leads toward Egypt. She is going home. She is pregnant, alone, and without any protection. She has no part in the covenant and no claim on the God of her master. The question of this passage is whether the God who chose Abram has any regard for the people Abram’s household has used and discarded.' },

    { type: 'sub', text: 'Found' },
    { type: 'p', text: 'The verb is the first surprise. The angel of the LORD *found* her. Hagar was not looking for God. She was running. He came looking for her.' },
    { type: 'p', text: 'This is the first appearance of *the angel of the LORD* in Scripture. It is worth noticing to whom he first appears. Not to Abram, who has built altars. Not to Sarai, to whom the promised son will be born. He appears to an Egyptian slave woman who has run away.' },
    { type: 'p', text: 'His first word is her name. *Hagar, servant of Sarai.* In the tent, no one used it. Sarai called her *my maidservant*. Abram called her *your servant*. Throughout the previous scene she was spoken about and never spoken to. The messenger of God is the first person in the story to address her.' },
    { type: 'p', text: `Then he asks, *Where have you come from, and where are you going?* God asks questions like this in Genesis, and never because He lacks information. *Where are you?* He asked Adam (${g(3, 9)}). *Where is your brother?* He asked Cain (${g(4, 9)}). The questions invite a person to say truthfully where they stand. Hagar answers the first half honestly: *I am running away from my mistress Sarai.* She has no answer to the second. She knows what she is leaving. She does not know where she is going.` },

    { type: 'sub', text: 'Return' },
    { type: 'quote', text: 'So the angel of the LORD told her, “Return to your mistress and submit to her authority.”', by: 'Genesis 16:9' },
    { type: 'p', text: 'This is a hard word, and we should not make it easier than it is. Hagar is sent back to the woman who mistreated her. The verb *submit* comes from the same root as the harsh treatment she fled. Genesis offers no justification of Sarai’s conduct, and this verse should not be read as a general teaching about enduring abuse. It is a specific command to a specific woman, and it comes with a promise attached.' },
    { type: 'quote', text: 'I will greatly multiply your offspring so that they will be too numerous to count.', by: 'Genesis 16:10' },
    { type: 'p', text: 'These are words Abram has heard. Offspring beyond counting was the promise of the dust and the stars. Now a version of it is given to the slave. Her child will not die in the desert or disappear into Egypt. He will be born in Abram’s house, as Abram’s son, and he will become a people.' },
    { type: 'quote', text: 'Behold, you have conceived and will bear a son. And you shall name him Ishmael, for the LORD has heard your cry of affliction.', by: 'Genesis 16:11' },
    { type: 'p', text: '*Ishmael* means *God hears*. It is the first time in Scripture that God names a child before birth. Every time Hagar calls her son, she will be saying that God heard her. The word *affliction* is the word for what Sarai did to her. **God did not only see that Hagar had run. He had heard why.**' },
    { type: 'p', text: 'The description of the boy that follows is often read as a curse: *a wild donkey of a man*, at odds with everyone. In its setting it is closer to a promise of freedom. The wild donkey of the desert was an animal no one could harness (Job 39:5–8). The son of a slave will be no one’s slave. He will live as a free man in open country, and he will have to fight for it. For a woman on her way back to servitude, that is not an insult.' },

    { type: 'sub', text: 'You Are the God Who Sees Me' },
    { type: 'quote', text: 'So Hagar gave this name to the LORD who had spoken to her: “You are the God who sees me,” for she said, “Here I have seen the One who sees me!”', by: 'Genesis 16:13' },
    { type: 'p', text: 'People in Genesis receive names from God. Abram, Sarai, and Jacob will all be renamed. Hagar does something no one else in Scripture does. She gives a name to God. *El Roi*: the God who sees.' },
    { type: 'p', text: 'She has been seen all her life, in a sense. She was seen as property, as a womb, as a rival. She has not been *seen* in the way she means it now. In the desert, with no one to witness it, she discovers that the God of Abram knows who she is, where she has come from, and what was done to her. The well is named for the moment: *Beer-lahai-roi*, the well of the Living One who sees me.' },
    { type: 'p', text: 'Notice how the narrator describes the speaker. In verse 7 it is *the angel of the LORD*. In verse 13 it is *the LORD who had spoken to her*. The messenger is distinguished from God and also identified with Him. This pattern recurs wherever the angel of the LORD appears, and many Christian interpreters have understood him to be an appearance of the Son before His incarnation. Genesis does not explain it. It lets the two descriptions stand together.' },
    { type: 'p', text: `This scene anticipates another. When Israel is enslaved in Egypt, God will say, *I have indeed seen the affliction of My people … I have heard them crying out* (Exodus 3:7). The same two verbs, seeing and hearing, are first used of an Egyptian woman afflicted by Hebrews. Before God sees and hears Israel, He sees and hears Hagar.` },

    { type: 'sub', text: 'Abram Was Eighty-Six' },
    { type: 'p', text: 'Hagar goes back. Genesis does not describe the return, but the next verse shows that she told Abram what had happened, and that he believed her: *Abram gave the name Ishmael to the son she had borne* (16:15). The father gives his son the name that God had given the mother in the desert.' },
    { type: 'p', text: '*Abram was eighty-six years old when Hagar bore Ishmael to him* (16:16). He has a son. He is the child of Abram’s own body, as the promise required. For all Abram knows, this is the heir. Nothing in Genesis suggests that he thought otherwise.' },
    {
      type: 'table',
      head: ['In the tent', 'In the desert'],
      rows: [
        ['Hagar is *my maidservant*, *your servant*', 'She is called by her name'],
        ['She is taken and given', 'She is found'],
        ['She is afflicted', 'Her affliction is heard'],
        ['Her child is a means to Sarai’s end', 'Her child is named by God and promised a future'],
      ],
    },
    { type: 'p', text: 'The promise to Abram was that all the families of the earth would be blessed through him. In this chapter a member of his own household has been harmed through him, and God Himself goes out to do what Abram did not. The covenant with Abram is particular. One line will carry it. But the God who makes it is not the private deity of one family. He sees the Egyptian. He hears the slave.' },
    { type: 'p', text: `The next verse of Genesis begins, *When Abram was ninety-nine years old* (${g(17, 1)}). Between the birth of Ishmael and the next word from God lie thirteen years of which Scripture says nothing at all.` },
    { type: 'p', text: '**Abram and Sarai did not see Hagar. God did.**' },
  ],
};

export default chapter;

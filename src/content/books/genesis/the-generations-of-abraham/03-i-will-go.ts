import type { BookChapter } from '../../types';

const g = (c: number, v: number, label = `${c}:${v}`) => `[${label}](https://www.shavat.app/ot/genesis/creation/${c}#v${v})`;

const chapter: BookChapter = {
  slug: 'i-will-go',
  title: 'I Will Go',
  ref: 'Genesis 24:28–67',
  blocks: [
    { type: 'figure', name: 'legacy-rebekah' },
    { type: 'quote', text: 'They called Rebekah and asked her, “Will you go with this man?” “I will go,” she replied.', by: 'Genesis 24:58' },
    { type: 'p', text: 'The servant has found the woman. He has not yet won her. Rebekah runs home with a gold ring and two bracelets, and the scene moves from the well to her family’s house. Everything now depends on what they will say, and on what she will say.' },
    { type: 'p', text: 'The question of this passage is what it takes for the promise to pass to another generation. Abraham believed and left his father’s house. Someone else must now do the same.' },

    { type: 'sub', text: 'As Soon as He Saw the Ring' },
    { type: 'p', text: 'We meet Rebekah’s brother first. *As soon as he saw the ring, and the bracelets on his sister’s wrists … he went and found the man.* The narrator tells us what Laban noticed before he tells us what Laban heard. His welcome is warm and pious: *Come, you who are blessed by the LORD*. Readers who know the later story of Jacob will recognize the man, and his eye for gold.' },
    { type: 'p', text: 'The servant is brought in. The camels are fed, water is brought for his feet, and a meal is set before him. And he refuses to eat. *I will not eat until I have told you what I came to say.* His errand comes before his hunger. He is a man under oath, and he will not rest until he has discharged it.' },

    { type: 'sub', text: 'The Story Told Again' },
    { type: 'p', text: 'What follows is unusual. The servant retells the entire story we have just read, at length: his master’s wealth, the birth of Isaac, the oath, the journey, the prayer, the girl, the jar, the camels. Genesis, which told the binding of Isaac in nineteen verses, gives fifteen to a repetition.' },
    { type: 'p', text: 'The repetition has a purpose. The servant is not simply reporting. He is bearing witness. He wants this family to see what he has seen: that the events at the well were not chance. He begins with the LORD’s blessing on Abraham and ends with the LORD’s leading of himself. Then he asks for a decision: *Now if you will show kindness and faithfulness to my master, tell me; but if not, let me know*.' },
    { type: 'p', text: 'The family’s answer shows that the testimony has done its work.' },
    { type: 'quote', text: 'This is from the LORD; we have no choice in the matter. Rebekah is here before you. Take her and go, and let her become the wife of your master’s son, just as the LORD has decreed.', by: 'Genesis 24:50–51' },
    { type: 'p', text: 'The LORD has not spoken a word in this chapter. Yet Laban and Bethuel, who do not belong to the covenant, hear the account and conclude that He has spoken through the events themselves. Once again the servant bows to the ground before the LORD. He has worshiped at every stage: when he prayed, when the prayer was answered, and now when the answer is confirmed.' },

    { type: 'sub', text: 'Will You Go with This Man?' },
    { type: 'p', text: 'The next morning the servant asks to leave at once. The family hesitates. *Let the girl remain with us ten days or so.* It is a natural request. They are about to send a daughter five hundred miles away, to a husband none of them has seen, and they will probably never see her again. But the servant will not be delayed.' },
    { type: 'p', text: 'So they do something that Genesis has not shown us before. They ask her.' },
    { type: 'p', text: '*Will you go with this man?* The marriage has been arranged by others, as marriages were. The timing, and the leaving, are put to Rebekah herself. And she answers with a single word in Hebrew: *I will go*.' },
    { type: 'p', text: 'Consider what she is agreeing to.' },
    {
      type: 'table',
      head: ['Abraham (Genesis 12)', 'Rebekah (Genesis 24)'],
      rows: [
        ['Called to leave his country, his kindred, and his father’s household', 'Asked to leave her country, her kindred, and her father’s household'],
        ['For a land he had not seen', 'For a land, and a husband, she had not seen'],
        ['On the word of the LORD', 'On the testimony of a servant about what the LORD had done'],
        [`*“So Abram departed”* (${g(12, 4)})`, `*“I will go”* (${g(24, 58)})`],
      ],
    },
    { type: 'p', text: 'The verb she uses is the verb of Abraham’s call. He was told, *Go*. She says, *I will go*. The woman who will be the mother of the next generation of the promise enters the story by doing what its father did. **The promise is handed on to someone who makes Abraham’s journey over again.**' },
    { type: 'p', text: `Her family send her off with a blessing: *May you become the mother of thousands upon thousands. May your offspring possess the gates of their enemies.* They do not know it, but they are repeating almost word for word what God swore to Abraham on Moriah: *Your descendants will possess the gates of their enemies* (${g(22, 17)}). The oath of the mountain is spoken over the bride by people who never heard it.` },

    { type: 'sub', text: 'Isaac in the Field' },
    { type: 'p', text: `The scene changes to the south. *Now Isaac had just returned from Beer-lahai-roi, for he was living in the Negev.* That is the well where the angel of the LORD found Hagar, the well of *the Living One who sees me* (${g(16, 14)}). Isaac is living near the place named by his brother’s mother.` },
    { type: 'p', text: '*Early in the evening, Isaac went out to the field to meditate.* The Hebrew word is rare and its exact sense is uncertain; it may mean to meditate, to pray, or simply to walk. It is the first thing Genesis has shown Isaac doing by his own choice since he came down from Moriah. He is a quiet figure. He was carried to the mountain, and a wife is being brought to him. He lifts up his eyes and sees camels.' },
    { type: 'p', text: 'Rebekah lifts up her eyes at the same moment and sees a man in the field. She gets down from her camel, asks who he is, and covers herself with her veil. The servant tells Isaac *all that he had done*. It is the third time the story has been told in this chapter.' },
    { type: 'quote', text: 'And Isaac brought her into the tent of his mother Sarah and took Rebekah as his wife. And Isaac loved her and was comforted after his mother’s death.', by: 'Genesis 24:67' },
    { type: 'p', text: `It is a tender ending. The word *love* was first used in Scripture for Abraham’s love of Isaac (${g(22, 2)}). Its second use is here, for Isaac’s love of Rebekah. Sarah’s tent has stood empty for three years. Now it has a mistress again, and her son is comforted.` },
    { type: 'p', text: 'Christians have sometimes read this chapter as a picture of a larger story: a father who sends his servant to a far country to find a bride for his son, a bride who believes a report of someone she has never seen and leaves everything to go to him. Genesis does not suggest this, and it should be held as a reflection and no more. On its own terms the chapter is about something simpler. The promise required a second generation. It needed a man who would stay in the land and a woman who would come to it.' },
    { type: 'p', text: 'Abraham does not appear at the end of the chapter. The servant, who called Abraham *my master* throughout, says of Isaac, *It is my master* (24:65). The household has begun to pass from the father to the son.' },
    { type: 'p', text: '**Abraham left Haran for a land he had not seen. Rebekah left Haran for a husband she had not seen. Both went because of what they had heard about God.**' },
  ],
};

export default chapter;

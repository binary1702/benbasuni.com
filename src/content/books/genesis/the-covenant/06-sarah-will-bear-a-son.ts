import type { BookChapter } from '../../types';

const g = (c: number, v: number, label = `${c}:${v}`) => `[${label}](https://www.shavat.app/ot/genesis/creation/${c}#v${v})`;

const chapter: BookChapter = {
  slug: 'sarah-will-bear-a-son',
  title: 'Sarah Will Bear a Son',
  ref: 'Genesis 17:15–27',
  blocks: [
    { type: 'figure', name: 'cov-laugh' },
    { type: 'quote', text: 'And I will bless her and will surely give you a son by her. I will bless her, and she will be the mother of nations; kings of peoples will descend from her.', by: 'Genesis 17:16' },
    { type: 'p', text: 'God has given Abraham a new name and a sign. Now He turns to the person the promise has so far left unnamed. *As for Sarai your wife, do not call her Sarai, for her name is to be Sarah.* Both forms of the name appear to mean *princess*. The change is slight. What follows it is not.' },
    { type: 'p', text: `It has been twenty-four years since God first said, *I will make you into a great nation* (${g(12, 2)}). In all that time He has never said who the mother would be. Sarai drew her own conclusion and gave Hagar to her husband. Now, for the first time, God says it plainly: *a son by her*. The question of this passage is what Abraham will do with a promise that overturns the arrangement he has lived with for thirteen years.` },

    { type: 'sub', text: 'Abraham Laughed' },
    { type: 'quote', text: 'Abraham fell facedown. Then he laughed and said to himself, “Can a child be born to a man who is a hundred years old? Can Sarah give birth at the age of ninety?”', by: 'Genesis 17:17' },
    { type: 'p', text: 'He falls on his face, as he did at the beginning of the chapter. And he laughs. Genesis does not tell us what kind of laugh it was, and interpreters have disagreed. Some hear joy and astonishment. Others hear doubt. The posture is worship. The question he asks himself is the question of a man doing arithmetic.' },
    { type: 'p', text: 'Paul, looking back over the whole of Abraham’s life, says that *he did not waver through disbelief in the promise of God* (Romans 4:20). Genesis, describing this particular moment, records the laugh and the question without comment. Perhaps both are true. A man may fall down before God and find the promise almost too much to take in.' },
    { type: 'p', text: 'What Abraham says aloud is more revealing than what he says to himself.' },
    { type: 'quote', text: 'And Abraham said to God, “O that Ishmael might live under Your blessing!”', by: 'Genesis 17:18' },
    { type: 'p', text: 'This is a father speaking. He has a son. The boy is thirteen. Abraham has raised him, loved him, and for thirteen years believed that he was the answer to the promise. He does not ask for another child. He asks God to accept the one he has.' },
    { type: 'p', text: '**Abraham was not asking for too much. He was asking for too little.** He would have been content with Ishmael. God had something in mind that Abraham could not produce.' },

    { type: 'sub', text: 'You Are to Name Him Isaac' },
    { type: 'quote', text: 'But God replied, “Your wife Sarah will indeed bear you a son, and you are to name him Isaac. I will establish My covenant with him as an everlasting covenant for his descendants after him.”', by: 'Genesis 17:19' },
    { type: 'p', text: 'The answer is *no*, and it is specific. The child will be born to Sarah. His name will be *Isaac*, which means *he laughs*. God takes Abraham’s laughter and makes it the boy’s name. Whatever was in that laugh, it will be remembered every time the child is called.' },
    { type: 'p', text: 'And for the first time, there is a date: *at this time next year* (17:21). For twenty-four years the promise has had no timetable. Now it has one.' },
    { type: 'p', text: 'Then God answers the prayer Abraham actually prayed.' },
    { type: 'quote', text: 'As for Ishmael, I have heard you, and I will surely bless him; I will make him fruitful and multiply him greatly. He will become the father of twelve rulers, and I will make him into a great nation.', by: 'Genesis 17:20' },
    { type: 'p', text: `*I have heard you.* In Hebrew the phrase plays on the boy’s name: *Ishmael*, God hears. He will not be the child of the covenant, and he will not be forgotten. He will be blessed, fruitful, the father of twelve princes, a great nation. Genesis will later list those twelve by name (${g(25, 16)}).` },
    {
      type: 'table',
      head: ['Ishmael', 'Isaac'],
      rows: [
        ['Born to Hagar, by Sarai’s plan', 'To be born to Sarah, by God’s promise'],
        ['Born when Abram was eighty-six', 'To be born when Abraham is one hundred'],
        ['Blessed, fruitful, a great nation', 'Blessed, and the heir of the covenant'],
        ['*“I have heard you”*', '*“I will establish My covenant with him”*'],
      ],
    },
    { type: 'p', text: 'The distinction is not between a loved son and an unloved one. God blesses both. It is between two ways in which a child can come into the world: by what human beings are able to do, and by what only God can do. The covenant will run through the second.' },

    { type: 'sub', text: 'Why So Late?' },
    { type: 'p', text: 'It is fair to ask why God waited. If Sarah was always to be the mother, why was this not said in Haran, when she was sixty-five, or in Canaan before Hagar was ever thought of? Genesis does not answer the question directly. But the effect of the delay is plain.' },
    { type: 'quote', text: 'Without weakening in his faith, he acknowledged the decrepitness of his body (since he was about a hundred years old) and the lifelessness of Sarah’s womb.', by: 'Romans 4:19' },
    { type: 'p', text: 'At seventy-five, Abram might have fathered a son, and people would have said that he was fortunate. At eighty-six he did father one, by ordinary means. At one hundred, with a wife of ninety, there will be no ordinary explanation. The promise is kept only after every natural possibility has been exhausted. When Isaac is born, no one will be able to say that Abraham and Sarah managed it.' },
    { type: 'p', text: 'This has been the shape of the story from the start. The promise of a nation came to a man with a barren wife. The promise of the land came while the Canaanites held it. The covenant was sworn while Abram slept. **God waited until the thing was impossible, so that when it happened it could only be His.**' },

    { type: 'sub', text: 'On That Very Day' },
    { type: 'p', text: '*When He had finished speaking with Abraham, God went up from him* (17:22). What Abraham does next is told in the plainest language in the chapter.' },
    { type: 'quote', text: 'On that very day Abraham took his son Ishmael and all those born in his household or purchased with his money—every male among the members of Abraham’s household—and he circumcised them, just as God had told him.', by: 'Genesis 17:23' },
    { type: 'p', text: 'There is no delay. He does not wait for the child to be born as proof. He has laughed, he has pleaded for Ishmael, he has been told *no*, and he obeys the same day. He is ninety-nine. Ishmael is thirteen. Father and son are circumcised together, along with every man in a household that could field more than three hundred fighters.' },
    { type: 'p', text: 'Notice that Ishmael receives the sign. He will not carry the covenant line, yet he is marked as belonging to Abraham’s house. And notice the cost. A whole camp of men is incapacitated at once, on the strength of a promise about a child who has not been conceived.' },
    { type: 'p', text: 'This book began under the stars, with Abram asking what God could give him when he had no son. It has passed through the fire between the pieces, the plan of Sarai, the desert spring, and thirteen years of silence. It ends with a man who has a new name, a mark in his flesh, a son he loves who is not the heir, and a date one year away.' },
    { type: 'p', text: 'He has waited twenty-four years. He has twelve months to go. And in the next chapter, three strangers will appear at the door of his tent.' },
    { type: 'p', text: '**Abraham asked God to bless the son he had. God promised him the son he could not have.**' },
  ],
};

export default chapter;

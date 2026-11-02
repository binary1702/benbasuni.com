import type { BookChapter } from '../../types';

const chapter: BookChapter = {
  slug: 'the-generations-of-shem',
  title: 'The Generations of Shem',
  ref: 'Genesis 11:10–26',
  
  blocks: [
    { type: 'figure', name: 'nations-shem' },
    { type: 'quote', text: 'This is the account of Shem. Two years after the flood, when Shem was 100 years old, he became the father of Arphaxad.', by: 'Genesis 11:10' },
    { type: 'p', text: 'The nations have been scattered. Their languages have been confused. The people who once gathered in Shinar have spread across the earth, just as God had commanded.' },
    { type: 'p', text: 'And now, after tracing the descendants of Noah across the ancient world, Genesis turns its attention to a single family. The family of Shem.' },
    { type: 'p', text: 'The genealogy begins quietly, recording the birth of one son after another. There are no great battles, no kingdoms, and no extraordinary acts of faith. Only names, ages, and generations. But we have encountered a genealogy like this before.' },

    { type: 'sub', text: 'From Adam to Noah, From Shem to Abram' },
    { type: 'p', text: 'Genesis 5 traced the generations from Adam to Noah. Now Genesis 11 traces the generations from Shem to Abram. Both genealogies contain 10 generations when counted from their respective starting points to their final named patriarchs. Both conclude with a man who becomes the father of 3 sons.' },
    {
      type: 'table',
      head: ['', 'Genesis 5', 'Son at', 'Lived', 'Genesis 11', 'Son at', 'Lived'],
      rows: [
        ['1', 'Adam', '130', '930', 'Shem', '100', '600'],
        ['2', 'Seth', '105', '912', 'Arphaxad', '35', '438'],
        ['3', 'Enosh', '90', '905', 'Shelah', '30', '433'],
        ['4', 'Kenan', '70', '910', 'Eber', '34', '464'],
        ['5', 'Mahalalel', '65', '895', 'Peleg', '30', '**239**'],
        ['6', 'Jared', '162', '962', 'Reu', '32', '239'],
        ['7', 'Enoch', '65', '365 · *taken*', 'Serug', '30', '230'],
        ['8', 'Methuselah', '187', '**969**', 'Nahor', '29', '**148**'],
        ['9', 'Lamech', '182', '777', 'Terah', '70', '205'],
        ['10', 'Noah', '500', '950', 'Abram', '100', '175'],
      ],
    },
    { type: 'p', text: 'The resemblance is difficult to overlook. The first genealogy begins with Adam and leads to Noah, the man through whom God preserved humanity during the flood. The second begins with Shem and leads to Abram, the man through whom God will establish a covenant and promise blessings to the nations.' },
    { type: 'p', text: 'Both genealogies move toward a turning point in the biblical narrative. Noah stands at the end of the first world and the beginning of the new. Abram stands at the end of humanity’s early history and the beginning of God’s particular covenant relationship with one family.' },
    { type: 'p', text: '**Genesis 5 leads us to the man through whom humanity was preserved. Genesis 11 leads us to the man through whom the nations will be blessed.**' },

    { type: 'sub', text: 'The Missing Refrain' },
    { type: 'p', text: 'There is another difference between these genealogies, and it is easy to miss. Throughout Genesis 5, the account of each patriarch ends with the same words. *And then he died.*' },
    { type: 'p', text: 'Adam lived 930 years. *And then he died.* Seth lived 912 years. *And then he died.* The refrain continues through the generations, reminding the reader that even those who lived for centuries could not escape the judgment pronounced in Eden. Death had entered the world through Adam, and every generation lived beneath its shadow.' },
    { type: 'p', text: 'But in Genesis 11, the refrain disappears. The genealogy records the age at which each man became a father, followed by the years he continued to live and the sons and daughters he had afterward. Then it moves to the next generation. There is no repeated declaration of death.' },
    { type: 'p', text: 'This does not mean death has disappeared. The men in this genealogy were still mortal. But the literary emphasis has changed. Genesis 5 repeatedly reminds us that every life comes to an end. Genesis 11 directs our attention toward the continuation of the family.' },
    { type: 'p', text: 'The question is no longer simply how long these men lived. It is where their descendants are leading us. **The first genealogy reminds us that every man dies. The second follows the generations toward a man God is about to call.**' },

    { type: 'sub', text: 'The Shortening of Human Life' },
    { type: 'p', text: 'The ages recorded in Genesis 11 reveal another remarkable development. Before the flood, the patriarchs lived for centuries. Adam lived 930 years. Seth lived 912. Methuselah lived 969. Even Noah lived 950 years.' },
    { type: 'p', text: 'But after the flood, the recorded lifespans begin to decline.' },
    { type: 'p', text: 'Shem, who survived the flood, lived 600 years. His descendants lived for approximately 400 years, until the genealogy reaches Peleg. Then the numbers fall sharply.' },
    { type: 'p', text: 'Peleg lived 239 years. Reu lived 239. Serug lived 230. By the time we reach Nahor, his recorded lifespan is only 148 years. The decline is not perfectly uniform. Eber outlived several of his predecessors, and Terah lived longer than Nahor. But the larger movement is unmistakable.' },
    { type: 'p', text: 'The extraordinary lifespans of the earliest generations are gradually disappearing. And the sharpest transition occurs at a name we have already encountered. Peleg.' },
    { type: 'p', text: 'Genesis 10:25 tells us that Peleg received his name because the earth was divided during his lifetime. The Hebrew name *Peleg* is associated with division. Many interpreters have connected this statement with the scattering of humanity at Babel, although Genesis does not explicitly identify the two events as the same.' },
    { type: 'p', text: 'The connection is intriguing. The genealogy reaches the generation associated with the division of the earth, and the recorded lifespans fall from approximately 400 years to little more than 200.' },
    { type: 'p', text: 'Scripture does not tell us that Babel caused this decline. The numbers alone cannot establish that conclusion. But the two developments appear within the same larger account of humanity’s changing condition after the flood.' },
    { type: 'p', text: 'The nations are spreading. Languages have divided. And the long lives of the ancient patriarchs are passing away. **The world continues, but the extraordinary age of its earliest generations is coming to an end.**' },

    { type: 'sub', text: 'The Line of Eber' },
    { type: 'p', text: 'Two names deserve particular attention. The first is Eber. Genesis 10:21 had already identified Shem as the ancestor of the descendants of Eber. Now Genesis 11 places Eber within the direct line leading to Abram.' },
    { type: 'p', text: 'His name is traditionally associated with the designation *Hebrew*, or *Ivri*, although the precise linguistic relationship has been debated. Later, when Abram enters the biblical narrative, he will be identified as *Abram the Hebrew* (Genesis 14:13).' },
    { type: 'p', text: 'The second name is Peleg. Genesis 10 had introduced Peleg alongside his brother Joktan, whose descendants formed another extensive family line. But Genesis 11 does not follow Joktan. It follows Peleg.' },
    { type: 'p', text: 'From Peleg comes Reu, then Serug, Nahor, and Terah. And from Terah comes Abram. Once again, Genesis records the surrounding branches of a family before narrowing its attention to the line through which the story will continue.' },
    { type: 'p', text: '**The descendants of Noah had become nations. The nations had established cities and kingdoms. Their languages had been divided, and their peoples had spread across the earth. Yet through all of this, one family line continued, Abram.**' },

    { type: 'sub', text: 'The Generations That Overlapped' },
    { type: 'p', text: 'There is one final detail worth considering. The genealogies of Genesis record extraordinarily long lives, and when their years are placed alongside one another, the generations overlap in surprising ways.' },
    { type: 'p', text: 'Noah lived another 350 years after the flood (Genesis 9:28). Abram was born approximately 292 years after the flood, if Terah was 70 when Abram was born. *On that calculation, Noah would still have been alive when Abram was born.*' },
    { type: 'p', text: 'Shem lived even longer. He was 100 years old when Arphaxad was born, 2 years after the flood. He then lived another 500 years. On the same calculation, Shem would have remained alive throughout Abram’s lifetime.' },
    { type: 'p', text: 'There are uncertainties in these calculations. Genesis 11:26 does not necessarily mean Abram was born when Terah was 70, and other biblical textual traditions preserve different chronological figures. Luke 3:36 also includes Cainan between Arphaxad and Shelah. We should therefore be careful about treating these overlapping lifespans as a certain historical chronology.' },
    { type: 'p', text: '*But the possibility is remarkable. The man who survived the flood could have lived to see the birth of the man God would call from Ur. And Shem, who stepped out of the ark into the new world, could have lived during the age of Abraham.*' },
    { type: 'p', text: 'The generations were not necessarily separated by vast stretches of forgotten history. According to the chronology presented in Genesis, the lives of the earliest patriarchs overlapped across centuries. The family that emerged from the ark continued through the generations that followed. And now, after the scattering of the nations, the genealogy arrives at its destination.' },
    { type: 'quote', text: 'When Terah was 70 years old, he became the father of Abram, Nahor, and Haran.', by: 'Genesis 11:26' },
    { type: 'p', text: 'For 10 generations, Scripture has followed a single family through the centuries after the flood. The names have been recorded. The years have been counted. The nations have spread across the earth. And now, for the first time, we encounter the name of the man through whom the next great chapter of Scripture will begin.' },
  ],
};

export default chapter;

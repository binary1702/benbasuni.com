import type { BookChapter } from '../../types';

const g = (c: number, v: number, label = `${c}:${v}`) => `[${label}](https://www.shavat.app/ot/genesis/creation/${c}#v${v})`;

const chapter: BookChapter = {
  slug: 'gathered-to-his-people',
  title: 'Gathered to His People',
  ref: 'Genesis 25:1–18',
  blocks: [
    { type: 'figure', name: 'legacy-death' },
    { type: 'quote', text: 'And at a ripe old age he breathed his last and died, old and contented, and was gathered to his people.', by: 'Genesis 25:8' },
    { type: 'p', text: 'Genesis records the death of Abraham in one sentence. There is no deathbed scene, no last speech, and no final vision. After the length and care given to a field and a marriage, the end itself is told with great plainness.' },
    { type: 'p', text: 'Before it comes, the narrator sets down a few last facts about Abraham’s household, and afterward he traces what became of the son who was sent away. The question of this passage is how much of what God promised Abraham he actually saw.' },

    { type: 'sub', text: 'Father of Many Nations' },
    { type: 'p', text: '*Now Abraham had taken another wife, named Keturah.* Genesis does not say when. It may have been after Sarah’s death, or the narrator may be gathering up an earlier part of his life that did not belong to the main story; she is called a concubine a few verses later. She bore him six sons, and the list of their descendants reads like a map of Arabia: Midian, Sheba, Dedan.' },
    { type: 'p', text: `God had changed his name to Abraham, *father of many nations* (${g(17, 5)}). For most of his life that name stood against the facts. By the end it was literally true. From Abraham came Israel through Isaac, the twelve tribes of Ishmael, Edom through Esau, and the peoples descended from Keturah. Some of them will reappear in Israel’s history. Moses will flee to the land of Midian and marry the daughter of its priest (Exodus 2:15–21). Gideon will fight the Midianites. The queen of Sheba will come to Solomon.` },
    { type: 'p', text: 'But the line of promise does not broaden with the family. *Abraham left everything he owned to Isaac.* To his other sons he gave gifts *while he was still alive* and sent them away eastward. He does for the sons of Keturah what God had told him to do with Ishmael. They are provided for. The inheritance, and with it the covenant, belongs to one.' },
    { type: 'p', text: '**Abraham became the father of many nations. The promise went to one son.**' },

    { type: 'sub', text: 'A Hundred Years in the Land' },
    { type: 'quote', text: 'Abraham lived a total of 175 years.', by: 'Genesis 25:7' },
    { type: 'p', text: 'He was seventy-five when he left Haran. He lived exactly a hundred years in Canaan, as a foreigner, in tents. Set the dates of his life side by side and a detail emerges that the order of the narrative hides.' },
    {
      type: 'table',
      head: ['Abraham’s age', 'Event'],
      rows: [
        ['75', `He leaves Haran (${g(12, 4)})`],
        ['86', `Ishmael is born (${g(16, 16)})`],
        ['100', `Isaac is born (${g(21, 5)})`],
        ['137', `Sarah dies (${g(23, 1)})`],
        ['140', `Isaac marries Rebekah (${g(25, 20)})`],
        ['160', `Jacob and Esau are born (${g(25, 26)})`],
        ['175', `He dies (${g(25, 7)})`],
      ],
    },
    { type: 'p', text: 'Genesis tells of the twins’ birth after it tells of Abraham’s death, because it is finishing one man’s story before beginning the next. But by its own numbers, Abraham lived to see his grandsons. Isaac was sixty when they were born, and Abraham was then a hundred and sixty. He had fifteen years with Jacob and Esau.' },
    { type: 'p', text: 'So what did he see of the promise? He was promised a nation. He saw one son of the promise and two grandsons. He was promised a land. He owned a field with a cave. He was promised that all the families of the earth would be blessed through him. He saw a nephew rescued, a king’s household healed, and a neighbor’s treaty.' },
    { type: 'p', text: 'It was very little, measured against what had been said. And Genesis says that he died *old and contented*. The Hebrew is literally *old and full*. He was not a disappointed man. **He had seen enough to know that God keeps His word, and he was content to leave the rest with God.**' },

    { type: 'sub', text: 'Gathered to His People' },
    { type: 'p', text: `God had told him, long before, in the darkness between the pieces: *You, however, will go to your fathers in peace and be buried at a ripe old age* (${g(15, 15)}). The narrator uses the same words to report that it happened. This too was a promise, and it was kept.` },
    { type: 'p', text: 'The phrase *gathered to his people* is worth a thought. It cannot refer to burial in the family tomb. Abraham’s ancestors were buried in Mesopotamia, and the only person in the cave of Machpelah was Sarah. The expression appears to mean something more than being laid in a grave. It suggests that death, for Abraham, was a joining and not simply an ending.' },
    { type: 'p', text: 'Genesis says no more than that. Jesus does. He speaks of the faithful dead being carried *to Abraham’s side* (Luke 16:22), and of many who *will come from the east and the west to share the banquet with Abraham, Isaac, and Jacob in the kingdom of heaven* (Matthew 8:11). And He argues from God’s own words, *I am the God of Abraham*, that Abraham lives: *He is not the God of the dead, but of the living* (Matthew 22:32).' },
    { type: 'p', text: 'That is how the New Testament resolves the gap between what Abraham was promised and what Abraham received. He was promised the land *to you and your offspring forever*. He died owning a grave. If death were the end of him, the promise failed. Hebrews concludes that he was looking for something beyond Canaan all along: *they were longing for a better country, a heavenly one. Therefore God is not ashamed to be called their God, for He has prepared a city for them* (Hebrews 11:16).' },

    { type: 'sub', text: 'Isaac and Ishmael' },
    { type: 'quote', text: 'His sons Isaac and Ishmael buried him in the cave of Machpelah near Mamre, in the field of Ephron son of Zohar the Hittite.', by: 'Genesis 25:9' },
    { type: 'p', text: '*His sons Isaac and Ishmael.* It is one of the quiet surprises of Genesis. Ishmael was sent away as a youth, some seventy years before. Nothing has been said of any contact between the brothers since. And at their father’s grave they stand together.' },
    { type: 'p', text: 'Genesis does not describe the meeting or say how Ishmael learned of the death. It simply names them side by side, the son of the promise first and the elder brother with him. Whatever had divided their mothers, the two sons bury their father as his sons. He is laid beside Sarah in the field he bought.' },
    { type: 'p', text: '*After Abraham’s death, God blessed his son Isaac.* The blessing does not die with the man. Isaac is living near Beer-lahai-roi, the well of the God who sees. God will later tell him, *I will bless you and multiply your descendants for the sake of My servant Abraham* (26:24).' },

    { type: 'sub', text: 'Twelve Princes' },
    { type: 'p', text: 'Before turning to Isaac, Genesis finishes the story of the other son. *This is the account of Abraham’s son Ishmael.* It lists his twelve sons by name and calls them *twelve princes of their tribes*.' },
    { type: 'p', text: `This is the fulfillment of a specific promise. When Abraham pleaded for Ishmael, God said, *He will become the father of twelve rulers, and I will make him into a great nation* (${g(17, 20)}). The narrator records that it happened, down to the number. Ishmael lived 137 years and, like his father, *was gathered to his people*. His descendants settled across the desert from Havilah to Shur, in keeping with what the angel had told Hagar at the spring.` },
    { type: 'p', text: 'It would have been easy for Genesis to drop Ishmael once he left the main story. It does not. It takes the trouble to show that God kept His word to the son who was not chosen. The prophets go further. Isaiah, describing the nations streaming to Zion in the last days, names the peoples who come: *Midian and Ephah*, *Sheba*, *Kedar*, *Nebaioth* (Isaiah 60:6–7). Those are the sons of Keturah and the sons of Ishmael. In the prophet’s vision, the children Abraham sent away come home.' },
    {
      type: 'table',
      head: ['What God said', 'What Genesis records'],
      rows: [
        [`*“You will go to your fathers in peace and be buried at a ripe old age”* (${g(15, 15)})`, `He died *at a ripe old age … old and contented* (${g(25, 8)})`],
        [`*“A father of many nations”* (${g(17, 5)})`, 'Isaac, Ishmael, and the six sons of Keturah'],
        [`Ishmael *“will become the father of twelve rulers”* (${g(17, 20)})`, `*“Twelve princes of their tribes”* (${g(25, 16)})`],
        [`*“I will establish My covenant with Isaac”* (${g(17, 21)})`, `*“God blessed his son Isaac”* (${g(25, 11)})`],
      ],
    },
    { type: 'p', text: 'Abraham is dead. He is buried in a purchased field in a country that belongs to others. The great promises of land and nation and blessing are almost entirely unfulfilled. And yet every specific thing God said would happen in his lifetime has happened, exactly as He said.' },
    { type: 'p', text: '**Abraham died with the promise still ahead of him, and he died content. He had learned whom he was dealing with.**' },
  ],
};

export default chapter;

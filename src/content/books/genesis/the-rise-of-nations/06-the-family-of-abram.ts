import type { BookChapter } from '../../types';

const chapter: BookChapter = {
  slug: 'the-family-of-abram',
  title: 'The Family of Abram',
  ref: 'Genesis 11:27–32',
  draft: true,
  blocks: [
    { type: 'figure', name: 'nations-abram' },
    { type: 'quote', text: 'But Sarai was barren; she had no children.', by: 'Genesis 11:30' },
    { type: 'p', text: 'The first eleven chapters of Genesis have taken us from the creation of the universe to the destruction of the world, from the survival of Noah to the scattering of the nations. We have witnessed the rise of cities, the beginnings of kingdoms, and humanity’s attempt to make a name for itself at Babel.' },
    { type: 'p', text: 'Now, at the end of Genesis 11, the story narrows to a single family. And almost everything we learn about this family concerns something that has come to an end.' },

    { type: 'sub', text: 'A Family Without a Future' },
    { type: 'p', text: 'Genesis introduces Terah, the father of Abram, Nahor, and Haran. His family lived in Ur of the Chaldeans, one of the great cities of ancient Mesopotamia.' },
    { type: 'p', text: 'Ur stood near the Euphrates in southern Mesopotamia, in what is now southern Iraq, and it was one of the oldest cities in the world. At its center rose a great ziggurat, a stepped temple tower dedicated to the moon god Nanna, the same kind of structure many associate with the tower of Babel. Its royal tombs, excavated in the twentieth century, held gold, jewelry, and musical instruments from a wealthy and sophisticated civilization.' },
    { type: 'p', text: 'The phrase *of the Chaldeans* points ahead. The Chaldeans were a people who later settled in southern Mesopotamia, and their kings would one day rule from Babylon. Nebuchadnezzar, who destroyed Jerusalem, was a Chaldean king. Genesis names Ur by the people its readers would recognize.' },
    { type: 'p', text: 'Notice also whose land this was. Mesopotamia did not belong to the descendants of one son of Noah alone.' },
    {
      type: 'table',
      head: ['Region', 'Associated with', 'From'],
      rows: [
        ['Southern Mesopotamia: Babel, Erech, Accad', 'Nimrod ([10:8](https://www.shavat.app/ot/genesis/creation/10#v8))', 'Ham'],
        ['Northern Mesopotamia: Assyria', 'Asshur ([10:22](https://www.shavat.app/ot/genesis/creation/10#v22))', 'Shem'],
        ['Ur of the Chaldeans', 'Terah and Abram ([11:31](https://www.shavat.app/ot/genesis/creation/11#v31))', 'Shem'],
      ],
    },
    { type: 'p', text: 'Abram’s family descended from Shem, yet they lived in the south, the land where Ham’s descendant Nimrod had built the first kingdom. **The line of promise begins in the shadow of Babel.**' },
    { type: 'p', text: 'But the account is not one of prosperity or achievement. Instead, Scripture records a series of losses and unfinished beginnings. Four details bring the chapter to its conclusion.' },
    {
      type: 'list',
      items: [
        '**A son has died.** Haran, one of Terah’s sons, dies in his native land while his father is still alive ([11:28](https://www.shavat.app/ot/genesis/creation/11#v28)).',
        '**A wife cannot conceive.** Abram marries Sarai, but she cannot bear children ([11:30](https://www.shavat.app/ot/genesis/creation/11#v30)).',
        '**A journey remains unfinished.** Terah gathers his household and sets out for Canaan, yet the family stops in Haran and settles there ([11:31](https://www.shavat.app/ot/genesis/creation/11#v31)).',
        '**A father has been buried.** Terah dies in Haran at the age of 205, never completing the journey ([11:32](https://www.shavat.app/ot/genesis/creation/11#v32)).',
      ],
    },
    { type: 'p', text: 'But of all these details, Genesis draws particular attention to Sarai.' },
    { type: 'quote', text: 'But Sarai was barren; she had no children.', by: 'Genesis 11:30' },
    { type: 'p', text: 'The statement appears almost redundant. If Sarai was barren, the reader already understands that she had no children. Yet Scripture says both.' },
    { type: 'p', text: 'For a family whose future depended upon descendants, this was no small detail. Abram had no son through whom his household could continue. And at this point in the story, there is no promise that anything will change.' },
    { type: 'p', text: '**The genealogy that began with the multiplication of humanity ends with a woman who cannot conceive.**' },

    { type: 'sub', text: 'From Ur to Haran' },
    { type: 'p', text: 'Terah’s family came from Ur. The biblical account does not present Abram’s ancestors as a family that had always remained faithful to the LORD. Centuries later, Joshua would remind the Israelites of their origins:' },
    { type: 'quote', text: 'Long ago your fathers, including Terah the father of Abraham and Nahor, lived beyond the Euphrates and worshiped other gods.', by: 'Joshua 24:2' },
    { type: 'p', text: 'This is an extraordinary detail. The family through which God will establish His covenant did not emerge from a long, unbroken tradition of faithful worship.' },
    { type: 'p', text: '**They came from a world of other gods.** From the same broad region in which humanity had built its cities, established its kingdoms, and attempted to make a name for itself.' },
    { type: 'p', text: 'Yet Genesis records that Terah began a journey. He gathered Abram, Sarai, and Lot, the son of his deceased son Haran, and departed from Ur with the intention of reaching Canaan. Scripture does not explain Terah’s motivation in this passage. It simply tells us where he intended to go.' },
    { type: 'p', text: '**But he never arrived.** When the family reached Haran, they settled there.' },
    { type: 'p', text: 'There is a familiar word in that description. Earlier in Genesis 11, humanity journeyed to the land of Shinar, found a plain, and *settled* there (Genesis 11:2). Now Terah journeys toward Canaan, reaches Haran, and *settles* there (Genesis 11:31).' },
    { type: 'p', text: 'The circumstances are different, and the repeated verb does not establish that Terah shared the rebellion of Babel. But the narrative resemblance is worth noticing. Both journeys end with people settling before the story moves forward.' },
    {
      type: 'list',
      items: [
        'At Babel, humanity settled because it did not want to be scattered.',
        'In Haran, Terah’s family settled before reaching its intended destination.',
      ],
    },
    { type: 'p', text: 'And there, Terah died. The journey to Canaan remained unfinished.' },

    { type: 'sub', text: 'The City and the Family' },
    { type: 'p', text: 'Now consider how Genesis 11 is arranged. At the beginning of the chapter, humanity stands united upon the plain of Shinar. The people share one language. They possess the ability to manufacture bricks, organize their labor, and construct a city with a tower reaching toward the heavens. They have ambition, technology, numbers, and a common purpose. They intend to make a name for themselves.' },
    { type: 'p', text: 'But at the end of the chapter, Scripture introduces a very different picture. One family living in Haran. A father who has died. A son who has been buried. A journey that has stopped. And a woman who cannot have children.' },
    { type: 'p', text: 'Place the two scenes beside one another.' },
    {
      type: 'table',
      head: ['Babel', 'Abram’s family'],
      rows: [
        ['A united humanity', 'One household'],
        ['A city and a tower', 'An unfinished journey'],
        ['A plan to make a great name', 'No promise of greatness'],
        ['A people determined to remain together', 'A family that has left its homeland'],
        ['The power to build a future', 'A wife who cannot conceive'],
      ],
    },
    { type: 'p', text: 'The contrast is remarkable. Babel represents the strength of human civilization. Its people have the resources, organization, and ambition to build something that will endure.' },
    { type: 'p', text: 'Abram’s family possesses none of those advantages. There is no great kingdom awaiting him. No army. No monument bearing his name. Not even a child through whom his descendants might continue.' },
    { type: 'p', text: '**By every human measure, the future belongs to Babel.**' },
    { type: 'p', text: 'Yet Genesis does not continue by following the builders of Babel. It follows Abram.' },

    { type: 'sub', text: 'The God Who Gives Life' },
    { type: 'p', text: 'There is a reason Genesis tells us about Sarai’s barrenness before introducing God’s promise to Abram. In the very next chapter, God will command Abram to leave his country, his relatives, and his father’s household. Then He will make an extraordinary promise:' },
    { type: 'quote', text: 'I will make you into a great nation, and I will bless you; I will make your name great, so that you will be a blessing.', by: 'Genesis 12:2' },
    { type: 'p', text: 'Consider what God is promising.' },
    {
      type: 'list',
      items: [
        'A great nation to a man whose wife cannot conceive.',
        'A great name to a man who has built no kingdom.',
        'A future to a family whose journey has stopped.',
      ],
    },
    { type: 'p', text: '**And the promise will come not through Abram’s ability to accomplish these things, but through the faithfulness of the God who calls him.**' },
    { type: 'p', text: 'Centuries later, the apostle Paul would reflect upon Abraham’s faith. He describes Abraham as believing in the God who gives life to the dead and calls into existence things that do not yet exist (Romans 4:17). Paul also draws attention to the barrenness of Sarah’s womb (Romans 4:19).' },
    { type: 'p', text: 'What Genesis presents as an impossible human circumstance becomes the setting in which God will reveal His power. The promise does not begin with a family capable of producing a great nation.' },
    { type: 'p', text: '**It begins with a family that cannot.**' },
    { type: 'p', text: 'And this brings us back to Babel.' },
    {
      type: 'table',
      head: ['Babel', 'Abram'],
      rows: [
        ['The builders declared that they would make a name for themselves.', 'God will tell Abram that He will make his name great.'],
        ['Humanity attempted to secure its future through its own power.', 'God will establish a future through His promise.'],
      ],
    },
    { type: 'p', text: 'The difference is not that Abram possesses greater strength, wisdom, or resources. **It is that God has chosen to act.**' },
    { type: 'p', text: 'And so the first eleven chapters of Genesis end in a way we might never have expected.' },
    { type: 'p', text: 'Not with another great civilization.\nNot with a mighty hunter or a powerful king.\nNot with a tower reaching toward heaven.\nBut with a family whose future appears impossible.' },
    { type: 'p', text: 'A father has died. A journey has stopped. A wife remains barren. And the next words of Scripture will be spoken by God.' },
    { type: 'p', text: '**Humanity tried to make its own name great at Babel. God would make Abram’s name great through a promise.**' },
  ],
};

export default chapter;

import type { BookChapter } from '../../types';

const g = (c: number, v: number) => `[${c}:${v}](https://www.shavat.app/ot/genesis/creation/${c}#v${v})`;

const chapter: BookChapter = {
  slug: 'the-first-kingdoms',
  title: 'The First Kingdoms',
  ref: 'Genesis 10:8–12',
  draft: true,
  blocks: [
    { type: 'figure', name: 'nations-kingdoms' },
    { type: 'quote', text: 'Cush was the father of Nimrod, who began to be a mighty one on the earth. He was a mighty hunter before the LORD.', by: 'Genesis 10:8–9' },
    { type: 'p', text: 'Genesis 10 moves through the descendants of Noah, recording the families and nations that emerged after the flood. Name after name appears, often with little more than a record of ancestry. Then, in the middle of the genealogy, the narrative stops. One man receives special attention.' },
    { type: 'p', text: '**His name is Nimrod.**' },

    { type: 'sub', text: 'The Return of the Mighty' },
    { type: 'figure', name: 'nations-nimrod-line' },
    { type: 'p', text: 'Nimrod was a descendant of Ham through Cush, one of Noah’s grandsons. Scripture tells us that he *began to be a mighty one* upon the earth. The Hebrew word translated *mighty* is *gibbor*.' },
    { type: 'p', text: 'We have encountered this word before. Before the flood, Genesis described the mighty men of old, the men of renown who lived in the days when wickedness was spreading across the earth. Genesis places them beside the Nephilim, who *were on the earth in those days—and afterward as well* (Genesis 6:4). They were the *gibborim*. Now, after the flood, the same word appears again.' },
    { type: 'p', text: 'The old world had been destroyed. Its violence and corruption had brought judgment upon the earth. Only eight people had survived, and through them God had given humanity another beginning. Yet within the generations that followed, mighty men began to emerge once more. Nimrod was one of them.' },
    { type: 'p', text: 'Genesis describes him as *a mighty hunter before the LORD*. The expression has been understood in different ways. It may describe an extraordinary hunter whose reputation became proverbial. Others have interpreted *before the LORD* as suggesting defiance against God.' },
    { type: 'p', text: 'Genesis does not explicitly tell us whether Nimrod was righteous or wicked. **But it tells us what he built.**' },

    { type: 'sub', text: 'The First Kingdom' },
    { type: 'quote', text: 'His kingdom began in Babylon, Erech, Accad, and Calneh, in the land of Shinar.', by: 'Genesis 10:10' },
    { type: 'p', text: 'For the first time in Scripture, we encounter the word *kingdom*. Until now, Genesis has described individuals, families, cities, and generations. Cain built a city after leaving the presence of the LORD. His descendants developed crafts, music, and the working of metals. Before the flood, mighty men became renowned throughout the earth.' },
    { type: 'p', text: 'But now something new appears. **A kingdom.** Nimrod is no longer associated with a single city or household. His dominion encompasses multiple cities across the land of Shinar.' },
    { type: 'p', text: 'And look carefully at their names.' },
    { type: 'p', text: '**Babylon, Erech, Accad.**' },
    { type: 'p', text: 'These were not insignificant settlements.' },
    {
      type: 'list',
      items: [
        '**Erech** is identified with Uruk, one of the oldest and greatest cities of ancient Mesopotamia. Some of the earliest known writing was developed there, and it was remembered as the city of Gilgamesh, the hero of an ancient Mesopotamian epic that contains its own account of a great flood. Erech appears once more in the Old Testament: centuries later, men of Erech were among the peoples settled in Samaria who opposed the rebuilding of Jerusalem (Ezra 4:9–10).',
        '**Accad** is associated with Akkad, the city that gave its name to one of history’s earliest great empires, although its precise location remains uncertain. Accad is mentioned nowhere else in Scripture, but its name lived on in Akkadian, the language later spoken in both Babylon and Assyria.',
        '**Babylon** would eventually become one of the most powerful cities in the ancient world.',
      ],
    },
    { type: 'p', text: 'Genesis introduces these places through the kingdom of Nimrod. The account continues with the cities of Assyria, including Nineveh. Humanity had begun organizing itself into kingdoms, gathering cities and peoples under expanding centers of power.' },
    { type: 'p', text: '**The world that had begun again with eight people was becoming a world of nations and kings.**' },

    { type: 'sub', text: 'From the First City to the First Kingdom' },
    { type: 'p', text: 'To understand the significance of Nimrod, we must return to the generations before the flood.' },
    {
      type: 'list',
      items: [
        'The first city in Scripture was built by Cain, the [City of Enoch](/books/the-first-world/the-city-of-enoch/city-of-enoch). After murdering his brother Abel, Cain departed from the presence of the LORD, settled in the land of Nod, and built a city that he named after his son (Genesis 4:17).',
        'Several generations later came Lamech, who boasted that anyone who wounded him would face vengeance seventy-sevenfold (Genesis 4:23–24).',
        'Then, in the days before the flood, Genesis introduced the mighty men of old, men whose names had become renowned upon the earth (Genesis 6:4).',
      ],
    },
    { type: 'p', text: '**Now comes Nimrod.**' },
    {
      type: 'table',
      head: ['Before the flood', 'After the flood'],
      rows: [
        [`Cain builds a city (${g(4, 17)}).`, `Nimrod establishes a kingdom of cities (${g(10, 10)}).`],
        [`Lamech boasts of vengeance seventy-sevenfold (${g(4, 24)}).`, `Nimrod becomes renowned as a mighty hunter (${g(10, 9)}).`],
        [`The *gibborim* become men of renown (${g(6, 4)}).`, `Nimrod becomes a *gibbor* upon the earth (${g(10, 8)}).`],
      ],
    },
    { type: 'p', text: 'The parallels do not mean that Nimrod committed the same sins as Cain or Lamech. Genesis does not make that accusation. But the development is worth considering.' },
    { type: 'p', text: 'Before the flood, humanity had already begun building cities, establishing reputations, and accumulating power. After the flood, these same features of civilization began to appear again. And now they were taking the form of kingdoms.' },
    { type: 'p', text: '**The flood had destroyed the old civilization. It had not ended humanity’s pursuit of greatness.**' },

    { type: 'sub', text: 'Babylon and Nineveh' },
    { type: 'p', text: 'There is another detail in Nimrod’s story that becomes more significant as the biblical narrative unfolds. Two names appear among the cities associated with his kingdom and the surrounding account.' },
    { type: 'p', text: '**Babylon and Nineveh.**' },
    { type: 'p', text: 'At this point in Genesis, they are simply cities of the ancient world. But they will not remain insignificant.' },
    {
      type: 'list',
      items: [
        'Nineveh will become the capital of Assyria, the empire that conquers the northern kingdom of Israel and carries its people into exile. Yet it is also the city to which God sends the prophet Jonah. When Nineveh repents, God relents from the disaster He had threatened (Jonah 3:10), and He asks Jonah, *“Should I not care about the great city of Nineveh?”* (Jonah 4:11).',
        'Babylon will become the center of the empire that destroys Jerusalem, burns the temple, and carries Judah into captivity.',
      ],
    },
    { type: 'p', text: 'The two great imperial powers that will eventually bring judgment upon Israel and Judah are already represented in the earliest account of kingdoms.' },
    { type: 'p', text: 'But none of those events has happened yet. There is no Assyrian conquest. No Babylonian captivity. No destruction of Jerusalem. There is only a man named Nimrod and the beginnings of a kingdom in Shinar.' },
    { type: 'p', text: 'The cities that will one day conquer God’s people first appear in Scripture as part of humanity’s new beginning.' },

    { type: 'sub', text: 'The Land of Shinar' },
    { type: 'p', text: 'Genesis does not openly condemn Nimrod. It does not describe his kingdom as evil, nor does it explicitly identify him as an enemy of God. Instead, it leaves us with a geographical detail. His kingdom began in the land of Shinar.' },
    { type: 'p', text: 'That name will appear again. In the very next chapter, Genesis tells us that humanity journeyed eastward and settled upon a plain in the land of Shinar (Genesis 11:2). There, the people began to build a city and a tower.' },
    { type: 'p', text: 'Their ambition was not merely to establish a place to live.' },
    {
      type: 'list',
      items: [
        'They wanted to make a name for themselves.',
        'They wanted to reach the heavens.',
        'And they wanted to prevent themselves from being scattered across the earth.',
      ],
    },
    { type: 'p', text: 'Genesis 10 introduces the first kingdom in Shinar. Genesis 11 returns to Shinar to reveal a city built around humanity’s desire for greatness.' },
    { type: 'p', text: 'The same land associated with the beginning of kingdoms becomes the setting for one of humanity’s most ambitious undertakings. And for the first time since the flood, God will come down to examine what humanity has built.' },
    { type: 'p', text: '**The first kingdom began in Shinar. And in Shinar, humanity would attempt to build a tower reaching toward heaven, [The Tower of Babel](/books/the-first-world/the-rise-of-nations/the-tower-of-babel).**' },
  ],
};

export default chapter;

import type { Thought } from './index';

// Book V · Genesis 9. Continues The Great Flood (the-great-flood.ts).
// Central question: What changed after the flood, and what remained the same?
// Scripture quotations: BSB.
//
// Every chapter starts as a draft (draft: true): hidden on the live site, shown with a "Draft" marker
// in dev. Write the chapter's blocks under its heading (quote, p, sub, list, table, figure), then
// delete `draft: true` to publish that chapter. The book goes live with its first published chapter;
// update `date` when it does.
export const newWorld: Thought = {
  slug: 'the-new-world',
  kind: 'christianity',
  title: 'The New World',
  dek: 'Covenant After the Flood',
  date: '2026-11-02',
  body: [
    /* ── 1 ─────────────────────────────────────────────── Genesis 9:1–7 */
    { type: 'h', text: 'Be Fruitful and Multiply', ref: 'Genesis 9:1–7', draft: true },
    {
      type: 'quote',
      text: 'And God blessed Noah and his sons and said to them, “Be fruitful and multiply and fill the earth.”',
      by: 'Genesis 9:1',
    },
    {
      type: 'p',
      text: 'These are almost the first words God ever spoke to humanity. In Genesis 1:28, *God blessed them and said to them, “Be fruitful and multiply, and fill the earth.”* After the flood, He says it again, nearly word for word, to Noah. The world has been washed and the blessing has not been withdrawn. Noah is a second Adam, standing at the head of a second humanity.',
    },
    {
      type: 'p',
      text: 'But it is not the same speech. Set the two side by side and the differences tell us what kind of world this is.',
    },
    {
      type: 'table',
      head: ['', 'Genesis 1:28–30', 'Genesis 9:1–7'],
      rows: [
        ['The blessing', '*Be fruitful and multiply, and fill the earth*', '*Be fruitful and multiply and fill the earth*'],
        ['The animals', '*Rule over* them', '*The fear and dread of you will fall* on them'],
        ['Food', '*Every green plant*', '*Everything that lives and moves*, but not with its blood'],
        ['Human life', 'Made *in the image of God*', 'Protected *because* made in the image of God'],
        ['Violence', 'Not imagined', 'Answered: *by man his blood will be shed*'],
      ],
    },
    {
      type: 'p',
      text: 'Rule has become fear. A vegetarian world has become one where animals die so humans can eat. And for the first time, God writes a law about murder into the blessing itself. **This is still a blessed world, but it is a world that expects violence and has to be guarded against it.**',
    },
    {
      type: 'quote',
      text: 'But you must not eat meat with its lifeblood still in it.',
      by: 'Genesis 9:4',
    },
    {
      type: 'p',
      text: 'Meat is given; blood is withheld. The reason is stated later in the law: *the life of the flesh is in the blood* (Leviticus 17:11). Life belongs to God. Even when a person takes an animal’s life by permission, the life itself is returned to the One who gave it. The prohibition survives into the New Testament, where the apostles ask Gentile believers to abstain *from blood* (Acts 15:20).',
    },
    {
      type: 'quote',
      text: 'Whoever sheds the blood of man, by man his blood will be shed; for in His own image God has made mankind.',
      by: 'Genesis 9:6',
    },
    {
      type: 'p',
      text: 'In Hebrew the first half is a perfect mirror: *shofekh dam ha-adam, ba-adam damo yishafekh*. Sheds, blood, man; man, blood, shed. The sentence enacts what it describes.',
    },
    {
      type: 'p',
      text: 'Compare Genesis 4. When Cain killed Abel, God Himself protected the murderer: *if anyone slays Cain, then Cain will be avenged sevenfold*. Lamech turned that protection into a boast, and the world filled with violence. Now God hands humanity a responsibility it did not have before. *I will demand an accounting* (9:5), and that accounting will come *by man*. Many readers see here the root of human government: a community entrusted with justice so that private vengeance does not have to be.',
    },
    {
      type: 'p',
      text: 'Christians have long debated how this verse applies to the laws of nations today. But the reason it gives is not in dispute. Murder is grave **because a human being is the image of God.** The fall did not erase that image. The flood did not erase it. To strike a person is still to strike at the likeness of God.',
    },

    /* ── 2 ─────────────────────────────────────────────── Genesis 9:8–11 */
    { type: 'h', text: 'The Covenant', ref: 'Genesis 9:8–11', draft: true },
    {
      type: 'quote',
      text: 'Behold, I now establish My covenant with you and your descendants after you, and with every living creature that was with you.',
      by: 'Genesis 9:9–10',
    },
    {
      type: 'p',
      text: 'Before the rain fell, God told Noah, *I will establish My covenant with you* (6:18). Now, on dry ground, He does it. The promise made in the old world is kept in the new one.',
    },
    {
      type: 'p',
      text: 'A covenant is more than a promise. It is a binding relationship, a commitment that defines how two parties will stand toward each other. What makes this one unusual is how much is missing from it.',
    },
    {
      type: 'list',
      items: [
        'No conditions. Noah is not asked to do anything to keep it.',
        'No penalty clause. Nothing is said about what happens if humanity fails.',
        'No limit of membership. It includes *every living creature*: birds, livestock, beasts.',
        'No end date. It is *for all generations to come* (9:12), an *everlasting covenant* (9:16).',
      ],
    },
    {
      type: 'p',
      text: 'God binds Himself, and only Himself. This matters because we already know what humanity is like. 8:21 said the human heart is *evil from his youth*. If the covenant depended on human faithfulness, it would not last a generation. It does not. **It rests entirely on God.**',
    },
    {
      type: 'quote',
      text: 'Never again will all life be cut off by the waters of a flood; never again will there be a flood to destroy the earth.',
      by: 'Genesis 9:11',
    },
    {
      type: 'p',
      text: 'The Noahic covenant is the first in a series. Each later covenant narrows its scope and deepens its promise.',
    },
    {
      type: 'table',
      head: ['Covenant', 'With whom', 'Sign', 'Promise'],
      rows: [
        ['Noah (Genesis 9)', 'Every living creature', 'The rainbow', 'The world will be preserved'],
        ['Abraham (Genesis 15, 17)', 'Abraham and his seed', 'Circumcision', 'A land, a people, and blessing to all nations'],
        ['Sinai (Exodus 19–24)', 'Israel', 'The Sabbath', 'God will dwell among His people'],
        ['David (2 Samuel 7)', 'David’s house', '(none named)','A king from his line forever'],
        ['New (Jeremiah 31; Luke 22)', 'All who are in Christ', 'The cup', 'A new heart; sins forgiven'],
      ],
    },
    {
      type: 'p',
      text: 'Noah’s covenant is the floor beneath all the others. Before God can make a people, there has to be a world for them to live in. Isaiah reaches back to it when he wants to show how firm God’s love is: *For to Me this is like the days of Noah, when I swore that the waters of Noah would never again cover the earth. So I have sworn that I will not be angry with you* (Isaiah 54:9).',
    },

    /* ── 3 ─────────────────────────────────────────────── Genesis 9:12–17 */
    { type: 'h', text: 'The Bow in the Clouds', ref: 'Genesis 9:12–17', draft: true },
    {
      type: 'quote',
      text: 'I have set My rainbow in the clouds, and it will be a sign of the covenant between Me and the earth.',
      by: 'Genesis 9:13',
    },
    {
      type: 'p',
      text: 'The Hebrew word for rainbow is *qeshet*. It is the ordinary word for a bow, the weapon. Everywhere else in the Old Testament, a *qeshet* is something a warrior bends and fires.',
    },
    {
      type: 'p',
      text: 'God has just ended a war with the world. And He sets His bow in the clouds. Many readers have noticed the picture this makes: a warrior hanging up his weapon. And the bow of the sky curves upward, its string toward the earth, pointing away from us. Whether or not that image was intended, the meaning is plain. **The sign of the covenant is a weapon put down.**',
    },
    {
      type: 'p',
      text: 'Then something surprising. Who is the sign for?',
    },
    {
      type: 'quote',
      text: 'Whenever I form clouds over the earth and the rainbow appears in the clouds, I will remember My covenant between Me and you and every living creature of every kind.',
      by: 'Genesis 9:14–15',
    },
    {
      type: 'p',
      text: 'Not *you will remember*. *I will remember*. God says it twice (9:15, 16). The bow is not mainly a reminder for humanity. It is a reminder God sets before Himself. That is not because God forgets. It is the same remembering as 8:1, *But God remembered Noah*: a commitment acted upon. Every time the clouds gather and threaten rain, the bow appears in them, and God keeps His word.',
    },
    {
      type: 'p',
      text: 'Notice also where the bow appears: *in the clouds*. The sign shows up exactly when the sky looks most like the beginning of the flood. The promise is set in the storm, not after it.',
    },
    {
      type: 'p',
      text: 'The rainbow does not disappear from Scripture. Ezekiel sees the glory of the LORD and says *the brilliant light all around Him was like that of a rainbow in a cloud on a rainy day* (Ezekiel 1:28). John sees the throne of heaven: *a rainbow that gleamed like an emerald encircled the throne* (Revelation 4:3). The bow God hung in the sky after the flood hangs around His throne at the end.',
    },
    {
      type: 'p',
      text: '**The judge of all the earth governs it with His weapon laid down and His promise in view.**',
    },

    /* ── 4 ─────────────────────────────────────────────── Genesis 9:18–23 */
    { type: 'h', text: 'The Nakedness of Noah', ref: 'Genesis 9:18–23', draft: true },
    {
      type: 'quote',
      text: 'Now Noah, a man of the soil, proceeded to plant a vineyard. But when he drank some of its wine, he became drunk and uncovered himself inside his tent.',
      by: 'Genesis 9:20–21',
    },
    {
      type: 'p',
      text: 'The covenant has just been spoken. The rainbow is in the sky. And the next scene is Noah, drunk and naked in his tent.',
    },
    {
      type: 'p',
      text: 'Listen to what the story is made of. A man of the ground. A planting. Fruit. Nakedness. Seeing. Covering. A curse. **These are the materials of Eden.** The new world repeats the old one, almost scene for scene.',
    },
    {
      type: 'table',
      head: ['Eden (Genesis 2–3)', 'After the flood (Genesis 9)'],
      rows: [
        ['*The LORD God planted a garden* (2:8)', 'Noah *planted a vineyard* (9:20)'],
        ['Adam ate the fruit', 'Noah drank of the fruit'],
        ['*They knew that they were naked* (3:7)', 'He *uncovered himself* (9:21)'],
        ['*The LORD God made garments... and He clothed them* (3:21)', 'Shem and Japheth *took a garment... and covered* him (9:23)'],
        ['A curse on the serpent and the ground (3:14–17)', 'A curse on Canaan (9:25)'],
      ],
    },
    {
      type: 'p',
      text: 'Noah was the hope of 5:29: *May this one comfort us in the labor and toil of our hands caused by the ground.* In a sense he finds the comfort. He becomes the first vinedresser, and wine is a gift; Psalm 104:15 calls it *wine that gladdens the heart of man*. But the comfort becomes excess. The righteous man who walked with God through the flood cannot walk steadily in his own tent.',
    },
    {
      type: 'quote',
      text: 'And Ham, the father of Canaan, saw his father’s nakedness and told his two brothers outside.',
      by: 'Genesis 9:22',
    },
    {
      type: 'p',
      text: 'What exactly Ham did has been debated, and some see more in the phrase than looking. But the text itself sets up a contrast of two responses, and it describes both with care. Ham *saw* and *told*. He exposed his father twice: once with his eyes, once with his mouth. Shem and Japheth *took a garment*, laid it on their shoulders, *walked backward*, kept *their faces turned away*, and *covered* him. Every detail of their action is the opposite of Ham’s.',
    },
    {
      type: 'p',
      text: 'One brother uncovers shame. The others cover it, the way God covered Adam and Eve. Peter will write that *love covers over a multitude of sins* (1 Peter 4:8). The covering here does not deny what Noah did. It refuses to make a spectacle of it.',
    },
    {
      type: 'p',
      text: '**The flood cleaned the world. It did not clean Noah. The first story of the new world is a righteous man’s fall, and a son who makes it worse.**',
    },

    /* ── 5 ─────────────────────────────────────────────── Genesis 9:24–29 */
    { type: 'h', text: 'The Curse of Canaan', ref: 'Genesis 9:24–29', draft: true },
    {
      type: 'quote',
      text: 'Cursed be Canaan! A servant of servants shall he be to his brothers.',
      by: 'Genesis 9:25',
    },
    {
      type: 'p',
      text: 'These are Noah’s first recorded words. Through the building of the ark, the flood, the year of waiting, and the covenant, he never spoke. Now he wakes, learns what happened, and speaks a curse and a blessing.',
    },
    {
      type: 'p',
      text: 'The curse does not fall on Ham. It falls on Ham’s son, Canaan. Genesis has already told us twice that Ham was *the father of Canaan* (9:18, 22), preparing us for this. Why Canaan? The text does not explain. One likely answer is that Ham, who dishonored his father, will be dishonored through his own son. Another is that the original readers knew the Canaanites as the people whose practices Israel was warned against (Leviticus 18:3). Genesis is showing where that story begins.',
    },
    {
      type: 'p',
      text: 'This passage must also be read with care because it has been badly misused. For centuries, it was claimed as a biblical justification for the enslavement of Africans, under the name *the curse of Ham*. **The text does not support it.** The curse is on Canaan, not Ham. It says nothing about skin, race, or Africa. Ham’s other sons, Cush, Mizraim, and Put, are not cursed at all. And it is a prophetic word about a particular people, not a command for anyone to enslave anyone. Reading it as a charter for racial slavery required ignoring what it says.',
    },
    {
      type: 'quote',
      text: 'Blessed be the LORD, the God of Shem! May Canaan be the servant of Shem. May God expand the territory of Japheth; may he dwell in the tents of Shem.',
      by: 'Genesis 9:26–27',
    },
    {
      type: 'p',
      text: 'Notice the shape of Shem’s blessing. Noah does not say *blessed be Shem*. He says *blessed be the LORD, the God of Shem*. Shem’s blessing is that he belongs to the LORD. And Shem’s name means *name*. The book is about to tell the story of people who want to make a name for themselves (11:4), and then trace the line of the man named Name down to Abram, to whom God says *I will make your name great* (12:2).',
    },
    {
      type: 'p',
      text: 'Japheth’s blessing is a pun: *yapht*, may God expand, *Yepheth*. Expansion, and a place in Shem’s tents. The peoples of Japheth, who will spread across the coastlands, are invited to share in Shem’s blessing.',
    },
    {
      type: 'quote',
      text: 'So Noah lived a total of 950 years, and then he died.',
      by: 'Genesis 9:29',
    },
    {
      type: 'p',
      text: 'The formula of Genesis 5 returns. *And then he died.* The new Adam, the man who walked through the judgment, still ends like the old one.',
    },

    /* ── 6 ─────────────────────────────────────────────── Genesis 9 · conclusion */
    { type: 'h', text: 'A World Preserved, Not Redeemed', ref: 'Genesis 9', draft: true },
    {
      type: 'p',
      text: 'This book began with a question: what changed after the flood, and what remained the same? Genesis 9 gives a clear answer on both sides.',
    },
    {
      type: 'table',
      head: ['What changed', 'What remained'],
      rows: [
        ['Animals now fear humanity (9:2)', 'The blessing to be fruitful and multiply (9:1)'],
        ['Meat is permitted, without the blood (9:3–4)', 'Humanity bears the image of God (9:6)'],
        ['Murder is answered by human justice (9:5–6)', 'The human heart is *evil from his youth* (8:21)'],
        ['God binds Himself never to flood the earth again (9:11)', 'Sin, even in the most righteous man (9:21)'],
        ['The seasons are guaranteed (8:22)', 'Shame, exposure, and curse (9:22–25)'],
        ['A sign hangs in the sky (9:13)', '*And then he died* (9:29)'],
      ],
    },
    {
      type: 'p',
      text: 'Look at the left column. Everything that changed concerns the *conditions* of life: food, safety, justice, the stability of the earth. Look at the right. Everything that stayed the same concerns *humanity itself*. The flood reset the world. It did not reset us.',
    },
    {
      type: 'p',
      text: 'That is the meaning of the title. **The world after the flood is preserved, not redeemed.** God has promised to keep it. He has not yet made it new. The covenant with Noah is a commitment to hold the world steady, with its seasons, its justice, and its rain, so that something else can happen inside it.',
    },
    {
      type: 'p',
      text: 'Paul describes creation in this condition: *subjected to futility... in hope that the creation itself will be set free from its bondage to decay* (Romans 8:20–21). The Noahic covenant is the *in hope*. It buys time. It keeps the stage standing while the rest of the story is played out.',
    },
    {
      type: 'p',
      text: 'What happens on that stage begins in the next chapter. Noah’s sons will fill the earth, as they were told. They will also gather on a plain and refuse to be scattered. The same people who were preserved by God will try to build their way to Him.',
    },
    {
      type: 'p',
      text: '**God promised never again to destroy the world with water. He never promised that the world would stop needing to be saved.**',
    },
  ],
};

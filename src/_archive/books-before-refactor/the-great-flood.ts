import type { Thought } from './index';

// Book IV · Genesis 6–8. Continues The First Civilization (the-first-civilization.ts).
// Central question: Why did God judge the world, and how did He preserve life?
// Scripture quotations: BSB.
//
// Every chapter starts as a draft (draft: true): hidden on the live site, shown with a "Draft" marker
// in dev. Write the chapter's blocks under its heading (quote, p, sub, list, table, figure), then
// delete `draft: true` to publish that chapter. The book goes live with its first published chapter;
// update `date` when it does.
export const greatFlood: Thought = {
  slug: 'the-great-flood',
  kind: 'christianity',
  title: 'The Great Flood',
  dek: 'Judgment and the Preservation of Life',
  date: '2026-11-02',
  body: [
    /* ── 1 ─────────────────────────────────────────────── Genesis 6:1–4 */
    { type: 'h', text: 'The Sons of God', ref: 'Genesis 6:1–4', draft: true },
    {
      type: 'quote',
      text: 'The sons of God saw that the daughters of men were beautiful, and they took as wives whomever they chose.',
      by: 'Genesis 6:2',
    },
    {
      type: 'p',
      text: 'Genesis 5 ended with a father hoping for comfort. Genesis 6 opens with four of the strangest verses in the Bible. Humanity is multiplying, as God commanded. But something in the multiplying has gone wrong.',
    },
    {
      type: 'p',
      text: 'Listen to the verbs. The sons of God *saw* that the daughters of men were *beautiful*, and they *took*. The Hebrew word for beautiful is *tov*, good. It is the same sequence as Genesis 3:6: *the woman saw that the tree was good... and she took.* Seeing, judging something good for oneself, and taking. The pattern of the fall has moved from a fruit to a marriage.',
    },
    {
      type: 'p',
      text: 'Who the *sons of God* are has been argued over for two thousand years. Genesis does not stop to explain, and the three main readings each have real support.',
    },
    {
      type: 'table',
      head: ['Reading', 'Sons of God are', 'Support'],
      rows: [
        ['Angelic', 'Heavenly beings who crossed into the human realm', 'The phrase means angels in Job 1:6 and 38:7; the oldest Jewish readers took it this way; *2 Peter 2:4* and *Jude 6* speak of angels who *abandoned their proper dwelling*.'],
        ['Sethite', 'The line of Seth marrying into the line of Cain', 'Follows directly from Genesis 4–5 and its two lines; keeps the sin entirely human; Jesus says angels do not marry (Matthew 22:30).'],
        ['Royal', 'Kings and rulers who took women at will', 'Ancient kings called themselves sons of gods; *whomever they chose* sounds like the abuse of power; leads naturally to the *mighty men* of verse 4.'],
      ],
    },
    {
      type: 'p',
      text: 'Whichever reading one takes, the shape of the sin is the same. **A boundary God set is crossed, by those with the power to cross it, for the sake of what they want.** That is what Eden looked like. It is what Lamech looked like. Now it looks like this.',
    },
    {
      type: 'p',
      text: 'God answers in verse 3: *My Spirit will not contend with man forever, for he is mortal; his days shall be 120 years.* This may be a new limit on the human lifespan, and the long lives of Genesis 5 do shrink after the flood. Or it may be a countdown: 120 years until the waters come. Either way, God is setting a limit. The breath He breathed into Adam (2:7) is not owed to man indefinitely.',
    },
    {
      type: 'p',
      text: 'Then the Nephilim. Verse 4 calls their children *the mighty men of old, men of renown*. In Hebrew, *men of the name*. Remember that phrase. Genesis 11 will be about people who want to *make a name for ourselves*, and Genesis 12 about the God who says *I will make your name great*. The hunger for a name starts here, with the mighty.',
    },
    {
      type: 'p',
      text: '**Genesis 6 does not begin with crime in the streets. It begins with the strong taking what they want, and the world calling them heroes.**',
    },

    /* ── 2 ─────────────────────────────────────────────── Genesis 6:5–8 */
    { type: 'h', text: 'The Grief of God', ref: 'Genesis 6:5–8', draft: true },
    {
      type: 'quote',
      text: 'Then the LORD saw that the wickedness of man was great upon the earth, and that every inclination of the thoughts of his heart was altogether evil all the time.',
      by: 'Genesis 6:5',
    },
    {
      type: 'p',
      text: 'In Genesis 1, God *saw* what He had made, and it was very good. In Genesis 6, the LORD *saw* again. The same verb. This time He sees wickedness, and the sentence piles up words so that nothing is left out: *every* inclination, of the *thoughts*, of his *heart*, *altogether* evil, *all the time*.',
    },
    {
      type: 'p',
      text: 'Notice where the diagnosis goes. Not to actions first, but to the heart. The word *inclination* (*yetzer*) comes from the verb used when God *formed* man from the dust (2:7), the word for a potter shaping clay. What the heart forms, its plans and imaginings, has become evil from the inside. The violence of verse 11 is only what that looks like from the outside.',
    },
    {
      type: 'quote',
      text: 'And the LORD regretted that He had made man on the earth, and He was grieved in His heart.',
      by: 'Genesis 6:6',
    },
    {
      type: 'p',
      text: 'Man’s heart is evil. God’s heart is grieved. The verse sets the two hearts side by side.',
    },
    {
      type: 'p',
      text: 'The word *grieved* (*atsav*) has a history. It is the root of the *pain* God spoke of to the woman in childbirth (3:16), the *toil* of the man on the cursed ground (3:17), and the *labor and toil of our hands* that Lamech hoped Noah would relieve (5:29). The pain that sin brought into the human world, God now feels in His own heart. He is not a distant judge reading a report. **The judgment that follows comes from a God who has been hurt.**',
    },
    {
      type: 'p',
      text: 'Does God change His mind? Scripture holds two things together. 1 Samuel 15 says in one breath that the LORD *regretted* making Saul king (15:11) and that He *does not lie or change His mind, for He is not a man* (15:29). God’s character and purpose do not change. But His response to people is real. He is not unmoved when what He made goes wrong.',
    },
    {
      type: 'p',
      text: 'Then the turn.',
    },
    { type: 'quote', text: 'Noah, however, found favor in the eyes of the LORD.', by: 'Genesis 6:8' },
    {
      type: 'p',
      text: 'In Hebrew there is a play on letters that a translation cannot keep. Noah is *Nḥ*. Favor is *ḥn*. The same two letters, reversed. The man’s name is turned around into grace. And note the order: Noah *found favor* before Genesis tells us anything about his righteousness. Grace comes first in the sentence.',
    },
    {
      type: 'p',
      text: '**God’s verdict on humanity is total. His grief is real. And in the same paragraph, His favor finds a man.**',
    },

    /* ── 3 ─────────────────────────────────────────────── Genesis 6:9–13 */
    { type: 'h', text: 'The Righteous Man', ref: 'Genesis 6:9–13', draft: true },
    {
      type: 'quote',
      text: 'This is the account of Noah. Noah was a righteous man, blameless in his generation; Noah walked with God.',
      by: 'Genesis 6:9',
    },
    {
      type: 'p',
      text: 'Three descriptions, each a step deeper. *Righteous*: he did what was right. *Blameless in his generation*: among people who were not, he was whole. And *Noah walked with God*, the phrase Genesis used twice of Enoch (5:22, 24). Only these two men in the first eleven chapters are said to walk with God. One was taken before the judgment. The other will be carried through it.',
    },
    {
      type: 'p',
      text: 'Then the camera pulls back to the world.',
    },
    {
      type: 'quote',
      text: 'Now the earth was corrupt in the sight of God, and full of violence. And God looked upon the earth and saw that it was corrupt; for all living creatures on the earth had corrupted their ways.',
      by: 'Genesis 6:11–12',
    },
    {
      type: 'p',
      text: 'The word *corrupt* (*shachat*) appears three times in two verses. It means ruined, spoiled, the way a pot is spoiled on the wheel. Then in verse 13 God says *I will destroy* both them and the earth, and the verb is the same word: *shachat*. A literal rendering would be: *the earth was ruined... so I will ruin it*.',
    },
    {
      type: 'p',
      text: 'That is the logic of the flood. **God does not bring a foreign punishment onto a healthy world. He finishes what humanity has already started.** The world has been destroying itself. Judgment hands it over to the ruin it chose.',
    },
    {
      type: 'p',
      text: 'And the ruin has a name: *violence* (*chamas*). Not idolatry first, not ritual failure, but people doing harm to people. The line runs straight back through Lamech’s song to Abel’s blood. What began as one murder in a field has filled the earth.',
    },
    {
      type: 'p',
      text: 'Noah’s righteousness is not presented as the reason he escapes. It is the contrast that makes the darkness visible. Hebrews says it this way: *By faith Noah... built an ark to save his family. By faith he condemned the world and became heir of the righteousness that comes by faith* (Hebrews 11:7). His life was a verdict on his generation before the waters were.',
    },
    {
      type: 'p',
      text: '**One man walking with God is enough to show what everyone else had walked away from.**',
    },

    /* ── 4 ─────────────────────────────────────────────── Genesis 6:14–22 */
    { type: 'h', text: 'The Ark', ref: 'Genesis 6:14–22', draft: true },
    {
      type: 'quote',
      text: 'Make for yourself an ark of gopher wood; make rooms in the ark and coat it with pitch inside and out.',
      by: 'Genesis 6:14',
    },
    {
      type: 'p',
      text: 'God tells Noah what He will do, and then tells him what to build. Judgment and rescue arrive in the same speech.',
    },
    {
      type: 'p',
      text: 'The word for ark is *tevah*. It appears in only one other story in the Bible: the basket Moses’ mother made for her son, *coated with tar and pitch* and set on the Nile (Exodus 2:3). Both are boxes, not ships. Neither has a sail or a rudder. Both carry the one through whom God will save His people, across the waters that kill everyone else. Neither one is steered. They are simply kept.',
    },
    {
      type: 'p',
      text: 'The dimensions are given in cubits, roughly the length of a forearm.',
    },
    {
      type: 'table',
      head: ['', 'Cubits', 'Approximately'],
      rows: [
        ['Length', '300', '450 feet · 137 m'],
        ['Width', '50', '75 feet · 23 m'],
        ['Height', '30', '45 feet · 14 m'],
        ['Decks', '3', 'lower, middle, upper'],
      ],
    },
    {
      type: 'p',
      text: 'A six-to-one ratio of length to width, the proportion of a stable, seaworthy hull. It was built to float, not to go anywhere. One door, in the side. One window, near the top.',
    },
    {
      type: 'p',
      text: 'The word for *pitch* is *kopher*, and the verb *coat* is *kaphar*. Elsewhere in the Old Testament, *kaphar* is the word for *atonement*: to cover. Most of the time it covers sin. Here it covers a hull. The connection may be only in the sound. But it is hard not to hear it: the thing that keeps the judgment out is a covering.',
    },
    {
      type: 'quote',
      text: 'But I will establish My covenant with you, and you will enter the ark—you and your sons and your wife and your sons’ wives with you.',
      by: 'Genesis 6:18',
    },
    {
      type: 'p',
      text: 'This is the first time the word *covenant* (*berit*) appears in the Bible. It arrives before the flood, as a promise, and its fulfillment waits until Genesis 9. Every covenant that follows, with Abraham, with Israel, with David, the new covenant in Christ, stands in the line of this first one.',
    },
    {
      type: 'p',
      text: 'The chapter ends: *So Noah did everything precisely as God had commanded him* (6:22). It will say the same in 7:5, 7:9, and 7:16. Something else is worth noticing. **Through the whole flood story, Noah never says a word.** God speaks. Noah builds, gathers, enters, waits. His first recorded words do not come until Genesis 9:25. His obedience is the only speech he makes.',
    },

    /* ── 5 ─────────────────────────────────────────────── Genesis 7:1–16 */
    { type: 'h', text: 'The Door Was Shut', ref: 'Genesis 7:1–16', draft: true },
    {
      type: 'quote',
      text: 'Go into the ark, you and all your family, because I have found you righteous in this generation.',
      by: 'Genesis 7:1',
    },
    {
      type: 'p',
      text: 'God’s instructions now add a detail. Of the *clean* animals, take seven pairs. Of the unclean, one pair. The law that will define clean and unclean has not been given yet, but the categories already exist, and the reason will become clear when Noah steps off the ark: there must be animals to offer (8:20).',
    },
    {
      type: 'p',
      text: 'Then God gives a date. *For seven days from now I will send rain* (7:4). Seven days of waiting, with the door open. The week that began creation now counts down to its undoing.',
    },
    {
      type: 'quote',
      text: 'In the six hundredth year of Noah’s life, on the seventeenth day of the second month, all the fountains of the great deep burst forth, and the floodgates of the heavens were opened.',
      by: 'Genesis 7:11',
    },
    {
      type: 'p',
      text: 'The precision is striking. Year, month, day. Genesis records the flood the way a ship’s log records a storm. This is not presented as a myth from no particular time. It is a day on a calendar.',
    },
    {
      type: 'p',
      text: 'And the animals come. *They came to Noah to enter the ark, two by two* (7:15). Noah does not hunt them down. They come. The same God who brought the animals to Adam to be named (2:19) brings them to Noah to be kept.',
    },
    {
      type: 'p',
      text: 'Then the last line of the paragraph, almost an afterthought.',
    },
    { type: 'quote', text: 'Then the LORD shut him in.', by: 'Genesis 7:16' },
    {
      type: 'p',
      text: 'Noah built the ark. Noah gathered the food. Noah walked in. But Noah did not close the door. God did. **Salvation is not sealed by the one being saved.** The door that held Noah safe was the same door that kept everyone else out, and it was not in Noah’s hand to open or close.',
    },
    {
      type: 'p',
      text: 'Jesus picks up both sides of that door. In the parable of the ten virgins: *those who were ready went in with him to the wedding banquet, and the door was shut* (Matthew 25:10). And of Himself: *I am the gate. If anyone enters through Me, he will be saved* (John 10:9).',
    },
    {
      type: 'quote',
      text: 'For in the days before the flood, people were eating and drinking, marrying and giving in marriage, up to the day Noah entered the ark. And they were oblivious until the flood came and swept them all away.',
      by: 'Matthew 24:38–39',
    },
    {
      type: 'p',
      text: 'Jesus does not describe the generation of the flood as people doing outrageous things. He describes ordinary life: meals, weddings. The danger was not that they were unusually wicked that week. It was that they were *oblivious*. A boat had been under construction in plain sight for years.',
    },

    /* ── 6 ─────────────────────────────────────────────── Genesis 7:17–24 */
    { type: 'h', text: 'The Undoing of Creation', ref: 'Genesis 7:17–24', draft: true },
    {
      type: 'quote',
      text: 'Finally, the waters completely prevailed upon the earth, so that all the high mountains under all the heavens were covered.',
      by: 'Genesis 7:19',
    },
    {
      type: 'p',
      text: 'To understand the flood, go back to the beginning. In Genesis 1, the earth starts as water: *darkness was over the surface of the deep* (1:2). Then God separates. On the second day, waters above from waters below. On the third, the sea from the dry land. Creation is a house built by making space inside the water.',
    },
    {
      type: 'p',
      text: 'Now read 7:11 again. *The fountains of the great deep burst forth, and the floodgates of the heavens were opened.* The waters below come up. The waters above come down. The separations of day two and day three are reversed. The flood is not just a lot of rain. **It is creation being run backward.**',
    },
    {
      type: 'table',
      head: ['Genesis 1', 'Genesis 7'],
      rows: [
        ['Darkness over *the deep* (1:2)', '*The fountains of the great deep* burst forth (7:11)'],
        ['Waters above separated from waters below (1:6–8)', '*The floodgates of the heavens* opened (7:11)'],
        ['*Let the dry land appear* (1:9)', '*All the high mountains... were covered* (7:19)'],
        ['Birds, livestock, creeping things, man (1:20–27)', '*Birds, livestock, animals... and all mankind* perished (7:21)'],
        ['*Breathed the breath of life into his nostrils* (2:7)', '*Everything that had the breath of life in its nostrils died* (7:22)'],
      ],
    },
    {
      type: 'p',
      text: 'The list of the dead in 7:21 follows the order of creation: birds, livestock, animals, swarming things, and finally mankind. The world is taken apart in the order it was put together. By the end of the chapter, the earth looks as it did before the second day. Water over everything, and a single vessel on its surface, the way the Spirit of God once hovered over the waters.',
    },
    {
      type: 'quote',
      text: 'They were blotted out from the earth, and only Noah and those with him in the ark remained.',
      by: 'Genesis 7:23',
    },
    {
      type: 'p',
      text: 'The word *remained* (*sha’ar*) gives the Bible one of its great words: the *remnant*. It will return in the prophets, again and again, for the few God keeps through judgment. It starts here, with eight people in a box.',
    },
    {
      type: 'p',
      text: 'The waters *prevailed* for 150 days. The word is a military one: they *grew strong*, they *overpowered*. It is used four times in seven verses. For five months, it looks as though chaos has won.',
    },

    /* ── 7 ─────────────────────────────────────────────── Genesis 8:1–14 */
    { type: 'h', text: 'But God Remembered Noah', ref: 'Genesis 8:1–14', draft: true },
    {
      type: 'quote',
      text: 'But God remembered Noah and all the animals and livestock that were with him in the ark. And God sent a wind over the earth, and the waters began to subside.',
      by: 'Genesis 8:1',
    },
    {
      type: 'p',
      text: 'This is the hinge of the whole story. The flood narrative is built like a mountain: the waters rise, they peak, they fall, and each stage on the way down mirrors a stage on the way up. Seven days, then forty days, then 150 days of rising. Then 150 days, forty days, and seven days of falling. At the summit, with everything underwater, stands one sentence: *But God remembered Noah.*',
    },
    {
      type: 'p',
      text: 'In the Bible, to *remember* is not to recall something forgotten. It is to act on a commitment. *God heard their groaning, and He remembered His covenant with Abraham* (Exodus 2:24), and then He sent Moses. When God remembers, things start to move.',
    },
    {
      type: 'p',
      text: 'And what moves first is a *wind*. The word is *ruach*, the same word as Genesis 1:2: *the Spirit of God was hovering over the surface of the waters*. Wind, breath, Spirit. Over the waters of chaos, God’s *ruach* moves again. If chapter 7 was creation undone, chapter 8 is creation beginning a second time.',
    },
    {
      type: 'list',
      ordered: true,
      items: [
        'A *ruach* over the waters (8:1; 1:2).',
        'The waters above and below are closed off again (8:2; 1:6–8).',
        'The dry land appears (8:5, 13; 1:9).',
        'The birds go out (8:7–12; 1:20).',
        'The animals come out on the ground (8:17; 1:24).',
        'Mankind steps onto the earth and is told to *be fruitful and multiply* (8:17; 9:1; 1:28).',
      ],
    },
    {
      type: 'p',
      text: 'Then the birds. Noah opens the window and sends out a raven, which flies back and forth and never returns to him. Then a dove, which *found no place to rest her foot* and came back. *So he reached out his hand and brought her back inside the ark* (8:9). The man who has said nothing for three chapters is described in one gentle gesture.',
    },
    {
      type: 'p',
      text: 'Seven days later the dove returns *with a freshly plucked olive leaf in her beak*. Not dry land yet, but something growing on it. Life has come back before the ground is fully dry. Seven days after that she does not return at all. She has found a place to rest.',
    },
    {
      type: 'p',
      text: 'The dates close the loop. The flood began on the seventeenth day of the second month of Noah’s 600th year (7:11). The earth was fully dry on the twenty-seventh day of the second month of his 601st (8:14). **A little more than a year inside the ark. And through all of it, God had not forgotten them.**',
    },

    /* ── 8 ─────────────────────────────────────────────── Genesis 8:15–22 */
    { type: 'h', text: 'A New Beginning', ref: 'Genesis 8:15–22', draft: true },
    {
      type: 'quote',
      text: 'Come out of the ark, you and your wife, along with your sons and their wives.',
      by: 'Genesis 8:16',
    },
    {
      type: 'p',
      text: 'Noah went in when God said go in. He comes out when God says come out. Not when the dove stopped returning. Not when he removed the covering and saw the ground was dry. He waited for the word.',
    },
    {
      type: 'p',
      text: 'And the first thing he does on the new earth is build an altar.',
    },
    {
      type: 'quote',
      text: 'Then Noah built an altar to the LORD. And taking from every kind of clean animal and clean bird, he offered burnt offerings on the altar.',
      by: 'Genesis 8:20',
    },
    {
      type: 'p',
      text: 'It is the first altar in the Bible. Cain and Abel brought offerings, but no altar is mentioned. Noah builds one, and now the reason for the seven pairs becomes clear. The first act of the new world is worship. The first thing built is not a house, or a city, but a place to meet God.',
    },
    {
      type: 'p',
      text: 'The LORD *smelled the pleasing aroma*. In Hebrew that is *re’ach ha-nichoach*, the aroma of rest, of soothing. It sounds like Noah’s name. Lamech had hoped this son would bring *comfort* from the cursed ground (5:29). Here, through his offering, rest rises to God.',
    },
    {
      type: 'quote',
      text: 'Never again will I curse the ground because of man, even though every inclination of his heart is evil from his youth. And never again will I destroy all living creatures as I have done.',
      by: 'Genesis 8:21',
    },
    {
      type: 'p',
      text: 'Read this sentence beside 6:5.',
    },
    {
      type: 'table',
      head: ['Before the flood (6:5–7)', 'After the flood (8:21)'],
      rows: [
        ['*Every inclination of the thoughts of his heart was altogether evil*', '*Every inclination of his heart is evil from his youth*'],
        ['Therefore: *I will blot out man*', 'Therefore... *never again will I destroy*'],
      ],
    },
    {
      type: 'p',
      text: 'The diagnosis has not changed. The flood did not fix the human heart. The same sentence that justified the judgment now sits inside a promise never to repeat it. **What has changed is not man. What has changed is that God has committed Himself to bearing with man.** The reason is not given here; Genesis will spend the rest of its pages showing how God intends to deal with that heart some other way.',
    },
    {
      type: 'quote',
      text: 'As long as the earth endures, seedtime and harvest, cold and heat, summer and winter, day and night shall never cease.',
      by: 'Genesis 8:22',
    },
    {
      type: 'p',
      text: 'The chapter closes with a poem, and the poem is a promise of rhythm. Planting and harvest. Cold and heat. Every sunrise since has been a quiet keeping of this word.',
    },

    /* ── 9 ─────────────────────────────────────────────── Genesis 6–8 · conclusion */
    { type: 'h', text: 'The Meaning of the Flood', ref: 'Genesis 6–8', draft: true },
    {
      type: 'p',
      text: 'This book began with a question: why did God judge the world, and how did He preserve life? Genesis 6–8 answers both, and the answers are tied together.',
    },
    {
      type: 'sub',
      text: 'Why God judged',
    },
    {
      type: 'list',
      items: [
        'Because the human heart had become *altogether evil all the time* (6:5).',
        'Because the earth was *full of violence* (6:11), the harm Cain began now covering the world.',
        'Because humanity had already been ruining the earth, and judgment handed it over to that ruin (6:12–13).',
        'And not coldly: *He was grieved in His heart* (6:6).',
      ],
    },
    {
      type: 'sub',
      text: 'How God preserved life',
    },
    {
      type: 'list',
      items: [
        'By grace that came first: *Noah found favor* (6:8).',
        'Through one man who walked with Him (6:9).',
        'By a covenant promised before the rain (6:18).',
        'By a vessel He designed and a door He shut (6:14; 7:16).',
        'By remembering, when everything was underwater (8:1).',
      ],
    },
    {
      type: 'p',
      text: 'The same waters did both. They destroyed the world and they lifted the ark. Peter sees the gospel in exactly that shape.',
    },
    {
      type: 'quote',
      text: 'In the ark a few people, only eight souls, were saved through water. And this water symbolizes the baptism that now saves you also—not the removal of dirt from the body, but the pledge of a clear conscience toward God—through the resurrection of Jesus Christ.',
      by: '1 Peter 3:20–21',
    },
    {
      type: 'p',
      text: 'Noah was not saved *from* the water so much as *through* it. He went down into the judgment inside the ark and came up on the other side into a new world. Baptism tells the same story about Christ. He went down into death, and those who are in Him come up into new life. **The ark is a picture of being carried through judgment by something God provided.**',
    },
    {
      type: 'p',
      text: 'And the flood is a warning about the future as well as the past. Jesus says, *As it was in the days of Noah, so will it be at the coming of the Son of Man* (Matthew 24:37). Peter says that *the world of that time perished in the flood*, and *the present heavens and earth are reserved for fire* (2 Peter 3:6–7). The flood is the Bible’s first picture of a final judgment, and its first picture of a way through it.',
    },
    {
      type: 'p',
      text: 'But the flood also left something unsolved. The heart God judged in 6:5 is the heart He promises to bear with in 8:21. The water washed the earth. It could not wash the heart. Noah steps out onto a clean world carrying the same human nature that ruined the old one.',
    },
    {
      type: 'p',
      text: '**The flood answered the question of what sin deserves. It did not answer the question of how a sinner can be changed. That question is still open when the doors of the ark swing wide.**',
    },
  ],
};

import type { Thought } from './index';

// Book VI · Genesis 10–11. Continues The New World (the-new-world.ts) and concludes the Genesis 1–11 series.
// The series stops at Genesis 11:32: no Genesis 12 chapter. Genesis 12:2 may be quoted only as a preview
// in the final chapter (Babel: “let us make a name for ourselves”, 11:4 · Abram: “I will make your name great”, 12:2).
// Central question: How did humanity become divided into nations, and why does the biblical narrative turn toward one family?
// Scripture quotations: BSB.
//
// Every chapter starts as a draft (draft: true): hidden on the live site, shown with a "Draft" marker
// in dev. Write the chapter's blocks under its heading (quote, p, sub, list, table, figure), then
// delete `draft: true` to publish that chapter. The book goes live with its first published chapter;
// update `date` when it does.
export const riseOfNations: Thought = {
  slug: 'the-rise-of-nations',
  kind: 'christianity',
  title: 'The Rise of Nations',
  dek: 'From Babel to the Family of Abram',
  date: '2026-11-02',
  body: [
    /* ── 1 ─────────────────────────────────────────────── Genesis 10:1–32 */
    { type: 'h', text: 'The Table of Nations', ref: 'Genesis 10:1–32', draft: true },
    {
      type: 'quote',
      text: 'All these are the clans of Noah’s sons, according to their generations and nations. From these the nations of the earth spread out after the flood.',
      by: 'Genesis 10:32',
    },
    {
      type: 'p',
      text: 'Genesis 10 is a map written as a family tree. Most readers skim it. It is worth slowing down, because it is one of the most remarkable chapters in the ancient world.',
    },
    {
      type: 'p',
      text: 'God told Noah’s family to *fill the earth* (9:1). Genesis 10 shows it happening. Each of the three sons becomes the head of a cluster of peoples, and each cluster moves in a different direction.',
    },
    {
      type: 'table',
      head: ['Son', 'Some descendants', 'Roughly where', 'Names'],
      rows: [
        ['Japheth', 'Javan (the Ionian Greeks), Madai (the Medes), Gomer, Tarshish', 'North and west: Anatolia, the Aegean, the *maritime peoples* (10:5)', '14'],
        ['Ham', 'Cush, Mizraim (Egypt), Put, Canaan; Nimrod; the Philistines', 'South and southwest: Africa, Arabia, Canaan, and Mesopotamia’s first cities', '30'],
        ['Shem', 'Elam, Asshur (Assyria), Aram, Eber, Joktan', 'The middle and east: Mesopotamia, Syria, Arabia', '26'],
      ],
    },
    {
      type: 'p',
      text: 'Count the names and they come to seventy. The number is probably not an accident. When Jacob’s family went down to Egypt, *the members of Jacob’s family who went to Egypt were seventy in all* (46:27). Seventy nations of the world, and seventy souls of Israel. Long before Israel exists, Genesis has already set it alongside every other people on earth.',
    },
    {
      type: 'p',
      text: 'Notice the order. Japheth first, then Ham, then Shem, though Shem is the older brother (10:21). Genesis does this throughout: it deals with the side lines first and then turns to the line the story will follow. Cain before Seth. Ishmael before Isaac. Esau before Jacob. Shem is listed last because Shem is where the story is going.',
    },
    {
      type: 'p',
      text: 'And notice the tone. Egypt, Assyria, Babylon, and the Philistines will all be Israel’s enemies. Here they are simply relatives. No nation is described with contempt. No people is left off the map. **Before the Bible tells the story of one chosen family, it insists that every family on earth comes from the same three brothers, and that God knows all their names.**',
    },
    {
      type: 'quote',
      text: 'From one man He made every nation of men, that they should inhabit the whole earth; and He determined their appointed times and the boundaries of their lands.',
      by: 'Acts 17:26',
    },
    {
      type: 'p',
      text: 'One more detail. Three times the chapter says the nations spread out *according to their languages* (10:5, 20, 31). Many languages already. Yet the next chapter opens with *the whole world had one language*. Genesis 10 and 11 are not in strict time order. Chapter 10 shows the result: the nations spread across the earth. Chapter 11 goes back and shows how it happened.',
    },

    /* ── 2 ─────────────────────────────────────────────── Genesis 10:8–12 */
    { type: 'h', text: 'The First Kingdoms', ref: 'Genesis 10:8–12', draft: true },
    {
      type: 'quote',
      text: 'Cush was the father of Nimrod, who began to be a mighty one on the earth. He was a mighty hunter before the LORD.',
      by: 'Genesis 10:8–9',
    },
    {
      type: 'p',
      text: 'In the middle of the list, the genealogy stops for a story. Only one person in the Table of Nations gets one. His name is Nimrod.',
    },
    {
      type: 'p',
      text: 'Nimrod *began to be a mighty one*. The word is *gibbor*, the same word used for the *mighty men of old* in 6:4, the men of renown before the flood. The flood washed the world, and within a few generations the mighty are back.',
    },
    {
      type: 'p',
      text: 'He is *a mighty hunter before the LORD*. That phrase can be read two ways. *Before the LORD* may simply mean he was famous, great in God’s sight, a proverb people repeated. Or it may mean *in the face of* the LORD, in defiance. Some have also heard in his name the Hebrew *marad*, *we will rebel*. The text does not settle it. But it does tell us what he did next.',
    },
    {
      type: 'quote',
      text: 'His kingdom began in Babylon, Erech, Accad, and Calneh, in the land of Shinar. From that land he went forth into Assyria, where he built Nineveh.',
      by: 'Genesis 10:10–11',
    },
    {
      type: 'p',
      text: 'This is the first time the word *kingdom* appears in the Bible. And it is the first time the name *Babylon* appears. Erech is Uruk, one of the oldest cities in the world. Accad is Akkad, the seat of the first great Mesopotamian empire. Nimrod is the Bible’s portrait of the first empire builder.',
    },
    {
      type: 'p',
      text: 'Follow the line of growth across Genesis.',
    },
    {
      type: 'list',
      ordered: true,
      items: [
        'Cain builds a *city* and names it after his son (4:17).',
        'Lamech claims the right to *avenge* himself seventy-sevenfold (4:24).',
        'The *mighty men* take what they want and become famous (6:4).',
        'Nimrod, a *mighty one*, builds a *kingdom* of many cities (10:10–12).',
      ],
    },
    {
      type: 'p',
      text: 'City, then vengeance, then might, then empire. Each step gathers more people under more power. And look at the two cities named: Babylon and Nineveh. They will become the capitals of the two empires that destroy Israel and Judah. **The Bible’s great oppressors are introduced here, at their founding, as the work of one hunter of men.**',
    },
    {
      type: 'p',
      text: 'Genesis does not condemn Nimrod outright. It does something quieter. It places his kingdom in *the land of Shinar*, and then, in the very next chapter, it takes us back to Shinar to watch what was built there.',
    },

    /* ── 3 ─────────────────────────────────────────────── Genesis 11:1–4 */
    { type: 'h', text: 'The Tower of Babel', ref: 'Genesis 11:1–4', draft: true },
    {
      type: 'quote',
      text: 'Now the whole world had one language and a common form of speech. And as people journeyed eastward, they found a plain in the land of Shinar and settled there.',
      by: 'Genesis 11:1–2',
    },
    {
      type: 'p',
      text: '*Eastward.* In Genesis that direction is never neutral. Adam and Eve were driven out to the east of the garden (3:24). Cain *settled in the land of Nod, east of Eden* (4:16). Lot will choose the plain *toward the east* and end up in Sodom (13:11). Moving east in Genesis means moving further from the presence of God.',
    },
    {
      type: 'p',
      text: 'And they *settled*. God had said *fill the earth* (9:1) and *spread out across the earth* (9:7). They found a plain and stopped.',
    },
    {
      type: 'quote',
      text: 'And they said to one another, “Come, let us make bricks and bake them thoroughly.” So they used brick instead of stone, and tar instead of mortar.',
      by: 'Genesis 11:3',
    },
    {
      type: 'p',
      text: 'The narrator pauses to explain building materials, the way someone from a land of stone would explain a foreign technique. In Canaan, you built with stone. In Mesopotamia, with no stone to quarry, you baked mud into bricks. It is a real innovation: a manufactured material that let people build higher than ever before. Babel begins with a technology.',
    },
    {
      type: 'p',
      text: 'The Hebrew is full of sound-play: *nilbenah levenim*, *let us brick bricks*; *chemar* (tar) and *chomer* (mortar). The words stack the way the bricks do.',
    },
    {
      type: 'quote',
      text: '“Come,” they said, “let us build for ourselves a city with a tower that reaches to the heavens, that we may make a name for ourselves and not be scattered over the face of all the earth.”',
      by: 'Genesis 11:4',
    },
    {
      type: 'p',
      text: 'One sentence holds the whole project. Read it slowly.',
    },
    {
      type: 'list',
      items: [
        '*Let us build for ourselves.* For ourselves.',
        '*A city with a tower that reaches to the heavens.* Upward, toward God’s realm, on our own terms.',
        '*That we may make a name for ourselves.* Not receive a name. Make one.',
        '*And not be scattered.* The exact opposite of what God told them to do.',
      ],
    },
    {
      type: 'p',
      text: 'The tower was likely a ziggurat, the stepped temple-towers of Mesopotamia. Babylon’s great ziggurat was called *Etemenanki*: *the house of the foundation of heaven and earth*. These towers were often understood as stairways where heaven and earth met, where a god could come down to his temple. The builders of Babel wanted access to heaven, built by their own hands.',
    },
    {
      type: 'p',
      text: 'Notice what is absent from their speech. God. He is never mentioned. It is not that they are openly at war with Him. It is that the whole plan is made without Him, and against His word, and for their own glory. **Babel is not a tower of atheists. It is a tower of people who want heaven on their own terms.**',
    },
    {
      type: 'p',
      text: 'And the motive is fear. *Lest we be scattered.* The first city was built by a man afraid of being a wanderer (4:12–17). The great city is built by a people afraid of being dispersed. Unity becomes a fortress against the command of God.',
    },

    /* ── 4 ─────────────────────────────────────────────── Genesis 11:5–9 */
    { type: 'h', text: 'Let Us Go Down', ref: 'Genesis 11:5–9', draft: true },
    {
      type: 'quote',
      text: 'Then the LORD came down to see the city and the tower that the sons of men were building.',
      by: 'Genesis 11:5',
    },
    {
      type: 'p',
      text: 'There is quiet humor here. The tower *reaches to the heavens*. And the LORD has to *come down* to see it. From where God stands, the greatest structure humanity has ever built is too small to see without stooping. *The One enthroned in heaven laughs* (Psalm 2:4).',
    },
    {
      type: 'p',
      text: 'And notice who is building: *the sons of men*. They wanted a name. Genesis gives them none. They are just *the sons of adam*, the children of dust.',
    },
    {
      type: 'quote',
      text: 'If they have begun to do this as one people speaking the same language, then nothing they devise will be beyond them. Come, let Us go down and confuse their language, so that they will not understand one another’s speech.',
      by: 'Genesis 11:6–7',
    },
    {
      type: 'p',
      text: 'God is not threatened. He is diagnosing. What humanity can accomplish when it is united around itself has no natural limit, and Genesis has already shown what the human heart devises when nothing restrains it (6:5). A united humanity organized against God is not a utopia. It is the world before the flood, with better tools.',
    },
    {
      type: 'p',
      text: 'Then God answers their words with His own. They said *Come, let us make bricks* (11:3) and *Come, let us build* (11:4). God says *Come, let Us go down* (11:7). The same Hebrew word, *havah*. Their *let us* is met by His.',
    },
    {
      type: 'quote',
      text: 'That is why it is called Babel, for there the LORD confused the language of the whole world, and from that place the LORD scattered them over the face of all the earth.',
      by: 'Genesis 11:9',
    },
    {
      type: 'p',
      text: 'In Babylon’s own language, *Bab-ili* meant *gate of god*. Genesis hears the name differently. *Babel* sounds like the Hebrew *balal*, to confuse, to mix up. The city that called itself the gate of god is renamed *confusion*.',
    },
    {
      type: 'p',
      text: 'The judgment fits the sin exactly.',
    },
    {
      type: 'table',
      head: ['They wanted', 'They received'],
      rows: [
        ['One language to work together (11:1)', 'Languages they could not understand (11:7)'],
        ['To reach the heavens (11:4)', 'The LORD came down (11:5)'],
        ['A name (11:4)', 'The name *Babel*: confusion (11:9)'],
        ['Not to be scattered (11:4)', '*The LORD scattered them over the face of all the earth* (11:8)'],
      ],
    },
    {
      type: 'p',
      text: 'But this judgment is also mercy. The scattering accomplishes what God commanded in the first place: the earth is filled. And it breaks up a concentration of power that, by God’s own description, had no limit. **The confusion of languages is not God destroying humanity. It is God interrupting it, before it could become the world of Genesis 6 again.** He had promised never to flood the earth. At Babel, He chose a gentler way to stop it.',
    },
    {
      type: 'p',
      text: 'The New Testament tells the reversal. At Pentecost, people *from every nation under heaven* heard the apostles, and *each one heard them speaking his own language* (Acts 2:5–6). God did not undo Babel by restoring one language. He let the gospel be heard in all of them. And at the end, John sees *a multitude too large to count, from every nation and tribe and people and tongue, standing before the throne* (Revelation 7:9). The nations are not erased. They are gathered.',
    },

    /* ── 5 ─────────────────────────────────────────────── Genesis 11:10–26 */
    { type: 'h', text: 'The Generations of Shem', ref: 'Genesis 11:10–26', draft: true },
    {
      type: 'quote',
      text: 'This is the account of Shem. Two years after the flood, when Shem was 100 years old, he became the father of Arphaxad.',
      by: 'Genesis 11:10',
    },
    {
      type: 'p',
      text: 'After Babel, Genesis narrows. The whole world has been scattered across chapter 10. Now the story picks up a single line, the line of Shem, and follows it name by name.',
    },
    {
      type: 'p',
      text: 'The shape is familiar. Genesis 5 traced ten generations from Adam to Noah. Genesis 11 traces ten generations from Shem to Abram. Each list ends with a man who has three sons, and each of those men is a turning point: Noah through the flood, Abram into the promise.',
    },
    {
      type: 'p',
      text: 'But something is missing. Genesis 5 closed every life with *and then he died*. Genesis 11 never says it. Each entry simply ends: *and had other sons and daughters*. Death is still real; these men all die. But the refrain is gone. The emphasis has shifted from the grave to the line. The question is no longer *will they die?* but *where is this going?*',
    },
    {
      type: 'p',
      text: 'The other thing that changes is the numbers.',
    },
    {
      type: 'table',
      head: ['Name', 'Age at son’s birth', 'Total years'],
      rows: [
        ['Shem', '100', '600'],
        ['Arphaxad', '35', '438'],
        ['Shelah', '30', '433'],
        ['Eber', '34', '464'],
        ['Peleg', '30', '**239**'],
        ['Reu', '32', '239'],
        ['Serug', '30', '230'],
        ['Nahor', '29', '**148**'],
        ['Terah', '70', '205'],
      ],
    },
    {
      type: 'p',
      text: 'Lifespans before the flood ran to nine hundred years. After it, they fall: six hundred, then four hundred, then, sharply, two hundred. The drop comes at Peleg, *because in his days the earth was divided* (10:25). The word *peleg* means *division*. Many readers connect his name to the scattering at Babel. The world splits, and human life shortens. By Nahor, a man lives less than a hundred and fifty years. The long age of the first world is over.',
    },
    {
      type: 'p',
      text: 'Two names stand out. Eber, whose name lies behind the word *Hebrew* (*’ivri*), so that Genesis had already flagged Shem as *the forefather of all the sons of Eber* (10:21). And Peleg, whose line the chapter follows, rather than his brother Joktan’s, whose thirteen sons were listed and left behind in chapter 10.',
    },
    {
      type: 'p',
      text: 'Add up the years, on the plainest reading of the numbers, and the generations overlap remarkably. Noah lived 350 years after the flood (9:28), long enough to see the birth of Abram. Shem, who walked off the ark, would still have been alive through most of Abram’s life. (Some genealogies in Scripture skip generations, and Luke 3:36 includes a Cainan not named here, so these sums are a reading, not a certainty.) Either way, the line is close and unbroken. **Between the flood and Abram stands not a vast darkness, but a family that remembered.**',
    },
    {
      type: 'quote',
      text: 'When Terah was 70 years old, he became the father of Abram, Nahor, and Haran.',
      by: 'Genesis 11:26',
    },

    /* ── 6 ─────────────────────────────────────────────── Genesis 11:27–32 */
    { type: 'h', text: 'The Family of Abram', ref: 'Genesis 11:27–32', draft: true },
    {
      type: 'quote',
      text: 'But Sarai was barren; she had no children.',
      by: 'Genesis 11:30',
    },
    {
      type: 'p',
      text: 'The last section of Genesis 1–11 is a portrait of one family. And nearly everything in it is a dead end.',
    },
    {
      type: 'list',
      items: [
        'A son dies young. *Haran died in his native land, in Ur of the Chaldeans*, before his father (11:28).',
        'A wife cannot have children. *Sarai was barren; she had no children* (11:30). The verse says it twice.',
        'A journey stops halfway. They *set out from Ur... for the land of Canaan. But when they arrived in Haran, they settled there* (11:31).',
        'A father dies. *Terah lived 205 years, and he died in Haran* (11:32).',
      ],
    },
    {
      type: 'p',
      text: 'Ur of the Chaldeans was one of the great cities of southern Mesopotamia, a center of moon worship. And Joshua, centuries later, will remind Israel exactly where this family came from: *Long ago your fathers, including Terah the father of Abraham and Nahor, lived beyond the Euphrates and worshiped other gods* (Joshua 24:2). Abram’s family was not a remnant of the faithful. It was an ordinary family of idol worshipers from the land of Babel.',
    },
    {
      type: 'p',
      text: 'Terah sets out for Canaan. Genesis does not say why. But he does not arrive. He *settled* in Haran, the same verb used of the builders of Babel, who *settled* on the plain of Shinar (11:2). The journey stalls. (The city Haran and Abram’s brother Haran are spelled differently in Hebrew; the echo is in English only.)',
    },
    {
      type: 'p',
      text: 'Now put the two scenes of Genesis 11 side by side. At Babel: a whole united humanity, one language, a city, a tower, a plan to make a name. In Haran: one small family, one dead son, a barren wife, a stalled journey, and a father’s grave.',
    },
    {
      type: 'p',
      text: '**By every human measure, the future belongs to Babel.** Babel has numbers, technology, ambition, and a name. Terah’s family has nothing that could carry a future. Its line is about to end with a woman who cannot have a child.',
    },
    {
      type: 'p',
      text: 'And that is exactly the line God chooses. Paul describes Abraham’s faith as facing *the lifelessness of Sarah’s womb* and trusting *the God who gives life to the dead and calls into being what does not yet exist* (Romans 4:17, 19). Genesis 11:30 is not an incidental detail. It is the condition the next chapter is about to answer. The promise of a great nation is going to be made to a man whose wife has no children.',
    },

    /* ── 7 ─────────────────────────────────────────────── Genesis 10–11 · conclusion — and of the whole Genesis 1–11 study */
    { type: 'h', text: 'From Babel to Abraham', ref: 'Genesis 10–11', draft: true },
    {
      type: 'p',
      text: 'This book began with a question: how did humanity become divided into nations, and why does the biblical narrative turn toward one family?',
    },
    {
      type: 'p',
      text: 'The first half is answered at Babel. Humanity was meant to fill the earth under God’s blessing. Instead, it gathered in one place to make its own name. God scattered it, and from that scattering came the peoples of Genesis 10: seventy nations, each with its own land and language. The nations are the result of both blessing and judgment. They are God’s design for a filled earth, and the scars of a refusal.',
    },
    {
      type: 'p',
      text: 'The second half is answered by the next page. Genesis 11 ends, and the very next words are these:',
    },
    {
      type: 'quote',
      text: 'I will make you into a great nation, and I will bless you; I will make your name great, so that you will be a blessing.',
      by: 'Genesis 12:2',
    },
    {
      type: 'p',
      text: 'Read it beside Babel.',
    },
    {
      type: 'table',
      head: ['Babel (Genesis 11)', 'Abram (Genesis 12)'],
      rows: [
        ['*Let us make a name for ourselves* (11:4)', '*I will make your name great* (12:2)'],
        ['*Not be scattered* (11:4)', '*Go* from your country and your father’s household (12:1)'],
        ['A city built by human hands', '*The city with foundations, whose architect and builder is God* (Hebrews 11:10)'],
        ['Humanity reaching up to heaven', 'God speaking down to a man'],
        ['One people gathered against God', 'One family sent for the sake of *all the families of the earth* (12:3)'],
      ],
    },
    {
      type: 'p',
      text: 'Everything Babel tried to seize, God gives to Abram as a gift: the name, the greatness, the future. And the reason God turns to one family is not to abandon the nations. It is to reach them. *All the families of the earth will be blessed through you* (12:3). Paul calls this sentence the gospel itself: *The Scripture foresaw that God would justify the Gentiles by faith, and foretold the gospel to Abraham: “All nations will be blessed through you”* (Galatians 3:8). **God narrows the story to one family so that He can widen the blessing to every family.**',
    },
    {
      type: 'sub',
      text: 'Genesis 1–11',
    },
    {
      type: 'p',
      text: 'This is also the end of the whole study. Six books, eleven chapters of Genesis, from *In the beginning* to a grave in Haran.',
    },
    {
      type: 'table',
      head: ['Book', 'Genesis', 'What humanity does', 'What God does'],
      rows: [
        ['The Book of Creation', '1–2', 'Receives life, a garden, and a calling', 'Creates, blesses, and calls it very good'],
        ['The Book of Man', '3–4:16', 'Doubts, hides, blames, and kills', 'Seeks, questions, clothes, and promises a seed'],
        ['The First Civilization', '4:17–5', 'Builds cities, makes music, boasts of vengeance, dies', 'Is called upon; takes Enoch'],
        ['The Great Flood', '6–8', 'Fills the earth with violence', 'Grieves, judges, preserves, and remembers'],
        ['The New World', '9', 'Falls again in the first story after the flood', 'Binds Himself in covenant to every living thing'],
        ['The Rise of Nations', '10–11', 'Gathers to make a name for itself', 'Scatters the proud, and turns toward one barren family'],
      ],
    },
    {
      type: 'p',
      text: 'Read down the third column and it is the story we have been following since Genesis 3. The human line descends. Every fresh start, the new family after Eden, the new world after the flood, the new nations after Babel, ends in the same place: the heart *evil from his youth*. Neither exile nor water nor scattering changes it.',
    },
    {
      type: 'p',
      text: 'Read down the fourth column and it is a different story. God never leaves. He judges, really and seriously: the exile, the flood, the confusion of tongues. But judgment is never the only thing He does. Every judgment in Genesis 1–11 comes with a preservation inside it. A garment for Adam. A mark for Cain. An ark for Noah. A bow in the clouds. A family in Haran.',
    },
    {
      type: 'p',
      text: 'Listen also to what God says, book by book.',
    },
    {
      type: 'list',
      items: [
        'To an empty world: *Let there be light* (1:3).',
        'To a fallen man: *Where are you?* (3:9).',
        'To an angry brother: *Sin is crouching at your door... but you must master it* (4:7).',
        'To a righteous man: *Make for yourself an ark* (6:14).',
        'To the whole earth: *Never again* (9:11).',
        'And to a man from Ur with a barren wife: *Go* (12:1).',
      ],
    },
    {
      type: 'p',
      text: 'Genesis 1–11 is the story of a world that could not save itself, and a God who kept speaking to it. The tower humanity built to reach heaven was abandoned half-finished. At the end of the Bible, a different city appears: *the holy city, the new Jerusalem, coming down out of heaven from God* (Revelation 21:2). Babel tried to build up. God’s city comes down.',
    },
    {
      type: 'p',
      text: 'The study ends at 11:32, with Terah’s grave and a family stalled halfway to a promise they have not yet heard. That is the right place to stop. Genesis 1–11 asks the question. Everything after Genesis 12 is God’s answer.',
    },
    {
      type: 'p',
      text: '**Humanity tried to make a name for itself and was scattered. God chose a man with no future, and promised to make his name great. The rest of the Bible is the story of how that one name became a blessing to every nation.**',
    },
  ],
};

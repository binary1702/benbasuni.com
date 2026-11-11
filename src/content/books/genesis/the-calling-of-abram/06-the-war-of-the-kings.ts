import type { BookChapter } from '../../types';

const g = (c: number, v: number, label = `${c}:${v}`) => `[${label}](https://www.shavat.app/ot/genesis/creation/${c}#v${v})`;

const chapter: BookChapter = {
  slug: 'the-war-of-the-kings',
  title: 'The War of the Kings',
  ref: 'Genesis 14:1–16',
  draft: true,
  blocks: [
    { type: 'figure', name: 'abram-war' },
    { type: 'quote', text: 'And when Abram heard that his relative had been captured, he mobilized the 318 trained men born in his household, and they set out in pursuit as far as Dan.', by: 'Genesis 14:14' },
    { type: 'p', text: 'Genesis 14 does not sound like the chapters around it. It opens with the names of kings, the years of a subjection and a revolt, and a list of the peoples they defeated. This is the first war recorded in Scripture. Until now the story of Abram has been the story of a household: a tent, an altar, a quarrel over pasture. Suddenly the wider world breaks in.' },
    { type: 'p', text: 'The nations mapped in Genesis 10 have not gone anywhere. They have kings, armies, and ambitions. God has promised to make Abram a great nation, and He has made that promise in a world that already has great nations. The question of this chapter is what the promise has to do with the politics of that world.' },

    { type: 'sub', text: 'Four Kings Against Five' },
    { type: 'p', text: `Four kings come from the east: Amraphel of Shinar, Arioch of Ellasar, Chedorlaomer of Elam, and Tidal of Goiim. Shinar is the land of Babel (${g(10, 10)}; ${g(11, 2)}). Elam lay beyond Mesopotamia, in what is now southwestern Iran, and its name appears among the sons of Shem (${g(10, 22)}). *Goiim* is simply the Hebrew word for *nations*.` },
    { type: 'p', text: 'Scholars have tried for more than a century to identify these four with rulers known from other ancient records. None of the identifications is secure. The older proposal that Amraphel was Hammurabi of Babylon is no longer widely held. What can be said is that the names are of the kinds found in those regions. Beyond that, Genesis is our only source for this campaign, and we should say so.' },
    { type: 'p', text: `Against them stand five kings of the plain: the kings of Sodom, Gomorrah, Admah, Zeboiim, and Bela, which is Zoar. *For twelve years they had been subject to Chedorlaomer, but in the thirteenth year they rebelled* (${g(14, 4)}). The cities of the well-watered plain were vassals, paying tribute to a distant power. When Lot looked at the plain, Genesis told us about its water. It tells us now about its politics.` },
    { type: 'p', text: `In the fourteenth year Chedorlaomer comes to collect. Before he reaches the five cities, his army sweeps south through the country east of the Jordan, along the route later known as the King’s Highway (Numbers 20:17). It defeats the Rephaites, the Zuzites, the Emites, and the Horites, then turns back by way of Kadesh and strikes the Amalekites and the Amorites (${g(14, 5, '14:5–7')}). Deuteronomy remembers some of these peoples. The Emites were *a people great and many, as tall as the Anakites* (Deuteronomy 2:10). This is an army that has just crushed nations remembered as giants.` },
    { type: 'p', text: `Then it meets the five kings in the Valley of Siddim. Genesis reports the battle in a single verse. *The Valley of Siddim was full of tar pits, and as the kings of Sodom and Gomorrah fled, some men fell into the pits, but the survivors fled to the hill country* (${g(14, 10)}). The victors take everything in Sodom and Gomorrah, including the food, and go on their way.` },
    { type: 'p', text: 'The plain that looked like the garden of the LORD turns out to be a battlefield full of tar pits.' },

    { type: 'sub', text: 'They Also Carried Off Lot' },
    { type: 'quote', text: 'They also carried off Abram’s nephew Lot and his possessions, since Lot was living in Sodom.', by: 'Genesis 14:12' },
    { type: 'p', text: 'This verse is the reason the war is in the Bible. Scripture does not usually report the campaigns of Mesopotamian kings. It reports this one because of a single captive.' },
    { type: 'p', text: `*Since Lot was living in Sodom.* When we last saw him, he had pitched his tent toward Sodom (${g(13, 12)}). Now he lives in it. His possessions, which were the reason he and Abram could not stay together (${g(13, 6)}), are carried away with him.` },
    { type: 'p', text: '**Lot chose the plain for its wealth, and its wealth made it a prize.**' },

    { type: 'sub', text: 'Abram the Hebrew' },
    { type: 'p', text: `A survivor brings the news to *Abram the Hebrew* (${g(14, 13)}). This is the first time the word *Hebrew* appears in Scripture. Its origin is uncertain. It may derive from Eber, the ancestor named in the line of Shem (${g(10, 21)}). It may come from a verb meaning *to cross over*, so that a Hebrew is one who has come from the other side, as Abram had come from beyond the Euphrates. In either case it is the kind of name a man is given by his neighbors. It marks him as a foreigner.` },
    { type: 'p', text: 'He is not, however, without friends. Abram is living by the oaks of Mamre the Amorite, and Mamre and his brothers Eshcol and Aner are *bound by treaty to Abram*. The stranger has made allies among the people of the land.' },
    { type: 'p', text: 'Now consider his position. By any ordinary reckoning, Abram owes Lot nothing. Lot took the better land. Lot chose Sodom. The army that holds him has just defeated every people between Ashteroth-karnaim and the desert, and then five kings together. Abram is a herdsman with a household. He has been promised that he will become a great nation, and he has no son. To chase a victorious army across the country by night is a good way to end the story before it begins.' },
    { type: 'p', text: 'Genesis records no deliberation. *When Abram heard that his relative had been captured, he mobilized.*' },
    { type: 'p', text: `The word translated *relative* is again the Hebrew word for *brother*, the same word Abram used when he said to Lot, *we are kinsmen* (${g(13, 8)}). A reader of Genesis remembers the first man who was asked about his brother. *Am I my brother’s keeper?* [Cain said](/books/the-first-world/adam-cain-lamech/am-i-my-brothers-keeper) (${g(4, 9)}). Abram gives the opposite answer, and he gives it without speaking.` },
    { type: 'p', text: '**Cain asked whether he was his brother’s keeper. Abram went after his.**' },

    { type: 'sub', text: 'Three Hundred and Eighteen' },
    { type: 'p', text: 'Abram musters 318 trained men, all born in his own household. The number tells us something about the size of that household. If it could supply more than three hundred fighting men, then with women, children, and the old it may well have numbered over a thousand. That is an estimate, but the man living in a tent at Hebron is the head of a considerable clan. The Hebrew word for *trained* occurs nowhere else in the Old Testament, and the number itself is unusually exact.' },
    { type: 'p', text: `He pursues as far as Dan, at the northern end of the land. The name belongs to a later time; the city was called Laish until the tribe of Dan took it (Judges 18:29), and Genesis uses the name its readers knew, as it did with Bethel. From Hebron to Dan is well over a hundred miles. There Abram divides his forces, attacks by night, routs the army, and chases it to Hobah, north of Damascus. *He retrieved all the goods, as well as his relative Lot and his possessions, together with the women and the rest of the people* (${g(14, 16)}).` },
    { type: 'p', text: `How does a household defeat the army of four kings? In these verses Genesis gives only the tactics: a divided force, darkness, and an enemy weighed down with plunder and captives. The explanation is held for the next scene, where it is spoken by a priest: *blessed be God Most High, who has delivered your enemies into your hand* (${g(14, 20)}).` },
    { type: 'p', text: 'Look at who benefits. Abram went for Lot, but he brings back the people of Sodom and their goods as well. God had said, *you will be a blessing*. In Egypt, Abram’s presence brought plagues on a foreign house. Here it brings rescue to the people of the plain, Sodom among them. The promise to the nations has begun, in a small way, to be kept, and its first beneficiaries are the last people one would have chosen.' },
    { type: 'p', text: `And Lot? Genesis records no word of thanks from him and no decision. The next time we see him, he is sitting in the gateway of Sodom (${g(19, 1)}). He was rescued from Sodom’s enemies. He was not rescued from Sodom. That will take another deliverance, and it too will come on Abraham’s account: *when God destroyed the cities of the plain, He remembered Abraham, and He brought Lot out* (${g(19, 29)}).` },
    { type: 'p', text: 'The call of Abram did not lift him out of history. He lives among kings and their wars, and when war reaches his family, he acts. He risks the promise for the sake of a nephew who had left him for better pasture, and he returns with everything.' },
    { type: 'p', text: '**The promise did not remove Abram from a world of kings and wars. It sent him into it, for the sake of a brother who had left him.**' },
  ],
};

export default chapter;

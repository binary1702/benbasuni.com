import type { BookChapter } from '../../types';

const g = (c: number, v: number, label = `${c}:${v}`) => `[${label}](https://www.shavat.app/ot/genesis/creation/${c}#v${v})`;

const chapter: BookChapter = {
  slug: 'fire-from-heaven',
  title: 'Fire from Heaven',
  ref: 'Genesis 19:23–29',
  blocks: [
    { type: 'figure', name: 'plain-fire' },
    { type: 'quote', text: 'Then the LORD rained down sulfur and fire on Sodom and Gomorrah—from the LORD out of the heavens.', by: 'Genesis 19:24' },
    { type: 'p', text: '*By the time the sun had risen over the land, Lot had reached Zoar.* The sentence is precise about the order. Lot arrives. Then the judgment falls. The angel had said, *I cannot do anything until you reach it*, and nothing was done until he did.' },
    { type: 'p', text: 'The destruction itself is told in two verses. Genesis spends far longer on Abraham’s plea and Lot’s rescue than on the fire. It does not linger over the ruin. The question of this passage is what we are meant to see when we look at it.' },

    { type: 'sub', text: 'From the LORD out of the Heavens' },
    { type: 'p', text: `The narrator repeats the divine name: *the LORD rained down … from the LORD out of the heavens*. He does not want the reader to think of this as a misfortune. The region around the Dead Sea is rich in bitumen and sulfur, and Genesis has already mentioned the tar pits of the Valley of Siddim (${g(14, 10)}). Whatever natural materials were involved, the text is clear about the agent. This is an act of God.` },
    { type: 'p', text: `And it is thorough. *He destroyed these cities and the entire plain, including all the inhabitants of the cities and everything that grew on the ground.* Remember what the plain looked like when Lot first saw it: *well watered like the garden of the LORD* (${g(13, 10)}). The narrator had warned us then, in a parenthesis, that this was *before the LORD destroyed Sodom and Gomorrah*. The parenthesis has now been fulfilled. The garden is ash.` },
    { type: 'p', text: `Genesis has shown this kind of judgment once before. In the days of Noah, the waters came down and covered a world filled with violence. Here fire comes down on cities filled with it. In both cases God investigated first (${g(6, 5)}; ${g(18, 21)}). In both He delayed. In both a household was brought out. **Scripture does not present the destruction of Sodom as a loss of temper. It presents it as a verdict.**` },
    { type: 'p', text: 'From this point on, Sodom becomes a fixed point of reference in the Bible. Moses uses it as a warning to Israel (Deuteronomy 29:23). Isaiah says that without a remnant, *we would have become like Sodom* (Isaiah 1:9). Peter says that God condemned the cities *as an example of what is coming on the ungodly* (2 Peter 2:6). The plain becomes a permanent picture of what final judgment means.' },

    { type: 'sub', text: 'Lot’s Wife' },
    { type: 'quote', text: 'But Lot’s wife looked back, and she became a pillar of salt.', by: 'Genesis 19:26' },
    { type: 'p', text: 'One verse. We do not know her name. She has not spoken in the story. She was taken by the hand and led out of the city with her husband and daughters, and she had been told, *Do not look back*. She looked.' },
    { type: 'p', text: 'Genesis gives no account of what was in her mind, and we should not invent one. But the look itself tells us something. She had been brought out of Sodom. Her attention was still in it. Her home was there, and perhaps other children; the angels had spoken of *sons or daughters* and of sons-in-law. Whatever drew her eyes, she turned toward what was being destroyed and away from where she was being taken.' },
    { type: 'p', text: 'Jesus gives her the shortest sermon in the Gospels. Speaking of the day when the Son of Man is revealed, He says:' },
    { type: 'quote', text: 'Remember Lot’s wife!', by: 'Luke 17:32' },
    { type: 'p', text: 'And He explains: *Whoever tries to save his life will lose it, but whoever loses his life will preserve it* (Luke 17:33). In His reading, the backward look was an attempt to keep hold of a life that had to be let go. She was outside the city. She had not left it.' },
    { type: 'p', text: 'Jesus also describes what the city was doing that morning. *People were eating and drinking, buying and selling, planting and building. But on the day Lot left Sodom, fire and sulfur rained down from heaven* (Luke 17:28–29). None of those activities is a sin. That is His point. Judgment came on an ordinary day, to people absorbed in ordinary things, who had no idea that anything was wrong.' },

    { type: 'sub', text: 'The Place Where He Had Stood' },
    { type: 'quote', text: 'Early the next morning, Abraham got up and returned to the place where he had stood before the LORD. He looked down toward Sodom and Gomorrah and all the land of the plain, and he saw the smoke rising from the land like smoke from a furnace.', by: 'Genesis 19:27–28' },
    { type: 'p', text: 'The scene shifts to the hills above. Abraham rises early and goes back to the spot where he had pleaded for the city. He had asked for fifty, then forty-five, then forty, thirty, twenty, ten. He went home without knowing the answer. Now he looks down and sees it.' },
    { type: 'p', text: 'There were not ten.' },
    { type: 'p', text: 'Genesis does not record a word from Abraham. It does not tell us what he felt. It lets us stand beside him and look. Years earlier, from near this same high country, he had been told to lift up his eyes and look in every direction, and Lot had looked at the same plain and chosen it. Now it is a furnace.' },
    { type: 'p', text: 'As far as the text tells us, Abraham does not know whether Lot is alive. He sees only smoke. From where he stands, his prayer appears to have failed. The city was not spared. He has no way of knowing that anyone escaped.' },

    { type: 'sub', text: 'God Remembered Abraham' },
    { type: 'p', text: 'The narrator knows what Abraham does not, and tells us.' },
    { type: 'quote', text: 'So when God destroyed the cities of the plain, He remembered Abraham, and He brought Lot out of the catastrophe that destroyed the cities where he had lived.', by: 'Genesis 19:29' },
    { type: 'p', text: `This is the key to the whole episode. We might have expected it to say that God remembered Lot. It says that He *remembered Abraham*. The phrase recalls the turning point of the flood: *But God remembered Noah* (${g(8, 1)}). In Scripture, when God remembers, He acts on behalf of the one remembered.` },
    { type: 'p', text: 'Lot was not saved because of his own standing. He hesitated, bargained, and had to be dragged. He was saved because another man had stood before the LORD on his behalf. Abraham had not even mentioned his name.' },
    {
      type: 'table',
      head: ['What Abraham asked', 'What God did'],
      rows: [
        ['Spare the city if fifty righteous are found', 'Agreed'],
        ['Spare it for ten', 'Agreed'],
        ['He stopped asking at ten', 'There were fewer than ten'],
        ['He did not ask for Lot by name', 'God brought Lot out'],
      ],
    },
    { type: 'p', text: 'Abraham’s prayer was not granted in the form he prayed it. The city fell. But the purpose behind the prayer, that the righteous should not be swept away with the wicked, was honored beyond what he had dared to request. **God did not give Abraham what he asked for. He gave him what he was asking for.**' },
    { type: 'p', text: 'This is the second time Lot has been rescued because of Abraham. The first time, Abraham armed his household and pursued four kings to recover him. This time Abraham had no weapon but his voice. And this is what it means, at the smallest scale, for others to be blessed through Abraham. The promise spoke of all the families of the earth. Here it reaches one undeserving nephew and his daughters, standing in a small town at the edge of a burning plain.' },
    { type: 'p', text: '**Abraham looked down and saw only smoke. He did not know that his prayer had already walked out of the city.**' },
  ],
};

export default chapter;

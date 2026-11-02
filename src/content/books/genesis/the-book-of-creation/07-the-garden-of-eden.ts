import type { BookChapter } from '../../types';

const chapter: BookChapter = {
  slug: 'the-garden-of-eden',
  title: 'The Garden of Eden',
  ref: 'Genesis 2:8–17',
  blocks: [
    { type: 'figure', name: 'gen-garden' },
    {
      type: 'quote',
      text: 'And the LORD God commanded him, "You may eat freely from every tree of the garden, but you must not eat from the tree of the knowledge of good and evil."',
      by: 'Genesis 2:16-17',
      link: 'https://www.shavat.app/ot/genesis/creation/2#v16',
    },
    {
      type: 'p',
      text: 'The Garden of Eden is described as a place of abundance. God provides trees that are pleasing to the eye and good for food. He places Adam within the garden and gives him responsibility for its care. Yet within this abundance, God establishes a boundary. Adam may eat from the trees of the garden, with one exception.\n\n**The tree of the knowledge of good and evil.**',
    },
    {
      type: 'p',
      text: 'Notice the order of God’s command. He first gives permission. Adam may eat freely from the trees of the garden. Only afterward does God establish the prohibition. The command is therefore given within a context of provision and abundance. This is significant because God’s relationship with humanity is not initially presented as one of endless restrictions. God provides generously while also establishing a moral boundary.',
    },
    {
      type: 'p',
      text: 'The command introduces the question of obedience. Will humanity trust the Creator’s instruction? Or will humanity attempt to determine good and evil independently of Him? Genesis 3 develops this conflict when the serpent challenges God’s command. Scripture does not fully explain why God chose this particular tree. Christians have offered different interpretations of its significance.',
    },
    {
      type: 'p',
      text: 'However, the narrative clearly establishes that eating from it would constitute disobedience to God’s explicit command. The issue is therefore not simply the acquisition of information. It is humanity’s relationship to divine authority.\n\nThe question of whether human beings will trust God’s wisdom becomes central to the story that follows, which prepares us for the Fall.',
    },
  ],
};

export default chapter;

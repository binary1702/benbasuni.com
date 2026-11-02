import type { BookChapter } from '../../types';

const chapter: BookChapter = {
  slug: 'adams-death',
  title: 'Adam’s Death',
  ref: 'Genesis 5',
  blocks: [
    { type: 'figure', name: 'man-generations' },
    {
      type: 'quote',
      text: 'So Adam lived a total of 930 years, and then he died.',
      by: 'Genesis 5:5',
    },
    {
      type: 'p',
      text: 'Genesis 5 opens by reaching back. *This is the book of the generations of Adam. In the day that God created man, He made him in His own likeness. Male and female He created them, and He blessed them.* It is almost a quotation of Genesis 1:27–28. After everything in chapters 3 and 4, the chapter restates the original dignity: humanity was made in God’s likeness, and blessed.',
    },
    {
      type: 'p',
      text: 'Then verse 3: *When Adam was 130 years old, he had a son in his own likeness, after his own image; and he named him Seth.* God made Adam in God’s likeness. Adam fathers Seth in Adam’s likeness. The image of God is not lost; Genesis 9:6 still grounds the value of human life in it. But it is now passed down through a fallen father. Every child after this bears both.',
    },
    { type: 'p', text: 'The genealogy then settles into a fixed formula.' },
    {
      type: 'list',
      items: [
        'When **X** had lived so many years, he became the father of **Y**.',
        'After that **X** lived so many years and had other sons and daughters.',
        'So **X** lived a total of so many years, and then he died.',
      ],
    },
    {
      type: 'p',
      text: 'Eight times the chapter closes a life with those words: Adam, Seth, Enosh, Kenan, Mahalalel, Jared, Methuselah, and Lamech. The lifespans are immense. Methuselah’s 969 years is the longest in Scripture. But the ending never varies. God had said, *in the day that you eat of it, you will surely die* (2:17). Genesis 5 is the record of that word coming true, one generation at a time. Notice the irony of the form. It is a chapter about life, full of fathers, sons, and *other sons and daughters*, and every paragraph still ends at a grave.',
    },
    {
      type: 'quote',
      text: 'Therefore, just as sin entered the world through one man, and death through sin, so also death was passed on to all men, because all sinned.',
      by: 'Romans 5:12',
    },
    { type: 'p', text: 'The numbers reward attention. Counting the years from Adam’s creation:' },
    {
      type: 'table',
      head: ['Who', 'Years', 'What it means'],
      rows: [
        [
          'Adam',
          '0 – 930',
          'Still alive when Lamech, Noah’s father, was **56 years old**.',
        ],
        ['Seth', '130 – 1042', 'Died just **14 years** before Noah was born.'],
        [
          'Methuselah',
          '687 – 1656',
          'Died in **1656**, the same year Noah turned 600 and the flood came (7:6).',
        ],
        [
          'Noah',
          'born 1056',
          '**600 years old** when the flood came, in year 1656.',
        ],
      ],
    },
    {
      type: 'p',
      text: 'The generations overlapped far more than a list suggests. For most of this line, the first man was a living memory.',
    },
    { type: 'p', text: 'Then the pattern breaks.' },
    {
      type: 'quote',
      text: 'Enoch walked with God, and then he was no more, because God had taken him away.',
      by: 'Genesis 5:24',
    },
    {
      type: 'p',
      text: 'The formula has trained us to expect *and then he died*. Instead we read *he was no more, because God had taken him away*. Twice the text says that Enoch *walked with God* (5:22, 24), the phrase Genesis will use next of Noah (6:9). His life is the shortest in the list, 365 years, and it is the only one that does not end in death.',
    },
    {
      type: 'quote',
      text: 'By faith Enoch was taken up so that he did not see death: “He could not be found, because God had taken him away.” For before he was taken, he was commended as one who pleased God.',
      by: 'Hebrews 11:5',
    },
    {
      type: 'p',
      text: 'Hebrews joins walking with God to pleasing God, and in the next verse adds that *without faith it is impossible to please God* (11:6). And there is an echo worth hearing. In Genesis 3, the man and woman hid from *the LORD God walking in the garden*. In Genesis 5, a man walks with God outside it.',
    },
    {
      type: 'p',
      text: 'The chapter ends with the other Lamech naming his son: *May this one comfort us in the labor and toil of our hands caused by the ground that the LORD has cursed* (5:29). Noah’s name sounds like the Hebrew for rest or comfort. The curse of 3:17 is still felt. The hope of relief from it is still alive. Paul states where that hope finally leads: *For as in Adam all die, so in Christ all will be made alive* (1 Corinthians 15:22).',
    },
    {
      type: 'p',
      text: '**Genesis 5 reads like a cemetery with one empty plot. In a world where every life ends in “and then he died,” Enoch shows that death is not the last word God intends to speak.**',
    },
  ],
};

export default chapter;

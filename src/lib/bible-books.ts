/* Bible book mappings to Shavat URLs */
export const BIBLE_BOOKS: Record<string, { path: string; section: string }> = {
  // Old Testament
  'genesis': { path: 'ot/genesis', section: 'creation' },
  'gen': { path: 'ot/genesis', section: 'creation' },
  'exodus': { path: 'ot/exodus', section: 'exodus' },
  'ex': { path: 'ot/exodus', section: 'exodus' },
  'leviticus': { path: 'ot/leviticus', section: 'leviticus' },
  'lev': { path: 'ot/leviticus', section: 'leviticus' },
  'numbers': { path: 'ot/numbers', section: 'numbers' },
  'num': { path: 'ot/numbers', section: 'numbers' },
  'deuteronomy': { path: 'ot/deuteronomy', section: 'deuteronomy' },
  'deut': { path: 'ot/deuteronomy', section: 'deuteronomy' },
  'psalm': { path: 'ot/psalms', section: 'psalms' },
  'psalms': { path: 'ot/psalms', section: 'psalms' },
  'ps': { path: 'ot/psalms', section: 'psalms' },
  'proverbs': { path: 'ot/proverbs', section: 'proverbs' },
  'prov': { path: 'ot/proverbs', section: 'proverbs' },
  'isaiah': { path: 'ot/isaiah', section: 'isaiah' },
  'isa': { path: 'ot/isaiah', section: 'isaiah' },
  'jeremiah': { path: 'ot/jeremiah', section: 'jeremiah' },
  'jer': { path: 'ot/jeremiah', section: 'jeremiah' },
  'ezekiel': { path: 'ot/ezekiel', section: 'ezekiel' },
  'ezek': { path: 'ot/ezekiel', section: 'ezekiel' },
  // New Testament
  'matthew': { path: 'nt/matthew', section: 'matthew' },
  'matt': { path: 'nt/matthew', section: 'matthew' },
  'mark': { path: 'nt/mark', section: 'mark' },
  'luke': { path: 'nt/luke', section: 'luke' },
  'john': { path: 'nt/john', section: 'john' },
  'acts': { path: 'nt/acts', section: 'acts' },
  'romans': { path: 'nt/romans', section: 'romans' },
  'rom': { path: 'nt/romans', section: 'romans' },
  '1 corinthians': { path: 'nt/1-corinthians', section: '1-corinthians' },
  '1 cor': { path: 'nt/1-corinthians', section: '1-corinthians' },
  '2 corinthians': { path: 'nt/2-corinthians', section: '2-corinthians' },
  '2 cor': { path: 'nt/2-corinthians', section: '2-corinthians' },
  'galatians': { path: 'nt/galatians', section: 'galatians' },
  'gal': { path: 'nt/galatians', section: 'galatians' },
  'ephesians': { path: 'nt/ephesians', section: 'ephesians' },
  'eph': { path: 'nt/ephesians', section: 'ephesians' },
  'philippians': { path: 'nt/philippians', section: 'philippians' },
  'phil': { path: 'nt/philippians', section: 'philippians' },
  'colossians': { path: 'nt/colossians', section: 'colossians' },
  'col': { path: 'nt/colossians', section: 'colossians' },
  '1 thessalonians': { path: 'nt/1-thessalonians', section: '1-thessalonians' },
  '2 thessalonians': { path: 'nt/2-thessalonians', section: '2-thessalonians' },
  '1 timothy': { path: 'nt/1-timothy', section: '1-timothy' },
  '2 timothy': { path: 'nt/2-timothy', section: '2-timothy' },
  'titus': { path: 'nt/titus', section: 'titus' },
  'philemon': { path: 'nt/philemon', section: 'philemon' },
  'hebrews': { path: 'nt/hebrews', section: 'hebrews' },
  'heb': { path: 'nt/hebrews', section: 'hebrews' },
  'james': { path: 'nt/james', section: 'james' },
  '1 peter': { path: 'nt/1-peter', section: '1-peter' },
  '2 peter': { path: 'nt/2-peter', section: '2-peter' },
  '1 john': { path: 'nt/1-john', section: '1-john' },
  '2 john': { path: 'nt/2-john', section: '2-john' },
  '3 john': { path: 'nt/3-john', section: '3-john' },
  'jude': { path: 'nt/jude', section: 'jude' },
  'revelation': { path: 'nt/revelation', section: 'revelation' },
  'rev': { path: 'nt/revelation', section: 'revelation' },
};

/* Convert Bible reference to Shavat URL */
export function bibleVerseUrl(book: string, chapter: string, verse?: string): string | null {
  const bookLower = book.toLowerCase();
  const bookInfo = BIBLE_BOOKS[bookLower];
  if (!bookInfo) return null;
  const base = `https://www.shavat.app/${bookInfo.path}/${bookInfo.section}/${chapter}`;
  return verse ? `${base}#v${verse.split('-')[0]}` : base;
}

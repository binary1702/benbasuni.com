/**
 * Thoughts: short essays on how Ben thinks.
 *
 * Each entry is a plain object so there is no markdown dependency. Body is a
 * list of blocks in reading order:
 *   { type: 'p', text }        paragraph
 *   { type: 'h', text, ref?, draft? }  section heading (ref: the chapter's Scripture passage, shown in the header;
 *                              draft: true → the chapter is hidden in production and marked "Draft" in dev)
 *   { type: 'sub', text }      subheading inside a chapter (does not start a new page)
 *   { type: 'quote', text, by?, italic? } pull quote (italic: false → upright, so *marked* words alone are italic)
 *   { type: 'list', items, ordered? } short list (ordered → numbered)
 *   { type: 'table', head, rows } small table; every cell takes inline *italics* / **bold** / [links](url)
 *   { type: 'figure', name, caption? } an inline SVG figure from src/components/figures
 *   { type: 'code', text }     a code block, shown verbatim in monospace
 * Inline `backticks` become code.
 * Inline *asterisks* become italics; "\n" inside a paragraph is a single line break.
 */
export type Block =
  | { type: 'p'; text: string }
  | { type: 'h'; text: string; ref?: string; draft?: boolean }
  | { type: 'sub'; text: string }
  | { type: 'quote'; text: string; by?: string; link?: string; italic?: boolean }
  | { type: 'list'; items: string[]; ordered?: boolean }
  | { type: 'table'; head: string[]; rows: string[][] }
  | { type: 'figure'; name: string; caption?: string } // see src/components/figures
  | { type: 'code'; text: string }; // monospace block; text is shown verbatim

export type Kind = 'speech' | 'philosophy' | 'engineering' | 'christianity';

export type Thought = {
  slug: string;
  kind: Kind;
  title: string;
  dek: string; // one-line summary under the title
  dekLink?: { display: string; url: string }; // optional link appended to the dek
  date: string; // ISO, e.g. 2026-10-28
  body: Block[];
};

import { aLifeOfCuriosity } from './a-life-of-curiosity';
import { stMatthewTheBrave } from './st-matthew-the-brave';
import { meta } from './meta';
import { oracle } from './oracle';
import { systems } from './systems';
import { patternRecognition } from './patterns';
import { pointers } from './pointers';

/** Drafts (chapters marked `draft: true`) are visible while developing and hidden in production. */
export const SHOW_DRAFTS = process.env.NODE_ENV !== 'production';

/** Every essay, in reading order. (Books — the Genesis series — live in content/books.) */
const allThoughts: Thought[] = [aLifeOfCuriosity, stMatthewTheBrave, meta, oracle, systems, patternRecognition, pointers];

/** Published pieces: a piece with no published chapters (all drafts) is left out entirely,
 *  so it has no page, no sidebar entry and no sitemap entry until its first chapter is published. */
export const thoughts: Thought[] = allThoughts.filter((t) => getChapters(t).length > 0);

export const KIND_LABEL: Record<Kind, string> = { speech: 'Speeches', philosophy: 'Philosophy', engineering: 'Engineering', christianity: 'Christianity' };
/** URL prefix per kind: /s/ speeches, /phil/ philosophy, /swe/ engineering, /christ/ christianity. */
export const KIND_PREFIX: Record<Kind, string> = { speech: 's', philosophy: 'phil', engineering: 'swe', christianity: 'christ' };
export const PREFIX_KIND: Record<string, Kind> = { s: 'speech', phil: 'philosophy', swe: 'engineering', christ: 'christianity' };
export function thoughtPath(t: Pick<Thought, 'kind' | 'slug'>) {
  return `/${KIND_PREFIX[t.kind]}/${t.slug}`;
}
/** Essay kinds. 'christianity' stays in Kind and the prefix maps only so old /christ/… links can redirect to /books. */
export const KINDS: Kind[] = ['speech', 'philosophy', 'engineering'];
/** Kinds shown on the home page; the sidebar shows all of KINDS. */
export const HOME_KINDS: Kind[] = ['engineering', 'philosophy'];

export function getThought(slug: string) {
  return thoughts.find((t) => t.slug === slug) ?? null;
}

/** A chapter is a heading block plus everything up to the next heading.
 *  Blocks before the first heading form an untitled opening chapter. */
export type Chapter = { title: string | null; ref?: string; draft?: boolean; blocks: Block[] };

export function getChapters(t: Thought): Chapter[] {
  const chapters: Chapter[] = [];
  let current: Chapter | null = null;
  for (const block of t.body) {
    if (block.type === 'h') {
      current = { title: block.text, ref: block.ref, draft: block.draft, blocks: [] };
      // A draft chapter still collects its blocks (so they don't spill into the previous chapter),
      // but is only listed when drafts are shown.
      if (!block.draft || SHOW_DRAFTS) chapters.push(current);
    } else {
      if (!current) {
        current = { title: null, blocks: [] };
        chapters.push(current);
      }
      current.blocks.push(block);
    }
  }
  return chapters;
}

/** Plain-text rendering of a chapter (for copying). */
export function chapterText(t: Pick<Thought, 'title'>, chapter: Chapter): string {
  const strip = (x: string) => x.replace(/\*([^*]+)\*/g, '$1');
  const lines: string[] = [t.title];
  if (chapter.title) lines.push(chapter.title);
  lines.push('');
  for (const b of chapter.blocks) {
    if (b.type === 'p' || b.type === 'sub') lines.push(strip(b.text), '');
    else if (b.type === 'code') lines.push(b.text, '');
    else if (b.type === 'quote') lines.push(`“${strip(b.text)}”${b.by ? ` — ${b.by}` : ''}`, '');
    else if (b.type === 'list') lines.push(...b.items.map((i, n) => `${b.ordered ? `${n + 1}.` : '•'} ${strip(i)}`), '');
    else if (b.type === 'table') lines.push(b.head.join(' | '), ...b.rows.map((r) => r.map(strip).join(' | ')), '');
  }
  return lines.join('\n').trim();
}

/** Plain-text rendering of a whole piece (for structured data). */
export function fullText(t: Thought): string {
  return getChapters(t)
    .map((c) => chapterText(t, c))
    .join('\n\n');
}

/** Schema.org type that best fits each kind. Speeches are Articles with genre "Speech". */
export const KIND_SCHEMA: Record<Kind, 'Article' | 'BlogPosting'> = {
  speech: 'Article',
  philosophy: 'BlogPosting',
  engineering: 'BlogPosting',
  christianity: 'Article',
};

/**
 * Thoughts: short essays on how Ben thinks.
 *
 * Each entry is a plain object so there is no markdown dependency. Body is a
 * list of blocks in reading order:
 *   { type: 'p', text }        paragraph
 *   { type: 'h', text }        section heading
 *   { type: 'quote', text, by? } pull quote
 *   { type: 'list', items }    short list
 *   { type: 'figure', name, caption? } an inline SVG figure from src/components/figures
 * Inline *asterisks* become italics; "\n" inside a paragraph is a single line break.
 */
export type Block =
  | { type: 'p'; text: string }
  | { type: 'h'; text: string }
  | { type: 'quote'; text: string; by?: string }
  | { type: 'list'; items: string[] }
  | { type: 'figure'; name: string; caption?: string }; // see src/components/figures

export type Kind = 'speech' | 'writing' | 'engineering';

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

export const thoughts: Thought[] = [aLifeOfCuriosity, stMatthewTheBrave, meta, oracle, systems, patternRecognition];

export const KIND_LABEL: Record<Kind, string> = { speech: 'Speeches', writing: 'Writings', engineering: 'Engineering' };
/** URL prefix per kind: /s/ speeches, /w/ writings, /swe/ engineering. */
export const KIND_PREFIX: Record<Kind, string> = { speech: 's', writing: 'w', engineering: 'swe' };
export const PREFIX_KIND: Record<string, Kind> = { s: 'speech', w: 'writing', swe: 'engineering' };
export function thoughtPath(t: Pick<Thought, 'kind' | 'slug'>) {
  return `/${KIND_PREFIX[t.kind]}/${t.slug}`;
}
export const KINDS: Kind[] = ['speech', 'writing', 'engineering'];
/** Kinds shown on the home page; the sidebar shows all of KINDS. */
export const HOME_KINDS: Kind[] = ['speech', 'writing'];

export function getThought(slug: string) {
  return thoughts.find((t) => t.slug === slug) ?? null;
}

/** A chapter is a heading block plus everything up to the next heading.
 *  Blocks before the first heading form an untitled opening chapter. */
export type Chapter = { title: string | null; blocks: Block[] };

export function getChapters(t: Thought): Chapter[] {
  const chapters: Chapter[] = [];
  let current: Chapter | null = null;
  for (const block of t.body) {
    if (block.type === 'h') {
      current = { title: block.text, blocks: [] };
      chapters.push(current);
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
export function chapterText(t: Thought, chapter: Chapter): string {
  const strip = (x: string) => x.replace(/\*([^*]+)\*/g, '$1');
  const lines: string[] = [t.title];
  if (chapter.title) lines.push(chapter.title);
  lines.push('');
  for (const b of chapter.blocks) {
    if (b.type === 'p') lines.push(strip(b.text), '');
    else if (b.type === 'quote') lines.push(`“${strip(b.text)}”${b.by ? ` — ${b.by}` : ''}`, '');
    else if (b.type === 'list') lines.push(...b.items.map((i) => `• ${strip(i)}`), '');
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
  writing: 'BlogPosting',
  engineering: 'BlogPosting',
};

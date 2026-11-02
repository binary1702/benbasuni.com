# Book chapter style guide

How Ben's essay text is turned into chapter files (`src/content/books/<series>/<book>/NN-<slug>.ts`).
**Ben writes the words. The code only arranges them.** Never reword, add or cut sentences unless he asks.

## Chapter skeleton
- `figure` first (the diagram), then the opening verse as a `quote` with `by:`
- Intro paragraphs (no heading), then `sub` blocks for Ben's subheadings (Title Case)
- Chapter ends on a bold closing line

## 1. Connect one-off lines into paragraphs
- Join consecutive lines that carry one thought into one `p`; aim for 2–5 sentences.
- Lead-ins ("Why?", "God knew this.", "But this covenant is different.") stay inside the paragraph they introduce.
- A line ending in a colon ("Peter writes:") joins the paragraph before, then the `quote` follows.
- New paragraph when the subject turns ("But…", "Now return to Eden…").

## 2. No staccato runs
Ben does not want stacks of one-sentence lines. Short parallel lines ("They take a garment. They walk
backward…", "Ham sees and tells. Shem and Japheth…") are joined into ordinary paragraphs, like any other
sentences. The only line breaks (`\n`) allowed are bold two-line mirrors (see 5).

## 3. Lists
`list` when Ben enumerates full-sentence items; `ordered: true` only if he numbers them.

## 4. Quotes
- Scripture on its own line → `quote` with `by:` ('Genesis 9:6'); no quote marks in `text`.
- A repeated fragment without a reference → `quote` with no `by`.
- Short verses inside a sentence stay inline: "(Genesis 6:18)". Don't invent pull quotes.

## 5. Emphasis
- **Bold**: the one sentence that lands a section (about one per section) + the chapter's closing line.
  Two-line mirrors: `**Line one.**\n**Line two.**`
- *Italic*: Hebrew/Greek words (*qeshet*, *sha'ar*, *gabar*), the English word being glossed,
  repeated echo phrases (*And then he died.*, *never again*), quoted speech inside a sentence.
- Never bold inside SVG diagrams.

## 6. Tables
Ben's column comparisons → `table` (`head` + `rows`); keep his wording and verse refs.

## 7. Links
- Verses → shavat.app: `[4:15](https://www.shavat.app/ot/genesis/creation/4#v15)`
- Other chapters → `/books/<series>/<book>/<chapter>`
- Links are blue unless they are Shavat links.

## 8. Text conventions
Curly quotes ’ “ ”, em dash — (no spaces), en dash – for ranges (9:1–7), `LORD` in capitals, BSB.
Chapters stay `draft: true` until Ben says publish.

## 9. Diagrams
Figure labels must agree with the text; if a key phrase is reworded, update the label
("Creation reversed"). Keep labels short ("Canaan · son of Ham").
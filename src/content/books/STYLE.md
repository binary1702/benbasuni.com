# Book chapter style guide

How Ben's essay text is turned into chapter files (`src/content/books/<series>/<book>/NN-<slug>.ts`).
**Ben writes the words. The code only arranges them.** Never reword, add or cut sentences unless he asks.

## Chapter skeleton

```ts
blocks: [
  { type: 'figure', name: '<figure-key>' },        // diagram always first
  { type: 'quote', text: '…', by: 'Genesis 9:25' }, // opening verse, no quote marks in text
  // intro paragraphs (no heading)
  { type: 'sub', text: 'Section Title' },          // Ben's subheadings, Title Case
  // …sections…
  // closing line, bold
]
```

## 1. Connect one-off lines into paragraphs
Ben drafts one sentence per line. Join consecutive lines that carry **one thought** into one `p`.

- Aim for 2–5 sentences per paragraph.
- Keep a lead-in like "Why?", "God knew this." or "But this covenant is different." **inside** the paragraph it introduces, not as its own paragraph.
- A line ending in a colon ("Peter writes:") joins the paragraph before it, and the `quote` follows.
- Start a new paragraph when the subject turns ("But…" or "Now return to Eden…" opening a new move).

| Before (draft) | After (file) |
|---|---|
| `Why?` / `Genesis has already drawn our attention…` / `In Genesis 9:18…` | one `p`: "Why? Genesis has already drawn our attention… In Genesis 9:18…" |

## 2. Staccato runs: one paragraph with line breaks
Short parallel lines (same opening, rhythm, a list read aloud) stay stacked: one `p`, joined with `\n`.

```ts
{ type: 'p', text: 'Sin had not erased it.\nViolence had not erased it.\nEven the judgment of the flood had not erased it.' }
```

Use this for anaphora ("He had… He had…", "Not… Not… But…"), action sequences ("They take a garment.\nThey place it…") and two-line contrasts ("The first humanity fell in a garden.\nNow the father…falls in a vineyard.").

## 3. Lists
Use `list` when the items are full sentences Ben is **enumerating** (often after "Read the differences carefully." or "From Genesis to Ezekiel to Revelation…"). Use `ordered: true` only when he numbers them.

## 4. Quotes (`quote`)
- Every Scripture citation Ben sets on its own line becomes a `quote` with `by:` (e.g. `'Genesis 9:6'`, `'1 Peter 4:8'`).
- No surrounding quote marks in `text`.
- A repeated fragment without a reference (e.g. "Be fruitful and multiply…") is a `quote` with no `by`.
- Pull quotes are Ben's choice; don't invent them.
- Short verses quoted inside a sentence stay inline in the `p`, with the reference in parentheses: "(Genesis 6:18)".

## 5. Emphasis
- **Bold** (`**…**`): the one sentence that lands a section, usually its last line, either alone in a `p` or at the end of a paragraph. At most about one per section, plus the chapter's closing line.
- Two-line bold mirrors use `**Line one.**\n**Line two.**` (each line wrapped separately).
- *Italic* (`*…*`) is for:
  - Hebrew or Greek words (*qeshet*, *sha'ar*, *gabar*, *Shem*)
  - the English word being glossed (*remained*, *rainbow*)
  - repeated echo phrases (*And then he died.*, *never again*, *everlasting covenant*)
  - quoted speech inside a sentence (*"Blessed be Shem."*)
- Never bold inside SVG diagrams.

## 6. Tables
Comparisons Ben lays out in columns become `table` with `head` and `rows`. Keep his column titles, cell wording and verse refs in parentheses.

## 7. Links
- Scripture verse links go to shavat.app: `[4:15](https://www.shavat.app/ot/genesis/creation/4#v15)`.
- Links to another chapter of the series use the site path: `[Genesis 1–2](/books/<series>/<book>/<chapter>)`.
- Links are blue unless they are Shavat links.

## 8. Text conventions
- Curly typography: ’ “ ” and — (em dash, no spaces), – for verse ranges (9:1–7).
- `LORD` in capitals, as BSB prints it.
- Translation is BSB.
- Chapters stay `draft: true` until Ben says publish.

## 9. Diagrams
- The labels in a chapter's figure must agree with the text. If Ben rewords a key phrase, update the matching label (e.g. "Creation reversed").
- Keep labels short; use names plus relation where needed ("Canaan · son of Ham").

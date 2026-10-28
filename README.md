# benbasuni.com

Single-page personal site. Next.js 16 · TypeScript · Tailwind 4.

```bash
npm run dev     # http://localhost:3000
npm run build
```

## Replacing placeholders

Everything swappable lives in `src/content/site.ts`:

- **Video** — drop the file in `public/media/` and set `video.src` (e.g. `"/media/letip.mp4"`), or point it at a hosted URL. Set `video.aspect` to the file's native ratio. Optional `video.poster` for a still.
- **Photograph** — drop in `public/media/` and set `photo.src`.
- **About copy** — placeholder clauses in `src/app/page.tsx` are wrapped in `<Pending>…</Pending>`; replace the text and remove the wrapper.

## Structure

```
src/app/layout.tsx      fonts (Newsreader + Geist), metadata
src/app/page.tsx        the three sections: Introduction · About · Work
src/app/globals.css     ivory/charcoal palette, reveal transition
src/components/         VideoPlayer (custom play, no autoplay), Reveal (fade-in)
src/content/site.ts     media + link config
src/_archive/           previous multi-page site, not routed or compiled
```

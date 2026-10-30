/**
 * Leota Sigrid Boesen — client blueprint data. Facts come from the site itself
 * (leotaboesen.com), its repo README / REVIEW.md / _docs/seo-strategy.md, and
 * the git log. Update by re-reading those, not by hand-tuning.
 */

export const leota = {
  name: 'Leota Sigrid Boesen',
  short: 'Leota Boesen',
  sheet: { client: '0001', date: '2026-09-25', author: 'Ben Basuni', studio: 'Binary 1702' },
  oneLine: [
    'Leota Sigrid Boesen has taught violin and viola in The Woodlands since 1993 (33+ years).',
    'Her studio needed a website that carried the weight of her expertise, legacy, and talent that she brings into the arts.',
  ],
  live: { url: 'https://leotaboesen.com' },
  hero: [
    { src: '/media/leota-1home.webp', alt: 'leotaboesen.com home page', w: 1586, h: 712 },
    { src: '/media/leota-2violin.webp', alt: 'leotaboesen.com violin lessons', w: 1592, h: 726 },
    { src: '/media/leota-3leota.webp', alt: 'leotaboesen.com Leota Sigrid Boesen', w: 1590, h: 848 },
  ],

  /* ---- the studio, in numbers (from the site, September 2026) ---- */
  stats: [
    { n: '30+', label: 'years teaching', note: 'The Woodlands studio, founded September 1993' },
    { n: '19', label: 'countries', note: 'students taught, in person and online' },
    { n: '36', label: 'five-star reviews', note: 'Google rating 5.0, September 2026' },
    { n: '20', label: 'years with Lyle Lovett', note: 'Christmas Eve and Easter, Trinity Lutheran, Spring TX' },
    { n: '~40', label: 'years in orchestras', note: 'The Woodlands Symphony and ensembles' },
    { n: '1973', label: 'first student', note: 'tutoring in her own teacher’s studio' },
  ],

  /* ---- teaching lineage: who taught whom ---- */
  lineage: [
    { who: 'Patience Thompson Berg · Herman Clyde Berg', url: 'https://nb.findagrave.com/memorial/43082023/patience_t-berg', where: 'DePauw University', note: 'first lessons, age nine, 1965' },
    { who: 'Philipp Otto Naegele', url: 'https://en.wikipedia.org/wiki/Philipp_Naegele', where: 'Smith College', note: 'co-founder of the Marlboro Music Festival' },
    { who: 'Leota Sigrid Boesen', url: 'https://leotaboesen.weebly.com/leota-sigrid-boesen.html', where: 'The Woodlands, TX', note: 'studio founded 1993', self: true },
    { who: 'Her students', where: 'Cornell · Duke · UT Austin · Texas A&M · Penn State · Colgate · UH', note: 'chairs, competitions, scholarships' },
  ],
  composers: {
    text: 'Performed under',
    names: [
      { name: 'Aaron Copland', url: 'https://en.wikipedia.org/wiki/Aaron_Copland' },
      { name: 'Howard Hanson', url: 'https://en.wikipedia.org/wiki/Howard_Hanson' },
      { name: 'Lukas Foss', url: 'https://en.wikipedia.org/wiki/Lukas_Foss' },
    ],
    suffix: "at DePauw's Contemporary Music Festivals.",
  },

  /* ---- what was built ---- */
  pages: [
    { route: '/', url: 'https://www.leotaboesen.com/', what: 'hero, proof strip, recent successes, reviews + Google badge, perks, alumni' },
    { route: '/lessons', url: 'https://www.leotaboesen.com/lessons', what: 'four programs, the studio, events, where students come from' },
    { route: '/about', url: 'https://www.leotaboesen.com/about', what: 'bio, teaching lineage, credentials, CV download' },
    { route: '/accomplishments', url: 'https://www.leotaboesen.com/accomplishments', what: 'recent highlights, a student spotlight, a 30-year archive' },
  ],

  principles: [
    {
      discipline: 'Content Architecture',
      body: [
        'Every page mirrors an approved mockup, kept in the repo as the source of truth. When the client sends a change, the mockup changes first and the page follows.',
        'Every photo and its alt text live in one file. The Google review count lives in another, with the date it was last checked. The CV is a single PDF swap.',
      ],
      result: 'Every common update is a one-file edit',
      competencies: ['Content modeling', 'Maintainability', 'Handoff documentation'],
    },
    {
      discipline: 'Client Review',
      body: [
        'Feedback on a website usually arrives as screenshots in a text thread. Here the reviewer opens a private link, clicks anything on the live page, and leaves a comment there. No account, no sign-in.',
        'Built on @binary1702/annotate: per-reviewer tokens, a shared Postgres store, and stable annotation ids so comments survive a redesign.',
      ],
      result: 'Comments on the page itself, no sign-in required',
      competencies: ['Developer tooling', 'Postgres', 'Token access'],
    },
    {
      discipline: 'Local Search',
      body: [
        'A violin teacher competes in a radius, not on the open web. The site carries LocalBusiness and MusicSchool structured data, a sitemap, canonicals, and per-page titles written for the towns she serves.',
        'Service areas are written as plain sentences on the lessons page, not stuffed into tags. Google matches natural language; parents read it too.',
      ],
      result: 'Schema · sitemap · 7 towns named in prose',
      competencies: ['Structured data', 'Local SEO', 'Metadata'],
    },
    {
      discipline: 'Delivery',
      body: [
        'Every public page is prerendered to static HTML. There is no server to keep warm and nothing to scale; the site is files on a CDN.',
        'The build type-checks, lints and prerenders every route. If any of that fails, nothing ships.',
      ],
      result: '5 routes · all static · ships only on a green build',
      competencies: ['Next.js', 'Static rendering', 'CI discipline'],
    },
  ],

  /* ---- her story, as her site tells it ---- */
  story: [
    { date: '1965', what: 'First lessons at nine, with Patience and Herman Berg at DePauw.', links: [{ text: 'Patience and Herman Berg', url: 'https://nb.findagrave.com/memorial/43082023/patience_t-berg' }] },
    { date: '1973', what: "Her first student, tutoring in her own teacher's studio while still a student herself." },
    { date: '1978', what: 'Smith College, under Philipp Otto Naegele. First Soprano in the Chamber Singers; First Prize at The Hague.', links: [{ text: 'Philipp Otto Naegele', url: 'https://en.wikipedia.org/wiki/Philipp_Naegele' }] },
    { date: '1993', what: 'Opens her violin and viola studio in The Woodlands, Texas.' },
    { date: '1995', what: "Begins accompanying Lyle Lovett's Christmas Eve and Easter performances. Still does.", links: [{ text: 'Lyle Lovett', url: 'https://en.wikipedia.org/wiki/Lyle_Lovett' }] },
    { date: '2026', what: 'Thirty-three years on. Students from nineteen countries. Thirty-six reviews, all five stars.' },
  ],

  /* ---- what she asked of the site ---- */
  brief: [
    'Show the thirty years without saying so. The lineage, the students, the reviews should do the talking.',
    'Let a parent decide in one scroll: who she is, what she teaches, how to call.',
    'Be hers to keep. New review count, new photo, new CV, without needing me.',
  ],

  stack: 'Next.js 16 · React 19 · Tailwind 4 · TypeScript · Vercel',
} as const;

export type Leota = typeof leota;

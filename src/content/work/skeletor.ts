/**
 * Skeletor — blueprint data. Every number here comes from the project's own
 * build report (anatomy-pipeline/reports/build-report.full.json, 2026-09-08)
 * and docs/PIPELINE.md. Update by re-reading those, not by hand-tuning.
 */

export const skeletor = {
  name: 'Skeletor',
  sheet: { experiment: '0001', date: '2026-10-16', author: 'Ben Basuni', zeus: '13000' },
  oneLine: 'We inhabit our bodies every day, yet understand so little of what lies beneath the surface. Skeletor is an exploration of human anatomy, revealing the intricate structures and connections that make us who we are.',
  live: { url: 'https://skeletor.binary1702.com', note: 'private beta' },
  source: { name: 'Z-Anatomy', url: 'https://www.z-anatomy.com', license: 'CC BY-SA 4.0' },
  hero: { src: '/media/skeletor-wide2.webp', alt: 'Skeletor viewer, story mode: The Skull, stop 3 of 8 — temporal bone selected' },

  principle: 'Complex underlying model, simple interface.',

  /* ---- the pipeline: SOURCE → deterministic build → WEB ASSETS ---- */
  pipeline: [
    {
      n: 0,
      name: 'Pin',
      in: 'config/source.json',
      out: '—',
      what: 'SHA-256 of the source .blend and the TA2 terminology CSV must match, or the build stops.',
      why: 'Same inputs, same outputs. If upstream changes, I want to know before anything is built on it.',
      metric: '2 hashes',
    },
    {
      n: 1,
      name: 'Catalog',
      in: '.blend',
      out: 'reports/catalog.json',
      what: 'Reads object and collection names only. Five seconds. Used during inspection, optional in a build.',
      why: 'Before touching geometry, know what is in the file. The audit came before the first export.',
      metric: '5 s',
    },
    {
      n: 2,
      name: 'Index',
      in: '.blend · TA2.csv · aliases',
      out: 'index.json',
      what: 'Loads every collection unlinked, classifies all 7,187 objects, assigns ids, joins TA2 terms, records every problem.',
      why: 'Opening the file as a scene evaluates 2,560 modifiers and passes 6 GB. Loading names only costs 0.85 GB.',
      metric: '7,187 objects · ~2 min',
    },
    {
      n: 3,
      name: 'Export',
      in: '.blend · index · bundle',
      out: 'staging/*.glb',
      what: 'Appends only the selected objects, bakes world space, converts curves to tubes, fixes mirrored winding, triangulates, writes raw GLB.',
      why: 'Left-side objects are mirrored copies sharing the right side’s mesh. Baked in batches of 150 so memory stays flat.',
      metric: '224 MB raw',
    },
    {
      n: 4,
      name: 'Optimize',
      in: 'staging/*.glb',
      out: 'anatomy/*.glb',
      what: 'gltf-transform: dedup → prune → weld → Draco. Asserts every node name survives.',
      why: 'Compression happens outside Blender so Draco, meshopt and none can be compared on identical input, ratio recorded per asset.',
      metric: '34.3 MB served · 6.5×',
    },
    {
      n: 5,
      name: 'Manifest',
      in: 'index · stats',
      out: 'manifest.json',
      what: 'Identity + hierarchy + geometry pointers. The only bridge between triangles and knowledge.',
      why: 'Knowledge datasets reference structure ids, never mesh names. Geometry can be rebuilt without touching what is known about a structure.',
      metric: '3,874 records',
    },
    {
      n: 6,
      name: 'Validate',
      in: 'everything above',
      out: 'build-report.json',
      what: 'Counts, per-asset sizes and ratios, failures, duplicates. Exit 1 on hard failure. Report committed to git.',
      why: 'A structure disappearing between builds shows up as a diff, not as a surprise.',
      metric: '6 failures, all explained',
    },
    {
      n: 7,
      name: 'Definitions',
      in: '.blend text blocks',
      out: 'definitions.json',
      what: '3,816 Wikipedia-derived descriptions keyed by normalised name; 3,607 manifest records resolve.',
      why: 'Separate file, never merged into the manifest. The knowledge layer has its own lifecycle.',
      metric: '3,816 entries',
    },
  ],

  /* ---- what the model keeps (full build, 2026-09-08) ---- */
  /* source = objects classified in the source index; structures = exported. */
  systems: [
    { key: 'skeletal', source: 277, structures: 277, triangles: 702015, raw: 12.9, served: 2.42 },
    { key: 'muscular', source: 683, structures: 683, triangles: 2323599, raw: 46.9, served: 7.86 },
    { key: 'attachments', source: 705, structures: 705, triangles: 931484, raw: 17.8, served: 3.52, note: 'origins & insertions as first-class records' },
    { key: 'joints', source: 413, structures: 413, triangles: 358055, raw: 8.6, served: 1.47 },
    { key: 'cardiovascular', source: 676, structures: 676, triangles: 3843768, raw: 72.7, served: 9.59, note: '654 of these are curves' },
    { key: 'lymphoid', source: 163, structures: 163, triangles: 127682, raw: 2.4, served: 0.52 },
    { key: 'nervous', source: 588, structures: 582, triangles: 2406786, raw: 46.6, served: 6.37, note: '6 eyeball reference curves without geometry, reported not dropped' },
    { key: 'visceral', source: 119, structures: 119, triangles: 714303, raw: 13.0, served: 1.87 },
    { key: 'regions', source: 256, structures: 256, triangles: 135204, raw: 3.4, served: 0.69 },
    { key: 'other', source: 58, structures: 0, triangles: 0, raw: 0, served: 0, note: 'reference planes, movement arrows, UI helpers — not anatomy, excluded by design' },
  ],
  /* ---- memory, GB (PIPELINE.md; index stats maxrss 825 MB; export peak RSS 2.7 GB) ---- */
  memory: {
    before: [{ key: 'open as a scene', gb: 6, note: 'evaluates 2,560 modifiers; passes 6 GB and keeps climbing' }],
    after: [
      { key: 'index', gb: 0.83, note: 'names only, nothing linked to a scene' },
      { key: 'export, peak', gb: 2.7, note: 'batches of 150; the attachments bundle sets the peak' },
    ],
  },
  totals: { structures: 3874, triangles: 11542896, raw: 224, served: 34.3, ratio: 6.5, buildMinutes: 3.5, peakGB: 2.7, loadSeconds: 12 },
  counts: { sourceObjects: 7187, sourceStructures: 3233, exported: 3169, attachments: 705, mappedToTA2: 2951, curvesInSource: 951, curvesConverted: 945 },

  /* ---- engineering principles: principle → implementation → evidence → competency.
     Every figure is from anatomy-pipeline/reports/build-report.full.json or docs/PIPELINE.md. ---- */
  principles: [
    {
      discipline: 'Systems Architecture',
      headline: 'Eliminate the operation, not just its cost.',
      body: [
        'Opening the source anatomical model as a scene evaluates 2,560 modifiers and passes 6 GB of memory. Rather than optimize an expensive operation, I redesigned the extraction pipeline to avoid it: the library is loaded with nothing linked to a scene, and export stages touch only what they export.',
        'The complete dataset now processes in batches of 150 objects, with peak memory held at 2.7 GB.',
      ],
      result: '6 GB+ → 2.7 GB peak memory · 55% reduction',
      competencies: ['ETL pipelines', 'Batch processing', 'Memory optimization'],
    },
    {
      discipline: 'Data Engineering',
      headline: 'Identity is not a name.',
      body: [
        'An anatomical structure exists independently of the terminology used to describe it. Names change, classifications evolve; identity must stay fixed.',
        'Skeletor derives each primary id from the upstream object the source actually maintains, and carries the TA2 standard term alongside it as a secondary key. Curating a term never renames a structure or breaks knowledge attached to it.',
      ],
      result: '3,874 stable ids · 76% mapped to TA2',
      competencies: ['Data modeling', 'Entity identification', 'Schema design'],
    },
    {
      discipline: 'Computational Geometry',
      headline: 'Correctness before optimization.',
      body: [
        'Left-side structures in the source are mirrored copies sharing the right side\u2019s mesh. A mirror preserves appearance while reversing surface orientation: the model looks right and is mathematically wrong.',
        'I bake each side into world space, flip the winding, and store left and right as independent meshes with identity transforms, at the cost of holding every pair twice.',
      ],
      result: 'Geometric integrity over storage efficiency',
      competencies: ['3D transformations', 'Mesh processing', 'Data validation'],
    },
    {
      discipline: 'Data Architecture',
      headline: 'Completeness is an architectural choice.',
      body: [
        'Most anatomical applications keep the structures their use case needs. Everything else becomes expendable.',
        'Skeletor preserves nine systems as first-class entities: bones, joints, muscles, attachments, vessels, nerves, lymph, viscera, regions. The system should not decide in advance which parts of the body deserve to be understood.',
      ],
      result: '3,874 structures · 9 systems · 100% preserved',
      competencies: ['Domain modeling', 'Data preservation', 'Extensible schemas'],
    },
  ],

  /* ---- history & roadmap ---- */
  timeline: [
    { date: '2026-09-01', what: 'Day one. 307 MB file, 6 GB to open. Find another way.', status: 'done' },
    { date: '2026-09-08', what: 'The whole body. 3,874 structures, 224MB → 34 MB.', status: 'done' },
    { date: '2026-09-29', what: 'The skull study guide. Learning over engine.', status: 'done' },
    { date: '2026-10-27', what: 'It gets a name. Skeletor.', status: 'done' },
    { date: '', what: 'The Living Atlas — The entire human body, interconnected in 3D.', status: 'next' },
    { date: '', what: 'The Intelligent Body — Understand deeply how the body works.', status: 'next' },
    { date: '', what: 'The Future of Medical Education', status: 'next' },
  ],
} as const;

export type Skeletor = typeof skeletor;

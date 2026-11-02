import type { MetadataRoute } from 'next';
import { thoughts, thoughtPath, KINDS, KIND_PREFIX } from '@/content/thoughts';
import { SITE_URL } from '@/lib/site';
import { series, seriesPath, chapterPath, allChapters, BOOKS_PATH } from '@/content/books';

/* Home, one index per essay kind, every essay at its canonical URL (essay ?p=N pages canonicalize to
   the essay), and the books: their index, each series, and every published chapter (each its own URL). */
export default function sitemap(): MetadataRoute.Sitemap {
  const latest = thoughts.map((t) => t.date).sort().at(-1);
  return [
    { url: `${SITE_URL}/`, lastModified: latest, changeFrequency: 'monthly', priority: 1 },
    ...KINDS.map((kind) => ({
      url: `${SITE_URL}/${KIND_PREFIX[kind]}`,
      lastModified: thoughts.filter((t) => t.kind === kind).map((t) => t.date).sort().at(-1),
      changeFrequency: 'monthly' as const,
      priority: 0.6,
    })),
    { url: `${SITE_URL}/work/skeletor`, lastModified: '2026-10-29', changeFrequency: 'monthly' as const, priority: 0.8 },
    { url: `${SITE_URL}/client/leotaboesen`, lastModified: '2026-10-30', changeFrequency: 'monthly' as const, priority: 0.8 },
    ...thoughts.map((t) => ({
      url: `${SITE_URL}${thoughtPath(t)}`,
      lastModified: t.date,
      changeFrequency: 'yearly' as const,
      priority: 0.8,
    })),
    { url: `${SITE_URL}${BOOKS_PATH}`, changeFrequency: 'monthly' as const, priority: 0.6 },
    ...series.map((s) => ({ url: `${SITE_URL}${seriesPath(s)}`, changeFrequency: 'monthly' as const, priority: 0.6 })),
    ...allChapters().map(({ series: s, book, chapter }) => ({
      url: `${SITE_URL}${chapterPath(s, book, chapter)}`,
      lastModified: book.date,
      changeFrequency: 'yearly' as const,
      priority: 0.8,
    })),
  ];
}

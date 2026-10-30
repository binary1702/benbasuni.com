import type { MetadataRoute } from 'next';
import { thoughts, thoughtPath, KINDS, KIND_PREFIX } from '@/content/thoughts';
import { SITE_URL } from '@/lib/site';

/* Home, one index per kind, and every published piece at its canonical URL.
   Chapter URLs (?p=N) are deliberately not listed; they canonicalize to the piece. */
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
  ];
}

import type { MetadataRoute } from 'next';
import { SITE_URL } from '@/lib/site';

/* Everything public is crawlable. Search-indexing crawlers (Googlebot,
   Bingbot, OAI-SearchBot, PerplexityBot, etc.) are allowed by the wildcard.
   AI *training* crawlers (GPTBot, ClaudeBot, CCBot, Google-Extended, …) are a
   separate decision from search indexing; no restriction is set here on
   purpose — add Disallow rules per agent if that policy changes. */
export default function robots(): MetadataRoute.Robots {
  return {
    rules: [{ userAgent: '*', allow: '/' }],
    sitemap: `${SITE_URL}/sitemap.xml`,
    host: SITE_URL,
  };
}

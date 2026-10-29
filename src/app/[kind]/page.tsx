import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { Reveal } from '@/components';
import { thoughts, thoughtPath, getChapters, KIND_PREFIX, PREFIX_KIND, KIND_LABEL, KINDS } from '@/content/thoughts';
import { SITE_NAME, AUTHOR, SITE_URL } from '@/lib/site';

/* Index page for a kind: /s, /w, /swe. Lists every piece with its dek and
   chapters, in the same sheet as the essays. */

export function generateStaticParams() {
  return KINDS.map((kind) => ({ kind: KIND_PREFIX[kind] }));
}

const INDEX_DESCRIPTION: Record<string, string> = {
  speech: 'Talks by Ben Basuni.',
  writing: 'Essays by Ben Basuni.',
  engineering: 'Engineering Notes by Ben Basuni.',
};

export async function generateMetadata({ params }: { params: Promise<{ kind: string }> }): Promise<Metadata> {
  const { kind } = await params;
  const k = PREFIX_KIND[kind];
  if (!k) return {};
  const title = KIND_LABEL[k];
  const description = INDEX_DESCRIPTION[k];
  return {
    title: { absolute: `/${kind}` },
    description,
    alternates: { canonical: `/${kind}` },
    openGraph: {
      type: 'website',
      title,
      description,
      url: `/${kind}`,
      siteName: SITE_NAME,
      images: [{ url: '/opengraph-image', width: 1200, height: 630, alt: SITE_NAME }],
    },
    twitter: { card: 'summary_large_image', title, description },
  };
}

function formatDate(iso: string) {
  return new Date(`${iso}T00:00:00`).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });
}

export default async function KindIndex({ params }: { params: Promise<{ kind: string }> }) {
  const { kind } = await params;
  const k = PREFIX_KIND[kind];
  if (!k) notFound();
  const items = thoughts.filter((t) => t.kind === k);

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    name: KIND_LABEL[k],
    description: INDEX_DESCRIPTION[k],
    url: `${SITE_URL}/${kind}`,
    isPartOf: { '@type': 'WebSite', name: SITE_NAME, url: SITE_URL },
    author: { '@type': 'Person', name: AUTHOR.name, url: AUTHOR.url },
    hasPart: items.map((t) => ({ '@type': 'CreativeWork', name: t.title, url: `${SITE_URL}${thoughtPath(t)}`, datePublished: t.date })),
  };

  return (
    <main className="contents">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <section className="sheet md:flex md:min-h-0 md:flex-1 md:flex-col">
        <Reveal as="header">
          <p className="font-sans text-[10px] uppercase tracking-[0.18em] text-sage">Index</p>
          <h1
            className="mt-2 font-serif font-light leading-[1.05] tracking-[-0.02em] text-ink"
            style={{ fontSize: 'clamp(1.75rem, 2.6vw, 2.25rem)' }}
          >
            {KIND_LABEL[k]}
          </h1>
          <p className="mt-2 font-serif text-[0.95rem] font-light italic leading-[1.45] text-muted md:text-[1rem]">
            {INDEX_DESCRIPTION[k]}
          </p>
        </Reveal>

        <Reveal
          as="div"
          delay={100}
          className="scroll-pane mt-4 border-t border-rule pt-4 md:min-h-0 md:flex-1 md:overflow-y-auto md:pr-4"
        >
          <ol className="divide-y divide-rule">
            {items.map((t) => {
              const chapters = getChapters(t);
              return (
                <li key={t.slug} className="py-5 first:pt-0">
                  <Link href={thoughtPath(t)} className="group block">
                    <h2 className="font-serif text-[1.35rem] font-light leading-tight text-ink transition-colors duration-300 group-hover:text-sage md:text-[1.5rem]">
                      {t.title}
                    </h2>
                    <p className="mt-1 font-serif text-[1rem] font-light italic leading-[1.5] text-muted">
                      {t.dek.replace(/\n/g, ' ')}
                    </p>
                    <p className="mt-2 font-sans text-[10px] uppercase tracking-[0.18em] text-muted">
                      <time dateTime={t.date}>{formatDate(t.date)}</time>
                      {chapters.length > 1 && <span> · {chapters.length} parts</span>}
                    </p>
                  </Link>
                </li>
              );
            })}
          </ol>
        </Reveal>
      </section>
    </main>
  );
}

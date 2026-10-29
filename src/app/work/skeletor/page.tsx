import type { Metadata } from 'next';
import Link from 'next/link';
import { Reveal } from '@/components';
import { SystemsChart } from '@/components/blueprint/SystemsChart';
import { skeletor as S } from '@/content/work/skeletor';
import { SITE_URL, SITE_NAME, AUTHOR } from '@/lib/site';

const description = S.oneLine;

export const metadata: Metadata = {
  title: { absolute: '/work/skeletor' },
  description,
  alternates: { canonical: '/work/skeletor' },
  openGraph: {
    type: 'article',
    title: `${S.name} — a blueprint`,
    description,
    url: '/work/skeletor',
    siteName: SITE_NAME,
    images: [{ url: S.hero.src, width: 2068, height: 1378, alt: S.hero.alt }],
  },
  twitter: { card: 'summary_large_image', title: S.name, description },
};

/* Section header in the drawing idiom: "SECTION 02 — PIPELINE" over a ruled line. */
function Section({ n, title, children, note }: { n: string; title: string; note?: string; children: React.ReactNode }) {
  return (
    <Reveal as="section" className="mt-14 md:mt-20">
      <div className="flex items-baseline justify-between gap-4">
        <h2 className="flex items-baseline gap-3">
          <span className="bp-mono text-ink">{n}</span>
          <span className="bp-label text-ink normal-case">{title}</span>
        </h2>
        {note && <span className="bp-mono hidden md:block">{note}</span>}
      </div>
      <div className="bp-rule mt-2" />
      <div className="mt-6">{children}</div>
    </Reveal>
  );
}

export default function SkeletorPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'SoftwareSourceCode',
    name: S.name,
    description,
    url: `${SITE_URL}/work/skeletor`,
    author: { '@type': 'Person', name: AUTHOR.name, url: AUTHOR.url },
    programmingLanguage: ['Python', 'TypeScript'],
    runtimePlatform: 'Web',
    isBasedOn: { '@type': 'Dataset', name: S.source.name, url: S.source.url, license: 'https://creativecommons.org/licenses/by-sa/4.0/' },
    dateModified: '2026-10-29',
  };


  return (
    <main data-theme="blueprint" className="relative mx-auto max-w-[72rem] px-5 py-10 sm:px-8 md:px-12 md:py-14">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      {/* ---- sheet header: way back + title block ---- */}
      <Reveal as="header">
        <Link href="/" className="bp-label transition-colors duration-500 hover:text-ink">
          ← Ben Basuni
        </Link>
        {/* Title block: centered on the name + one-liner only (the back link is outside the row). */}
        <div className="mt-6 flex items-center justify-between gap-6">
          <div>
            <h1 className="font-serif font-light leading-[1] tracking-[-0.02em] text-ink" style={{ fontSize: 'clamp(2rem, 4.2vw, 3.5rem)' }}>
              <a href={S.live.url} target="_blank" rel="noopener noreferrer" className="transition-colors duration-500 hover:text-sage">
                {S.live.url.replace('https://', '')}
              </a>
            </h1>
            <p className="enter mt-4 max-w-[54rem] text-justify font-serif text-[1.05rem] font-light italic leading-[1.5] text-charcoal md:text-[1.2rem]" style={{ animationDelay: '120ms' }}>
              We inhabit our bodies every day, yet understand so little of what lies beneath the surface.<br />Skeletor is an exploration of human anatomy, revealing the intricate structures that make us <span className="font-bold">who we are.</span>
            </p>
          </div>

          {/* title block */}
          <table className="bp-mono enter hidden shrink-0 self-center border border-rule md:table" style={{ animationDelay: '250ms' }}>
            <tbody>
              {[
                ['EXPERIMENT', S.sheet.experiment],
                ['ZEUS', S.sheet.zeus],
                ['DATE', S.sheet.date],
                ['AUTHOR', S.sheet.author],
              ].map(([k, v]) => (
                <tr key={k} className="border-b border-rule last:border-0">
                  <td className="border-r border-rule px-3 py-1.5">{k}</td>
                  <td className="px-3 py-1.5 text-ink">{v}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Reveal>

      {/* ---- 01 the thing itself ---- */}
      <Reveal as="section" className="mt-10 md:mt-14">
        <figure>
          <a href={S.live.url} target="_blank" rel="noopener noreferrer" className="group block overflow-hidden rounded-xl border border-rule">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={S.hero.src} alt={S.hero.alt} width={2068} height={1378} className="h-auto w-full transition-transform duration-700 group-hover:scale-[1.01]" />
          </a>
          <figcaption className="mt-3 flex justify-end">
            <a href={S.live.url} target="_blank" rel="noopener noreferrer" className="bp-label text-ink underline decoration-ink/30 underline-offset-4 hover:decoration-sage">
              open the viewer →
            </a>
          </figcaption>
        </figure>

      </Reveal>

      {/* ---- 02 history & roadmap ---- */}
      <Section n="01" title="History & Roadmap">
        <div className="grid gap-x-12 gap-y-10 md:grid-cols-2">
          {[
            { title: 'History', items: S.timeline.filter((t) => t.status === 'done') },
            { title: 'Roadmap', items: S.timeline.filter((t) => t.status === 'next') },
          ].map((col) => (
            <div key={col.title}>
              <p className={`bp-label ${col.title === 'Roadmap' ? 'font-bold text-cyan-400' : 'text-ink'}`}>{col.title}</p>
              <ol className="relative mt-4 pl-6">
                {col.items.map((t, i) => (
                  <li key={t.date + t.what} className="relative pb-5 last:pb-0">
                    <span
                      aria-hidden="true"
                      style={{ animationDelay: `${i * 70}ms` }}
                      className={`bp-dot absolute -left-[1.6rem] top-1.5 h-2.5 w-2.5 rounded-full border ${
                        t.status === 'done' ? 'border-ink bg-ink' : 'border-emerald-400 bg-emerald-400'
                      }`}
                    />
                    {t.date && <p className="bp-mono italic text-ink">{t.date}</p>}
                    <p className={`font-serif text-[1.1rem] font-light leading-[1.5] ${t.status === 'next' ? 'text-emerald-400' : 'text-ink'}`}>{t.what}</p>
                  </li>
                ))}
              </ol>
            </div>
          ))}
        </div>
      </Section>

      {/* ---- 02 what the model keeps ---- */}
      <Section n="02" title="Model Information">
        <SystemsChart systems={S.systems} memory={S.memory} />
      </Section>

      {/* ---- 03 engineering principles ---- */}
      <Section n="03" title="Engineering Principles">
        <ol className="grid gap-x-12 gap-y-12 md:grid-cols-2 md:gap-y-14">
          {S.principles.map((q, i) => (
            <li key={q.discipline} className="flex flex-col">
              {/* "01  Systems Architecture" is the quadrant's heading */}
              <h3 className="flex items-baseline gap-4">
                <span className="bp-mono text-[1rem] text-ink md:text-[1.1rem]">{String(i + 1).padStart(2, '0')}</span>
                <span className="font-sans text-[0.95rem] uppercase tracking-[0.2em] text-ink md:text-[1.05rem]">{q.discipline}</span>
              </h3>
              {/* competencies sit directly under the heading */}
              <p className="bp-mono mt-2 uppercase tracking-[0.12em] text-sage-deep">{q.competencies.join('  /  ')}</p>
              {/* D. explanation */}
              <div className="mt-5 flex-1 space-y-3">
                {q.body.map((para) => (
                  <p key={para} className="text-justify font-serif text-[1rem] font-light leading-[1.55] text-charcoal">
                    {para}
                  </p>
                ))}
              </div>
              {/* D. result, stamped like a dimension */}
              <div className="mt-auto pt-5">
                <div className="bp-rule" />
                <p className="bp-mono mt-2 text-ink">{q.result}</p>
              </div>
            </li>
          ))}
        </ol>
      </Section>

    </main>
  );
}

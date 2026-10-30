'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Reveal } from '@/components';
import { leota as L } from '@/content/client/leota';
import { SITE_URL, SITE_NAME, AUTHOR } from '@/lib/site';

const PATH = '/client/leotaboesen';
const description = L.oneLine.join(' ');


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

function HeroCarousel() {
  const [idx, setIdx] = useState(0);
  const hero = L.hero[idx];
  const prev = () => setIdx((i) => (i === 0 ? L.hero.length - 1 : i - 1));
  const next = () => setIdx((i) => (i === L.hero.length - 1 ? 0 : i + 1));

  return (
    <figure className="relative">
      <div className="flex items-center gap-4">
        {/* Left arrow */}
        <button
          onClick={prev}
          className="hidden shrink-0 cursor-pointer rounded-sm border border-rule p-2 text-muted transition-colors duration-300 hover:border-ink hover:text-ink md:block"
          aria-label="Previous image"
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
            <path d="M15 18l-6-6 6-6" />
          </svg>
        </button>

        <div className="relative flex-1 overflow-hidden rounded-xl border border-rule">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={hero.src}
            alt={hero.alt}
            width={hero.w}
            height={hero.h}
            className="h-auto w-full"
          />
          {/* Dots */}
          <div className="absolute bottom-3 left-1/2 flex -translate-x-1/2 gap-2">
            {L.hero.map((_, i) => (
              <button
                key={i}
                onClick={() => setIdx(i)}
                className={`h-2 w-2 cursor-pointer rounded-full border border-ivory/60 transition-colors ${i === idx ? 'bg-ivory' : 'bg-ivory/30'}`}
                aria-label={`Go to image ${i + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Right arrow */}
        <button
          onClick={next}
          className="hidden shrink-0 cursor-pointer rounded-sm border border-rule p-2 text-muted transition-colors duration-300 hover:border-ink hover:text-ink md:block"
          aria-label="Next image"
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
            <path d="M9 18l6-6-6-6" />
          </svg>
        </button>
      </div>

      <figcaption className="mt-3 flex justify-end">
        <a href={L.live.url} target="_blank" rel="noopener noreferrer" className="bp-label text-ink underline decoration-ink/30 underline-offset-4 hover:decoration-sage">
          open the site →
        </a>
      </figcaption>
    </figure>
  );
}

export default function LeotaPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: L.name,
    description,
    url: L.live.url,
    author: { '@type': 'Person', name: AUTHOR.name, url: AUTHOR.url },
    mainEntityOfPage: `${SITE_URL}${PATH}`,
    dateModified: L.sheet.date,
  };

  return (
    <main data-theme="blueprint" className="relative mx-auto max-w-[72rem] px-5 py-10 sm:px-8 md:px-12 md:py-14">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      {/* ---- sheet header ---- */}
      <Reveal as="header">
        <Link href="/" className="bp-label transition-colors duration-500 hover:text-ink">
          ← Ben Basuni
        </Link>
        <div className="mt-6 flex items-center justify-between gap-6">
          <div>
            <h1 className="font-serif font-light leading-[1] tracking-[-0.02em] text-ink" style={{ fontSize: 'clamp(2rem, 4.2vw, 3.5rem)' }}>
              <a href={L.live.url} target="_blank" rel="noopener noreferrer" className="transition-colors duration-500 hover:text-sage">
                {L.live.url.replace('https://', '')}
              </a>
            </h1>
            <p className="enter mt-4 max-w-[54rem] text-justify font-serif text-[1.05rem] font-light italic leading-[1.5] text-charcoal md:text-[1.2rem]" style={{ animationDelay: '120ms' }}>
              {L.oneLine[0]}
              <br />
              {L.oneLine[1]}
            </p>
          </div>

          <table className="bp-mono enter hidden shrink-0 self-center border border-rule md:table" style={{ animationDelay: '250ms' }}>
            <tbody>
              {[
                ['CLIENT', L.sheet.client],
                ['STUDIO', L.sheet.studio],
                ['DATE', L.sheet.date],
                ['AUTHOR', L.sheet.author],
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

      {/* ---- the thing itself ---- */}
      <Reveal as="section" className="mt-10 md:mt-14">
        <HeroCarousel />
      </Reveal>

      {/* ---- 01 the client ---- */}
      <Section n="01" title="Leota">
        <div className="grid gap-x-12 gap-y-10 md:grid-cols-[1.2fr_1fr]">
          <div>
            <p className="bp-label text-ink">Her story</p>
            <ol className="relative mt-4 pl-6">
              {L.story.map((t, i) => (
                <li key={t.date} className="relative pb-5 last:pb-0">
                  <span aria-hidden="true" style={{ animationDelay: `${i * 70}ms` }} className="bp-dot absolute -left-[1.6rem] top-1.5 h-2.5 w-2.5 rounded-full border border-ink bg-ink" />
                  <p className="bp-mono italic text-ink">{t.date}</p>
                  <p className="font-serif text-[1.1rem] font-light leading-[1.5] text-ink">
                    {'links' in t && t.links
                      ? t.what.split(new RegExp(`(${t.links.map((l: { text: string }) => l.text).join('|')})`)).map((part: string, j: number) => {
                          const link = t.links?.find((l: { text: string; url: string }) => l.text === part);
                          return link ? (
                            <a key={j} href={link.url} target="_blank" rel="noopener noreferrer" className="font-medium underline decoration-ink/30 underline-offset-4 transition-colors duration-500 hover:decoration-sage">
                              {part}
                            </a>
                          ) : (
                            <span key={j}>{part}</span>
                          );
                        })
                      : t.what}
                  </p>
                </li>
              ))}
            </ol>
          </div>
          <div>
            <p className="bp-label text-ink">What she asked for</p>
            <ol className="mt-4 space-y-5">
              {L.brief.map((b, i) => (
                <li key={b} className="flex gap-4">
                  <span className="bp-mono shrink-0 text-sage-deep">{String(i + 1).padStart(2, '0')}</span>
                  <p className="font-serif text-[1.1rem] font-light leading-[1.5] text-ink">{b}</p>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </Section>

      {/* ---- 02 the studio ---- */}
      <Section n="02" title="The Studio">
        <dl className="grid grid-cols-2 gap-x-8 gap-y-8 md:grid-cols-3">
          {L.stats.map((s) => (
            <div key={s.label} className="border-l border-rule pl-4">
              <dt className="bp-label text-ink">{s.label}</dt>
              <dd className="mt-1 font-serif text-[2.4rem] font-light leading-none tracking-[-0.02em] text-ink md:text-[2.8rem]">{s.n}</dd>
              <dd className="bp-mono mt-2">{s.note}</dd>
            </div>
          ))}
        </dl>

        {/* lineage: who taught whom */}
        <div className="mt-12">
          <p className="bp-label text-ink">Lineage</p>
          <ol className="mt-4 grid gap-4 md:grid-cols-4">
            {L.lineage.map((p, i) => (
              <li key={p.who} className="relative flex flex-col border border-rule px-4 py-4">
                {i < L.lineage.length - 1 && (
                  <span aria-hidden="true" className="bp-mono absolute -right-3 top-1/2 hidden -translate-y-1/2 bg-[var(--color-bg,transparent)] text-ink md:block">
                    →
                  </span>
                )}
                {'url' in p ? (
                  <a href={p.url} target="_blank" rel="noopener noreferrer" className={`font-serif text-[1.05rem] leading-[1.3] underline decoration-ink/30 underline-offset-4 transition-colors duration-500 hover:decoration-sage ${'self' in p ? 'text-sage-deep' : 'text-ink'}`}>
                    {p.who}
                  </a>
                ) : (
                  <span className="font-serif text-[1.05rem] leading-[1.3] text-ink">{p.who}</span>
                )}
                <span className="bp-mono mt-2 text-ink">{p.where}</span>
                <span className="bp-mono mt-1">{p.note}</span>
              </li>
            ))}
          </ol>
          <p className="bp-mono mt-4">
            {L.composers.text}{' '}
            {L.composers.names.map((c, i) => (
              <span key={c.name}>
                <a href={c.url} target="_blank" rel="noopener noreferrer" className="text-ink underline decoration-ink/30 underline-offset-4 transition-colors duration-500 hover:decoration-sage">
                  {c.name}
                </a>
                {i < L.composers.names.length - 2 && ', '}
                {i === L.composers.names.length - 2 && ' and '}
              </span>
            ))}{' '}
            {L.composers.suffix}
          </p>
        </div>
      </Section>

      {/* ---- 03 what was built ---- */}
      <Section n="03" title="What Was Built" note={L.stack}>
        <table className="w-full border-collapse">
          <tbody>
            {L.pages.map((p) => (
              <tr key={p.route} className="border-b border-rule last:border-0">
                <td className="bp-mono w-[9rem] py-2.5 pr-4 align-top text-ink">
                  {'url' in p ? (
                    <a href={p.url} target="_blank" rel="noopener noreferrer" className="underline decoration-ink/30 underline-offset-4 transition-colors duration-500 hover:decoration-sage">
                      {p.route}
                    </a>
                  ) : (
                    p.route
                  )}
                </td>
                <td className="py-2.5 font-serif text-[1rem] font-light leading-[1.5] text-charcoal">{p.what}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </Section>

      {/* ---- 04 engineering principles ---- */}
      <Section n="04" title="Engineering Principles">
        <ol className="grid gap-x-12 gap-y-12 md:grid-cols-2 md:gap-y-14">
          {L.principles.map((q, i) => (
            <li key={q.discipline} className="flex flex-col">
              <h3 className="flex items-baseline gap-4">
                <span className="bp-mono text-[1rem] text-ink md:text-[1.1rem]">{String(i + 1).padStart(2, '0')}</span>
                <span className="font-sans text-[0.95rem] uppercase tracking-[0.2em] text-ink md:text-[1.05rem]">{q.discipline}</span>
              </h3>
              <p className="bp-mono mt-2 uppercase tracking-[0.12em] text-sage-deep">{q.competencies.join('  /  ')}</p>
              <div className="mt-5 flex-1 space-y-3">
                {q.body.map((para) => (
                  <p key={para} className="text-justify font-serif text-[1rem] font-light leading-[1.55] text-charcoal">
                    {para}
                  </p>
                ))}
              </div>
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

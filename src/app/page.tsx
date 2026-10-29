import { Reveal, VideoPlayer } from '@/components';
import { site } from '@/content/site';
import { thoughts, thoughtPath, HOME_KINDS, KIND_LABEL } from '@/content/thoughts';
import { SITE_URL, SITE_NAME, DESCRIPTION, AUTHOR } from '@/lib/site';

type LinkT = { display: string; url?: string };
function LinkItem({ link }: { link: LinkT }) {
  const cls = 'font-serif text-[1.05rem] font-light md:text-[1.125rem]';
  if (!link.url) return <span className={`${cls} italic text-muted`}>{link.display}</span>;
  const external = !link.url.startsWith('/');
  return (
    <a
      href={link.url}
      {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
      className={`group inline-flex items-baseline ${cls} text-ink`}
    >
      <span className="border-b border-ink/40 pb-0.5 transition-colors duration-500 group-hover:border-sage">
        {link.display}
      </span>
    </a>
  );
}

/* Quiet inline link for the bio: ink text, faint underline that firms up on hover. */
function Quiet({ href, children }: { href: string; children: string }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="underline decoration-ink/25 underline-offset-4 transition-colors duration-500 hover:decoration-sage"
    >
      {children}
    </a>
  );
}

function Eyebrow({ children }: { children: string }) {
  return <p className="font-sans text-[11px] uppercase tracking-[0.22em] text-muted">{children}</p>;
}

export default function Home() {
  // Work (from site.ts) + one column per kind shown on the home page.
  const groups = [
    ...site.groups,
    ...HOME_KINDS.map((kind) => ({
      label: KIND_LABEL[kind],
      links: thoughts.filter((t) => t.kind === kind).map((t) => ({ display: t.title, url: thoughtPath(t) })),
    })),
  ];

  // Width-to-height ratio from site.video.aspect ("w / h"). The whole page
  // fits one viewport on desktop, so the video's height is the hard constraint
  // and its width derives from it.
  const [vw, vh] = site.video.aspect.split('/').map((n) => Number(n.trim()));
  const videoRatio = vw / vh;

  const jsonLd = [
    {
      '@context': 'https://schema.org',
      '@type': 'Person',
      name: AUTHOR.name,
      url: AUTHOR.url,
      sameAs: AUTHOR.sameAs,
      description: DESCRIPTION,
      worksFor: { '@type': 'Organization', name: 'Binary 1702', url: 'https://binary1702.com' },
    },
    {
      '@context': 'https://schema.org',
      '@type': 'WebSite',
      name: SITE_NAME,
      url: SITE_URL,
      description: DESCRIPTION,
      author: { '@type': 'Person', name: AUTHOR.name, url: AUTHOR.url },
      inLanguage: 'en',
    },
  ];

  return (
    <div className="mx-auto flex min-h-svh max-w-[1480px] flex-col px-5 py-10 sm:px-8 md:px-12 md:py-16">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      {/* DOM order is name → video → info, which is the mobile order.
          On desktop a grid re-places them: name and info stacked in the left
          column (centered against the video by the 1fr rows above and below),
          video spanning all rows on the right. */}
      <main className="grid flex-1 grid-cols-1 gap-y-10 md:grid-cols-[minmax(0,40rem)_auto] md:grid-rows-[1fr_auto_auto_1fr] md:items-center md:justify-center md:gap-x-10 md:gap-y-0 lg:gap-x-16">

        <Reveal as="header" className="text-center md:col-start-1 md:row-start-2">
          <h1
            id="name"
            className="text-center font-serif font-light leading-[1.02] tracking-[-0.03em] text-ink"
            style={{ fontSize: 'clamp(2.75rem, 5.5vw, 5.5rem)' }}
          >
            BEN BASUNI
          </h1>
        </Reveal>

        {/* Width derives from the viewport height and the aspect ratio so the
            frame fits one screen: see .video-fit in globals.css for the budgets
            (mobile leaves room for the name above it). */}
        <Reveal
          delay={150}
          className="video-fit justify-self-center md:col-start-2 md:row-span-4 md:row-start-1"
          style={{ '--ratio': videoRatio } as React.CSSProperties}
        >
          <VideoPlayer
            youtubeId={site.video.youtubeId}
            src={site.video.src}
            poster={site.video.poster}
            preview={site.video.preview}
            aspect={site.video.aspect}
            title={site.video.title}
            overlay={site.video.overlay}
          />
        </Reveal>


        <Reveal className="text-center md:col-start-1 md:row-start-3" delay={100}>
          <blockquote className="md:mt-10">
            <p
              className="whitespace-nowrap font-serif font-light italic leading-[1.5] text-ink"
              style={{ fontSize: 'clamp(0.65rem, 2.6vw, 1.25rem)' }}
            >
              &ldquo;Get in, get it done, get it done right, and get out.&rdquo;
            </p>
            <footer className="mt-2 font-sans text-[11px] uppercase tracking-[0.18em] text-sage-deep">
              Fred Trump
            </footer>
          </blockquote>

          {/* One idea per line. Each <p> is a row; the gap between rows does the pacing. */}
          <div className="mt-8 space-y-3 font-serif text-[1.05rem] font-light leading-[1.5] text-charcoal md:text-[1.2rem]">
            <p>I was born in Indonesia and grew up in three countries.</p>
            <p>
              I studied philosophy at <Quiet href="https://www.ucsb.edu">UC Santa Barbara</Quiet>.
            </p>
            <p>
              10+ years in tech including <Quiet href="https://www.datadoghq.com">Datadog</Quiet>,{' '}
              <Quiet href="https://www.montecarlodata.com">Monte Carlo Data</Quiet>, and others.
            </p>
            <p>
              Today I run{' '}
              <a
                href="https://binary1702.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sage-deep underline decoration-sage-deep/30 underline-offset-4 transition-colors duration-500 hover:decoration-sage-deep"
              >
                Binary 1702
              </a>
              .
            </p>
          </div>

          {/* Link groups */}
          <div className="mt-8 grid grid-cols-1 gap-y-7 border-t border-sage/30 pt-6 text-center md:mt-10 md:grid-cols-3 md:gap-x-6 md:gap-y-0">
            {groups.map((group) => (
              <div key={group.label}>
                <Eyebrow>{group.label}</Eyebrow>
                <ul className="mt-4 space-y-2">
                  {group.links.map((link) => (
                    <li key={link.display}>
                      <LinkItem link={link} />
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </Reveal>

      </main>
    </div>
  );
}

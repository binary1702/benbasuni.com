import { making } from '@/content';
import { PageHeader } from '@/components';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Work | Ben Basuni',
  description: 'Things I build professionally and out of curiosity.',
};

export default function Work() {
  return (
    <div className="mx-auto max-w-3xl px-6 py-16">
      <PageHeader title="Work" />

      <div className="space-y-4 leading-relaxed text-neutral-700 dark:text-neutral-300">
        <p>
          I build software, systems, and digital experiences professionally through{' '}
          <a
            href="https://binary1702.com"
            className="text-neutral-900 underline decoration-neutral-300 underline-offset-2 hover:decoration-neutral-500 dark:text-neutral-100 dark:decoration-neutral-600 dark:hover:decoration-neutral-400"
            target="_blank"
            rel="noopener noreferrer"
          >
            Binary 1702
          </a>
          .
        </p>
        <p>
          This site is where I keep the things I make because I&apos;m curious.
        </p>
      </div>

      <section className="mt-12">
        <h2 className="mb-6 text-sm font-medium uppercase tracking-wide text-neutral-500 dark:text-neutral-500">
          Experiments
        </h2>
        <div>
          {making.map((entry) => (
            <article
              key={entry.slug}
              className="border-t border-neutral-200 py-6 first:border-t-0 first:pt-0 dark:border-neutral-800"
            >
              <h3 className="font-serif text-xl font-medium text-neutral-900 dark:text-neutral-100">
                {entry.title}
              </h3>
              <p className="mt-2 leading-relaxed text-neutral-600 dark:text-neutral-400">
                {entry.description}
              </p>
            </article>
          ))}
        </div>
      </section>

      <section className="mt-12">
        <h2 className="mb-6 text-sm font-medium uppercase tracking-wide text-neutral-500 dark:text-neutral-500">
          Professional
        </h2>
        <a
          href="https://binary1702.com"
          className="group block border-t border-neutral-200 py-6 dark:border-neutral-800"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h3 className="font-serif text-xl font-medium text-neutral-900 group-hover:text-neutral-600 dark:text-neutral-100 dark:group-hover:text-neutral-300">
            Binary 1702 →
          </h3>
          <p className="mt-2 leading-relaxed text-neutral-600 dark:text-neutral-400">
            Technology, systems, and digital experiences.
          </p>
        </a>
      </section>
    </div>
  );
}

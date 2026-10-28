import { PageHeader } from '@/components';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About | Ben Basuni',
  description: 'About Ben Basuni',
};

export default function About() {
  return (
    <div className="mx-auto max-w-3xl px-6 py-16">
      <PageHeader title="About" />

      <div className="space-y-6 leading-relaxed text-neutral-700 dark:text-neutral-300">
        <p className="text-lg">
          I believe in Jesus Christ. That&apos;s the most important thing to know about me.
        </p>

        <p>
          I&apos;m also a software engineer, entrepreneur, musician, writer, and someone who has spent most of his life being curious about why things work the way they do.
        </p>

        <p>
          I studied philosophy before becoming a software engineer. I love technology, language, music, history, theology, design, and understanding the structures underneath complicated things.
        </p>

        <p>
          This website is where those parts of my life are allowed to meet.
        </p>

        <p>
          Some of what you&apos;ll find here will be serious. Some of it won&apos;t be. I might write about Scripture one day and upload myself playing a Backstreet Boys song the next.
        </p>

        <p>
          That&apos;s intentional.
        </p>

        <p>
          I don&apos;t want this place to be a résumé. I want it to become a record of what I&apos;m learning, making, remembering, and offering.
        </p>
      </div>

      <p className="mt-12 text-sm text-neutral-500 dark:text-neutral-500">
        For my professional work →{' '}
        <a
          href="https://binary1702.com"
          className="text-neutral-700 hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-neutral-200"
          target="_blank"
          rel="noopener noreferrer"
        >
          Binary 1702
        </a>
      </p>
    </div>
  );
}

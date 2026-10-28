import { writing, formatDate } from '@/content';
import { PageHeader } from '@/components';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Writing | Ben Basuni',
  description: 'Notes from things I am trying to understand.',
};

export default function Writing() {
  return (
    <div className="mx-auto max-w-3xl px-6 py-16">
      <PageHeader
        title="Writing"
        subtitle="Notes from things I&apos;m trying to understand."
      />

      <div>
        {writing.map((entry) => (
          <article
            key={entry.slug}
            className="border-t border-neutral-200 py-6 first:border-t-0 first:pt-0 dark:border-neutral-800"
          >
            <div className="mb-2 flex items-center gap-3 text-xs uppercase tracking-wide text-neutral-500 dark:text-neutral-500">
              <span>{formatDate(entry.date)}</span>
              <span className="text-neutral-300 dark:text-neutral-700">/</span>
              <span>{entry.category}</span>
            </div>
            <h3 className="font-serif text-xl font-medium text-neutral-900 dark:text-neutral-100">
              {entry.title}
            </h3>
            {entry.description && (
              <p className="mt-2 leading-relaxed text-neutral-600 dark:text-neutral-400">
                {entry.description}
              </p>
            )}
          </article>
        ))}
      </div>
    </div>
  );
}

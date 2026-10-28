import { FeedEntry, formatDate } from '@/content';

interface ContentEntryProps {
  entry: FeedEntry;
}

function typeLabel(type: FeedEntry['type']): string {
  switch (type) {
    case 'writing':
      return 'Writing';
    case 'music':
      return 'Music';
    case 'making':
      return 'Making';
  }
}

export function ContentEntry({ entry }: ContentEntryProps) {
  return (
    <article className="border-t border-neutral-200 py-6 first:border-t-0 first:pt-0 dark:border-neutral-800">
      <div className="mb-2 flex items-center gap-3 text-xs uppercase tracking-wide text-neutral-500 dark:text-neutral-500">
        <span>{formatDate(entry.date)}</span>
        <span className="text-neutral-300 dark:text-neutral-700">/</span>
        <span>{typeLabel(entry.type)}</span>
      </div>
      <h3 className="font-serif text-xl font-medium text-neutral-900 dark:text-neutral-100">
        {entry.title}
      </h3>
      {entry.type === 'music' && (
        <p className="mt-1 text-sm text-neutral-600 dark:text-neutral-400">
          {entry.artist}
          {entry.instruments && (
            <span className="text-neutral-400 dark:text-neutral-600"> &middot; {entry.instruments}</span>
          )}
        </p>
      )}
      {(entry.type === 'writing' || entry.type === 'making') && entry.description && (
        <p className="mt-2 leading-relaxed text-neutral-600 dark:text-neutral-400">
          {entry.description}
        </p>
      )}
    </article>
  );
}

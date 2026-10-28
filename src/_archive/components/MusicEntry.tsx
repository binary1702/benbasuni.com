import { MusicEntry as MusicEntryType, formatDate } from '@/content';

interface MusicEntryProps {
  entry: MusicEntryType;
}

export function MusicEntry({ entry }: MusicEntryProps) {
  return (
    <article className="border-t border-neutral-200 py-6 first:border-t-0 first:pt-0 dark:border-neutral-800">
      <div className="mb-2 text-xs uppercase tracking-wide text-neutral-500 dark:text-neutral-500">
        {formatDate(entry.date)}
      </div>
      <h3 className="font-serif text-xl font-medium text-neutral-900 dark:text-neutral-100">
        {entry.title}
      </h3>
      <p className="mt-1 text-neutral-600 dark:text-neutral-400">
        {entry.artist}
      </p>
      {entry.instruments && (
        <p className="mt-1 text-sm text-neutral-500 dark:text-neutral-500">
          {entry.instruments}
        </p>
      )}
      {entry.notes && (
        <p className="mt-3 leading-relaxed text-neutral-600 dark:text-neutral-400">
          {entry.notes}
        </p>
      )}
      {!entry.hasRecording && (
        <p className="mt-3 text-sm italic text-neutral-400 dark:text-neutral-600">
          Recording coming eventually.
        </p>
      )}
    </article>
  );
}

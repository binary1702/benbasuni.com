import { music } from '@/content';
import { PageHeader, MusicEntry } from '@/components';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Music | Ben Basuni',
  description: 'Songs I play, songs I love, and things I want to remember.',
};

export default function Music() {
  return (
    <div className="mx-auto max-w-3xl px-6 py-16">
      <PageHeader
        title="Music"
        subtitle="Songs I play, songs I love, and things I want to remember."
      />

      <div>
        {music.map((entry) => (
          <MusicEntry key={entry.slug} entry={entry} />
        ))}
      </div>
    </div>
  );
}

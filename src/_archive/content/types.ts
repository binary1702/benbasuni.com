export type ContentType = 'writing' | 'music' | 'making';

export interface WritingEntry {
  type: 'writing';
  slug: string;
  title: string;
  date: string;
  category: string;
  description: string;
}

export interface MusicEntry {
  type: 'music';
  slug: string;
  title: string;
  artist: string;
  date: string;
  instruments?: string;
  notes?: string;
  hasRecording: boolean;
}

export interface MakingEntry {
  type: 'making';
  slug: string;
  title: string;
  date: string;
  description: string;
  url?: string;
}

export type FeedEntry = WritingEntry | MusicEntry | MakingEntry;

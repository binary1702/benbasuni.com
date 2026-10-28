import { FeedEntry } from './types';
import { writing } from './writing';
import { music } from './music';
import { making } from './making';

export { writing } from './writing';
export { music } from './music';
export { making } from './making';
export * from './types';

function parseDate(dateStr: string): Date {
  if (dateStr.match(/^\d{4}-\d{2}$/)) {
    return new Date(dateStr + '-01');
  }
  return new Date(dateStr);
}

export function getAllEntries(): FeedEntry[] {
  const all: FeedEntry[] = [...writing, ...music, ...making];
  return all.sort((a, b) => parseDate(b.date).getTime() - parseDate(a.date).getTime());
}

export function formatDate(dateStr: string): string {
  const date = parseDate(dateStr);
  if (dateStr.match(/^\d{4}-\d{2}$/)) {
    return date.toLocaleDateString('en-US', { month: 'long', year: 'numeric' });
  }
  return date.toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' });
}

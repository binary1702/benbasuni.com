import type { Metadata } from 'next';
import { SITE_URL, AUTHOR } from '@/lib/site';

export const metadata: Metadata = {
  title: '/client/leotaboesen',
  description:
    'Leota Sigrid Boesen has taught violin and viola in The Woodlands since 1993 (33+ years). Her studio needed a website that carried the weight of her expertise, legacy, and talent that she brings into the arts.',
  alternates: { canonical: '/client/leotaboesen' },
  openGraph: {
    title: 'Leota Boesen — Client Work',
    description:
      'Leota Sigrid Boesen has taught violin and viola in The Woodlands since 1993 (33+ years).',
    url: '/client/leotaboesen',
    type: 'article',
  },
};

export default function LeotaLayout({ children }: { children: React.ReactNode }) {
  return children;
}

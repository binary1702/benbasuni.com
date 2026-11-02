import type { Metadata } from 'next';
import { BooksIndex } from '@/components/BooksIndex';
import { catalog, BOOKS_LABEL } from '@/content/books';

export const metadata: Metadata = {
  title: { absolute: '/books' },
  description: 'Books by Ben Basuni.',
  alternates: { canonical: '/books' },
};

export default function BooksPage() {
  return <BooksIndex eyebrow="Index" title={BOOKS_LABEL} description="Books by Ben Basuni." list={catalog} linkSeries />;
}

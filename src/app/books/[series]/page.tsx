import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { BooksIndex } from '@/components/BooksIndex';
import { series, getSeries, getCatalogSeries, seriesPath, BOOKS_LABEL } from '@/content/books';

export function generateStaticParams() {
  return series.map((s) => ({ series: s.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ series: string }> }): Promise<Metadata> {
  const s = getSeries((await params).series);
  if (!s) return {};
  return { title: { absolute: seriesPath(s) }, description: s.dek, alternates: { canonical: seriesPath(s) } };
}

export default async function SeriesPage({ params }: { params: Promise<{ series: string }> }) {
  const slug = (await params).series;
  const s = getSeries(slug) && getCatalogSeries(slug);
  if (!s) notFound();
  return <BooksIndex eyebrow={BOOKS_LABEL} title={s.title} description={s.dek} list={[s]} />;
}

import { ImageResponse } from 'next/og';
import { getBook } from '@/content/books';
import { SITE_NAME } from '@/lib/site';

export const alt = SITE_NAME;
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

/* Share card per chapter: series, book title, chapter title (same look as the essay cards). */
export default async function Image({ params }: { params: Promise<{ series: string; book: string; chapter: string }> }) {
  const { series, book, chapter } = await params;
  const found = getBook(series, book);
  const c = found?.book.chapters.find((x) => x.slug === chapter);
  const title = found ? found.book.title : SITE_NAME;
  const label = found ? found.series.title.toUpperCase() : '';
  const dek = c ? c.title : '';

  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          padding: 72,
          background: '#ebe6db',
          color: '#141311',
          fontFamily: 'Georgia, "Times New Roman", serif',
        }}
      >
        <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: 24, letterSpacing: 6, color: '#86967a' }}>
          <span>{label}</span>
          <span style={{ color: '#736d63' }}>BEN BASUNI</span>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <div style={{ fontSize: title.length > 22 ? 76 : 96, letterSpacing: -2, lineHeight: 1.05 }}>{title}</div>
          {dek && <div style={{ fontSize: 30, fontStyle: 'italic', color: '#736d63', marginTop: 22 }}>{dek}</div>}
        </div>
      </div>
    ),
    size,
  );
}

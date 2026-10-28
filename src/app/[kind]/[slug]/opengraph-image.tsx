import { ImageResponse } from 'next/og';
import { getThought, KIND_LABEL, PREFIX_KIND } from '@/content/thoughts';
import { SITE_NAME } from '@/lib/site';

export const alt = SITE_NAME;
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

/* Share card per piece: label, title, dek. */
export default async function Image({ params }: { params: Promise<{ kind: string; slug: string }> }) {
  const { kind, slug } = await params;
  const t = getThought(slug);
  const ok = t && PREFIX_KIND[kind] === t.kind;
  const title = ok ? t.title : SITE_NAME;
  const label = ok ? KIND_LABEL[t.kind].toUpperCase() : '';
  const dek = ok ? t.dek.replace(/\n/g, ' ') : '';

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

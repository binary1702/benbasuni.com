import { ImageResponse } from 'next/og';
import { SITE_NAME, DESCRIPTION } from '@/lib/site';

export const alt = SITE_NAME;
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

/* Home share card: linen field, name, one line. */
export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'flex-end',
          padding: 72,
          background: '#ebe6db',
          color: '#141311',
          fontFamily: 'Georgia, "Times New Roman", serif',
        }}
      >
        <div style={{ fontSize: 24, letterSpacing: 6, color: '#736d63', marginBottom: 18 }}>BEN.BINARY1702.COM</div>
        <div style={{ fontSize: 112, letterSpacing: -3, lineHeight: 1 }}>BEN BASUNI</div>
        <div style={{ fontSize: 30, fontStyle: 'italic', color: '#736d63', marginTop: 24 }}>{DESCRIPTION}</div>
      </div>
    ),
    size,
  );
}

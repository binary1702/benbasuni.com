'use client';

import { useState } from 'react';

/* Share button: uses native share API on mobile, copies link on desktop. */
export function ShareButton({ url, title }: { url: string; title: string }) {
  const [done, setDone] = useState(false);

  const share = async () => {
    // Try native share API first (mobile, some desktop browsers)
    if (typeof navigator !== 'undefined' && navigator.share) {
      try {
        await navigator.share({ title, url });
        return;
      } catch (e) {
        // User cancelled or share failed, fall through to copy
        if ((e as Error).name === 'AbortError') return;
      }
    }

    // Fallback: copy link to clipboard
    let ok = false;
    if (typeof navigator !== 'undefined' && navigator.clipboard?.writeText) {
      try {
        await navigator.clipboard.writeText(url);
        ok = true;
      } catch {}
    }
    if (!ok) {
      const ta = document.createElement('textarea');
      ta.value = url;
      ta.setAttribute('readonly', '');
      ta.style.position = 'fixed';
      ta.style.opacity = '0';
      document.body.appendChild(ta);
      ta.select();
      try {
        ok = document.execCommand('copy');
      } catch {}
      ta.remove();
    }
    if (ok) {
      setDone(true);
      setTimeout(() => setDone(false), 1600);
    }
  };

  return (
    <button
      type="button"
      onClick={share}
      title="Share"
      aria-label="Share"
      className="inline-flex cursor-pointer items-center gap-1.5 rounded-sm px-1.5 py-0.5 font-sans text-[10px] uppercase tracking-[0.18em] text-muted transition-colors duration-300 hover:bg-sage-soft hover:text-ink focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-sage"
    >
      {done ? (
        <svg width="12" height="12" viewBox="0 0 16 16" fill="none" aria-hidden="true">
          <path d="M3 8.5l3 3 7-7" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      ) : (
        <svg width="12" height="12" viewBox="0 0 16 16" fill="none" aria-hidden="true">
          <circle cx="4" cy="8" r="2" stroke="currentColor" />
          <circle cx="12" cy="4" r="2" stroke="currentColor" />
          <circle cx="12" cy="12" r="2" stroke="currentColor" />
          <path d="M5.8 7L10.2 5M5.8 9L10.2 11" stroke="currentColor" />
        </svg>
      )}
    </button>
  );
}

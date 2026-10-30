'use client';

import { useState } from 'react';

/* Copies `text` to the clipboard; shows "Copied" briefly. Quiet, icon-only. */
export function CopyButton({ text, label = 'Copy text' }: { text: string; label?: string }) {
  const [done, setDone] = useState(false);

  const copy = async () => {
    let ok = false;
    // Clipboard API needs a secure context (https or literal localhost).
    if (typeof navigator !== 'undefined' && navigator.clipboard?.writeText) {
      try {
        await navigator.clipboard.writeText(text);
        ok = true;
      } catch {}
    }
    // Fallback for http://<host>: a hidden textarea + execCommand.
    if (!ok) {
      const ta = document.createElement('textarea');
      ta.value = text;
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
      onClick={copy}
      title={label}
      aria-label={label}
      className="inline-flex cursor-pointer items-center gap-1.5 rounded-sm px-1.5 py-0.5 font-sans text-[10px] uppercase tracking-[0.18em] text-muted transition-colors duration-300 hover:bg-sage-soft hover:text-ink"
    >
      {done ? (
        <svg width="12" height="12" viewBox="0 0 16 16" fill="none" aria-hidden="true">
          <path d="M3 8.5l3 3 7-7" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      ) : (
        <svg width="12" height="12" viewBox="0 0 16 16" fill="none" aria-hidden="true">
          <rect x="5.5" y="5.5" width="8" height="9" rx="1.5" stroke="currentColor" />
          <path d="M10.5 5.5V3.5a1 1 0 0 0-1-1h-6a1 1 0 0 0-1 1v7a1 1 0 0 0 1 1h2" stroke="currentColor" />
        </svg>
      )}
    </button>
  );
}

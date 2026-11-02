'use client';

import { useState, type ReactNode } from 'react';

/* Wrapper that copies `text` when clicked; flashes green briefly on success. */
export function CopyableTitle({ text, label = 'Copy', children }: { text: string; label?: string; children: ReactNode }) {
  const [done, setDone] = useState(false);

  const copy = async () => {
    let ok = false;
    if (typeof navigator !== 'undefined' && navigator.clipboard?.writeText) {
      try {
        await navigator.clipboard.writeText(text);
        ok = true;
      } catch {}
    }
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
      setTimeout(() => setDone(false), 800);
    }
  };

  return (
    <button
      type="button"
      onClick={copy}
      title={label}
      aria-label={label}
      className={`cursor-pointer text-left transition-colors duration-300 hover:opacity-80 ${done ? '[&>h1]:text-sage' : ''}`}
    >
      {children}
    </button>
  );
}

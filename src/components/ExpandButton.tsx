'use client';

import { useEffect } from 'react';
import { useExpand } from './ExpandContext';

/* Expand/collapse icon */
function ExpandIcon({ expanded }: { expanded: boolean }) {
  return (
    <svg width="14" height="14" viewBox="0 0 16 16" fill="none" aria-hidden="true">
      {expanded ? (
        // Collapse icon (arrows pointing inward)
        <>
          <path d="M10 2v4h4" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M6 14v-4H2" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" />
        </>
      ) : (
        // Expand icon (arrows pointing outward)
        <>
          <path d="M14 6V2h-4" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M2 10v4h4" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" />
        </>
      )}
    </svg>
  );
}

export function ExpandButton() {
  const { expanded, toggleExpand } = useExpand();

  // Escape key exits expanded mode
  useEffect(() => {
    if (!expanded) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') toggleExpand();
    };
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [expanded, toggleExpand]);

  return (
    <button
      type="button"
      onClick={toggleExpand}
      title={expanded ? 'Exit fullscreen (Esc)' : 'Expand'}
      className="hidden md:flex h-7 w-7 cursor-pointer items-center justify-center rounded-sm text-muted transition-colors duration-500 hover:bg-sage-soft hover:text-ink focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-sage"
    >
      <ExpandIcon expanded={expanded} />
      <span className="sr-only">{expanded ? 'Exit fullscreen' : 'Expand'}</span>
    </button>
  );
}

'use client';

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

/** − / + buttons that step the reading text size (essay paragraphs, lists and pull quotes). */
export function FontSizeButtons() {
  const { canShrink, canGrow, shrinkFont, growFont } = useExpand();
  const cls =
    'flex h-7 w-7 cursor-pointer items-center justify-center rounded-sm font-sans text-[15px] leading-none text-muted transition-colors duration-500 hover:bg-sage-soft hover:text-ink focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-sage disabled:cursor-default disabled:opacity-30 disabled:hover:bg-transparent';
  return (
    <>
      <button type="button" onClick={shrinkFont} disabled={!canShrink} title="Smaller text" aria-label="Smaller text" className={cls}>
        −
      </button>
      <button type="button" onClick={growFont} disabled={!canGrow} title="Larger text" aria-label="Larger text" className={cls}>
        +
      </button>
    </>
  );
}

/** Expand = hide the sidebar so the reading card widens (animated in ThoughtsShell); press again to bring it back. */
export function ExpandButton() {
  const { sidebarOpen, toggleSidebar } = useExpand();
  const expanded = !sidebarOpen;
  return (
    <button
      type="button"
      onClick={toggleSidebar}
      title={expanded ? 'Show sidebar' : 'Expand'}
      aria-pressed={expanded}
      className="hidden md:flex h-7 w-7 cursor-pointer items-center justify-center rounded-sm text-muted transition-colors duration-500 hover:bg-sage-soft hover:text-ink focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-sage"
    >
      <ExpandIcon expanded={expanded} />
      <span className="sr-only">{expanded ? 'Show sidebar' : 'Expand'}</span>
    </button>
  );
}

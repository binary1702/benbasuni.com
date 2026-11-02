'use client';

import { useEffect, useCallback, useState, type ReactNode } from 'react';

type Props = {
  open: boolean;
  onClose: () => void;
  children: ReactNode;
  /** Where the figure lives, e.g. "Adam, Cain, Lamech · The First Deception". */
  context?: string;
};

export function FigureModal({ open, onClose, children, context }: Props) {
  const [visible, setVisible] = useState(false);
  const [animating, setAnimating] = useState(false);


  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        e.stopPropagation();
        e.preventDefault();
        onClose();
      }
    },
    [onClose]
  );

  useEffect(() => {
    if (open) {
      setVisible(true);
      requestAnimationFrame(() => {
        requestAnimationFrame(() => setAnimating(true));
      });
    } else {
      setAnimating(false);
      const timer = setTimeout(() => setVisible(false), 300);
      return () => clearTimeout(timer);
    }
  }, [open]);

  useEffect(() => {
    if (!open) return;
    // Use capture phase to intercept before other handlers
    document.addEventListener('keydown', handleKeyDown, true);
    return () => document.removeEventListener('keydown', handleKeyDown, true);
  }, [open, handleKeyDown]);

  if (!visible) return null;

  return (
    <div
      className={`fixed inset-0 z-[100] flex items-center justify-center p-3 md:p-6 transition-colors duration-300 ease-out ${
        animating ? 'bg-ink/20' : 'bg-transparent'
      }`}
      onClick={onClose}
      role="dialog"
      aria-modal="true"
    >
      <div
        className={`relative flex h-full w-full flex-col rounded-lg border border-[var(--figure-edge)] bg-[var(--figure-bg)] p-4 shadow-2xl transition-transform duration-300 ease-out md:p-8 ${
          animating ? 'scale-100' : 'scale-[0.97]'
        }`}
        onClick={(e) => e.stopPropagation()}
      >
        <header className="flex shrink-0 items-center justify-between gap-6">
          <div className="min-w-0">
            {context && (
              <p className="font-sans text-[13px] uppercase tracking-[0.2em] text-sage md:text-[15px]">{context}</p>
            )}
          </div>
          <button
            type="button"
            onClick={onClose}
            aria-label="Close diagram"
            title="Close (Esc)"
            className="flex h-8 w-8 shrink-0 cursor-pointer items-center justify-center rounded-sm text-muted transition-colors duration-300 hover:bg-sage-soft hover:text-ink focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-sage"
          >
            <svg width="14" height="14" viewBox="0 0 16 16" fill="none" aria-hidden="true">
              <path d="M3 3l10 10M13 3L3 13" stroke="currentColor" strokeLinecap="round" />
            </svg>
          </button>
        </header>
        <div className="min-h-0 w-full flex-1 pt-4 [&_svg]:h-full [&_svg]:w-full">
          {children}
        </div>
      </div>
    </div>
  );
}

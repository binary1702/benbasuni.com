'use client';

import { useEffect, useCallback, useState, type ReactNode } from 'react';

type Props = {
  open: boolean;
  onClose: () => void;
  children: ReactNode;
};

export function FigureModal({ open, onClose, children }: Props) {
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
      className={`fixed inset-0 z-[100] flex items-center justify-center p-8 md:p-16 transition-colors duration-300 ease-out ${
        animating ? 'bg-ink/20' : 'bg-transparent'
      }`}
      onClick={onClose}
      role="dialog"
      aria-modal="true"
    >
      <div
        className={`relative w-full max-w-4xl rounded-lg bg-ivory p-6 shadow-2xl transition-transform duration-300 ease-out md:p-8 ${
          animating ? 'scale-100' : 'scale-[0.97]'
        }`}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="[&_svg]:h-auto [&_svg]:w-full">{children}</div>
      </div>
    </div>
  );
}

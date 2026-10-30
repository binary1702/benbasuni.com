'use client';

import { useEffect, useState, useCallback } from 'react';

/* Sun icon for light mode */
function SunIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 16 16" fill="none" aria-hidden="true">
      <circle cx="8" cy="8" r="3" stroke="currentColor" />
      <path d="M8 1v2M8 13v2M1 8h2M13 8h2M3.5 3.5l1.5 1.5M11 11l1.5 1.5M3.5 12.5l1.5-1.5M11 5l1.5-1.5" stroke="currentColor" strokeLinecap="round" />
    </svg>
  );
}

/* Moon icon for dark mode */
function MoonIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 16 16" fill="none" aria-hidden="true">
      <path d="M13.5 10.5A6 6 0 015.5 2.5 6 6 0 1013.5 10.5z" stroke="currentColor" strokeLinejoin="round" />
    </svg>
  );
}

export function ThemeToggle() {
  const [dark, setDark] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    // Check localStorage or system preference
    const saved = localStorage.getItem('theme');
    if (saved === 'dark') {
      setDark(true);
      document.documentElement.setAttribute('data-theme', 'blueprint');
    } else if (saved === 'light') {
      setDark(false);
      document.documentElement.removeAttribute('data-theme');
    } else {
      // Check system preference
      const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
      setDark(prefersDark);
      if (prefersDark) {
        document.documentElement.setAttribute('data-theme', 'blueprint');
      }
    }
  }, []);

  const toggle = useCallback(() => {
    setDark((d) => {
      const next = !d;
      if (next) {
        document.documentElement.setAttribute('data-theme', 'blueprint');
        localStorage.setItem('theme', 'dark');
      } else {
        document.documentElement.removeAttribute('data-theme');
        localStorage.setItem('theme', 'light');
      }
      return next;
    });
  }, []);

  // Prevent hydration mismatch - show empty placeholder until mounted
  if (!mounted) {
    return (
      <button
        type="button"
        className="flex h-7 w-7 cursor-pointer items-center justify-center rounded-sm text-muted transition-colors duration-500 hover:bg-sage-soft hover:text-ink focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-sage"
        aria-label="Toggle theme"
      >
        <span className="h-[14px] w-[14px]" />
      </button>
    );
  }

  return (
    <button
      type="button"
      onClick={toggle}
      title={dark ? 'Switch to light mode' : 'Switch to dark mode'}
      className="flex h-7 w-7 cursor-pointer items-center justify-center rounded-sm text-muted transition-colors duration-500 hover:bg-sage-soft hover:text-ink focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-sage"
    >
      {dark ? <SunIcon /> : <MoonIcon />}
      <span className="sr-only">{dark ? 'Switch to light mode' : 'Switch to dark mode'}</span>
    </button>
  );
}

'use client';

import Link from 'next/link';
import { useState } from 'react';

export function MobileNav() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="md:hidden">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="p-2 text-neutral-600 dark:text-neutral-400"
        aria-label="Toggle menu"
      >
        {isOpen ? (
          <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" />
          </svg>
        ) : (
          <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        )}
      </button>
      {isOpen && (
        <div className="absolute left-0 right-0 top-full border-b border-neutral-200 bg-white px-6 py-4 dark:border-neutral-800 dark:bg-neutral-950">
          <ul className="flex flex-col gap-4 text-sm">
            <li>
              <Link
                href="/about"
                onClick={() => setIsOpen(false)}
                className="text-neutral-600 hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-neutral-100"
              >
                About
              </Link>
            </li>
            <li>
              <Link
                href="/music"
                onClick={() => setIsOpen(false)}
                className="text-neutral-600 hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-neutral-100"
              >
                Music
              </Link>
            </li>
            <li>
              <Link
                href="/writing"
                onClick={() => setIsOpen(false)}
                className="text-neutral-600 hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-neutral-100"
              >
                Writing
              </Link>
            </li>
            <li>
              <Link
                href="/work"
                onClick={() => setIsOpen(false)}
                className="text-neutral-600 hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-neutral-100"
              >
                Work
              </Link>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
}

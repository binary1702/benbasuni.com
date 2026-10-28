import Link from 'next/link';
import { MobileNav } from './MobileNav';

export function Header() {
  return (
    <header className="relative w-full border-b border-neutral-200 bg-white dark:border-neutral-800 dark:bg-neutral-950">
      <nav className="mx-auto flex max-w-3xl items-center justify-between px-6 py-4">
        <Link
          href="/"
          className="font-serif text-lg font-medium text-neutral-900 dark:text-neutral-100"
        >
          Ben Basuni
        </Link>
        <ul className="hidden items-center gap-6 text-sm md:flex">
          <li>
            <Link
              href="/about"
              className="text-neutral-600 hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-neutral-100"
            >
              About
            </Link>
          </li>
          <li>
            <Link
              href="/music"
              className="text-neutral-600 hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-neutral-100"
            >
              Music
            </Link>
          </li>
          <li>
            <Link
              href="/writing"
              className="text-neutral-600 hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-neutral-100"
            >
              Writing
            </Link>
          </li>
          <li>
            <Link
              href="/work"
              className="text-neutral-600 hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-neutral-100"
            >
              Work
            </Link>
          </li>
        </ul>
        <MobileNav />
      </nav>
    </header>
  );
}

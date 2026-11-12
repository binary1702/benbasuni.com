import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="flex min-h-svh flex-col items-center justify-center px-6 text-center">
      <p className="font-sans text-xs uppercase tracking-[0.2em] text-muted">404</p>
      <h1 className="mt-4 font-serif text-4xl font-light tracking-tight text-ink sm:text-5xl">
        Page not found
      </h1>
      <p className="mt-4 max-w-md font-serif text-lg font-light text-muted">
        The page you are looking for does not exist, or has been moved.
      </p>
      <Link
        href="/"
        className="mt-8 border-b border-ink/40 pb-0.5 font-serif text-lg font-light text-ink transition-all duration-500 hover:border-sage hover:text-sage hover:drop-shadow-[0_0_8px_rgba(134,150,122,0.5)] focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-sage"
      >
        Return home
      </Link>
    </div>
  );
}

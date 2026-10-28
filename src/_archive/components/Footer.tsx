export function Footer() {
  return (
    <footer className="mt-auto border-t border-neutral-200 dark:border-neutral-800">
      <div className="mx-auto max-w-3xl px-6 py-8">
        <p className="text-sm text-neutral-500 dark:text-neutral-500">
          &copy; {new Date().getFullYear()} Ben Basuni
        </p>
      </div>
    </footer>
  );
}

interface PageHeaderProps {
  title: string;
  subtitle?: string;
}

export function PageHeader({ title, subtitle }: PageHeaderProps) {
  return (
    <header className="mb-12">
      <h1 className="font-serif text-3xl font-medium text-neutral-900 dark:text-neutral-100">
        {title}
      </h1>
      {subtitle && (
        <p className="mt-3 text-lg text-neutral-600 dark:text-neutral-400">
          {subtitle}
        </p>
      )}
    </header>
  );
}

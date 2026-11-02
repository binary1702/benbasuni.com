import { ThoughtsShell } from '@/components';
import { navSections } from '@/content/nav';

/* Books share the essay shell: sidebar on the left, the reader on the right. */
export default function BooksLayout({ children }: LayoutProps<'/books'>) {
  return <ThoughtsShell sections={navSections()}>{children}</ThoughtsShell>;
}

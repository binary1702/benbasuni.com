import { ThoughtsShell } from '@/components';
import { navSections } from '@/content/nav';

/* Essay pages: collapsible sidebar on the left, the essay on the right. */
export default function ThoughtsLayout({ children }: LayoutProps<'/[kind]'>) {
  return <ThoughtsShell sections={navSections()}>{children}</ThoughtsShell>;
}

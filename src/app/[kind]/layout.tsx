import { ThoughtsShell } from '@/components';
import { thoughts, getChapters, thoughtPath, KINDS, KIND_LABEL } from '@/content/thoughts';

/* Essay pages: collapsible sidebar on the left, the essay on the right. */
export default function ThoughtsLayout({ children }: LayoutProps<'/[kind]'>) {
  const sections = KINDS.map((kind) => ({
    label: KIND_LABEL[kind],
    items: thoughts
      .filter((t) => t.kind === kind)
      .map((t) => ({
        href: thoughtPath(t),
        title: t.title,
        date: t.date,
        chapters: getChapters(t).map((c) => c.title ?? 'Opening'),
      })),
  }));
  return <ThoughtsShell sections={sections}>{children}</ThoughtsShell>;
}

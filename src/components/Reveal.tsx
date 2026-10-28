'use client';

import { useEffect, useRef, type CSSProperties, type ReactNode } from 'react';

type Props = {
  children: ReactNode;
  className?: string;
  as?: 'div' | 'section' | 'p' | 'figure' | 'header' | 'footer';
  delay?: number;
  style?: CSSProperties;
};

export function Reveal({ children, className = '', as = 'div', delay = 0, style }: Props) {
  const ref = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const show = () => el.classList.add('is-visible');
    if (!('IntersectionObserver' in window)) {
      show();
      return;
    }
    // Any visible pixel reveals it (tall sections on phones never reach a
    // percentage threshold), and a fallback timer guarantees it regardless.
    const io = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            show();
            io.disconnect();
          }
        }
      },
      { threshold: 0 },
    );
    io.observe(el);
    const fallback = window.setTimeout(show, 1500);
    return () => {
      io.disconnect();
      window.clearTimeout(fallback);
    };
  }, []);

  const Tag = as;
  return (
    <Tag
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      ref={ref as any}
      className={`reveal ${className}`}
      style={{ ...style, ...(delay ? { transitionDelay: `${delay}ms` } : {}) }}
    >
      {children}
    </Tag>
  );
}

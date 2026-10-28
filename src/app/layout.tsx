import type { Metadata } from 'next';
import { Geist, Newsreader } from 'next/font/google';
import { Backdrop } from '@/components';
import './globals.css';

const newsreader = Newsreader({
  variable: '--font-newsreader',
  subsets: ['latin'],
  style: ['normal', 'italic'],
  weight: ['300', '400', '500'],
  display: 'swap',
});

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Ben Basuni',
  description: 'An introduction to Ben Basuni — the person behind Binary 1702.',
  // iOS Safari rewrites ten-digit runs (every π/φ cell) into tel: links,
  // which breaks hydration. Turn that detection off.
  formatDetection: { telephone: false, date: false, address: false, email: false },
};

export default function RootLayout({ children }: LayoutProps<'/'>) {
  return (
    <html lang="en" className={`${newsreader.variable} ${geistSans.variable} h-full`}>
      <body className="min-h-full bg-ivory text-charcoal">
        <Backdrop />
        {children}
      </body>
    </html>
  );
}

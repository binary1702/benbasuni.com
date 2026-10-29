import type { Metadata } from 'next';
import { Geist, Geist_Mono, Newsreader } from 'next/font/google';
import { Backdrop } from '@/components';
import { SITE_URL, SITE_NAME, DESCRIPTION, AUTHOR } from '@/lib/site';
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

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  // Tab titles are the page's path ("/", "/w/oracle", "/work/skeletor"); og:title stays descriptive.
  title: { default: '/', template: '%s' },
  description: DESCRIPTION,
  authors: [{ name: AUTHOR.name, url: AUTHOR.url }],
  creator: AUTHOR.name,
  alternates: { canonical: '/' },
  openGraph: {
    type: 'website',
    siteName: SITE_NAME,
    title: SITE_NAME,
    description: DESCRIPTION,
    url: '/',
    locale: 'en_US',
  },
  twitter: { card: 'summary_large_image', title: SITE_NAME, description: DESCRIPTION },
  robots: { index: true, follow: true },
  // iOS Safari rewrites ten-digit runs (every π/φ cell) into tel: links,
  // which breaks hydration. Turn that detection off.
  formatDetection: { telephone: false, date: false, address: false, email: false },
};

export default function RootLayout({ children }: LayoutProps<'/'>) {
  return (
    <html lang="en" className={`${newsreader.variable} ${geistSans.variable} ${geistMono.variable} h-full`}>
      <body className="min-h-full bg-ivory text-charcoal">
        <Backdrop />
        {children}
      </body>
    </html>
  );
}

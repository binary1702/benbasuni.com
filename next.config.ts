import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Let phones on the home network load the dev server's assets
  // (Next blocks cross-origin dev requests by default).
  allowedDevOrigins: ['benbasuni-com.loc', 'lh'],
  // Very old Book of Creation link (other /christ/<book>?p=N links redirect in app/[kind]/[slug]/page.tsx).
  async redirects() {
    return [
      { source: "/christ/the-creation", destination: "/books/the-first-world/the-first-7-days/before-the-beginning", permanent: true },
      // The series was first published as /books/genesis
      { source: "/books/the-first-man/:path*", destination: "/books/the-first-world/:path*", permanent: true },
      { source: "/books/the-first-man", destination: "/books/the-first-world", permanent: true },
      { source: "/books/the-first-world/the-first-civilization/:path*", destination: "/books/the-first-world/the-city-of-enoch/:path*", permanent: true },
      { source: "/books/the-first-world/the-great-flood/:path*", destination: "/books/the-first-world/noahs-ark/:path*", permanent: true },
      { source: "/books/the-first-world/the-book-of-man/:path*", destination: "/books/the-first-world/adam-cain-lamech/:path*", permanent: true },
      { source: "/books/the-first-world/the-book-of-creation/:path*", destination: "/books/the-first-world/the-first-7-days/:path*", permanent: true },
      { source: "/books/genesis/:path*", destination: "/books/the-first-world/:path*", permanent: true },
    ];
  },
};

export default nextConfig;

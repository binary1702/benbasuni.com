import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Let phones on the home network load the dev server's assets
  // (Next blocks cross-origin dev requests by default).
  allowedDevOrigins: ["192.168.1.*", "192.168.0.*", "10.0.0.*", "lh", "*.local"],
};

export default nextConfig;

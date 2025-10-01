import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */

  // React configuration
  reactStrictMode: true,

  // Build configuration
  output: "standalone",
  poweredByHeader: false,

  // Experimental features
  experimental: {
    optimizePackageImports: [
      "gsap",
      "@gsap/react",
      "react-leaflet",
      "react-leaflet-cluster",
      "leaflet",
    ],
    cssChunking: true, // Enable CSS chunking
  },

  // Performance configuration
  onDemandEntries: {
    maxInactiveAge: 25 * 1000, // 25 seconds
    pagesBufferLength: 2, // Keep 2 pages in buffer
  },
};

export default nextConfig;

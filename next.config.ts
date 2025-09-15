import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  allowedDevOrigins: ["http://localhost:3000"],
  productionBrowserSourceMaps: false,

  eslint: {
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;

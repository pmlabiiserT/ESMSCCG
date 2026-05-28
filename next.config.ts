import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  basePath: '/ESMSCCG',
  images: {
    unoptimized: true,
  },
};

export default nextConfig;

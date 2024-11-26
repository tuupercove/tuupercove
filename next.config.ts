import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactStrictMode: true,
  experimental: {
    urlImports: ['https://cdn.jsdelivr.net', 'https://cdn.skypack.dev', 'https://github.com', 'https://unpkg.com'],
  },
};

export default nextConfig;

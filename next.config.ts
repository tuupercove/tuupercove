import type { NextConfig } from "next";


const nextConfig: NextConfig = {
  /* config options here */
  poweredByHeader: false,
  generateBuildId: async () => {
    // This could be anything, using the latest git hash
    return process.env.GIT_HASH
  },
  /* Redirect */
  async redirects() {
    return [
      // Talents -> Talents redirect (Basic redirect)
      {
        source: `/en/talents`,
        destination: `/en/talent`,
        permanent: true,
      },
      // Talent/:slug -> Talents/:slug redirect (Wildcard path matching)
      {
        source: `/en/talent/:slug`,
        destination: `/en/talents/:slug`,
        permanent: true,
      },
    ]
  },
  
};

export default nextConfig;

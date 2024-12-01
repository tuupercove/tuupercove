import type { NextConfig } from "next";

const STAGING_API_URL = "https://api.hotcup.app/v1";

function getApiUrl() {
  // @ts-ignore
  return process.env.BROWSER_BASE_URL ?? globalThis.BROWSER_BASE_URL ?? STAGING_API_URL;
}

function isProduction() {
  return process.env.NODE_ENV === "production";
}

function getDomain() {
  if (process.env.NODE_ENV === "production") {
    if (process.env.SITE_URL) {
      return process.env.SITE_URL;
    }
    // @ts-ignore
    else if (process.env.CF_PAGES_URL || globalThis.CF_PAGES_URL) {
      // @ts-ignore
      return process.env.CF_PAGES_URL ?? globalThis.CF_PAGES_URL;
    } else if (process.env.HEROKU_APP_NAME) {
      return `https://${process.env.HEROKU_APP_NAME}.herokuapp.com`;
    } else if (process.env.VERCEL_URL) {
      return `https://${process.env.VERCEL_URL}`;
    } else if (getApiUrl() === STAGING_API_URL) {
      return "https://staging.hotcup.app";
    } else {
      return "https://hotcup.app";
    }
  } else {
    const port = process.env.PORT || 3000;
    return `http://localhost:${port}`;
  }
}

const nextConfig: NextConfig = {
  /* config options here */
  reactStrictMode: true,
  experimental: {
    urlImports: ['https://cdn.jsdelivr.net', 'https://cdn.skypack.dev', 'https://github.com', 'https://unpkg.com', 'https://kit-pro.fontawesome.com', 'https://www.youtube.com', 'https://youtube.com'],
  },
  runtimeConfig: {
    // @ts-ignore
    apiBaseUrl: process.env.BASE_URL ?? globalThis.BASE_URL ?? getApiUrl(),
    // @ts-ignore
    rateLimitKey: process.env.RATE_LIMIT_IGNORE_KEY ?? globalThis.RATE_LIMIT_IGNORE_KEY,
    pyroBaseUrl: process.env.PYRO_BASE_URL,
    public: {
      apiBaseUrl: getApiUrl(),
      pyroBaseUrl: process.env.PYRO_BASE_URL,
      siteUrl: getDomain(),
      production: isProduction(),

      owner: process.env.VERCEL_GIT_REPO_OWNER || "modrinth",
      slug: process.env.VERCEL_GIT_REPO_SLUG || "code",
      branch:
        process.env.VERCEL_GIT_COMMIT_REF ||
        process.env.CF_PAGES_BRANCH ||
        // @ts-ignore
        globalThis.CF_PAGES_BRANCH ||
        "master",
      hash:
        process.env.VERCEL_GIT_COMMIT_SHA ||
        process.env.CF_PAGES_COMMIT_SHA ||
        // @ts-ignore
        globalThis.CF_PAGES_COMMIT_SHA ||
        "unknown",
    },
  },
};

export default nextConfig;

import type { NextConfig } from "next";

// GITHUB_REPOSITORY is set automatically in GitHub Actions as "owner/repo-name".
// Locally (npm run dev) it's undefined, so basePath stays empty.
const repoName = process.env.GITHUB_REPOSITORY?.split("/")[1];
const basePath = repoName ? `/${repoName}` : "";

const nextConfig: NextConfig = {
  output: "export",
  basePath,
  images: {
    unoptimized: true,
  },
  env: {
    // Used for raw asset links (e.g. <a href>) that Next doesn't auto-prefix.
    NEXT_PUBLIC_BASE_PATH: basePath,
  },
};

export default nextConfig;

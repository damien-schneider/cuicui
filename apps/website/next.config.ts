import type { NextConfig } from "next";
const nextConfig: NextConfig = {
  // experimental: {
  //   serverComponentsExternalPackages: ["shiki", "vscode-oniguruma"],
  // },
  transpilePackages: ["shiki", "next-mdx-remote"],
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**",
      },
    ],
  },
};

module.exports = nextConfig;

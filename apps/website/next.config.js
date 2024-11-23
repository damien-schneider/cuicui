/** @type {import('next').NextConfig} */
const nextConfig = {
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

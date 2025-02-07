import { fileURLToPath } from "node:url";
import { createJiti } from "jiti";
const jiti = createJiti(fileURLToPath(import.meta.url));

// Import env here to validate during build. Using jiti we can import .ts files :)
await jiti.import("./src/env.ts");

/** @type {import('next').NextConfig} **/
const nextConfig = {
  experimental: {
    // serverComponentsExternalPackages: ["shiki", "vscode-oniguruma"],
    reactCompiler: true,
  },
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

export default nextConfig;

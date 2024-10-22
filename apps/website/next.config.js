/** @type {import('next').NextConfig} */
const nextConfig = {
	// experimental: {
	//   serverComponentsExternalPackages: ["shiki", "vscode-oniguruma"],
	// },
	transpilePackages: ["shiki"],
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

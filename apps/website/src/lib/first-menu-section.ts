import { CUICUI_GITHUB_URL } from "@/lib/site.const";

export const firstMenuSection = {
	name: "Info",
	noAlphabeticalSort: true,
	categoryList: [
		{
			name: "Why another library?",
			slug: "about",
			description:
				"CuiCui is a collection of components that I use in my projects. I wanted to share them with the world.",
		},
		{
			name: "Getting Started",
			slug: "getting-started",
			description:
				"Learn how to use CuiCui in your project. It's easy and simple.",
		},
		{
			name: "Contribute",
			slug: "contribute",
			description:
				"Help us make CuiCui better. Contribute to the project with your ideas or directly on GitHub.",
			href: CUICUI_GITHUB_URL,
		},
		// {
		// 	name: "Roadmap",
		// 	slug: "roadmap",
		// 	description:
		// 		"See what's coming next in CuiCui. We have a lot of cool stuff planned.",
		// 	href: "https://cuicui.featurebase.app/roadmap",
		// },
		{
			name: "Changelog",
			slug: "changelog",
			description: "See the latest changes in CuiCui.",
		},
	],
};

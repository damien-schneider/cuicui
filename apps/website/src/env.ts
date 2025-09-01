import { createEnv } from "@t3-oss/env-nextjs";
import { z } from "zod";

export const env = createEnv({
	server: {},
	client: {
		//@ts-ignore
		NODE_ENV: z.string().min(1),
		NEXT_PUBLIC_PLAUSIBLE_DOMAIN: z.url().min(1),
		NEXT_PUBLIC_SITE_URL: z.url().min(1),
		NEXT_PUBLIC_CUICUI_GITHUB_URL: z.url().min(1),
	},
	// If you're using Next.js < 13.4.4, you'll need to specify the runtimeEnv manually
	runtimeEnv: {
		//@ts-ignore
		NODE_ENV: process.env.NODE_ENV,
		NEXT_PUBLIC_PLAUSIBLE_DOMAIN: process.env.NEXT_PUBLIC_PLAUSIBLE_DOMAIN,
		NEXT_PUBLIC_SITE_URL: process.env.NEXT_PUBLIC_SITE_URL,
		NEXT_PUBLIC_CUICUI_GITHUB_URL: process.env.NEXT_PUBLIC_CUICUI_GITHUB_URL,
	},
	// For Next.js >= 13.4.4, you only need to destructure client variables:
	// experimental__runtimeEnv: {
	//   NEXT_PUBLIC_PUBLISHABLE_KEY: process.env.NEXT_PUBLIC_PUBLISHABLE_KEY,
	// }
});

import { type BundledLanguage, type BundledTheme, codeToHtml } from "shiki";
import { cn } from "@/src/utils/cn/cn";

import type { HTMLAttributes } from "react";
import "./style.css";
type ShikiProps = {
	code: string;
	lang: BundledLanguage;
	theme: BundledTheme;
	className?: string;
};
export default async function ShikiCode({
	code,
	lang,
	theme,
	className,
	...props
}: Readonly<ShikiProps> & HTMLAttributes<HTMLDivElement>) {
	const html = await codeToHtml(code, {
		lang,
		theme,
	});

	return (
		<div
			className={cn(
				"text-sm hue-rotate-0 invert-0 *:bg-transparent dark:hue-rotate-180 dark:invert",
				className,
			)}
			{...props}
			// biome-ignore lint/security/noDangerouslySetInnerHtml: <explanation>
			dangerouslySetInnerHTML={{ __html: html }}
		/>
	);
}

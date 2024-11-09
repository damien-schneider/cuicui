import { SectionsList } from "@cuicui/ui";

import { FloatingDock } from "#/src/components/floating-dock-navigation/floating-docks-component";
import { ArrowUpRightIcon, GithubIcon } from "lucide-react";
import { cn } from "#/src/utils/cn";
import Link from "next/link";
import { CUICUI_GITHUB_URL } from "@/lib/site.const";
import { FloatingDockToggleTheme } from "#/src/components/floating-dock-navigation/floating-dock-toggle-theme";

const sectionLinks = SectionsList.map((section) => {
	return {
		title: section.name,
		Icon: <section.icon className="size-6" />,
		href: `/${section.slug}`,
	};
});

export function CuicuiFloatingDock() {
	return (
		<div
			className={cn(
				"inline-flex items-center fixed gap-2 justify-center z-50 p-2",
				"right-4 bottom-4",
				"md:bottom-4 md:right-auto md:left-1/2 md:-translate-x-1/2",
				"scale-90 hover:scale-100 transform-gpu transition duration-150",
			)}
		>
			<Link
				href={CUICUI_GITHUB_URL}
				title="Damien Schneider GitHub"
				className={cn(
					"group relative h-14 w-10 ml-2 overflow-hidden rounded-full bg-neutral-50 dark:bg-neutral-900 p-2 border border-neutral-500/20",
					"hover:scale-110 transform-gpu transition-transform duration-150",
				)}
				target="_blank"
			>
				<GithubIcon
					className={cn(
						"size-5 text-neutral-600 transition dark:text-neutral-300 z-50 duration-500 absolute -translate-x-1/2 left-1/2 top-2 transform-gpu mr-2 group-hover:translate-y-5 group-hover:scale-90",
					)}
				/>
				<ArrowUpRightIcon
					className={cn(
						"size-4 text-neutral-600 transition dark:text-neutral-300 z-50 duration-300 absolute right-0 top-2 transform-gpu mr-2 group-hover:translate-y-0 group-hover:-translate-x-0 translate-x-8 -translate-y-5",
					)}
				/>
			</Link>
			<div className="order-3 md:order-none">
				<FloatingDock
					// mobileClassName="translate-y-20" // only for demo, remove for production
					items={sectionLinks}
				/>
			</div>
			<FloatingDockToggleTheme />
		</div>
	);
}

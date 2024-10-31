"use client";

import { SectionsList } from "@cuicui/ui";

import { FloatingDock } from "#/src/app/floating-docks-component";
import { HomeIcon, MoonIcon, SunIcon } from "lucide-react";
import { usePathname } from "next/navigation";
import { useTheme } from "next-themes";
import { cn } from "#/src/utils/cn";
import Link from "next/link";

export function CuicuiFloatingDock() {
	const pathName = usePathname();
	const { setTheme, theme, resolvedTheme } = useTheme();

	const handleSwitchTheme = () => {
		if (resolvedTheme === "dark") {
			setTheme("light");
		}
		if (resolvedTheme === "light") {
			setTheme("dark");
		}
	};
	return (
		<div className="relative w-full h-full">
			<div
				className={cn(
					"flex items-center fixed gap-2 justify-center z-50 ",
					"right-4 bottom-4",
					"md:bottom-2  md:right-auto md:left-1/2 md:-translate-x-1/2",
				)}
			>
				<Link
					href="/"
					className="relative h-14 w-10 ml-2 overflow-hidden transition rounded-full bg-neutral-50 dark:bg-neutral-900 p-2 border border-neutral-500/20"
				>
					<HomeIcon
						className={cn(
							"size-5 text-neutral-600 transition dark:text-neutral-300 z-50 duration-500 absolute -translate-x-1/2 left-1/2 top-2 transform-gpu mr-2",
						)}
					/>
				</Link>
				<div className="order-3 md:order-none">
					<FloatingDock
						// mobileClassName="translate-y-20" // only for demo, remove for production
						items={sectionLinks}
					/>
				</div>
				<button
					type="button"
					onClick={handleSwitchTheme}
					className="relative h-14 w-10 overflow-hidden transition rounded-full bg-neutral-50 dark:bg-neutral-900 p-2 border border-neutral-500/20"
				>
					<SunIcon
						className={cn(
							"size-5 text-neutral-600 transition dark:text-neutral-300 z-50 duration-500 absolute -translate-x-1/2 left-1/2 top-2 transform-gpu",
							resolvedTheme === "light"
								? "opacity-100 translate-y-0 scale-100"
								: "opacity-50 -translate-y-8 scale-75",
						)}
					/>

					<MoonIcon
						className={cn(
							"size-5 text-neutral-600 transition dark:text-neutral-300 z-50 duration-500 absolute -translate-x-1/2 left-1/2 bottom-2 transform-gpu",
							resolvedTheme === "dark"
								? "opacity-100 translate-y-0 scale-100"
								: "opacity-50 translate-y-8 scale-75",
						)}
					/>
				</button>
			</div>
		</div>
	);
}

const sectionLinks = SectionsList.map((section) => {
	return {
		title: section.name,
		Icon: section.icon,
		href: `/${section.slug}`,
	};
});

const homeLink = {
	title: "Home",
	icon: (
		<HomeIcon className="h-full w-full text-neutral-500 dark:text-neutral-300" />
	),
	href: "/",
};
const links = [homeLink, ...sectionLinks];

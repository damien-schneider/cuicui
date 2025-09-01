"use client";
import Link from "next/link";

import Image from "next/image";

import LogoLarge from "#/src/assets/logo/logo-large.png";

import Byline from "../../../../ui/byline";

import {
	ScrollArea,
	ScrollAreaViewport,
} from "../../../../ui/shadcn/scrollarea";
import StarCuicuiGithubButton from "../../../../ui/star-github-project-button";
import { SearchMenu } from "../../../../components/search-menu/search-menu";
import { cn } from "@/cuicui/utils/cn";
import { NavigationSidemenuAnimatedBackground } from "#/src/app/(site)/components/sidemenu/navigation-animated-background";
import { firstMenuSection } from "#/src/lib/first-menu-section";
import { GlobalNavItem } from "#/src/app/(site)/components/sidemenu/navigation-item";
import { lastChangelogDate } from "#/src/changelogs/last-changelog-date";
import NewSectionSelector from "#/src/app/(site)/components/sidemenu/new-section-selector";
import { NewThemeSwitch } from "#/src/app/(site)/components/sidemenu/new-theme-selector";
import { LogoArmony } from "#/src/app/(site)/components/sidemenu/logo-armony";
import { hooksRegistry, type ExtendedRegistryItem } from "@cuicui/hooks";
import LogoTypo from "#/src/assets/logo/typo-logo-without-bg.png";

export function SidemenuContent({
	className,
}: Readonly<{ className?: string }>) {
	const today = new Date();
	const isNew = lastChangelogDate
		? lastChangelogDate > new Date(today.setDate(today.getDate() - 7))
		: false;
	return (
		<div className={cn("", className)}>
			<div className="w-full">
				<div className="flex items-center justify-between px-4 py-4">
					<Link
						className="group flex w-fit items-center gap-x-2.5 transition-transform hover:scale-105"
						href="/"
						title="Cuicui - The all in one React component library"
					>
						<Image alt="Cuicui logo" src={LogoLarge} width={100} />
						<span aria-hidden="true" className="sr-only">
							Cuicui - Best all in one React component library
						</span>
					</Link>
					<NewThemeSwitch />
				</div>
				{/* <StarCuicuiGithubButton /> */}
			</div>
			<NewSectionSelector />
			<div className="w-full mt-8">
				<NavigationSidemenuAnimatedBackground>
					{firstMenuSection.categoryList.map((category, _index) => (
						<li className="block" data-id={category.slug} key={category.slug}>
							<GlobalNavItem
								Icon={null}
								href={category.href ?? `/${category.slug}`}
								isMobile={false}
								name={category.name}
								tag={category.slug === "changelog" && isNew ? "New" : undefined}
								target={category.href ? "newWindow" : "sameWindow"}
							/>
						</li>
					))}
				</NavigationSidemenuAnimatedBackground>
			</div>
			<ScrollArea className="w-full h-full mt-4">
				<ScrollAreaViewport className="h-full" id="sidemenu-container-new">
					{/* <NavigationMenu /> */}
					<nav className={cn("mt-5 mb-12 px-1 min-h-full")}>
						<div className="mb-2 px-3 text-xs font-semibold uppercase tracking-wider text-neutral-500 dark:text-neutral-400">
							<p>Hooks</p>
						</div>
						<NavigationSidemenuAnimatedBackground>
							{hooksRegistry.items.map((item) => (
								<li key={item.name} className="block" data-id={item.name}>
									<GlobalNavItem
										Icon={(item as ExtendedRegistryItem).icon || null}
										href={`/hooks/${item.name}`}
										isMobile={false}
										name={item.title || item.name}
										tag={undefined}
										target="sameWindow"
									/>
								</li>
							))}
						</NavigationSidemenuAnimatedBackground>
					</nav>
				</ScrollAreaViewport>
			</ScrollArea>

			<ArmonyCard />
			<SearchMenu className="mb-2" />
			<Byline />
		</div>
	);
}

const ArmonyCard = () => {
	return (
		<div className="w-full">
			<p className="flex items-center justify-end text-sm text-neutral-500 dark:text-neutral-400 mb-2 gap-2">
				Sponsored by{" "}
				<Link
					href={"https://www.typo.so"}
					className="flex items-center gap-1  hover:translate-x-1 transition"
				>
					<Image
						src={LogoTypo}
						alt="Typo Logo"
						width={100}
						height={100}
						className="w-[32px] h-fit"
					/>
					<span className="text-sm font-semibold">Typo.</span>
				</Link>
			</p>

			<Link
				href={"https://www.typo.so"}
				className="w-full h-20 group bg-white/0 dark:bg-sky-950/30 rounded-lg flex items-center justify-center relative overflow-hidden border border-sky-400/20 hover:border-sky-800/20 hover:bg-sky-500/5 dark:hover:bg-sky-900/40 transition"
			>
				<div className="absolute -left-8 -bottom-8 blur-3xl group-hover:opacity-50 size-32 rounded-full bg-conic-180 group-hover:scale-200 from-sky-50 via-sky-800/10 to-sky-800/30 dark:from-sky-500/5 dark:via-sky-800/50 group-hover:translate-x-68 duration-500 transition-all" />

				<Image
					src={LogoTypo}
					alt="Typo Logo"
					width={200}
					height={200}
					className="w-24 h-fit absolute -left-2 -bottom-4 group-hover:scale-105 transition"
				/>
				<p className="text-sm font-medium tracking-tight text-sky-800/70 dark:text-sky-100/70 pl-8">
					your life workspace.
				</p>
			</Link>
		</div>
	);
};

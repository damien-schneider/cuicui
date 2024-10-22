"use client";
import { AnimatePresence, motion } from "framer-motion";

import { PlusIcon, SquareIcon } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";
import { cn } from "@/cuicui/utils/cn/cn";

//TODO : Improve by refactoring the different sections into their own components
//TODO : Improve by adding a dark version
//TODO : Add dimensions section with sliders

const menuCategories = [
	{ label: "Dimensions", slug: "dimensions", menuWidth: 320, menuHeight: 240 },
	{
		label: "Aspect Ratio",
		slug: "aspect-ratio",
		menuWidth: 320,
		menuHeight: 188,
	},
	{ label: "Prompt", slug: "prompt", menuWidth: 320, menuHeight: 240 },
] as const;

export default function DynamicSettingsVariant1() {
	const [isOpen, setIsOpen] = useState(false);
	const [subMenuSelected, setSubMenuSelected] = useState("dimensions");
	const handleOpenSettings = () => {
		setIsOpen(!isOpen);
	};
	return (
		<motion.div
			animate={{
				height: isOpen
					? menuCategories.find((item) => item.slug === subMenuSelected)
							?.menuHeight
					: 52,
				width: isOpen
					? menuCategories.find((item) => item.slug === subMenuSelected)
							?.menuWidth
					: 132,
			}}
			className={cn(
				"items-center justify-between overflow-hidden rounded-2xl bg-neutral-900 p-2 text-neutral-50 shadow-lg",
				!isOpen && "hover:bg-neutral-800",
			)}
			transition={{
				type: "spring",
				duration: 0.6,
				// damping: 8,
				// stiffness: 120,
			}}
		>
			<div className="h-full">
				<div
					className={cn(
						"flex h-full transform-gpu flex-col justify-between gap-2 transition-all duration-300",
					)}
				>
					<div
						className={cn(
							"group flex transform-gpu items-center justify-between gap-2 transition-all duration-300",
						)}
					>
						{isOpen ? (
							<NavigationMenu
								setSubMenuSelected={setSubMenuSelected}
								subMenuSelected={subMenuSelected}
							/>
						) : (
							<button
								className={cn(
									"flex transform-gpu gap-2 text-nowrap p-2 font-medium text-neutral-500 text-sm transition-all group-hover:text-neutral-50",
								)}
								onClick={() => setIsOpen(true)}
								type="button"
							>
								Add Style
							</button>
						)}
						<button
							className="size-8 transform-gpu text-neutral-400 transition-colors duration-500 hover:text-neutral-300"
							onClick={() => handleOpenSettings()}
							type="button"
						>
							<PlusIcon
								className={cn(
									" transform-gpu transition-transform duration-300",
									isOpen ? "rotate-45" : "rotate-0",
								)}
							/>
						</button>
					</div>
					{isOpen && subMenuSelected === "aspect-ratio" && (
						<motion.div
							animate={{ opacity: 1, filter: "blur(0px)" }}
							className="flex flex-col justify-between gap-4"
							initial={{ opacity: 0, filter: "blur(4px)" }}
							transition={{ duration: 1.2, type: "spring" }}
						>
							<AspectRatioSection />
							<div className="flex justify-between">
								<div className="ml-2 flex items-center gap-2">
									<div className="size-2 rounded-full bg-yellow-200" />
									<p className="text-neutral-500 text-sm">Changes</p>
								</div>
								<button
									className="rounded-lg bg-yellow-200 px-2 py-1 font-medium text-neutral-800"
									onClick={() => {
										handleOpenSettings();
										toast.message("Changes done", {
											description: "Changes validated and applied successfully",
										});
									}}
									type="submit"
								>
									Apply Changes
								</button>
							</div>
						</motion.div>
					)}
					{isOpen && subMenuSelected === "prompt" && (
						<motion.div
							animate={{ opacity: 1, filter: "blur(0px)" }}
							className="flex h-full flex-col justify-between gap-4"
							initial={{ opacity: 0, filter: "blur(4px)" }}
							transition={{ duration: 1.2, type: "spring" }}
						>
							<textarea
								className="h-[120px] w-full resize-none rounded-[6px] bg-transparent px-2 py-[6px] text-sm text-white placeholder:text-white/30 focus-visible:outline focus-visible:outline-2 focus-visible:outline-yellow-200 focus-visible:outline-offset-2"
								placeholder="Add a new prompt"
							/>
							<div className="flex justify-between">
								<div className="ml-2 flex items-center gap-2">
									<div className="size-2 rounded-full bg-yellow-200" />
									<p className="text-neutral-500 text-sm">Changes</p>
								</div>
								<button
									className="rounded-lg bg-yellow-200 px-2 py-1 font-medium text-neutral-800"
									onClick={() => {
										handleOpenSettings();
										toast.message("Changes done", {
											description: "Changes validated and applied successfully",
										});
									}}
									type="submit"
								>
									Apply Changes
								</button>
							</div>
						</motion.div>
					)}
					{isOpen && subMenuSelected === "dimensions" && (
						<motion.div
							animate={{ opacity: 1, filter: "blur(0px)" }}
							className="flex flex-col justify-between gap-4"
							initial={{ opacity: 0, filter: "blur(4px)" }}
							transition={{ duration: 1.2, type: "spring" }}
						>
							<div className="flex justify-between">
								<div className="ml-2 flex items-center gap-2">
									<div className="size-2 rounded-full bg-yellow-200" />
									<p className="text-neutral-500 text-sm">Changes</p>
								</div>
								<button
									className="rounded-lg bg-yellow-200 px-2 py-1 font-medium text-neutral-800"
									onClick={() => {
										handleOpenSettings();
										toast.message("Changes done", {
											description: "Changes validated and applied successfully",
										});
									}}
									type="submit"
								>
									Apply Changes
								</button>
							</div>
						</motion.div>
					)}
				</div>
			</div>
		</motion.div>
	);
}

const aspectRatioList = [
	{ label: "1:1", icon: SquareIcon },
	{ label: "16:9", icon: SquareIcon },
	{ label: "21:9", icon: SquareIcon },
	{ label: "3:4", icon: SquareIcon },
	{ label: "4:3", icon: SquareIcon },
	{ label: "Custom", icon: SquareIcon },
];

function AspectRatioSection() {
	const [selected, setSelected] = useState<number>(0);
	return (
		<div className="flex flex-wrap gap-2">
			{aspectRatioList.map((item, index) => (
				<button
					className={cn(
						"inline-flex w-fit transform-gpu items-center gap-2 rounded-md px-3 py-2 transition-colors duration-300",
						index === selected
							? "bg-yellow-200/10 text-yellow-200"
							: "text-neutral-500 hover:text-yellow-200",
					)}
					key={item.label}
					onClick={() => setSelected(index)}
					type="button"
				>
					<item.icon className="size-5 stroke-yellow-200" />
					{item.label}
				</button>
			))}
		</div>
	);
}
// function SliderRow() {
//   return (
//     <div className="flex items-center gap-2">
//       <div className="rounded-full size-2 bg-yellow-200" />
//       <p className="text-sm text-neutral-500">Changes</p>
//     </div>
//   );
// }

function NavigationMenu({
	setSubMenuSelected,
	subMenuSelected,
}: Readonly<{
	setSubMenuSelected: (slug: string) => void;
	subMenuSelected: string;
}>) {
	return (
		<nav className="flex flex-row">
			{menuCategories.map((button, _index) => (
				<button
					className={cn(
						"relative inline-flex w-fit transform-gpu whitespace-nowrap rounded-md px-2 py-1 font-medium text-neutral-500 text-sm transition-colors duration-300 hover:text-neutral-50",
						subMenuSelected === button.slug && "text-neutral-200",
					)}
					key={button.label}
					onClick={() => setSubMenuSelected(button.slug)}
					type="button"
				>
					<p className="z-20">{button.label}</p>
					<AnimatePresence>
						{subMenuSelected === button.slug && (
							<motion.div
								animate={{ opacity: 1, scale: 1 }}
								className="absolute top-0 right-0 bottom-0 left-0 z-10 rounded-md bg-neutral-700 dark:bg-neutral-800"
								exit={{ opacity: 0, scale: 0.9 }}
								initial={{ opacity: 0, scale: 0.95 }}
								layout={true}
								layoutId="focused-element"
								transition={{ duration: 0.3, ease: "easeInOut" }}
							/>
						)}
					</AnimatePresence>
				</button>
			))}
		</nav>
	);
}

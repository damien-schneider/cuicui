"use client";
import { useOnClickOutside } from "@/cuicui/hooks/use-click-outside/use-click-outside";

import { cn } from "@/cuicui/utils/cn/cn";
import {
	AnimatePresence,
	type MotionValue,
	motion,
	useMotionValue,
	useSpring,
	useTransform,
} from "framer-motion";
import { ListCollapseIcon, type LucideIcon } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { type ReactNode, useEffect, useRef, useState } from "react";

export const FloatingDock = ({
	items,
	desktopClassName,
	mobileClassName,
}: {
	items: {
		title: string;
		Icon: ReactNode;
		href: string;
	}[];
	desktopClassName?: string;
	mobileClassName?: string;
}) => {
	return (
		<>
			<FloatingDockDesktop items={items} className={desktopClassName} />
			<FloatingDockMobile items={items} className={mobileClassName} />
		</>
	);
};

const FloatingDockMobile = ({
	items,
	className,
}: {
	items: {
		title: string;
		Icon: ReactNode;
		href: string;
	}[];
	className?: string;
}) => {
	const ref = useRef<HTMLDivElement>(null);
	const handleClickOutside = (event: MouseEvent | TouchEvent | FocusEvent) => {
		setOpen(false);
	};

	const pathname = usePathname();

	useEffect(() => {
		if (!pathname) {
			return;
		}
		setOpen(false);
	}, [pathname]);

	useOnClickOutside(ref, handleClickOutside);
	const [open, setOpen] = useState(false);
	return (
		<div ref={ref} className={cn("relative block md:hidden ", className)}>
			<AnimatePresence>
				{open && (
					<motion.div
						layoutId="nav"
						className="absolute bottom-full mb-2 inset-x-0 flex flex-col items-end gap-2"
					>
						{items.map((item, idx) => (
							<motion.div
								key={item.title}
								initial={{ opacity: 0, y: 10 }}
								animate={{
									opacity: 1,
									y: 0,
								}}
								exit={{
									opacity: 0,
									y: 10,
									transition: {
										delay: idx * 0.05,
									},
								}}
								transition={{ delay: (items.length - 1 - idx) * 0.05 }}
							>
								<Link
									href={item.href}
									key={item.title}
									title={item.title}
									className={cn(
										"rounded-full w-fit px-4 py-4 bg-neutral-50 border border-neutral-400/20  flex items-center justify-center  gap-2",
										pathname.includes(item.href)
											? "bg-neutral-700 dark:bg-neutral-200 text-neutral-100 dark:text-neutral-800"
											: "dark:bg-neutral-900 text-neutral-500 dark:text-neutral-300",
									)}
									onClick={() => setOpen(false)}
								>
									{item.Icon}
									<p className=" text-nowrap tracking-tighter  font-medium">
										{item.title}
									</p>
								</Link>
							</motion.div>
						))}
					</motion.div>
				)}
			</AnimatePresence>
			<button
				type="button"
				onClick={() => setOpen(!open)}
				className="size-16 rounded-full  border border-neutral-400/20 bg-neutral-50 dark:bg-neutral-800 flex items-center justify-center"
			>
				<ListCollapseIcon className="size-7 text-neutral-500 dark:text-neutral-400" />
			</button>
		</div>
	);
};

const FloatingDockDesktop = ({
	items,
	className,
}: {
	items: { title: string; Icon: ReactNode; href: string }[];
	className?: string;
}) => {
	const mouseX = useMotionValue(Number.POSITIVE_INFINITY);
	return (
		<motion.div
			onMouseMove={(e) => mouseX.set(e.pageX)}
			onMouseLeave={() => mouseX.set(Number.POSITIVE_INFINITY)}
			className={cn(
				"mx-auto hidden md:flex h-14 gap-2 items-end  rounded-full bg-neutral-50 dark:bg-neutral-900 px-2 pb-2 border border-neutral-500/20",
				className,
			)}
		>
			{items.map((item) => (
				<IconContainer mouseX={mouseX} key={item.title} {...item} />
			))}
		</motion.div>
	);
};

function IconContainer({
	mouseX,
	title,
	Icon,
	href,
}: Readonly<{
	mouseX: MotionValue;
	title: string;
	Icon: ReactNode;
	href: string;
}>) {
	const pathname = usePathname();
	const [isActive, setIsActive] = useState(false);

	useEffect(() => {
		if (href === "/") {
			setIsActive(href === pathname);
		} else {
			setIsActive(pathname.includes(href));
		}
	}, [pathname, href]);

	const ref = useRef<HTMLDivElement>(null);

	const distance = useTransform(mouseX, (val) => {
		const bounds = ref.current?.getBoundingClientRect() ?? { x: 0, width: 0 };

		return val - bounds.x - bounds.width / 2;
	});

	const widthTransform = useTransform(distance, [-150, 0, 150], [60, 80, 60]);
	const heightTransform = useTransform(distance, [-150, 0, 150], [40, 60, 40]);

	const widthTransformIcon = useTransform(
		distance,
		[-150, 0, 150],
		[20, 40, 20],
	);
	const heightTransformIcon = useTransform(
		distance,
		[-150, 0, 150],
		[20, 40, 20],
	);

	const width = useSpring(widthTransform, {
		mass: 0.1,
		stiffness: 300,
		damping: 12,
	});
	const height = useSpring(heightTransform, {
		mass: 0.1,
		stiffness: 300,
		damping: 12,
	});

	const widthIcon = useSpring(widthTransformIcon, {
		mass: 0.1,
		stiffness: 300,
		damping: 12,
	});
	const heightIcon = useSpring(heightTransformIcon, {
		mass: 0.1,
		stiffness: 300,
		damping: 12,
	});

	const [hovered, setHovered] = useState(false);

	return (
		<Link href={href} title={title}>
			<motion.div
				ref={ref}
				style={{ width, height }}
				onMouseEnter={() => setHovered(true)}
				onMouseLeave={() => setHovered(false)}
				className={cn(
					"aspect-square rounded-full border border-neutral-400/20 backdrop-blur-2xl flex items-center justify-center relative",
					isActive
						? "bg-neutral-800 dark:bg-neutral-100"
						: "bg-neutral-100 dark:bg-neutral-800",
				)}
			>
				<AnimatePresence>
					{hovered && (
						// ------ Tooltip ------ //
						<motion.div
							initial={{ opacity: 0, y: 10, x: "-50%" }}
							animate={{ opacity: 1, y: 0, x: "-50%" }}
							exit={{ opacity: 0, y: 2, x: "-50%" }}
							className="px-2 py-0.5 whitespace-pre rounded-md bg-neutral-100 dark:bg-neutral-800 dark:text-white border border-neutral-500/20 text-neutral-700 absolute left-1/2 -translate-x-1/2 -top-8 w-fit text-xs"
						>
							{title}
						</motion.div>
					)}
				</AnimatePresence>
				<motion.div
					style={{ width: widthIcon, height: heightIcon }}
					className={cn(
						"flex items-center justify-center",
						isActive
							? "*:text-neutral-100 *:dark:text-neutral-800"
							: "*:text-neutral-800 *:dark:text-neutral-100",
					)}
				>
					{Icon}
				</motion.div>
			</motion.div>
		</Link>
	);
}

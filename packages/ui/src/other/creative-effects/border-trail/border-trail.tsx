"use client";

import { cn } from "@/src/utils/cn/cn";
import { motion, type Transition } from "framer-motion";
import type { CSSProperties } from "react";

type BorderTrailProps = {
	className?: string;
	size?: number;
	transition?: Transition;
	delay?: number;
	onAnimationComplete?: () => void;
	style?: CSSProperties;
};

export function BorderTrail({
	className,
	size = 60,
	transition,
	delay,
	onAnimationComplete,
	style,
}: BorderTrailProps) {
	const BASE_TRANSITION = {
		repeat: Number.POSITIVE_INFINITY,
		duration: 5,
		ease: "linear",
	};

	return (
		<div className="pointer-events-none absolute inset-0 rounded-[inherit] border border-transparent [mask-clip:padding-box,border-box] [mask-composite:intersect] [mask-image:linear-gradient(transparent,transparent),linear-gradient(#000,#000)]">
			<motion.div
				className={cn("absolute aspect-square bg-zinc-500", className)}
				style={{
					width: size,
					offsetPath: `rect(0 auto auto 0 round ${size}px)`,
					...style,
				}}
				animate={{
					offsetDistance: ["0%", "100%"],
				}}
				transition={{
					...(transition ?? BASE_TRANSITION),
					delay: delay,
				}}
				onAnimationComplete={onAnimationComplete}
			/>
		</div>
	);
}

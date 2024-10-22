// animated-number.tsx

"use client";

import {
	motion,
	useMotionValueEvent,
	useScroll,
	useSpring,
	useTransform,
} from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { cn } from "@/cuicui/utils/cn/cn";

const VALUE_TO_REACH = 55000;

export function AnimatedNumberVariant1() {
	const [value, setValue] = useState(0);
	const containerRef = useRef<HTMLDivElement>(null);
	const { scrollYProgress } = useScroll({ container: containerRef });

	const transformedValue = useTransform(
		scrollYProgress,
		[0, 1],
		[0, VALUE_TO_REACH],
	);

	useMotionValueEvent(transformedValue, "change", (latest) => {
		setValue(latest);
		if (scrollYProgress.get() === 1) {
			setValue(VALUE_TO_REACH);
		}
	});

	return (
		<div
			className="relative h-80 w-full overflow-y-auto rounded-3xl border border-neutral-500/40 text-lg dark:text-white"
			ref={containerRef}
		>
			{/* <div className="h-screen p-12 bg-neutral-500/10">Section 1</div> */}
			<div className={cn("h-[200dvh] w-full")}>
				<div className="sticky top-4 p-4">
					<p className=" font-bold text-lg text-neutral-600 dark:text-neutral-300">
						Visitors each days :
					</p>
					<AnimatedNumber
						className={cn(
							"font-bold text-6xl tracking-tighter",
							"bg-gradient-to-b from-neutral-700 to-neutral-800/60 bg-clip-text text-transparent dark:from-neutral-200 dark:to-neutral-200/60",
						)}
						value={
							// This is necessary, otherwise the value will not reach perfectly the end
							scrollYProgress.get().toFixed(2) === "1.00"
								? VALUE_TO_REACH
								: value
						}
					/>
				</div>
			</div>
			{/* <div className="h-screen p-12 bg-neutral-500/10">Section 1</div> */}
		</div>
	);
}

function AnimatedNumber({
	value,
	className,
}: Readonly<{ from?: number; value: number; className?: string }>) {
	const spring = useSpring(value, { mass: 0.8, stiffness: 75, damping: 15 });
	const display = useTransform(spring, (current) =>
		Math.round(Math.abs(current)).toLocaleString(),
	);

	useEffect(() => {
		spring.set(value);
	}, [spring, value]);

	return <motion.p className={cn("", className)}>{display}</motion.p>;
}

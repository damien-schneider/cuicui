"use client";

import { cn } from "@/src/utils/cn/cn";
import {
	motion,
	type SpringOptions,
	useSpring,
	useTransform,
} from "framer-motion";
import { useEffect } from "react";

type AnimatedNumber = {
	value: number;
	className?: string;
	springOptions?: SpringOptions;
};

export function AnimatedNumber({
	value,
	className,
	springOptions,
}: Readonly<AnimatedNumber>) {
	const spring = useSpring(value, springOptions);
	const display = useTransform(spring, (current) =>
		Math.round(current).toLocaleString(),
	);

	useEffect(() => {
		spring.set(value);
	}, [spring, value]);

	return <motion.span className={cn("", className)}>{display}</motion.span>;
}

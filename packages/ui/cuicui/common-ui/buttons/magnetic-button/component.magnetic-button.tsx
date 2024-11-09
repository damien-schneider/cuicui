"use client";
import { useState, useRef, type MouseEvent } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

const SPRING_CONFIG = { damping: 30, stiffness: 400 };
const MAX_DISTANCE = 0.3;

export const MagneticButton = ({
	children,
	...props
}: {
	children: React.ReactNode;
} & { height?: string }) => {
	const [isHovered, setIsHovered] = useState(false);
	const x = useMotionValue(0);
	const y = useMotionValue(0);
	const ref = useRef<HTMLDivElement>(null);
	const springX = useSpring(x, SPRING_CONFIG);
	const springY = useSpring(y, SPRING_CONFIG);

	const calculateDistance = (e: MouseEvent<HTMLDivElement>) => {
		if (ref.current) {
			const rect = ref.current.getBoundingClientRect();
			const centerX = rect.left + rect.width / 2;
			const centerY = rect.top + rect.height / 2;
			const distanceX = e.clientX - centerX;
			const distanceY = e.clientY - centerY;

			if (isHovered) {
				x.set(distanceX * MAX_DISTANCE);
				y.set(distanceY * MAX_DISTANCE);
			} else {
				x.set(0);
				y.set(0);
			}
		}
	};

	return (
		<motion.div
			ref={ref}
			onMouseMove={(e) => {
				calculateDistance(e);
			}}
			onMouseEnter={() => setIsHovered(true)}
			onMouseLeave={() => {
				setIsHovered(false);
				x.set(0);
				y.set(0);
			}}
			style={{
				x: springX,
				y: springY,
				height: props.height || "auto",
			}}
		>
			{children}
		</motion.div>
	);
};

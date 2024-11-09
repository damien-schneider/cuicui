"use client";

import { cn } from "@/cuicui/utils/cn/cn";
import { useState, useRef, useEffect, type ReactNode } from "react";

export function MagneticButton({
	children = "Magnetic Button",
	magneticStrength = 1,
	className,
}: {
	children?: ReactNode;
	magneticStrength?: number;
	className?: string;
}) {
	const [position, setPosition] = useState({ x: 0, y: 0 });
	// const [buttonSize, setButtonSize] = useState({ width: 0, height: 0 });
	const buttonRef = useRef<HTMLButtonElement>(null);

	useEffect(() => {
		const handleMouseMove = (e: MouseEvent) => {
			if (!buttonRef.current) {
				return;
			}
			const rect = buttonRef.current.getBoundingClientRect();
			const centerX = rect.left + rect.width / 2;
			const centerY = rect.top + rect.height / 2;
			const distanceX = e.clientX - centerX;
			const distanceY = e.clientY - centerY;
			const distance = Math.sqrt(distanceX ** 2 + distanceY ** 2);
			const maxDistance = Math.max(rect.width, rect.height);

			if (distance < maxDistance) {
				const magneticX =
					(distanceX / maxDistance) * magneticStrength * (rect.width / 4);
				const magneticY =
					(distanceY / maxDistance) * magneticStrength * (rect.height / 4);
				setPosition({ x: magneticX, y: magneticY });
			} else {
				setPosition({ x: 0, y: 0 });
			}
		};

		const handleMouseLeave = () => {
			setPosition({ x: 0, y: 0 });
		};

		document.addEventListener("mousemove", handleMouseMove);
		buttonRef.current?.addEventListener("mouseleave", handleMouseLeave);

		return () => {
			document.removeEventListener("mousemove", handleMouseMove);
			buttonRef.current?.removeEventListener("mouseleave", handleMouseLeave);
		};
	}, [magneticStrength]);

	return (
		<>
			<button
				type="button"
				ref={buttonRef}
				className={cn(
					"relative inline-flex items-center justify-center rounded-lg bg-neutral-500/20 border tracking-tight border-neutral-400/20 dark:text-neutral-200 text-neutral-600 transition duration-200 ease-out px-3 py-1.5 hover:border-neutral-400/80 hover:bg-neutral-500/30",
					className,
				)}
				style={{
					transform: `translate3D(${position.x}px, ${position.y}px, 0)`,
				}}
			>
				{children}
			</button>
		</>
	);
}

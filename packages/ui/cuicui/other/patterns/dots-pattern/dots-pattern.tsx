"use client";
import { useId } from "react";
import { cn } from "@/cuicui/utils/cn/cn";

type DotPatternProps = {
	width?: number;
	height?: number;
	x?: number;
	y?: number;
	cx?: number;
	cy?: number;
	cr?: number;
	className?: string;
};

export function DotsPattern({
	width = 16,
	height = 16,
	x = 0,
	y = 0,
	cx = 1,
	cy = 1,
	cr = 1,
	className,
	...props
}: Readonly<DotPatternProps>) {
	const id = useId();

	return (
		<svg
			aria-hidden="true"
			className={cn(
				"pointer-events-none absolute inset-0 h-full w-full fill-neutral-400/80",
				className,
			)}
			{...props}
		>
			<defs>
				<pattern
					height={height}
					id={id}
					patternContentUnits="userSpaceOnUse"
					patternUnits="userSpaceOnUse"
					width={width}
					x={x}
					y={y}
				>
					<circle cx={cx} cy={cy} id="pattern-circle" r={cr} />
				</pattern>
			</defs>
			<rect fill={`url(#${id})`} height="100%" strokeWidth={0} width="100%" />
		</svg>
	);
}

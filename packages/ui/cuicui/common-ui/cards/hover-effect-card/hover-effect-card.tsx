import type { ReactNode } from "react";
import { cn } from "@/cuicui/utils/cn/cn";

const HoverCard = ({
	columns = 5,
	rows = 5,
	maxXrotation = 10,
	maxYrotation = 10,
	children,
	className,
	containerClassName,
}: {
	columns?: number;
	rows?: number;
	maxXrotation?: number;
	maxYrotation?: number;
	children?: ReactNode;
	className?: string;
	containerClassName?: string;
}) => {
	const generateTrackers = () => {
		return Array.from({ length: columns * rows }, (_, i) => {
			return (
				<div
					aria-hidden="true"
					className={`tr-${i + 1} absolute inset-0 z-50 select-none`}
					key={`tr-${i + 1}`}
					style={{
						gridArea: `tr-${i + 1}`,
					}}
				/>
			);
		});
	};

	const getTransform = (row: number, col: number) => {
		const xRotation = maxXrotation - (row / (rows - 1)) * 2 * maxXrotation;
		const yRotation = -maxYrotation + (col / (columns - 1)) * 2 * maxYrotation;

		return `rotateX(${xRotation.toFixed(2)}deg) rotateY(${yRotation.toFixed(
			2,
		)}deg)`;
	};

	return (
		<div className={cn("relative ", containerClassName)}>
			<style>{`
        ${Array.from({ length: rows * columns }, (_, i) => {
					const row = Math.floor(i / columns);
					const col = i % columns;
					return `
            .tr-${i + 1}:hover ~ #cuicui-card {
              transform: ${getTransform(row, col)};
            }
          `;
				}).join("")}
      `}</style>
			<div
				aria-hidden="true"
				className="group absolute inset-0 z-10 grid gap-0 "
				style={{
					perspective: "1000px",
					gridTemplateColumns: `repeat(${columns}, minmax(0, 1fr))`,
					gridTemplateRows: `repeat(${rows}, minmax(0, 1fr))`,
					gridTemplateAreas: Array.from(
						{ length: rows },
						(_, rowIndex) =>
							`"${Array.from(
								{ length: columns },
								(_, colIndex) => `tr-${rowIndex * columns + colIndex + 1}`,
							).join(" ")}"`,
					).join(" "),
				}}
			>
				{generateTrackers()}
				<div
					className={cn(
						"group absolute inset-0 z-20 transition-all duration-150 ease-in-out",
						className,
					)}
					id="cuicui-card"
				>
					{children}
				</div>
			</div>
		</div>
	);
};

export default HoverCard;

"use client";
import { useMeasure } from "@/src/hooks/use-measure/use-measure";

export const PreviewUseMeasure = () => {
	const [ref, { width, height }] = useMeasure();

	return (
		<div className="flex flex-col items-center">
			<p className="dark:text-neutral-400  text-neutral-600">
				(Resize the rulers)
			</p>

			<article
				ref={ref}
				className="border bg-neutral-400/10 border-neutral-400/30 p-4"
				style={{
					//@ts-ignore
					"--color": "rgba(128, 128, 128, 0.5)",
					resize: "horizontal",
					background: "var(--color)",
					backgroundRepeat: "no-repeat",
					backgroundImage:
						"repeating-linear-gradient(to right, var(--color), var(--color) 1px, transparent 1px, transparent 10px), repeating-linear-gradient(to right, var(--color), var(--color) 1px, transparent 1px, transparent 60px)",
					backgroundSize: "100% 10px, 100% 20px",
					height: "64px",
					minWidth: "200px",

					margin: "auto",
					borderRadius: "4px",
					overflow: "auto",
					display: "flex",
					justifyContent: "center",
					alignItems: "center",
				}}
			>
				{width && <p>width: {Math.floor(width)}</p>}
			</article>
		</div>
	);
};

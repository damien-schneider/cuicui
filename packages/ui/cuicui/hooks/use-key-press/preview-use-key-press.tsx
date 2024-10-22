"use client";
import { useState } from "react";
import { useKeyPress } from "@/cuicui/hooks/use-key-press/use-key-press";

export const PreviewUseKeyPress = () => {
	// Call our hook for each key that we'd like to monitor
	const [isAbcKeyPressed, setIsAbcKeyPressed] = useState(false);

	useKeyPress({
		keyPressItems: [
			{
				keys: ["KeyA", "Meta"],
				event: () => setIsAbcKeyPressed((prev) => !prev),
			},
			{
				keys: ["KeyA", "Control"],
				event: () => setIsAbcKeyPressed((prev) => !prev),
			},
		],
	});

	return (
		<div className="space-y-4">
			<p className="flex gap-2 items-center">
				<kbd className="bg-neutral-400/20 px-2 py-1 rounded-md flex">
					"cmd + a"
				</kbd>{" "}
				or{" "}
				<kbd className="bg-neutral-400/20 px-2 py-1 rounded-md">"ctrl + a"</kbd>
				{isAbcKeyPressed ? " to hide" : " to show"}
			</p>
			{isAbcKeyPressed && (
				<div className="size-12 bg-neutral-400/20 rounded-md" />
			)}
		</div>
	);
};

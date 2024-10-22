"use client";
import { useOnClickOutside } from "@/cuicui/hooks/use-click-outside/use-click-outside";
import { useRef } from "react";
import { toast } from "sonner";

export default function PreviewUseClickOutside() {
	const ref = useRef(null);

	const handleClickOutside = () => {
		// Your custom logic here
		toast("clicked outside");
	};

	const handleClickInside = () => {
		// Your custom logic here
		toast("clicked inside");
	};

	useOnClickOutside(ref, handleClickOutside);

	return (
		<button
			type="button"
			className="size-72  bg-neutral-500/10 rounded-xl border border-neutral-400/10"
			ref={ref}
			onClick={handleClickInside}
		>
			Click me
		</button>
	);
}

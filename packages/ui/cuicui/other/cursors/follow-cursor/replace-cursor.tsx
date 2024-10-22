"use client";

import { useMouse } from "@/cuicui/hooks/use-mouse/use-mouse";

export default function FollowCursorHideCursor() {
	const [mouse, parentRef] = useMouse();

	const translate3d = `translate3d(${mouse.elementX}px, ${mouse.elementY}px, 0)`;

	return (
		<div className="relative h-full w-full cursor-none" ref={parentRef}>
			<div
				className="-top-3 -left-3 pointer-events-none absolute size-6 rounded-full border border-neutral-500/20 bg-neutral-500/15"
				style={{
					transform: translate3d,
				}}
			/>
		</div>
	);
}

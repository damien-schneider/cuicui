"use client";
import { useLocalStorage } from "@/cuicui/hooks/use-local-storage/use-local-storage";

export function PreviewUseLocalStorage() {
	const [value, setValue, removeValue] = useLocalStorage("test-key", 0);

	return (
		<div>
			<p>Count: {value}</p>
			<button
				onClick={() => {
					setValue((x: number) => x + 1);
				}}
				type="button"
			>
				Increment
			</button>
			<button
				onClick={() => {
					setValue((x: number) => x - 1);
				}}
				type="button"
			>
				Decrement
			</button>
			<button
				onClick={() => {
					removeValue();
				}}
				type="button"
			>
				Reset
			</button>
		</div>
	);
}

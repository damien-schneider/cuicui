import { ChevronDown, SparklesIcon } from "lucide-react";

export default function GrowingButtonVariant1() {
	return (
		<button
			className="group flex transform-gpu items-center gap-1 rounded-md px-2 py-1 transition-colors hover:bg-neutral-400/15 active:bg-neutral-400/25"
			type="button"
		>
			<SparklesIcon aria-hidden="true" className="size-4 text-neutral-400" />
			<span className="w-fit max-w-0 transform-gpu overflow-hidden transition-all duration-500 group-hover:max-w-20">
				<span className=" transform-gpu whitespace-nowrap text-neutral-400 text-sm opacity-0 transition-opacity duration-500 group-hover:opacity-100">
					Feature list
				</span>
			</span>
			<ChevronDown aria-hidden="true" className="size-4 text-neutral-400" />
		</button>
	);
}

import { cn } from "@/cuicui/utils/cn/cn";

export default function ModernDetailedKbdVariant1() {
	return (
		<kbd
			className={cn(
				"grid transform-gpu select-none place-content-center text-nowrap rounded-lg px-4 py-2 font-medium text-xs tracking-tighter transition-all duration-100",
				"bg-gradient-to-b from-neutral-200 to-neutral-200/50 text-neutral-800 dark:from-neutral-950 dark:to-neutral-950/65 dark:text-neutral-300",
				"shadow-[0_1.5px_0.5px_1.5px_rgba(0,0,0,0.1),_0_0_0.5px_1px_rgba(0,0,0,0.25),_inset_0_1px_0.5px_0.5px_rgba(255,255,255,0.4),_inset_0_1px_1px_1px_rgba(255,255,255,0.8)]",
				"dark:shadow-[0_1.5px_0.5px_2.5px_rgba(0,0,0,0.4),_0_0_0.5px_1px_rgba(0,0,0,1),_inset_0_2px_1px_1px_rgba(0,0,0,0.25),_inset_0_1px_1px_1px_rgba(255,255,255,0.2)]",
				"dark:hover:shadow-[0_0_0_0_rgba(0,0,0,0),_0_0_0.5px_1px_rgba(0,0,0,1),_inset_0_2px_1px_1px_rgba(0,0,0,0.25),_inset_0_1px_1px_0_rgba(255,255,255,0.15)]",
				"hover:shadow-[0_0_0_0_rgba(0,0,0,0),_0_0_0.5px_1px_rgba(0,0,0,0.25),_inset_0_1px_0.5px_0.5px_rgba(255,255,255,0.4),_inset_0_1px_1px_1px_rgba(255,255,255,0.8)]",
				"active:shadow-[0_0_0_0_rgba(0,0,0,0),_0_0_1px_1px_rgba(0,0,0,0.15),_inset_0_1px_0.5px_0.5px_rgba(0,0,0,0.3),_inset_0_1.5px_1.5px_1.5px_rgba(255,255,255,0.6)]",
				"dark:active:shadow-[0_0_0_0_rgba(0,0,0,0),_0_0_1px_1px_rgba(0,0,0,1),_inset_0_2px_2px_1px_rgba(0,0,0,1),_inset_0_2px_2px_0_rgba(255,255,255,0.1)]",
			)}
		>
			⌘ + Option + Shift + K
		</kbd>
	);
}

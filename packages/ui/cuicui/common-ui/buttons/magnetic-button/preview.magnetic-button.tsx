import { MagneticButton } from "@/cuicui/common-ui/buttons/magnetic-button/component.magnetic-button";

export function PreviewMagneticButton() {
	return (
		<MagneticButton>
			<button
				type="button"
				className="bg-neutral-400/20 text-neutral-600 dark:text-neutral-300 px-4 py-2 rounded-md"
			>
				Click me
			</button>
		</MagneticButton>
	);
}

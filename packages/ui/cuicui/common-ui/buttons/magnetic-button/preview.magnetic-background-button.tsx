import { MagneticBackgroundButton } from "@/cuicui/common-ui/buttons/magnetic-button/component.magnetic-background-button";
import { TvIcon } from "lucide-react";

export function PreviewMagneticBackgroundButton() {
	return (
		<div className="flex items-center gap-2 p-2 border border-neutral-400/10 rounded-lg bg-neutral-400/10 overflow-hidden *:h-full">
			<MagneticBackgroundButton>Preview</MagneticBackgroundButton>
			<MagneticBackgroundButton className="flex-col gap-1">
				<TvIcon className="size-5 text-neutral-400" />
				See TV
			</MagneticBackgroundButton>
			<MagneticBackgroundButton>Amazing</MagneticBackgroundButton>
		</div>
	);
}

import type { ComponentHeightType } from "@/src/lib/types/component";

export function getContainerHeightClass({
	size,
	isIframe = false,
}: {
	size: ComponentHeightType;
	isIframe?: boolean;
}) {
	switch (size) {
		case "xs": {
			if (isIframe) {
				return "min-h-[180px] max-h-[180px] h-1";
			}
			return "min-h-[200px] max-h-[200px] h-1";
		}
		case "sm": {
			if (isIframe) {
				return " min-h-[380px] max-h-[380px] h-1";
			}
			return "min-h-[400px] max-h-[400px] h-1";
		}
		case "md": {
			if (isIframe) {
				return " min-h-[680px] max-h-[680px] h-1";
			}
			return " min-h-[700px] max-h-[700px] h-1";
		}
		case "lg":
			return "min-h-[894px] max-h-[894px] h-1";
		case "xl":
			return "min-h-[1094px] max-h-[1094px] h-1";
		default:
			return "min-h-[200px] max-h-[200px] h-1";
	}
}

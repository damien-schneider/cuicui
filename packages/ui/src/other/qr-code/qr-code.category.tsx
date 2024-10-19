import { QrCodeIcon } from "lucide-react";
import type { CategoryType } from "@/lib/types/component";
import { BarCodeGeneratorComponent } from "@/src/other/qr-code/bar-code-generator/bar-code-generator.component";
import { QrCodeGeneratorComponent } from "@/src/other/qr-code/qr-code-generator/qr-code-generator.component";

export const qrCodeCategory: CategoryType = {
	slug: "qr-code",
	name: "QR Code",
	description: "QR Code components to scan and generate QR codes",
	releaseDateCategory: new Date("2024-09-24"),
	icon: QrCodeIcon,
	previewCategory: {
		component: QrCodeGeneratorComponent.variantList[0].component,
		previewScale: 1,
	},
	componentList: [QrCodeGeneratorComponent, BarCodeGeneratorComponent],
};

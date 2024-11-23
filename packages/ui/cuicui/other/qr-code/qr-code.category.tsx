import { QrCodeIcon } from "lucide-react";
import type { CategoryType } from "@/lib/types/component";
import { BarCodeGeneratorComponent } from "@/cuicui/other/qr-code/bar-code-generator/bar-code-generator.component";
import { QrCodeGeneratorComponent } from "@/cuicui/other/qr-code/qr-code-generator/component";
import { QrCodeGenerator } from "@/cuicui/other/qr-code/qr-code-generator/qr-code-generator";

export const qrCodeCategory: CategoryType = {
	slug: "qr-code",
	name: "QR Code",
	description: "QR Code components to scan and generate QR codes",
	releaseDateCategory: new Date("2024-09-24"),
	icon: QrCodeIcon,
	previewCategory: {
		component: QrCodeGenerator,
		previewScale: 1,
	},
	componentList: [QrCodeGeneratorComponent, BarCodeGeneratorComponent],
};

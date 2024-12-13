import type { ComponentType } from "@/lib/types/component";
import { QrCodeGenerator } from "@/cuicui/other/qr-code/qr-code-generator/qr-code-generator";

export const QrCodeGeneratorComponent: ComponentType = {
  slug: "qr-code-generator",
  name: "QR Code Generator",
  description: "A QR code generator component using qrcode.react",
  sizePreview: "md",
  variantList: [
    {
      name: "Default",
      component: QrCodeGenerator,
      slugPreviewFile: "qr-code-generator",
    },
  ],
};

export default QrCodeGeneratorComponent;

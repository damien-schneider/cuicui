import type { ComponentType } from "#/src/lib/types/component";
import { QrCodeGenerator } from "#/src/ui/cuicui/other/qr-code/qr-code-generator/qr-code-generator";
export const QRCodeGeneratorComponent: ComponentType = {
  sizePreview: "md",
  slug: "qr-code-generator",
  variantList: [
    {
      name: "Default",
      component: <QrCodeGenerator />,
      slugPreviewFile: "qr-code-generator",
    },
  ],
  title: "QR Code Generator",
  description: "A QR code generator component using qrcode.react",
};

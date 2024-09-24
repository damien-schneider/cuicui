import type { ComponentType } from "#/src/lib/types/component";

import PreviewBarCodeGenerator from "#/src/ui/cuicui/other/qr-code/bar-code-generator/preview-bar-code-generator";

export const BarCodeGeneratorComponent: ComponentType = {
  title: "Bar Code Generator",
  slug: "bar-code-generator",
  description: "Generate bar codes",
  sizePreview: "sm",
  variantList: [
    {
      component: <PreviewBarCodeGenerator />,
      slugComponentFile: "bar-code-generator",
      slugPreviewFile: "preview-bar-code-generator",
      name: "Bar Code Generator",
    },
  ],
  isIframed: false,
};

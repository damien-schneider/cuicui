import type { ComponentType } from "@/lib/types/component";
import { PreviewBarCodeGenerator } from "@/cuicui/other/qr-code/bar-code-generator/bar-code-generator.variant";

export const BarCodeGeneratorComponent: ComponentType = {
  slug: "bar-code-generator",
  name: "Bar Code Generator",
  description: "Generate bar codes",
  sizePreview: "sm",
  variantList: [
    {
      name: "Bar Code Generator",
      component: PreviewBarCodeGenerator,
      slugComponentFile: "bar-code-generator",
      slugPreviewFile: "preview-bar-code-generator",
    },
  ],
};

export default BarCodeGeneratorComponent;

import PreviewArcColorPicker from "@/cuicui/application-ui/color-picker/arc-color-picker/preview.arc-color-picker";
import type { ComponentType } from "@/lib/types/component";

export const arcColorPickerComponent: ComponentType = {
  name: "Arc Color Picker",
  slug: "arc-color-picker",
  description: "A color picker with an arc shape.",
  variantList: [
    {
      component: PreviewArcColorPicker,
      name: "Default",
      slugPreviewFile: "preview.arc-color-picker",
      slugComponentFile: "arc-color-picker",
    },
  ],
};
export default arcColorPickerComponent;

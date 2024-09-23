import { CommandIcon } from "lucide-react";
import type { CategoryType } from "#/src/lib/types/component";
import Modern3dKbdVariant1 from "#/src/ui/cuicui/application-ui/kbd/modern-3d-kbd/variant1";
import ModernDetailedKbdVariant1 from "#/src/ui/cuicui/application-ui/kbd/modern-detailed-kbd/variant1";

export const kbdCategory: CategoryType = {
  slug: "kbd",
  name: "Keyboard",
  description: "Keyboard components with various styles",
  releaseDateCategory: new Date("2024-08-13"),
  icon: CommandIcon,
  previewCategory: {
    component: <Modern3dKbdVariant1 />,
    previewScale: 1,
  },
  componentList: [
    {
      sizePreview: "xs",
      slug: "modern-detailed-kbd",
      variantList: [
        {
          name: "Default",
          component: <ModernDetailedKbdVariant1 />,
          slugPreviewFile: "variant1",
        },
      ],
      title: "Simple keyboard Kbd",
      description:
        "A simple keyboard Kbd with an effect on hover and on press.",
    },
    {
      sizePreview: "xs",
      slug: "modern-3d-kbd",
      variantList: [
        {
          name: "Default",
          component: <Modern3dKbdVariant1 />,
          slugPreviewFile: "variant1",
        },
      ],
      title: "3D keyboard Kbd",
      description: "A 3D keyboard Kbd with an effect on hover and on press.",
    },
  ],
};

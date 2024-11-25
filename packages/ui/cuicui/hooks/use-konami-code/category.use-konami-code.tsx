import { GamepadIcon } from "lucide-react";
import type { SingleComponentCategoryType } from "@/lib/types/component";
import { PreviewUseKonamiCode } from "@/cuicui/hooks/use-konami-code/preview-use-konami-code";

export const useKonamiCodeCategory: SingleComponentCategoryType = {
  slug: "use-konami-code",
  name: "Use Konami Code",
  description:
    "A hook that detects the Konami Code sequence and triggers actions accordingly",
  releaseDateCategory: new Date("2024-09-28"),
  icon: GamepadIcon,
  component: {
    sizePreview: "sm",
    variantList: [
      {
        name: "default variant",
        component: <PreviewUseKonamiCode />,
        slugComponentFile: "use-konami-code",
        slugPreviewFile: "preview-use-konami-code",
      },
    ],
  },
};

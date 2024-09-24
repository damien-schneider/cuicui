import type { ComponentType } from "#/src/lib/types/component";
import PreviewUseMouse from "#/src/ui/cuicui/hooks/use-mouse/hook/preview-use-mouse";

export const useMouseComponent: ComponentType = {
  sizePreview: "xs",
  slug: "hook",
  isIframed: false,
  variantList: [
    {
      name: "Default",
      component: <PreviewUseMouse />,
      slugPreviewFile: "preview-use-mouse",
      slugComponentFile: "use-mouse",
    },
  ],
  title: "Use Mouse",
  description: "A simple hook to get the mouse position.",
};

import { MousePointer2Icon } from "lucide-react";
import type { SingleComponentCategoryType } from "#/src/lib/types/component";
import { useMouseComponent } from "#/src/ui/cuicui/hooks/use-mouse/component.use-mouse";

export const useMouseCategory: SingleComponentCategoryType = {
  slug: "use-mouse",
  name: "Use Mouse",
  icon: MousePointer2Icon,
  releaseDateCategory: new Date("2024-09-24"),
  description: "A simple hook to get the mouse position.",
  component: useMouseComponent,
};

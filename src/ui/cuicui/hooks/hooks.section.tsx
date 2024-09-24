import { PictureInPictureIcon } from "lucide-react";
import type { SectionType } from "#/src/lib/types/component";
import { useBatteryCategory } from "#/src/ui/cuicui/hooks/use-battery/use-battery.category";
import { useCopyToClipboardCategory } from "#/src/ui/cuicui/hooks/use-copy-to-clipboard/use-copy-to-clipboard.component";
import { useCounterCategory } from "#/src/ui/cuicui/hooks/use-counter/use-counter.category";
import { useDebounceCategory } from "#/src/ui/cuicui/hooks/use-debounce/use-debounce.category";
import { useInViewCategory } from "#/src/ui/cuicui/hooks/use-in-view/use-in-view.category";
import { useMouseCategory } from "#/src/ui/cuicui/hooks/use-mouse/use-mouse.category";
import { useNetworkCategory } from "#/src/ui/cuicui/hooks/use-network-status/use-network.category";

export const hooksSection: SectionType = {
  name: "Hooks",
  slug: "hooks",
  categoriesList: [
    useBatteryCategory,
    useDebounceCategory,
    {
      slug: "picture-in-picture",
      name: "Picture in Picture",
      description: "Create a picture in picture mode for your videos",
      releaseDateCategory: new Date(),
      icon: PictureInPictureIcon,
      comingSoonCategory: true,
      componentList: null,
    },
    useNetworkCategory,
    useCopyToClipboardCategory,
    useCounterCategory,
    useInViewCategory,
    useMouseCategory,
  ],
};

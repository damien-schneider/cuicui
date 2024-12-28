import type { CategoryMetaType } from "@/lib/types/component";
import { AudioWaveformIcon } from "lucide-react";

export const Category: CategoryMetaType = {
  name: "Equalizer",
  description:
    "An equalizer component that can be used in any project with any artisitic style",
  icon: AudioWaveformIcon,
  latestUpdateDate: new Date("2024-12-28"),
};

export default Category;

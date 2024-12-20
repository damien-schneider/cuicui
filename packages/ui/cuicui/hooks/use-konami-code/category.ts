import { GamepadIcon } from "lucide-react";
import type { CategoryMetaType } from "@/lib/types/component";

export const useKonamiCodeCategory: CategoryMetaType = {
  name: "Use Konami Code",
  description:
    "A hook that detects the Konami Code sequence and triggers actions accordingly",
  latestUpdateDate: new Date("2024-09-28"),
  icon: GamepadIcon,
};

export default useKonamiCodeCategory;

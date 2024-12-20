import { ServerCogIcon } from "lucide-react";
import type { CategoryMetaType } from "@/lib/types/component";

export const useIsomorphicLayoutEffectCategory: CategoryMetaType = {
  name: "Use Isomorphic Layout Effect",
  description:
    "A hook that allows you to use the isomorphic version of useLayoutEffect, ensuring compatibility with server-side rendering.",
  latestUpdateDate: new Date("2024-09-28"),
  icon: ServerCogIcon,
};

export default useIsomorphicLayoutEffectCategory;

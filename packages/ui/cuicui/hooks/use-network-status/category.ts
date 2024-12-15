import { NetworkIcon } from "lucide-react";
import type { CategoryMetaType } from "@/lib/types/component";

export const useNetworkCategory: CategoryMetaType = {
  name: "Use Network Status",
  description: "A hook to get the network status",
  releaseDateCategory: new Date("2024-09-16"),
  icon: NetworkIcon,
};

export default useNetworkCategory;

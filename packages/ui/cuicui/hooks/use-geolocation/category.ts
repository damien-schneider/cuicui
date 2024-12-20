import { Globe2Icon } from "lucide-react";
import type { CategoryMetaType } from "@/lib/types/component";

export const useGeoLocationCategory: CategoryMetaType = {
  name: "Use GeoLocation",
  description:
    "A hook that allows you to access and manage the user's geolocation data",
  latestUpdateDate: new Date("2024-09-28"),
  icon: Globe2Icon,
};

export default useGeoLocationCategory;

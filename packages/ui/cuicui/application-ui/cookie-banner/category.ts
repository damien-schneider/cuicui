import { CookieIcon } from "lucide-react";
import type { CategoryMetaType } from "@/lib/types/component";

export const cookieBannerCategory: CategoryMetaType = {
  name: "Cookie Banner",
  description: "Display a cookie banner to inform users about cookies",
  latestUpdateDate: new Date("2024-09-26"),
  icon: CookieIcon,
  isComingSoon: false,
};

export default cookieBannerCategory;

import { MonitorSmartphoneIcon } from "lucide-react";
import type { CategoryType } from "#/src/lib/types/component";

import { Airpods } from "#/src/ui/cuicui/other/mock-ups/airpods/airpods";
import { AirpodsPro } from "#/src/ui/cuicui/other/mock-ups/airpods/airpods-pro";
import MacbookVariant1 from "#/src/ui/cuicui/other/mock-ups/laptops/variant1";
import { GooglePixelVariant1 } from "#/src/ui/cuicui/other/mock-ups/smartphone/variant1";
import { IPhone14ProVariant2 } from "#/src/ui/cuicui/other/mock-ups/smartphone/variant2";

export const mockUpsCategory: CategoryType = {
  slug: "mock-ups",
  name: "Mock-ups",
  description:
    "Create mock-ups without images, just with CSS and HTML for better performance, SEO and accessibility & also more micro-interactions",
  releaseDateCategory: new Date("2024-08-14"),
  icon: MonitorSmartphoneIcon,
  previewCategory: {
    component: <IPhone14ProVariant2 />,
    previewScale: 0.2,
  },
  componentList: [
    {
      sizePreview: "lg",
      slug: "smartphone",
      isIframed: true,
      isChildUsingHeightFull: true,
      title: "Smartphone mock-up",
      description:
        "Create a smartphone mock-up with CSS and HTML for better performance, SEO and accessibility & also more micro-interactions",
      variantList: [
        {
          name: "Iphone 14",
          component: <IPhone14ProVariant2 />,
          slugPreviewFile: "variant2",
        },
        {
          name: "Google Pixel",
          component: <GooglePixelVariant1 />,
          slugPreviewFile: "variant1",
        },
      ],
      inspiration: "Devices CSS",
      inspirationLink: "https://devicescss.xyz/phones.html#google-pixel-6-pro",
    },
    {
      sizePreview: "lg",
      slug: "laptops",
      isIframed: true,
      isChildUsingHeightFull: true,
      title: "Laptop mock-up",
      description:
        "Create a laptop mock-up with CSS and HTML for better performance",
      variantList: [
        {
          name: "Macbook Pro",
          component: <MacbookVariant1 />,
          slugPreviewFile: "variant1",
        },
      ],
      inspiration: "Devices CSS",
      inspirationLink: "https://devicescss.xyz/laptops.html#macbook-pro",
    },
    {
      sizePreview: "lg",
      slug: "airpods",
      isIframed: true,
      lastUpdatedDateComponent: new Date("2024-09-10"),
      isChildUsingHeightFull: true,
      title: "Airpods mock-up",
      description:
        "Create a airpods mock-up with CSS and HTML for better performance",
      variantList: [
        {
          name: "Airpods Pro",
          component: <AirpodsPro />,
          slugPreviewFile: "airpods-pro",
        },
        {
          name: "Airpods",
          component: <Airpods />,
          slugPreviewFile: "airpods",
        },
      ],
      inspiration: "Spacious74 on Uiverse",
      inspirationLink: "https://uiverse.io/Spacious74/wicked-rat-71",
    },
  ],
};

import { SlidersHorizontalIcon } from "lucide-react";
import type { CategoryType } from "#/src/lib/types/component";
import { ElasticSliderVariant1 } from "#/src/ui/cuicui/application-ui/sliders/elastic-slider/variant1";
import SimpleModernSlider from "#/src/ui/cuicui/application-ui/sliders/simple-modern-slider/simple-modern-slider";
import SimpleModernSliderWithMax from "#/src/ui/cuicui/application-ui/sliders/simple-modern-slider/simple-modern-slider-with-max";

export const slidersCategory: CategoryType = {
  slug: "sliders",
  name: "Sliders",
  description: "Slider components with animations",
  releaseDateCategory: new Date("2024-08-10"),
  icon: SlidersHorizontalIcon,
  previewCategory: {
    component: <ElasticSliderVariant1 />,
    previewScale: 1,
  },
  componentList: [
    {
      sizePreview: "xs",
      slug: "elastic-slider",
      variantList: [
        {
          name: "Default",
          component: <ElasticSliderVariant1 />,
          slugPreviewFile: "variant1",
        },
      ],
      title: "Elastic Slider",
      description: "Smooth slider with scale effect.",
      inspiration: "Build UI",
      inspirationLink: "https://buildui.com/recipes/elastic-slider",
    },
    {
      sizePreview: "xs",
      slug: "simple-modern-slider",
      variantList: [
        {
          name: "Smooth",
          component: <SimpleModernSlider />,
          slugPreviewFile: "simple-modern-slider",
        },
        {
          name: "Min & max steps",
          component: <SimpleModernSliderWithMax />,
          slugPreviewFile: "simple-modern-slider-with-max",
        },
      ],
      title: "Simple Modern Slider",
      description: "Simple modern slider with micro animations.",
    },
  ],
};

export type Item = {
  name: string;
  slug: string;
  href?: string;
  description: string;
  comingSoon?: boolean;
  releaseDate?: Date;
};

export const componentCategories: {
  name: string;
  slug: string | null;
  items: Item[];
}[] = [
  {
    name: "Info",
    slug: null,
    items: [
      {
        name: "Why another library?",
        slug: "about",
        description:
          "CuiCui is a collection of components that I use in my projects. I wanted to share them with the world.",
      },
      {
        name: "Getting Started",
        slug: "getting-started",
        description:
          "Learn how to use CuiCui in your project. It's easy and simple.",
      },
      {
        name: "Contribute | Roadmap",
        href: "https://cuicui.featurebase.app/",
        slug: "contribute",
        description:
          "Help us make CuiCui better. Contribute to the project on GitHub. We have a roadmap for the future.",
      },
      {
        name: "Changelog",
        slug: "changelog",
        description: "See the latest changes in CuiCui.",
      },
    ],
  },

  {
    name: "Common UI",
    slug: "common-ui",
    items: [
      {
        name: "Badges",
        slug: "badges",
        description: "Create simple badges with different styles",
        releaseDate: new Date("2024-06-17"),
      },
      {
        name: "Navigation",
        slug: "navigation",
        description: "Create simple navigation components",
        releaseDate: new Date("2024-06-17"),
      },
      {
        name: "Buttons",
        slug: "buttons",
        description: "Create simple buttons with different styles",
        releaseDate: new Date("2024-06-17"),
      },
    ],
  },
  {
    name: "Marketing components",
    slug: "marketing-components",
    items: [
      {
        name: "Features",
        slug: "features",
        description: "Showcase your product features with style",
        releaseDate: new Date("2024-06-17"),
      },
      {
        name: "Pricing Table",
        slug: "pricing-table",
        description: "Showcase your product pricing with style",
        comingSoon: true,
      },
      {
        name: "Testimonials",
        slug: "testimonials",
        description: "Showcase your product testimonials with style",
        releaseDate: new Date("2024-06-17"),
      },
    ],
  },
  {
    name: "Application UI",
    slug: "application-ui",
    items: [
      {
        name: "Settings",
        slug: "settings",
        description: "Create simple settings components",
        releaseDate: new Date("2024-06-30"),
      },
    ],
  },
];

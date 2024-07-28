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
        releaseDate: new Date("2024-06-29"),
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
        releaseDate: new Date("2024-07-29"),
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
        name: "Pricing Tables",
        slug: "pricing-tables",
        description: "Showcase your product pricing with style",
        comingSoon: true,
      },
      {
        name: "Testimonials",
        slug: "testimonials",
        description: "Showcase your product testimonials with style",
        releaseDate: new Date("2024-07-17"),
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
  {
    name: "Other",
    slug: "other",
    items: [
      {
        name: "Cursors",
        slug: "cursors",
        description: "Create cursor effects",
        releaseDate: new Date("2024-07-21"),
      },
      {
        name: "Transition wrappers",
        slug: "transition-wrappers",
        description:
          "Create transition wrappers to animate any without changing your code components",
        releaseDate: new Date("2024-07-29"),
      },
    ],
  },
];

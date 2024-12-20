import TestimonyCardPreview from "@/cuicui/common-ui/cards/testimony-card/default.variant";
import CircularBarsSpinnerLoaderPreview from "@/cuicui/common-ui/loaders/spinner-loader/circular-bars-spinner-loader.variant";
import {
  BlocksIcon,
  BookOpenIcon,
  ClipboardIcon,
  GraduationCapIcon,
  type LucideIcon,
  SparkleIcon,
} from "lucide-react";
import LinesPattern from "@/cuicui/other/patterns/lines-pattern/lines-pattern";
import { firstMenuSection } from "#/src/lib/first-menu-section";
import { DotsPattern } from "@/cuicui/other/patterns/dots-pattern/dots-pattern";
import PillToggleTheme from "@/cuicui/application-ui/theme/pill-switch-theme/pill-toggle-theme";
import ShinyGradientSkeletonHorizontal from "@/cuicui/common-ui/skeletons/shiny-gradient/horizontal.variant";
import AnimatedCounterPreview from "@/cuicui/marketing-ui/statistics/animated-counter/animated-counter.variant";
import { cn } from "@/cuicui/utils/cn";
import { sectionList } from "@/section-list";
import {
  Button,
  H1,
  H2,
  H3,
  H5,
  P,
  Card,
  A,
} from "@cuicui/ui/cuicui/all-in-one-themes/cuicui-default-style/preview/one-file";
import { CategoryCard } from "@cuicui/ui/cuicui/all-in-one-themes/cuicui-default-style/preview/one-file-client-side";
import {
  ModernGradientContainerRoot,
  ModernGradientContainerContent,
} from "@/cuicui/common-ui/buttons/github-stars/simple-container";
import StarCuicuiGithubButton from "#/src/ui/star-github-project-button";
import { InfiniteSlider } from "@/cuicui/marketing-ui/testimonials/marquee/motion-marquee";
import ThemeSwitcherButton from "@/cuicui/application-ui/theme/theme-switcher/theme-switcher-button.variant";
import { AdvancedCodeBlock } from "@/cuicui/application-ui/code/advanced-code-block/advanced-code-block";
import PreviewBatteryIndicator from "@/cuicui/application-ui/battery/battery-indicator/battery-indicator.variant";
import SimpleAlert from "@/cuicui/application-ui/alert/simple-alert/simple-alert.variant";
import PreviewRecursiveTreeLessAnimations from "@/cuicui/application-ui/tree/recursive-tree/recursive-tree-less-animations.variant";

import Link from "next/link";
import { getCategoryPreviewBySlug } from "#/src/features/preview-category/utils/render-preview-category";
import { MagneticBackgroundButton } from "@/cuicui/common-ui/buttons/magnetic-button/magnetic-background-button";

export default function HomePage() {
  return (
    <div className="relative p-2 sm:p-6 w-full overflow-hidden">
      <PillToggleTheme className="fixed top-10 right-16 z-50" />
      <LinesPattern className="-z-10 text-neutral-400/10" angle={-45} />
      <div>
        <Card className="text-center p-6 pt-20 space-y-20 overflow-hidden dark:bg-neutral-950">
          {/* <ModernGradientContainerRoot> */}
          {/* <ModernGradientContainerContent className="block text-center p-6 pt-20 space-y-20 overflow-hidden"> */}
          <div className="space-y-4 text-center max-w-5xl mx-auto">
            <Link href="/releases">
              <ModernGradientContainerRoot className=" w-fit mx-auto">
                <ModernGradientContainerContent className="block text-center text-xs text-neutral-500 w-fit px-2 py-0.5">
                  See latest Release ✨
                </ModernGradientContainerContent>
              </ModernGradientContainerRoot>
            </Link>
            {/* <Badge variant="neutral">New Release ✨</Badge> */}
            <div className="w-60 mx-auto">
              <StarCuicuiGithubButton />
            </div>
            <H1 variant="gradient">
              Every UI components, hooks, tools, ... you need
            </H1>
            <P className="inline-flex mt-6">
              Cuicui is a collection of components, tools, and hooks that are
              designed to be simple, customizable and educational.
            </P>
          </div>
          <div className="max-w-4xl mx-auto">
            <P className="mx-auto mb-2">Explore the categories</P>
            <div className="flex w-fit items-center flex-wrap gap-2 p-2 border bg-gradient-to-t border-neutral-400/10 rounded-xl from-neutral-100 to-neutral-50 dark:from-neutral-900 dark:to-neutral-900/50 overflow-hidden mx-auto justify-center">
              {sectionList.map((section) => (
                <Link
                  key={section.slug}
                  href={`/${section.slug}`}
                  className="w-fit h-full"
                >
                  <MagneticBackgroundButton className="flex gap-1 w-fit h-fit text-sm/4 px-5 py-3">
                    {<section.meta.icon className="size-4" />}
                    {section.meta.name}
                  </MagneticBackgroundButton>
                </Link>
              ))}
            </div>
          </div>
          {/* <Badge variant="neutral" className="">
            Made by Damien Schneider
          </Badge> */}
          <div
            // className="w-full"
            style={{
              transform: "perspective(1200px) rotateX(30deg)",
            }}
          >
            <InfiniteSlider
              // durationOnHover={75}
              gap={24}
              className="text-start overflow-visible max-h-72"
            >
              <div className="max-w-72">
                <TestimonyCardPreview />
              </div>

              <div>
                <ShinyGradientSkeletonHorizontal />
              </div>

              <Card className="size-44 relative overflow-hidden bg-transparent dark:bg-transparent">
                <DotsPattern />
              </Card>
              <div className="flex flex-col items-center gap-12 justify-evenly">
                <CircularBarsSpinnerLoaderPreview />
                <AnimatedCounterPreview />
              </div>
              <PreviewRecursiveTreeLessAnimations />
              <AdvancedCodeBlock
                className="text-start w-80"
                code={`export const = explanations = {
  main : "This component needs more than the default code block to be displayed"
  detailed : "For now, if you want the exact same behaviour, please check the github"
}`}
                fileName="./demo.ts"
                lang="typescript"
                theme="github-light"
              />
              <div className="flex flex-col items-center gap-8 justify-evenly">
                <div className="flex gap-8 items-center">
                  <ThemeSwitcherButton />
                  <PreviewBatteryIndicator />
                </div>
                <SimpleAlert />
              </div>
            </InfiniteSlider>
          </div>
        </Card>
        {/* </ModernGradientContainerContent> */}
        {/* </ModernGradientContainerRoot> */}
        <Component />
        <section className="space-y-52 mt-40 max-w-5xl mx-auto">
          {sectionList.map((section, _index) => {
            return (
              <div key={section.slug} className={cn("mt-12")}>
                <div className="ml-6">
                  <div>
                    <H3>{section.meta.name}</H3>
                    <P>{section.meta.description}</P>
                  </div>
                  <Button
                    size="md"
                    href={`/${section.slug}`}
                    className="mt-2 mb-6"
                  >
                    <span className="mr-2">Discover</span>
                    <span className="text-lg">→</span>
                  </Button>
                </div>

                <Card
                  className={cn(
                    "grid md:grid-cols-3 grid-cols-1 sm:grid-cols-2 gap-6",
                  )}
                >
                  {section.categories.map((category) => (
                    <Link
                      key={`${section.slug}-${category.slug}`}
                      href={`/${section.slug}/${category.slug}`}
                    >
                      <CategoryCard
                        title={category.meta.name}
                        description={category.meta.description}
                        key={category.slug}
                      >
                        <div className="scale-50 w-full">
                          {getCategoryPreviewBySlug(category)}
                        </div>
                      </CategoryCard>
                    </Link>
                  ))}
                </Card>
              </div>
            );
          })}
        </section>
        {/* <CuicuiFloatingDock /> */}
      </div>

      <Footer />
    </div>
  );
}

function Footer() {
  return (
    <footer className="py-8 px-12 h-full w-full flex flex-col justify-between mt-52">
      <div className="grid sm:grid-cols-2 grid-cols-1 shrink-0 gap-20">
        <div className="flex flex-col gap-2">
          <H3 className="mb-2 uppercase">About</H3>
          {firstMenuSection.categoryList.map((section) => (
            <A
              key={section.slug}
              href={`/${section.slug}`}
              className="hover:text-violet-500 w-fit"
            >
              {section.name}
            </A>
          ))}
        </div>
        {/* <div>

        </div> */}
      </div>

      <div className="flex justify-between flex-col gap-4 sm:flex-row items-end">
        <H2 className="text-[14vw] pointer-events-none leading-[0.8] mt-10">
          Cuicui
        </H2>
        <A href={"https://www.linkedin.com/in/schneider-damien/"}>
          Made by Damien Schneider
        </A>
      </div>
    </footer>
  );
}

const FeatureCard = ({
  title,
  description,
  Icon,
}: {
  title: string;
  description: string;
  Icon: LucideIcon;
}) => {
  return (
    <Card className="flex flex-col justify-between gap-2 p-2">
      <div className="p-2 flex flex-col ">
        <div className="flex items-center gap-2">
          <Icon className="size-4" />
          <H5>{title}</H5>
        </div>
        <P>{description}</P>
      </div>
      {/* <div className="relative h-56 w-full rounded-lg overflow-hidden shadow-sm">
        {children}
      </div> */}
    </Card>
  );
};

function Component() {
  return (
    <div className="w-full font-sans max-w-5xl mx-auto flex flex-col items-center gap-16 mt-32">
      {/* Header */}
      <div className="flex flex-col items-center gap-5 max-w-lg text-center">
        <div className="flex flex-col items-center gap-3">
          <div className="flex items-center gap-2">
            <P variant="caption">Why another library</P>
          </div>
          <H2 className="" variant="gradient">
            Another Library ? Come on...
          </H2>
        </div>
        <P className="max-w-md">
          Cuicui is not just another library, it&apos;s a collection of
          components, tools, and hooks that are designed to be simple,
          customizable and educational.
        </P>
      </div>

      {/* Content */}
      <div className="flex flex-col gap-4 w-full max-w-screen-xl">
        {/* First row (2 columns on md+) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <FeatureCard
            title="Copy-Paste simplicity"
            description="Own the code, no more black box libraries, you can copy-paste the code and make it yours."
            Icon={ClipboardIcon}
          />
          <FeatureCard
            title="Easy customization"
            description="Libraries are oftent limited, Cuicui is designed to be flexible and easy to customize."
            Icon={BlocksIcon}
          />
        </div>

        {/* Second row (1 col on mobile, 3 cols on md+) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <FeatureCard
            title="Promoting good practices"
            description="Having micro-interaction, use as much css as possible, instead of js, etc."
            Icon={BookOpenIcon}
          />

          <FeatureCard
            title="Creative effects"
            description="Creative effects are often a secret sauce, Cuicui shows you how to make them."
            Icon={SparkleIcon}
          />
          <FeatureCard
            title="Learn how it works"
            description="Libraries often hide the complexity, Cuicui shows everything, so you can learn how everything works."
            Icon={GraduationCapIcon}
          />
        </div>
      </div>
    </div>
  );
}

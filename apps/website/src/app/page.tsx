import Link from "next/link";
// import GradientContainer from "../ui/gradient-container";

import { MacbookMockUp } from "@/cuicui/other/mock-ups/laptops/component.mackbook";
import { PreviewRecursiveTree } from "@/cuicui/application-ui/tree/recursive-tree/preview-recursive-tree";
import { PreviewBatteryIndicator } from "@/cuicui/application-ui/battery/battery-indicator/preview-battery-indicator";

import { TextEffectWrapper } from "@/cuicui/other/transition-wrappers/text-effect-wrapper/text-effect-wrapper";
import { DotsPattern } from "@/cuicui/other/patterns/dots-pattern/dots-pattern";
import { PreviewUseMeasure } from "@/cuicui/hooks/use-measure/preview.use-measure";

export default function HomePage() {
  return (
    <section className="relative overflow-hidden min-h-dvh grid place-content-center">
      <DotsPattern className="absolute inset-0 w-full h-full [mask-image:radial-gradient(500px_circle_at_center,white,transparent)]" />
      <div className="absolute -left-[370px] -top-[10%] rotate-6">
        <MacbookMockUp
          src="https://devicescss.xyz/assets/img/bg-10.jpg"
          className=" scale-50 "
        />
      </div>
      <div className="rotate-3 absolute top-0 -right-[10%] mt-20 hidden sm:block">
        <PreviewRecursiveTree />
      </div>

      <div className="max-w-lg xl:max-w-xl mx-auto  lg:mb-0 text-center relative pb-20 px-8">
        <div className="flex mb-6 items-center justify-center">Cuicui</div>
        <h1 className="text-4xl md:text-5xl lg:text-7xl tracking-tight">
          Every UI components, hooks, tools, ... you need
        </h1>
        <p className="m-4">
          More than 100 variants of Open-Source components, hooks and tools made
          for React. Just Copy Paste.
        </p>
        <Link
          href="/common-ui"
          className="inline-flex mt-4 font-medium text-xl px-6 py-2 rounded-2xl dark:text-neutral-300 text-neutral-700 bg-neutral-100 dark:hover:bg-neutral-800 hover:bg-neutral-200 dark:bg-neutral-900 border border-neutral-400/15"
        >
          Start Copy Pasting
        </Link>
      </div>
      <div className="absolute bottom-1/4 px-4 left-3/4 rotate-6 ">
        <PreviewBatteryIndicator />
      </div>
      <div className="bottom-[15%] absolute left-[8%] px-4 -rotate-3">
        <PreviewUseMeasure />
      </div>
    </section>
  );
}

import { SlideInOnScrollWrapper } from "#/src/ui/cuicui/other/transition-wrappers/slide-in-on-scroll/slide-in-on-scroll";

export function PreviewSlideInOnScroll() {
  return (
    <div>
      {Array.from({ length: 10 }).map((_, index) => (
        <SlideInOnScrollWrapper
          className=" w-40 h-52 m-8 bg-neutral-400/20 rounded-xl block p-4"
          // biome-ignore lint/suspicious/noArrayIndexKey: <No data for now>
          key={`slide-in-on-scroll-${index}`}
        >
          <p className="dark:text-neutral-200">
            Slide in on scroll (works only on chromium based browsers)
          </p>
        </SlideInOnScrollWrapper>
      ))}
    </div>
  );
}

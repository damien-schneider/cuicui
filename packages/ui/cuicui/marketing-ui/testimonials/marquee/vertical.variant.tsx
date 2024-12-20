import { MarqueePrimitive } from "@/cuicui/marketing-ui/testimonials/marquee/marquee";

export default function MarqueeVariant2() {
  return (
    <MarqueePrimitive direction="vertical" durationInMs={5000}>
      <div className="items-center justify-center bg-neutral-400/20 p-1 text-center text-neutral-400 rounded">
        Item 1
      </div>
      <div className="items-center justify-center bg-neutral-400/20 p-1 text-center text-neutral-400 rounded">
        Item 2
      </div>
      <div className="bg-neutral-400/20 p-1 text-center text-neutral-400 rounded">
        Item 3
      </div>
    </MarqueePrimitive>
  );
}

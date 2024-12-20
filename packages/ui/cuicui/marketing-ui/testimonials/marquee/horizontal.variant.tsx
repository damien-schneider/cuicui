import MarqueePrimitive from "@/cuicui/marketing-ui/testimonials/marquee/marquee";
const marqueeItems = [
  {
    author: "Damien Schneider",
    content: "This marquee is just awesome",
    link: "#",
  },
  {
    author: "The developper",
    content: "CuiCui library is just amazing, especially the developper",
    link: "#",
  },
  {
    author: "CuiCui",
    content: "This is one of the best copy paste library I've ever seen",
    link: "#",
  },
];

export default function MarqueeVariant1() {
  return (
    <MarqueePrimitive direction="horizontal" durationInMs={15000}>
      {marqueeItems.map((item, _index) => (
        <div
          key={item.content}
          className=" h-full max-w-60 rounded-xl bg-neutral-100 p-2 text-neutral-600 dark:bg-neutral-800"
        >
          <div className="flex items-center gap-2 ">
            <div className="size-6 rounded-full bg-neutral-500/40" />
            <p className=" font-semibold text-neutral-600 text-xs dark:text-neutral-400">
              {item.author}
            </p>
          </div>
          <p className="mt-2 text-neutral-600 text-sm dark:text-neutral-300">
            {item.content}
          </p>
        </div>
      ))}
    </MarqueePrimitive>
  );
}

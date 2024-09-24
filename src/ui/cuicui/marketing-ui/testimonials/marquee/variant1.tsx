"use client";

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
    <>
      <style>
        {`
          @keyframes marquee {
            100% { transform: translateX(-50%); }
          }
        `}
      </style>
      <div
        className="mb-4 w-full overflow-hidden"
        style={{
          maskImage:
            "linear-gradient(to right, transparent, black 10%, black 90%, transparent)",
        }}
      >
        <div
          className="flex w-[200%] gap-4 pr-4"
          style={{
            animation: "marquee 15s linear infinite",
          }}
        >
          {[0, 1].map((index) => (
            <div className="flex flex-1 gap-4" key={index}>
              {marqueeItems.map((item, _index) => (
                <div className="flex-1" key={item.content}>
                  <div className=" h-full max-w-60 rounded-xl bg-neutral-100 p-2 text-neutral-600 dark:bg-neutral-800">
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
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

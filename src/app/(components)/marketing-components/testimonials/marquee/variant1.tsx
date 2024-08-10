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
        className="overflow-hidden w-full mb-4"
        style={{
          maskImage:
            "linear-gradient(to right, transparent, black 10%, black 90%, transparent)",
        }}
      >
        <div
          className="flex gap-4 pr-4 w-[200%]"
          style={{
            animation: "marquee 15s linear infinite",
          }}
        >
          {[0, 1].map((index) => (
            <div key={index} className="flex flex-1 gap-4">
              {marqueeItems.map((item, index) => (
                <div key={item.content} className="flex-1">
                  <div className=" max-w-60   bg-neutral-100 dark:bg-neutral-800 text-neutral-600 rounded-xl p-2 h-full">
                    <div className="flex items-center gap-2 ">
                      <div className="size-6 bg-neutral-500/40 rounded-full" />
                      <p className=" text-neutral-600 dark:text-neutral-400 text-xs font-semibold">
                        {item.author}
                      </p>
                    </div>
                    <p className="text-sm mt-2 text-neutral-600 dark:text-neutral-300">
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

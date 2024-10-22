"use client";

export default function MarqueeVariant2() {
  return (
    <>
      <style>
        {`
          @keyframes marquee-vertical {
            100% { transform: translateY(-50%); }
          }
        `}
      </style>

      <div
        className="h-72 w-full overflow-hidden"
        style={{
          maskImage:
            "linear-gradient(to bottom, transparent, black 10%, black 90%, transparent)",
        }}
      >
        <div
          className="flex h-[200%] flex-col gap-4 pb-4"
          style={{
            animation: "marquee-vertical 5000ms linear infinite",
          }}
        >
          <div className="flex h-1/2 flex-1 flex-col gap-4">
            <div className="flex flex-1 items-center justify-center bg-black p-1 text-center text-white">
              Item
            </div>
            <div className="flex flex-1 items-center justify-center bg-black p-1 text-center text-white">
              Item
            </div>
            <div className="flex flex-1 items-center justify-center bg-black p-1 text-center text-white">
              Item
            </div>
          </div>
          <div className="flex h-1/2 flex-1 flex-col gap-4">
            <div className="flex flex-1 items-center justify-center bg-red-600 p-1 text-center text-white">
              Item
            </div>
            <div className="flex flex-1 items-center justify-center bg-red-600 p-1 text-center text-white">
              Item
            </div>
            <div className="flex flex-1 items-center justify-center bg-red-600 p-1 text-center text-white">
              Item
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

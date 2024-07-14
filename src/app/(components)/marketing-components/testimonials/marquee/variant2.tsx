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
        className="overflow-hidden w-full h-72"
        style={{
          maskImage:
            "linear-gradient(to bottom, transparent, black 10%, black 90%, transparent)",
        }}
      >
        <div
          className="flex flex-col gap-4 pb-4 h-[200%]"
          style={{
            animation: "marquee-vertical 5000ms linear infinite",
          }}
        >
          <div className="flex flex-col flex-1 gap-4 h-1/2">
            <div className="flex flex-1 items-center justify-center text-center bg-black text-white p-1">
              Item
            </div>
            <div className="flex flex-1 items-center justify-center text-center bg-black text-white p-1">
              Item
            </div>
            <div className="flex flex-1 items-center justify-center text-center bg-black text-white p-1">
              Item
            </div>
          </div>
          <div className="flex flex-col flex-1 gap-4 h-1/2">
            <div className="flex flex-1 items-center justify-center text-center bg-red-600 text-white p-1">
              Item
            </div>
            <div className="flex flex-1 items-center justify-center text-center bg-red-600 text-white p-1">
              Item
            </div>
            <div className="flex flex-1 items-center justify-center text-center bg-red-600 text-white p-1">
              Item
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

import React from "react";

export const Airpods = () => {
  return (
    <div
      className="relative w-[270px] h-[220px] bg-[#e8e9eb] rounded-[60px] select-none pointer-events-none shadow-2xl"
      aria-hidden="true"
      style={{
        boxShadow: `
          inset 0px 35px 25px #ffffffe0,
          inset 10px 0px 25px #0000004b,
          inset 40px 0px 20px #ffffff,
          inset -10px 0px 25px #0000004b,
          inset -40px 0px 20px #fff,
          inset 0px 10px 10px #00000090,
          inset 0px -15px 25px #00000036,
          10px 25px 40px -10px #00000040`,
      }}
    >
      {/* Cavity */}
      <div className="absolute top-1/3 left-1/2 transform-gpu -translate-x-1/2 translate-y-1/3 w-[150px] h-[20px] bg-gradient-to-b from-neutral-300 to-white rounded-full" />

      {/* Line */}
      <div className="relative mt-[33%] w-full h-[2px] bg-gradient-to-r from-neutral-200 via-neutral-300 to-neutral-200">
        <div className="absolute h-[2px] w-[5%] bg-white/50 right-0" />
        <div className="absolute h-[2px] w-[5%] bg-white/50 left-0" />
      </div>

      {/* LED */}
      <div className="absolute size-1.5 bg-green-300 rounded-full top-1/2 left-1/2 -translate-x-1/2 translate-y-[30%] transform-gpu shadow-[0_0_6px_#3eff4b]" />

      {/* Text */}
      <div className="mt-[70px] text-center text-neutral-500/40 font-semibold">
        CuiCui
      </div>
    </div>
  );
};

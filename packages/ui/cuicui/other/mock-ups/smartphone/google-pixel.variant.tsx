//TODO : Improve with better design (flex, gap, justify-center, items-center, w-full ...)
export function GooglePixelVariant1() {
  return (
    <div
      className="relative z-10 box-border block h-[862px] w-[404px]"
      id="device-google-pixel-6-pro"
    >
      <div
        className="z-10 mx-0.5 box-border block h-[862px] w-[400px] rounded-[28px] bg-neutral-950 px-3 pt-5 pb-6 shadow-[inset_0px_0px_12px_rgb(141,141,134),inset_0px_7px_0px_3px_rgb(253,253,252),inset_0px_-6px_0px_3px_rgb(253,253,252)]"
        id="device-frame"
      >
        {/* CONTENT */}
        <img
          alt="Google Pixel 6 Pro"
          className="h-[816px] w-[376px] rounded-2xl object-cover"
          id="device-screen"
          src="https://devicescss.xyz/assets/img/bg-iphone-14-pro.jpg"
        />
      </div>

      <div
        className="absolute top-0 left-1/2 ml-[-147px] box-border block h-[10px] w-[294px] bg-linear-to-b from-stone-400 via-30% via-stone-300 to-stone-300"
        id="device-header"
      />
      <div
        className="-ml-3 -mt-3 absolute top-[39px] left-1/2 box-border block size-6 rounded-full bg-neutral-950"
        id="device-sensors"
        style={{
          marginLeft: "-11px",
          marginTop: "-11px",
        }}
      />
      <div
        className="absolute top-[306px] right-0 box-border block h-[102px] w-[3px] bg-stone-400"
        id="device-btns"
      />
      <div
        className="absolute top-[194px] right-0 box-border block h-[58px] w-[3px] bg-stone-400"
        id="device-power"
      />
    </div>
  );
}

export default GooglePixelVariant1;

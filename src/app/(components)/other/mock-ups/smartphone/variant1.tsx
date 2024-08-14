//TODO : Improve with better design (flex, gap, justify-center, items-center, w-full ...)
export default function GooglePixelVariant1() {
  return (
    <div className="device device-google-pixel-6-pro scale-[0.4] relative block box-border z-10 h-[862px] w-[404px]">
      <div
        id="device-frame"
        className="box-border block z-10 bg-neutral-950 rounded-[28px] mx-0.5 pt-5 px-3 pb-6 h-[862px] w-[400px] shadow-[inset_0px_0px_12px_rgb(141,141,134),inset_0px_7px_0px_3px_rgb(253,253,252),inset_0px_-6px_0px_3px_rgb(253,253,252)]"
      >
        {/* CONTENT */}
        <div
          id="device-screen"
          // alt="Google Pixel 6 Pro"
          className="object-cover rounded-[27px] h-[816px] w-[376px] bg-gradient-to-b from-orange-200 to-neutral-100 dark:from-neutral-400 dark:to-neutral-500"
          // src="https://devicescss.xyz/assets/img/bg-pixel-6.jpg"
        />
      </div>

      <div
        id="device-header"
        className="box-border block bg-gradient-to-b from-stone-400 via-stone-300 to-stone-300 via-30% h-[10px] left-1/2 ml-[-147px] top-0 w-[294px] absolute"
      />
      <div
        id="device-sensors"
        className="box-border block bg-neutral-950 rounded-full size-6 absolute left-1/2 -ml-3 -mt-3 top-[39px]"
        style={{
          marginLeft: "-11px",
          marginTop: "-11px",
        }}
      />
      <div
        id="device-btns"
        className="box-border block bg-stone-400 absolute right-0 top-[306px] w-[3px] h-[102px]"
      />
      <div
        id="device-power"
        className="box-border block bg-stone-400 h-[58px] w-[3px] absolute right-0 top-[194px]"
      />
    </div>
  );
}

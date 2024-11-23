"use client";

export default function MacOSDropdownMenu() {
  return (
    <div
      style={{
        backgroundImage:
          "url('https://static1.squarespace.com/static/5e949a92e17d55230cd1d44f/t/6667b379b716e7212d986a57/1718072191450/Seq3x2.png?format=1500w')",

        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
      className="w-full h-dvh p-10"
    >
      <div className="rounded-[6px] min-w-32 text-sm p-1 text-white bg-[rgba(30,30,31,0.5)] backdrop-blur-xl shadow-[0px_20px_30px_0px_rgba(0,0,0,0.25),0px_0px_15px_0px_rgba(0,0,0,0.1),inset_0px_0px_0px_1px_rgba(255,255,255,0.075),0px_0px_0px_1px_rgba(0,0,0,0.5)] w-fit">
        <p className="truncate cursor-pointer whitespace-nowrap py-0.5 text-white/90 px-1.5 hover:bg-blue-600 rounded-[4px]">
          Refresh
        </p>
      </div>
    </div>
  );
}

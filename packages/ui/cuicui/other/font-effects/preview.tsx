export default function () {
  return (
    <div className="w-fit p-4 bg-neutral-400/15 rounded-xl flex flex-col justify-center items-center space-y-2">
      {/* 3 characters in <p> */}
      <p className="inline text-neutral-500/70 text-lg font-medium tracking-wide">
        <span className="text-xl">c</span>
        <span className="text-2xl">u</span>
        <span className="text-3xl">i</span>
        <span className="text-xl">c</span>
        <span className="text-2xl">u</span>
        <span className="text-3xl">i</span>
      </p>

      {/* Variable font preview bars */}
      <div className="w-32 h-1 bg-neutral-400/40 rounded-full" />
      <div className="w-32 h-2 bg-neutral-400/40 rounded-full" />
      <div className="w-32 h-3 bg-neutral-400/40 rounded-full" />
    </div>
  );
}

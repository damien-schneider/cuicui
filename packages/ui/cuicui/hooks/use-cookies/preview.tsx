export default function UseCookiesPreview() {
  return (
    <div className="px-8 p-4 bg-neutral-400/15 rounded-xl flex items-center justify-center space-x-4">
      {/* Cookie */}
      <div className="relative h-2/3">
        <div className="size-16 bg-neutral-400/40 rounded-full" />
        {/* Chocolate chips */}
        <div className="size-2 bg-neutral-400/80 rounded-full absolute top-3 left-3" />
        <div className="size-2 bg-neutral-400/80 rounded-full absolute top-4 right-4" />
        <div className="size-2 bg-neutral-400/80 rounded-full absolute bottom-3 left-5" />
        <div className="size-2 bg-neutral-400/80 rounded-full absolute top-1/2 right-2" />
      </div>

      {/* "Hook" (minimal code lines) */}
      <div className="flex flex-col space-y-2">
        <div className="w-8 h-1 bg-neutral-400/40 rounded-xs" />
        <div className="w-12 h-1 bg-neutral-400/40 rounded-xs" />
        <div className="w-6 h-1 bg-neutral-400/40 rounded-xs" />
      </div>
    </div>
  );
}

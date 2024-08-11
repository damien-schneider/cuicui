import { cn } from "#/src/utils/cn";

export function ModernInnerShadowCardVariant1() {
  return (
    <div
      className={cn(
        "rounded-2xl border p-6 max-w-sm group dark:border-white/10 border-neutral-500/10  ",
        "dark:shadow-[2px_4px_16px_0px_rgba(248,248,248,0.06)_inset]",
        "hover:scale-[1.01] transition-transform transform-gpu group",
        "bg-gray-50 dark:bg-neutral-800/80",
      )}
    >
      <div className="h-40 text-xl text-neutral-500 tracking-tighter font-bold text-neutral-500/20 text-center translate-y-12 -rotate-6 ">
        To replace with some content
      </div>
      <h6 className="mb-2 font-semibold tracking-tighter dark:text-gray-300 text-gray-600 text-xl group-hover:scale-90 origin-left transition-all transform-gpu">
        Damn good card
      </h6>
      <p className=" dark:text-gray-400 tracking-tight text-sm">
        This card is better in dark mode. It has a nice inner shadow and a nice
        border. It's a good modern card.
      </p>
    </div>
  );
}

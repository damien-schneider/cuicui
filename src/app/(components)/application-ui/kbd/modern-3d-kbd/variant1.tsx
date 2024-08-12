export default function Modern3dKbdVariant1() {
  return (
    <kbd className="border border-neutral-500/50 bg-neutral-300 outline-none rounded-[16px] shadow-[-10px_0px_15px_rgba(255,255,255,1),3px_10px_12.5px_rgba(0,0,0,0.1)] transition-all transform-gpu duration-150 cursor-pointer active:shadow-none dark:border-neutral-700 dark:bg-neutral-900 dark:shadow-[-10px_0px_15px_rgba(0,0,0,0.3),3px_10px_12.5px_rgba(255,255,255,0.05)]">
      <span className="text-neutral-500 py-1 px-3 block size-full rounded-[15px] shadow-[inset_0px_2px_4px_rgba(255,255,255,0.8)] transition-all transform-gpu duration-150 active:shadow-transparent dark:text-neutral-300 dark:shadow-[inset_0px_2px_4px_rgba(255,255,255,0.05)] active:translate-y-0 -translate-y-1 z-10 bg-neutral-100 dark:bg-neutral-800">
        <span className="block text-end">⌘</span>
        <span className="text-nowrap font-medium text-xs">command</span>
      </span>
    </kbd>
  );
}

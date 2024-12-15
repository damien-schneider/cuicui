export const ThreeDotSimpleLoader = () => {
  return (
    <div className="flex items-center justify-center space-x-2 dark:invert">
      <span className="sr-only">Loading...</span>
      <div className="size-7 animate-bounce rounded-full bg-neutral-900 [animation-delay:-0.3s]" />
      <div className="size-7 animate-bounce rounded-full bg-neutral-900 [animation-delay:-0.15s]" />
      <div className="size-7 animate-bounce rounded-full bg-neutral-900" />
    </div>
  );
};

export default ThreeDotSimpleLoader;

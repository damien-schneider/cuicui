export const SpinnerLoader = () => {
  return (
    <div className="flex justify-center items-center" aria-hidden="true">
      <div className="size-10 border-4 dark:invert border-t-transparent border-neutral-700 rounded-full animate-spin" />
      <span className="sr-only">Loading...</span>
    </div>
  );
};

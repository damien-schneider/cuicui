export const SpinnerLoader = () => {
  return (
    <div aria-hidden="true" className="flex items-center justify-center">
      <div className="size-10 animate-spin rounded-full border-4 border-neutral-700 border-t-transparent dark:invert" />
      <span className="sr-only">Loading...</span>
    </div>
  );
};

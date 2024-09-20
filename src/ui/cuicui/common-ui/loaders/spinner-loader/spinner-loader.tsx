import React from "react";

export const SpinnerLoader = () => {
  return (
    <div className="flex justify-center items-center">
      <div className="w-10 h-10 border-4 dark:invert border-t-transparent border-neutral-800 rounded-full animate-spin"></div>
      <span className="sr-only">Loading...</span>
    </div>
  );
};

import React from "react";

export const ThreeDotSimpleLoader = () => {
  return (
    <div className="flex space-x-2 justify-center items-center dark:invert">
      <span className="sr-only">Loading...</span>
      <div className="size-7 bg-neutral-900 rounded-full animate-bounce [animation-delay:-0.3s]" />
      <div className="size-7 bg-neutral-900 rounded-full animate-bounce [animation-delay:-0.15s]" />
      <div className="size-7 bg-neutral-900 rounded-full animate-bounce" />
    </div>
  );
};

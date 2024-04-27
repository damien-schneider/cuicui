"use client";

import React from "react";

export function ClickCounter() {
  const [count, setCount] = React.useState(0);

  return (
    <button
      onClick={() => setCount(count + 1)}
      className="whitespace-nowrap rounded-lg bg-gray-700 px-3 py-1 font-medium text-gray-100 text-sm tabular-nums hover:bg-gray-500 hover:text-white"
    >
      {count} Clicks
    </button>
  );
}

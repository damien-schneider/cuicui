"use client";
import useHistory from "@/cuicui/hooks/use-history";
import { useState, useCallback } from "react";

function useCounter(initialValue = 0) {
  const [count, setCount] = useState(initialValue);

  const inc = useCallback(() => setCount((c) => c + 1), []);
  const dec = useCallback(() => setCount((c) => c - 1), []);

  return { count, setCount, inc, dec };
}

function Demo() {
  const { count, setCount, inc, dec } = useCounter(0);
  const { history, addToHistory, undo, redo, canUndo, canRedo } = useHistory(
    count,
    { capacity: 10 },
  );

  const handleIncrement = () => {
    inc();
    addToHistory(count + 1);
  };

  const handleDecrement = () => {
    dec();
    addToHistory(count - 1);
  };

  const handleUndo = () => {
    const previousValue = undo();
    setCount(previousValue);
  };

  const handleRedo = () => {
    const nextValue = redo();
    setCount(nextValue);
  };

  return (
    <div className="p-4 cuicui-default-style">
      <div className="mb-4">Count: {count}</div>

      <div className="space-x-2">
        <button type="button" onClick={handleIncrement}>
          Increment
        </button>

        <button type="button" onClick={handleDecrement}>
          Decrement
        </button>
      </div>

      <div className="space-x-2">
        <button type="button" disabled={!canUndo} onClick={handleUndo}>
          Undo
        </button>

        <button type="button" disabled={!canRedo} onClick={handleRedo}>
          Redo
        </button>
      </div>

      <div className="mt-8">
        <div className="text-sm text-neutral-500">
          History (limited to 10 records for demo)
        </div>
        <div className="mt-4 space-y-2">
          {history.map((entry) => (
            <div key={entry.timestamp} className="font-mono">
              <span className="opacity-50 mr-2 text-sm">
                {new Date(entry.timestamp).toString()}
              </span>
              <span>{`{ value: ${entry.snapshot} }`}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Demo;

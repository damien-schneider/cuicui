"use client";
import { useLocalStorage } from "#/src/ui/cuicui/hooks/use-local-storage/use-local-storage";

export function PreviewUseLocalStorage() {
  const [value, setValue, removeValue] = useLocalStorage("test-key", 0);

  return (
    <div>
      <p>Count: {value}</p>
      <button
        type="button"
        onClick={() => {
          setValue((x: number) => x + 1);
        }}
      >
        Increment
      </button>
      <button
        type="button"
        onClick={() => {
          setValue((x: number) => x - 1);
        }}
      >
        Decrement
      </button>
      <button
        type="button"
        onClick={() => {
          removeValue();
        }}
      >
        Reset
      </button>
    </div>
  );
}

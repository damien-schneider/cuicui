"use client";
import { useSessionStorage } from "@/cuicui/hooks/use-session-storage";

// Coming soon
export const useSpeechToTextPreview = () => {
  const [value, setValue, removeValue] = useSessionStorage("test-key", 0);

  return (
    <div className="cuicui-default-style">
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
};

export default useSpeechToTextPreview;

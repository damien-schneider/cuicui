"use client";
import { useWindowSize } from "#/src/ui/cuicui/hooks/use-window-size/use-window-size";

export function PreviewUseWindowSize() {
  const windowSize = useWindowSize();
  return <pre>{JSON.stringify(windowSize, null, 2)}</pre>;
}

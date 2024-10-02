"use client";
import { useCallback, useEffect, useRef, useState } from "react";

// Define the shape of the scroll position
interface ScrollPosition {
  x: number;
  y: number;
}

// Define the options for the hook
interface UseWindowScrollPositionOptions {
  throttleMs?: number;
}

// Throttle function implementation
const useThrottle = (callback: () => void, delay: number) => {
  const lastCall = useRef<number>(0);
  const timeout = useRef<NodeJS.Timeout | null>(null);

  const throttledFunction = useCallback(() => {
    const now = Date.now();
    const remaining = delay - (now - lastCall.current);

    if (remaining <= 0) {
      if (timeout.current) {
        clearTimeout(timeout.current);
        timeout.current = null;
      }
      lastCall.current = now;
      callback();
    } else if (!timeout.current) {
      timeout.current = setTimeout(() => {
        lastCall.current = Date.now();
        timeout.current = null;
        callback();
      }, remaining);
    }
  }, [callback, delay]);

  return throttledFunction;
};

export const useWindowScrollPosition = (
  options: UseWindowScrollPositionOptions = {},
): ScrollPosition => {
  const { throttleMs = 100 } = options;

  // Initialize state with (0,0) for SSR compatibility
  const [scroll, setScroll] = useState<ScrollPosition>({
    x: typeof window !== "undefined" ? window.scrollY : 0,
    y: typeof window !== "undefined" ? window.scrollY : 0,
  });

  // Update scroll position
  const updateScroll = useCallback(() => {
    setScroll({
      x: window.scrollX,
      y: window.scrollY,
    });
  }, []);

  // Create a throttled version of the update function
  const throttledUpdateScroll = useThrottle(updateScroll, throttleMs);

  useEffect(() => {
    // Ensure window is available (avoids issues with SSR)
    if (typeof window === "undefined") {
      return;
    }

    window.addEventListener("scroll", throttledUpdateScroll);

    // Initial update in case the user has already scrolled
    throttledUpdateScroll();

    return () => {
      window.removeEventListener("scroll", throttledUpdateScroll);
    };
  }, [throttledUpdateScroll]);

  return scroll;
};

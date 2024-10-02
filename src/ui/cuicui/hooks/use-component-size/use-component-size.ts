"use client";

import { type RefObject, useCallback, useLayoutEffect, useState } from "react";

// Define a type for the size object
interface Size {
  width: number;
  height: number;
}

/**
 * Custom hook to track the size of a DOM element.
 *
 * @param ref - RefObject pointing to the DOM element.
 * @returns An object containing the width and height of the element.
 */
export function useComponentSize<T extends HTMLElement>(
  ref: RefObject<T>,
): Size {
  const getSize = useCallback((element: T | null): Size => {
    if (!element) {
      return { width: 0, height: 0 };
    }

    return {
      width: element.offsetWidth,
      height: element.offsetHeight,
    };
  }, []);

  const [size, setSize] = useState<Size>(() => getSize(ref.current));

  useLayoutEffect(() => {
    if (!ref.current) {
      return;
    }

    const handleResize = (entries: ResizeObserverEntry[]) => {
      if (!Array.isArray(entries)) {
        return;
      }
      const entry = entries[0];
      if (entry) {
        const { width, height } = entry.contentRect;
        setSize({ width, height });
      }
    };

    // Check if ResizeObserver is supported
    if (typeof ResizeObserver !== "undefined") {
      const resizeObserver = new ResizeObserver(handleResize);
      resizeObserver.observe(ref.current);

      // Initialize size
      setSize(getSize(ref.current));

      return () => {
        resizeObserver.disconnect();
      };
    }
    // Fallback to window resize event
    const handleWindowResize = () => {
      setSize(getSize(ref.current));
    };

    window.addEventListener("resize", handleWindowResize);

    // Initialize size
    handleWindowResize();

    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, [ref, getSize]);

  return size;
}

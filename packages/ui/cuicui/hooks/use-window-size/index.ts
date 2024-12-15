"use client";
import { useEffect, useState } from "react";

function getSize() {
  // Check if 'window' is defined (i.e., the code is running in the browser)
  if (typeof window !== "undefined") {
    return {
      innerHeight: window.innerHeight,
      innerWidth: window.innerWidth,
      outerHeight: window.outerHeight,
      outerWidth: window.outerWidth,
    };
  }
  // Provide default values for SSR
  return {
    innerHeight: 0,
    innerWidth: 0,
    outerHeight: 0,
    outerWidth: 0,
  };
}

export function useWindowSize() {
  const [windowSize, setWindowSize] = useState(getSize());

  useEffect(() => {
    if (typeof window === "undefined") {
      return;
    }

    function handleResize() {
      setWindowSize(getSize());
    }

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return windowSize;
}

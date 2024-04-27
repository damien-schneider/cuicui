"use client";

import { createContext, useCallback, useContext, useEffect } from "react";
import Prism from "prismjs";
import "../styles/prism-js-custom.css";
import "prismjs/components/prism-typescript";

type PrismContextType = {
  renderPrism: () => void;
};

const PrismContext = createContext<PrismContextType | null>(null);

export function usePrismContext() {
  const context = useContext(PrismContext);
  if (!context) {
    throw new Error("usePrismContext must be used within a PrismLoader");
  }
  return context;
}
export default function PrismLoader({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  const renderPrism = useCallback(() => {
    Prism.highlightAll();
  }, []);

  useEffect(() => {
    Prism.highlightAll();
  }, []);

  return (
    <PrismContext.Provider
      value={{
        renderPrism,
      }}
    >
      {children}
    </PrismContext.Provider>
  );
}

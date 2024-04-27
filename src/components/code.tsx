"use client";
import { useEffect } from "react";
import { usePrismContext } from "./prism-js-loader-context";

export default function Code({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  const { renderPrism } = usePrismContext();
  useEffect(() => {
    renderPrism();
  }, [renderPrism, children]);
  return (
    <div className="flex min-h-96 w-full items-center justify-center rounded-md bg-gray-900">
      <pre className="bg-none">
        <code className="language-ts">{children}</code>
      </pre>
    </div>
  );
}

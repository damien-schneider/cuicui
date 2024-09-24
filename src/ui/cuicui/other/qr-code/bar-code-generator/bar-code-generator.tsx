"use client";
import JsBarcode, { type Options } from "jsbarcode";
import { type CSSProperties, useEffect, useRef } from "react";

enum Renderer {
  SVG = "svg",
  IMAGE = "image",
  CANVAS = "canvas",
}

interface ReactBarcodeProps {
  renderer?: Renderer;
  value: string;
  options?: Options;
  style?: CSSProperties;
  className?: string;
}

export const BarCodeGenerator = ({
  style,
  className,
  value,
  options = {},
  renderer = Renderer.SVG,
}: Readonly<ReactBarcodeProps>) => {
  const containerRef = useRef<never>(null);

  useEffect(() => {
    if (!containerRef.current) return;
    if (!value) return;
    if (!options) return;
    if (!renderer) return;
    JsBarcode(containerRef.current, value, options);
  }, [value, options, renderer]);

  switch (renderer) {
    case "canvas":
      return <canvas ref={containerRef} style={style} className={className} />;
    case "image":
      return (
        <img
          ref={containerRef}
          alt="barcode"
          style={style}
          className={className}
        />
      );
    default:
      return (
        <svg
          ref={containerRef}
          fill="currentcolor"
          style={style}
          className={className}
        />
      );
  }
};

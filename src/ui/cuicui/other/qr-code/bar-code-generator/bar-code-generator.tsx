"use client";
import JsBarcode, { type Options } from "jsbarcode";
import { type CSSProperties, useEffect, useRef } from "react";

enum Renderer {
  Svg = "svg",
  Image = "image",
  Canvas = "canvas",
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
  renderer = Renderer.Svg,
}: Readonly<ReactBarcodeProps>) => {
  const containerRef = useRef<never>(null);

  useEffect(() => {
    if (!containerRef.current) {
      return;
    }
    if (!value) {
      return;
    }
    if (!options) {
      return;
    }
    if (!renderer) {
      return;
    }
    JsBarcode(containerRef.current, value, options);
  }, [value, options, renderer]);

  switch (renderer) {
    case "canvas":
      return <canvas className={className} ref={containerRef} style={style} />;
    case "image":
      return (
        <img
          alt="barcode"
          className={className}
          ref={containerRef}
          style={style}
        />
      );
    default:
      return (
        <svg
          className={className}
          fill="currentcolor"
          ref={containerRef}
          style={style}
        />
      );
  }
};

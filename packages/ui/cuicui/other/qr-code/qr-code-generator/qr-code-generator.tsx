"use client";
import { QRCodeSVG } from "qrcode.react";
import { type RefObject, useRef, useState } from "react";

import { ModernSimpleInput } from "@/cuicui/common-ui/inputs/modern-simple-input/modern-simple-input";
import { useCopyToClipboard } from "@/cuicui/hooks/use-copy-to-clipboard/use-copy-to-clipboard";

function downloadStringAsFile(data: string, filename: string) {
  const a = document.createElement("a");
  a.download = filename;
  a.href = data;
  a.click();
}

export const QrCodeGenerator = () => {
  const [value, setValue] = useState("https://www.modul.day");
  const svgRef = useRef<SVGSVGElement>(null);

  // Function to handle SVG download
  const handleDownloadSvg = () => {
    const svgNode = svgRef.current;
    if (!svgNode) {
      return;
    }

    const serializer = new XMLSerializer();
    const svgString = serializer.serializeToString(svgNode);
    const svgData = `data:image/svg+xml;charset=utf-8,${encodeURIComponent(
      svgString,
    )}`;

    downloadStringAsFile(svgData, "qrcode.svg");
  };

  // Function to handle copying SVG markup to clipboard

  return (
    <div className="flex flex-col items-center gap-4">
      <ModernSimpleInput
        className="w-80 text-center"
        onChange={(e) => setValue(e.target.value)}
        value={value}
      />
      <QRCodeSVG
        bgColor={"#ffffff00"}
        className="rounded-md dark:bg-white"
        fgColor={"#2E5FFF"}
        imageSettings={{
          src: "https://www.modul.day/favicon.ico",
          x: undefined,
          y: undefined,
          height: 22,
          width: 22,
          opacity: 1,
          excavate: true,
        }}
        level="H"
        marginSize={2}
        minVersion={4}
        ref={svgRef}
        size={200}
        title={value}
        // Uncomment and customize the following if you want to add an image to the QR code
        value={value}
      />
      <div className="flex flex-col gap-2 *:transform-gpu *:rounded-lg *:border *:border-neutral-400/10 *:bg-neutral-400/20 *:px-3 *:py-1.5 *:text-neutral-600 *:transition-transform *:dark:text-neutral-300">
        <button
          className="hover:scale-90"
          onClick={handleDownloadSvg}
          type="button"
        >
          Download SVG
        </button>
        <button
          className="hover:scale-90"
          onClick={() => {
            if (svgRef.current) {
              handleDownloadPng(svgRef.current);
            }
          }}
          type="button"
        >
          Download PNG
        </button>
        <CopySvgButton svgRef={svgRef} />
      </div>
    </div>
  );
};

const CopySvgButton = ({
  svgRef,
}: { svgRef: RefObject<SVGSVGElement | null> }) => {
  const [_copiedText, copyTextToClipboard, isCopied] = useCopyToClipboard();

  const handleCopySvg = (svgNode: SVGSVGElement) => {
    const serializer = new XMLSerializer();
    const svgString = serializer.serializeToString(svgNode);
    copyTextToClipboard(svgString);
  };
  return (
    <button
      className="hover:scale-90"
      onClick={() => {
        if (svgRef.current) {
          handleCopySvg(svgRef.current);
        }
      }}
      type="button"
    >
      {isCopied ? "Copied!" : "Copy SVG"}
    </button>
  );
};

// Function to handle PNG download
const handleDownloadPng = (svgNode: SVGSVGElement) => {
  const serializer = new XMLSerializer();
  const svgString = serializer.serializeToString(svgNode);
  const svgData = `data:image/svg+xml;charset=utf-8,${encodeURIComponent(
    svgString,
  )}`;

  const img = new Image();
  img.onload = () => {
    // Create a canvas with the same dimensions as the SVG
    const canvas = document.createElement("canvas");
    canvas.width = img.width;
    canvas.height = img.height;
    const ctx = canvas.getContext("2d");
    if (!ctx) {
      alert("Failed to convert SVG to PNG.");
      return;
    }

    // Draw the SVG image onto the canvas
    ctx.drawImage(img, 0, 0);

    // Extract the PNG data URL from the canvas
    const pngData = canvas.toDataURL("image/png");

    // Trigger the download
    downloadStringAsFile(pngData, "qrcode.png");
  };

  // Handle image loading errors
  img.onerror = () => {
    alert("Failed to convert SVG to PNG.");
  };

  // Set the image source to the SVG data
  img.src = svgData;
};

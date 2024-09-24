"use client";
import { QRCodeSVG } from "qrcode.react";
import { useRef, useState } from "react";

import { ModernSimpleInput } from "#/src/ui/cuicui/common-ui/inputs/modern-simple-input/modern-simple-input";
import { useCopyToClipboard } from "#/src/ui/cuicui/hooks/use-copy-to-clipboard/hook/use-copy-to-clipboard";

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
  const handleDownloadSVG = () => {
    const svgNode = svgRef.current;
    if (!svgNode) return;

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
        value={value}
        className="text-center w-80"
        onChange={(e) => setValue(e.target.value)}
      />
      <QRCodeSVG
        ref={svgRef}
        className="dark:bg-white rounded-md"
        value={value}
        title={value}
        size={200}
        bgColor={"#ffffff00"}
        fgColor={"#2E5FFF"}
        level="H"
        marginSize={2}
        minVersion={4}
        // Uncomment and customize the following if you want to add an image to the QR code
        imageSettings={{
          src: "https://www.modul.day/favicon.ico",
          x: undefined,
          y: undefined,
          height: 22,
          width: 22,
          opacity: 1,
          excavate: true,
        }}
      />
      <div className="flex flex-col gap-2 *:px-3 *:py-1.5 *:border *:border-neutral-400/10 *:bg-neutral-400/20 *:text-neutral-600 *:dark:text-neutral-300 *:transition-transform *:transform-gpu *:rounded-lg">
        <button
          type="button"
          onClick={handleDownloadSVG}
          className="hover:scale-90"
        >
          Download SVG
        </button>
        <button
          type="button"
          onClick={() => {
            if (svgRef.current) {
              handleDownloadPNG(svgRef.current);
            }
          }}
          className="hover:scale-90"
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
}: { svgRef: React.RefObject<SVGSVGElement> }) => {
  const [copiedText, copyTextToClipboard, isCopied] = useCopyToClipboard();

  const handleCopySVG = (svgNode: SVGSVGElement) => {
    const serializer = new XMLSerializer();
    const svgString = serializer.serializeToString(svgNode);
    copyTextToClipboard(svgString);
  };
  return (
    <button
      type="button"
      onClick={() => {
        if (svgRef.current) {
          handleCopySVG(svgRef.current);
        }
      }}
      className="hover:scale-90"
    >
      {isCopied ? "Copied!" : "Copy SVG"}
    </button>
  );
};

// Function to handle PNG download
const handleDownloadPNG = (svgNode: SVGSVGElement) => {
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
      console.error("Canvas context is null");
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
  img.onerror = (err) => {
    console.error("Failed to load SVG as image", err);
    alert("Failed to convert SVG to PNG.");
  };

  // Set the image source to the SVG data
  img.src = svgData;
};

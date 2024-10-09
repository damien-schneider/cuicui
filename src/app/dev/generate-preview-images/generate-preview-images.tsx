"use client";

//TODO -> Save as zip file instead, with all images in section folder & category subfolder with "-light" and "-dark" suffixes
import { useState, useEffect, useRef, type ReactNode } from "react";
import { SectionsList } from "#/src/lib/cuicui-components/sections-list";
import domtoimage from "dom-to-image-more";
import { useTheme } from "next-themes";

const WIDTH_SCREENSHOT = 1000;
const HEIGHT_SCREENSHOT = 500;
const THEMES_ARRAY = ["light", "dark"];

export default function GeneratePreviewImages() {
  const [currentComponent, setCurrentComponent] = useState<ReactNode>(null);
  const [isProcessing, setIsProcessing] = useState(false);
  const { setTheme } = useTheme();
  useEffect(() => {
    if (!isProcessing) {
      processComponents();
    }

    async function processComponents() {
      const sections = SectionsList.filter(
        (section) =>
          section.type === "multiple-component" ||
          section.type === "single-component",
      );
      for (const theme of THEMES_ARRAY) {
        setTheme(theme);
        for (const section of sections) {
          for (const category of section.categoriesList) {
            setCurrentComponent(
              <ComponentToRender
                key={`${theme}-${section.name}-${category.name}`}
                fileName={`${theme}-${section.slug}-${category.slug}`}
                scale={category.previewCategory?.previewScale}
              >
                {category.previewCategory?.component}
              </ComponentToRender>,
            );

            // Wait for the component to render and capture the screenshot
            await new Promise((resolve) => setTimeout(resolve, 1500)); // Adjust delay as needed
          }
        }
      }

      // All components have been processed
      setIsProcessing(false);
      setCurrentComponent(null);
    }
  }, [isProcessing, setTheme]);
  if (isProcessing) {
    return <>{currentComponent}</>;
  }
  return (
    <button
      onClick={() => setIsProcessing(true)}
      disabled={isProcessing}
      type="button"
    >
      Start captures
    </button>
  );
}

const ComponentToRender = ({
  fileName,
  children,
  scale,
}: {
  fileName: string;
  children: ReactNode;
  scale?: number;
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const hasCaptured = useRef(false);

  useEffect(() => {
    if (hasCaptured.current) {
      return;
    }
    hasCaptured.current = true;
    const captureComponent = async () => {
      // Wait for the component to fully render
      await new Promise((resolve) => setTimeout(resolve, 1000)); // Adjust delay as needed

      if (ref.current) {
        domtoimage
          .toPng(ref.current, {
            copyDefaultStyles: false,
            width: WIDTH_SCREENSHOT,
            height: HEIGHT_SCREENSHOT,
            scale: 1,
          })
          .then((dataUrl: string) => {
            const link = document.createElement("a");
            link.download = `${fileName}.png`;
            link.href = dataUrl;
            link.click();
          })
          .catch((error: unknown) => {
            console.error("Oops, something went wrong!", error);
          });
      }
    };

    captureComponent();
  }, [fileName]);

  return (
    <>
      <style>
        {`
      .cuicui-screenshot > * {
        transform: scale(${scale ?? 1});
      }
      `}
      </style>
      <div
        ref={ref}
        className="flex items-center justify-center cuicui-screenshot"
        style={{
          width: WIDTH_SCREENSHOT,
          height: HEIGHT_SCREENSHOT,
        }}
      >
        {children}
      </div>
    </>
  );
};

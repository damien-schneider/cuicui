"use client";
import { useEffect, useState } from "react";
import { cn } from "@/cuicui/utils/cn/cn";

//TODO : Improve mobile version to display the image down the corresponding text instead of at the full bottom

const data = [
  {
    title: "Visit the cuicui.day website",
    content:
      "Visit the cuicui.day website and browse through the dozens of available components to help you build your web or mobile application.",
    srcImage:
      "https://images.unsplash.com/photo-1717501219716-b93a67d2f7b2?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzfHx8ZW58MHx8fHx8",
  },
  {
    title: "Browse the site and choose your component",
    content:
      "Browse the categories, the variants of each component, try them out, and integrate them into your project with just a few clicks.",
    srcImage:
      "https://images.unsplash.com/photo-1717501219074-943fc738e5a2?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwcm9maWxlLXBhZ2V8M3x8fGVufDB8fHx8fA%3D%3D",
  },
  {
    title: "Set up your environment",
    content:
      "Set up your development environment to integrate Cuicui library components. You can customize them infinitely to match your branding guidelines.",
    srcImage:
      "https://images.unsplash.com/photo-1717501218636-a390f9ac5957?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwcm9maWxlLXBhZ2V8Nnx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    title: "Copy and paste the code",
    content:
      "Copy and paste the code generated by the Cuicui library into your project and enjoy modern, ready-to-use components.",
    srcImage:
      "https://images.unsplash.com/photo-1717501219781-54ac9d09051b?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwcm9maWxlLXBhZ2V8N3x8fGVufDB8fHx8fA%3D%3D",
  },
];

export function Variant1FeatureFourImages() {
  const [featureOpen, setFeatureOpen] = useState<number>(0);
  const [timer, setTimer] = useState<number>(0);
  useEffect(() => {
    const interval = setInterval(() => {
      setTimer((prev) => prev + 10);
    }, 10);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (timer > 10000) {
      setFeatureOpen((prev) => (prev + 1) % data.length);
      setTimer(0);
    }
  }, [timer]);

  return (
    <div className="container">
      <div className="mb-20 text-center">
        <p className=" mb-2 font-medium text-neutral-500 text-sm uppercase">
          How does it work ?
        </p>

        <h2 className="mb-4 font-semibold text-3xl text-neutral-800 tracking-tighter dark:text-neutral-300">
          How to use the Easiest component librairy : Cuicui
        </h2>
      </div>
      <div className=" grid grid-cols-1 gap-4 md:grid-cols-2">
        <div className="space-y-6 ">
          {data.map((item, index) => (
            <button
              className="w-full"
              key={item.title}
              onClick={() => {
                setFeatureOpen(index);
                setTimer(0);
              }}
              type="button"
            >
              <TextComponent
                content={item.content}
                isOpen={featureOpen === index}
                loadingWidthPercent={featureOpen === index ? timer / 100 : 0}
                number={index + 1}
                title={item.title}
              />
            </button>
          ))}
        </div>
        <div className="h-full">
          <div
            className={cn(
              "relative h-96 w-full overflow-hidden rounded-lg md:h-[500px]",
            )}
          >
            {data.map((item, index) => (
              <img
                alt={item.title}
                className={cn(
                  "absolute h-[500px] w-full transform-gpu rounded-lg object-cover transition-all duration-300",
                  featureOpen === index ? "scale-100" : "scale-70",
                  featureOpen > index ? "translate-y-full" : "",
                )}
                key={item.title}
                src={item.srcImage}
                style={{ zIndex: data.length - index }}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function TextComponent({
  number,
  title,
  content,
  isOpen,
  loadingWidthPercent,
}: Readonly<{
  number: number;
  title: string;
  content: string;
  isOpen: boolean;
  loadingWidthPercent?: number;
}>) {
  return (
    <div
      className={cn(
        "transform-gpu rounded-lg border transition-all",
        isOpen
          ? "border-neutral-500/10 bg-gradient-to-b from-neutral-200/15 to-neutral-200/5 dark:border-neutral-500/15 dark:from-neutral-600/15 dark:to-neutral-600/5 dark:shadow-[2px_4px_25px_0px_rgba(248,248,248,0.06)_inset] "
          : "scale-90 border-transparent opacity-50 saturate-0",
      )}
    >
      <div className="flex w-full items-center gap-4 p-4">
        <p
          className={cn(
            "inline-flex size-8 shrink-0 items-center justify-center rounded-md bg-neutral-500/20 text-neutral-600",
          )}
        >
          {number}
        </p>
        <h2
          className={cn(
            "text-left font-medium text-neutral-800 text-xl dark:text-neutral-200",
          )}
        >
          {title}
        </h2>
      </div>
      <div
        className={cn(
          "w-full transform-gpu overflow-hidden text-left text-neutral-600 transition-all duration-500 dark:text-neutral-400",
          isOpen ? " max-h-64" : "max-h-0",
        )}
      >
        <p className="p-4 text-lg">{content}</p>
        <div className="w-full px-4 pb-4">
          <div className="relative h-1 w-full overflow-hidden rounded-full">
            <div
              className={cn("absolute top-0 left-0 h-1 bg-neutral-500")}
              style={{ width: `${loadingWidthPercent}%` }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

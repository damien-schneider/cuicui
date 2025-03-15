"use client";

import { ShinyGradientSkeletonHorizontal } from "@/cuicui/common-ui/skeletons/shiny-gradient/horizontal.variant";
import { cn } from "@/cuicui/utils/cn";

import { AnimatePresence, motion } from "motion/react";
import { ChevronRight } from "lucide-react";
import Link from "next/link";

import { type HTMLProps, useEffect, useRef, useState } from "react";

type Heading = {
  id: string;
  text: string;
  level: number;
  index: number;
};

const TableOfContent = ({
  className,
  idOfParentContainer,
  ...props
}: {
  readonly props?: HTMLProps<HTMLDivElement>;
  readonly className?: string;
  readonly idOfParentContainer: string;
}) => {
  const [headings, setHeadings] = useState<Heading[]>([]);
  const [activeIds, setActiveIds] = useState<string[]>([]);
  const [activeTableOfContentIds, setActiveTableOfContentIds] = useState<
    string[]
  >([]);
  const [firstActiveHeading2, setFirstActiveHeading2] = useState<string | null>(
    null,
  );
  const [lastActiveHeading2, setLastActiveHeading2] = useState<string | null>(
    null,
  );
  const [bottomCoordinate, setBottomCoordinate] = useState<number>(0);
  const [topCoordinate, setTopCoordinate] = useState<number>(0);
  const refTableOfContentList = useRef<HTMLOListElement>(null);
  useEffect(() => {
    if (activeTableOfContentIds.length > 0) {
      setFirstActiveHeading2(activeTableOfContentIds[0]);
      setLastActiveHeading2(
        activeTableOfContentIds[activeTableOfContentIds.length - 1],
      );
    } else {
      setFirstActiveHeading2(null);
      setLastActiveHeading2(null);
    }
  }, [activeTableOfContentIds]);

  useEffect(() => {
    // Get coordinates of the bottom of the last active heading and the top of the first active heading
    const lastChildId =
      activeTableOfContentIds[activeTableOfContentIds.length - 1];
    const firstChildId = activeTableOfContentIds[0];
    const lastChild = document.getElementById(
      `${lastChildId}-table-of-content-item`,
    );
    const firstChild = document.getElementById(
      `${firstChildId}-table-of-content-item`,
    );

    if (lastChild && firstChild) {
      const lastChildRect = lastChild.getBoundingClientRect();
      const firstChildRect = firstChild.getBoundingClientRect();

      // Calculate relative coordinates from the ol element
      if (!refTableOfContentList.current) {
        return;
      }
      setBottomCoordinate(
        lastChildRect.bottom -
          refTableOfContentList.current.getBoundingClientRect().top,
      );
      setTopCoordinate(
        firstChildRect.top -
          refTableOfContentList.current.getBoundingClientRect().top,
      );
    }
  }, [activeTableOfContentIds]);

  useEffect(() => {
    if (!headings) {
      return;
    }
    if (activeIds.length > 0) {
      const previousHeading = getPreviousHeading(activeIds[0], headings);
      if (previousHeading) {
        const activeIdsWithPreviousHeading = [previousHeading, ...activeIds];
        setActiveTableOfContentIds(activeIdsWithPreviousHeading);
      } else {
        setActiveTableOfContentIds(activeIds);
      }
    } else {
      // Keep the previous active ids if there are no active ids but without the first one
      setActiveTableOfContentIds((prevIds) => {
        if (prevIds.length > 0) {
          return prevIds.slice(1);
        }
        return [];
      });
    }
  }, [activeIds, headings]);

  useEffect(() => {
    if (typeof document === "undefined") {
      return;
    }

    const content = document.getElementById(idOfParentContainer);
    if (!content) {
      return;
    }

    const headingElements = Array.from(
      content.querySelectorAll("h1, h2, h3, h4, h5, h6"),
    );

    const newHeadings: Heading[] = headingElements.map((elem, index) => {
      let id = elem.id;
      if (!id) {
        id =
          elem.textContent
            ?.toLowerCase()
            .replace(/\s+/g, "-")
            .replace(/[!@#$%^&*(),.?":{}|<>]/g, "") ?? "";
        elem.id = id;
      }
      const level = Number.parseInt(elem.tagName.substring(1), 10);
      return { id, text: elem.textContent ?? "", level, index };
    });

    setHeadings(newHeadings);

    const handleIntersection: IntersectionObserverCallback = (entries) => {
      const updateActiveIds = (
        prevIds: string[],
        entries: IntersectionObserverEntry[],
      ) => {
        const updatedIds = [...prevIds];
        for (const entry of entries) {
          const index = updatedIds.indexOf(entry.target.id);

          if (entry.isIntersecting) {
            if (index === -1) {
              updatedIds.push(entry.target.id);
              updatedIds.sort(
                (a, b) =>
                  headingElements.findIndex((el) => el.id === a) -
                  headingElements.findIndex((el) => el.id === b),
              );
            }
          } else if (index !== -1) {
            updatedIds.splice(index, 1);
          }
        }

        return updatedIds;
      };

      setActiveIds((prevIds) => updateActiveIds(prevIds, entries));
    };

    const observerOptions: IntersectionObserverInit = {
      root: null,
      rootMargin: "-10px",
      // threshold: [0.5, 1],
      threshold: [1],
    };

    const observer = new IntersectionObserver(
      handleIntersection,
      observerOptions,
    );

    for (const elem of headingElements) {
      observer.observe(elem);
    }

    return () => {
      observer.disconnect();
    };
  }, [idOfParentContainer]);

  function getPreviousHeading(id: string, headings: Heading[]) {
    const index = headings.findIndex((heading) => heading.id === id);
    if (index === 0) {
      return null;
    }
    return headings[index - 1]?.id;
  }

  if (headings.length === 0) {
    return <ShinyGradientSkeletonHorizontal />;
  }

  return (
    <nav className={cn("bg-white dark:bg-neutral-800", className)} {...props}>
      <ol className="relative overflow-hidden " ref={refTableOfContentList}>
        {headings.map((heading, _index) => {
          return (
            <li
              className="group relative px-1 text-neutral-500 hover:text-neutral-800 dark:hover:text-neutral-100"
              id={`${heading.id}-table-of-content-item`}
              key={heading.id}
            >
              <div
                aria-hidden="true"
                className="pointer-events-none absolute top-px left-0 z-20 h-full select-none bg-white dark:bg-neutral-800"
                style={{
                  width: `${(heading.level - 1) * 8 - 1}px`,
                }}
              />
              <div
                aria-hidden="true"
                className="pointer-events-none absolute z-20 h-full w-full select-none bg-white dark:bg-neutral-800"
                style={{
                  left: `${(heading.level - 1) * 8}px`,
                }}
              />
              <Link
                className={cn(
                  "relative z-30 block transform-gpu py-1.5 pr-5 pl-2 text-sm leading-4 tracking-tight transition-all hover:translate-x-0.5",
                  // Before element : positionning
                  "before:absolute before:top-0.5 before:right-0 before:bottom-0.5 before:left-0 ",
                  // Before element : animation
                  "before:scale-x-75 before:scale-y-50 before:transform-gpu before:rounded-lg before:bg-neutral-400/10 before:opacity-0 before:transition-all before:duration-300 group-hover:before:scale-100 group-hover:before:opacity-100",
                  (heading.level === 1 || heading.level === 2) &&
                    "font-semibold",
                  heading.level === 3 && "font-normal",
                )}
                href={`#${heading.id}`}
                style={{
                  marginLeft: `${(heading.level - 1) * 8}px`,
                }}
              >
                {heading.text}
              </Link>
              <ChevronRight className="-translate-y-1/2 absolute top-1/2 right-1 ml-1 size-4 translate-x-1 transform-gpu opacity-0 transition-all group-hover:translate-x-0 group-hover:opacity-100" />
            </li>
          );
        })}
        <AnimatePresence>
          {firstActiveHeading2 && lastActiveHeading2 && (
            <motion.div
              animate={{ opacity: 1, y: 0 }}
              className="pointer-events-none absolute z-10 w-full select-none bg-blue-500"
              exit={{ opacity: 0, y: -100 }}
              initial={{ opacity: 0, y: -100 }}
              layout={true}
              layoutId="active-bar"
              style={{
                top: topCoordinate,
                bottom: `calc(100% - ${bottomCoordinate}px)`,
              }}
              transition={{ duration: 0.3, ease: "easeOut" }}
            />
          )}
        </AnimatePresence>
      </ol>
    </nav>
  );
};

export default TableOfContent;

"use client";

import { ShinyGradientSkeletonHorizontal } from "#/src/ui/cuicui/common-ui/skeletons/shiny-gradient/skeleton-shiny-gradient-horizontal";
import { cn } from "#/src/utils/cn";

import { AnimatePresence, motion } from "framer-motion";
import { ChevronRight } from "lucide-react";
import Link from "next/link";
import type React from "react";
import { useEffect, useRef, useState } from "react";

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
  readonly props?: React.HTMLProps<HTMLDivElement>;
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
      if (!refTableOfContentList.current) return;
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
    if (!headings) return;
    if (activeIds.length > 0) {
      const previousHeading = getPreviousHeading(activeIds[0], headings);
      if (!previousHeading) {
        setActiveTableOfContentIds(activeIds);
      } else {
        const activeIdsWithPreviousHeading = [previousHeading, ...activeIds];
        setActiveTableOfContentIds(activeIdsWithPreviousHeading);
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
    if (typeof document === "undefined") return;

    const content = document.getElementById(idOfParentContainer);
    if (!content) return;

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
    if (index === 0) return null;
    return headings[index - 1]?.id;
  }

  if (headings.length === 0) return <ShinyGradientSkeletonHorizontal />;

  return (
    <nav className={cn("dark:bg-neutral-800 bg-white", className)} {...props}>
      <ol ref={refTableOfContentList} className="relative overflow-hidden ">
        {headings.map((heading, index) => {
          return (
            <li
              id={`${heading.id}-table-of-content-item`}
              key={heading.id}
              className="relative group px-1 hover:text-neutral-800 text-neutral-500 dark:hover:text-neutral-100"
            >
              <div
                aria-hidden="true"
                className="absolute left-0 top-px bg-white dark:bg-neutral-800 z-20 h-full select-none pointer-events-none"
                style={{
                  width: `${(heading.level - 1) * 8 - 1}px`,
                }}
              />
              <div
                aria-hidden="true"
                className="absolute w-full bg-white dark:bg-neutral-800 h-full z-20 select-none pointer-events-none"
                style={{
                  left: `${(heading.level - 1) * 8}px`,
                }}
              />
              <Link
                href={`#${heading.id}`}
                style={{
                  marginLeft: `${(heading.level - 1) * 8}px`,
                }}
                className={cn(
                  "block relative hover:translate-x-0.5 py-1.5 tracking-tight pl-2 text-sm transition-all transform-gpu pr-5 z-30 leading-4",
                  // Before element : positionning
                  "before:absolute before:bottom-0.5 before:right-0 before:left-0 before:top-0.5 ",
                  // Before element : animation
                  "before:rounded-lg before:bg-neutral-400/10 before:opacity-0 before:group-hover:opacity-100 before:transition-all before:transform-gpu before:scale-x-75 before:duration-300 group-hover:before:scale-100 before:scale-y-50",
                  (heading.level === 1 || heading.level === 2) &&
                    "font-semibold",
                  heading.level === 3 && "font-normal",
                )}
              >
                {heading.text}
              </Link>
              <ChevronRight className="size-4 transition-all transform-gpu group-hover:opacity-100 opacity-0 ml-1 absolute top-1/2 -translate-y-1/2 right-1 translate-x-1 group-hover:translate-x-0" />
            </li>
          );
        })}
        <AnimatePresence>
          {firstActiveHeading2 && lastActiveHeading2 && (
            <motion.div
              layout
              layoutId="active-bar"
              initial={{ opacity: 0, y: -100 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -100 }}
              className="absolute w-full bg-blue-500 select-none pointer-events-none z-10"
              transition={{ duration: 0.3, ease: "easeOut" }}
              style={{
                top: topCoordinate,
                bottom: `calc(100% - ${bottomCoordinate}px)`,
              }}
            />
          )}
        </AnimatePresence>
      </ol>
    </nav>
  );
};

export default TableOfContent;

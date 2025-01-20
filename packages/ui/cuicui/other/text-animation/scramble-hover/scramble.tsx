"use client";
import { useEffect, useState } from "react";
import { motion } from "motion/react";
import { cn } from "@/cuicui/utils/cn";

interface ScrambleHoverProps {
  text: string;
  scrambleSpeed?: number;
  maxIterations?: number;
  sequential?: boolean;
  revealDirection?: "start" | "end" | "center";
  useOriginalCharsOnly?: boolean;
  characters?: string;
  className?: string;
  scrambledClassName?: string;
}

const ScrambleHover = ({
  text,
  scrambleSpeed = 50,
  maxIterations = 10,
  useOriginalCharsOnly = false,
  characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz!@#$%^&*()_+",
  className,
  scrambledClassName,
  sequential = false,
  revealDirection = "start",
  ...props
}: ScrambleHoverProps) => {
  const [displayText, setDisplayText] = useState(text);
  const [isHovering, setIsHovering] = useState(false);
  const [isScrambling, setIsScrambling] = useState(false);
  const [revealedIndices] = useState(new Set<number>());

  useEffect(() => {
    let interval: NodeJS.Timeout;
    let currentIteration = 0;

    const getNextIndex = () => {
      switch (revealDirection) {
        case "start":
          return getNextIndexFromStart();
        case "end":
          return getNextIndexFromEnd();
        case "center":
          return getNextIndexFromCenter();
        default:
          return revealedIndices.size;
      }
    };

    const getNextIndexFromStart = () => revealedIndices.size;

    const getNextIndexFromEnd = () => text.length - 1 - revealedIndices.size;

    const getNextIndexFromCenter = () => {
      const textLength = text.length;
      const middle = Math.floor(textLength / 2);
      const offset = Math.floor(revealedIndices.size / 2);
      const nextIndex =
        revealedIndices.size % 2 === 0 ? middle + offset : middle - offset - 1;

      if (
        nextIndex >= 0 &&
        nextIndex < textLength &&
        !revealedIndices.has(nextIndex)
      ) {
        return nextIndex;
      }

      for (let i = 0; i < textLength; i++) {
        if (!revealedIndices.has(i)) {
          return i;
        }
      }
      return 0;
    };

    const shuffleText = (text: string) => {
      if (useOriginalCharsOnly) {
        const positions = text.split("").map((char, i) => ({
          char,
          isSpace: char === " ",
          index: i,
          isRevealed: revealedIndices.has(i),
        }));

        const nonSpaceChars = positions
          .filter((p) => !(p.isSpace || p.isRevealed))
          .map((p) => p.char);

        // Shuffle remaining non-revealed, non-space characters
        for (let i = nonSpaceChars.length - 1; i > 0; i--) {
          const j = Math.floor(Math.random() * (i + 1));
          [nonSpaceChars[i], nonSpaceChars[j]] = [
            nonSpaceChars[j],
            nonSpaceChars[i],
          ];
        }

        let charIndex = 0;
        return positions
          .map((p) => {
            if (p.isSpace) {
              return " ";
            }
            if (p.isRevealed) {
              return text[p.index];
            }
            return nonSpaceChars[charIndex++];
          })
          .join("");
      }
      return text
        .split("")
        .map((char, i) => {
          if (char === " ") {
            return " ";
          }
          if (revealedIndices.has(i)) {
            return text[i];
          }
          return availableChars[
            Math.floor(Math.random() * availableChars.length)
          ];
        })
        .join("");
    };

    const availableChars = useOriginalCharsOnly
      ? Array.from(new Set(text.split(""))).filter((char) => char !== " ")
      : characters.split("");

    if (isHovering) {
      setIsScrambling(true);
      interval = setInterval(() => {
        if (sequential) {
          if (revealedIndices.size < text.length) {
            const nextIndex = getNextIndex();
            revealedIndices.add(nextIndex);
            setDisplayText(shuffleText(text));
          } else {
            clearInterval(interval);
            setIsScrambling(false);
          }
        } else {
          setDisplayText(shuffleText(text));
          currentIteration++;
          if (currentIteration >= maxIterations) {
            clearInterval(interval);
            setIsScrambling(false);
            setDisplayText(text);
          }
        }
      }, scrambleSpeed);
    } else {
      setDisplayText(text);
      revealedIndices.clear();
    }

    return () => {
      if (interval) {
        clearInterval(interval);
      }
    };
  }, [
    isHovering,
    revealedIndices,
    text,
    characters,
    scrambleSpeed,
    useOriginalCharsOnly,
    sequential,
    revealDirection,
    maxIterations,
  ]);

  return (
    <motion.span
      onHoverStart={() => setIsHovering(true)}
      onHoverEnd={() => setIsHovering(false)}
      className={cn("inline-block whitespace-pre-wrap", className)}
      {...props}
    >
      <span className="sr-only">{displayText}</span>
      <span aria-hidden="true">
        {displayText.split("").map((char, index) => (
          <span
            key={`${index}-${char}`}
            className={cn(
              revealedIndices.has(index) || !isScrambling || !isHovering
                ? className
                : scrambledClassName,
            )}
          >
            {char}
          </span>
        ))}
      </span>
    </motion.span>
  );
};

export default ScrambleHover;

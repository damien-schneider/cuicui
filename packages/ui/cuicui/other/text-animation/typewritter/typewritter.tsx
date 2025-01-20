"use client";
import { type ReactNode, useCallback, useEffect, useState } from "react";
import { motion, type Variants } from "motion/react";
import { cn } from "@/cuicui/utils/cn";

interface TypewriterProps {
  text: string | string[];
  speed?: number;
  initialDelay?: number;
  waitTime?: number;
  deleteSpeed?: number;
  loop?: boolean;
  className?: string;
  showCursor?: boolean;
  hideCursorOnType?: boolean;
  cursorChar?: string | ReactNode;
  cursorAnimationVariants?: {
    initial: Variants["initial"];
    animate: Variants["animate"];
  };
  cursorClassName?: string;
}

const Typewriter = ({
  text,
  speed = 50,
  initialDelay = 0,
  waitTime = 2000,
  deleteSpeed = 30,
  loop = true,
  className,
  showCursor = true,
  hideCursorOnType = false,
  cursorChar = "|",
  cursorClassName = "ml-1",
  cursorAnimationVariants = {
    initial: { opacity: 0 },
    animate: {
      opacity: 1,
      transition: {
        duration: 0.01,
        repeat: Number.POSITIVE_INFINITY,
        repeatDelay: 0.4,
        repeatType: "reverse",
      },
    },
  },
}: TypewriterProps) => {
  const [displayText, setDisplayText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [currentTextIndex, setCurrentTextIndex] = useState(0);

  const texts = Array.isArray(text) ? text : [text];

  const handleTyping = useCallback(
    (currentText: string) => {
      setTimeout(() => {
        setDisplayText((prev) => prev + currentText[currentIndex]);
        setCurrentIndex((prev) => prev + 1);
      }, speed);
    },
    [speed, currentIndex],
  );

  const handleDeleting = useCallback(() => {
    setTimeout(() => {
      setDisplayText((prev) => prev.slice(0, -1));
    }, deleteSpeed);
  }, [deleteSpeed]);

  const handleTextSwitch = useCallback(() => {
    setIsDeleting(false);
    if (currentTextIndex === texts.length - 1 && !loop) {
      return;
    }
    setCurrentTextIndex((prev) => (prev + 1) % texts.length);
    setCurrentIndex(0);
    setTimeout(() => {
      return;
    }, waitTime);
  }, [texts, currentTextIndex, loop, waitTime]);

  useEffect(() => {
    let timeout: NodeJS.Timeout;
    const currentText = texts[currentTextIndex];

    const startTyping = () => {
      if (isDeleting) {
        if (displayText === "") {
          handleTextSwitch();
        } else {
          handleDeleting();
        }
      } else if (currentIndex < currentText.length) {
        handleTyping(currentText);
      } else if (texts.length > 1) {
        timeout = setTimeout(() => {
          setIsDeleting(true);
        }, waitTime);
      }
    };

    // Apply initial delay only at the start
    if (currentIndex === 0 && !isDeleting && displayText === "") {
      timeout = setTimeout(startTyping, initialDelay);
    } else {
      startTyping();
    }

    return () => clearTimeout(timeout);
  }, [
    currentIndex,
    displayText,
    isDeleting,
    initialDelay,
    waitTime,
    texts,
    currentTextIndex,
    handleDeleting,
    handleTextSwitch,
    handleTyping,
  ]);

  return (
    <span className={`inline whitespace-pre-wrap tracking-tight ${className}`}>
      <span>{displayText}</span>
      {showCursor && (
        <motion.span
          variants={cursorAnimationVariants}
          className={cn(
            cursorClassName,
            hideCursorOnType &&
              (currentIndex < texts[currentTextIndex].length || isDeleting)
              ? "hidden"
              : "",
          )}
          initial="initial"
          animate="animate"
        >
          {cursorChar}
        </motion.span>
      )}
    </span>
  );
};

export default Typewriter;

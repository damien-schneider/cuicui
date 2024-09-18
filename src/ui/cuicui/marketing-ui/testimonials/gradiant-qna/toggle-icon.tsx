"use client"
import { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

export const ToogleIcon = ({ detailsRef }: { detailsRef: HTMLElement }) => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const details = detailsRef?.current
    if (!details) return

    const handleToggle = () => {
      setIsOpen(details.open)
    }

    details.addEventListener('toggle', handleToggle)
    return () => details.removeEventListener('toggle', handleToggle)
  }, [])

  const variants = {
    arrow: { d: "M19 9L12 16L5 9" },
    minus: { d: "M5 12H19" }
  }

  return (
    <button
      className="size-5 group-open:-rotate-180 transition-all absolute top-5 right-5  text-neutral-600 dark:text-neutral-300 transform-gpu"
    >
      <motion.svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="text-gray-600"
      >
        <motion.path
          d={variants.arrow.d}
          variants={variants}
          initial="arrow"
          animate={isOpen ? "arrow" : "minus"}
          transition={{ duration: 0.3 }}
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </motion.svg>
    </button>
  )
}

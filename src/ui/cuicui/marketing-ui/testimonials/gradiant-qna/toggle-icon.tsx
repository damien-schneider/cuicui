"use client"
import { useState, useEffect, useRef } from 'react';

export const ToogleIcon = ({ detailsRef }: { detailsRef: HTMLElement }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  useEffect(() => {
    const details = detailsRef?.current
    if (!details) return

    const handleToggle = () => {
      setIsExpanded(details.open)
    }

    details.addEventListener('toggle', handleToggle)
    return () => details.removeEventListener('toggle', handleToggle)
  }, [])

  return (
    <button
      className="relative size-5 group-open:-rotate-180 transition-all top-1 right-5 text-neutral-600 dark:text-neutral-300 transform-gpu"
      aria-expanded={isExpanded}
    >
       <div className="absolute inset-0 flex items-center justify-center">
        <div
          className={`
            w-3 h-0.5 bg-current
            transition-all duration-500 ease-in-out transform-gpu
            ${isExpanded ? '-rotate-45 translate-y-0.5 translate-x-0.5' : 'rotate-0'}
          `}
        />
        <div
          className={`
            w-3 h-0.5 bg-current
            transition-all duration-500 ease-in-out transform-gpu
            ${isExpanded ? 'rotate-45 translate-y-0.5 -translate-x-0.5' : 'rotate-0'}
          `}
        />
      </div>
    </button>
  )
}

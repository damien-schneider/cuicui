"use client";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowLeftIcon, ArrowRightIcon } from "lucide-react";
import type React from "react";
import { Fragment, useState } from "react";

const testimonials = [
  {
    content:
      'Biltmore has saved employees at Harmony an estimated 400+ hours in task prioritization and management. "It\'s an amazing tool that we highly recommend."',
    author: "John, Marketing Manager at Harmony",
    imgAlt: "John",
  },
  {
    content:
      '"I love how Biltmore adapts to my workflow. It\'s like having a personal assistant right at my fingertips!"',
    author: "James, Software Engineer at Sage",
    imgAlt: "James",
  },
  {
    content:
      "Users report an average 15% increase in productivity after using Biltmore, allowing the software to pay for itself.",
    author: "",
    imgAlt: "Peter",
  },
];

export function TestimonialsVariant1() {
  const [currentSlide, setCurrentSlide] = useState(0);

  function handleNextSlide() {
    setCurrentSlide((prev) => (prev + 1) % testimonials.length);
  }

  function handlePreviousSlide() {
    setCurrentSlide(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length,
    );
  }

  return (
    <div className="w-full bg-neutral-100 dark:bg-neutral-900 rounded-2xl p-8 overflow-hidden ">
      <h2 className="text-xl font-medium text-neutral-950 dark:text-neutral-50">
        Testimonials
      </h2>
      <p className="text-sm text-neutral-500">
        Why people love using Biltmore to get more done.
      </p>
      <div className="flex gap-2 justify-end">
        <button
          disabled={currentSlide === 0}
          type="button"
          onClick={handlePreviousSlide}
          className="rounded-full group size-7 p-1.5 bg-white dark:bg-neutral-950 inline-flex items-center justify-center"
        >
          <ArrowLeftIcon className="group-disabled:stroke-neutral-500/40 stroke-blue-500 transition-colors transform-gpu" />
        </button>
        <button
          disabled={currentSlide === testimonials.length - 1}
          type="button"
          onClick={handleNextSlide}
          className="rounded-full group size-7 p-1.5 bg-white dark:bg-neutral-950  inline-flex items-center justify-center"
        >
          <ArrowRightIcon className="group-disabled:stroke-neutral-500/40 stroke-blue-500 transition-colors transform-gpu" />
        </button>
      </div>
      <section className="flex mt-8 *:shrink-0 gap-2 w-full">
        {testimonials.map((testimonial, index) => (
          <AnimatePresence mode="popLayout" key={testimonial.content}>
            {index >= currentSlide && (
              <motion.div
                initial={{ opacity: 0, x: 0, scale: 0.8 }}
                animate={{ opacity: 1, x: 0, scale: 1 }}
                exit={{ opacity: 0, x: 0, scale: 0.8 }}
                transition={{ duration: 0.35, ease: "easeInOut" }}
                layout
                className="bg-white dark:bg-neutral-800 rounded-lg p-4 flex flex-col justify-between h-60 w-[24rem] shadow-sm transform-gpu"
              >
                <div className="size-7 bg-neutral-500/10 rounded-full" />
                <p className="tracking-tight font-medium leading-5 text-neutral-600 dark:text-neutral-400">
                  {testimonial.content}
                </p>
                <p className="text-xs text-neutral-400 dark:text-neutral-500">
                  {testimonial.author}
                </p>
              </motion.div>
            )}
          </AnimatePresence>
        ))}
      </section>
    </div>
  );
}

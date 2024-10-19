"use client";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowLeftIcon, ArrowRightIcon } from "lucide-react";
import { useState } from "react";

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
    <div className="w-full overflow-hidden rounded-2xl bg-neutral-100 p-8 dark:bg-neutral-900 ">
      <h2 className="font-medium text-neutral-950 text-xl dark:text-neutral-50">
        Testimonials
      </h2>
      <p className="text-neutral-500 text-sm">
        Why people love using Biltmore to get more done.
      </p>
      <div className="flex justify-end gap-2">
        <button
          className="group inline-flex size-7 items-center justify-center rounded-full bg-white p-1.5 dark:bg-neutral-950"
          disabled={currentSlide === 0}
          onClick={handlePreviousSlide}
          type="button"
        >
          <ArrowLeftIcon className="transform-gpu stroke-blue-500 transition-colors group-disabled:stroke-neutral-500/40" />
        </button>
        <button
          className="group inline-flex size-7 items-center justify-center rounded-full bg-white p-1.5 dark:bg-neutral-950"
          disabled={currentSlide === testimonials.length - 1}
          onClick={handleNextSlide}
          type="button"
        >
          <ArrowRightIcon className="transform-gpu stroke-blue-500 transition-colors group-disabled:stroke-neutral-500/40" />
        </button>
      </div>
      <section className="mt-8 flex w-full gap-2 *:shrink-0">
        {testimonials.map((testimonial, index) => (
          <AnimatePresence key={testimonial.content} mode="popLayout">
            {index >= currentSlide && (
              <motion.div
                animate={{ opacity: 1, x: 0, scale: 1 }}
                className="flex h-60 w-[24rem] transform-gpu flex-col justify-between rounded-lg bg-white p-4 shadow-sm dark:bg-neutral-800"
                exit={{ opacity: 0, x: 0, scale: 0.8 }}
                initial={{ opacity: 0, x: 0, scale: 0.8 }}
                layout={true}
                transition={{ duration: 0.35, ease: "easeInOut" }}
              >
                <div className="size-7 rounded-full bg-neutral-500/10" />
                <p className="font-medium text-neutral-600 leading-5 tracking-tight dark:text-neutral-400">
                  {testimonial.content}
                </p>
                <p className="text-neutral-400 text-xs dark:text-neutral-500">
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

"use client";
import { useState, type ReactNode } from "react";
import {} from "#/src/ui/shadcn/dialog";
import {} from "#/src/ui/shadcn/scrollarea";
import { motion, AnimatePresence } from "motion/react";
import type { Snippet } from "#/src/app/(site)/snippets/lib/snippets.type";
import { SnippetCard } from "#/src/app/(site)/snippets/[category]/snippet-card";

export default function SnippetList({
  snippetsContentList,
}: {
  snippetsContentList: Snippet[];
}): ReactNode {
  const [selectedSubcategory, setSelectedSubcategory] = useState<string | null>(
    null,
  );

  // Filter out nulls and get unique subcategories
  const uniqueSubcategories = Array.from(
    new Set(
      snippetsContentList
        .filter(
          (snippet): snippet is Exclude<Snippet, null> => snippet !== null,
        )
        .map((snippet) => snippet.subcategory),
    ),
  );

  // Get filtered snippets based on selected subcategory
  const filteredSnippets = selectedSubcategory
    ? snippetsContentList.filter(
        (snippet) => snippet?.subcategory === selectedSubcategory,
      )
    : snippetsContentList;

  return (
    <div className="space-y-6">
      {/* Category Filter */}
      <div className="flex flex-wrap gap-2">
        <button
          type="button"
          className={`px-4 py-1 text-sm font-medium rounded-full transition-colors ${
            selectedSubcategory === null
              ? "bg-primary text-primary-foreground"
              : "bg-neutral-400/20 text-neutral-700 dark:text-neutral-300 hover:bg-neutral-400/40"
          }`}
          onClick={() => setSelectedSubcategory(null)}
        >
          All
        </button>
        {uniqueSubcategories.map((subCategory) => (
          <button
            key={subCategory}
            type="button"
            className={`px-4 py-1 text-sm font-medium rounded-full transition-colors ${
              selectedSubcategory === subCategory
                ? "bg-primary text-primary-foreground"
                : "bg-neutral-400/20 text-neutral-700 dark:text-neutral-300 hover:bg-neutral-400/40"
            }`}
            onClick={() => setSelectedSubcategory(subCategory)}
          >
            {subCategory}
          </button>
        ))}
      </div>

      {/* Snippets Grid */}
      {filteredSnippets.length === 0 ? (
        <div className="text-center py-10 text-neutral-400">
          No snippets found for the selected category.
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 pb-8 w-full">
          <AnimatePresence mode="popLayout">
            {filteredSnippets.map((snippet) => {
              if (!snippet?.compiledContent) {
                return null;
              }

              return (
                <motion.div
                  layout={true}
                  initial={{ opacity: 0, scale: 0.9, filter: "blur(10px)" }}
                  animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
                  exit={{ opacity: 0, scale: 1, filter: "blur(10px)" }}
                  //spring
                  transition={{
                    type: "spring",
                    stiffness: 300,
                    damping: 35,
                  }}
                  key={snippet.slug}
                  className="border border-neutral-200 dark:border-neutral-800 rounded-2xl"
                >
                  <SnippetCard {...snippet} />
                </motion.div>
              );
            })}
          </AnimatePresence>
        </div>
      )}
    </div>
  );
}

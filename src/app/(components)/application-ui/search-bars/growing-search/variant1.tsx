"use client";
import { SearchIcon } from "lucide-react";
import React, { useEffect, useState } from "react";
import { toast } from "sonner";
import { cn } from "#/src/utils/cn";

export default function GrowingSearchVariant1() {
  return (
    <div className="flex flex-col items-center">
      <p className="text-neutral-500/70 mb-8 tracking-tighter">
        Press enter to see all the effects
      </p>
      <SearchBar />
    </div>
  );
}

export const SearchBar = () => {
  const [searchSubmittedOutline, setSearchSubmittedOutline] = useState(false);
  const [searchSubmittedShadow, setSearchSubmittedShadow] = useState(false);
  const [searchValue, setSearchValue] = useState("");
  function handleSearch() {
    setSearchSubmittedOutline(true);
    setSearchSubmittedShadow(true);
    toast(`Searching for ${searchValue}`);
  }

  useEffect(() => {
    if (searchSubmittedOutline) {
      // Wait 3 sec
      setTimeout(() => {
        setSearchSubmittedOutline(false);
      }, 150);
    }
  }, [searchSubmittedOutline]);

  useEffect(() => {
    if (searchSubmittedShadow) {
      // Wait 3 sec
      setTimeout(() => {
        setSearchSubmittedShadow(false);
      }, 1000);
    }
  }, [searchSubmittedShadow]);

  return (
    <label
      className={cn(
        "rounded-full relative text-neutral-500 dark:text-neutral-400 origin-center inline-flex",
        "transition-all transform-gpu ease-in-out group",
        " relative",
        // searchSubmitted
        //   ? "scale-95 shadow-red-500/30 duration-100"
        //   : "scale-100 shadow-red-500/0",
        "before:content-[''] before:absolute before:w-full before:h-full before:top-0 before:left-0 before:rounded-full before:transition-all before:transform-gpu before:duration-700 before:ease-in-out",
        searchSubmittedShadow
          ? "before:shadow-[0px_0px_0px_5px_blue] before:blur-2xl"
          : "before:shadow-[0px_0px_1px_0px_#FFFFFF00] before:blur-0",
        searchSubmittedOutline
          ? "scale-90 duration-75"
          : "duration-300 hover:scale-105",
      )}
      htmlFor="search"
    >
      <input
        id="search"
        value={searchValue}
        onChange={(e) => setSearchValue(e.target.value)}
        className={cn(
          "p-2 focus:max-w-40 max-w-10 transition-all transform-gpu ease-in-out rounded-full pl-10 peer",
          // BACKGROUND
          "bg-white/70 dark:bg-neutral-800/70 dark:hover:bg-neutral-900/80 hover:bg-white/80",
          // OUTLINE
          "outline outline-1 -outline-offset-1",
          searchSubmittedOutline
            ? "duration-150 outline-blue-500"
            : "duration-300 outline-neutral-200/0 hover:outline-neutral-200/100 dark:outline-neutral-800/0 hover:dark:outline-neutral-800/100 dark:focus:placeholder-neutral-300/100",
          // PLACEHOLDER
          " placeholder-neutral-300/0 focus:placeholder-neutral-300/100 dark:placeholder-neutral-700/0 focus:dark:placeholder-neutral-700/100",
        )}
        placeholder="Search"
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            handleSearch();
          }
        }}
        onSubmit={handleSearch}
        onBlur={() => {
          setSearchSubmittedOutline(false);
          setSearchSubmittedShadow(false);
          setSearchValue("");
        }}
        type="search"
      />
      <SearchIcon className="size-5 top-1/2 left-3.5 absolute -translate-y-1/2 pointer-events-none text-neutral-300 dark:text-neutral-700 transition-colors peer-focus:text-neutral-500" />
    </label>
  );
};

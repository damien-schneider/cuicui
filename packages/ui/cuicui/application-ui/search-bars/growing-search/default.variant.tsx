"use client";
import { SearchIcon } from "lucide-react";
import { useEffect, useState } from "react";
import { toast } from "sonner";
import { cn } from "@/cuicui/utils/cn";

export default function GrowingSearchVariant1() {
  return (
    <div className="flex flex-col items-center">
      <p className="mb-8 text-neutral-500/70 tracking-tighter">
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
        "relative inline-flex origin-center rounded-full text-neutral-500 dark:text-neutral-400",
        "group transform-gpu transition-all ease-in-out",
        " relative",
        // searchSubmitted
        //   ? "scale-95 shadow-red-500/30 duration-100"
        //   : "scale-100 shadow-red-500/0",
        "before:absolute before:top-0 before:left-0 before:h-full before:w-full before:transform-gpu before:rounded-full before:transition-all before:duration-700 before:ease-in-out before:content-['']",
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
        className={cn(
          "peer max-w-10 transform-gpu rounded-full p-2 pl-10 transition-all ease-in-out focus:max-w-40",
          // BACKGROUND
          "bg-white/70 hover:bg-white/80 dark:bg-neutral-800/70 dark:hover:bg-neutral-900/80",
          // OUTLINE
          "-outline-offset-1 outline outline-1",
          searchSubmittedOutline
            ? "outline-blue-500 duration-150"
            : "outline-neutral-200/0 duration-300 hover:outline-neutral-200/100 dark:outline-neutral-800/0 dark:focus:placeholder-neutral-300/100 hover:dark:outline-neutral-800/100",
          // PLACEHOLDER
          " placeholder-neutral-300/0 focus:placeholder-neutral-300/100 dark:placeholder-neutral-700/0 focus:dark:placeholder-neutral-700/100",
        )}
        id="search"
        onBlur={() => {
          setSearchSubmittedOutline(false);
          setSearchSubmittedShadow(false);
          setSearchValue("");
        }}
        onChange={(e) => setSearchValue(e.target.value)}
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            handleSearch();
          }
        }}
        onSubmit={handleSearch}
        placeholder="Search"
        type="search"
        value={searchValue}
      />
      <SearchIcon className="-translate-y-1/2 pointer-events-none absolute top-1/2 left-3.5 size-5 text-neutral-300 transition-colors peer-focus:text-neutral-500 dark:text-neutral-700" />
    </label>
  );
};

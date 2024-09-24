import { GithubIcon } from "lucide-react";
import Link from "next/link";
import { CUICUI_GITHUB_URL } from "../lib/site.const";
import GradientContainer from "./gradient-container";

export default function StarGithubProjectButton() {
  return (
    <Link href={CUICUI_GITHUB_URL}>
      <GradientContainer
        classNameChild="group-hover:opacity-80 transition-opacity duration-150 ease-in-out px-4 py-2 flex gap-2 items-center text-sm text-neutral-500 font-medium"
        classNameParent="group"
        rounded="sm"
      >
        <GithubIcon className="size-5 fill-neutral-300 stroke-neutral-400 dark:fill-neutral-600 dark:stroke-neutral-500" />
        Star this project on GitHub
      </GradientContainer>
    </Link>
  );
}

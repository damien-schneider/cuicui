export const dynamic = "force-static";
import { GithubIcon, StarIcon } from "lucide-react";
import Link from "next/link";
import { CUICUI_GITHUB_URL } from "../lib/site.const";
import GradientContainer from "./gradient-container";
import { GithubAnimatedStarNumber } from "#/src/ui/github-animated-star-number";

export default async function StarGithubProjectButton({
  className,
}: Readonly<{ className?: string }>) {
  return (
    <Link href={CUICUI_GITHUB_URL}>
      <GradientContainer
        classNameChild="group-hover:opacity-80 transition-opacity duration-150 ease-in-out px-4 py-2 flex gap-2 items-center justify-between text-sm text-neutral-500 font-medium"
        classNameParent="group"
        rounded="sm"
      >
        <GithubIcon className="size-5 fill-neutral-300 stroke-neutral-400 dark:fill-neutral-600 dark:stroke-neutral-500" />
        Star this project on GitHub
        {await getGithubStarCountComponent()}
      </GradientContainer>
    </Link>
  );
}

const getGithubStarCountComponent = async () => {
  const apiGithub = "https://api.github.com/repos/damien-schneider/cuicui";

  try {
    const githubRepoData = await fetch(apiGithub).then((res) => res.json());
    const numberOfStars = githubRepoData.stargazers_count;
    return (
      <div className="flex items-center gap-0.5">
        <StarIcon className="size-4 fill-neutral-300 stroke-neutral-400 dark:fill-neutral-600 dark:stroke-neutral-500" />
        <GithubAnimatedStarNumber value={numberOfStars} />
      </div>
    );
  } catch (error) {
    console.error(error);
    return null;
  }
};

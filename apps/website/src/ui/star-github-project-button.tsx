export const dynamic = "force-static";

import { CUICUI_GITHUB_URL } from "../lib/site.const";

import { GithubStarsButton } from "@/cuicui/common-ui/buttons/github-stars/component.github-stars";

export default async function StarCuicuiGithubButton() {
  const apiGithub = "https://api.github.com/repos/damien-schneider/cuicui";

  const githubRepoData = await fetch(apiGithub).then((res) => res.json());
  const numberOfStars = githubRepoData.stargazers_count;

  return (
    <GithubStarsButton
      className="inline-flex w-full h-fit"
      href={CUICUI_GITHUB_URL}
      title="Star Cuicui on GitHub"
      starNumber={numberOfStars ?? 0}
    >
      Star Cuicui on GitHub
    </GithubStarsButton>
  );
}

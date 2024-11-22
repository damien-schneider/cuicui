import { format, formatDistanceToNow, parseISO } from "date-fns";

import { compileMDX, type CompileMDXResult } from "next-mdx-remote/rsc";
import { promises as fs } from "node:fs";
import path from "node:path";

interface Frontmatter {
  title: string;
}

export default async function ProjectPage() {
  const filenames = await fs.readdir(
    path.join(process.cwd(), "src/changelogs"),
  );

  // const rangeOfAllDays = eachDayOfInterval({
  // 	start: new Date(2024, 10, 1), // 1st November 2024 (no changelogs before that)
  // 	end: new Date(), // Today
  // });

  const contentMap: { date: Date; content: string }[] = [];

  for (const file of filenames) {
    const isoDate = parseISO(file.replace(/\.mdx$/, ""));
    // const IsoDate = formatISO(date, { representation: "date" });

    const filePath = path.join(process.cwd(), `src/changelogs/${file}`);
    try {
      const content = await fs.readFile(filePath, "utf-8");
      contentMap.push({ date: isoDate, content });
    } catch (error) {
      // @ts-ignore
      if (error.code === "ENOENT") {
        console.error(`No changelog found for ${file}`);
        // Continue without throwing the error
      } else {
        // For other errors, you might still want to handle them
        console.error(`Error reading file ${filePath}:`, error);
        throw error; // Re-throw if it's a different kind of error
      }
    }
  }

  const finalContentMap: { data: CompileMDXResult<Frontmatter>; date: Date }[] =
    [];

  for (const content of contentMap) {
    const data = await compileMDX<Frontmatter>({
      source: content,
      options: {
        parseFrontmatter: true,
      },
      components: {
        // Your Components here
      },
    });
    finalContentMap.push({ data, date: content.date });
  }

  const changelogs = await Promise.all(
    filenames.map(async (filename) => {
      const content = await fs.readFile(
        path.join(process.cwd(), "src/changelogs", filename),
        "utf-8",
      );
      const { frontmatter, content: contentMDX } =
        await compileMDX<Frontmatter>({
          source: content,
          options: {
            parseFrontmatter: true,
          },
        });
      return {
        filename,
        filenameWithoutExtension: filename.replace(".mdx", ""),
        content: contentMDX,
        date: parseISO(filename.replace(".mdx", "")),
        ...frontmatter,
      };
    }),
  );

  const sortedChangelogs = changelogs.sort(
    (a, b) => b.date.getTime() - a.date.getTime(),
  );

  return (
    <div className="cuicui-default-style">
      <h1>Changelog</h1>
      <section className="space-y-20 m-4">
        {sortedChangelogs.map(({ content, date, title }, index) => {
          return (
            <article
              key={date.toISOString()}
              className="[&_ul]:text-neutral-600 [&_ul]:dark:text-neutral-400"
            >
              <h5 className="m-0 inline">{format(date, "do MMMM yyyy")}</h5>
              {index === 0 && (
                <p className="border inline ml-4 rounded-full border-neutral-200 dark:border-neutral-800 text-xs px-2 py-0.5">
                  Latest Release
                </p>
              )}
              <p className="text-neutral-500 tracking-tight text-sm">
                {formatDistanceToNow(date, { addSuffix: true })}
              </p>
              <span className=" bg-neutral-400/30 w-full h-px inline-flex m-0" />
              <h4 className="text-2xl">{title}</h4>
              {content}
            </article>
          );
        })}
      </section>
    </div>
  );
}

import { parseISO } from "date-fns";
import { promises as fs } from "node:fs";
import path from "node:path";

export async function getLatestChangelogDate() {
  const filenames = await fs.readdir(
    path.join(process.cwd(), "src/changelogs"),
  );

  let latestDate = new Date(0);

  for (const file of filenames) {
    const filenameWithoutExtension = file.replace(/\.mdx$/, "");
    const isoDate = parseISO(filenameWithoutExtension);
    if (isoDate > latestDate) {
      latestDate = isoDate;
    }
  }

  return latestDate;
}

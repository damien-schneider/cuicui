import fs from "node:fs";
import path from "node:path";

const rootDir = "."; // Adjust this if your script is not in the root directory

const sections = fs.readdirSync(rootDir).filter((f) => {
  const sectionPath = path.join(rootDir, f);
  return fs.statSync(sectionPath).isDirectory() && !f.startsWith(".");
});

let imports = "";
let objectEntries = "";

for (const section of sections) {
  const sectionPath = path.join(rootDir, section);
  const categories = fs.readdirSync(sectionPath).filter((f) => {
    const categoryPath = path.join(sectionPath, f);
    return fs.statSync(categoryPath).isDirectory() && !f.startsWith(".");
  });

  for (const category of categories) {
    const categoryPath = path.join(sectionPath, category);
    const previewFilePath = path.join(categoryPath, "preview.tsx");

    if (fs.existsSync(previewFilePath)) {
      const importName = `${section}_${category}_preview`.replace(/[-]/g, "_");
      const relativePath = `./${path.relative(rootDir, previewFilePath).replace(/\\/g, "/")}`;

      imports += `import ${importName} from '${relativePath}';\n`;
      objectEntries += `  '${category}': ${importName},\n`;
    }
  }
}

const output = `${imports}

const previews = {
${objectEntries}
};

export default previews;
`;

fs.writeFileSync("previews.ts", output);

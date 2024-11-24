import { useState } from "react";
import TextInput from "ink-text-input";
import { Text } from "ink";
import fs from "node:fs";
import path from "node:path";

const CreateCategory = () => {
  const [categoryName, setCategoryName] = useState<string>("");
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);

  const handleSubmit = (name: string) => {
    setCategoryName(name);
    setIsSubmitted(true);

    // Define the path for the new category
    const categoryPath = path.join(
      process.cwd(),
      "cuicui",
      "application-ui", // Adjust as needed
      name,
    );

    // Create the category directory
    if (!fs.existsSync(categoryPath)) {
      fs.mkdirSync(categoryPath, { recursive: true });
    }

    // Read the template and populate it
    const templatePath = path.join(
      __dirname,
      "..",
      "..",
      "templates",
      "category.template.tsx",
    );
    const categoryTemplate = fs.readFileSync(templatePath, "utf-8");
    const populatedTemplate = categoryTemplate.replace(
      /__CATEGORY_NAME__/g,
      name,
    );

    // Write the populated template to the category file
    fs.writeFileSync(
      path.join(categoryPath, `${name}.category.tsx`),
      populatedTemplate,
    );
  };

  if (isSubmitted) {
    return (
      <Text>Category "{categoryName}" has been created successfully.</Text>
    );
  }

  return (
    <>
      <Text>Enter the name of the new category:</Text>
      <TextInput
        value={categoryName}
        onChange={setCategoryName}
        onSubmit={handleSubmit}
      />
    </>
  );
};

export default CreateCategory;

import { useState, useEffect } from "react";
import SelectInput from "ink-select-input";
import TextInput from "ink-text-input";
import { Text } from "ink";
import fs from "node:fs";
import path from "node:path";

const CreateComponent = () => {
  const [step, setStep] = useState<string>("chooseCategoryOption");
  const [categories, setCategories] = useState<string[]>([]);
  const [categoryName, setCategoryName] = useState<string>("");
  const [componentName, setComponentName] = useState<string>("");
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);

  useEffect(() => {
    // Read existing categories
    const categoriesPath = path.join(process.cwd(), "packages/ui/application-ui"); // Adjust as needed
    if (fs.existsSync(categoriesPath)) {
      const dirs = fs
        .readdirSync(categoriesPath, { withFileTypes: true })
        .filter((dirent) => dirent.isDirectory())
        .map((dirent) => dirent.name);
      setCategories(dirs);
    }
  }, []);

  const handleCategoryOptionSelect = (item: {
    label: string;
    value: string;
  }) => {
    setStep(item.value);
  };

  const handleCategorySelect = (item: { label: string; value: string }) => {
    setCategoryName(item.value);
    setStep("enterComponentName");
  };

  const handleCategoryNameSubmit = (name: string) => {
    setCategoryName(name);
    setStep("enterComponentName");
  };

  const handleComponentNameSubmit = (name: string) => {
    setComponentName(name);
    setIsSubmitted(true);

    // Create component directory
    const componentPath = path.join(
      process.cwd(),
      "cuicui",
      "application-ui",
      categoryName,
      name,
    );
    if (!fs.existsSync(componentPath)) {
      fs.mkdirSync(componentPath, { recursive: true });
    }

    // Read and populate the component template
    const templatePath = path.join(
      __dirname,
      "..",
      "..",
      "templates",
      "component.template.tsx",
    );
    const componentTemplate = fs.readFileSync(templatePath, "utf-8");
    const populatedTemplate = componentTemplate.replace(
      /__COMPONENT_NAME__/g,
      name,
    );

    // Write the component file
    fs.writeFileSync(
      path.join(componentPath, `${name}.tsx`),
      populatedTemplate,
    );

    // Update the category file
    updateCategoryFile(categoryName, name);
  };

  const updateCategoryFile = (category: string, component: string) => {
    const categoryFilePath = path.join(
      process.cwd(),
      "cuicui",
      "application-ui",
      category,
      `${category}.category.tsx`,
    );

    if (fs.existsSync(categoryFilePath)) {
      let content = fs.readFileSync(categoryFilePath, "utf-8");

      // Insert import statement
      const importStatement = `import ${component} from "./${component}/${component}";\n`;
      content = importStatement + content;

      // Insert component entry into the componentList
      const componentEntry = `
        {
          isIframed: true,
          sizePreview: "sm",
          slug: "${component}",
          variantList: [
            {
              name: "Default",
              component: <${component} />,
              slugPreviewFile: "${component}",
            },
          ],
          name: "${component}",
          description: "A description for ${component}.",
        },
      `;

      // Use regex to find the componentList array and insert the new component
      content = content.replace(/(componentList:\s*\[)/, `$1${componentEntry}`);

      fs.writeFileSync(categoryFilePath, content);
    } else {
      console.error(`Category file not found: ${categoryFilePath}`);
    }
  };

  if (isSubmitted) {
    return (
      <Text>
        Component "{componentName}" has been created under category "
        {categoryName}" successfully.
      </Text>
    );
  }

  if (step === "chooseCategoryOption") {
    const items = [
      { label: "Select an existing category", value: "selectExistingCategory" },
      { label: "Create a new category", value: "createNewCategory" },
    ];

    return <SelectInput items={items} onSelect={handleCategoryOptionSelect} />;
  }

  if (step === "selectExistingCategory") {
    const items = categories.map((cat) => ({ label: cat, value: cat }));

    return <SelectInput items={items} onSelect={handleCategorySelect} />;
  }

  if (step === "createNewCategory") {
    return (
      <>
        <Text>Enter the name of the new category:</Text>
        <TextInput
          value={categoryName}
          onChange={setCategoryName}
          onSubmit={handleCategoryNameSubmit}
        />
      </>
    );
  }

  if (step === "enterComponentName") {
    return (
      <>
        <Text>Enter the name of the new component:</Text>
        <TextInput
          value={componentName}
          onChange={setComponentName}
          onSubmit={handleComponentNameSubmit}
        />
      </>
    );
  }

  return null;
};

export default CreateComponent;

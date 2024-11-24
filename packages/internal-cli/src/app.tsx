import { useState } from "react";
import SelectInput from "ink-select-input";
import CreateCategory from "./create-category.js";
import CreateComponent from "./create-component.js";

const App = () => {
  const [step, setStep] = useState<string>("initial");

  const handleSelect = (item: { label: string; value: string }) => {
    setStep(item.value);
  };

  if (step === "initial") {
    const items = [
      { label: "Create a new Category", value: "createCategory" },
      { label: "Create a new Component", value: "createComponent" },
    ];

    return <SelectInput items={items} onSelect={handleSelect} />;
  }

  if (step === "createCategory") {
    return <CreateCategory />;
  }

  if (step === "createComponent") {
    return <CreateComponent />;
  }

  return null;
};

export default App;

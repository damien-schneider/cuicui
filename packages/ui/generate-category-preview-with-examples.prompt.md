Generate a React component with TypeScript that displays a minimalist preview for a component category.
This is for the “previews” of categories in a component library.

- You should minimize the use of texts
- You should use self-closing divs
- You should not use dark: for dark mode, instead use middle transparent colors such as "bg-neutral-500/20 bg-neutral-400/90", ...
- Use the neutral tailwind color palette
- The component must use Tailwind CSS for a clean, simple, and modern design.
- You can use the lucid-react library

The code component should have this structure, without name :
export default function NameCategoryPreview () {
  return (

  )
}

Here are some example you should inspire yourself from :


For the search bar category :

```ts
import { SearchIcon } from "lucide-react";

export default function SearchBarCategoryPreview() {
  return (
    <>
      <div className="w-3/4 p-4 bg-neutral-400/15 rounded-xl  flex items-center space-x-4">
        {/* Search Icon */}
        <SearchIcon className="size-6 text-neutral-400/80" />

        {/* Cursor */}
        <div className="bg-neutral-400/80 h-5 rounded-full w-1" />
      </div>
    </>
  );
}
```

For the Notification category :

```ts
export default function NotificationCategoryPreview() {
  return (
    <div className="w-32 relative p-4 bg-neutral-400/15 rounded-xl h-8 space-y-4 rounded-tl-none">
      {/* Notification 1 */}
      <div className="absolute -top-2 -left-2 size-3 bg-neutral-400/80 rounded-full">
        <div className="w-full h-full bg-neutral-400/80 rounded-full animate-ping" />
      </div>
    </div>
  );
}
```


For the Checkboxes Category :

```ts
export default function CheckboxesCategoryPreview() {
  return (
    <div className="w-fit flex space-x-4 p-4 bg-neutral-400/15 rounded-xl">
      {/* Unchecked Checkbox */}
      <div className="size-6 border-2 border-neutral-500/80 rounded" />

      {/* Checked Checkbox */}
      <div className="size-6 border-2 border-neutral-500/80 rounded flex items-center justify-center">
        <div className="w-3 h-3 bg-neutral-400/80 rounded" />
      </div>

      {/* Indeterminate Checkbox */}
      <div className="size-6 border-2 border-neutral-500/80 rounded flex items-center justify-center">
        <div className="w-4 h-1 bg-neutral-400/80 rounded" />
      </div>
    </div>
  );
}
```

For the static Stepper category :
```ts
import { ChevronRight } from "lucide-react";

export default function StaticStepperPreview() {
  return (
    <div className="w-fit flex items-center space-x-4 p-4 bg-neutral-400/15 rounded-xl">
      {/* Step 1 (Completed) */}
      <div className="size-6 rounded-full bg-neutral-400/60 inline-flex items-center justify-center text-xs text-white">
        1
      </div>

      {/* Step Divider */}
      <ChevronRight className="size-5 text-neutral-400/80" />

      {/* Step 2 (Current) */}
      <div className="size-6 border-2 border-neutral-500/80 rounded-full inline-flex items-center justify-center text-xs">
        2
      </div>

      {/* Step Divider */}
      <ChevronRight className="size-5 text-neutral-400/40" />

      {/* Step 3 (Upcoming) */}
      <div className="size-6 border-2 border-neutral-500/40 rounded-full text-neutral-500/40 inline-flex items-center justify-center text-xs">
        3
      </div>
    </div>
  );
}
```

For the theme category :

```ts
import { Moon, Sun } from "lucide-react";

export default function ThemeCategoryPreview() {
  return (
    <div className="w-fit flex items-center space-x-4 p-4 bg-neutral-400/15 rounded-xl">
      {/* Light Theme Icon */}
      <div className="size-6 p-1 rounded-full bg-neutral-400/40 inline-flex items-center justify-center">
        <Sun className="size-5 text-neutral-400" />
      </div>

      {/* Divider */}
      <div className="w-4 h-0.5 bg-neutral-400/60 rounded" />

      {/* Dark Theme Icon */}
      <div className="size-6 p-1 rounded-full bg-neutral-700 dark:bg-neutral-300 inline-flex items-center justify-center">
        <Moon className="size-5 text-neutral-200 dark:text-neutral-700" />
      </div>
    </div>
  );
}
```

For the "Slider" category :

```ts
export default function SliderCategoryPreview() {
  return (
    <div className="w-fit p-4 bg-neutral-400/15 rounded-xl">
      {/* Slider Track */}
      <div className="relative w-48 h-2 bg-neutral-400/40 rounded-full">
        {/* Slider Filled Track */}
        <div className="absolute left-0 top-0 h-full w-1/2 bg-neutral-400/80 rounded-full" />
        {/* Slider Thumb */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-4 h-4 bg-neutral-400 rounded-full" />
      </div>
    </div>
  );
}
```

For the "Dropdown Menu" category :

```ts
import { ChevronDown } from "lucide-react";

export default function DropdownMenuCategoryPreview() {
  return (
    <div className="relative w-40 p-4 bg-neutral-400/15 rounded-xl">
      {/* Dropdown Button */}
      <div className="w-full flex gap-2 items-center justify-between px-3 py-2 bg-neutral-400/50 rounded">
        {/* Placeholder for Selected Item */}
        <div className="bg-neutral-400 h-4 rounded-full w-full" />
        {/* Chevron Icon */}
        <ChevronDown className="size-6 text-neutral-600 dark:text-neutral-300" />
      </div>
    </div>
  );
}
```

Now you should create the preview.tsx for each of the following categories :

- 
Generate a React component with TypeScript that displays a minimalist preview for a component category.
This is for the “previews” of categories in a component library.

Main rules:

	1.	The component must use Tailwind CSS for a clean, simple, and modern design.
	2.	The content of the component should reflect the nature of the category.
	3.	The component, in its minimalist design, should not contain any text—only divs of certain sizes.
  4.  The total height should be heigher than h-32 and the width shouldn't be higher than be 220px.
	5.	The empty div should be self closing like this : <div />
  6.  if the parent have a backgound it should have rounded-xl class
  7.  The parent div can have either w-full or w-fit class

Colors Rules:
  1.	Use the neutral tailwind color palette
  2.	Don't use dark: for dark mode, instead use middle transparent colors such as "bg-neutral-500/20 bg-neutral-400/90", ...
  3.	If the parent div have a background color, it should be "bg-neutral-400/15"
  4.  Content and borders should be mainly "bg-neutral-400/40" but can be higher or lower transparency.


The code component should have this structure, without name :
export default function () {
  return (

  )
}



Here are some example:

For the category Checkboxes :

```typescript
export default function () {
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

For the category Cards :
```typescript
export default function () {
  return (
    <>
      <div className="size-full p-4 bg-neutral-400/15 rounded-xl">
        <div className="w-3/4 h-1/3 bg-neutral-400/40 rounded-lg mb-4" />
        <div className="w-1/2 h-1/6 bg-neutral-400/40 rounded-lg mb-2" />
        <div className="w-full h-1/6 bg-neutral-400/40 rounded-lg mb-2" />
      </div>
      <div className="size-full p-4 bg-neutral-400/15 rounded-xl">
        <div className="w-3/4 h-1/3 bg-neutral-400/40 rounded-lg mb-4" />
        <div className="w-1/2 h-1/6 bg-neutral-400/40 rounded-lg mb-2" />
        <div className="w-full h-1/6 bg-neutral-400/40 rounded-lg mb-2" />
      </div>
    </>
  );
}
```

For the category Blockquotes :
```typescript
export default function () {
  return (
    <div className="w-60 h-20 flex space-x-4 p-4 bg-neutral-400/15 rounded-xl">
      {/* Vertical bar */}
      <div className="w-1 h-full bg-neutral-400/40 rounded" />

      {/* Content lines */}
      <div className="flex flex-col w-full space-y-2">
        <div className="w-3/4 h-full bg-neutral-400/40 rounded" />
        <div className="w-5/6 h-full bg-neutral-400/40 rounded" />
        <div className="w-2/3 h-full bg-neutral-400/40 rounded" />
      </div>
    </div>
  );
}

```

For the category Badges :
```typescript
export default function () {
  return (
    <div className="w-fit p-4 bg-neutral-400/15 rounded-xl min-h-32 flex flex-wrap gap-2">
      {/* Badge 1 */}
      <div className="h-6 w-20 bg-neutral-400/40 rounded-full" />

      {/* Badge 2 */}
      <div className="h-6 w-24 bg-neutral-400/40 rounded-full" />

      {/* Badge 3 */}
      <div className="h-6 w-16 bg-neutral-400/40 rounded-full" />

      {/* Badge 4 */}
      <div className="h-6 w-28 bg-neutral-400/40 rounded-full" />

      {/* Badge 5 */}
      <div className="h-6 w-22 bg-neutral-400/40 rounded-full" />

      {/* Badge 6 */}
      <div className="h-6 w-18 bg-neutral-400/40 rounded-full" />
    </div>
  );
}
```

Objective:

Generate a minimalist component for the following category: “Badges category”
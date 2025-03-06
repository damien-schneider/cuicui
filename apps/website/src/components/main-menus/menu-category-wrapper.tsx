import type { ReactNode } from "react";

export default function MenuCategoryList({
  title,
  description,
  children,
}: Readonly<{
  children: ReactNode;
  title: string;
  description: string;
}>) {
  return (
    <>
      <h1 className="header-1">{title} category</h1>
      <p className="caption-md">{description}</p>
      <div className="space-y-5 w-full">
        <h2 className="uppercase-title">{title}</h2>

        <div className="grid grid-cols-1 gap-5 lg:grid-cols-2 pb-20">
          {children}
        </div>
      </div>
    </>
  );
}

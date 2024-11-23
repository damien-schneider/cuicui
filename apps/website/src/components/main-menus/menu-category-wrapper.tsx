import type { ReactNode } from "react";

export default function MenuSectionWrapper({
  name,
  children,
}: Readonly<{ name: string; children: ReactNode }>) {
  return (
    <div className="space-y-5" key={name}>
      <h2 className="uppercase-title">{name}</h2>

      <div className="grid grid-cols-1 gap-5 lg:grid-cols-2 pb-20">
        {children}
      </div>
    </div>
  );
}

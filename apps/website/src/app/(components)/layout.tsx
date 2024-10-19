import type React from "react";

export default function ComponentsLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return <div className="space-y-10">{children}</div>;
}

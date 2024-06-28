"use client";
import type React from "react";

export default function ClientProvider({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return <>{children}</>;
}

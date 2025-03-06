"use client";
import type { ReactNode } from "react";
import { createPortal } from "react-dom";
import { useEffect, useState } from "react";

const Portal = ({
  children,
  containerId = "portal-root",
}: {
  children: ReactNode;
  containerId?: string;
}) => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    return () => setMounted(false);
  }, []);

  if (!mounted) {
    return null;
  }

  const container = document.getElementById(containerId);
  return container ? createPortal(children, container) : null;
};

export default Portal;

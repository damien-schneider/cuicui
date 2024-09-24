import type { JSX } from "react";

export type PackageToInstallType = {
  find: string[];
  packageName: string;
};

export type StepToInstallType = {
  idSlug: string;
  title: string;
  find: string[];
  installProcess: JSX.Element;
};

"use client";
import { create } from "zustand";

export const PackageManagerList = ["npm", "yarn", "pnpm"] as const;
export type PackageManagerType = (typeof PackageManagerList)[number];

export type PackageManagerStore = {
  packageManager: PackageManagerType;
  setPackageManager: (selectedPackageManager: PackageManagerType) => void;
};

export const usePackageManager = create<PackageManagerStore>((set) => ({
  packageManager: getLocalStoragePackageManager(),
  setPackageManager: (selectedPackageManager) => {
    localStorage.setItem("selectedPackageManager", selectedPackageManager);
    set(() => ({ packageManager: selectedPackageManager }));
  },
}));

function getLocalStoragePackageManager() {
  const selectedPackageManager = localStorage.getItem(
    "selectedPackageManager",
  ) as PackageManagerType;
  if (selectedPackageManager) {
    return selectedPackageManager;
  }
  return "npm";
}

export function getCodeByPackageManager(packageManager: PackageManagerType) {
  switch (packageManager) {
    case "npm":
      return "npm install";
    case "yarn":
      return "yarn add";
    case "pnpm":
      return "pnpm add";
  }
}

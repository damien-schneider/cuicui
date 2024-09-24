export type PackageToInstallType = {
  idSlug: string;
  title: string;
  find: string[];
  packageName: string;
};

export type StepToInstallType = {
  idSlug: string;
  title: string;
  find: string[];
  installProcess: JSX.Element;
};

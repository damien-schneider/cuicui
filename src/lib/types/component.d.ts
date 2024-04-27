export type VariantComponent = {
  slug: `variant${number}`;
  name: string;
  component: () => React.JSX.Element;
  code: string;
};

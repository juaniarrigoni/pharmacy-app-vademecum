export type ProductData = {
  name: string;
  formula: string;
};

export type CategoryData = {
  name: string;
  products: Array<ProductData>;
};

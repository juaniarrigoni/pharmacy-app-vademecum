export type ProductData = {
  nombre: string;
  formula: string;
  presentacion: string;
  descripcion: string;
  modoDeUso: string;
  precio: string;
};

export type CategoryData = {
  name: string;
  products: Array<ProductData>;
};

export type ReducerAction = {
  type: string;
  payload: ProductData;
};

export type State = Array<ProductData>;

export type Dispatch = {
  type: string;
  payload: ProductData;
};

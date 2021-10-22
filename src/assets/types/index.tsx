export type ProductData = {
  id?: string;
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

export type ActivoData = {
  nombre: string;
  link?: string;
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

export type ShortenUrlData = {
  loading: boolean;
  error: boolean;
  link: string;
};

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

// Import styled components
import { ProductFound, NotFound } from "./styled";

// Import assets
import type { ProductData } from "assets/types";

const Products: React.FC<{
  products: Array<ProductData>;
  search: string;
  openModal: (event: React.SyntheticEvent<HTMLElement>, open: boolean) => void;
  handleResult: (argument: null | number) => void;
}> = ({ products, search, openModal, handleResult }) => {
  let productList: Array<JSX.Element | undefined> = products
    .filter(({ nombre }) => nombre.toLowerCase().includes(search.toLowerCase()))
    .map(
      ({ nombre, formula, presentacion, descripcion, modoDeUso, precio }) => {
        return (
          <ProductFound
            key={nombre}
            onClick={(event: React.SyntheticEvent<HTMLElement>) =>
              openModal(event, true)
            }
            data-nombre={nombre}
            data-formula={formula}
            data-presentacion={presentacion}
            data-descripcion={descripcion}
            data-mododeuso={modoDeUso}
            data-precio={precio}
          >
            {nombre}
          </ProductFound>
        );
      }
    );

  if (search !== "") {
    if (productList.length === 0) {
      handleResult(null);
      productList = [<NotFound key="not-found">No hay resultados</NotFound>];
    } else handleResult(productList.length);
  }

  return <div id="Products">{productList}</div>;
};

export default Products;

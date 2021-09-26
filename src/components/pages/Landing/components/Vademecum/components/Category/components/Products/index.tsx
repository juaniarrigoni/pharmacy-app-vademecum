// Import dependencies
import type { FC } from "react";

// Import styled components
import { ProductFound, NotFound } from "./styled";

// Import assets
import type { ProductData } from "assets/types";

const Products: FC<{
  products: Array<ProductData>;
  search: string;
  openModal: (event: React.SyntheticEvent<HTMLElement>, open: boolean) => void;
  handleResult: (argument: null | number) => void;
}> = ({ products, search, openModal, handleResult }) => {
  let productList: Array<JSX.Element | undefined> = products
    .filter(({ name }) => name.toLowerCase().includes(search.toLowerCase()))
    .map(({ name, formula }) => {
      return (
        <ProductFound
          key={name}
          onClick={(event: React.SyntheticEvent<HTMLElement>) =>
            openModal(event, true)
          }
          data-name={name}
          data-formula={formula}
        >
          {name}
        </ProductFound>
      );
    });

  if (search !== "") {
    if (productList.length === 0) {
      handleResult(null);
      productList = [<NotFound key="not-found">No hay resultados</NotFound>];
    } else handleResult(productList.length);
  }

  return <div id="Products">{productList}</div>;
};

export default Products;

// Import dependencies
import type { FC } from "react";

// Import styled components
import { ProductFound, NotFound } from "./styled";

// Import assets
import type { SpreadsheetDataProducts } from "assets/types";

const Products: FC<{
  data: Array<SpreadsheetDataProducts>;
  search: string;
  openModal: (event: React.SyntheticEvent<HTMLElement>, open: boolean) => void;
  handleResult: (argument: null | number) => void;
}> = ({ data, search, openModal, handleResult }) => {
  const productList: Array<JSX.Element> = [];

  data.forEach((product) => {
    const name = product.gsx$nombre.$t;
    const formula = product.gsx$formula.$t;
    if (!name.toLowerCase().includes(search.toLowerCase())) return;
    productList.push(
      <ProductFound
        key={product.gsx$nombre.$t}
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

  if (productList.length === 0) {
    if (search !== "") {
      handleResult(null);
    }
    return (
      <div id="Products">
        <NotFound>No hay resultados</NotFound>
      </div>
    );
  }

  if (search !== "") {
    handleResult(productList.length);
  }

  return <div id="Products">{productList}</div>;
};

export default Products;

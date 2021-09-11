// Import dependencies
import type { FC } from "react";

// Import styled components
import { ProductFound, NotFound } from "./styled";

const Product: FC<{
  data: any[];
  search: string;
  openModal: Function;
  handleResult: Function;
}> = ({ data, search, openModal, handleResult }) => {
  let productList: JSX.Element[] = [];

  data.forEach((product, idx) => {
    let name = product.gsx$nombre.$t;
    let formula = product.gsx$formula.$t;
    if (name.toLowerCase().indexOf(search.toLowerCase()) === -1) return;
    productList.push(
      <ProductFound
        key={idx}
        onClick={(e) => openModal(e, true)}
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
  } else {
    if (search !== "") {
      handleResult(productList.length);
    }
    return <div id="Products">{productList}</div>;
  }
};

export default Product;

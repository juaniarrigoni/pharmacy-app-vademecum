import type { FC } from "react";

import style from "./style.module.css";

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
      <p
        key={idx}
        onClick={(e) => openModal(e, true)}
        data-name={name}
        data-formula={formula}
        className={style.Products__Product}
      >
        {name}
      </p>
    );
  });
  if (productList.length === 0) {
    if (search !== "") {
      handleResult(null);
    }
    return (
      <div id="Products" className={style.Products}>
        <p className={style.Products__NotFound}>No hay resultados</p>
      </div>
    );
  } else {
    if (search !== "") {
      handleResult(productList.length);
    }
    return (
      <div id="Products" className={style.Products}>
        {productList}
      </div>
    );
  }
};

export default Product;

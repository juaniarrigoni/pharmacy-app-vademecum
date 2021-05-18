import { FC, useState } from "react";

import Result from "./Category/Result";
import Product from "./Category/Product";

import style from "./styles/Category.module.css";

const Category: FC<{
  category: string;
  data: any[];
  openModal: Function;
  search: string;
}> = ({ category, data, openModal, search }) => {
  const [result, setResult] = useState(null);

  const handleToggle = (e) => {
    document
      .getElementById(e.currentTarget.parentNode.id)!
      .classList.toggle(style.active);
  };

  const handleResult = (arg) => {
    if (result !== arg) setResult(arg);
  };

  return (
    <div id="Category" className={style.Category}>
      <div id={category.replace(/\s+/g, "-")} className={style.Category_Tab}>
        <Result search={search} result={result} />
        <h3 className={style.Category_Tab__Label} onClick={handleToggle}>
          {category}
        </h3>
        <div className={style.Category_Tab__Content}>
          <Product
            search={search}
            data={data}
            openModal={openModal}
            handleResult={handleResult}
          />
        </div>
      </div>
    </div>
  );
};

export default Category;

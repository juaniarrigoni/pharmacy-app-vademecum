// Import dependencies
import { useState } from "react";

// Import inner components
import Result from "./components/Result";
import Products from "./components/Products";

// Import styled components
import { Container, Tab, Content } from "./styled";

// Import assets
import type { ProductData } from "assets/types";

const Category: React.FC<{
  category: string;
  products: Array<ProductData>;
  openModal: (event: React.SyntheticEvent<HTMLElement>, open: boolean) => void;
  search: string;
}> = ({ category, products, openModal, search }) => {
  const [isActive, setIsActive] = useState(false);
  const [result, setResult] = useState<null | number>(null);

  const handleResult = (argument: null | number) => {
    if (result !== argument) setResult(argument);
  };

  return (
    <Container id="Category">
      <Tab className={isActive && "active"} id={category.replace(/\s+/g, "-")}>
        <Result search={search} result={result} />
        <h4 id="category-label" onClick={() => setIsActive(!isActive)}>
          {category}
        </h4>
        <Content id="category-content">
          <Products
            search={search}
            products={products}
            openModal={openModal}
            handleResult={handleResult}
          />
        </Content>
      </Tab>
    </Container>
  );
};

export default Category;

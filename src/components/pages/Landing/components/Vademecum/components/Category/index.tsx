// Import dependencies
import { FC, useState } from "react";

// Import inner components
import Result from "./components/Result";
import Product from "./components/Product";

// Import styled components
import { Container, Tab, Content } from "./styled";

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
      .classList.toggle("active");
  };

  const handleResult = (arg) => {
    if (result !== arg) setResult(arg);
  };

  return (
    <Container id="Category">
      <Tab id={category.replace(/\s+/g, "-")}>
        <Result search={search} result={result} />
        <h3 id="category-label" onClick={handleToggle}>
          {category}
        </h3>
        <Content id="category-content">
          <Product
            search={search}
            data={data}
            openModal={openModal}
            handleResult={handleResult}
          />
        </Content>
      </Tab>
    </Container>
  );
};

export default Category;

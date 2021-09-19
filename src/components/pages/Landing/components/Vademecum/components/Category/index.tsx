// Import dependencies
import { FC, useState, useRef } from "react";

// Import inner components
import Result from "./components/Result";
import Products from "./components/Products";

// Import styled components
import { Container, Tab, Content } from "./styled";

// Import assets
import type { SpreadsheetDataProducts } from "assets/types";

const Category: FC<{
  category: string;
  data: Array<SpreadsheetDataProducts>;
  openModal: (event: React.SyntheticEvent<HTMLElement>, open: boolean) => void;
  search: string;
}> = ({ category, data, openModal, search }) => {
  const [result, setResult] = useState<null | number>(null);
  const toggleRef = useRef<null | HTMLElement>(null);

  const handleToggle = () => toggleRef.current?.classList.toggle("active");
  const handleResult = (argument: null | number) => {
    if (result !== argument) setResult(argument);
  };

  return (
    <Container id="Category">
      <Tab id={category.replace(/\s+/g, "-")} ref={toggleRef}>
        <Result search={search} result={result} />
        <h3 id="category-label" onClick={handleToggle}>
          {category}
        </h3>
        <Content id="category-content">
          <Products
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

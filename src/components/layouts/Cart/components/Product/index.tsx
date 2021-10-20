// Import dependencies
import { useDispatch } from "react-redux";

// Import styled components
import { Container, Button, ProductName } from "./styled";

// Import external components
import DeleteIcon from "components/general/Icons/Delete";
import InfoIcon from "components/general/Icons/Info";

// Import assets
import type { ProductData } from "assets/types";

const Product: React.FC<{ product: ProductData }> = ({ product }) => {
  const dispatch = useDispatch();

  return (
    <Container id={`Product: ${product.nombre}`}>
      <Button>
        <InfoIcon />
      </Button>
      <ProductName>{product.nombre}</ProductName>
      <Button
        onClick={() => dispatch({ type: "REMOVE", payload: product })}
        delete
      >
        <DeleteIcon />
      </Button>
    </Container>
  );
};

export default Product;

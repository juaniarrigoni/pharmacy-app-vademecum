// Import dependencies
import { useState } from "react";
import { useDispatch } from "react-redux";

// Import styled components
import { Container, Button, ProductName } from "./styled";

// Import external components
import DeleteIcon from "components/general/Icons/Delete";
import InfoIcon from "components/general/Icons/Info";
import ProductModal from "components/layouts/ProductModal";

// Import assets
import type { ProductData } from "assets/types";

const Product: React.FC<{ product: ProductData }> = ({ product }) => {
  const dispatch = useDispatch();
  const [openProductModal, setOpenProductModal] = useState(false);

  return (
    <>
      <Container id={`Product: ${product.nombre}`}>
        <Button onClick={() => setOpenProductModal(true)}>
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
      <ProductModal
        edit
        product={product}
        open={openProductModal}
        setOpen={setOpenProductModal}
      />
    </>
  );
};

export default Product;

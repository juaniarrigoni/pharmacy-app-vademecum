// Import dependencies
import { useState } from "react";

// Import styled components
import {
  Container,
  EmptyCart,
  EmptyCartButton,
  ProductList,
  ButtonsWrapper,
  FinishButton,
} from "./styled";

// Import inner components
import CartButton from "./components/CartButton";
import Referral from "./components/Referral";
import Product from "./components/Product";

// Import external components
import Icon from "components/general/Icons/Cart";
import Modal from "components/general/Modal";

// Import assets
import { useAppSelector } from "assets/store";
import type { ProductData } from "assets/types";

const Cart: React.FC<{
  username: string;
  setOpenRequestDataModal: React.Dispatch<React.SetStateAction<boolean>>;
}> = ({ username, setOpenRequestDataModal }) => {
  const cart: Array<ProductData> = useAppSelector((state) => state);
  const [open, setOpen] = useState(false);

  const getPrice = (event: React.SyntheticEvent<HTMLAnchorElement>) => {
    // do
  };

  const shareLink = (event: React.SyntheticEvent<HTMLAnchorElement>) => {
    // do
  };

  return open ? (
    <Modal id="Cart" open={open} setOpen={setOpen} fitContent>
      <Container>
        <Icon />
        {cart.length === 0 ? (
          <EmptyCart>
            <h3>No hay productos en tu carrito</h3>
            <EmptyCartButton
              href="#Vademecum"
              data-scroll="smooth"
              onClick={() => setOpen(false)}
            >
              IR AL VADEMECUM
            </EmptyCartButton>
          </EmptyCart>
        ) : (
          <>
            <ProductList>
              {cart.map((product, index) => (
                <Product key={product.nombre} product={product} />
              ))}
            </ProductList>
            <ButtonsWrapper>
              <div>
                <FinishButton
                  onClick={(event: React.SyntheticEvent<HTMLAnchorElement>) =>
                    getPrice(event)
                  }
                  href="#vademecum"
                  target="_blank"
                  rel="noopener"
                >
                  CONSULTAR<span>PRECIO</span>
                </FinishButton>
              </div>
              <div>
                <FinishButton
                  onClick={(event: React.SyntheticEvent<HTMLAnchorElement>) =>
                    shareLink(event)
                  }
                  href="#vademecum"
                  rel="noopener"
                >
                  RECOMENDAR<span>A ALGUIEN</span>
                </FinishButton>
                <Referral
                  username={username}
                  setOpenRequestDataModal={setOpenRequestDataModal}
                />
              </div>
            </ButtonsWrapper>
          </>
        )}
      </Container>
    </Modal>
  ) : (
    <CartButton cart={cart} setOpen={setOpen} />
  );
};

export default Cart;

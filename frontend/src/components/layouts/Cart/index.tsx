// Import dependencies
import { useState } from "react";

// Import styled components
import {
  Container,
  EmptyCart,
  EmptyCartButton,
  ProductList,
  ButtonsWrapper,
  RecomendarButton,
  ConsultarPrecioAnchor,
} from "./styled";

// Import inner components
import CartButton from "./components/CartButton";
import Referral from "./components/Referral";
import Product from "./components/Product";

// Import external components
import Icon from "components/general/Icons/Cart";
import Modal from "components/general/Modal";
import RequestUserDataModal from "components/layouts/RequestUserDataModal";

// Import assets
import { useAppSelector } from "assets/store";
import { phoneNumber } from "assets/constants/contact";
import type { ProductData } from "assets/types";

const Cart: React.FC = () => {
  const cart: Array<ProductData> = useAppSelector((state) => state);

  const [open, setOpen] = useState(false);

  const [openRequestDataModal, setOpenRequestDataModal] = useState(false);
  const [username, setUsername] = useState(
    localStorage.getItem("username") || ""
  );

  const fx = (value: string) => encodeURIComponent(value);

  const getPrice = (event: React.SyntheticEvent<HTMLAnchorElement>) => {
    const message = fx(
      "Hola! Quisiera consultar el precio del siguiente listado:"
    );
    const products = cart
      .map((product) => `*${fx(product.nombre)}*%0a${fx(product.formula)}`)
      .join("%0a%0a");
    // eslint-disable-next-line no-param-reassign
    event.currentTarget.href = `https://wa.me/${phoneNumber}?text=${message}%0a%0a${products}`;
  };

  const shareLink = () => {
    if (username === "") {
      setOpenRequestDataModal(true);
      return;
    }
    const products = cart
      .map((product) => `*${fx(product.nombre)}*%0a${fx(product.formula)}`)
      .join("%0a%0a");
    const customerMessage = fx(
      `Hola! Quisiera consultar el precio del siguiente listado, recomendado por ${username}:`
    );
    const customerLink = `https://wa.me/${phoneNumber}?text=${customerMessage}%0a%0a${products}`;
    const message = fx("Hola! Quisiera recomendarte el siguiente listado");
    const cta = fx(
      `Ponte en contacto con Farmacéuticos Asociados a través del siguiente link para consultar el precio:`
    );
    window.open(
      `https://wa.me/?text=${message}%0a%0a${products}%0a%0a${cta}%0a%0a${fx(customerLink)}`,
      "_blank"
    );
  };

  return open ? (
    <>
      <Modal id="Cart" open={open} setOpen={setOpen}>
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
                {cart.map((product) => (
                  <Product key={product.id} product={product} />
                ))}
              </ProductList>
              <ButtonsWrapper>
                <div>
                  <ConsultarPrecioAnchor
                    onClick={(event: React.SyntheticEvent<HTMLAnchorElement>) =>
                      getPrice(event)
                    }
                    href=""
                    target="_blank"
                    rel="noopener"
                  >
                    CONSULTAR<span>PRECIO</span>
                  </ConsultarPrecioAnchor>
                </div>
                <div>
                  <RecomendarButton onClick={() => shareLink()}>
                    RECOMENDAR<span>A ALGUIEN</span>
                  </RecomendarButton>
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
      <RequestUserDataModal
        open={openRequestDataModal}
        setOpen={setOpenRequestDataModal}
        username={username}
        setUsername={setUsername}
      />
    </>
  ) : (
    <CartButton cart={cart} setOpen={setOpen} />
  );
};

export default Cart;

// Import dependencies
import { useEffect, useState } from "react";
import axios from "axios";

// Import styled components
import {
  Container,
  EmptyCart,
  EmptyCartButton,
  ProductList,
  ButtonsWrapper,
  FinishButton,
  FinishAnchor,
} from "./styled";

// Import inner components
import CartButton from "./components/CartButton";
import Referral from "./components/Referral";
import Product from "./components/Product";
import ShortenUrlModal from "./components/ShortenUrlModal";

// Import external components
import Icon from "components/general/Icons/Cart";
import Modal from "components/general/Modal";
import RequestUserDataModal from "components/layouts/RequestUserDataModal";

// Import assets
import { useAppSelector } from "assets/store";
import { phoneNumber } from "assets/constants/contact";
import type { ProductData, ShortenUrlData } from "assets/types";

const Cart: React.FC = () => {
  const cart: Array<ProductData> = useAppSelector((state) => state);

  const [open, setOpen] = useState(false);

  const [openRequestDataModal, setOpenRequestDataModal] = useState(false);
  const [username, setUsername] = useState(
    localStorage.getItem("username") || ""
  );

  const [shortenedUrlModal, setShortenedUrlModal] = useState(false);
  const [shortenedUrlData, setShortenedUrlData] = useState<ShortenUrlData>({
    loading: true,
    error: false,
    link: "",
  });

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
    const messages = [
      fx("Hola! Quisiera recomendarte el siguiente listado"),
      fx(
        `Ponte en contacto con Farmacéuticos Asociados a través del siguiente link para consultar el precio:`
      ),
    ];
    const products = cart
      .map((product) => `*${fx(product.nombre)}*%0a${fx(product.formula)}`)
      .join("%0a%0a");

    const customerMessage = fx(
      `Hola! Quisiera consultar el precio del siguiente listado, recomendado por ${username}:`
    );
    const customerLink = `https://wa.me/${phoneNumber}?text=${customerMessage}%0a%0a${products}`;

    const finalLink = `https://wa.me/?text=${messages[0]}%0a%0a${products}%0a%0a${messages[1]}%0a%0a`;

    if (username === "") setOpenRequestDataModal(true);
    else {
      setShortenedUrlModal(true);
      axios
        .post<{ shortenedUrl: string }>(
          `https://firebasedynamiclinks.googleapis.com/v1/shortLinks?key=${"12345678"}`,
          {
            longDynamicLink: customerLink,
            suffix: {
              option: "SHORT",
            },
          }
        )
        .then(({ data }) => {
          setShortenedUrlData({
            loading: false,
            error: false,
            link: finalLink + data.shortenedUrl,
          });
        })
        .catch((error) => {
          // eslint-disable-next-line no-console
          console.error(error);
          setShortenedUrlData({
            loading: false,
            error: true,
            link:
              finalLink +
              fx(`https://wa.me/${phoneNumber}?text=${customerMessage}`),
          });
        });
    }
  };

  useEffect(
    () =>
      setShortenedUrlData({
        loading: true,
        error: false,
        link: "",
      }),
    [cart]
  );

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
                  <Product key={product.nombre} product={product} />
                ))}
              </ProductList>
              <ButtonsWrapper>
                <div>
                  <FinishAnchor
                    onClick={(event: React.SyntheticEvent<HTMLAnchorElement>) =>
                      getPrice(event)
                    }
                    href=""
                    target="_blank"
                    rel="noopener"
                  >
                    CONSULTAR<span>PRECIO</span>
                  </FinishAnchor>
                </div>
                <div>
                  <FinishButton onClick={() => shareLink()}>
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
      <RequestUserDataModal
        open={openRequestDataModal}
        setOpen={setOpenRequestDataModal}
        username={username}
        setUsername={setUsername}
      />
      <ShortenUrlModal
        data={shortenedUrlData}
        open={shortenedUrlModal}
        setOpen={setShortenedUrlModal}
      />
    </>
  ) : (
    <CartButton cart={cart} setOpen={setOpen} />
  );
};

export default Cart;

// Import dependencies
import { FC, useRef } from "react";
import dotenv from "dotenv";

// Import styled components
import {
  Container,
  Modal,
  ModalClose,
  Content,
  Formula,
  ButtonsWrapper,
  Button,
  Notes,
  User,
  UserName,
  Icon,
} from "./styled";

// Import assets
import edit from "assets/media/Edit.png";

dotenv.config();

const ProductModal: FC<{
  name: string;
  formula: string;
  modal: boolean;
  openModal: Function;
  setOpenRequestDataModal: Function;
  username: string | null;
}> = ({
  name,
  formula,
  modal,
  openModal,
  setOpenRequestDataModal,
  username,
}) => {
  const phone = process.env.REACT_APP_PHONE;
  const formulaElement = useRef<HTMLTextAreaElement>(null);

  const getPrice = (e) => {
    let nameCustom = encodeURIComponent("*" + name + "*");
    if (formulaElement.current!.value !== formula) {
      nameCustom += encodeURIComponent(" (Fórmula personalizada)");
    }
    let formulaCustom = encodeURIComponent(formulaElement.current!.value);
    let request = encodeURIComponent(
      "Hola! Quisiera consultar el precio del siguiente producto del vademécum:"
    );
    let message = `${request}%0a%0a${nameCustom}%0a${formulaCustom}`;
    e.currentTarget!.href = `https://wa.me/${phone}?text=${message}`;
  };

  const shareLink = (e) => {
    let nameCustom = encodeURIComponent("*" + name + "*");
    if (formulaElement.current!.value !== formula) {
      nameCustom += encodeURIComponent(" (Fórmula personalizada)");
    }
    let formulaCustom = encodeURIComponent(formulaElement.current!.value);
    let request = encodeURIComponent(
      `Hola! Quisiera consultar el precio del siguiente producto, recomendado por ${username}:`
    );
    let requestLink = encodeURIComponent(
      `wa.me/${phone}?text=${request}%0a%0a${nameCustom}%0a${formulaCustom}`
    );
    let suggestion1 = encodeURIComponent(
      "Hola! Quisiera recomendarte el siguiente producto"
    );
    let suggestion2 = encodeURIComponent(
      `Ponte en contacto con Farmacéuticos Asociados a través del siguiente link para consultar el precio:`
    );
    let message = `${suggestion1}%0a%0a${nameCustom}%0a${formulaCustom}%0a%0a${suggestion2}%0a%0a${requestLink}`;
    let link = `https://wa.me/?text=${message}`;
    if (username === null || username === "") {
      setOpenRequestDataModal(true);
    } else {
      e.currentTarget.href = link;
      e.currentTarget.target = "_blank";
    }
  };

  let referral: JSX.Element[] = [];
  if (username !== null) {
    referral.push(
      <Notes>
        <p>Recomendado por:</p>
        <User onClick={() => setOpenRequestDataModal(true)}>
          <UserName id="product-modal-username">{username}</UserName>
          <Icon id="product-modal-username-icon">
            <img src={edit} alt="edit" />
          </Icon>
        </User>
      </Notes>
    );
  }

  if (modal) {
    return (
      <Container id="ProductModal" data-state={modal}>
        <Modal id="product-modal">
          <ModalClose onClick={(e) => openModal(e, false)} data-type="close">
            x
          </ModalClose>
          <Content>
            <h2>{name}</h2>
            <Formula
              ref={formulaElement}
              rows={4}
              onInput={() =>
                'style.height = "";style.height = scrollHeight + 3 + "px"'
              }
            >
              {formula}
            </Formula>
            <ButtonsWrapper>
              <div>
                <Button
                  onClick={(e) => getPrice(e)}
                  href="#vademecum"
                  target="_blank"
                  rel="noopener"
                >
                  CONSULTAR<span>PRECIO</span>
                </Button>
              </div>
              <div>
                <Button
                  onClick={(e) => shareLink(e)}
                  href="#vademecum"
                  rel="noopener"
                >
                  RECOMENDAR<span>A ALGUIEN</span>
                </Button>
                {referral}
              </div>
            </ButtonsWrapper>
          </Content>
        </Modal>
      </Container>
    );
  } else return null;
};

export default ProductModal;

// Import dependencies
import { FC, useRef } from "react";

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
import { phoneNumber } from "assets/constants/contact";

const ProductModal: FC<{
  name: string;
  formula: string;
  modal: boolean;
  openModal: (event: React.SyntheticEvent<HTMLElement>, open: boolean) => void;
  setOpenRequestDataModal: React.Dispatch<React.SetStateAction<boolean>>;
  username: string | null;
}> = ({
  name,
  formula,
  modal,
  openModal,
  setOpenRequestDataModal,
  username,
}) => {
  const formulaElement = useRef<HTMLTextAreaElement>(null);

  const getPrice = (event: React.SyntheticEvent<HTMLAnchorElement>) => {
    let nameCustom = encodeURIComponent(`*${name}*`);
    if (formulaElement.current!.value !== formula) {
      nameCustom += encodeURIComponent(" (Fórmula personalizada)");
    }
    const formulaCustom = encodeURIComponent(formulaElement.current!.value);
    const request = encodeURIComponent(
      "Hola! Quisiera consultar el precio del siguiente producto del vademécum:"
    );
    const message = `${request}%0a%0a${nameCustom}%0a${formulaCustom}`;
    // eslint-disable-next-line no-param-reassign
    event.currentTarget!.href = `https://wa.me/${phoneNumber}?text=${message}`;
  };

  const shareLink = (event: React.SyntheticEvent<HTMLAnchorElement>) => {
    let nameCustom = encodeURIComponent(`*${name}*`);
    if (formulaElement.current!.value !== formula) {
      nameCustom += encodeURIComponent(" (Fórmula personalizada)");
    }
    const formulaCustom = encodeURIComponent(formulaElement.current!.value);
    const request = encodeURIComponent(
      `Hola! Quisiera consultar el precio del siguiente producto, recomendado por ${username}:`
    );
    const requestLink = encodeURIComponent(
      `wa.me/${phoneNumber}?text=${request}%0a%0a${nameCustom}%0a${formulaCustom}`
    );
    const suggestion1 = encodeURIComponent(
      "Hola! Quisiera recomendarte el siguiente producto"
    );
    const suggestion2 = encodeURIComponent(
      `Ponte en contacto con Farmacéuticos Asociados a través del siguiente link para consultar el precio:`
    );
    const message = `${suggestion1}%0a%0a${nameCustom}%0a${formulaCustom}%0a%0a${suggestion2}%0a%0a${requestLink}`;
    const link = `https://wa.me/?text=${message}`;
    if (username === null || username === "") {
      setOpenRequestDataModal(true);
    } else {
      // eslint-disable-next-line no-param-reassign
      event.currentTarget.href = link;
      // eslint-disable-next-line no-param-reassign
      event.currentTarget.target = "_blank";
    }
  };

  const referral: Array<JSX.Element> = [];
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

  if (!modal) return null;
  return (
    <Container id="ProductModal" data-state={modal}>
      <Modal id="product-modal">
        <ModalClose
          onClick={(event: React.SyntheticEvent<HTMLElement>) =>
            openModal(event, false)
          }
          data-type="close"
        >
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
                onClick={(event: React.SyntheticEvent<HTMLAnchorElement>) =>
                  getPrice(event)
                }
                href="#vademecum"
                target="_blank"
                rel="noopener"
              >
                CONSULTAR<span>PRECIO</span>
              </Button>
            </div>
            <div>
              <Button
                onClick={(event: React.SyntheticEvent<HTMLAnchorElement>) =>
                  shareLink(event)
                }
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
};

export default ProductModal;

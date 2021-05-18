import { FC, useRef } from "react";
import dotenv from "dotenv";

import style from "./styles/ProductModal.module.css";

import edit from "../../assets/Edit.png";

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
      <div className={style.ProductModal__Content__Box__Buttons__Button__Notes}>
        <p>Recomendado por:</p>
        <div
          className={
            style.ProductModal__Content__Box__Buttons__Button__Notes__User
          }
          onClick={() => setOpenRequestDataModal(true)}
        >
          <p
            className={
              style.ProductModal__Content__Box__Buttons__Button__Notes__User__Name
            }
          >
            {username}
          </p>
          <div
            className={
              style.ProductModal__Content__Box__Buttons__Button__Notes__User__Icon
            }
          >
            <img src={edit} alt="edit" />
          </div>
        </div>
      </div>
    );
  }

  if (modal) {
    return (
      <div id="ProductModal" data-state={modal} className={style.ProductModal}>
        <div className={style.ProductModal__Content}>
          <span
            onClick={(e) => openModal(e, false)}
            data-type="close"
            className={style.ProductModal__Content__Close}
          >
            x
          </span>
          <div className={style.ProductModal__Content__Box}>
            <h2>{name}</h2>
            <textarea
              ref={formulaElement}
              rows={4}
              className={style.ProductModal__Content__Box__Formula}
              onInput={() =>
                'style.height = "";style.height = scrollHeight + 3 + "px"'
              }
            >
              {formula}
            </textarea>
            <div className={style.ProductModal__Content__Box__Buttons}>
              <div>
                <a
                  className={style.ProductModal__Content__Box__Buttons__Button}
                  onClick={(e) => getPrice(e)}
                  href="#vademecum"
                  target="_blank"
                  rel="noopener"
                >
                  CONSULTAR<span>PRECIO</span>
                </a>
              </div>
              <div>
                <a
                  className={style.ProductModal__Content__Box__Buttons__Button}
                  onClick={(e) => shareLink(e)}
                  href="#vademecum"
                  rel="noopener"
                >
                  RECOMENDAR<span>A ALGUIEN</span>
                </a>
                {referral}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  } else return null;
};

export default ProductModal;

import { FC } from "react";

import style from "./styles/ContactModal.module.css";

import location from "../../assets/Location.png";
import chat from "../../assets/Chat.png";
import mail from "../../assets/Mail.png";
import phone from "../../assets/Phone.png";

const ContactModal: FC<{ modal: boolean; setModal: Function }> = ({
  modal,
  setModal,
}) => {
  if (modal) {
    return (
      <div id="ContactModal" data-state={modal} className={style.ContactModal}>
        <div className={style.ContactModal__Content}>
          <span
            onClick={() => setModal(false)}
            className={style.ContactModal__Content__Close}
          >
            x
          </span>
          <div className={style.ContactModal__Content__Box}>
            <h2>CONTACTO</h2>
            <h3>Dónde encontrarnos</h3>
            <div className={style.ContactModal__Content__Contact}>
              <div className={style.ContactModal__Content__Contact__Icon}>
                <img src={location} alt="location" />
              </div>
              <p>Gral. San Martin 1284, Neuquén</p>
              <a
                href="https://g.page/farmaceuticosasociados"
                target="_blank"
                rel="noreferrer"
              >
                VER MAPA
              </a>
            </div>
            <div className={style.ContactModal__Content__Contact}>
              <div className={style.ContactModal__Content__Contact__Icon}>
                <img src={chat} alt="chat" />
              </div>
              <p>Atención por WhatsApp</p>
              <a
                href="https://wa.me/542995799121?text=Hola!%20Vengo%20del%20sitio%20web"
                target="_blank"
                rel="noreferrer"
              >
                CHATEAR
              </a>
            </div>
            <div className={style.ContactModal__Content__Contact}>
              <div className={style.ContactModal__Content__Contact__Icon}>
                <img src={mail} alt="mail" />
              </div>
              <p>farmaceuticosasociados@gmail.com</p>
              <a
                href="#Contact"
                data-scroll="smooth"
                onClick={() => setModal(false)}
              >
                CONTACTAR
              </a>
            </div>
            <div className={style.ContactModal__Content__Contact}>
              <div className={style.ContactModal__Content__Contact__Icon}>
                <img src={phone} alt="phone" />
              </div>
              <p>299 579 9121 – 299 447 5777</p>
            </div>
          </div>
        </div>
      </div>
    );
  } else return null;
};

export default ContactModal;

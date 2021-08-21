// Import dependencies
import type { FC } from "react";

// Import styled components
import {
  Container,
  Modal,
  ModalClose,
  ModalContent,
  ContactInfoItem,
  ContactInfoIcon,
} from "./styled";

// Import assets
import location from "assets/media/Location.png";
import chat from "assets/media/Chat.png";
import mail from "assets/media/Mail.png";
import phone from "assets/media/Phone.png";

const contactInfo = [
  {
    text: "Gral. San Martin 1284, Neuquén",
    icon: location,
    link: "https://g.page/farmaceuticosasociados",
    button: "VER MAPA",
  },
  {
    text: "Atención por WhatsApp",
    icon: chat,
    link: "https://wa.me/542995799121?text=Hola!%20Vengo%20del%20sitio%20web",
    button: "CHATEAR",
  },
  {
    text: "farmaceuticosasociados@gmail.com",
    icon: mail,
    link: "#Contact",
    button: "CONTACTAR",
    isMail: true,
  },
  {
    text: "299 579 9121 – 299 447 5777",
    icon: phone,
    isPhone: true,
  },
];

const ContactModal: FC<{
  modal: boolean;
  setModal: React.Dispatch<React.SetStateAction<boolean>>;
}> = ({ modal, setModal }) => {
  const ContactInfo = contactInfo.map((item) => (
    <ContactInfoItem>
      <ContactInfoIcon>
        <img src={item.icon} alt="icon" />
      </ContactInfoIcon>
      <p>{item.text}</p>
      {!item.isPhone &&
        (item.isMail ? (
          <a
            href={item.link}
            data-scroll="smooth"
            onClick={() => setModal(false)}
          >
            {item.button}
          </a>
        ) : (
          <a href={item.link} target="_blank" rel="noreferrer">
            {item.button}
          </a>
        ))}
    </ContactInfoItem>
  ));

  return (
    <Container data-state={modal}>
      {modal && (
        <Modal>
          <ModalClose onClick={() => setModal(false)}>x</ModalClose>
          <ModalContent>
            <h2>CONTACTO</h2>
            <h3>Dónde encontrarnos</h3>
            {ContactInfo}
          </ModalContent>
        </Modal>
      )}
    </Container>
  );
};

export default ContactModal;

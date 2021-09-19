// Import dependencies
import type { FC } from "react";

// Import styled components
import {
  Container,
  Modal,
  ModalClose,
  ModalContent,
  ContentBox,
  ContactInfoItem,
  ContactInfoIcon,
} from "./styled";

// Import assets
import { location, chat, mail, phone } from "assets/constants/contact";

const contactInfo: Array<{
  type: string;
  title: string;
  icon: string;
  link?: string;
  button?: string;
}> = [
  { ...location, button: "VER MAPA" },
  { ...chat, button: "CHATEAR" },
  { ...mail, button: "CONTACTAR" },
  { ...phone },
];

const ContactModal: FC<{
  modal: boolean;
  setModal: React.Dispatch<React.SetStateAction<boolean>>;
}> = ({ modal, setModal }) => {
  const ContactInfo = contactInfo.map((item) => (
    <ContactInfoItem key={item.type}>
      <ContactInfoIcon>
        <img src={item.icon} alt="icon" />
      </ContactInfoIcon>
      <p>{item.title}</p>
      {!(item.type === "phone") &&
        (item.type === "mail" ? (
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

  if (!modal) return null;
  return (
    <Container data-state={modal}>
      <Modal>
        <ModalContent>
          <ModalClose onClick={() => setModal(false)}>x</ModalClose>
          <ContentBox>
            <h2>CONTACTO</h2>
            <h3>Dónde encontrarnos</h3>
            {ContactInfo}
          </ContentBox>
        </ModalContent>
      </Modal>
    </Container>
  );
};

export default ContactModal;

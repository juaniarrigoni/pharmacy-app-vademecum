// Import styled components
import { ContactInfo, ContactInfoItem, ContactInfoIcon } from "./styled";

// Import external components
import Modal from "components/general/Modal";

// Import assets
import { location, chat, mail, phone } from "assets/constants/contact";

const contactInfoFields: Array<{
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

const ContactModal: React.FC<{
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}> = ({ open, setOpen }) => {
  const contactInfo = contactInfoFields.map((item) => (
    <ContactInfoItem key={item.type}>
      <div className="icon">
        <ContactInfoIcon>
          <img src={item.icon} alt="icon" />
        </ContactInfoIcon>
      </div>
      <p>{item.title}</p>
      {!(item.type === "phone") &&
        (item.type === "mail" ? (
          <a
            href={item.link}
            data-scroll="smooth"
            onClick={() => setOpen(false)}
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
    <Modal id="ContactModal" open={open} setOpen={setOpen} fitContent>
      <h2>CONTACTO</h2>
      <h3>Dónde encontrarnos</h3>
      <ContactInfo>{contactInfo}</ContactInfo>
    </Modal>
  );
};

export default ContactModal;

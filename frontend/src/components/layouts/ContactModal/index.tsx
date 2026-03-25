// Import styled components
import { ContactInfo, ContactInfoItem, ContactInfoIcon } from "./styled";

// Import external components
import Modal from "components/general/Modal";

// Import assets
import { location, chat, phone } from "assets/constants/contact";

const contactInfoFields = [location, chat, phone];

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

// Import styled components
import { Container, ContactGrid, ContactCard, ContactIcon, ContactLabel, ContactValue } from "./styled";

// Import assets
import { location, laboratoryConsult, phone } from "assets/constants/contact";
import locationIcon from "assets/media/Location.png";
import chatIcon from "assets/media/Chat.png";
import phoneIcon from "assets/media/Phone.png";

const Contact: React.FC = () => {
  return (
    <Container id="Contact">
      <h2>Contacto</h2>
      <h3>Dónde encontrarnos</h3>
      <ContactGrid>
        <ContactCard href={location.link} target="_blank" rel="noreferrer">
          <ContactIcon src={locationIcon} />
          <ContactLabel>Dirección</ContactLabel>
          <ContactValue>{location.title}</ContactValue>
        </ContactCard>

        <ContactCard href={laboratoryConsult.link} target="_blank" rel="noreferrer">
          <ContactIcon src={chatIcon} />
          <ContactLabel>WhatsApp</ContactLabel>
          <ContactValue>{laboratoryConsult.title}</ContactValue>
        </ContactCard>

        <ContactCard href={phone.link}>
          <ContactIcon src={phoneIcon} />
          <ContactLabel>Teléfono</ContactLabel>
          <ContactValue>{phone.title}</ContactValue>
        </ContactCard>
      </ContactGrid>
    </Container>
  );
};

export default Contact;

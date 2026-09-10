// Import styled components
import { Container, ContactGrid, ContactCard, ContactIcon, ContactLabel, ContactValue } from "./styled";

// Import assets
import { location, phone } from "assets/constants/contact";
import { useContactChannels } from "contexts/ContactChannelsContext";
import locationIcon from "assets/media/Location.png";
import chatIcon from "assets/media/Chat.png";
import phoneIcon from "assets/media/Phone.png";

const Contact: React.FC = () => {
  const { openChannels } = useContactChannels();

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

        {/* Una sola entrada de WhatsApp: la división entre público y
            profesional la muestra el selector, al momento de elegir. */}
        <ContactCard as="button" type="button" onClick={openChannels}>
          <ContactIcon src={chatIcon} />
          <ContactLabel>WhatsApp</ContactLabel>
          <ContactValue>Público o profesional</ContactValue>
        </ContactCard>

        <ContactCard href={`tel:+${phone.title.replace(/\s/g, "")}`}>
          <ContactIcon src={phoneIcon} />
          <ContactLabel>Teléfono</ContactLabel>
          <ContactValue>{phone.title}</ContactValue>
        </ContactCard>
      </ContactGrid>
    </Container>
  );
};

export default Contact;

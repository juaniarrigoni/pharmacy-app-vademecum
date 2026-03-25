// Import styled components
import { Container, ContactGrid, ContactCard, ContactIcon, ContactLabel, ContactValue } from "./styled";

// Import assets
import { location, chat, phone } from "assets/constants/contact";
import locationIcon from "assets/media/Location.png";
import chatIcon from "assets/media/Chat.png";
import phoneIcon from "assets/media/Phone.png";

const contactItems = [
  {
    icon: locationIcon,
    label: "Dirección",
    value: location.title,
    href: location.link,
    external: true,
  },
  {
    icon: chatIcon,
    label: "WhatsApp",
    value: chat.title,
    href: chat.link,
    external: true,
  },
  {
    icon: phoneIcon,
    label: "Teléfono",
    value: phone.title,
    href: `tel:+${phone.title.replace(/\s/g, "")}`,
    external: false,
  },
];

const Contact: React.FC = () => {
  return (
    <Container id="Contact">
      <h2>Contacto</h2>
      <h3>Dónde encontrarnos</h3>
      <ContactGrid>
        {contactItems.map((item) => (
          <ContactCard
            key={item.label}
            href={item.href}
            target={item.external ? "_blank" : undefined}
            rel={item.external ? "noreferrer" : undefined}
          >
            <ContactIcon src={item.icon} />
            <ContactLabel>{item.label}</ContactLabel>
            <ContactValue>{item.value}</ContactValue>
          </ContactCard>
        ))}
      </ContactGrid>
    </Container>
  );
};

export default Contact;

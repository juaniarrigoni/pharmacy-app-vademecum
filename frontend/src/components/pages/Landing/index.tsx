// Import inner components
import ProductSection from "./components/ProductSection";
import Activos from "./components/Activos";
import Contact from "./components/Contact";

// Import styled components
import { Container, Content, Logo, ContactStrip, ContactItem, ContactItemIcon, ContactHint, ScrollButton, AuthButton } from "./styled";

// Import external components
import Cart from "components/layouts/Cart";

// Import assets
import logo from "assets/media/Logo.jpg";
import { location, chat, phone } from "assets/constants/contact";
import { SECTIONS } from "assets/constants/sections";
import { useAuth } from "contexts/AuthContext";

const Landing: React.FC = () => {
  const { user, openAuthModal, openSidebar } = useAuth();

  return (
    <>
      <Container id="Landing">
        <AuthButton onClick={user ? openSidebar : openAuthModal}>
          {user ? `Mis fórmulas (${user.email?.split('@')[0]})` : 'Iniciar sesión'}
        </AuthButton>
        <Content>
          <h1>Farmacéuticos Asociados</h1>
          <h2>Laboratorio de Formulas</h2>
          <Logo src={logo} alt="Farmacéuticos Asociados" />
          <ContactStrip>
            <ContactItem href={location.link} target="_blank" rel="noreferrer">
              <ContactItemIcon src={location.icon} />
              {location.title}
              <ContactHint>ver en mapa ↗</ContactHint>
            </ContactItem>
            <ContactItem href={chat.link} target="_blank" rel="noreferrer">
              <ContactItemIcon src={chat.icon} />
              {chat.title}
              <ContactHint>abrir WhatsApp ↗</ContactHint>
            </ContactItem>
            <ContactItem href={`tel:+${phone.title.replace(/\s/g, "")}`}>
              <ContactItemIcon src={phone.icon} />
              {phone.title}
              <ContactHint>llamar ↗</ContactHint>
            </ContactItem>
          </ContactStrip>
        </Content>
      </Container>
      {SECTIONS.map((section) => (
        <ProductSection key={section.id} sectionConfig={section} />
      ))}
      <Activos />
      <Contact />
      <Cart />
    </>
  );
};

export default Landing;

// Import dependencies
import { useState } from "react";

// Import inner components
import ProductSection from "./components/ProductSection";
import Activos from "./components/Activos";
import Contact from "./components/Contact";

// Import styled components
import {
  Container,
  Content,
  Logo,
  ButtonsWrapper,
  Button,
  ScrollButton,
  IconMask,
} from "./styled";

// Import external components
import ContactModal from "components/layouts/ContactModal";
import Cart from "components/layouts/Cart";

// Import assets
// Icons imported
import logo from "assets/media/Logo.jpg";
import scroll from "assets/media/Scroll-down.gif";
import vademecum from "assets/media/Vademecum.png";
import activos from "assets/media/Activos.png";
import contacto from "assets/media/Contacto.png";
import { SECTIONS } from "assets/constants/sections";

const Landing: React.FC = () => {
  const [openContactModal, setOpenContactModal] = useState(false);

  return (
    <>
      <Container id="Landing">
        <Content>
          <h1>Farmacéuticos Asociados</h1>
          <h2>Laboratorio de Formulas</h2>
          <Logo src={logo} alt="Farmacéuticos Asociados" />
          <ButtonsWrapper>
            <Button
              // eslint-disable-next-line no-return-assign
              onClick={() => (window.location.href = "/#formulas")}
              data-scroll="smooth"
            >
              <IconMask src={vademecum} />
              <p>
                FÓRMULAS<span>Con receta</span>
              </p>
            </Button>
            <Button
              // eslint-disable-next-line no-return-assign
              onClick={() => (window.location.href = "/#suplementos")}
              data-scroll="smooth"
            >
              <IconMask src={activos} />
              <p>
                SUPLEMENTOS<span>Calidad asegurada</span>
              </p>
            </Button>
            <Button
              // eslint-disable-next-line no-return-assign
              onClick={() => (window.location.href = "/#nutricion")}
              data-scroll="smooth"
            >
              <IconMask src={vademecum} />
              <p>
                NUTRICIÓN<span>Cuidado integral</span>
              </p>
            </Button>
            <Button onClick={() => setOpenContactModal(true)}>
              <IconMask src={contacto} />
              <p>
                CONTACTO<span>Dónde encontrarnos</span>
              </p>
            </Button>
          </ButtonsWrapper>
        </Content>
        <ScrollButton
          // eslint-disable-next-line no-return-assign
          onClick={() => (window.location.href = "/#formulas")}
          data-scroll="smooth"
        />
        <ContactModal open={openContactModal} setOpen={setOpenContactModal} />
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

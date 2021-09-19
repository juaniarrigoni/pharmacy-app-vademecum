// Import dependencies
import { FC, useState } from "react";

// Import inner components
import Vademecum from "./components/Vademecum";
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
} from "./styled";

// Import external components
import ContactModal from "components/general/ContactModal";

// Import assets
import logo from "assets/media/Logo.jpg";
import scroll from "assets/media/Scroll-down.gif";
import vademecum from "assets/media/Vademecum.png";
import activos from "assets/media/Activos.png";
import contacto from "assets/media/Contacto.png";

const Landing: FC = () => {
  const [modal, setModal] = useState(false);

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
              onClick={() => (window.location.href = "/#Vademecum")}
              data-scroll="smooth"
            >
              <img src={vademecum} alt="Vademecum" />
              <p>
                VADEMÉCUM<span>Nuestras fórmulas</span>
              </p>
            </Button>
            <Button
              // eslint-disable-next-line no-return-assign
              onClick={() => (window.location.href = "/#Activos")}
              data-scroll="smooth"
            >
              <img src={activos} alt="Activos" />
              <p>
                ACTIVOS<span>Calidad asegurada</span>
              </p>
            </Button>
            <Button onClick={() => setModal(true)}>
              <img src={contacto} alt="Contacto" />
              <p>
                CONTACTO<span>Dónde encontrarnos</span>
              </p>
            </Button>
          </ButtonsWrapper>
        </Content>
        <ScrollButton
          // eslint-disable-next-line no-return-assign
          onClick={() => (window.location.href = "/#Vademecum")}
          data-scroll="smooth"
        >
          <img src={scroll} alt="Scroll down" />
        </ScrollButton>
        <ContactModal modal={modal} setModal={setModal} />
      </Container>
      <Vademecum />
      <Activos />
      <Contact />
    </>
  );
};

export default Landing;

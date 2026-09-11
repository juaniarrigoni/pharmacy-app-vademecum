// Import styled components
import { FloatingButton } from "./styled";

// Import inner components
import WhatsappIcon from "components/general/Icons/Whatsapp";

// Import assets
import { laboratoryConsult } from "assets/constants/contact";

// Acceso directo al WhatsApp del laboratorio desde cualquier pantalla. Es un
// link y no un botón que abre algo: con un solo destino no hay nada que elegir.
const WhatsappButton: React.FC = () => {
  return (
    <FloatingButton
      href={laboratoryConsult.link}
      target="_blank"
      rel="noreferrer"
      title="Consultá al laboratorio por WhatsApp"
      aria-label="Consultá al laboratorio por WhatsApp"
    >
      <WhatsappIcon />
    </FloatingButton>
  );
};

export default WhatsappButton;

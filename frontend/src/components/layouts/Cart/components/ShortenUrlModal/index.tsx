// Import styled components
import { Content, FinishAnchor } from "./styled";

// Import external components
import Modal from "components/general/Modal";
import Loader from "components/general/Loader";

// Import assets
import type { ShortenUrlData } from "assets/types";

const ShortenUrlModal: React.FC<{
  data: ShortenUrlData;
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}> = ({ data, open, setOpen }) => {
  return (
    <Modal id="ContactModal" open={open} setOpen={setOpen} fitContent>
      <Content>
        {data.loading ? (
          <>
            <h2>Creando tu link de recomendacion de WhatsApp</h2>
            <Loader className="loader" />
          </>
        ) : (
          <>
            <h2>Haz clic debajo para elegir entre tus contactos</h2>
            <FinishAnchor href={data.link} target="_blank" rel="noopener">
              <span>IR A</span>WHATSAPP
            </FinishAnchor>
          </>
        )}
      </Content>
    </Modal>
  );
};

export default ShortenUrlModal;

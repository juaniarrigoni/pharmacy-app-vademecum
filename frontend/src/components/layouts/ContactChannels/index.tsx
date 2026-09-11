// Import styled components
import {
  FloatingButton,
  ChannelList,
  ChannelCard,
  ChannelIcon,
  ChannelText,
  ChannelTitle,
  ChannelDescription,
} from "./styled";

// Import inner components
import Modal from "components/general/Modal";
import WhatsappIcon from "components/general/Icons/Whatsapp";

// Import assets
import { whatsappChannels } from "assets/constants/contact";
import { useContactChannels } from "contexts/ContactChannelsContext";
import publicChannelIcon from "assets/media/CanalPublico.png";
import laboratoryChannelIcon from "assets/media/CanalLaboratorio.png";

const ContactChannels: React.FC = () => {
  const { channelsOpen, openChannels, closeChannels } = useContactChannels();

  return (
    <>
      <FloatingButton
        type="button"
        onClick={openChannels}
        title="Escribinos por WhatsApp"
        aria-label="Escribinos por WhatsApp"
      >
        <WhatsappIcon />
      </FloatingButton>

      <Modal
        id="ContactChannels"
        open={channelsOpen}
        setOpen={closeChannels}
        fitContent
      >
        <h2>Escribinos por WhatsApp</h2>
        <h3>Elegí con quién hablar</h3>
        <ChannelList>
          {whatsappChannels.map((channel) => (
            <ChannelCard
              key={channel.id}
              href={channel.link}
              target="_blank"
              rel="noreferrer"
              onClick={closeChannels}
            >
              {/* Dos destinos, dos ilustraciones: una persona para atención
                  al público, un matraz para el laboratorio. */}
              <ChannelIcon
                $src={
                  channel.id === "laboratorio"
                    ? laboratoryChannelIcon
                    : publicChannelIcon
                }
              />
              <ChannelText>
                <ChannelTitle>{channel.title}</ChannelTitle>
                <ChannelDescription>{channel.description}</ChannelDescription>
              </ChannelText>
            </ChannelCard>
          ))}
        </ChannelList>
      </Modal>
    </>
  );
};

export default ContactChannels;

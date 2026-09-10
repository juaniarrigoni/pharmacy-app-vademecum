// Import styled components
import {
  FloatingButton,
  ChannelList,
  ChannelCard,
  ChannelTitle,
  ChannelDescription,
} from "./styled";

// Import inner components
import Modal from "components/general/Modal";
import WhatsappIcon from "components/general/Icons/Whatsapp";

// Import assets
import { whatsappChannels } from "assets/constants/contact";
import { useContactChannels } from "contexts/ContactChannelsContext";

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
        <h3>Elegí por dónde seguir</h3>
        <ChannelList>
          {whatsappChannels.map((channel) => (
            <ChannelCard
              key={channel.id}
              href={channel.link}
              target="_blank"
              rel="noreferrer"
              onClick={closeChannels}
            >
              <ChannelTitle>{channel.title}</ChannelTitle>
              <ChannelDescription>{channel.description}</ChannelDescription>
            </ChannelCard>
          ))}
        </ChannelList>
      </Modal>
    </>
  );
};

export default ContactChannels;

// Import dependencies
import { createContext, useContext, useState } from "react";

interface ContactChannelsContextValue {
  channelsOpen: boolean;
  openChannels: () => void;
  closeChannels: () => void;
}

const ContactChannelsContext = createContext<ContactChannelsContextValue>({
  channelsOpen: false,
  openChannels: () => undefined,
  closeChannels: () => undefined,
});

export const ContactChannelsProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [channelsOpen, setChannelsOpen] = useState(false);

  return (
    <ContactChannelsContext.Provider
      value={{
        channelsOpen,
        openChannels: () => setChannelsOpen(true),
        closeChannels: () => setChannelsOpen(false),
      }}
    >
      {children}
    </ContactChannelsContext.Provider>
  );
};

export const useContactChannels = () => useContext(ContactChannelsContext);

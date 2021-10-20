// Import styled components
import { Container, Overlay, Box, Close, Content } from "./styled";

// Import external components
import Icon from "components/general/Icons/Close";

const Modal: React.FC<{
  children: React.ReactNode;
  id: string;
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  fitContent?: boolean;
}> = ({ children, id, open, setOpen, fitContent }) => {
  return !open ? null : (
    <Container id={id} data-state={open}>
      <Overlay onClick={() => setOpen(false)} />
      <Box id="modal" data-style-fit-content={fitContent}>
        <Close onClick={() => setOpen(false)} data-type="close">
          <Icon />
        </Close>
        <Content>{children}</Content>
      </Box>
    </Container>
  );
};

export default Modal;

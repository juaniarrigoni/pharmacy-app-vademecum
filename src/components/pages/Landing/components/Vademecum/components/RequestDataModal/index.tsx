// Import dependencies
import { FC, useState } from "react";

// Import styled components
import {
  Container,
  Modal,
  ModalClose,
  Content,
  Form,
  Input,
  Submit,
} from "./styled";

const RequestDataModal: FC<{
  state: boolean;
  setOpenRequestDataModal: React.Dispatch<React.SetStateAction<boolean>>;
  username: string;
  setUsername: React.Dispatch<React.SetStateAction<string>>;
}> = ({ state, setOpenRequestDataModal, username, setUsername }) => {
  const [user, setUser] = useState(username);

  const handleSubmit = (event) => {
    event.preventDefault();
    setOpenRequestDataModal(false);
    setUsername(user);
    localStorage.setItem("username", user);
  };

  if (!state) return null;
  return (
    <Container id="RequestDataModal" data-state={state}>
      <Modal id="request-data-modal">
        <ModalClose onClick={() => setOpenRequestDataModal(false)}>
          x
        </ModalClose>
        <Content>
          <h2>Preséntate para recomendar este producto</h2>
          <Form onSubmit={handleSubmit}>
            <Input
              type="text"
              placeholder="Nombre y apellido"
              value={user}
              onChange={(event) => setUser(event.target.value)}
            />
            <p>
              Lo almacenaremos en tu dispositivo para agilizar tu próxima
              recomendación
            </p>
            <Submit type="submit" value="Listo" />
          </Form>
        </Content>
      </Modal>
    </Container>
  );
};

export default RequestDataModal;

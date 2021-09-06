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
  setOpenRequestDataModal: Function;
  username: string | null;
  setUsername: Function;
}> = ({ state, setOpenRequestDataModal, username, setUsername }) => {
  if (username === null) username = "";
  const [user, setUser] = useState(username);

  const handleSubmit = (e) => {
    e.preventDefault();
    setOpenRequestDataModal(false);
    setUsername(user);
    localStorage.setItem("username", user);
  };

  if (state) {
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
                onChange={(e) => setUser(e.target.value)}
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
  } else return null;
};

export default RequestDataModal;

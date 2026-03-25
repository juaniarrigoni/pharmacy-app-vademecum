// Import dependencies
import { useState } from "react";

// Import styled components
import { Content, Form, Input, Submit } from "./styled";

// Import external components
import Modal from "components/general/Modal";

const RequestUserDataModal: React.FC<{
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  username: string;
  setUsername: React.Dispatch<React.SetStateAction<string>>;
}> = ({ open, setOpen, username, setUsername }) => {
  const [user, setUser] = useState(username);

  const handleSubmit = (event) => {
    event.preventDefault();
    setOpen(false);
    setUsername(user);
    localStorage.setItem("username", user);
  };

  return (
    <Modal id="ContactModal" open={open} setOpen={setOpen}>
      <Content>
        <h2>Preséntate para recomendar este producto</h2>
        <Form onSubmit={handleSubmit}>
          <Input
            type="text"
            placeholder="ej: Juan Perez"
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
  );
};

export default RequestUserDataModal;

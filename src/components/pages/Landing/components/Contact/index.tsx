// Import dependencies
import { useState } from "react";
import { sendForm } from "emailjs-com";

// Import styled components
import { Container, FormWrapper, Form, Error, Submit } from "./styled";

const Contact: React.FC = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  const handleError = (errorMessage: string) => {
    setError(errorMessage);
    setTimeout(() => setError(""), 1500);
  };

  const handleSubmit = (event: React.BaseSyntheticEvent) => {
    event.preventDefault();
    if (name === "" || email === "" || message === "")
      return handleError("Por favor, completa todos los campos 😜");
    return sendForm(
      "emailjs",
      `${process.env.REACT_APP_EMAILJS_TEMPLATE}`,
      event.target,
      `${process.env.REACT_APP_EMAILJS_USER}`
    ).then(
      () =>
        handleError("Gracias por tu tiempo 💚 Te responderemos a la brevedad"),
      () =>
        handleError(
          "Ups, ocurrió un error inesperado 😅 Prueba nuevamente en unos minutos"
        )
    );
  };

  return (
    <Container id="Contact">
      <h2>Contacto</h2>
      <h3>Estamos para ayudarte</h3>
      <FormWrapper>
        <Form
          onSubmit={(event: React.BaseSyntheticEvent) => handleSubmit(event)}
        >
          {error && <Error>{error}</Error>}
          <input
            type="text"
            placeholder="Nombre"
            name="name"
            value={name}
            onChange={(event) => setName(event.currentTarget.value)}
          />
          <input
            type="email"
            placeholder="Email"
            name="email"
            value={email}
            onChange={(event) => setEmail(event.currentTarget.value)}
          />
          <textarea
            placeholder="¿Cómo podemos ayudarte?"
            name="message"
            value={message}
            onChange={(event) => setMessage(event.currentTarget.value)}
          />
          <Submit type="submit" value="ENVIAR" />
        </Form>
      </FormWrapper>
    </Container>
  );
};

export default Contact;

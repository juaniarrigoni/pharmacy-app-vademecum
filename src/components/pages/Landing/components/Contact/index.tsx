// Import dependencies
import { FC, useState, useRef } from "react";
import emailjs from "emailjs-com";

// Import styled components
import { Container, Form, Error, FlexBox, Submit } from "./styled";

const Contact: FC = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const divElement = useRef<HTMLDivElement>(null);
  const formElement = useRef<HTMLFormElement>(null);
  const handleModal = (type: string, error?: unknown) => {
    divElement.current!.removeChild(formElement.current!);
    const aux: HTMLElement = document.createElement("h2");
    switch (type) {
      case "success":
        aux.innerHTML =
          "Gracias por tu tiempo 💚 Te responderemos a la brevedad";
        divElement.current!.append(aux);
        break;
      case "error":
        aux.innerHTML =
          "Ups, ocurrió un error inesperado 😅 Prueba nuevamente en unos minutos";
        divElement.current!.append(aux);
        // eslint-disable-next-line no-console
        console.log(error);
        break;
      default:
        break;
    }
  };

  const messageElement = useRef<HTMLDivElement>(null);
  const handleSubmit = (event: React.BaseSyntheticEvent) => {
    event.preventDefault();
    if (name === "" || email === "" || message === "") {
      if (messageElement.current !== null) {
        messageElement.current.innerHTML =
          "Por favor, completa todos los campos 😜";
      }
    } else {
      emailjs
        .sendForm(
          "emailjs",
          `${process.env.REACT_APP_EMAILJS_TEMPLATE}`,
          event.target,
          `${process.env.REACT_APP_EMAILJS_USER}`
        )
        .then(
          () => handleModal("success"),
          (error) => handleModal("error", error)
        );
    }
  };

  return (
    <Container id="Contact">
      <h2>Contacto</h2>
      <h3>Estamos para ayudarte</h3>
      <Form ref={divElement}>
        <form ref={formElement} onSubmit={(event) => handleSubmit(event)}>
          <Error ref={messageElement}></Error>
          <FlexBox>
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
          </FlexBox>
          <textarea
            placeholder="¿Cómo podemos ayudarte?"
            name="message"
            value={message}
            onChange={(event) => setMessage(event.currentTarget.value)}
          />
          <Submit type="submit" value="Send" />
        </form>
      </Form>
    </Container>
  );
};

export default Contact;

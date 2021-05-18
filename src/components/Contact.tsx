import { FC, useState, useRef } from "react";
import emailjs from "emailjs-com";

import style from "./styles/Contact.module.css";

const Contact: FC = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const divElement = useRef<HTMLDivElement>(null);
  const formElement = useRef<HTMLFormElement>(null);
  const handleModal = (arg: string, error?: unknown) => {
    divElement.current!.removeChild(formElement.current!);
    let aux: HTMLElement = document.createElement("h2");
    switch (arg) {
      case "success":
        aux.innerHTML =
          "Gracias por tu tiempo 💚 Te responderemos a la brevedad";
        divElement.current!.append(aux);
        break;
      case "error":
        aux.innerHTML =
          "Ups, ocurrió un error inesperado 😅 Prueba nuevamente en unos minutos";
        divElement.current!.append(aux);
        console.log(error);
        break;
      default:
        break;
    }
  };

  const messageElement = useRef<HTMLDivElement>(null);
  const handleSubmit = (e: React.BaseSyntheticEvent) => {
    e.preventDefault();
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
          e.target,
          `${process.env.REACT_APP_EMAILJS_USER}`
        )
        .then(
          function () {
            handleModal("success");
          },
          function (error) {
            handleModal("error", error);
          }
        );
    }
  };

  return (
    <div id="Contact" className={style.Contact}>
      <h2>Contacto</h2>
      <h3>Estamos para ayudarte</h3>
      <div
        ref={divElement}
        className={style.Contact__Content__Box__ContactForm}
      >
        <form ref={formElement} onSubmit={(e) => handleSubmit(e)}>
          <p
            ref={messageElement}
            className={style.Contact__Content__Box__ContactForm__Error}
          ></p>
          <div className={style.Contact__Content__Box__ContactForm__UserData}>
            <input
              type="text"
              placeholder="Nombre"
              name="name"
              value={name}
              onChange={(e) => setName(e.currentTarget.value)}
            />
            <input
              type="email"
              placeholder="Email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.currentTarget.value)}
            />
          </div>
          <textarea
            placeholder="¿Cómo podemos ayudarte?"
            name="message"
            value={message}
            onChange={(e) => setMessage(e.currentTarget.value)}
          />
          <input
            className={style.Contact__Content__Box__ContactForm__Submit}
            type="submit"
            value="Send"
          />
        </form>
      </div>
    </div>
  );
};

export default Contact;

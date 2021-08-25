// Import dependencies
import styled from "styled-components";

// Import assets
import { fadeInTop, zoom } from "assets/scripts/animations";

export const Container = styled.div`
  background: rgba(0, 0, 0, 0 85);
  width: 100vw;
  height: 100vh;
  position: fixed;
  left: 0;
  top: 0;
  z-index: 9;
`;

export const Modal = styled.div`
  background-color: #ffffff;
  background: radial-gradient(
      circle,
      transparent 20%,
      #ffffff 20%,
      #ffffff 80%,
      transparent 80%,
      transparent
    ),
    radial-gradient(
        circle,
        transparent 20%,
        #ffffff 20%,
        #ffffff 80%,
        transparent 80%,
        transparent
      )
      32export const 5px 32export const 5px,
    linear-gradient(#f2faf6 2export const 6px, transparent 2export const 6px) 0 -1export
      const 3px,
    linear-gradient(90deg, #f2faf6 2export const 6px, #ffffff 2export const 6px) -1export
      const 3px 0;
  background-size: 65px 65px, 65px 65px, 32export const 5px 32export const 5px,
    32export const 5px 32export const 5px;
  border-radius: 20px;
  width: 90%;
  height: fit-content;
  max-width: 600px;
  max-height: 400px;
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  margin: auto;
  display: flex;
  padding: 45px;
  h3 {
    margin-bottom: 20px;
  }
  [data-state="true"] {
    animation: fadeInTop 1s linear;
  }
  ${fadeInTop}
`;

export const ModalClose = styled.div`
  position: absolute;
  cursor: pointer;
  z-index: 1;
  top: 5px;
  right: 5px;
  width: 30px;
  height: 30px;
  line-height: 30px;
  font-size: 18px;
  border-radius: 50%;
  background-color: rgba(0, 0, 0, 0 2);
  color: #ffffff;
  font-family: "Fredoka One", cursive;
  animation: zoom 0 3s linear;
  &:hover {
    color: #000000;
    background: rgba(0, 0, 0, 0 4);
  }
  ${zoom}
`;

export const ModalContent = styled.div`
  @media only screen and (max-width: 600px) {
    max-height: 90vh;
    padding: 10px;
    overflow: scroll;
  }
`;

export const ContactInfoItem = styled.div`
  text-align: center;
  display: block;
  a {
    display: block;
    width: fit-content;
    margin-left: 1em;
    margin: 0 auto;
    color: #ffffff;
    font-weight: 900;
    background: linear-gradient(180deg, #32b772 0, #00a54f 100%);
    text-transform: uppercase;
    border: 0;
    border-radius: 5px;
    padding: 0 3em 0 8em;
    font-size: 0 8em;
    cursor: pointer;
    box-shadow: 0 0 1em 0 5em 0 rgba(0, 0, 0, 0 3);
    &:hover {
      box-shadow: 0 0 2em 0 5em 0 rgba(0, 0, 0, 0 5);
    }
  }
  p {
    margin: 1em auto;
  }
`;

export const ContactInfoIcon = styled.div`
  margin: 0 auto;
  margin-right: 1em;
  box-sizing: border-box;
  background: rgba(0, 165, 79, 0 1);
  border-radius: 50px;
  width: 30px;
  height: 30px;
  line-height: 30px;
  img {
    width: 30px;
    padding: 0 4em;
  }
`;

export const ContactModal__Content__Box = styled.div`
  display: block;
  margin: auto;
  width: 95%;
`;

export const ContactModal__Content__Contact = styled.div`
  text-align: left;
  display: flex;
  align-items: center;
  margin-bottom: 1.5em;
`;

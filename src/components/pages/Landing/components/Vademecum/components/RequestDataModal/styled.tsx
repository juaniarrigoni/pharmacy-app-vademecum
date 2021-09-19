// Import dependencies
import styled from "styled-components";

// Import assets
import { COLORS, FONT_FAMILY } from "assets/constants/styles";
import { fadeIn, zoom } from "assets/scripts/animations";

export const Container = styled.div`
  background: rgba(${COLORS.BLACK_RGB}, 0.85);
  width: 100vw;
  height: 100vh;
  position: fixed;
  left: 0;
  top: 0;
  z-index: 9;

  [data-state="true"] #request-data-modal {
    animation: fadeIn 1s linear;
  }

  ${fadeIn}
`;

export const Modal = styled.div`
  background-color: ${COLORS.WHITE};
  background: radial-gradient(
      circle,
      transparent 20%,
      ${COLORS.WHITE} 20%,
      ${COLORS.WHITE} 80%,
      transparent 80%,
      transparent
    ),
    radial-gradient(
        circle,
        transparent 20%,
        ${COLORS.WHITE} 20%,
        ${COLORS.WHITE} 80%,
        transparent 80%,
        transparent
      )
      32.5px 32.5px,
    linear-gradient(${COLORS.PRIMARY_LIGHTEST} 2.6px, transparent 2.6px) 0 -1.3px,
    linear-gradient(
        90deg,
        ${COLORS.PRIMARY_LIGHTEST} 2.6px,
        ${COLORS.WHITE} 2.6px
      ) -1.3px 0;
  background-size: 65px 65px, 65px 65px, 32.5px 32.5px, 32.5px 32.5px;
  border-radius: 20px;
  width: 90%;
  height: 90%;
  max-width: 550px;
  max-height: 350px;
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  margin: auto;
  display: flex;
  padding: 20px;
`;

export const ModalClose = styled.span`
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
  background-color: rgba(${COLORS.BLACK_RGB}, 0.2);
  color: ${COLORS.WHITE};
  font-family: ${FONT_FAMILY.PRIMARY};
  animation: zoom 0.3s linear;

  &:hover {
    color: #000000;
    background: rgba(${COLORS.BLACK_RGB}, 0.4);
  }

  ${zoom}
`;

export const Content = styled.div`
  display: block;
  margin: auto;
`;

export const Form = styled.form`
  max-width: 450px;
  width: 95%;
  margin: 20px auto 0;
  padding: 0px;

  p {
    font-size: 0.8em;
    margin-top: 0.5em;
  }
`;

export const Input = styled.input`
  display: block;
  border: 0px;
  width: 100%;
  color: ${COLORS.BLACK};
  overflow: hidden;
  box-shadow: 0 2.5px 10px -2.5px rgba(${COLORS.BLACK_RGB}, 0.15);
  border-radius: 15px;
  position: relative;
  text-align: center;
  padding: 1em;
  margin: 0px;
  background: ${COLORS.WHITE};
  font-weight: bold;
  cursor: pointer;

  :hover,
  :focus {
    box-shadow: 0 5px 15px -2.5px rgba(${COLORS.BLACK_RGB}, 0.3);
  }
`;

export const Submit = styled.input`
  color: ${COLORS.WHITE};
  font-weight: 900;
  background: linear-gradient(
    180deg,
    ${COLORS.PRIMARY_LIGHTER} 0,
    ${COLORS.PRIMARY} 100%
  );
  text-transform: uppercase;
  border: 0;
  border-radius: 15px;
  padding: 1em 1.5em;
  cursor: pointer;
  box-shadow: 0 0 10px 0 rgba(${COLORS.BLACK_RGB}, 0.3);
  display: block;
  width: fit-content;
  margin: 20px auto 0;

  :hover {
    box-shadow: 0 5px 15px 0 rgba(${COLORS.BLACK_RGB}, 0.5);
  }
`;

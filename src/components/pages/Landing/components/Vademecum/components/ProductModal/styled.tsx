// Import dependencies
import styled from "styled-components";

// Import assets
import { COLORS, FONT_FAMILY } from "assets/constants/styles";
import { fadeInTop, zoom } from "assets/scripts/animations";

export const Container = styled.div`
  background: rgba(${COLORS.BLACK_RGB}, 0.85);
  width: 100vw;
  height: 100vh;
  position: fixed;
  left: 0;
  top: 0;
  z-index: 9;

  [data-state="true"] #product-modal {
    animation: fadeInTop 1s linear;
  }
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
  height: fit-content;
  max-width: 800px;
  max-height: 80vh;
  padding: 5rem;
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  margin: auto;
  display: flex;

  ${fadeInTop}
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
    color: ${COLORS.BLACK};
    background: rgba(${COLORS.BLACK_RGB}, 0.4);
  }

  ${zoom}
`;

export const Content = styled.div`
  display: block;
  margin: auto;
`;

export const Formula = styled.textarea`
  display: block;
  color: ${COLORS.BLACK};
  line-height: 1.5em;
  font-weight: 700;
  border: 0;
  width: 90%;
  background: linear-gradient(90deg, ${COLORS.WHITE} 11px, transparent 1%)
      center,
    linear-gradient(${COLORS.WHITE} 11px, transparent 1%) center,
    ${COLORS.WHITE};
  background-size: 12px 12px;
  box-shadow: 0 0 5px 0 rgba(${COLORS.PRIMARY_RGB}, 0.1);
  text-align: center;
  cursor: pointer;
  border-radius: 20px;
  padding: 1em;
  margin: 20px auto;

  &:hover,
  &:focus {
    background: linear-gradient(90deg, ${COLORS.WHITE} 11px, transparent 1%)
        center,
      linear-gradient(${COLORS.WHITE} 11px, transparent 1%) center,
      ${COLORS.PRIMARY};
    background-size: 12px 12px;
    box-shadow: 0 0 15px -5px rgba(${COLORS.PRIMARY_RGB}, 0.5);
  }
`;
export const ButtonsWrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
`;

export const Button = styled.a`
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
  margin: 20px;

  &:hover {
    box-shadow: 0 5px 15px 0 rgba(${COLORS.BLACK_RGB}, 0.5);
  }

  span {
    display: block;
    font-size: 0.75em;
    color: ${COLORS.WHITE};
  }
`;

export const Notes = styled.div`
  margin-top: -10px;

  p {
    font-size: 10px;
  }
`;

export const User = styled.div`
  cursor: pointer;
  position: relative;
  cursor: pointer;
  width: fit-content;
  margin: 0 auto;

  &:hover #product-modal-username {
    background: rgba(${COLORS.PRIMARY_RGB}, 0.1);
  }

  &:hover #product-modal-username-icon {
    background: rgba(${COLORS.PRIMARY_RGB}, 0.3);
  }
`;

export const UserName = styled.p`
  cursor: pointer;
  display: inline-block;
  font-weight: bold;
  font-size: 12px;
  width: fit-content;
  padding: 2px 10px;
  border-bottom: 1px dashed ${COLORS.PRIMARY};
  border-radius: 50px;
  min-width: 100px;
  min-height: 1rem;
`;

export const Icon = styled.div`
  cursor: pointer;
  position: absolute;
  box-sizing: border-box;
  border-radius: 50px;
  width: 20px;
  height: 20px;
  top: 0;
  right: -25px;

  img {
    cursor: pointer;
    width: 20px;
    padding: 6px;
  }
`;

export const Tabs = styled.div`
  display: flex;
`;

export const TabContainer = styled.div`
  position: relative;
  padding: 20px;
  display: block;
  max-width: 300px;
  width: 100%;
`;

export const Tab = styled.div`
  color: ${COLORS.BLACK};
  cursor: pointer;
  overflow: hidden;
  box-shadow: 0 2.5px 10px -2.5px rgba(${COLORS.BLACK_RGB}, 0.15);
  border-radius: 15px;

  &:hover {
    box-shadow: 0 5px 15px -2.5px rgba(${COLORS.BLACK_RGB}, 0.3);
  }

  h4 {
    cursor: pointer;
    position: relative;
    text-align: center;
    display: flex;
    justify-content: center;
    padding: 1em;
    background: ${COLORS.WHITE};
    font-weight: bold;
    cursor: pointer;

    &:after {
      position: absolute;
      right: 1em;
      content: "\\276F";
      width: 1em;
      height: 1em;
      text-align: center;
      transition: all 0.35s;
    }
  }

  &.active #tab-label:after {
    transform: rotate(90deg);
  }

  &.active #tab-content {
    max-height: 30vh;
    padding: 1em;
  }
`;

export const TabContent = styled.div`
  max-height: 0;
  padding: 0 1em;
  background: ${COLORS.WHITE};
  transition: all 0.3s;
  overflow: auto;
`;

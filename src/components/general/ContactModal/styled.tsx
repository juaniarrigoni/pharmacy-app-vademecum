// Import dependencies
import styled from "styled-components";

// Import assets
import { COLORS, FONT_FAMILY, BREAKPOINTS } from "assets/constants/styles";
import { fadeInTop, zoom } from "assets/scripts/animations";

export const Container = styled.div`
  background: rgba(${COLORS.BLACK_RGB}, 0.85);
  width: 100vw;
  height: 100vh;
  position: fixed;
  left: 0;
  top: 0;
  z-index: 9;
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
    linear-gradient(${COLORS.PRIMARY_LIGHTEST} 2.6px, transparent 2.6px) 0-1.3px,
    linear-gradient(
        90deg,
        ${COLORS.PRIMARY_LIGHTEST} 2.6px,
        ${COLORS.WHITE} 2.6px
      ) -1.3px 0;
  background-size: 65px 65px, 65px 65px, 32.5px 32.5px, 32.5px 32.5px;
  border-radius: 20px;
  max-width: 90vw;
  max-height: 90vh;
  width: fit-content;
  height: fit-content;
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  margin: auto;
  display: flex;
  justify-content: center;
  align-items: center;
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

export const ModalContent = styled.div``;

export const ContentBox = styled.div`
  width: fit-content;
`;

export const ContactInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-content: flex-start;
  justify-content: center;
  align-items: flex-start;
  flex-wrap: nowrap;
  width: fit-content;
`;

export const ContactInfoItem = styled.div`
  text-align: left;
  display: flex;
  align-items: center;
  margin-bottom: 1.5rem;

  a {
    display: block;
    width: fit-content;
    margin: 0 auto 0 1rem;
    color: ${COLORS.WHITE};
    font-weight: 900;
    background: linear-gradient(180deg, #32b772 0, #00a54f 100%);
    text-transform: uppercase;
    border: 0;
    border-radius: 5px;
    padding: 0.3rem 0.8rem;
    font-size: 0.8rem;
    cursor: pointer;
    box-shadow: 0 0.1rem 0.5rem 0 rgba(${COLORS.BLACK_RGB}, 0.3);

    &:hover {
      box-shadow: 0 0.2rem 0.5rem 0 rgba(${COLORS.BLACK_RGB}, 0.5);
    }
  }

  p {
    margin: 1rem 0;
  }

  @media only screen and (max-width: ${BREAKPOINTS.mobile}) {
    text-align: left;
    flex-wrap: wrap;

    .icon {
      width: 10%;
      margin-right: 5%;
    }

    p {
      text-align: left;
      width: 85%;
    }

    a {
      margin: 0 auto;
    }
  }
`;

export const ContactInfoIcon = styled.div`
  margin: 0 auto;
  margin-right: 1rem;
  box-sizing: border-box;
  background: rgba(0, 165, 79, 0.1);
  border-radius: 50px;
  width: 30px;
  height: 30px;
  line-height: 30px;

  img {
    width: 30px;
    padding: 0.4rem;
  }
`;

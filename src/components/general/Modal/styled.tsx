// Import dependencies
import styled from "styled-components";

// Import assets
import { COLORS, MEDIA_QUERIES } from "assets/constants/styles";
import { fadeInTop, zoom } from "assets/scripts/animations";

export const Container = styled.div`
  z-index: 9;
  width: 100vw;
  height: 100vh;
  position: fixed;
  left: 0;
  top: 0;

  [data-state="true"] #modal {
    animation: fadeInTop 1s linear;
  }
`;

export const Overlay = styled.div`
  z-index: 8;
  background: rgba(${COLORS.BLACK_RGB}, 0.85);
  width: 100vw;
  height: 100vh;
  position: fixed;
  left: 0;
  top: 0;
`;

export const Box = styled.div`
  z-index: 10;
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
  padding: 5%;
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  margin: auto;
  display: flex;
  max-width: 800px;
  max-height: 80vh;

  &[data-style-fit-content="true"] {
    width: fit-content;
    height: fit-content;
  }

  ${MEDIA_QUERIES.MOBILE} {
    max-width: 90vw;
    max-height: 90vh;
  }

  ${fadeInTop};
`;

export const Close = styled.span`
  position: absolute;
  cursor: pointer;
  top: 5px;
  right: 5px;
  width: 30px;
  height: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  background-color: rgba(${COLORS.BLACK_RGB}, 0.2);
  animation: zoom 0.3s linear;

  &:hover {
    background: rgba(${COLORS.BLACK_RGB}, 0.4);
  }

  * {
    cursor: pointer;
  }

  svg {
    width: 12px;
    height: 12px;
  }

  ${zoom}
`;

export const Content = styled.div`
  display: block;
  width: 100%;
  margin: auto;

  > *:not(:last-child) {
    margin-bottom: 20px;
  }
`;

// Import dependencies
import styled from "styled-components";

// Import assets
import { COLORS, BOX_SHADOW, BORDER_RADIUS } from "assets/constants/styles";
import { heartBeat } from "assets/scripts/animations";

export const OpenCartButton = styled.button`
  display: block;
  cursor: pointer;
  position: fixed;
  bottom: 5vw;
  left: 5vw;
  width: 80px;
  height: 80px;
  padding: 20px;
  background: rgba(${COLORS.WHITE_RGB}, 0.9);
  box-shadow: ${BOX_SHADOW.SQUARE};
  border-radius: ${BORDER_RADIUS.SQUARE};
  animation: heartBeat 2.5s ease-out infinite;

  * {
    cursor: pointer;
  }

  &:hover {
    animation: none;
    box-shadow: ${BOX_SHADOW.SQUARE_HOVER};
    svg {
      transform: scale(1.1);
    }
  }

  ${heartBeat}
`;

// Import dependencies
import styled from "styled-components";

// Import assets
import { COLORS } from "constants/styles";

export const Container = styled.div`
  max-width: 95%;
  position: relative;
  margin: auto;
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
    linear-gradient(${COLORS.GREEN_WHITE} 2.6px, transparent 2.6px) 0 -1.3px,
    linear-gradient(90deg, ${COLORS.GREEN_WHITE} 2.6px, ${COLORS.WHITE} 2.6px) -1.3px
      0;
  background-size: 65px 65px, 65px 65px, 32.5px 32.5px, 32.5px 32.5px;
`;

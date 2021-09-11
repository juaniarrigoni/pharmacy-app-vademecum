// Import dependencies
import styled from "styled-components";

// Import assets
import { COLORS, FONT_FAMILY } from "constants/styles";
import { zoom } from "assets/scripts/animations";

export const Container = styled.div`
  position: absolute;
  z-index: 1;
  top: 5px;
  right: 5px;
  width: 30px;
  height: 30px;
  line-height: 30px;
  font-size: 18px;
  border-radius: 50%;
  background-color: ${COLORS.PRIMARY};
  color: ${COLORS.WHITE};
  font-family: ${FONT_FAMILY.PRIMARY};
  animation: zoom 0.3s linear;

  ${zoom}
`;

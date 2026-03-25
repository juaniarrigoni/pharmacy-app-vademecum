// Import dependencies
import styled from "styled-components";

// Import assets
import { COLORS } from "assets/constants/styles";

export const ProductFound = styled.p`
  cursor: pointer;
  box-shadow: inset 0 0 0.2em 0 rgba(${COLORS.BLACK_RGB}, 0.3);
  margin-bottom: 0.75em;
  padding: 0.5em;
  border-radius: 10px;

  &:hover,
  &:focus {
    box-shadow: inset 0 0 0.8em 0 rgba(${COLORS.PRIMARY_RGB}, 0.3);
  }
`;

export const NotFound = styled.p`
  cursor: pointer;
  margin-bottom: 0.75em;
  padding: 0.5em;
  border-radius: 10px;
`;

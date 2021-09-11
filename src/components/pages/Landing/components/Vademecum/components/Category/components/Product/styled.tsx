// Import dependencies
import styled from "styled-components";

// Import assets
import { COLORS, FONT_FAMILY } from "constants/styles";
import { zoom } from "assets/scripts/animations";
import { EDOM } from "constants";

export const ProductFound = styled.p`
  cursor: pointer;
  box-shadow: inset 0 0 0.2em 0 rgba(0, 0, 0, 0.3);
  margin-bottom: 0.75em;
  padding: 0.5em;
  border-radius: 10px;

  &:hover,
  &:focus {
    box-shadow: inset 0 0 0.8em 0 rgba(0, 165, 79, 0.3);
  }
`;

export const NotFound = styled.p`
  cursor: pointer;
  margin-bottom: 0.75em;
  padding: 0.5em;
  border-radius: 10px;
`;

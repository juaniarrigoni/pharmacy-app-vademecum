// Import dependencies
import styled from "styled-components";

// Import assets
import { BUTTON_STYLE, COLORS } from "assets/constants/styles";

export const Content = styled.div`
  display: block;
  margin: auto;

  h2 {
    max-width: 300px;
  }

  .loader {
    margin: 30px auto 0;
  }
`;

export const FinishAnchor = styled.a`
  ${BUTTON_STYLE}
  margin: 30px auto 0;

  span {
    display: block;
    font-size: 0.75em;
    color: ${COLORS.WHITE};
  }
`;

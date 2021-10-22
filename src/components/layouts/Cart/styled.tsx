// Import dependencies
import styled from "styled-components";

// Import assets
import { BUTTON_STYLE, COLORS } from "assets/constants/styles";

export const Container = styled.div`
  display: block;
  width: 100%;

  > svg {
    width: 40px;
    height: 40px;
    margin-bottom: 20px;
  }
`;

export const EmptyCart = styled.div`
  a {
    margin-top: 20px;
  }
`;

export const EmptyCartButton = styled.a`
  ${BUTTON_STYLE}
`;

export const ProductList = styled.div`
  max-height: 30vh;
  overflow: scroll;
  & > div:not(:last-child) {
    border-bottom: 0.3px solid rgba(${COLORS.BLACK_RGB}, 0.3);
  }
`;

export const ButtonsWrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
`;

export const FinishButton = styled.button`
  ${BUTTON_STYLE}
  margin: 20px;

  span {
    display: block;
    font-size: 0.75em;
    color: ${COLORS.WHITE};
  }
`;

export const FinishAnchor = styled.a`
  ${BUTTON_STYLE}
  margin: 20px;

  span {
    display: block;
    font-size: 0.75em;
    color: ${COLORS.WHITE};
  }
`;

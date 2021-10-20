// Import dependencies
import styled from "styled-components";

// Import assets
import { COLORS } from "assets/constants/styles";

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

export const buttonStyle = `
  cursor: pointer;
  color: ${COLORS.WHITE};
  display: block;
  width: fit-content;
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
  box-shadow: 0 0 10px 0 rgba(${COLORS.BLACK_RGB}, 0.3);
  display: block;
  margin: 0 auto;

  &:hover {
    box-shadow: 0 5px 15px 0 rgba(${COLORS.BLACK_RGB}, 0.5);
  }

  * {
    cursor: pointer;
  }
`;

export const EmptyCartButton = styled.a`
  ${buttonStyle}
`;

export const ProductList = styled.div`
  max-height: 30vh;
  overflow: scroll;
  & div:not(:last-child) {
    border-bottom: 0.3px solid rgba(${COLORS.BLACK_RGB}, 0.3);
  }
`;

export const ButtonsWrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
`;

export const FinishButton = styled.button`
  ${buttonStyle}
  margin: 20px;

  span {
    display: block;
    font-size: 0.75em;
    color: ${COLORS.WHITE};
  }
`;

// Import dependencies
import styled from "styled-components";

// Import assets
import { BOX_SHADOW, COLORS, MEDIA_QUERIES } from "assets/constants/styles";

export const Container = styled.div`
  position: relative;
  max-width: 450px;
  width: 100%;
  margin: 0 auto;
  padding: 1rem;

  ${MEDIA_QUERIES.MOBILE} {
    padding: 0.5rem;
  }

  svg {
    fill: ${COLORS.PLACEHOLDER};
    position: absolute;
    width: 1.25rem;
    right: 3rem;
    top: 50%;
    transform: translateY(-50%);
  }
`;

export const Input = styled.input`
  display: block;
  border: 0px;
  width: 100%;
  color: ${COLORS.BLACK};
  border-radius: 15px;
  text-align: center;
  padding: 1.5rem;
  margin: 0px;
  background: ${COLORS.WHITE};
  font-weight: bold;
  cursor: pointer;
  -webkit-appearance: none;
  box-shadow: ${BOX_SHADOW.SQUARE};

  :hover,
  :focus {
    box-shadow: ${BOX_SHADOW.SQUARE_HOVER};
  }
`;

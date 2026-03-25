// Import dependencies
import styled from "styled-components";

// Import assets
import { COLORS } from "assets/constants/styles";

export const Container = styled.div`
  padding: 10vh 0;

  h3 {
    margin-bottom: 20px;
  }
`;

export const List = styled.div`
  max-width: 1500px;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
`;

const activoStyles = `
font-size: 0.9rem;
font-weight: 700;
display: block;
background: ${COLORS.WHITE};
margin: 0.75rem;
padding: 0.5rem 1rem;
width: fit-content;
border-radius: 10px;
`;

export const ActivoText = styled.p`
  ${activoStyles}
  cursor: default;
  box-shadow: inset 0 0 0.2rem 0 rgba(${COLORS.BLACK_RGB}, 0.3);
`;

export const ActivoButton = styled.a`
  ${activoStyles}
  cursor: pointer;
  position: relative;
  box-shadow: inset 0 0 0.2rem 0 rgba(${COLORS.BLACK_RGB}, 0.3);

  * {
    cursor: pointer;
  }

  svg {
    position absolute;
    width: 1.25rem;
    padding: 0.25rem;
    top: -0.5rem;
    right: -0.5rem;
    height: auto;
    background: ${COLORS.WHITE};
    border-radius: 50%;
    box-shadow: inset 0 0 0.2rem 0 rgba(${COLORS.BLACK_RGB}, 0.3);
  }

  &:hover {
    box-shadow:
      inset 0 0 0.2rem 0 rgba(${COLORS.BLACK_RGB}, 0.3),
      0 0.1rem 0.2rem 0 rgba(${COLORS.BLACK_RGB}, 0.3);
    transform: translate(-0.1rem,-0.1rem);

    > svg {
      box-shadow: inset 0 0 0.5rem 0 rgba(${COLORS.PRIMARY_RGB}, 0.8);
    }
  }
`;

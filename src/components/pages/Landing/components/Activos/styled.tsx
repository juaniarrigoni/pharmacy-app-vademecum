// Import dependencies
import styled from "styled-components";

// Import assets
import { COLORS } from "constants/styles";

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
cursor: default;
font-size: 0.9em;
font-weight: 700;
display: block;
background: ${COLORS.WHITE};
box-shadow: inset 0 0 0.2em 0 rgba(${COLORS.BLACK_RGB}, 0.3);
margin: 0.75em;
padding: 0.5em 1em;
width: fit-content;
border-radius: 10px;
`;

export const ActivoText = styled.p`
  ${activoStyles}
`;

export const ActivoButton = styled.a`
  ${activoStyles}
  font-weight: 900;
  cursor: pointer;
  &:hover {
    box-shadow: inset 0 0 0.8em 0 rgba(${COLORS.PRIMARY_RGB}, 0.3);
  }
`;

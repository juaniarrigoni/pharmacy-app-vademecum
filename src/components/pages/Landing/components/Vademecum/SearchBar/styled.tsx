// Import dependencies
import styled from "styled-components";

// Import assets
import { COLORS } from "constants/styles";

export const Container = styled.div`
  width: 100%;
`;

export const Form = styled.form`
  max-width: 450px;
  width: 100%;
  margin: 0 auto;
  padding: 20px;
`;

export const Input = styled.input`
  display: block;
  border: 0px;
  width: 100%;
  color: #000;
  overflow: hidden;
  box-shadow: 0 2.5px 10px -2.5px rgba(${COLORS.BLACK_RGB}, 0.15);
  border-radius: 15px;
  position: relative;
  text-align: center;
  padding: 1em;
  margin: 0px;
  background: ${COLORS.WHITE};
  font-weight: bold;
  cursor: pointer;

  :hover,
  :focus {
    box-shadow: 0 5px 15px -2.5px rgba(${COLORS.BLACK_RGB}, 0.3);
  }
`;

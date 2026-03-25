// Import dependencies
import styled from "styled-components";

// Import assets
import { COLORS } from "assets/constants/styles";

export const Content = styled.div`
  display: block;
  margin: auto;
`;

export const Form = styled.form`
  max-width: 450px;
  width: 95%;
  margin: 20px auto 0;
  padding: 0px;

  p {
    font-size: 0.8em;
    margin-top: 0.5em;
  }
`;

export const Input = styled.input`
  display: block;
  border: 0px;
  width: 100%;
  color: ${COLORS.BLACK};
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

export const Submit = styled.input`
  color: ${COLORS.WHITE};
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
  cursor: pointer;
  box-shadow: 0 0 10px 0 rgba(${COLORS.BLACK_RGB}, 0.3);
  display: block;
  width: fit-content;
  margin: 20px auto 0;

  :hover {
    box-shadow: 0 5px 15px 0 rgba(${COLORS.BLACK_RGB}, 0.5);
  }
`;

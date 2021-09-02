// Import dependencies
import styled from "styled-components";

// Import assets
import { COLORS } from "constants/styles";

export const Container = styled.div`
  position: relative;
  padding: 10vh 0 20vh;

  h3 {
    margin-bottom: 20px;
  }

  h2,
  h3,
  p {
    color: ${COLORS.BLACK};
  }
`;

export const Form = styled.div`
  background: linear-gradient(90deg, ${COLORS.PRIMARY} 21px, transparent 1%)
      center,
    linear-gradient(${COLORS.PRIMARY} 21px, transparent 1%) center,
    ${COLORS.WHITE};
  background-size: 22px 22px;
  display: flex;
  flex-direction: column;
  text-align: center;
  vertical-align: middle;
  box-shadow: 0 0 15px 0 rgba(${COLORS.BLACK_RGB}, 0.3);
  max-width: 600px;
  padding: 8vh;
  margin: 0 auto;
  border-radius: 20px;

  h2 {
    margin-bottom: 0px;
    color: ${COLORS.WHITE};
  }

  input,
  textarea {
    cursor: text;
    border-radius: 10px;
    border: 0;
    font-weight: 700;
    padding: 10px;
    margin: 0 auto 15px;
    box-shadow: 0 0 5px 0 rgba(${COLORS.BLACK_RGB}, 0.2);
    width: 100%;
    color: ${COLORS.BLACK};
    background: linear-gradient(90deg, ${COLORS.WHITE} 21px, transparent 1%)
        center,
      linear-gradient(${COLORS.WHITE} 21px, transparent 1%) center,
      ${COLORS.WHITE};
    background-size: 22px 22px;

    &:focus {
      box-shadow: 0 0 5px 0 rgba(${COLORS.VIOLET_RGB}, 0.8);
    }
  }

  @media only screen and (min-width: 801px) {
    input {
      width: 49% !important;
    }
  }

  textarea {
    width: 100%;
  }
`;

export const Error = styled.p`
  color: ${COLORS.WHITE};
  font-weight: 900;
  margin-bottom: 2rem;
`;

export const FlexBox = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;

export const Submit = styled.input`
  cursor: pointer;
  display: block;
  width: fit-content;
  margin: 10px auto 0;
  padding: 10px 30px;
  border-radius: 10px;
  background: transparent;
  font-weight: 700;
  letter-spacing: 1px;
  color: ${COLORS.WHITE};
  border: 2px solid ${COLORS.WHITE};
  box-shadow: 0 6px 10px -3px rgba(${COLORS.VIOLET_RGB}, 0.5);
  text-transform: uppercase;
  background: linear-gradient(90deg, ${COLORS.PRIMARY} 21px, transparent 1%)
      center,
    linear-gradient(${COLORS.PRIMARY} 21px, transparent 1%) center,
    ${COLORS.WHITE};
  background-size: 22px 22px;

  &:hover {
    color: ${COLORS.PRIMARY};
    background: linear-gradient(90deg, ${COLORS.WHITE} 21px, transparent 1%)
        center,
      linear-gradient(${COLORS.WHITE} 21px, transparent 1%) center,
      ${COLORS.PRIMARY};
    background-size: 22px 22px;
  }
`;

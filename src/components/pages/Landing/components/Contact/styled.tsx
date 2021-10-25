// Import dependencies
import styled from "styled-components";

// Import assets
import { COLORS, MEDIA_QUERIES } from "assets/constants/styles";

export const Container = styled.div`
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

export const FormWrapper = styled.div`
  background: linear-gradient(90deg, ${COLORS.PRIMARY} 21px, transparent 1%)
      center,
    linear-gradient(${COLORS.PRIMARY} 21px, transparent 1%) center,
    ${COLORS.WHITE};
  background-size: 22px 22px;
  display: flex;
  justify-content: space-between;
  box-shadow: 0 0 15px 0 rgba(${COLORS.BLACK_RGB}, 0.3);
  max-width: 600px;
  padding: 3rem;
  margin: 0 auto;
  border-radius: 20px;
  text-align: center;
`;

export const Form = styled.form`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;

  > *:not(:last-child) {
    margin-bottom: 1rem;
  }

  input {
    width: 48%;

    ${MEDIA_QUERIES.MOBILE} {
      width: 100%;
    }
  }

  textarea {
    width: 100%;
  }

  input,
  textarea {
    cursor: pointer;
    border-radius: 0.5rem;
    font-weight: 700;
    padding: 1rem;
    color: ${COLORS.BLACK};
    background: linear-gradient(90deg, ${COLORS.WHITE} 11px, transparent 1%)
        center,
      linear-gradient(${COLORS.WHITE} 11px, transparent 1%) center,
      ${COLORS.WHITE};
    background-size: 12px 12px;
    box-shadow: 0 2.5px 10px -2.5px rgba(${COLORS.BLACK_RGB}, 0.15);

    &:hover,
    &:focus {
      background: linear-gradient(90deg, ${COLORS.WHITE} 11px, transparent 1%)
          center,
        linear-gradient(${COLORS.WHITE} 11px, transparent 1%) center,
        ${COLORS.PRIMARY};
      background-size: 12px 12px;
      box-shadow: 0 5px 15px -2.5px rgba(${COLORS.BLACK_RGB}, 0.3);
    }
  }
`;

export const Error = styled.h4`
  color: ${COLORS.WHITE};
  margin: auto;
  padding-bottom: 1rem;
  text-shadow: 0 0.1rem 0.1rem rgba(${COLORS.BLACK_RGB}, 0.2);
`;

export const Submit = styled.input`
  display: block;
  width: fit-content;
  margin: 0 auto;
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

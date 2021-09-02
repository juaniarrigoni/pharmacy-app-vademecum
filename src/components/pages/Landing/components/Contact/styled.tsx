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
    color: #000000;
  }
`;

export const Form = styled.div`
  background: linear-gradient(90deg, #00a54f 21px, transparent 1%) center,
    linear-gradient(#00a54f 21px, transparent 1%) center, #ffffff;
  background-size: 22px 22px;
  display: flex;
  flex-direction: column;
  text-align: center;
  vertical-align: middle;
  box-shadow: 0 0 15px 0 rgba(0, 0, 0, 0.3);
  max-width: 600px;
  padding: 8vh;
  margin: 0 auto;
  border-radius: 20px;

  h2 {
    margin-bottom: 0px;
    color: #ffffff;
  }

  input,
  textarea {
    cursor: text;
    border-radius: 10px;
    border: 0;
    font-weight: 700;
    padding: 10px;
    margin: 0 auto 15px;
    box-shadow: 0 0 5px 0 rgb(0, 0, 0, 0.2);
    width: 100%;
    color: #000000;
    background: linear-gradient(90deg, #ffffff 21px, transparent 1%) center,
      linear-gradient(#ffffff 21px, transparent 1%) center, #ffffff;
    background-size: 22px 22px;

    &:focus {
      box-shadow: 0 0 5px 0 rgb(65, 23, 171, 0.8);
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
  color: #ffffff;
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
  color: #ffffff;
  border: 2px solid #ffffff;
  box-shadow: 0 6px 10px -3px rgba(65, 23, 171, 0.5);
  text-transform: uppercase;
  background: linear-gradient(90deg, #00a54f 21px, transparent 1%) center,
    linear-gradient(#00a54f 21px, transparent 1%) center, #ffffff;
  background-size: 22px 22px;

  &:hover {
    color: #00a54f;
    background: linear-gradient(90deg, #ffffff 21px, transparent 1%) center,
      linear-gradient(#ffffff 21px, transparent 1%) center, #00a54f;
    background-size: 22px 22px;
  }
`;

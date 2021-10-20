// Import dependencies
import styled from "styled-components";

// Import assets
import { COLORS } from "assets/constants/styles";

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-content: center;
  align-items: center;
`;

export const Button = styled.button`
  cursor: pointer;
  box-sizing: border-box;
  border-radius: 50px;
  width: 2rem;
  height: 2rem;
  margin: 0.5rem;
  display: flex;
  justify-content: center;
  align-content: center;
  align-items: center;
  background-color: ${COLORS.WHITE};

  > svg {
    fill: ${COLORS.BLACK}
    cursor: pointer;
    width: 1rem;
    height: 1rem;
  }

  * {
    cursor: pointer;
  }

  &:hover {
    background: ${(props) =>
      !props.delete
        ? `rgba(${COLORS.BLACK_RGB}, 0.2)`
        : `rgba(${COLORS.RED_RGB}, 0.2)`};
  }
`;

export const ProductName = styled.p`
  flex-grow: 1;
  text-align: left;
`;

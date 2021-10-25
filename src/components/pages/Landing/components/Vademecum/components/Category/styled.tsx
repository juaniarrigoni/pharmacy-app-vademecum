// Import dependencies
import styled from "styled-components";

// Import assets
import { COLORS, MEDIA_QUERIES } from "assets/constants/styles";

export const Container = styled.div`
  position: relative;
  padding: 1rem;
  display: block;
  max-width: 450px;
  width: 100%;

  ${MEDIA_QUERIES.MOBILE} {
    padding: 0.5rem;
  }
`;

export const Tab = styled.div`
  color: ${COLORS.BLACK};
  cursor: pointer;
  overflow: hidden;
  box-shadow: 0 2.5px 10px -2.5px rgba(${COLORS.BLACK_RGB}, 0.15);
  border-radius: 15px;

  &:hover {
    box-shadow: 0 5px 15px -2.5px rgba(${COLORS.BLACK_RGB}, 0.3);
  }

  h4 {
    cursor: pointer;
    position: relative;
    text-align: center;
    display: flex;
    justify-content: center;
    padding: 1.5rem;
    background: ${COLORS.WHITE};
    font-weight: bold;
    cursor: pointer;

    &:after {
      position: absolute;
      right: 1em;
      content: "\\276F";
      width: 1rem;
      height: 1rem;
      text-align: center;
      transition: all 0.35s;
    }
  }

  &.active #category-label:after {
    transform: rotate(90deg);
  }

  &.active #category-content {
    max-height: 30vh;
    padding: 1em;
  }
`;

export const Content = styled.div`
  max-height: 0;
  padding: 0 1em;
  background: ${COLORS.WHITE};
  transition: all 0.3s;
  overflow: auto;
`;

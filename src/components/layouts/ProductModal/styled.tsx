// Import dependencies
import styled from "styled-components";

// Import assets
import { COLORS, MEDIA_QUERIES } from "assets/constants/styles";

export const Content = styled.div`
  display: block;
  width: 100%;
  margin: auto;

  > *:not(:last-child) {
    margin-bottom: 20px;
  }
`;

export const Formula = styled.textarea`
  display: block;
  color: ${COLORS.BLACK};
  line-height: 1.5em;
  font-weight: 700;
  border: 0;
  width: 100%;
  background: linear-gradient(90deg, ${COLORS.WHITE} 11px, transparent 1%)
      center,
    linear-gradient(${COLORS.WHITE} 11px, transparent 1%) center,
    ${COLORS.WHITE};
  background-size: 12px 12px;
  box-shadow: 0 2.5px 10px -2.5px rgba(${COLORS.BLACK_RGB}, 0.15);
  text-align: center;
  cursor: pointer;
  border-radius: 20px;
  padding: 1.5rem;
  margin: 0 auto;

  &:hover,
  &:focus {
    background: linear-gradient(90deg, ${COLORS.WHITE} 11px, transparent 1%)
        center,
      linear-gradient(${COLORS.WHITE} 11px, transparent 1%) center,
      ${COLORS.PRIMARY};
    background-size: 12px 12px;
    box-shadow: 0 5px 15px -2.5px rgba(${COLORS.BLACK_RGB}, 0.3);
  }
`;

export const Button = styled.button`
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
  margin: 0 auto;

  &:hover {
    box-shadow: 0 5px 15px 0 rgba(${COLORS.BLACK_RGB}, 0.5);
  }
`;

export const Tabs = styled.div`
  display: flex;
  justify-content: space-between;
  align-content: center;
  align-items: top;

  ${MEDIA_QUERIES.MOBILE} {
    flex-wrap: wrap;
  }
`;

export const TabContainer = styled.div`
  position: relative;
  display: block;
  width: 48%;

  ${MEDIA_QUERIES.MOBILE} {
    width: 100%;
    padding: 0 0 20px 0;
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
    padding: 1em;
    background: ${COLORS.WHITE};
    font-weight: bold;
    cursor: pointer;

    &:after {
      position: absolute;
      right: 1em;
      content: "\\276F";
      width: 1em;
      height: 1em;
      text-align: center;
      transition: all 0.35s;
    }
  }

  &.active #tab-label:after {
    transform: rotate(90deg);
  }

  &.active #tab-content {
    max-height: 30vh;
    padding: 1em;
  }
`;

export const TabContent = styled.div`
  max-height: 0;
  padding: 0 1em;
  background: ${COLORS.WHITE};
  transition: all 0.3s;
  overflow: auto;
`;

// Import dependencies
import styled from "styled-components";

// Import assets
import { COLORS, MEDIA_QUERIES } from "assets/constants/styles";

export const Content = styled.div`
  display: block;
  width: 100%;
  margin: auto;

  > *:not(:last-child) {
    margin-bottom: 1.5rem;
  }

  .copy p {
    margin-top: 0.3rem;
  }
`;

export const FormulaWrapper = styled.div`
  position: relative;
  display: block;
`;

export const CopyButton = styled.button`
  position: absolute;
  bottom: 8px;
  right: 8px;
  background: rgba(${COLORS.WHITE_RGB}, 0.85);
  border: 1px solid rgba(${COLORS.PRIMARY_RGB}, 0.4);
  border-radius: 6px;
  color: ${COLORS.PRIMARY};
  cursor: pointer;
  font-size: 1rem;
  line-height: 1;
  padding: 4px 8px;
  transition: background 0.2s, box-shadow 0.2s;

  &:hover {
    background: ${COLORS.PRIMARY};
    color: ${COLORS.WHITE};
    box-shadow: 0 2px 8px rgba(${COLORS.PRIMARY_RGB}, 0.4);
  }
`;

export const Formula = styled.textarea`
  display: block;
  color: ${COLORS.BLACK};
  line-height: 1.25rem;
  font-weight: 700;
  border: 0;
  width: 100%;
  background: linear-gradient(90deg, ${COLORS.WHITE} 11px, transparent 1%) center,
    linear-gradient(${COLORS.WHITE} 11px, transparent 1%) center, ${COLORS.WHITE};
  background-size: 12px 12px;
  box-shadow: 0 2.5px 10px -2.5px rgba(${COLORS.BLACK_RGB}, 0.15);
  text-align: center;
  cursor: pointer;
  border-radius: 0.5rem;
  padding: 1rem;
  margin: 0 auto;

  &:hover,
  &:focus {
    background: linear-gradient(90deg, ${COLORS.WHITE} 11px, transparent 1%) center,
      linear-gradient(${COLORS.WHITE} 11px, transparent 1%) center, ${COLORS.PRIMARY};
    background-size: 12px 12px;
    box-shadow: 0 5px 15px -2.5px rgba(${COLORS.BLACK_RGB}, 0.3);
  }
`;

export const Button = styled.button`
  color: ${COLORS.WHITE};
  font-weight: 900;
  background: linear-gradient(180deg, ${COLORS.PRIMARY_LIGHTER} 0, ${COLORS.PRIMARY} 100%);
  text-transform: uppercase;
  border: 0;
  border-radius: 0.5rem;
  padding: 1em 1.5em;
  box-shadow: 0 0 10px 0 rgba(${COLORS.BLACK_RGB}, 0.3);
  display: block;
  margin: 0 auto;
  cursor: pointer;

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
    > *:not(:last-child) {
      margin-bottom: 20px;
    }
  }
`;

export const TabContainer = styled.div`
  position: relative;
  display: block;
  width: 48%;

  ${MEDIA_QUERIES.MOBILE} {
    width: 100%;
  }
`;

export const Tab = styled.div`
  color: ${COLORS.BLACK};
  cursor: pointer;
  overflow: hidden;
  box-shadow: 0 2.5px 10px -2.5px rgba(${COLORS.BLACK_RGB}, 0.15);
  border-radius: 0.5rem;

  &:hover {
    box-shadow: 0 5px 15px -2.5px rgba(${COLORS.BLACK_RGB}, 0.3);
  }

  p {
    cursor: pointer;
    position: relative;
    text-align: center;
    display: flex;
    justify-content: center;
    padding: 1rem;
    background: ${COLORS.WHITE};
    font-weight: bold;
    cursor: pointer;

    &:after {
      position: absolute;
      right: 1rem;
      content: "\276F";
      width: 1rem;
      height: 1rem;
      text-align: center;
      transition: all 0.35s;
    }
  }

  &.active #tab-label:after {
    transform: rotate(90deg);
  }

  &.active #tab-content {
    max-height: 30vh;
    padding: 0 1rem 1rem 1rem;
  }
`;

export const TabContent = styled.div`
  max-height: 0;
  background: ${COLORS.WHITE};
  transition: all 0.3s;
  overflow: auto;
`;

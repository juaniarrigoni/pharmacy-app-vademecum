// Import dependencies
import styled from "styled-components";

// Import assets
import { COLORS, MEDIA_QUERIES } from "assets/constants/styles";

export const Content = styled.div`
  display: block;
  width: 100%;
  margin: auto;

  .copy {
    text-align: center;
    margin-bottom: 1.5rem;
  }

  .copy p {
    margin-top: 0.3rem;
  }
`;

/* Two-column layout: formula left, tabs/actions right */
export const TwoColumnLayout = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1.5rem;
  align-items: start;

  ${MEDIA_QUERIES.MOBILE} {
    grid-template-columns: 1fr;
  }
`;

export const LeftColumn = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
`;

export const RightColumn = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const FormulaWrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  flex: 1;
`;

export const CopyButton = styled.button`
  margin-top: 0.5rem;
  align-self: flex-end;
  background: rgba(${COLORS.WHITE_RGB}, 0.85);
  border: 1px solid rgba(${COLORS.PRIMARY_RGB}, 0.4);
  border-radius: 6px;
  color: ${COLORS.PRIMARY};
  cursor: pointer;
  font-size: 0.875rem;
  line-height: 1;
  padding: 6px 12px;
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
  line-height: 1.4rem;
  font-weight: 700;
  border: 0;
  width: 100%;
  flex: 1;
  min-height: 220px;
  background: linear-gradient(90deg, ${COLORS.WHITE} 11px, transparent 1%) center,
    linear-gradient(${COLORS.WHITE} 11px, transparent 1%) center, ${COLORS.WHITE};
  background-size: 12px 12px;
  box-shadow: 0 2.5px 10px -2.5px rgba(${COLORS.BLACK_RGB}, 0.15);
  text-align: center;
  cursor: pointer;
  border-radius: 0.5rem;
  padding: 1rem;
  resize: vertical;

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
  width: 100%;
  cursor: pointer;

  &:hover {
    box-shadow: 0 5px 15px 0 rgba(${COLORS.BLACK_RGB}, 0.5);
  }
`;

export const Tabs = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
`;

export const TabContainer = styled.div`
  display: block;
  width: 100%;
`;

/* FIX: replaced #tab-label / #tab-content with class selectors
   to avoid duplicate-ID bug when two tabs are rendered in the same page */
export const Tab = styled.div`
  color: ${COLORS.BLACK};
  cursor: pointer;
  overflow: hidden;
  box-shadow: 0 2.5px 10px -2.5px rgba(${COLORS.BLACK_RGB}, 0.15);
  border-radius: 0.5rem;

  &:hover {
    box-shadow: 0 5px 15px -2.5px rgba(${COLORS.BLACK_RGB}, 0.3);
  }

  .tab-label {
    cursor: pointer;
    position: relative;
    text-align: center;
    display: flex;
    justify-content: center;
    padding: 1rem;
    background: ${COLORS.WHITE};
    font-weight: bold;

    &:after {
      position: absolute;
      right: 1rem;
      content: "\\276F";
      width: 1rem;
      height: 1rem;
      text-align: center;
      transition: all 0.35s;
    }
  }

  &.active .tab-label:after {
    transform: rotate(90deg);
  }

  &.active .tab-content {
    max-height: 30vh;
    padding: 0 1rem 1rem 1rem;
  }
`;

export const TabContent = styled.div`
  max-height: 0;
  background: ${COLORS.WHITE};
  transition: all 0.3s;
  overflow: auto;
  white-space: pre-wrap;
  text-align: left;
  font-size: 0.9rem;
  line-height: 1.6;
`;

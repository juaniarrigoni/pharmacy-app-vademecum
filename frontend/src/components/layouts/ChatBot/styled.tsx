// Import dependencies
import styled, { keyframes } from "styled-components";

// Import assets
import { COLORS, MEDIA_QUERIES } from "styles/theme";

const fadeIn = keyframes`
  from { opacity: 0; transform: translateY(10px); }
  to   { opacity: 1; transform: translateY(0); }
`;

export const FloatingButton = styled.button`
  position: fixed;
  bottom: 2rem;
  right: 2rem;
  width: 56px;
  height: 56px;
  border-radius: 50%;
  background: linear-gradient(180deg, ${COLORS.PRIMARY_LIGHTER} 0, ${COLORS.PRIMARY} 100%);
  color: ${COLORS.WHITE};
  font-size: 1.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 4px 16px rgba(${COLORS.BLACK_RGB}, 0.3);
  cursor: pointer;
  z-index: 1000;
  transition: transform 0.2s, box-shadow 0.2s;

  &:hover {
    transform: scale(1.08);
    box-shadow: 0 6px 20px rgba(${COLORS.BLACK_RGB}, 0.4);
  }
`;

export const Panel = styled.div`
  position: fixed;
  bottom: 5.5rem;
  right: 2rem;
  width: 360px;
  max-height: 520px;
  display: flex;
  flex-direction: column;
  background: ${COLORS.OFF_WHITE};
  border-radius: 16px;
  box-shadow: 0 8px 32px rgba(${COLORS.BLACK_RGB}, 0.2);
  overflow: hidden;
  z-index: 1000;
  animation: ${fadeIn} 0.2s ease-out;

  ${MEDIA_QUERIES.MOBILE} {
    inset: 0;
    width: 100%;
    max-height: 100%;
    border-radius: 0;
    bottom: auto;
    right: auto;
  }
`;

export const PanelHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem 1.25rem;
  background: linear-gradient(180deg, ${COLORS.PRIMARY_LIGHTER} 0, ${COLORS.PRIMARY} 100%);
  color: ${COLORS.WHITE};

  h4 {
    font-size: 1rem;
    font-weight: 700;
    color: ${COLORS.WHITE};
    text-shadow: none;
    text-align: left;
  }

  button {
    background: transparent;
    color: ${COLORS.WHITE};
    font-size: 1.2rem;
    cursor: pointer;
    line-height: 1;
    padding: 0 0.25rem;
  }
`;

export const Messages = styled.div`
  flex: 1;
  overflow-y: auto;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
`;

export const Message = styled.div<{ $isUser: boolean }>`
  max-width: 85%;
  padding: 0.6rem 0.9rem;
  border-radius: ${({ $isUser }) =>
    $isUser ? "16px 16px 4px 16px" : "16px 16px 16px 4px"};
  background: ${({ $isUser }) =>
    $isUser
      ? `linear-gradient(180deg, ${COLORS.PRIMARY_LIGHTER} 0, ${COLORS.PRIMARY} 100%)`
      : COLORS.WHITE};
  color: ${({ $isUser }) => ($isUser ? COLORS.WHITE : COLORS.BLACK)};
  align-self: ${({ $isUser }) => ($isUser ? "flex-end" : "flex-start")};
  font-size: 0.875rem;
  line-height: 1.5;
  text-align: left;
  white-space: pre-wrap;
  box-shadow: 0 2px 6px rgba(${COLORS.BLACK_RGB}, 0.1);
`;

export const TypingIndicator = styled.div`
  align-self: flex-start;
  font-size: 0.8rem;
  color: ${COLORS.BROWN};
  padding: 0.4rem 0.75rem;
  font-style: italic;
`;

export const InputRow = styled.form`
  display: flex;
  gap: 0.5rem;
  padding: 0.75rem 1rem;
  border-top: 1px solid rgba(${COLORS.PRIMARY_RGB}, 0.2);
  background: ${COLORS.OFF_WHITE};
`;

export const ChatInput = styled.input`
  flex: 1;
  padding: 0.6rem 0.9rem;
  border-radius: 20px;
  border: 1px solid rgba(${COLORS.PRIMARY_RGB}, 0.35);
  background: ${COLORS.WHITE};
  color: ${COLORS.BLACK};
  font-size: 0.875rem;
  text-align: left;

  &:focus {
    border-color: ${COLORS.PRIMARY};
    outline: none;
  }
`;

export const SendButton = styled.button`
  padding: 0.6rem 1rem;
  border-radius: 20px;
  background: ${COLORS.PRIMARY};
  color: ${COLORS.WHITE};
  font-size: 0.875rem;
  font-weight: 700;
  cursor: pointer;
  white-space: nowrap;

  &:disabled {
    opacity: 0.5;
    cursor: default;
  }

  &:hover:not(:disabled) {
    background: ${COLORS.SAGE};
  }
`;

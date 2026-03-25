// Import dependencies
import styled from 'styled-components';

// Import assets
import { COLORS, BUTTON_STYLE } from 'assets/constants/styles';

export const Tabs = styled.div`
  display: flex;
  gap: 0;
  margin-bottom: 1.5rem;
  border-bottom: 2px solid rgba(${COLORS.BLACK_RGB}, 0.1);
`;

export const Tab = styled.button<{ $active: boolean }>`
  background: none;
  border: none;
  cursor: pointer;
  padding: 0.6rem 1.25rem;
  font-size: 0.9rem;
  font-weight: ${({ $active }) => ($active ? '700' : '400')};
  color: ${({ $active }) => ($active ? COLORS.DARK_BROWN : COLORS.SAGE)};
  border-bottom: 2px solid ${({ $active }) => ($active ? COLORS.DARK_BROWN : 'transparent')};
  margin-bottom: -2px;
  transition: color 0.15s;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  min-width: 280px;
`;

export const Input = styled.input`
  padding: 0.75rem 1rem;
  border-radius: 10px;
  border: 1.5px solid rgba(${COLORS.BLACK_RGB}, 0.15);
  font-size: 0.9rem;
  color: ${COLORS.DARK_BROWN};
  background: ${COLORS.OFF_WHITE};
  outline: none;
  transition: border-color 0.15s;

  &:focus {
    border-color: ${COLORS.SAGE};
  }

  &::placeholder {
    color: ${COLORS.BEIGE};
  }
`;

export const SubmitButton = styled.button`
  ${BUTTON_STYLE}
  width: 100%;
  margin-top: 0.5rem;
  font-size: 0.85rem;

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
    box-shadow: none;
  }
`;

export const ErrorMessage = styled.p`
  font-size: 0.8rem;
  color: #c0392b;
  font-weight: 500;
  text-align: center;
`;

export const SuccessMessage = styled.p`
  font-size: 0.8rem;
  color: #27ae60;
  font-weight: 500;
  text-align: center;
`;

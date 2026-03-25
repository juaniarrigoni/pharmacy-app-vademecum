// Import dependencies
import styled from 'styled-components';

// Import assets
import { COLORS, BUTTON_STYLE } from 'assets/constants/styles';

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  min-width: 300px;
  width: 100%;
  margin-top: 0.25rem;
  text-align: left;
`;

export const Field = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.35rem;
`;

export const Label = styled.label`
  font-size: 0.75rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.06em;
  color: ${COLORS.SAGE};
`;

export const Input = styled.input`
  padding: 0.7rem 0.9rem;
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
`;

export const Textarea = styled.textarea`
  padding: 0.7rem 0.9rem;
  border-radius: 10px;
  border: 1.5px solid rgba(${COLORS.BLACK_RGB}, 0.15);
  font-size: 0.85rem;
  color: ${COLORS.DARK_BROWN};
  background: ${COLORS.OFF_WHITE};
  outline: none;
  resize: vertical;
  font-family: inherit;
  line-height: 1.5;
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
  font-size: 0.9rem;
  padding: 0.9rem;
  margin-top: 0.5rem;
  border-radius: 14px;
  letter-spacing: 0.05em;

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

export const OriginalBlock = styled.div`
  background: rgba(${COLORS.BLACK_RGB}, 0.04);
  border-left: 3px solid ${COLORS.SAGE};
  border-radius: 0 10px 10px 0;
  padding: 0.75rem 1rem;
  text-align: left;
  margin-top: 0.25rem;
`;

export const OriginalBlockTitle = styled.p`
  font-size: 0.7rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.06em;
  color: ${COLORS.SAGE};
  margin-bottom: 0.4rem;
`;

export const OriginalBlockContent = styled.pre`
  font-family: inherit;
  font-size: 0.82rem;
  color: ${COLORS.DARK_BROWN};
  white-space: pre-wrap;
  word-break: break-word;
  line-height: 1.55;
  margin: 0;
`;

export const SectionDivider = styled.hr`
  border: none;
  border-top: 1px solid rgba(${COLORS.BLACK_RGB}, 0.1);
  margin: 0.5rem 0;
`;

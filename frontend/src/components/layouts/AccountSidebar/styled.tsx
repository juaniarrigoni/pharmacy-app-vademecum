// Import dependencies
import styled from 'styled-components';

// Import assets
import { COLORS, MEDIA_QUERIES } from 'assets/constants/styles';

export const Overlay = styled.div<{ $open: boolean }>`
  position: fixed;
  inset: 0;
  background: rgba(${COLORS.BLACK_RGB}, 0.35);
  z-index: 200;
  opacity: ${({ $open }) => ($open ? 1 : 0)};
  pointer-events: ${({ $open }) => ($open ? 'all' : 'none')};
  transition: opacity 0.25s;
`;

export const Panel = styled.aside<{ $open: boolean }>`
  position: fixed;
  top: 0;
  right: 0;
  height: 100dvh;
  width: 400px;
  max-width: 100vw;
  background: ${COLORS.OFF_WHITE};
  z-index: 201;
  display: flex;
  flex-direction: column;
  gap: 0;
  padding: 1.5rem;
  overflow-y: auto;
  box-shadow: -4px 0 24px rgba(${COLORS.BLACK_RGB}, 0.12);
  transform: translateX(${({ $open }) => ($open ? '0' : '100%')});
  transition: transform 0.3s cubic-bezier(0.4, 0, 0.2, 1);

  ${MEDIA_QUERIES.MOBILE} {
    width: 100vw;
  }
`;

export const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 1rem;
`;

export const UserInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;
`;

export const UserAvatar = styled.div`
  width: 42px;
  height: 42px;
  border-radius: 50%;
  background: ${COLORS.SAGE};
  color: ${COLORS.OFF_WHITE};
  font-weight: 700;
  font-size: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
`;

export const UserEmail = styled.p`
  font-size: 0.85rem;
  color: ${COLORS.DARK_BROWN};
  font-weight: 500;
  word-break: break-all;
`;

export const CloseButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  font-size: 1.1rem;
  color: ${COLORS.SAGE};
  padding: 0.25rem 0.5rem;
  flex-shrink: 0;
  transition: color 0.15s;

  &:hover {
    color: ${COLORS.DARK_BROWN};
  }
`;

export const Divider = styled.hr`
  border: none;
  border-top: 1px solid rgba(${COLORS.BLACK_RGB}, 0.08);
  margin: 1rem 0;
`;

export const SectionTitle = styled.h3`
  font-size: 0.75rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  color: ${COLORS.SAGE};
  margin-bottom: 1rem;
`;

export const FormulaList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  flex: 1;
`;

export const FormulaCard = styled.div`
  background: white;
  border-radius: 14px;
  padding: 1rem;
  box-shadow: 0 1px 6px rgba(${COLORS.BLACK_RGB}, 0.07);
  display: flex;
  flex-direction: column;
  gap: 0.4rem;
`;

export const FormulaCardHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
`;

export const FormulaName = styled.p`
  font-size: 0.9rem;
  font-weight: 700;
  color: ${COLORS.DARK_BROWN};
`;

export const FormulaPreview = styled.p`
  font-size: 0.75rem;
  color: ${COLORS.SAGE};
  line-height: 1.4;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
  white-space: pre-wrap;
`;

export const CardActions = styled.div`
  display: flex;
  gap: 0.5rem;
  margin-top: 0.25rem;
`;

const SIGNOUT_BG = `rgba(${COLORS.BLACK_RGB}, 0.07)`;

export const ActionButton = styled.button<{ $variant: 'edit' | 'delete' | 'signout' }>`
  border: none;
  cursor: pointer;
  border-radius: 8px;
  font-size: 0.78rem;
  font-weight: 600;
  padding: 0.4rem 0.85rem;
  transition: opacity 0.15s;

  background: ${({ $variant }) => {
    if ($variant === 'edit') return COLORS.SAGE;
    if ($variant === 'delete') return 'rgba(192,57,43,0.1)';
    return SIGNOUT_BG;
  }};

  color: ${({ $variant }) => {
    if ($variant === 'edit') return COLORS.OFF_WHITE;
    if ($variant === 'delete') return '#c0392b';
    return COLORS.DARK_BROWN;
  }};

  &:hover {
    opacity: 0.8;
  }
`;

export const EmptyState = styled.p`
  font-size: 0.85rem;
  color: ${COLORS.SAGE};
  line-height: 1.6;
  text-align: center;
  padding: 1.5rem 0.5rem;
`;

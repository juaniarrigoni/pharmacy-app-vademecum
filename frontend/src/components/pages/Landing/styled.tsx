// Import dependencies
import styled from "styled-components";

// Import assets
import { COLORS, MEDIA_QUERIES } from "assets/constants/styles";
import { heartBeat } from "assets/scripts/animations";

export const AuthButton = styled.button`
  position: fixed;
  top: 1.25rem;
  right: 1.75rem;
  z-index: 100;
  background: ${COLORS.SAGE};
  border: none;
  border-radius: 24px;
  padding: 0.75rem 1.75rem;
  font-size: 0.95rem;
  font-weight: 700;
  color: ${COLORS.OFF_WHITE};
  cursor: pointer;
  transition: opacity 0.15s, transform 0.15s, box-shadow 0.15s;
  letter-spacing: 0.02em;
  box-shadow: 0 4px 18px rgba(${COLORS.BLACK_RGB}, 0.22);
  max-width: 260px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;

  &:hover {
    opacity: 0.9;
    transform: translateY(-2px);
    box-shadow: 0 6px 24px rgba(${COLORS.BLACK_RGB}, 0.28);
  }

  ${MEDIA_QUERIES.MOBILE} {
    font-size: 0.82rem;
    padding: 0.6rem 1.2rem;
    top: 0.9rem;
    right: 1rem;
    max-width: 190px;
  }
`;

export const Container = styled.div`
  position: relative;
  display: flex;
  text-align: center;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-top: 5vh;

  ${MEDIA_QUERIES.MOBILE} {
    padding-top: 5vh;
  }
`;

export const Logo = styled.img`
  background: transparent;
  display: block;
  width: 320px;
  height: 320px;
  margin: 10px auto;
  border-radius: 50%;
  box-shadow: 0 0 10px 0 rgba(${COLORS.PRIMARY_RGB}, 0.3);
  animation: heartBeat 2.5s ease-out infinite;
  object-fit: cover;
  filter: brightness(1.1) contrast(1.1);
  mix-blend-mode: multiply;
  transform: scale(1.15);

  ${MEDIA_QUERIES.MOBILE} {
    width: 60vw;
    height: 60vw;
  }

  ${heartBeat}
`;

export const Content = styled.div`
  margin: 0 auto;
  max-width: 100%;
  width: 800px;
  padding-bottom: 5vh;
  h1 {
    color: ${COLORS.DARK_BROWN};
  }

  h2 {
    color: ${COLORS.SAGE};
    font-weight: 400;
  }
`;

export const ContactStrip = styled.div`
  display: flex;
  justify-content: center;
  gap: 2rem;
  margin-top: 1.75rem;
  flex-wrap: wrap;

  ${MEDIA_QUERIES.MOBILE} {
    flex-direction: column;
    align-items: center;
    gap: 1rem;
  }
`;

export const ContactItem = styled.a`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  color: ${COLORS.DARK_BROWN};
  font-size: 0.85rem;
  font-weight: 500;
  text-decoration: none;
  opacity: 1;
  transition: opacity 0.2s;

  &:hover {
    opacity: 0.65;
  }
`;

export const ContactHint = styled.span`
  font-size: 0.72rem;
  font-weight: 400;
  color: ${COLORS.SAGE};
  opacity: 0.8;
`;

export const ContactItemIcon = styled.div<{ src: string }>`
  width: 16px;
  height: 16px;
  flex-shrink: 0;
  background-color: ${COLORS.SAGE};
  mask-image: url(${(props) => props.src});
  mask-size: contain;
  mask-repeat: no-repeat;
  mask-position: center;
  -webkit-mask-image: url(${(props) => props.src});
  -webkit-mask-size: contain;
  -webkit-mask-repeat: no-repeat;
  -webkit-mask-position: center;
`;

export const ScrollButton = styled.a`
  position: absolute;
  left: 0;
  right: 0;
  bottom: 20px;
  display: block;
  max-width: 50px;
  margin: 0 auto;
  cursor: pointer;
  ${MEDIA_QUERIES.MOBILE} {
    position: unset;
    margin-top: 0px;
  }
  /* CSS Arrow to replace GIF */
  &::after {
    content: '';
    position: absolute;
    left: 50%;
    bottom: 20px;
    width: 20px;
    height: 20px;
    border-right: 3px solid ${COLORS.SAGE};
    border-bottom: 3px solid ${COLORS.SAGE};
    transform: translateX(-50%) rotate(45deg);
    animation: scrollDown 2s infinite;
  }

  &::before {
    content: '';
    position: absolute;
    left: 50%;
    bottom: 30px;
    width: 20px;
    height: 20px;
    border-right: 3px solid ${COLORS.SAGE}; /* Second arrow for double chevron effect */
    border-bottom: 3px solid ${COLORS.SAGE};
    transform: translateX(-50%) rotate(45deg);
    animation: scrollDown 2s infinite;
    animation-delay: 0.2s;
  }

  @keyframes scrollDown {
    0% {
      opacity: 0;
      transform: translateX(-50%) rotate(45deg) translate(-10px, -10px);
    }
    50% {
      opacity: 1;
    }
    100% {
      opacity: 0;
      transform: translateX(-50%) rotate(45deg) translate(10px, 10px);
    }
  }

  ${MEDIA_QUERIES.MOBILE} {
    position: unset;
    margin-top: 0px;
    min-height: 50px;
    
    &::after, &::before {
        bottom: 10px;
    }
    &::before {
        bottom: 20px;
    }
  }
`;

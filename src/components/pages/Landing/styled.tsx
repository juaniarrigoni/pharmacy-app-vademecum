// Import dependencies
import styled from "styled-components";

// Import assets
import { COLORS, MEDIA_QUERIES } from "assets/constants/styles";
import { heartBeat } from "assets/scripts/animations";

export const Container = styled.div`
  position: relative;
  min-height: 100vh;
  display: flex;
  text-align: center;
  flex-direction: column;
  vertical-align: middle;

  ${MEDIA_QUERIES.MOBILE} {
    padding: 5vh 0;
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
  margin: 10vh auto;
  max-width: 100%;
  width: 800px;
  h1,
  h2 {
    color: ${COLORS.PRIMARY};
  }
`;

export const ButtonsWrapper = styled.div`
  margin: 0px;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 20px;
  justify-items: center;
  max-width: 600px;
  margin: 0 auto;

  ${MEDIA_QUERIES.MOBILE} {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;

export const Button = styled.a`
  position: relative;
  cursor: pointer;
  display: block;
  min-width: 80px;
  max-width: 200px;
  width: auto;
  box-shadow: 0 2.5px 10px -2.5px rgba(${COLORS.PRIMARY_RGB}, 0.15);
  margin: 20px;
  border-radius: 20px;
  background: ${COLORS.WHITE};
  padding: 1em;

  &:hover {
    box-shadow: 0 5px 15px -2.5px rgba(${COLORS.PRIMARY_RGB}, 0.3);
  }

  p {
    cursor: pointer;
    font-weight: 700;
    color: ${COLORS.PRIMARY};
    margin-top: 0.5em;
    ${MEDIA_QUERIES.MOBILE} {
      flex-grow: 1;
    }
  }

  span {
    cursor: pointer;
    color: ${COLORS.PRIMARY};
    display: block;
    font-size: 0.75em;
  }

  ${MEDIA_QUERIES.MOBILE} {
    width: 100%;
    max-width: 100%;
    max-width: 250px;
    margin: 20px auto;
    display: flex;
    flex-direction: row;
    align-items: flex-end;
  }
`;

export const IconMask = styled.div<{ src: string }>`
  width: 50px;
  height: 50px;
  margin: 0 auto;
  background-color: ${COLORS.PRIMARY};
  mask-image: url(${props => props.src});
  mask-size: contain;
  mask-repeat: no-repeat;
  mask-position: center;
  -webkit-mask-image: url(${props => props.src});
  -webkit-mask-size: contain;
  -webkit-mask-repeat: no-repeat;
  -webkit-mask-position: center;

  ${MEDIA_QUERIES.MOBILE} {
    position: absolute;
    width: 2rem;
    height: 2rem;
    left: 1rem;
    top: 50%;
    transform: translateY(-50%);
  }
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

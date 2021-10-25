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
  background: ${COLORS.WHITE};
  display: block;
  width: 200px;
  height: 200px;
  margin: 30px auto;
  border-radius: 50%;
  box-shadow: 0 0 10px 0 rgba(${COLORS.PRIMARY_RGB}, 0.3);
  animation: heartBeat 2.5s ease-out infinite;

  ${MEDIA_QUERIES.MOBILE} {
    width: 40vw;
    height: 40vw;
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
  display: flex;
  justify-content: center;
  flex-wrap: wrap;

  ${MEDIA_QUERIES.MOBILE} {
    display: block;
  }
`;

export const Button = styled.a`
  cursor: pointer;
  display: block;
  max-width: 200px;
  min-width: 80px;
  width: auto;
  box-shadow: 0 2.5px 10px -2.5px rgba(${COLORS.PRIMARY_RGB}, 0.15);
  margin: 20px;
  border-radius: 20px;
  background: ${COLORS.WHITE};
  padding: 1em;

  &:hover {
    box-shadow: 0 5px 15px -2.5px rgba(${COLORS.PRIMARY_RGB}, 0.3);
  }

  img {
    cursor: pointer;
    display: block;
    width: 50px;
    margin: 0 auto;

    ${MEDIA_QUERIES.MOBILE} {
      width: auto;
      height: 2rem;
    }
  }

  p {
    cursor: pointer;
    font-weight: 700;
    color: ${COLORS.PRIMARY};
    margin-top: 0.5em;
    ${MEDIA_QUERIES.MOBILE} {
      margin: 0 0 0 1rem;
      text-align: left;
      flex-grow: 1;
    }
  }

  span {
    cursor: pointer;
    color: ${COLORS.PRIMARY};
    display: block;
    font-size: 0.75em;
    ${MEDIA_QUERIES.MOBILE} {
      text-align: left;
    }
  }

  ${MEDIA_QUERIES.MOBILE} {
    width: 100%;
    margin: 20px auto;
    display: flex;
    flex-direction: row;
    align-items: flex-end;
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
  img {
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
  }
`;

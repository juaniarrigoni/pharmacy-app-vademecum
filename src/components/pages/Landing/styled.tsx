// Import dependencies
import styled from "styled-components";

// Import assets
import { COLORS } from "constants/styles";
import { heartBeat } from "assets/scripts/animations";

export const Container = styled.div`
  position: relative;
  min-height: 100vh;
  display: flex;
  text-align: center;
  flex-direction: column;
  vertical-align: middle;

  @media only screen and (max-width: 600px) {
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

  @media only screen and (max-width: 600px) {
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

  @media only screen and (max-width: 600px) {
    display: block;
  }
`;

export const Button = styled.div`
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

  @media only screen and (max-width: 600px) {
    width: 100%;
    margin: 20px auto;
  }

  img {
    cursor: pointer;
    display: block;
    width: 50px;
    margin: 0 auto;
    @media only screen and (max-width: 600px) {
      display: none;
    }
  }

  p {
    cursor: pointer;
    font-weight: 700;
    color: ${COLORS.PRIMARY};
    margin-top: 0.5em;
    @media only screen and (max-width: 600px) {
      margin: 0;
    }
  }

  span {
    cursor: pointer;
    color: ${COLORS.PRIMARY};
    display: block;
    font-size: 0.75em;
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
  @media only screen and (max-width: 600px) {
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
    @media only screen and (max-width: 600px) {
      position: unset;
      margin-top: 0px;
    }
  }
`;

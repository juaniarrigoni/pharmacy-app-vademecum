// Import dependencies
import styled from "styled-components";

export const Container = styled.div`
  a {
    cursor: pointer;
    display: block;
    position: absolute;
    bottom: 0;
    width: 50px;
    left: 0;
    right: 0;
    margin: 0 auto 15px;
    &:hover {
      img:nth-child(1) {
        transform: translateY(-3px);
      }
      img:nth-child(2) {
        opacity: 1;
      }
    }
  }
  p {
    cursor: pointer;
    font-family: "Nunito", sans-serif;
    color: #4117ab;
    font-weight: 700;
    font-size: 8px;
    margin-bottom: 5px;
  }
  img:nth-child(1) {
    cursor: pointer;
    display: block;
    width: 100%;
    transition: transform 0.5s;
  }
  img:nth-child(2) {
    cursor: pointer;
    width: 15%;
    margin: 0 auto;
    display: block;
    opacity: 0;
    transition: opacity 0.5s;
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
  }
`;

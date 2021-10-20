// Import dependencies
import styled from "styled-components";

// Import assets
import { COLORS, MEDIA_QUERIES } from "assets/constants/styles";

export const ContactInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-content: flex-start;
  justify-content: center;
  align-items: flex-start;
  flex-wrap: nowrap;
  width: fit-content;

  > *:not(:last-child) {
    margin-bottom: 1.5rem;
  }
`;

export const ContactInfoItem = styled.div`
  text-align: left;
  display: flex;
  align-items: center;

  a {
    display: block;
    width: fit-content;
    margin: 0 auto 0 1rem;
    color: ${COLORS.WHITE};
    font-weight: 900;
    background: linear-gradient(180deg, #32b772 0, #00a54f 100%);
    text-transform: uppercase;
    border: 0;
    border-radius: 5px;
    padding: 0.3rem 0.8rem;
    font-size: 0.8rem;
    cursor: pointer;
    box-shadow: 0 0.1rem 0.5rem 0 rgba(${COLORS.BLACK_RGB}, 0.3);

    &:hover {
      box-shadow: 0 0.2rem 0.5rem 0 rgba(${COLORS.BLACK_RGB}, 0.5);
    }
  }

  p {
    margin: 1rem 0;
  }

  ${MEDIA_QUERIES.MOBILE} {
    text-align: left;
    flex-wrap: wrap;

    .icon {
      width: 10%;
      margin-right: 5%;
    }

    p {
      text-align: left;
      width: 85%;
    }

    a {
      margin: 0 auto;
    }
  }
`;

export const ContactInfoIcon = styled.div`
  margin: 0 auto;
  margin-right: 1rem;
  box-sizing: border-box;
  background: rgba(0, 165, 79, 0.1);
  border-radius: 50px;
  width: 30px;
  height: 30px;
  line-height: 30px;

  img {
    width: 30px;
    padding: 0.4rem;
  }
`;

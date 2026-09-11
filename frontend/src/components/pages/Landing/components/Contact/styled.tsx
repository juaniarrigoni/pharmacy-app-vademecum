// Import dependencies
import styled from "styled-components";

// Import assets
import { COLORS, MEDIA_QUERIES, BOX_SHADOW, BORDER_RADIUS } from "assets/constants/styles";

export const Container = styled.div`
  padding: 10vh 2rem 14vh;
  text-align: center;

  h2 {
    color: ${COLORS.DARK_BROWN};
    margin-bottom: 0.25rem;
  }

  h3 {
    color: ${COLORS.SAGE};
    font-weight: 400;
    margin-bottom: 3rem;
  }
`;

export const ContactGrid = styled.div`
  display: flex;
  justify-content: center;
  gap: 1.5rem;
  flex-wrap: wrap;
  max-width: 800px;
  margin: 0 auto;

  ${MEDIA_QUERIES.MOBILE} {
    flex-direction: column;
    align-items: center;
  }
`;

export const ContactCard = styled.a`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
  background: ${COLORS.WHITE};
  border-radius: ${BORDER_RADIUS.SQUARE};
  box-shadow: ${BOX_SHADOW.SQUARE};
  padding: 2rem 2.5rem;
  text-decoration: none;
  min-width: 180px;
  transition: box-shadow 0.2s, transform 0.2s;

  &:hover {
    box-shadow: ${BOX_SHADOW.SQUARE_HOVER};
    transform: translateY(-2px);
  }

  ${MEDIA_QUERIES.MOBILE} {
    width: 100%;
    max-width: 320px;
    flex-direction: row;
    padding: 1.25rem 1.5rem;
    gap: 1rem;
    text-align: left;
  }
`;

export const ContactIcon = styled.div<{ src: string }>`
  width: 36px;
  height: 36px;
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

  ${MEDIA_QUERIES.MOBILE} {
    width: 28px;
    height: 28px;
  }
`;

export const ContactLabel = styled.p`
  font-size: 0.7rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  color: ${COLORS.SAGE};
  margin: 0;

  ${MEDIA_QUERIES.MOBILE} {
    display: none;
  }
`;

export const ContactValue = styled.p`
  font-size: 0.95rem;
  font-weight: 600;
  color: ${COLORS.DARK_BROWN};
  margin: 0;
`;

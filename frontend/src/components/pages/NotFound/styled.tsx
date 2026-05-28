// Import dependencies
import styled from "styled-components";

// Import assets
import { COLORS, FONT_FAMILY, MEDIA_QUERIES } from "assets/constants/styles";

export const Container = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: ${COLORS.OFF_WHITE};
  text-align: center;
  padding: 2rem;
`;

export const Code = styled.h1`
  font-family: ${FONT_FAMILY.PRIMARY};
  font-size: 9rem;
  font-weight: 700;
  color: ${COLORS.DARK_BROWN};
  line-height: 1;
  margin: 0 0 0.25em;
  letter-spacing: -0.04em;

  ${MEDIA_QUERIES.MOBILE} {
    font-size: 6rem;
  }
`;

export const Message = styled.p`
  font-family: ${FONT_FAMILY.BODY};
  font-size: 1.1rem;
  color: ${COLORS.BROWN};
  margin: 0 0 2.5rem;
`;

export const HomeLink = styled.a`
  font-family: ${FONT_FAMILY.BODY};
  font-size: 0.9rem;
  font-weight: 600;
  color: ${COLORS.OFF_WHITE};
  background: ${COLORS.SAGE};
  text-decoration: none;
  padding: 0.75rem 2rem;
  border-radius: 24px;
  transition: opacity 0.15s, transform 0.15s;

  &:hover {
    opacity: 0.85;
    transform: translateY(-2px);
  }
`;

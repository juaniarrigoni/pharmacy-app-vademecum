// styled.tsx for Product Page
import styled from "styled-components";
import { COLORS, MEDIA_QUERIES } from "assets/constants/styles";

export const Container = styled.div`
  width: 100%;
  min-height: 100vh;
  background-color: ${COLORS.OFF_WHITE};
  padding-top: 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Content = styled.div`
  max-width: 1200px;
  width: 90%;
  margin: 0 auto;
`;

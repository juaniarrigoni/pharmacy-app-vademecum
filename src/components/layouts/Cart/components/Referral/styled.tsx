// Import dependencies
import styled from "styled-components";

// Import assets
import { COLORS } from "assets/constants/styles";

export const Notes = styled.div`
  margin-top: -10px;
  p {
    font-size: 10px;
  }
`;

export const User = styled.div`
  cursor: pointer;
  position: relative;
  cursor: pointer;
  width: fit-content;
  margin: 0 auto;
  &:hover #product-modal-username {
    background: rgba(${COLORS.PRIMARY_RGB}, 0.1);
  }
  &:hover #product-modal-username-icon {
    background: rgba(${COLORS.PRIMARY_RGB}, 0.3);
  }
`;

export const UserName = styled.p`
  cursor: pointer;
  display: inline-block;
  font-weight: bold;
  font-size: 12px;
  width: fit-content;
  padding: 2px 10px;
  border-bottom: 1px dashed ${COLORS.PRIMARY};
  border-radius: 50px;
  min-width: 100px;
  min-height: 1rem;
`;

export const Icon = styled.div`
  cursor: pointer;
  position: absolute;
  box-sizing: border-box;
  border-radius: 50px;
  width: 20px;
  height: 20px;
  top: 0;
  right: -25px;
  img {
    cursor: pointer;
    width: 20px;
    padding: 6px;
  }
`;

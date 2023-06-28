import styled from "styled-components";
import { color } from "themes/colors";

export const AlertModalContainer = styled.div``;

export const Title = styled.div`
  font-size: 25px;
  font-weight: 500;
`;

export const ModalBody = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 0 20px !important;

  p {
    color: ${color.redP};
    font-weight: 500;
    font-size: 18px;
  }
`;

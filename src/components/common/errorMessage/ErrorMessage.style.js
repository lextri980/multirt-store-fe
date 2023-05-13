import styled from "styled-components";
import { color } from "themes/colors";

export const ErrorMessageContainer = styled.div`
  display: flex;
  align-items: center;
  color: ${color.redP};
  padding: 10px 0;
  font-size: 13px;

  span {
    margin-top: 2px;
    margin-left: 5px;
  }
`;

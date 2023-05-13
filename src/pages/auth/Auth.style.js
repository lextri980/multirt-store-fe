import styled from "styled-components";
import { color } from "themes/colors";

export const AuthContainer = styled.div`
  width: 100vw;
  height: 80vh;
  display: flex;
  justify-content: center;
  align-items: center;

  .card-header {
    display: flex;
    justify-content: center;
    .title-card {
      font-size: 20px;
      font-weight: 500;
    }
  }
  .forgot-pw {
    &:hover {
      color: ${color.blue};
      cursor: pointer;
    }
  }
`;

import styled from "styled-components";
import { color } from "themes/colors";

export const NotFoundContainer = styled.div`
  overflow-y: hidden;

  img {
    position: relative;
    width: 99vw;
    height: 99vh;
  }

  .detail-404 {
    position: absolute;
    top: 0;
    left: 0;
    width: 100vw;
    display: flex;
    flex-direction: column;
    align-items: center;

    p {
      margin: 20px 0;
      font-size: 20px;
      color: ${color.blue};
    }
  }
`;

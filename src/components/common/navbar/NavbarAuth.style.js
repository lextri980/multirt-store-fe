import styled, { keyframes } from "styled-components";
import { color } from "themes/colors";

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

export const NavbarAuthContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 10px;

  .logo-web {
    display: flex;
    margin-right: 10px;
    border: ${color.black} 2px solid;
    border-radius: 50px;
    padding: 5px;

    &:hover {
      color: ${color.blue};
      border: ${color.blue} 2px solid;
      animation: ${rotate} 1s linear infinite;
    }
  }

  .dashboard-link {
    display: flex;
    align-items: center;
    > a {
      height: 100%;
    }
  }
  .btn-group {
    width: 100px;
    min-width: 100px;
  }

  .navbar-auth {
    width: 900px;
  }
`;

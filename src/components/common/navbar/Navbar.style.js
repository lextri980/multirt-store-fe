import styled, { keyframes } from "styled-components";
import { color } from "themes/colors/index";

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

export const NavbarContainer = styled.div`
  position: sticky;
  top: 0;
  margin-bottom: 10px;
  width: 100vw;

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

  .secondary-menu {
    display: flex;
    justify-content: center;
    padding-top: 20px;
    width: 100vw;
    background: rgb(255, 255, 255, 0.8);

    & > button {
      display: flex;
      justify-content: space-between;
      background-color: ${color.blue};
      width: 170px;
    }
  }

  .search-input {
    width: 25vw;

    &:focus-within {
      .search-icon {
        color: ${color.blue};
      }
    }

    &:hover {
      .search-icon {
        color: ${color.blue};
      }
    }
  }

  .search-icon {
    color: #d8d8d8;
  }

  .ml-20 {
    margin-left: 20px;
  }

  .switch-theme-light {
    div {
      background-color: ${color.blueP};

      &:hover {
        background-color: ${color.blueP};
      }

      &:not(&:active) {
        background-color: ${color.blue};
      }
    }
  }
  .switch-theme-dark {
    div {
      background-color: ${color.blueP};

      &:hover {
        background-color: ${color.blueP};
      }

      &:not(&:active) {
        background-color: ${color.blackP};
      }
    }
  }
  .switch-theme-table {
    div {
      background-color: ${color.blueP};

      &:hover {
        background-color: ${color.blueP};
      }

      &:not(&:active) {
        background-color: ${color.brick};
      }
    }
  }
  .switch-theme-card {
    div {
      background-color: ${color.blueP};

      &:hover {
        background-color: ${color.blueP};
      }

      &:not(&:active) {
        background-color: ${color.green};
      }
    }
  }

  .title-profile {
    display: flex;
    align-items: center;

    &:hover {
      cursor: pointer;
    }

    svg {
      margin-right: 10px;
      font-size: 35px;
    }

    h4 {
      margin: 0;
    }
  }

  .switch-layout-user {
    display: flex;
    flex-direction: row;
    justify-content: center;

    p {
      display: flex;
      align-items: center;
      margin: 5px 10px 0;
    }
  }
`;

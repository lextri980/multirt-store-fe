import styled from "styled-components";
import { color } from "themes/colors";

export const TableTypeContainer = styled.div`
  margin: 30px 5vw;

  .table-container {
    height: calc(100vh - 160px);
    display: block;
    overflow-y: auto;

    thead {
      position: sticky;
      top: -16px;
      z-index: 201;
    }
  }

  td {
    padding: 10px 0;
  }
`;

export const UserDetailModalContainer = styled.div`
  .header {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .body {
  }
`;

export const UpdateUserModalContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  .switch-theme-user {
    div {
      background-color: ${color.blueP};

      &:hover {
        background-color: ${color.blueP};
      }

      &:not(&:active) {
        background-color: ${color.orangeP};
      }
    }
  }
  .switch-theme-admin {
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
`;

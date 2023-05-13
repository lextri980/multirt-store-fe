import styled from "styled-components";

export const UserManagementContainer = styled.div`
  display: flex;
  height: 80vh;

  .search-section {
    padding: 35px 0 0 90px;
    min-width: 360px;

    .user-title {
      margin-bottom: 20px;
    }
  }

  .search-input {
    display: flex;
    align-items: flex-start;
    width: 100%;
    background-color: white;
  }

  .btn-search {
    margin-top: 20px;
    margin-bottom: 20px;
  }

  .user-information {
    .key {
      min-width: 120px;
    }
  }

  .group-btn {
    background-color: black
  }
`;

export const AdvancedSearchModalStyle = styled.div`
  .row-modal {
    display: flex !important;
    justify-content: space-between;
  }
`;

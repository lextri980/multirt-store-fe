import styled from "styled-components";

export const ProfileContainer = styled.div`
  height: 80vh;
  display: flex;
  align-items: center;
  justify-content: center;

  .avatar {
    width: 230px;
    height: 230px;

    span {
      font-size: 100px;
    }

    @media (max-width: 1300px) {
      width: 120px;
      height: 120px;

      span {
        font-size: 50px;
      }
    }
  }

  .mb-10 {
    margin-bottom: 7px;
  }

  .title {
    display: inline-block;
    width: 90px;
  }

  .center {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .avatar-review {
    span {
      font-size: 30px;
    }
  }
`;

import styled from "styled-components";

export const FileContainer = styled.div`
  .inputfile {
    width: 0.1px;
    height: 0.1px;
    opacity: 0;
    overflow: hidden;
    position: absolute;
    z-index: -1;
  }
  > p {
    padding: 0 5px;
  }

  .input-file {
    display: flex;
    align-items: center;

    &:hover {
      cursor: pointer;
    }
  }

  label {
    margin-right: 10px;
    display: flex;
    align-items: center;
  }

  .word-break {
    word-break: break-all;
  }
`;

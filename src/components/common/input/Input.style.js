import styled from "styled-components";
import { color } from "themes/colors";

export const InputContainer = styled.div`
  #label {
    position: absolute;
    margin: 9px 0 0 15px;
  }

  input {
    border-radius: 7px;
    border: 2px solid
      ${(props) => (props.error === true ? color.redP : color.gray)};
    width: 100%;
    padding: 8px 12px 8px 50px;
    font-size: 14px;
    transition: border 0.5s;

    &:hover {
      border: 2px solid
        ${(props) => (props.error === true ? color.redP : color.blue)};
      transition: border 0.5s;
    }

    &:focus {
      border: 2px solid
        ${(props) => (props.error === true ? color.redP : color.blue)};
    }
  }

  #pw {
    position: absolute;
    margin: 11px 0 0 -30px;

    &:hover {
      cursor: pointer;
    }
  }
`;

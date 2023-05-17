import AbcIcon from "@mui/icons-material/Abc";
import EyeOn from "@mui/icons-material/Visibility";
import EyeOff from "@mui/icons-material/VisibilityOff";
import { InputContainer } from "./Input.style";
import PropTypes from "prop-types";

Input.propTypes = {
  value: PropTypes.string.isRequired,
  register: PropTypes.any.isRequired,
  placeholder: PropTypes.string,
  max: PropTypes.string,
  isText: PropTypes.bool,
  error: PropTypes.bool,
  password: PropTypes.bool,
  onPassword: PropTypes.func,
  label: PropTypes.element,
};

function Input(props) {
  const {
    password,
    onPassword,
    placeholder,
    value,
    register,
    isText,
    label,
    max,
    error,
  } = props;

  //@ (antiCopy): Cannot copy input text
  const antiCopy = (e) => {
    e.preventDefault();
  };

  return (
    <InputContainer error={error}>
      <label htmlFor={value} id="label">
        {label || <AbcIcon />}
      </label>
      <input
        maxLength={max}
        type={isText === false ? "password" : "text"}
        placeholder={placeholder || "Name"}
        {...register(value)}
        onCopy={password ? antiCopy : null}
      />
      {password ? (
        <label htmlFor={value} id="pw" onClick={onPassword}>
          {isText === false ? (
            <EyeOn sx={{ fontSize: "18px" }} />
          ) : (
            <EyeOff sx={{ fontSize: "18px" }} />
          )}
        </label>
      ) : (
        ""
      )}
    </InputContainer>
  );
}

export default Input;

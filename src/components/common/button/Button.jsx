import ButtonCustom from "@nextui-org/react/button";
import PropTypes from "prop-types";
import { ButtonContainer } from "./Button.style";

Button.propTypes = {
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func,
  color: PropTypes.string,
  border: PropTypes.bool,
  type: PropTypes.oneOf(["submit", "button"]),
  width: PropTypes.string,
  textColor: PropTypes.string,
  disabled: PropTypes.bool,
};

function Button(props) {
  const { color, border, type, width, textColor, disabled, children, onClick } =
    props;

  return (
    <ButtonContainer>
      <ButtonCustom
        className={color || "primary"}
        onClick={onClick}
        aria-label="Common-btn"
        bordered={border || false}
        type={type || "button"}
        style={{
          width: width || "170px",
          color: textColor,
          minWidth: "50px",
        }}
        disabled={disabled || false}
      >
        {children}
      </ButtonCustom>
    </ButtonContainer>
  );
}

export default Button;

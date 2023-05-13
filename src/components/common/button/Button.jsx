import Buttonx from "@nextui-org/react/button";
import { ButtonContainer } from "./Button.style";

function Button(props) {
  //! Props type
  //Require: children, onClick
  //Option: color, border, type, width, text, disabled
  //Func: onClick
  const { color, border, type, width, text, disabled, children, onClick } =
    props;

  return (
    <ButtonContainer>
      <Buttonx
        className={color || "primary"}
        onClick={onClick}
        aria-label="Common-btn"
        bordered={border || false}
        type={type || "button"}
        style={{
          width: width || "170px",
          color: text,
          minWidth: "50px",
        }}
        disabled={disabled || false}
      >
        {children}
      </Buttonx>
    </ButtonContainer>
  );
}

export default Button;

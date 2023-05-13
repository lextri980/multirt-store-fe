import { ButtonLightContainer } from "./Button.style";

function ButtonLight(props) {
  //! Props type
  //Require: onClick, children
  //Option: 
  //Func: onClick
  const { onClick, children } = props;

  return (
    <ButtonLightContainer onClick={onClick} aria-label="Common-btn-light">
      <div className="child-content-btn">{children}</div>
    </ButtonLightContainer>
  );
}

export default ButtonLight;

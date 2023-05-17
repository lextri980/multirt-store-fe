import PropTypes from "prop-types";
import { ButtonLightContainer } from "./Button.style";

ButtonLight.propTypes = {
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func,
};

function ButtonLight(props) {
  const { onClick, children } = props;

  return (
    <ButtonLightContainer onClick={onClick} aria-label="Common-btn-light">
      <div className="child-content-btn">{children}</div>
    </ButtonLightContainer>
  );
}

export default ButtonLight;

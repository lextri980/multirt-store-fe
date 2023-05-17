import Loadings from "@nextui-org/react/loading";
import PropTypes from 'prop-types';

Loading.propTypes = {
  color: PropTypes.string,
  size: PropTypes.string,
  type: PropTypes.string,
};

function Loading(props) {
  const { color, size, type } = props;

  return (
    <Loadings
      color={color || "primary"}
      size={size || "sm"}
      type={type || "points"}
    />
  );
}

export default Loading;

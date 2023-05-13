import Loadings from "@nextui-org/react/loading";

function Loading(props) {
  //! Props type
  //Require:
  //Option: color, size, type
  //Func:
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

import { LOCALSTORAGE_TOKEN_NAME } from "constants/service.const";
import { Navigate } from "react-router";

function AuthenticatedRoute(props) {
  //* Declare global variables
  const isAuthenticated = localStorage.getItem(LOCALSTORAGE_TOKEN_NAME);

  return isAuthenticated ? props.children : <Navigate to="/authentication" />;
}

export default AuthenticatedRoute;

import { LOCALSTORAGE_TOKEN_NAME } from "constants/service.const";
import { Navigate } from "react-router";

function ProtectedRoute(props) {
  //* Declare global variables
  const isAuthenticated = localStorage.getItem(LOCALSTORAGE_TOKEN_NAME);

  return isAuthenticated ? props.children : <Navigate to="/authentication" />;
}

export default ProtectedRoute;

import { STORAGE_TOKEN } from "constants/service.const";
import { Navigate } from "react-router";
import { getCookie, getLocal } from "utils/storage.util";

function AuthenticatedRoute(props) {
  //* Declare global variables
  const isAuthenticated = localStorage[STORAGE_TOKEN]
    ? getLocal(STORAGE_TOKEN)
    : getCookie(STORAGE_TOKEN);

  return isAuthenticated ? props.children : <Navigate to="/authentication" />;
}

export default AuthenticatedRoute;

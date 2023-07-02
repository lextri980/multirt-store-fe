import { STORAGE_TOKEN } from "constants/service.const";
import { Navigate } from "react-router";
import { getCookie, getLocal } from "utils/storage.util";

function AuthorizedRoute(props) {
  const { role, children } = props;

  //* Declare global variables
  const user = localStorage[STORAGE_TOKEN]
    ? JSON.parse(getLocal("user"))
    : JSON.parse(getCookie("user"));

  return role && role.includes(user.role.role_name) ? (
    children
  ) : (
    <Navigate to={-1} />
  );
}

export default AuthorizedRoute;

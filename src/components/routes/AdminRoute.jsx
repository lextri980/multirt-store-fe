import { Navigate } from "react-router";

function AdminRoute(props) {
  //* Declare global variables
  const user = JSON.parse(localStorage.getItem("user"));

  return user.isAdmin ? props.children : <Navigate to={-1} />;
}

export default AdminRoute;

import { useOutletContext } from "react-router-dom";
import { titlePage } from "utils/titlePage.util";
import Login from "./components/Login";
import Register from "./components/Register";

function Auth() {
  titlePage("Multirt | Authentication");
  const [isActive] = useOutletContext();
  let body;
  if (isActive === true) {
    body = <Login />;
  } else {
    body = <Register />;
  }

  return <div className="auth-container">{body}</div>;
}

export default Auth;

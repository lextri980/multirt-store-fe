import AlertModal from "components/common/alertModal/AlertModal";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useOutletContext } from "react-router-dom";
import { closeModal, openModal } from "store/actions/common.action";
import { getLocal, removeLocal } from "utils/storage.util";
import { titlePage } from "utils/titlePage.util";
import Login from "./components/Login";
import Register from "./components/Register";

function Auth() {
  titlePage("Multirt | Authentication");
  const [isActive] = useOutletContext();

  const dispatch = useDispatch();
  let body;
  if (isActive === true) {
    body = <Login />;
  } else {
    body = <Register />;
  }

  useEffect(() => {
    const isAuthorized = JSON.parse(getLocal("unauthorized"));
    if (isAuthorized) {
      dispatch(
        openModal({
          open: null,
          errorStatus: isAuthorized.status,
          message: isAuthorized.data.message,
          textBtn: "Re-login",
        })
      );
    }
    //eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleCloseModal = () => {
    dispatch(closeModal());
    removeLocal("unauthorized");
  };

  return (
    <div className="auth-container">
      {body}
      <AlertModal onClick={handleCloseModal} />
    </div>
  );
}

export default Auth;

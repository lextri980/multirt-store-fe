import { STORAGE_TOKEN } from "constants/service.const";
import { createContext, useEffect } from "react";
import { useDispatch } from "react-redux";
import { Navigate, useLocation } from "react-router";
import { setAuth } from "store/actions/auth.action";
import { getCookie, getLocal } from "utils/storage.util";

export const SetAuthContext = createContext();

function SetAuthContextProvider({ children }) {
  //* Declare global variables
  const isAuth = localStorage[STORAGE_TOKEN]
    ? getLocal(STORAGE_TOKEN)
    : getCookie(STORAGE_TOKEN);

  //* Redux hooks
  const dispatch = useDispatch();

  //* Hooks
  const location = useLocation();

  useEffect(() => {
    setAuthLogin();
    //eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  //! async (setAuthLogin): Check authentication
  const setAuthLogin = () => {
    if (localStorage[STORAGE_TOKEN]) {
      const userData = JSON.parse(getLocal("user"));
      dispatch(setAuth(userData));
    } else {
      const userData = getCookie("user");
      dispatch(setAuth(userData));
    }
  };

  const SetAuthContextData = {};

  return (
    <SetAuthContext.Provider value={SetAuthContextData}>
      {isAuth && location.pathname === "/authentication" ? (
        <Navigate to={"/dashboard"} />
      ) : (
        children
      )}
    </SetAuthContext.Provider>
  );
}

export default SetAuthContextProvider;

import { LOCALSTORAGE_TOKEN_NAME } from "constants/service.const";
import { createContext, useEffect } from "react";
import { useDispatch } from "react-redux";
import { Navigate, useLocation } from "react-router";
import { setAuth } from "store/actions/auth.action";

export const SetAuthContext = createContext();

function SetAuthContextProvider({ children }) {
  //* Declare global variables
  const isAuth = localStorage.getItem(LOCALSTORAGE_TOKEN_NAME);

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
    if (localStorage[LOCALSTORAGE_TOKEN_NAME]) {
      const userData = JSON.parse(localStorage.getItem("user"));
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

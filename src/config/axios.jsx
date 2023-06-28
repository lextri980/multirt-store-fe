import axios from "axios";
import { LOCALSTORAGE_TOKEN_NAME } from "constants/service.const";
import { logoutRequest } from "store/actions/auth.action";
import { store } from "store/store";
import { setLocal } from "utils/storage.util";
import { removeManyLocal } from "utils/storage.util";

const apiAxios = axios.create({
  baseURL: process.env.REACT_APP_BASE_URL,
  timeout: 20000,
});

// Request interceptor for API calls
apiAxios.interceptors.request.use(
  (config) => {
    let token;
    if (localStorage[LOCALSTORAGE_TOKEN_NAME]) {
      token = localStorage[LOCALSTORAGE_TOKEN_NAME];
      config.headers = {
        Authorization: `Bearer ${token}`,
        Accept: "application/json",
        "Content-Type": "application/x-www-form-urlencoded",
      };
    } else {
      config.headers = {
        Accept: "application/json",
        "Content-Type": "application/x-www-form-urlencoded",
      };
    }
    return config;
  },
  (error) => Promise.reject(error)
);

// Response interceptor for API calls
apiAxios.interceptors.response.use(
  (response) => response,
  (error) => {
    // const originalRequest = error.config;
    // This uses for refresh token
    // if (error.response.status === 403 && !originalRequest._retry) {
    //   originalRequest._retry = true;
    //   const access_token = await refreshAccessToken();
    //   axios.defaults.headers.common['Authorization'] = 'Bearer ' + access_token;
    //   return axiosApiInstance(originalRequest);
    // }
    switch (error.response.status) {
      case 401:
        removeManyLocal(["authentication", "user"]);
        store.dispatch(logoutRequest());
        window.location.pathname = "/authentication";
        setLocal("unauthorized", JSON.stringify(error.response));
        break;
      case 500:
        console.log("in");
        break;
      default:
        break;
    }
    return Promise.reject(error);
  }
);

export default apiAxios;

import axios from "axios";
import { LOCALSTORAGE_TOKEN_NAME } from "constants/service.const";

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
    }
    config.headers = {
      Authorization: `Bearer ${token}`,
      Accept: "application/json",
      "Content-Type": "application/x-www-form-urlencoded",
    };
    return config;
  },
  (error) => {
    Promise.reject(error);
  }
);

// Response interceptor for API calls
apiAxios.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    // const originalRequest = error.config;
    // This uses for refresh token
    // if (error.response.status === 403 && !originalRequest._retry) {
    //   originalRequest._retry = true;
    //   const access_token = await refreshAccessToken();
    //   axios.defaults.headers.common['Authorization'] = 'Bearer ' + access_token;
    //   return axiosApiInstance(originalRequest);
    // }
    if (error.response.status === 401) {
      window.location("/authentication");
    }
    return Promise.reject(error);
  }
);

export default apiAxios;

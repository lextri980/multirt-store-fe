import {
  LOGIN_FAIL,
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGOUT_REQUEST,
  LOGOUT_SUCCESS,
  REGISTER_FAIL,
  REGISTER_REQUEST,
  REGISTER_SUCCESS,
  RESET_PASSWORD_FAIL,
  RESET_PASSWORD_REQUEST,
  RESET_PASSWORD_SUCCESS,
  SEND_MAIL_FAIL,
  SEND_MAIL_REQUEST,
  SEND_MAIL_SUCCESS,
  SET_AUTH,
} from "constants/actions/auth.const";

export const setAuth = (data) => ({
  type: SET_AUTH,
  payload: data,
});

export const loginRequest = (data, callback) => ({
  type: LOGIN_REQUEST,
  payload: data,
  callback,
});

export const loginSuccess = (data) => ({
  type: LOGIN_SUCCESS,
  payload: data,
});

export const loginFail = (error) => ({
  type: LOGIN_FAIL,
  payload: error,
});

export const registerRequest = (data) => ({
  type: REGISTER_REQUEST,
  payload: data,
});

export const registerSuccess = (data) => ({
  type: REGISTER_SUCCESS,
  payload: data,
});

export const registerFail = (error) => ({
  type: REGISTER_FAIL,
  payload: error,
});

export const sendMailRequest = (data, callback) => ({
  type: SEND_MAIL_REQUEST,
  payload: data,
  callback,
});

export const sendMailSuccess = (data) => ({
  type: SEND_MAIL_SUCCESS,
  payload: data,
});

export const sendMailFail = (error) => ({
  type: SEND_MAIL_FAIL,
  payload: error,
});

export const resetPasswordRequest = (data, callback) => ({
  type: RESET_PASSWORD_REQUEST,
  payload: data,
  callback,
});

export const resetPasswordSuccess = (data) => ({
  type: RESET_PASSWORD_SUCCESS,
  payload: data,
});

export const resetPasswordFail = (error) => ({
  type: RESET_PASSWORD_FAIL,
  payload: error,
});

export const logoutRequest = (callback) => ({
  type: LOGOUT_REQUEST,
  callback,
});

export const logoutSuccess = () => ({
  type: LOGOUT_SUCCESS,
});

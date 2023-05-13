import {
  DELETE_AVATAR_FAIL,
  UPDATE_AVATAR_FAIL,
} from "constants/actions/profile.const";
import {
  GET_USER_REQUEST,
  GET_USER_FAIL,
  GET_USER_SUCCESS,
  GET_DETAIL_USER_REQUEST,
  GET_DETAIL_USER_SUCCESS,
  UPDATE_USER_SUCCESS,
  UPDATE_USER_REQUEST,
  DELETE_USER_REQUEST,
  DELETE_USER_SUCCESS,
} from "constants/actions/user.const";

export const getUserRequest = (param) => ({
  type: GET_USER_REQUEST,
  payload: param,
});

export const getUserSuccess = (data) => ({
  type: GET_USER_SUCCESS,
  payload: data,
});

export const getUserFail = (error) => ({
  type: GET_USER_FAIL,
  payload: error,
});

export const getDetailUserRequest = (data) => ({
  type: GET_DETAIL_USER_REQUEST,
  payload: data,
});

export const getDetailUserSuccess = (data) => ({
  type: GET_DETAIL_USER_SUCCESS,
  payload: data,
});

export const getDetailUserFail = (error) => ({
  type: GET_DETAIL_USER_REQUEST,
  payload: error,
});

export const updateUserRequest = (data) => ({
  type: UPDATE_USER_REQUEST,
  payload: data,
});

export const updateUserSuccess = (data) => ({
  type: UPDATE_USER_SUCCESS,
  payload: data,
});

export const updateUserFail = (error) => ({
  type: UPDATE_AVATAR_FAIL,
  payload: error,
});

export const deleteUserRequest = (data) => ({
  type: DELETE_USER_REQUEST,
  payload: data,
});

export const deleteUserSuccess = (data) => ({
  type: DELETE_USER_SUCCESS,
  payload: data,
});

export const deleteUserFail = (error) => ({
  type: DELETE_AVATAR_FAIL,
  payload: error,
});

import {
  DELETE_AVATAR_FAIL,
  DELETE_AVATAR_REQUEST,
  DELETE_AVATAR_SUCCESS,
  GET_PROFILE_FAIL,
  GET_PROFILE_REQUEST,
  GET_PROFILE_SUCCESS,
  UPDATE_AVATAR_FAIL,
  UPDATE_AVATAR_REQUEST,
  UPDATE_AVATAR_SUCCESS,
  UPDATE_PASSWORD_FAIL,
  UPDATE_PASSWORD_REQUEST,
  UPDATE_PASSWORD_SUCCESS,
  UPDATE_PROFILE_FAIL,
  UPDATE_PROFILE_REQUEST,
  UPDATE_PROFILE_SUCCESS,
} from "store/constants/profile.const";

export const getProfileRequest = () => ({
  type: GET_PROFILE_REQUEST,
});

export const getProfileSuccess = (data) => ({
  type: GET_PROFILE_SUCCESS,
  payload: data,
});

export const getProfileFail = (error) => ({
  type: GET_PROFILE_FAIL,
  payload: error,
});

export const updateProfileRequest = (data) => ({
  type: UPDATE_PROFILE_REQUEST,
  payload: data,
});

export const updateProfileSuccess = (data) => ({
  type: UPDATE_PROFILE_SUCCESS,
  payload: data,
});

export const updateProfileFail = (error) => ({
  type: UPDATE_PROFILE_FAIL,
  payload: error,
});

export const updatePasswordRequest = (data) => ({
  type: UPDATE_PASSWORD_REQUEST,
  payload: data,
});

export const updatePasswordSuccess = (data) => ({
  type: UPDATE_PASSWORD_SUCCESS,
  payload: data,
});

export const updatePasswordFail = (error) => ({
  type: UPDATE_PASSWORD_FAIL,
  payload: error,
});

export const updateAvatarRequest = (data) => ({
  type: UPDATE_AVATAR_REQUEST,
  payload: data,
});

export const updateAvatarSuccess = (data) => ({
  type: UPDATE_AVATAR_SUCCESS,
  payload: data,
});

export const updateAvatarFail = (error) => ({
  type: UPDATE_AVATAR_FAIL,
  payload: error,
});

export const deleteAvatarRequest = () => ({
  type: DELETE_AVATAR_REQUEST,
});

export const deleteAvatarSuccess = (data) => ({
  type: DELETE_AVATAR_SUCCESS,
  payload: data,
});

export const deleteAvatarFail = (error) => ({
  type: DELETE_AVATAR_FAIL,
  payload: error,
});
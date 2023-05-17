import apiAxios from "config/axios";

export const getUserApi = async (query) =>
  await apiAxios.get(`/user/list/${query}`);

export const getDetailUserApi = async (userId) =>
  await apiAxios.get(`/user/detail/${userId}`);

export const updadateUserApi = async (userId, data) =>
  await apiAxios.post(`/user/update/${userId}`, data);

export const deleteUserApi = async (userId) =>
  await apiAxios.delete(`/user/delete/${userId}`);

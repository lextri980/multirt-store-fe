import apiAxios from "config/axios";
import { url } from "constants/service.const";

export const getUserApi = async (query) =>
  await apiAxios.get(`${url}/user/list/${query}`);

export const getDetailUserApi = async (userId) =>
  await apiAxios.get(`${url}/user/detail/${userId}`);

export const updadateUserApi = async (userId, data) =>
  await apiAxios.post(`${url}/user/update/${userId}`, data);

export const deleteUserApi = async (userId) =>
  await apiAxios.delete(`${url}/user/delete/${userId}`);

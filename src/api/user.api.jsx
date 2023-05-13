import apiAxios from "config/axios";
import { url } from "constants/service.const";

export const getUserApi = async (query) => {
  return await apiAxios.get(`${url}/user/list/${query}`);
};

export const getDetailUserApi = async (userId) => {
  return await apiAxios.get(`${url}/user/detail/${userId}`);
};

export const updadateUserApi = async (userId, data) => {
  return await apiAxios.post(`${url}/user/update/${userId}`, data);
};

export const deleteUserApi = async (userId) => {
  return await apiAxios.delete(`${url}/user/delete/${userId}`);
};

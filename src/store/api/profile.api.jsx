import apiAxios from "config/axios";
import { url } from "constants/service.const";

export const getProfileApi = async () =>
  await apiAxios.get(`${url}/user/profile`);

export const updateProfileApi = async (data) =>
  await apiAxios.post(`${url}/user/profile/update`, data);

export const updatePasswordApi = async (data) =>
  await apiAxios.post(`${url}/user/profile/change-password`, data);

export const updateAvatarApi = async (data) =>
  await apiAxios.post(`${url}/user/profile/change-avatar`, data);

export const deleteAvatarApi = async () =>
  await apiAxios.put(`${url}/user/profile/delete-avatar`);

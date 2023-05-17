import apiAxios from "config/axios";

export const getProfileApi = async () => await apiAxios.get(`/user/profile`);

export const updateProfileApi = async (data) =>
  await apiAxios.post(`/user/profile/update`, data);

export const updatePasswordApi = async (data) =>
  await apiAxios.post(`/user/profile/change-password`, data);

export const updateAvatarApi = async (data) =>
  await apiAxios.post(`/user/profile/change-avatar`, data);

export const deleteAvatarApi = async () =>
  await apiAxios.put(`/user/profile/delete-avatar`);

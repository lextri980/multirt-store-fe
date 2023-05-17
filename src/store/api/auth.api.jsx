import apiAxios from "config/axios";

export const loginApi = async (data) =>
  await apiAxios.post(`/auth/login`, data);

export const registerApi = async (data) =>
  await apiAxios.post(`/auth/register`, data);

export const sendMailApi = async (data) =>
  await apiAxios.post(`/auth/send-mail`, data);

export const resetPasswordApi = async (data) =>
  await apiAxios.post(`/auth/reset-password`, data);

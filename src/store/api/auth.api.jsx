import apiAxios from "config/axios";
import { url } from "constants/service.const";

export const loginApi = async (data) =>
  await apiAxios.post(`${url}/auth/login`, data);

export const registerApi = async (data) =>
  await apiAxios.post(`${url}/auth/register`, data);

export const sendMailApi = async (data) =>
  await apiAxios.post(`${url}/auth/send-mail`, data);

export const resetPasswordApi = async (data) =>
  await apiAxios.post(`${url}/auth/reset-password`, data);

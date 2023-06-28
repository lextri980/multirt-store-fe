import { CLOSE_MODAL, OPEN_MODAL } from "store/constants/common.const";

export const openModal = (data) => ({
  type: OPEN_MODAL,
  payload: data,
});

export const closeModal = () => ({
  type: CLOSE_MODAL,
});

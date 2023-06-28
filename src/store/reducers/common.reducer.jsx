import { CLOSE_MODAL, OPEN_MODAL } from "store/constants/common.const";
import { Image } from "themes/image";

const initState = {
  alertModal: {
    open: false,
    title: '',
    message: "Error",
    textBtn: "Close",
  },
};

function commonReducer(state = initState, { type, payload }) {
  switch (type) {
    case OPEN_MODAL:
      return {
        ...state,
        alertModal: {
          open: true,
          errorStatus: payload.errorStatus,
          message: payload.message,
          textBtn: payload.textBtn,
        },
      };

    case CLOSE_MODAL:
      return {
        ...state,
        alertModal: {
          ...initState.alertModal,
          open: false,
        },
      };

    default:
      return state;
  }
}

export default commonReducer;

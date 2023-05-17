import {
  LOGIN_REQUEST,
  LOGIN_FAIL,
  LOGIN_SUCCESS,
  LOGOUT_REQUEST,
  LOGOUT_SUCCESS,
  REGISTER_REQUEST,
  REGISTER_FAIL,
  REGISTER_SUCCESS,
  RESET_PASSWORD_FAIL,
  RESET_PASSWORD_REQUEST,
  RESET_PASSWORD_SUCCESS,
  SEND_MAIL_FAIL,
  SEND_MAIL_REQUEST,
  SEND_MAIL_SUCCESS,
  SET_AUTH,
} from "store/constants/auth.const";

const initState = {
  user: null,
  isAuthenticated: false,
  loading: false,
};

function authReducer(state = initState, { type, payload }) {
  switch (type) {
    case SET_AUTH:
      return {
        user: payload,
        isAuthenticated: true,
        loading: false,
      };

    case LOGIN_REQUEST:
    case REGISTER_REQUEST:
    case LOGOUT_REQUEST:
    case SEND_MAIL_REQUEST:
    case RESET_PASSWORD_REQUEST:
      return {
        ...state,
        loading: true,
      };

    case LOGIN_SUCCESS:
      return {
        ...state,
        user: payload.user,
        isAuthenticated: true,
        loading: false,
      };

    case LOGOUT_SUCCESS:
      return {
        ...state,
        user: null,
        isAuthenticated: false,
        loading: false,
      };

    case LOGIN_FAIL:
    case REGISTER_FAIL:
    case REGISTER_SUCCESS:
    case SEND_MAIL_SUCCESS:
    case SEND_MAIL_FAIL:
    case RESET_PASSWORD_SUCCESS:
    case RESET_PASSWORD_FAIL:
      return {
        ...state,
        loading: false,
      };

    default:
      return state;
  }
}

export default authReducer;

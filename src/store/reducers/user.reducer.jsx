import {
  GET_DETAIL_USER_FAIL,
  GET_DETAIL_USER_REQUEST,
  GET_DETAIL_USER_SUCCESS,
  GET_USER_FAIL,
  GET_USER_REQUEST,
  GET_USER_SUCCESS,
} from "constants/actions/user.const";

const initState = {
  users: [],
  user: {},
  pageInfo: {},
  loading: false,
};

function userReducer(state = initState, { type, payload }) {
  switch (type) {
    case GET_USER_REQUEST:
    case GET_DETAIL_USER_REQUEST:
      return {
        ...state,
        loading: true,
      };

    case GET_USER_SUCCESS:
      return {
        ...state,
        users: payload.data,
        pageInfo: payload.pageInfo,
        loading: false,
      };

    case GET_DETAIL_USER_SUCCESS:
      return {
        ...state,
        loading: false,
        user: payload.data,
      };

    case GET_USER_FAIL:
      return {
        ...state,
        users: [],
        pageInfo: null,
        loading: false,
      };

    case GET_DETAIL_USER_FAIL:
      return {
        ...state,
        loading: false,
        user: {},
      };

    default:
      return state;
  }
}

export default userReducer;

import {
  DELETE_AVATAR_FAIL,
  DELETE_AVATAR_SUCCESS,
  DELETE_AVATAR_REQUEST,
  GET_PROFILE_FAIL,
  GET_PROFILE_REQUEST,
  GET_PROFILE_SUCCESS,
  UPDATE_AVATAR_FAIL,
  UPDATE_AVATAR_REQUEST,
  UPDATE_AVATAR_SUCCESS,
  UPDATE_PASSWORD_FAIL,
  UPDATE_PASSWORD_REQUEST,
  UPDATE_PASSWORD_SUCCESS,
  UPDATE_PROFILE_FAIL,
  UPDATE_PROFILE_REQUEST,
  UPDATE_PROFILE_SUCCESS,
} from "constants/actions/profile.const";

const initState = {
  profile: null,
  loading: false,
};

function profileReducer(state = initState, { type, payload }) {
  switch (type) {
    case GET_PROFILE_REQUEST:
    case UPDATE_PROFILE_REQUEST:
    case UPDATE_PASSWORD_REQUEST:
    case UPDATE_AVATAR_REQUEST:
    case DELETE_AVATAR_REQUEST:
      return {
        ...state,
        loading: true,
      };

    case GET_PROFILE_SUCCESS:
    case UPDATE_PROFILE_SUCCESS:
    case UPDATE_AVATAR_SUCCESS:
    case DELETE_AVATAR_SUCCESS:
      return {
        ...state,
        profile: payload.data,
        loading: false,
      };

    case UPDATE_PROFILE_FAIL:
    case UPDATE_PASSWORD_FAIL:
    case UPDATE_AVATAR_FAIL:
    case DELETE_AVATAR_FAIL:
    case UPDATE_PASSWORD_SUCCESS:
      return {
        ...state,
        loading: false,
      };

    case GET_PROFILE_FAIL:
      return {
        ...state,
        profile: null,
        loading: false,
      };

    default:
      return state;
  }
}

export default profileReducer;

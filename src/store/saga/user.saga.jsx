import { getDetailUserApi, getUserApi } from "api/user.api";
import {
  GET_DETAIL_USER_REQUEST,
  GET_USER_REQUEST,
} from "constants/actions/user.const";
import { toast } from "react-toastify";
import { call, fork, put, takeEvery } from "redux-saga/effects";
import {
  getDetailUserFail,
  getDetailUserSuccess,
  getUserFail,
  getUserSuccess,
} from "store/actions/user.action";

function* workerGetUserSaga({ payload }) {
  try {
    const response = yield call(getUserApi, payload);
    yield put(getUserSuccess(response.data));
  } catch (error) {
    yield put(getUserFail(error.response.data));
    yield toast.error(error.response.data.message);
  }
}

function* workerGetDetailUserSaga({ payload }) {
  try {
    const response = yield call(getDetailUserApi, payload);
    yield put(getDetailUserSuccess(response.data));
  } catch (error) {
    yield put(getDetailUserFail(error.response.data));
    yield toast.error(error.response.data.message);
  }
}

function* watcherGetUserSaga() {
  yield takeEvery(GET_USER_REQUEST, workerGetUserSaga);
}

function* watcherGetDetailUserSaga() {
  yield takeEvery(GET_DETAIL_USER_REQUEST, workerGetDetailUserSaga);
}

export const userSaga = [
  fork(watcherGetUserSaga),
  fork(watcherGetDetailUserSaga),
];

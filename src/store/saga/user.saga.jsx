import { toast } from "react-toastify";
import { all, call, put, takeEvery } from "redux-saga/effects";
import {
  getDetailUserFail,
  getDetailUserRequest,
  getDetailUserSuccess,
  getUserFail,
  getUserRequest,
  getUserSuccess,
} from "store/actions/user.action";
import { getDetailUserApi, getUserApi } from "store/api/user.api";

function* getUserWorker(action) {
  const { payload } = action;
  try {
    const response = yield call(getUserApi, payload);
    yield put(getUserSuccess(response.data));
  } catch (error) {
    yield put(getUserFail(error.response.data));
    yield toast.error(error.response.data.message);
  }
}

function* getDetailUserWorker(action) {
  const { payload } = action;
  try {
    const response = yield call(getDetailUserApi, payload);
    yield put(getDetailUserSuccess(response.data));
  } catch (error) {
    yield put(getDetailUserFail(error.response.data));
    yield toast.error(error.response.data.message);
  }
}

export function* userWatcher() {
  yield all([
    yield takeEvery(getUserRequest().type, getUserWorker),
    yield takeEvery(getDetailUserRequest().type, getDetailUserWorker),
  ]);
}

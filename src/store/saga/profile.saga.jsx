import { toast } from "react-toastify";
import { all, call, delay, put, takeLatest } from "redux-saga/effects";
import {
  deleteAvatarFail,
  deleteAvatarRequest,
  deleteAvatarSuccess,
  getProfileFail,
  getProfileRequest,
  getProfileSuccess,
  updateAvatarFail,
  updateAvatarRequest,
  updateAvatarSuccess,
  updatePasswordFail,
  updatePasswordRequest,
  updatePasswordSuccess,
  updateProfileFail,
  updateProfileRequest,
  updateProfileSuccess,
} from "store/actions/profile.action";
import {
  deleteAvatarApi,
  getProfileApi,
  updateAvatarApi,
  updatePasswordApi,
  updateProfileApi,
} from "store/api/profile.api";

function* getProfileWorker() {
  try {
    const response = yield call(getProfileApi);
    yield delay(500);
    yield put(getProfileSuccess(response.data));
  } catch (error) {
    yield put(getProfileFail(error.response.data));
    yield toast.error(error.response.data.message);
  }
}

function* updateProfileWorker(action) {
  const { payload } = action;
  try {
    const response = yield call(updateProfileApi, payload);
    yield delay(500);
    localStorage.setItem("user", JSON.stringify(response.data.data));
    yield put(updateProfileSuccess(response.data));
    yield toast.success(response.data.message);
  } catch (error) {
    yield put(updateProfileFail(error.response.data));
    yield toast.error(error.response.data.message);
  }
}

function* updatePasswordWorker(action) {
  const { payload } = action;
  try {
    const response = yield call(updatePasswordApi, payload);
    yield delay(500);
    yield put(updatePasswordSuccess(response.data));
    yield toast.success(response.data.message);
  } catch (error) {
    yield put(updatePasswordFail(error.response.data));
    yield toast.error(error.response.data.message);
  }
}

function* updateAvatarWorker(action) {
  const { payload } = action;
  try {
    const response = yield call(updateAvatarApi, payload);
    yield delay(5000);
    yield put(updateAvatarSuccess(response.data));
    yield toast.success(response.data.message);
  } catch (error) {
    yield put(updateAvatarFail(error.response.data));
    yield toast.error(error.response.data.message);
  }
}

function* deleteAvatarWorker() {
  try {
    const response = yield call(deleteAvatarApi);
    yield delay(5000);
    yield put(deleteAvatarSuccess(response.data));
    yield toast.success(response.data.message);
  } catch (error) {
    yield put(deleteAvatarFail(error.response.data));
    yield toast.error(error.response.data.message);
  }
}
export function* profileWatcher() {
  yield all([
    yield takeLatest(getProfileRequest().type, getProfileWorker),
    yield takeLatest(updateProfileRequest().type, updateProfileWorker),
    yield takeLatest(updatePasswordRequest().type, updatePasswordWorker),
    yield takeLatest(updateAvatarRequest().type, updateAvatarWorker),
    yield takeLatest(deleteAvatarRequest().type, deleteAvatarWorker),
  ]);
}

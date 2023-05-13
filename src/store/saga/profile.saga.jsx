import {
  deleteAvatarApi,
  getProfileApi,
  updateAvatarApi,
  updatePasswordApi,
  updateProfileApi,
} from "api/profile.api";
import {
  DELETE_AVATAR_REQUEST,
  GET_PROFILE_REQUEST,
  UPDATE_AVATAR_REQUEST,
  UPDATE_PASSWORD_REQUEST,
  UPDATE_PROFILE_REQUEST,
} from "constants/actions/profile.const";
import { toast } from "react-toastify";
import {
  call,
  delay,
  fork,
  put,
  takeEvery,
  takeLatest,
} from "redux-saga/effects";
import {
  deleteAvatarFail,
  deleteAvatarSuccess,
  getProfileFail,
  getProfileSuccess,
  updateAvatarFail,
  updateAvatarSuccess,
  updatePasswordFail,
  updatePasswordSuccess,
  updateProfileFail,
  updateProfileSuccess,
} from "store/actions/profile.action";

function* workerProfileSaga() {
  try {
    const response = yield call(getProfileApi);
    yield delay(500);
    yield put(getProfileSuccess(response.data));
  } catch (error) {
    yield put(getProfileFail(error.response.data));
    yield toast.error(error.response.data.message);
  }
}

function* workerUpdateProfileSaga({ payload }) {
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

function* workerUpdatePasswordSaga({ payload }) {
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

function* workerUpdateAvatarSaga({ payload }) {
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

function* workerDeleteAvatarSaga() {
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

function* watcherProfileSaga() {
  yield takeEvery(GET_PROFILE_REQUEST, workerProfileSaga);
}

function* watcherUpdateProfileSaga() {
  yield takeLatest(UPDATE_PROFILE_REQUEST, workerUpdateProfileSaga);
}

function* watcherUpdatePasswordSaga() {
  yield takeLatest(UPDATE_PASSWORD_REQUEST, workerUpdatePasswordSaga);
}

function* watcherUpdateAvatarSaga() {
  yield takeLatest(UPDATE_AVATAR_REQUEST, workerUpdateAvatarSaga);
}

function* watcherDeleteAvatarSaga() {
  yield takeLatest(DELETE_AVATAR_REQUEST, workerDeleteAvatarSaga);
}

export const profileSaga = [
  fork(watcherProfileSaga),
  fork(watcherUpdateProfileSaga),
  fork(watcherUpdatePasswordSaga),
  fork(watcherUpdateAvatarSaga),
  fork(watcherDeleteAvatarSaga),
];

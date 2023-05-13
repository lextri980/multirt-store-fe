import {
  loginApi,
  registerApi,
  resetPasswordApi,
  sendMailApi,
} from "api/auth.api";
import {
  LOGIN_REQUEST,
  LOGOUT_REQUEST,
  REGISTER_REQUEST,
  RESET_PASSWORD_REQUEST,
  SEND_MAIL_REQUEST,
} from "constants/actions/auth.const";
import { LOCALSTORAGE_TOKEN_NAME } from "constants/service.const";
import { toast } from "react-toastify";
import { push } from "redux-first-history";
import { call, delay, fork, put, takeLatest } from "redux-saga/effects";
import {
  loginFail,
  loginSuccess,
  logoutSuccess,
  registerFail,
  registerSuccess,
  resetPasswordFail,
  resetPasswordSuccess,
  sendMailFail,
  sendMailSuccess,
} from "store/actions/auth.action";

function* workerLoginSaga({ payload, callback }) {
  try {
    const response = yield call(loginApi, payload);
    if (response.status === 200) {
      yield delay(500);
      localStorage.setItem(LOCALSTORAGE_TOKEN_NAME, response.data.token);
      localStorage.setItem("user", JSON.stringify(response.data.user));
      yield put(loginSuccess(response.data));
      yield toast.success(response.data.message);
      callback();
    }
  } catch (error) {
    yield put(loginFail(error.response.data));
    yield toast.error(error.response.data.message);
  }
}

function* workerRegisterSaga({ payload }) {
  try {
    const response = yield call(registerApi, payload);
    if (response.status === 200) {
      yield delay(500);
      yield put(registerSuccess(response.data));
      yield toast.success(response.data.message);
    }
  } catch (error) {
    yield put(registerFail(error.response.data));
    yield toast.error(error.response.data.message);
  }
}

function* workerSendMailSaga({ payload, callback }) {
  try {
    const response = yield call(sendMailApi, payload);
    if (response.status === 200) {
      yield delay(500);
      yield put(sendMailSuccess(response.data));
      yield toast.success(response.data.message);
      callback();
    }
  } catch (error) {
    yield put(sendMailFail(error.response.data));
    yield toast.error(error.response.data.message);
  }
}

function* workerResetPasswordSaga({ payload, callback }) {
  try {
    const response = yield call(resetPasswordApi, payload);
    if (response.status === 200) {
      yield delay(500);
      yield put(resetPasswordSuccess(response.data));
      yield toast.success(response.data.message);
      callback();
    }
  } catch (error) {
    yield put(resetPasswordFail(error.response.data));
    yield toast.error(error.response.data.message);
  }
}

function* workerLogoutSaga({ callback }) {
  localStorage.removeItem(LOCALSTORAGE_TOKEN_NAME);
  localStorage.removeItem("user");
  yield delay(500);
  yield put(logoutSuccess());
  yield put(push("/dashboard"));
  yield toast.success("Logout successfully");
  callback();
}

function* watcherLoginSaga() {
  yield takeLatest(LOGIN_REQUEST, workerLoginSaga);
}

function* watcherRegisterSaga() {
  yield takeLatest(REGISTER_REQUEST, workerRegisterSaga);
}

function* watcherSendMailSaga() {
  yield takeLatest(SEND_MAIL_REQUEST, workerSendMailSaga);
}

function* watcherResetMailSaga() {
  yield takeLatest(RESET_PASSWORD_REQUEST, workerResetPasswordSaga);
}

function* watcherLogoutSaga() {
  yield takeLatest(LOGOUT_REQUEST, workerLogoutSaga);
}

export const authSaga = [
  fork(watcherLoginSaga),
  fork(watcherRegisterSaga),
  fork(watcherSendMailSaga),
  fork(watcherResetMailSaga),
  fork(watcherLogoutSaga),
];

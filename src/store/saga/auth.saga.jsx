import { STORAGE_TOKEN } from "constants/service.const";
import { toast } from "react-toastify";
import { all, call, delay, put, takeLatest } from "redux-saga/effects";
import {
  loginFail,
  loginRequest,
  loginSuccess,
  logoutRequest,
  logoutSuccess,
  registerFail,
  registerRequest,
  registerSuccess,
  resetPasswordFail,
  resetPasswordRequest,
  resetPasswordSuccess,
  sendMailFail,
  sendMailRequest,
  sendMailSuccess,
} from "store/actions/auth.action";
import {
  loginApi,
  registerApi,
  resetPasswordApi,
  sendMailApi,
} from "store/api/auth.api";
import { removeManyStorage, setCookie, setLocal } from "utils/storage.util";

function* loginWorker(action) {
  const { payload, callback } = action;
  try {
    const response = yield call(loginApi, payload);
    if (response.status === 200) {
      yield delay(500);
      if (payload.remember) {
        setLocal(STORAGE_TOKEN, response.data.token);
        setLocal("user", JSON.stringify(response.data.user));
      } else {
        setCookie(STORAGE_TOKEN, response.data.token);
        setCookie("user", JSON.stringify(response.data.user));
      }
      yield put(loginSuccess(response.data));
      yield toast.success(response.data.message);
      callback();
    }
  } catch (error) {
    yield put(loginFail(error.response.data));
    yield toast.error(error.response.data.message);
  }
}

function* registerWorker(action) {
  const { payload } = action;
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

function* sendMailWorker(action) {
  const { payload, callback } = action;
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

function* resetPasswordWorker(action) {
  const { payload, callback } = action;
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

function* logoutWorker(action) {
  const { callback } = action;
  removeManyStorage([STORAGE_TOKEN, "user"]);
  yield delay(500);
  yield put(logoutSuccess());
  if (callback) {
    callback();
    yield toast.success("Logout successfully");
  }
}

export function* authWatcher() {
  yield all([
    takeLatest(loginRequest().type, loginWorker),
    takeLatest(registerRequest().type, registerWorker),
    takeLatest(sendMailRequest().type, sendMailWorker),
    takeLatest(resetPasswordRequest().type, resetPasswordWorker),
    takeLatest(logoutRequest().type, logoutWorker),
  ]);
}

import { all, fork } from "redux-saga/effects";
import { authWatcher } from "./auth.saga";
import { profileWatcher } from "./profile.saga";
import { userWatcher } from "./user.saga";

function* rootSaga() {
  yield all([fork(authWatcher), fork(profileWatcher), fork(userWatcher)]);
}

export default rootSaga;

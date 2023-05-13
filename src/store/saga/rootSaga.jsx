import { all } from "redux-saga/effects";
import { authSaga } from "./auth.saga";
import { profileSaga } from "./profile.saga";
import { userSaga } from "./user.saga";

function* rootSaga() {
  yield all([...authSaga, ...profileSaga, ...userSaga]);
}

export default rootSaga;

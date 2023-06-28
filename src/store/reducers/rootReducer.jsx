import { combineReducers } from "redux";
import authReducer from "./auth.reducer";
import profileReducer from "./profile.reducer";
import userReducer from "./user.reducer";
import commonReducer from "./common.reducer";

const rootReducer = combineReducers({
  common: commonReducer,
  auth: authReducer,
  profile: profileReducer,
  user: userReducer,
});

export default rootReducer;

import { createBrowserHistory } from "history";
import { combineReducers } from "redux";
import { createReduxHistoryContext } from "redux-first-history";
import authReducer from "./auth.reducer";
import profileReducer from "./profile.reducer";
import userReducer from "./user.reducer";

const { routerReducer } = createReduxHistoryContext({
  history: createBrowserHistory(),
});

const rootReducer = combineReducers({
  router: routerReducer,
  auth: authReducer,
  profile: profileReducer,
  user: userReducer,
});

export default rootReducer;

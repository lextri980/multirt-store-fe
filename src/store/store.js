import createSagaMiddleware from "@redux-saga/core";
import { createBrowserHistory } from "history";
import { applyMiddleware, legacy_createStore as createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import { createReduxHistoryContext } from "redux-first-history";
import rootReducer from "./reducers/rootReducer";
import rootSaga from "./saga/rootSaga";

const { createReduxHistory, routerMiddleware } = createReduxHistoryContext({
  history: createBrowserHistory(),
});

const sagaMiddleware = createSagaMiddleware();

const middleware = [sagaMiddleware, routerMiddleware];

export const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(...middleware))
);

sagaMiddleware.run(rootSaga);

export const history = createReduxHistory(store);

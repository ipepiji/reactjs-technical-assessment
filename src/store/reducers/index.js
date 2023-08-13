import { combineReducers } from "redux";

import { logReducer } from "./log";

const reducers = combineReducers({
  logs: logReducer,
});

export default reducers;

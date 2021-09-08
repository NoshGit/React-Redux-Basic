import { combineReducers } from "redux";

import counterReducer from "./counterReducer";
import loggerReducer from "./loggerReducer";

const rootReducers = combineReducers({
  counter: counterReducer,
  isLogged: loggerReducer
});

export default rootReducers;
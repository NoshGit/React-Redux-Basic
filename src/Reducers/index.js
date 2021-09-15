import { combineReducers } from "redux";

import counterReducer from "./counterReducer";
import loggerReducer from "./loggerReducer";
import userReducer from "./userReducer";

const rootReducers = combineReducers({
  counter: counterReducer,
  isLogged: loggerReducer,
  users: userReducer
});

export default rootReducers;
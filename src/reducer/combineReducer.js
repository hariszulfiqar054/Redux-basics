import { combineReducers } from "redux";

import CounterReducer from "./counterRedcuer";
import GetUserReducer from "./getUserReducer";

export default combineReducers({
  counter: CounterReducer,
  getUser: GetUserReducer,
});

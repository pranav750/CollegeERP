import { combineReducers } from "redux";
import profileReducer from "./profile";
import dataReducer from "./data";

export default combineReducers({
  profile: profileReducer,
  data: dataReducer,
});

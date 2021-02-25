import { combineReducers } from "redux";
import groceries from "./groceries";
import filter from "./filter";

export default combineReducers({
  groceries,
  filter,
});

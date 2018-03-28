import { combineReducers } from "redux";

import { reducer as todoReducer } from "./scenes/App/redux/reducer";

export const reducer = combinerReducers({
  todoReducer
});

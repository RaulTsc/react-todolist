import { combineReducers } from "redux";

import todosReducer from "./scenes/App/redux/reducer";

const reducer = combineReducers({
  todosReducer
});

export default reducer;

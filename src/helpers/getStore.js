import { createStore, applyMiddleware, compose } from "redux";

import reducer from "./../reducer";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const enhancer = composeEnhancers(applyMiddleware());

export const getStore = () => {
  return createStore(reducer, enhancer);
};

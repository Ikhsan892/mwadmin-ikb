import { applyMiddleware, compose, createStore } from "redux";
import rootReducer from "./reducers";
import { createWrapper } from "next-redux-wrapper";
import { composeWithDevTools } from "redux-devtools-extension";

const initStore = (initialState = {}) => {
  const middlewares: any = []; // loggerMiddleware
  const middlewareEnhancer = composeWithDevTools(
    applyMiddleware(...middlewares)
  );

  const enhancers = [middlewareEnhancer];
  const composedEnhancers = compose(...enhancers);

  // @ts-ignore
  return createStore(rootReducer, initialState, composedEnhancers);
};

export const wrapper = createWrapper(initStore);

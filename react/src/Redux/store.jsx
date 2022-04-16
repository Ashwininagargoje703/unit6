import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import { countryReducer } from "./reducers";
import thunk from "redux-thunk";

const composeEnhancers =
  typeof window === "object" && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
     
      })
    : compose;

const middleware = [thunk];

const enhancer = composeEnhancers(
  applyMiddleware(...middleware),
 
);

const rootReducer = combineReducers({
  country: countryReducer,
});

export const store = createStore(rootReducer, enhancer);
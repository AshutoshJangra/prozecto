import * as redux from "redux";
import { problemReducer } from "./Problem-Reducer";
import { selectedRentalReducer } from "./Problem-Reducer";
import { authReducer } from "./auth-reducer";
import thunk from "redux-thunk";

export const init = () => {
  const reducer = redux.combineReducers({
    problemReducer,
    selectedRentalReducer,
    authReducer
  });
  const store = redux.createStore(reducer, redux.applyMiddleware(thunk));
  return store;
};

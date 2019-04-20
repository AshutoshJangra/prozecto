import * as redux from "redux";
import { rentalReducer } from "./Rental-Reducer";
import { selectedRentalReducer } from "./Rental-Reducer";
import { authReducer } from "./auth-reducer";
import thunk from "redux-thunk";

export const init = () => {
  const reducer = redux.combineReducers({
    rentalReducer,
    selectedRentalReducer,
    authReducer
  });
  const store = redux.createStore(reducer, redux.applyMiddleware(thunk));
  return store;
};

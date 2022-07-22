import { createStore, combineReducers } from "redux";
import { employerNameReducer } from "./Reducers/employerNameReducer";
export const configStore = () => {
  const store = createStore(
    combineReducers({
      employerNameReducer,
    }),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  );
  return store;
};

import {
  applyMiddleware,
  combineReducers,
  legacy_createStore as createStore,
} from "redux";
import { thunk } from "redux-thunk";
import { counterReducer } from "./reducers/counterReducer";
import { todoReducer } from "./reducers/todoReducer";
import { postReducer } from "./reducers/postReducer";

const rootReducer = combineReducers({
  counter: counterReducer,
  todo: todoReducer,
  post: postReducer,
});

export const store = createStore(rootReducer, applyMiddleware(thunk));

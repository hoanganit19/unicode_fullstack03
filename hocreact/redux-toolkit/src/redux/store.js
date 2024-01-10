import { configureStore } from "@reduxjs/toolkit";
import { counterSlice } from "./slices/counterSlice";
import { todoSlice } from "./slices/todoSlice";

const rootReducer = {
  counter: counterSlice.reducer,
  todo: todoSlice.reducer,
};
export const store = configureStore({
  reducer: rootReducer,
});

import { createSlice } from "@reduxjs/toolkit";
import { getTodos } from "../middlewares/todoMiddleware";
const initialState = {
  todoList: [],
  status: "idle",
  message: "",
};

export const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    updateMessage: (state, action) => {
      state.message = action.payload;
    },
  },
  extraReducers: (builder) => {
    //Request Pending
    builder.addCase(getTodos.pending, (state) => {
      state.status = "pending";
    });
    //Request Fulfilled
    builder.addCase(getTodos.fulfilled, (state, action) => {
      state.status = "success";
      state.todoList = action.payload;
    });
    //Request Rejected
    builder.addCase(getTodos.rejected, (state) => {
      state.status = "error";
    });
  },
});

// import { todoSlice } from "../slices/todoSlice";
// const { todoFetch } = todoSlice.actions;
// export const getTodos = () => {
//   return async (dispatch) => {
//     const response = await fetch(`https://jsonplaceholder.typicode.com/todos`);
//     const data = await response.json();
//     dispatch(todoFetch(data));
//   };
// };

import { createAsyncThunk } from "@reduxjs/toolkit";

export const getTodos = createAsyncThunk("getTodos", async () => {
  const response = await fetch(`https://jsonplaceholder.typicode.com/todos`);
  const data = await response.json();
  return data;
});

/*
pending
fulfilled
rejected
*/

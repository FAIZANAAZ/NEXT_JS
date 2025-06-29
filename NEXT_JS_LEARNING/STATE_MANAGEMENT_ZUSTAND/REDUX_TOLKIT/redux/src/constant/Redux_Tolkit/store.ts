import { configureStore } from "@reduxjs/toolkit";  
import  todoReducer from "../Redux_Tolkit/features/todo/todoSlice";
// todoReucer ak bydefult name he jismy hmary reducer aygy

export const store = configureStore({
  reducer: todoReducer,
});

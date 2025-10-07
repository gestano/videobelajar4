import { configureStore } from "@reduxjs/toolkit";
import coursesReducer from "./coursesSlice";

export const store = configureStore({
  reducer: {
    courses: coursesReducer,
  },
});
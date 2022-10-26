import { configureStore } from "@reduxjs/toolkit";
import passwordReducer from "../features/addPassSlice";

export const store = configureStore({
  reducer: {
    passwords: passwordReducer
  },
});

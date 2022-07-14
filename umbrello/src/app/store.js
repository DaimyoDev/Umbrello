import { configureStore } from "@reduxjs/toolkit";
import crudReducer from "../slices/crudSlice";

export const store = configureStore({
  reducer: {
    boards: crudReducer,
  },
});

import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  { id: 1, name: "FirstBoard", description: "My first board" },
  { id: 2, name: "SecondBoard", description: "My second board" },
];
const crudSlice = createSlice({
  name: "boards",
  initialState,
  reducers: {
    addBoard: (state, action) => {
      console.log(action);
    },
  },
});
export const addBoard = crudSlice.actions;
export default crudSlice.reducer;

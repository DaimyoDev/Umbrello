import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  { id: 1, name: "FirstBoard", description: "My first board" },
  {
    id: 2,
    name: "SecondBoard",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
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

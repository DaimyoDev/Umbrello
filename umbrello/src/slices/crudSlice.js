import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  {
    id: 1,
    name: "Default Board",
    description:
      "This is the default board, go to the create boards tab in the navbar to make some boards!",
  },
];

const crudSlice = createSlice({
  name: "boards",
  initialState,
  reducers: {
    addBoard: (state, action) => {
      state.push(action.payload);
    },
    deleteBoard: (state, action) => {
      const { id } = action.payload;
      const existingBoard = state.find((board) => board.id === id);
      if (existingBoard) {
        return state.filter((board) => board.id !== id);
      }
    },
    editBoard: (state, action) => {
      const { id, name, description } = action.payload;
      // eslint-disable-next-line eqeqeq
      const existingBoard = state.find((board) => board.id == id);
      console.log(existingBoard);
      if (existingBoard) {
        existingBoard.name = name;
        existingBoard.description = description;
      }
    },
  },
});
export const { addBoard, deleteBoard, editBoard } = crudSlice.actions;
export default crudSlice.reducer;

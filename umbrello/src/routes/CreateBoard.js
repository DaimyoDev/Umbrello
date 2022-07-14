import React from "react";
import AddBoard from "../components/AddBoard";
import Navbar from "../components/Navbar";
import { Provider } from "react-redux";
import { store } from "../app/store";

function CreateBoard() {
  return (
    <div>
      <Navbar />
      <Provider store={store}>
        <AddBoard />
      </Provider>
    </div>
  );
}

export default CreateBoard;

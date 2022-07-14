import React from "react";
import AddBoard from "../components/AddBoard";
import Navbar from "../components/Navbar";

function CreateBoard() {
  return (
    <div>
      <Navbar />
      <h1>CreateBoard</h1>
      <AddBoard />
    </div>
  );
}

export default CreateBoard;

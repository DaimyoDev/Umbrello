import React from "react";
import Navbar from "../components/Navbar";
import { useSelector } from "react-redux";

function Boards() {
  const boards = useSelector((state) => state.boards);
  const renderBoards = boards.map((board) => (
    <li key={board.id}>
      <h1>{board.name}</h1>
    </li>
  ));

  return (
    <div className="w-screen h-screen">
      <Navbar />
      {renderBoards}
    </div>
  );
}

export default Boards;

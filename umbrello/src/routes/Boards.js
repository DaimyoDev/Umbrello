import React from "react";
import Navbar from "../components/Navbar";
import { useSelector } from "react-redux";

function Boards() {
  const boards = useSelector((state) => state.boards);
  const renderBoards = boards.map((board) => (
    <li key={board.id} className="list-none text-center m-5 min-w-fit">
      <div className="bg-teal-400 rounded-md">
        <h1 className="m-3 pt-5 text-xl font-bold font-poppins">
          {board.name}
        </h1>
        <h1 className="m-3 pb-5 text-lg font-montserrat">
          {board.description}
        </h1>
      </div>
      <button
        className="bg-teal-400 m-5 px-8 py-2 rounded-xl text-black hover:white hover:text-white hover:bg-black
      transition-all duration-500 text-xl"
      >
        Edit Board
      </button>
    </li>
  ));

  return (
    <div className="w-screen h-screen">
      <Navbar />
      <div className="flex grow-1 flex-wrap">{renderBoards}</div>
    </div>
  );
}

export default Boards;

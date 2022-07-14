import React from "react";
import Navbar from "../components/Navbar";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { deleteBoard } from "../slices/crudSlice";
import { useDispatch } from "react-redux";

function Boards() {
  const dispatch = useDispatch();
  const handleClick = (id) => {
    dispatch(deleteBoard({ id: id }));
  };
  const boards = useSelector((state) => state.boards);
  const renderBoards = boards.map((board) => (
    <li
      key={board.id}
      className="list-none text-center m-5 min-h-fit max-w-2xl bg-teal-400 rounded-md shadow-slate-300 shadow-lg"
    >
      <h1 className="m-3 pt-5 text-xl font-bold font-poppins">{board.name}</h1>
      <h1 className="m-3 pb-3 text-lg font-raleway">{board.description}</h1>
      <Link
        to={`editboard/${board.id}`}
        className="bg-white m-5 px-8 py-2 rounded-xl text-black hover:white hover:text-white hover:bg-black
        transition-all duration-500 text-xl shadow-slate-300 shadow-lg"
      >
        Edit Board
      </Link>
      <button
        className="bg-white m-5 px-8 py-2 rounded-xl text-black hover:white hover:text-white hover:bg-black
        transition-all duration-500 text-xl shadow-slate-300 shadow-lg"
        onClick={() => handleClick(board.id)}
      >
        Delete Board
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

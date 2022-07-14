import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { editBoard } from "../slices/crudSlice";
import { Link } from "react-router-dom";

function EditBoard() {
  const { id } = useParams();
  const boards = useSelector((store) => store.boards);
  // eslint-disable-next-line eqeqeq
  const existingBoard = boards.filter((board) => board.id == id);
  const { name, description } = existingBoard[0];
  const dispatch = useDispatch();
  const [values, setValues] = useState({
    boardName: name,
    boardDesc: description,
  });
  const handleSubmit = (e) => {
    console.log(id);
    e.preventDefault();
    dispatch(
      editBoard({
        id: id,
        name: values.boardName,
        description: values.boardDesc,
      })
    );
  };

  return (
    <div className="flex flex-col items-center justify-items-center">
      <h1 className="mb-10 text-4xl font-poppins font-bold mt-10">
        Edit Board
      </h1>
      <form className="flex flex-col items-center" onSubmit={handleSubmit}>
        <label className="mb-2 text-2xl font-raleway ">Board Title:</label>
        <input
          type="text"
          required
          placeholder=" My New Board Name"
          className="w-80 bg-blue-200"
          onChange={(e) => setValues({ ...values, boardName: e.target.value })}
        ></input>
        <label className="text-2xl font-raleway">Board Description:</label>
        <textarea
          required
          className="resize-none mb-5 mt-2 h-64 w-80 bg-blue-200"
          placeholder=" My New Board Description"
          onChange={(e) => setValues({ ...values, boardDesc: e.target.value })}
        ></textarea>
        <button
          type="submit"
          className="bg-teal-400 mb-5 px-8 py-2 rounded-xl text-black hover:white hover:text-white hover:bg-black
      transition-all duration-500 text-2xl shadow-slate-300 shadow-lg font-raleway"
        >
          Submit Edit
        </button>
        <Link
          to="/boards"
          className="bg-teal-400 mb-5 px-8 py-2 rounded-xl text-black hover:white hover:text-white hover:bg-black
      transition-all duration-500 text-2xl shadow-slate-300 shadow-lg font-raleway"
        >
          Return To Boards
        </Link>
      </form>
    </div>
  );
}

export default EditBoard;

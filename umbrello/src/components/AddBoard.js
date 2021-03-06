import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addBoard } from "../slices/crudSlice";

function AddBoard() {
  const dispatch = useDispatch();
  const [values, setValues] = useState({
    boardName: "",
    boardDesc: "",
  });
  const handleSubmit = (e) => {
    console.log("clicked!");
    e.preventDefault();
    dispatch(
      addBoard({
        id: Math.random(),
        name: values.boardName,
        description: values.boardDesc,
      })
    );
  };

  return (
    <div className="flex flex-col items-center justify-items-center">
      <h1 className="mb-10 text-4xl font-poppins font-bold mt-10">
        Add a New Board
      </h1>
      <form className="flex flex-col items-center" onSubmit={handleSubmit}>
        <label className="mb-2 text-2xl font-raleway">Board Title:</label>
        <input
          type="text"
          required
          placeholder=" My Board Name"
          className="w-80 bg-blue-200"
          onChange={(e) => setValues({ ...values, boardName: e.target.value })}
        ></input>
        <label className="text-2xl font-raleway">Board Description:</label>
        <textarea
          required
          className="resize-none mb-5 mt-2 bg-blue-200 h-64 w-80"
          placeholder=" My Board Description"
          onChange={(e) => setValues({ ...values, boardDesc: e.target.value })}
        ></textarea>
        <button
          type="submit"
          className="bg-teal-400 mb-5 px-8 py-2 rounded-xl text-black hover:white hover:text-white hover:bg-black
      transition-all duration-500 text-2xl shadow-slate-300 shadow-lg font-raleway"
        >
          Add a Board
        </button>
      </form>
    </div>
  );
}

export default AddBoard;

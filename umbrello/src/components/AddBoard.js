import React from "react";

function AddBoard() {
  return (
    <div className="flex flex-col items-center justify-items-center">
      <h1 className="mb-10 text-4xl font-poppins font-bold mt-10">
        Add a New Board
      </h1>
      <form className="flex flex-col items-center">
        <label className="mb-2 text-2xl">Board Title:</label>
        <input
          type="text"
          required
          placeholder="My Board Name"
          className="border w-80"
        ></input>
        <label className="text-2xl">Board Description:</label>
        <textarea
          required
          className="resize-none mb-5 mt-2 border h-64 w-80"
          placeholder="My Board Description"
        ></textarea>
        <button
          className="bg-teal-400 mb-5 px-8 py-2 rounded-xl text-black hover:white hover:text-white hover:bg-black
      transition-all duration-500 text-2xl"
        >
          Add a Board
        </button>
      </form>
    </div>
  );
}

export default AddBoard;

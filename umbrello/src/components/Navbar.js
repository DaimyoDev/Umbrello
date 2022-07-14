import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  return (
    <div className="flex flex-auto flex-row justify-evenly bg-teal-400 h-20 items-center align-center">
      <h1 className="font-poppins font-bold text-4xl pulsing-animation">
        <span className="text-5xl italic">U</span>mbrello
      </h1>
      <ul className="flex flex-row">
        <li className="mr-16 mt-2 font-raleway font-light">
          <Link
            to="/"
            className="bg-white px-8 py-2 rounded-xl hover:bg-black hover:text-white transition-all duration-500 shadow-slate-300 shadow-lg"
          >
            Home
          </Link>
        </li>
        <li className="mr-16 mt-2 font-raleway font-light">
          <Link
            to="/boards"
            className="bg-white px-8 py-2 rounded-xl hover:bg-black hover:text-white transition-all duration-500 shadow-slate-300 shadow-lg"
          >
            Boards
          </Link>
        </li>
        <li className="mr-16 mt-2 font-raleway font-light">
          <Link
            to="/createboards"
            className="bg-white px-8 py-2 rounded-xl hover:bg-black hover:text-white transition-all duration-500 shadow-slate-300 shadow-lg"
          >
            Create Boards
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default Navbar;

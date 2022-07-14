import React from "react";
import Navbar from "../components/Navbar";
import "../components/Navbar.css";

function Home() {
  return (
    <div className="w-screen h-screen">
      <Navbar />
      <h1 className="m-10 font-poppins font-bold text-6xl text-center">
        Welcome to the Homepage of{" "}
        <span className="pulsing-animation">
          <span className="text-7xl italic">U</span>
          mbrello!
        </span>
      </h1>
      <h1 className="m-10 font-raleway text-2xl text-center">
        This is a CRUD Application using React and Redux along with Tailwind
        CSS. The navigation bar has two buttons; "Boards" and "Create Boards".
        The "Boards" button allows you to see all the created boards you've made
        during this session. When you refresh the page your boards will reset to
        the default board. You can also edit boards by clicking on the "Edit
        Board" button under each board.
      </h1>
      <h1 className="m-10 font-raleway text-2xl text-center">
        You can delete boards by clicking the "Delete Button" under each board.
        The "Create Boards" button allows you to create boards that will appear
        in the boards page.
      </h1>
      <h1 className="m-10 font-raleway font-bold text-3xl text-center">
        Thanks for checking out the project!
      </h1>
    </div>
  );
}

export default Home;

import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav
      className="bg-teal-600 p-4 text-white flex justify-between items-center"
      style={{ boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)" }}
    >
      <Link to="/" className="font-bold text-xl hover:text-teal-300">
        MERN Blog
      </Link>
      <div>
        <Link
          to="/create"
          className="mx-2 px-3 py-2 rounded hover:bg-teal-700 hover:text-white transition"
          style={{ backgroundColor: "#ffffff", color: "#004d4d" }}
        >
          Create Post
        </Link>
        <Link
          to="/login"
          className="mx-2 px-3 py-2 rounded hover:bg-teal-700 hover:text-white transition"
          style={{ backgroundColor: "#ffffff", color: "#004d4d" }}
        >
          Login
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;

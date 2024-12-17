import React from "react";

function Navbar() {
  return (
    <div className="navbar flex justify-between items-center p-4 ">
      <div className="logo">
        <img
          className="hover:cursor-pointer"
          src="/images/brand_logo.png"
          alt="Logo"
        />
      </div>
      <div className="nav-items">
        <ul className="flex items-center gap-4">
          <li
            className="hover:underline hover:text-red-500 hover:cursor-pointer"
            href="#"
          >
            Home
          </li>
          <li
            className="hover:underline hover:text-red-500 hover:cursor-pointer"
            href="#"
          >
            About Us
          </li>
          <li
            className="hover:underline hover:text-red-500 hover:cursor-pointer"
            href="#"
          >
            Contact
          </li>
          <li
            className="hover:underline hover:text-red-500 hover:cursor-pointer"
            href="#"
          >
            cart
          </li>
        </ul>
      </div>
      <div className="navbutton">
        <button className="bg-red-700 text-white py-1 px-2 rounded-md">
          Login
        </button>
      </div>
    </div>
  );
}

export default Navbar;

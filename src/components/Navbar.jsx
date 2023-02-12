import React from "react";
import { Link } from "react-router-dom";
import Logo from "../assets/Logo.svg";

function Navbar() {
  return (
    <nav className="flex justify-between items-center px-28 py-9">
      <img
        src={Logo}
        alt="Little Lemon Logo"
        role="Little Lemon Logo"
        width={200}
        height={54}
      />
      <ul className="flex justify-between">
        <Link to="/" className="font-medium">
          Home
        </Link>
        <Link to="/about" className="ml-7 font-medium">
          About
        </Link>
        <Link to="/menu" className="ml-7 font-medium">
          Menu
        </Link>
        <Link to="/reservation" className="ml-7 font-medium">
          Reservations
        </Link>
        <Link to="/order" className="ml-7 font-medium">
          Order Online
        </Link>
        <Link to="/login" className="ml-7 font-medium">
          Login
        </Link>
      </ul>
    </nav>
  );
}

export default Navbar;

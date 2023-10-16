import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div>
      <ul className="flex space-x-4 bg-gray-200 drop-shadow-md my-5 p-5">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/findpartner">Find Partner</Link>
          </li>
        <li>
          <Link to="/guide">Guide</Link>
        </li>
        <li>
          <Link to="/about">About Us</Link>
        </li>
        <li>
          <Link to="/faq">FAQ</Link>
          </li>
        <li>
          <Link to="/contact">Contact</Link></li>
      </ul>
    </div>
  );
}

export default Navbar;

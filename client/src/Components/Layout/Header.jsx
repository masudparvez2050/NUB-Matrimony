import React, { useState } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState("English");

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const changeLanguage = (language) => {
    setSelectedLanguage(language);
    setIsOpen(false);
  };

  return (
    <header className=" p-3 max-w-screen-xl mx-auto">
      <div className="flex items-center justify-between">
        <div className="flex items-center">
          <img
            src="/src/assets/images/NUBFAVI.png" // Add your logo source here
            alt="Logo"
            className=" h-[5rem] w-[12rem] " // Customize the logo size
          />
          {/* <div className="text-white text-xl font-bold">Your Logo Name</div> */}
        </div>
        <div className="hidden sm:flex space-x-4">
          <Link to="/">Home</Link>
          <Link to="/findpartner">Find Partner</Link>
          <Link to="/guide">Guide</Link>
          <Link to="/about">About Us</Link>
          <Link to="/faq">FAQ</Link>
          <Link to="/contact">Contact</Link>
        </div>
        <div className="flex items-center">
          {/* ------------start Drop down button--------------- */}
          <div className="relative inline-block text-left mr-2">
            <button
              onClick={toggleDropdown}
              className="p-2  rounded-lg hover:bg-pink-400 hover:text-white border-2 border-pink-700"
            >
              {selectedLanguage}
            </button>
            {isOpen && (
              <div className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
                <div className="py-1">
                  <a
                    href="#"
                    onClick={() => changeLanguage("Bangla")}
                    className="block px-4 py-2 text-gray-800 hover:bg-pink-200"
                  >
                    Bangla
                  </a>
                  <a
                    href="#"
                    onClick={() => changeLanguage("English")}
                    className="block px-4 py-2 text-gray-800 hover:bg-pink-200"
                  >
                    English
                  </a>
                </div>
              </div>
            )}
          </div>

          {/* ------------end Drop down button--------------- */}

          {/* <button className="hidden sm:flex   hover:bg-blue-100 px-4 py-2 rounded-full  border-gray-500 border">
            Button 1
          </button> */}
          <button className="hidden sm:flex hover:shadow-lg px-4 py-2 rounded-xl border-violet-600 text-violet-600 border-2">
            Login
          </button>
          <button className="sm:hidden" onClick={toggleMenu}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 text-black cursor-pointer"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {isMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="sm:hidden">
          <ul>
            <li>
              {" "}
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/findpartner">Find Partner</Link>
            </li>
            <li>
              {" "}
              <Link to="/guide">Guide</Link>
            </li>
            <li>
              <Link to="/about">About Us</Link>
            </li>
            <li>
              {" "}
              <Link to="/faq">FAQ</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
};

export default Header;

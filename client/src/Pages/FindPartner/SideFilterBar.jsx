import { useState } from "react";

function SideFilterBar() {
  const [isCollapsed1, setIsCollapsed1] = useState(false);
  const [isCollapsed2, setIsCollapsed2] = useState(false);
  const [isCollapsed3, setIsCollapsed3] = useState(false);
  const [isCollapsed4, setIsCollapsed4] = useState(false);
  const [isCollapsed5, setIsCollapsed5] = useState(false);
  const [isCollapsed6, setIsCollapsed6] = useState(false);

  const handleClick1 = () => {
    setIsCollapsed1(!isCollapsed1);
  };
  const handleClick2 = () => {
    setIsCollapsed2(!isCollapsed2);
  };
  const handleClick3 = () => {
    setIsCollapsed3(!isCollapsed3);
  };
  const handleClick4 = () => {
    setIsCollapsed4(!isCollapsed4);
  };
  const handleClick5 = () => {
    setIsCollapsed5(!isCollapsed5);
  };
  const handleClick6 = () => {
    setIsCollapsed6(!isCollapsed6);
  };
  return (
    <>
      <div className=" w-80 border h-screen overflow-auto ">
        <h1 className="text-center mt-4 text-lg font-bold">Filers</h1>

        <div className="w-60 p-4 ">
          {/* -----start menu tab------- */}
          <div className=" w-[280px] mb-5 ">
            <div className="mb-2">
              <button
                className="w-full bg-white drop-shadow p-3 flex justify-between items-center hover:bg-gray-100 rounded-md"
                onClick={handleClick1}
              >
                <span>Genarel</span>
                <span className="text-lg transition-all duration-500 ease-in-out">
                  {isCollapsed1 ? "-" : "+"}
                </span>
              </button>
              {isCollapsed1 && (
                <div className="p-4 bg-white transition-all duration-500 ease-in-out transition-max-h">
                  <h1>General Filter</h1>
                </div>
              )}
            </div>
          </div>
          {/* -----End menu tab------- */}
          {/* -----start menu tab------- */}
          <div className=" w-[280px] mb-5">
            <div className="mb-2">
              <button
                className="w-full bg-white drop-shadow p-3 flex justify-between items-center hover:bg-gray-100 rounded-md"
                onClick={handleClick2}
              >
                <span>Address</span>
                <span className="text-lg transition-all duration-500 ease-in-out">
                  {isCollapsed2 ? "-" : "+"}
                </span>
              </button>
              {isCollapsed2 && (
                <div className="p-4 bg-white transition-all duration-500 ease-in-out transition-max-h">
                  <h1>Address Filter</h1>
                </div>
              )}
            </div>
          </div>
          {/* -----End menu tab------- */}
          {/* -----start menu tab------- */}
          <div className=" w-[280px] mb-5">
            <div className="mb-2">
              <button
                className="w-full bg-white drop-shadow p-3 flex justify-between items-center hover:bg-gray-100 rounded-md"
                onClick={handleClick3}
              >
                <span>Education</span>
                <span className="text-lg transition-all duration-500 ease-in-out">
                  {isCollapsed3 ? "-" : "+"}
                </span>
              </button>
              {isCollapsed3 && (
                <div className="p-4 bg-white transition-all duration-500 ease-in-out transition-max-h">
                  <h1>Education Filter</h1>
                </div>
              )}
            </div>
          </div>
          {/* -----End menu tab------- */}
          {/* -----start menu tab------- */}
          <div className=" w-[280px] mb-5">
            <div className="mb-2">
              <button
                className="w-full bg-white drop-shadow p-3 flex justify-between items-center hover:bg-gray-100 rounded-md"
                onClick={handleClick4}
              >
                <span>Personal</span>
                <span className="text-lg transition-all duration-500 ease-in-out">
                  {isCollapsed4 ? "-" : "+"}
                </span>
              </button>
              {isCollapsed4 && (
                <div className="p-4 bg-white transition-all duration-500 ease-in-out transition-max-h">
                  <h1>Personal Filter</h1>
                </div>
              )}
            </div>
          </div>
          {/* -----End menu tab------- */}
          {/* -----start menu tab------- */}
          <div className=" w-[280px] mb-5">
            <div className="mb-2">
              <button
                className="w-full bg-white drop-shadow p-3 flex justify-between items-center hover:bg-gray-100 rounded-md"
                onClick={handleClick5}
              >
                <span>Profession</span>
                <span className="text-lg transition-all duration-500 ease-in-out">
                  {isCollapsed5 ? "-" : "+"}
                </span>
              </button>
              {isCollapsed5 && (
                <div className="p-4 bg-white transition-all duration-500 ease-in-out transition-max-h">
                  <h1>Profession Filter</h1>
                </div>
              )}
            </div>
          </div>
          {/* -----End menu tab------- */}
          {/* -----start menu tab------- */}
          <div className=" w-[280px] mb-5">
            <div className="mb-2">
              <button
                className="w-full bg-white drop-shadow p-3 flex justify-between items-center hover:bg-gray-100 rounded-md"
                onClick={handleClick6}
              >
                <span>Other</span>
                <span className="text-lg transition-all duration-500 ease-in-out">
                  {isCollapsed6 ? "-" : "+"}
                </span>
              </button>
              {isCollapsed6 && (
                <div className="p-4 bg-white transition-all duration-500 ease-in-out transition-max-h">
                  <h1>Other Filter</h1>
                </div>
              )}
            </div>
          </div>
          {/* -----End menu tab------- */}
          <br />
        </div>
        <div className="flex justify-center gap-10 items-center w-auto">
          <button className="border px-5 py-2 rounded-lg bg-gradient-to-r from-indigo-500  to-pink-500 text-white">
            Search
          </button>
          <button className="border px-6 py-2 rounded-lg text-pink-500 border-pink-600 ">
            Clear
          </button>
        </div>
      </div>
    </>
  );
}
export default SideFilterBar;

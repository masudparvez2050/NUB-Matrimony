import React from "react";
import { Link } from "react-router-dom";

function CreateBio() {
  return (
    <div className="p-3 max-w-screen-xl mx-auto flex-col text-center md:text-left justify-center items-center mb-20">
      <h1 className="font-bold text-2xl text-[#39182a] md:text-4xl">
        Create biodata in NUB Matrimony
        <br /> Completely free of cost
      </h1>
      {/* ---------------------------------- */}
      <div className="mt-1 pt-1 flex justify-center md:justify-start text-xs text-white md:text-2xl md:mt-10">
        <Link
          to="/"
          className="border-2 mr-4 rounded-full p-4 bg-rose-500 text-white font-bold hover:bg-rose-600 mt-4 sm:mt-0"
        >
          + Create Your Biodata
        </Link>

        <Link
          to="/"
          className="border-2 mr-4  rounded-full p-4 bg-rose-500 text-white font-bold hover:bg-rose-600 mt-4 sm:mt-0"
        >
          How to Crete Biodata
        </Link>
      </div>
      {/* ---------------------------------- */}

      <div className="mb-20"></div>
    </div>
  );
}

export default CreateBio;

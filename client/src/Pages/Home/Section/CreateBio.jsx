import React from "react";
import { Link } from "react-router-dom";

function CreateBio() {
  return (
    <div className="p-3 max-w-screen-xl mx-auto flex-col text-center justify-center items-center mb-20">
      <h1 className="font-bold text-4xl text-indigo-900 m-10 p-3">
        Create biodata in NUB Matrimony Completely free of cost
      </h1>
      <div className="flex justify-center">
        <Link
          to="/"
          className="border-2 mr-4 rounded-full p-4 bg-rose-500 text-white font-bold hover:bg-rose-600"
        >
          + Create Your Biodata
        </Link>
        <Link
          to="/"
          className="border-2 mr-4 rounded-full p-4 bg-rose-500 text-white font-bold hover:bg-rose-600"
        >
          How to Crete Biodata
        </Link>
      </div>
    </div>
  );
}

export default CreateBio;

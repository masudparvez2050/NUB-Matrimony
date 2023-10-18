import React from "react";

function Hero() {
  return (
    <div className="flex justify-center items-center text-center max-w-screen-xl mx-auto mb-20">
      <div className="mt-20">
        {" "}
        <h1 className=" text-7xl mb-5 text-indigo-900 font-bold">
          Bangladeshi Islamic
        </h1>
        <h1 className=" text-7xl font-bold text-rose-600 mb-10">Matrimony</h1>
        <p className=" font-bold text-2xl text-gray-600 mb-10">
          It is now easy to find a religious life partner in your own location
        </p>
        <div className="w-[800px] items-center flex justify-center">
          <img src="/src/assets/images/hadith-bg-top.svg" alt="" />
        </div>
        <div className="bg-white rounded-3xl w-[800px] p-5 border border-violet-700 opacity-60">
          <p className="text-gray-900 font-medium text-lg">
            When a person gets married he has completed half of his deen, so let
            him fear Allah with <br />
            regard to the other half. - <br />
            <span className="text-pink-800">(Shu’ab al-Eemaan 5486)</span>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Hero;

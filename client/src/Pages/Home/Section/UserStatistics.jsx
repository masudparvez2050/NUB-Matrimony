import React from "react";

function UserStatistics() {
  return (
    <div className="p-3 max-w-screen-xl mx-auto flex-col text-center justify-center items-center mb-20">
      <h1 className="font-bold text-4xl text-indigo-900 m-5 p-3">
        NUB Matrimony User Statistics
      </h1>

      <div className="md:flex justify-center items-center xl:justify-between flex flex-wrap">
        <div className="flex-col justify-center items-center bg-white p-10 h-[250px] md:w-[295px] w-[350px] border rounded-xl hover:shadow-xl drop-shadow-md mb-4 mr-4">
          <div className="flex justify-center items-center mb-5">
            <img src="/src/assets/images/couple.svg" alt="" className="w-28" />
          </div>
          <p className="font-bold m-3">Total Groom and Bride's Biodatas</p>
          <h1 className="text-4xl font-bold">5748</h1>
        </div>

        <div className="flex-col justify-center items-center bg-white p-10 h-[250px] md:w-[295px] w-[350px] border rounded-xl hover:shadow-xl drop-shadow-md mb-4 mr-4">
          <div className="flex justify-center items-center mb-5">
            <img src="/src/assets/images/male.svg" alt="" className="w-20" />
          </div>
          <p className="font-bold m-3">Total Groom's Biodatas</p>
          <h1 className="text-4xl font-bold">2343</h1>
        </div>
        <div className="flex-col justify-center items-center bg-white p-10 h-[250px] md:w-[295px] w-[350px] border rounded-xl hover:shadow-xl drop-shadow-md mb-4 mr-4">
          <div className="flex justify-center items-center mb-5">
            <img src="/src/assets/images/female.svg" alt="" className="w-20" />
          </div>
          <p className="font-bold m-3">Total Bride's Biodatas</p>
          <h1 className="text-4xl font-bold">3403</h1>
        </div>
        <div className="flex-col justify-center items-center bg-white p-10 h-[250px] md:w-[295px] w-[350px] border rounded-xl hover:shadow-xl drop-shadow-md mb-4 mr-4">
          <div className="flex justify-center items-center mb-5">
            <img src="/src/assets/images/married.svg" alt="" className="w-28" />
          </div>
          <p className="font-bold m-3">Total Successful Marrriages</p>
          <h1 className="text-4xl font-bold">1435+</h1>
        </div>
      </div>
    </div>
  );
}

export default UserStatistics;

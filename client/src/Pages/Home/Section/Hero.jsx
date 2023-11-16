import React from "react";

function Hero() {
  return (
    <div className="max-w-screen-xl mx-auto flex-col text-center justify-center items-center mb-2 md:mb-20">

      <div className="w-[300px] m-10 flex justify-center md:m-20 my-30 md:w-[600px]"><img src="./src/assets/images/Metrimonititle.png"/></div>


      <div className="mt-10 flex justify-start md:mt-20">
        {" "}
        {/* <div className="w-[800px] items-center flex justify-center">
          <img src="/src/assets/images/hadith-bg-top.svg" alt="" />
        </div> */}
        <div className="bg-[#fccff0] rounded-3xl  p-5 border border-[#f789d2] opacity-80 flex justify-center md:mx-48 mx-10">
          <p className="text-gray-900 font-medium text-sm md:text-lg">
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

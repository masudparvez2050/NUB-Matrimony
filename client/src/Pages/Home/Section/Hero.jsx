import React from "react";
import { useLanguage } from "../../../contextAPI/ChangeLanguage";
import "./Hero.css";
import SnowEffect from "../../../Components/SnowEffect/SnowEffect";

function Hero() {
  const { changeLanguage } = useLanguage();
  return (
    <div className="max-w-screen-xl mx-auto flex-col text-center justify-center items-center mb-2 md:mb-10">
      <div
        className={
          changeLanguage
            ? "w-[300px] mt-10  flex justify-center md:mt-10 my-30 md:w-[700px]"
            : "w-[300px] mt-10  flex justify-center md:my-20 my-30 md:w-[700px]"
        }
      >
        <SnowEffect />
        <img
          className="ml-20 md:ml-0"
          src={
            changeLanguage
              ? "./src/assets/images/Metrimonititle_Bangla-v2.png"
              : "./src/assets/images/Metrimonititle.png"
          }
        />{" "}
      </div>

      <div className="mt-10 flex justify-start md:mt-10">
        {" "}
        {/* <div className="w-[800px] items-center flex justify-center">
          <img src="/src/assets/images/hadith-bg-top.svg" alt="" />
        </div> */}
        <div className="bg-[#fccff0] mx-8 md:mx-0 rounded-3xl  p-5 border border-[#f789d2] opacity-80 flex justify-center md:justify-start md:w-[680px]">
          <p className="text-gray-900 font-semibold text-sm md:text-xl">
            {changeLanguage
              ? "যখন একজন ব্যক্তি বিয়ে করে তখন তার অর্ধেক দ্বীন পূর্ণ হয়। অতএব আল্লাহকে ভয় করুন।"
              : "When a person gets married he has completed half of his deen, so let him fear Allah with"}

            <br />
            {changeLanguage
              ? "আপনার সহধর্মীনিকে সম্মান প্রদর্শন করুন।"
              : "regard to the other half. -"}
            <br />
            <span className="text-pink-800">
              {changeLanguage
                ? "সূরা : আল-ইমরান, আয়াত : ৫৪৮৬"
                : "(Shu’ab al-Eemaan 5486)"}
            </span>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Hero;

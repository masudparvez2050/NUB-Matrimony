// import React from "react";

import Footer from "../../Components/Layout/Footer";
import Header from "../../Components/Layout/Header";
import CreateBio from "./Section/CreateBio";
import Hero from "./Section/Hero";
import UserStatistics from "./Section/UserStatistics";
import HowToWorks from "./Section/HowToWorks";

function Home() {
  return (
    <div>
      <div
        className="
      md:bg-[url('/src/assets/images/NUB-MetrimonyBG.png')]
      bg-[url('/src/assets/images/bg-mobile-view.png')]
      bg-cover
      "
      >
        {" "}
        <Header />
        <Hero />
        <CreateBio />
      </div>

      <UserStatistics />
      <HowToWorks />
      <Footer />
    </div>
  );
}

export default Home;

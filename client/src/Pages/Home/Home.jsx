// import React from "react";

import Footer from "../../Components/Layout/Footer";
import Header from "../../Components/Layout/Header";
import CreateBio from "./Section/CreateBio";
import Hero from "./Section/Hero";
import UserStatistics from "./Section/UserStatistics"
import HowToWorks from "./Section/HowToWorks"

function Home() {
  return (
    <div className="bg-[url('/src/assets/images/bg.png')] bg-cover">
      <div>
        {" "}
        <Header />
        <Hero />
        <CreateBio/>
        <UserStatistics/>
        <HowToWorks/>
        <Footer />
      </div>
    </div>
  );
}

export default Home;

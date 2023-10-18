// import React from "react";

import Footer from "../../Components/Layout/Footer";
import Header from "../../Components/Layout/Header";
import Hero from "./Section/Hero";

function Home() {
  return (
    <div className="bg-[url('/src/assets/images/bg.png')] bg-cover">
      <div>
        {" "}
        <Header />
        <Hero />
        <Footer />
      </div>
    </div>
  );
}

export default Home;

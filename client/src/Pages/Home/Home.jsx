// import React from "react";

import Footer from "../../Components/Layout/Footer";
import Header from "../../Components/Layout/Header";
import Hero from "./Section/Hero";

function Home() {
  return (
    <div>
      {" "}
      <Header />
      <h1 className="text-3xl font-bold underline">This is Home page.</h1>
      <h1 className="text-3xl font-bold underline">এটি একটি হোম পেজ</h1>
      <p></p>
      <Hero />
      <Footer />
    </div>
  );
}

export default Home;

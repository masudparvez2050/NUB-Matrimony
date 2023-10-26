import React from "react";
import Footer from "../../Components/Layout/Footer";
import Header from "../../Components/Layout/Header";
import SideFilterBar from "./SideFilterBar";
import ProfileSection from "./ProfileSection";

function FindPartner() {
  return (
    <div>
      <div className=" shadow-md">
        <Header />
      </div>
      <div className="flex">
        <SideFilterBar />
        <div className="flex-1 ">
          <ProfileSection />
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default FindPartner;

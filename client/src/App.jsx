// import { useState } from "react";

import "./App.css";
import AboutUs from "./Pages/AboutUs/AboutUs";
import Contact from "./Pages/Contact/Contact";
import FAQ from "./Pages/FAQ/FAQ";
import FindPartner from "./Pages/FindPartner/FindPartner";
import Guide from "./Pages/Guide/Guide";
import Home from "./Pages/Home/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { LanguageProvider } from "./contextAPI/ChangeLanguage";
import Team from "./Pages/Team/Team";
import Login from "./Pages/Authentication/Login";
import Registration from "./Pages/Authentication/Registration";
import ResetPassword from "./Pages/Authentication/ResetPassword";
import { Toaster } from "react-hot-toast";
import UserProfile from "./Pages/test";
import { AuthProvider } from "./contextAPI/authContext";
import Profile from "./Pages/Profile";

Toaster;
function App() {
  return (
    <>
      <Toaster position="top-center" reverseOrder={false} />
      <AuthProvider>
        {" "}
        <LanguageProvider>
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<AboutUs />} />
              <Route path="/findpartner" element={<FindPartner />} />
              <Route path="/faq" element={<FAQ />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/guide" element={<Guide />} />
              <Route path="/team" element={<Team />} />
              <Route path="/login" element={<Login />} />
              <Route path="/registration" element={<Registration />} />
              <Route path="/reset" element={<ResetPassword />} />
              <Route path="/profile/*" element={<Profile />} />
              <Route path="/test" element={<UserProfile />} />
            </Routes>
          </BrowserRouter>
        </LanguageProvider>
      </AuthProvider>
    </>
  );
}

export default App;

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

function App() {
  return (
    <>
      <LanguageProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<AboutUs />} />
            <Route path="/findpartner" element={<FindPartner />} />
            <Route path="/faq" element={<FAQ />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/guide" element={<Guide />} />
          </Routes>
        </BrowserRouter>
      </LanguageProvider>
    </>
  );
}

export default App;

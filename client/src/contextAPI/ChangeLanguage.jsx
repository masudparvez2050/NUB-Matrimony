/* eslint-disable react/prop-types */
/* eslint-disable react-refresh/only-export-components */
import { createContext, useContext, useState } from "react";

const LanguageContext = createContext();

export function useLanguage() {
  return useContext(LanguageContext);
}

export function LanguageProvider({ children }) {
  const [changeLanguage, setChangeLanguage] = useState(true);

  const bn = () => {
    //setChangeLanguage((prevLanguage) => !prevLanguage);
    setChangeLanguage(true);
  };
  const en = () => {
    //setChangeLanguage((prevLanguage) => !prevLanguage);
    setChangeLanguage(false);
  };

  return (
    <LanguageContext.Provider value={{ changeLanguage, bn, en }}>
      {children}
    </LanguageContext.Provider>
  );
}
